import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NeuralVortex from '@/components/ui/neural-vortex';
import { useTheme } from '@/hooks/use-theme';

gsap.registerPlugin(ScrollTrigger);

export const VORTEX_THEME = {
  dark: {
    colors: ['#450e14', '#c74400', '#e55602'] as [string, string, string],
    opacity: 0.95,
    overlay:
      'linear-gradient(100deg, rgba(10,6,4,.92) 0%, rgba(10,6,4,.7) 32%, rgba(10,6,4,.15) 58%, rgba(10,6,4,.55) 100%)',
  },
  light: {
    colors: ['#c74400', '#e55602', '#450e14'] as [string, string, string],
    opacity: 0.85,
    overlay:
      'linear-gradient(100deg, rgba(251,249,246,.96) 0%, rgba(251,249,246,.82) 30%, rgba(251,249,246,.2) 56%, rgba(251,249,246,.45) 100%)',
  },
} as const;

/** Animated neural-vortex gradient used behind every page hero, with a
 * scroll-linked 3D parallax: the layer drifts and tilts in depth as the
 * hero scrolls past, instead of moving 1:1 with the page. */
export function HeroBackground() {
  const { theme } = useTheme();
  const vortex = VORTEX_THEME[theme];
  const depthRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const depth = depthRef.current;
    const layer = layerRef.current;
    const section = depth?.closest('section');
    if (!depth || !layer || !section) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // GSAP's own tween/CSS engine (shared ticker, cached setters) rather than
    // hand-writing a `transform` string on every scroll tick.
    const tween = gsap.to(layer, {
      ease: 'none',
      keyframes: {
        '0%': { y: -90, z: -100, rotateX: 5, rotateY: -8, scale: 1.11 },
        '50%': { y: 0, z: 0, rotateX: 0, rotateY: 0, scale: 1.16 },
        '100%': { y: 90, z: -100, rotateX: -5, rotateY: 8, scale: 1.11 },
      },
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div ref={depthRef} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" style={{ perspective: '1400px' }}>
      <div ref={layerRef} className="absolute inset-0 will-change-transform" style={{ transformStyle: 'preserve-3d' }}>
        <NeuralVortex className="pointer-events-none" colors={vortex.colors} opacity={vortex.opacity} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ backgroundImage: vortex.overlay }} />
      </div>
    </div>
  );
}
