import { Reveal } from '@/components/motion/reveal';

const ERAS = [
  {
    label: 'THE 1990s',
    body: 'The travel agent era. High touch, no scale.',
    active: false,
  },
  {
    label: 'THE 2000s–2010s',
    body: 'The traditional TMC and OBT era. Search-and-click portals.',
    active: false,
  },
  {
    label: '2015 TO PRESENT',
    body: 'The digital UI/UX era. Consumer-grade apps, but the traveler still does every step.',
    active: false,
  },
  {
    label: '2026 AND BEYOND',
    body: 'The agentic era. You state your intent. Autonomous agents handle the searching, booking, paying, coordinating, recovering and expense.',
    active: true,
  },
];

export function LongReadFeature() {
  return (
    <section className="bg-mi-cream py-[clamp(56px,8vw,110px)] text-background-dark">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal className="font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-background-dark/50">
          GUIDES &amp; REPORTS · /resources/guides
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4.5 max-w-[24ch] text-balance font-mi-accent text-[clamp(1.9rem,3.8vw,3.2rem)] leading-[1.04] font-bold tracking-[-0.04em] text-background-dark">
            Go deep on the shift to agentic travel.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-[48ch] font-mi-body text-[1.04rem] leading-[1.6] text-background-dark/72">
            Long-form research for the teams rebuilding how their company travels.
          </p>
        </Reveal>

        <div className="mt-[clamp(40px,6vw,72px)] border-t border-background-dark/18 pt-8">
          <Reveal className="font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-background-dark/50">
            BLOG · POST TEMPLATE
          </Reveal>
          <Reveal delay={60}>
            <h3 className="mt-4 max-w-[30ch] text-balance font-mi-accent text-[clamp(1.4rem,2.6vw,2.2rem)] leading-[1.15] font-bold tracking-[-0.035em] text-background-dark">
              From travel agents to agentic AI: the four eras of corporate travel
            </h3>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-3 font-mi-body text-[.9rem] leading-[1.5] font-semibold text-background-dark/60">
              Srinivas Mothey, Chief Business Officer, Tabhi
            </p>
          </Reveal>

          <div className="mt-9 grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-6">
            {ERAS.map((era, i) => (
              <Reveal
                key={era.label}
                delay={i * 80}
                className="border-t-2 pt-4.5"
                style={{ borderColor: era.active ? '#F25C05' : 'rgb(from var(--color-background-dark) r g b / .2)' }}
              >
                <b
                  className="block font-mi-body text-[.68rem] font-bold tracking-[0.14em]"
                  style={{ color: era.active ? '#CC3600' : 'rgb(from var(--color-background-dark) r g b / .5)' }}
                >
                  {era.label}
                </b>
                <p className="mt-3 font-mi-accent text-[1rem] leading-[1.5] font-medium tracking-[-0.01em] text-background-dark">
                  {era.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
