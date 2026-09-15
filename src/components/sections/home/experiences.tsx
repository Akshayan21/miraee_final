import { useEffect, useRef } from 'react';
import { Reveal } from '@/components/motion/reveal';
import { CountUp } from '@/components/motion/count-up';

const TILES = [
  {
    caption: 'Festivals and culture',
    src: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=70',
    offset: false,
  },
  {
    caption: 'Once-in-a-trip moments',
    src: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=1200&q=70',
    offset: true,
  },
  {
    caption: 'Local performances',
    src: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1200&q=70',
    offset: false,
  },
  {
    caption: 'Markets and makers',
    src: 'https://images.unsplash.com/photo-1568849676085-51415703900f?auto=format&fit=crop&w=1200&q=70',
    offset: true,
  },
  {
    caption: 'The bleisure weekend',
    src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=70',
    offset: false,
  },
  {
    caption: 'Food and discovery',
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=70',
    offset: true,
  },
];

// Custom scroll-linked horizontal pan rig: no ScrollTrigger/Lenis. Only the
// tile row is pinned — the wrapper around it is a scroll runway sized to
// (row height + pan distance), and the row sticks to the top of the viewport
// while that runway scrolls past. The heading/stats above stay in normal
// flow so nothing ever gets taller than the viewport and clips. Each frame we
// read the wrapper's live getBoundingClientRect().top, derive a 0-1 target
// progress from it, ease the current value toward that target, and use the
// eased value to drive translateX on the track (and a small translateY drift
// per card) directly via style writes.
export function Experiences() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    if (!wrapper || !sticky || !track) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let distance = 0;
    let current = 0;
    let rafId = 0;
    let pinState: 'before' | 'during' | 'after' | null = null;

    const measure = () => {
      distance = Math.max(track.scrollWidth - window.innerWidth + 40, 0);
      const stickyHeight = sticky.getBoundingClientRect().height;
      wrapper.style.height = reduceMotion ? '' : `${stickyHeight + distance}px`;
    };

    // Manual pin: position:sticky is unreliable here because a distant
    // ancestor (<main>) sets overflow:hidden, which quietly breaks sticky
    // for every descendant. Toggling fixed/absolute ourselves off the same
    // getBoundingClientRect() read sidesteps that entirely.
    const setPinState = (next: 'before' | 'during' | 'after', wrapperRect: DOMRect) => {
      if (pinState === next) return;
      pinState = next;
      if (next === 'before') {
        sticky.style.position = 'static';
        sticky.style.top = '';
        sticky.style.left = '';
        sticky.style.width = '';
        sticky.style.transform = '';
      } else if (next === 'during') {
        // Center the row in the viewport instead of pinning it flush to the
        // top — the row is shorter than the viewport, so top-pinning left a
        // large dead band of plain background below it for the whole pan.
        sticky.style.position = 'fixed';
        sticky.style.top = '50%';
        sticky.style.left = `${wrapperRect.left}px`;
        sticky.style.width = `${wrapperRect.width}px`;
        sticky.style.transform = 'translateY(-50%)';
      } else {
        const stickyHeight = sticky.getBoundingClientRect().height;
        sticky.style.position = 'absolute';
        sticky.style.top = `${distance + (window.innerHeight - stickyHeight) / 2}px`;
        sticky.style.left = '0';
        sticky.style.width = '100%';
        sticky.style.transform = '';
      }
    };

    const apply = (progress: number) => {
      track.style.transform = `translate3d(${-distance * progress}px, 0, 0)`;
      tileRefs.current.forEach((tile, i) => {
        if (!tile) return;
        const base = TILES[i].offset ? 40 : 0;
        const drift = TILES[i].offset ? -60 : 60;
        tile.style.transform = `translate3d(0, ${base + drift * progress}px, 0)`;
      });
    };

    measure();

    if (reduceMotion) {
      apply(0);
      return;
    }

    const tick = () => {
      const rect = wrapper.getBoundingClientRect();
      const scrollable = distance > 0 ? distance : 1;

      let target: number;
      if (rect.top > 0) {
        target = 0;
        setPinState('before', rect);
      } else if (rect.top <= -distance) {
        target = 1;
        setPinState('after', rect);
      } else {
        target = Math.min(Math.max(-rect.top / scrollable, 0), 1);
        setPinState('during', rect);
      }

      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.0005) current = target;

      apply(current);
      rafId = requestAnimationFrame(tick);
    };
    tick();

    const onResize = () => measure();
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section className="bg-[radial-gradient(80%_70%_at_12%_0%,var(--color-glow-80),rgba(17,14,9,0)_60%)] py-[clamp(72px,10vw,140px)] pb-[clamp(48px,7vw,88px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal className="flex items-center gap-3 font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
              EXPERIENCES
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 max-w-[24ch] text-balance font-mi-accent text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.06] font-bold tracking-[-0.035em]">
                Business travel, meet the trips people love.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160} className="flex items-center gap-2.5 font-mi-body text-[.7rem] font-bold tracking-[0.14em] text-mi-cream/45">
            SCROLL TO EXPLORE
            <i className="block h-0.5 w-7 bg-gradient-to-r from-mi-orange to-mi-amber" />
          </Reveal>
        </div>

        <div className="mt-[clamp(32px,4vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] items-start gap-6">
          <Reveal className="rounded-[32px] border border-mi-orange/35 bg-[linear-gradient(140deg,rgba(242,92,5,.14),rgba(17,14,9,0)_72%)] p-7">
            <div className="font-mi-body text-[.62rem] font-bold tracking-[0.14em] text-mi-amber-text">ONE TAP AWAY</div>
            <p className="mt-4 text-pretty font-mi-body text-base leading-[1.6] text-mi-cream/80">
              Not bookable anywhere else. The city after 5pm, the festival, the family weekend
              bolted onto a work trip. Booked and expensed separately, one tap.
            </p>
            <p className="mt-5 font-mi-body text-[.84rem] leading-[1.5] font-semibold text-mi-cream/55">
              Hyperlocal experiences come from Abhee, the group's experiential marketplace.
            </p>
          </Reveal>
          <div className="grid grid-cols-3 self-stretch border-t border-mi-cream/14">
            <div className="border-r border-mi-cream/14 py-6 pr-4">
              <b className="block font-mi-display text-[clamp(1.8rem,3.4vw,3rem)] leading-none font-bold tracking-[-0.02em] text-mi-orange">
                <CountUp value={10} suffix="M+" />
              </b>
              <span className="mt-2.5 block font-mi-body text-[.68rem] leading-[1.4] font-bold tracking-[0.12em] text-mi-cream/50">
                EXPERIENCES
              </span>
            </div>
            <div className="border-r border-mi-cream/14 px-4 py-6">
              <b className="block font-mi-display text-[clamp(1.8rem,3.4vw,3rem)] leading-none font-bold tracking-[-0.02em] text-mi-amber-text">
                <CountUp value={100} suffix="K" />
              </b>
              <span className="mt-2.5 block font-mi-body text-[.68rem] leading-[1.4] font-bold tracking-[0.12em] text-mi-cream/50">
                CREATORS
              </span>
            </div>
            <div className="py-6 pl-4">
              <b className="block font-mi-display text-[clamp(1.8rem,3.4vw,3rem)] leading-none font-bold tracking-[-0.02em] text-mi-rust">
                1 TAP
              </b>
              <span className="mt-2.5 block font-mi-body text-[.68rem] leading-[1.4] font-bold tracking-[0.12em] text-mi-cream/50">
                TO BOOK
              </span>
            </div>
          </div>
        </div>
      </div>

      <div ref={wrapperRef} className="relative mt-[clamp(32px,4vw,56px)]">
        <div ref={stickyRef} className="overflow-hidden py-2">
          <div ref={trackRef} className="flex w-max gap-6 px-[clamp(20px,4vw,64px)] pt-12 pb-20">
            {TILES.map((tile, i) => (
              <figure
                key={tile.caption}
                ref={(el) => {
                  tileRefs.current[i] = el;
                }}
                className="relative m-0 aspect-4/5 w-[clamp(230px,24vw,340px)] overflow-hidden rounded-[32px] border border-mi-cream/12 bg-mi-cream/4"
              >
                <img src={tile.src} alt={tile.caption} className="size-full object-cover" loading="lazy" />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/35 to-transparent"
                />
                <figcaption className="pointer-events-none absolute right-5 bottom-9 left-5 font-mi-accent text-[1.05rem] leading-[1.2] font-bold tracking-[-0.03em] text-white [text-shadow:0_2px_14px_rgba(17,14,9,.8)]">
                  {tile.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
