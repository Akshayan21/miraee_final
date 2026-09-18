import { Reveal } from '@/components/motion/reveal';
import { CountUp } from '@/components/motion/count-up';

const TILES = [
  {
    caption: 'Balloon-filled skies',
    src: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=70',
    offset: false,
  },
  {
    caption: 'Once-in-a-trip moments',
    src: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=1200&q=70',
    offset: true,
  },
  {
    caption: 'Adventures together',
    src: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1200&q=70',
    offset: false,
  },
  {
    caption: 'Quiet moments outdoors',
    src: 'https://images.unsplash.com/photo-1568849676085-51415703900f?auto=format&fit=crop&w=1200&q=70',
    offset: true,
  },
  {
    caption: 'The bleisure weekend',
    src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=70',
    offset: false,
  },
  {
    caption: 'The open road',
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=70',
    offset: true,
  },
];

export function Experiences() {
  return (
    <section className="bg-[radial-gradient(80%_70%_at_12%_0%,var(--color-glow-80),rgba(17,14,9,0)_60%)] py-[clamp(56px,7vw,96px)] pb-[clamp(48px,7vw,88px)]">
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
            SWIPE OR SCROLL TO EXPLORE
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
            <p className="mt-5 font-mi-body text-[.84rem] leading-[1.5] font-semibold text-mi-cream/75">
              Hyperlocal experiences come from Abhee, the group's experiential marketplace.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 self-stretch border-t border-mi-cream/14 sm:grid-cols-3">
            <div className="border-r border-mi-cream/14 py-6 pr-4">
              <b className="block font-mi-display text-[clamp(1.8rem,3.4vw,3rem)] leading-none font-bold tracking-[-0.02em] text-mi-orange">
                <CountUp value={10} suffix="M+" />
              </b>
              <span className="mt-2.5 block font-mi-body text-[.68rem] leading-[1.4] font-bold tracking-[0.12em] text-mi-cream/75">
                EXPERIENCES
              </span>
            </div>
            <div className="border-r border-mi-cream/14 px-4 py-6">
              <b className="block font-mi-display text-[clamp(1.8rem,3.4vw,3rem)] leading-none font-bold tracking-[-0.02em] text-mi-amber-text">
                <CountUp value={100} suffix="K" />
              </b>
              <span className="mt-2.5 block font-mi-body text-[.68rem] leading-[1.4] font-bold tracking-[0.12em] text-mi-cream/75">
                CREATORS
              </span>
            </div>
            <div className="py-6 pl-4">
              <b className="block font-mi-display text-[clamp(1.8rem,3.4vw,3rem)] leading-none font-bold tracking-[-0.02em] text-mi-rust">
                1 TAP
              </b>
              <span className="mt-2.5 block font-mi-body text-[.68rem] leading-[1.4] font-bold tracking-[0.12em] text-mi-cream/75">
                TO BOOK
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-[clamp(32px,4vw,56px)]">
        <div role="region" aria-label="Travel experiences gallery" tabIndex={0} className="overflow-x-auto overscroll-x-contain py-2 focus-visible:outline-2 focus-visible:outline-mi-orange">
          <div className="flex w-max gap-6 px-[clamp(20px,4vw,64px)] pt-3 pb-6">
            {TILES.map((tile) => (
              <figure
                key={tile.caption}
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
