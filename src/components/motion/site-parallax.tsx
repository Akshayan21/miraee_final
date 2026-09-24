import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IMAGE_SELECTOR = 'main img:not([data-parallax-owned] img, [data-parallax-owned])';
// Bordered, rounded panels are this codebase's card signature
// (e.g. `rounded-[28px] border border-mi-cream/10 ...`). Interactive
// controls (buttons/links/inputs) share that styling but shouldn't tilt.
const CARD_SELECTOR =
  'main [class*="rounded-"][class*="border"]:not(button, a, input, select, textarea, [role="button"], [data-parallax-owned], [data-parallax-owned] *)';
const MIN_CARD_SIZE = 80;
const MIN_IMAGE_SIZE = 64; // excludes logos/icons (e.g. the 18px-tall wordmark in the journey card)

/** Mounted once at the app root. Gives every photo and card panel on every
 * page a scroll-linked 3D drift/tilt, without each section wiring it up
 * itself. Re-scans after route changes, and again once everything has
 * finished loading — below-the-fold grid columns can still be settling
 * their final width on the first pass, which under-measures elements and
 * leaves them unwired. */
export function SiteParallax() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let tweens: gsap.core.Tween[] = [];
    let disposed = false;

    const killAll = () => {
      tweens.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
        (tween.targets()[0] as HTMLElement | undefined)?.style.removeProperty('transform');
        (tween.targets()[0] as HTMLElement | undefined)?.style.removeProperty('will-change');
      });
      tweens = [];
    };

    // Drives the transform through GSAP's own tween/CSS engine (on GSAP's shared
    // ticker — the same one Lenis already runs on) instead of hand-writing a new
    // `transform` string on every scroll tick. GSAP's setter is a cached, minimal
    // write per property; doing that across 20-40 wired elements per page is
    // materially cheaper than each one rebuilding and reassigning a full template
    // string independently every frame.
    const wire = (el: Element, strength: 'image' | 'card') => {
      const node = el as HTMLElement;
      // rotateY (turns the element in space) + z (pops it toward/away from the
      // viewer) is what actually reads as "3D" — rotateX alone just tilts the
      // top/bottom edge and looks flat head-on.
      const depth =
        strength === 'image'
          ? { y: 110, z: 160, rotateY: 20, rotateX: 10, scale: 0.18 }
          : { y: 60, z: 90, rotateY: 12, rotateX: 6, scale: 0.08 };
      node.style.willChange = 'transform';
      const tween = gsap.to(node, {
        ease: 'none',
        transformPerspective: 1200,
        keyframes: {
          '0%': { y: -depth.y / 2, z: -depth.z / 2, rotateY: -depth.rotateY / 2, rotateX: depth.rotateX / 2, scale: 1 },
          '50%': { y: 0, z: 0, rotateY: 0, rotateX: 0, scale: 1 + depth.scale / 2 },
          '100%': { y: depth.y / 2, z: -depth.z / 2, rotateY: depth.rotateY / 2, rotateX: -depth.rotateX / 2, scale: 1 },
        },
        scrollTrigger: {
          trigger: node,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      tweens.push(tween);
    };

    const scan = () => {
      if (disposed) return;
      // Rebuild from scratch each time so a rescan doesn't double-wire on top of the
      // previous pass.
      killAll();

      const cards = new Set(document.querySelectorAll<HTMLElement>(CARD_SELECTOR));
      // Drop nested matches so a card inside a card isn't double-tilted.
      for (const card of cards) {
        let parent = card.parentElement;
        while (parent) {
          if (cards.has(parent as HTMLElement)) {
            cards.delete(card);
            break;
          }
          parent = parent.parentElement;
        }
      }
      cards.forEach((card) => {
        if (card.closest('button, a, [role="button"]')) return;
        const rect = card.getBoundingClientRect();
        if (rect.width < MIN_CARD_SIZE || rect.height < MIN_CARD_SIZE) return;
        wire(card, 'card');
      });
      const wiredCards = [...cards];
      document.querySelectorAll<HTMLElement>(IMAGE_SELECTOR).forEach((img) => {
        // Skip if this image sits anywhere inside an already-wired card (not just as a
        // direct child) — otherwise the card and the image each get their own scroll
        // transform and the two compound, popping the image past the card's rounded edge.
        if (wiredCards.some((card) => card.contains(img))) return;
        const rect = img.getBoundingClientRect();
        if (rect.width < MIN_IMAGE_SIZE || rect.height < MIN_IMAGE_SIZE) return;
        wire(img, 'image');
      });
      ScrollTrigger.refresh();
    };

    // A timeout rather than requestAnimationFrame: React 18 StrictMode's dev-only
    // double-effect cancels an in-flight rAF from the first pass before it ever fires.
    // 500ms gives below-the-fold grid layout time to settle before the first measure.
    const initialTimer = window.setTimeout(scan, 500);
    // Late images/fonts can still resize things after that; catch it once more.
    const onLoad = () => window.setTimeout(scan, 200);
    window.addEventListener('load', onLoad);

    return () => {
      disposed = true;
      window.clearTimeout(initialTimer);
      window.removeEventListener('load', onLoad);
      killAll();
    };
  }, [pathname]);

  return null;
}
