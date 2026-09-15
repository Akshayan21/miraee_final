import { Reveal } from '@/components/motion/reveal';

const CARDS = [
  {
    title: 'POLICY THAT FITS EACH ENTITY',
    body: 'Entity-level policy, currency and data residency, set per office rather than forced into one mould.',
  },
  {
    title: 'RULES THAT INHERIT THEMSELVES',
    body: 'Grade-based policy carries across entities automatically, so seniority sets the rules, not manual setup.',
  },
  {
    title: 'PEOPLE DATA ALWAYS CURRENT',
    body: 'HRIS keeps cost centres and managers up to date without anyone maintaining them by hand.',
  },
];

export function GlobalMobility() {
  return (
    <section
      className="py-[clamp(56px,8vw,110px)]"
      style={{ background: 'radial-gradient(70% 70% at 20% 30%,rgba(128,155,255,.12),rgba(17,14,9,0) 65%)' }}
    >
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] items-start gap-[clamp(28px,4vw,56px)]">
          <div>
            <Reveal className="font-mi-body text-[.7rem] font-bold tracking-[0.14em] text-[var(--color-mi-blue-text)]">
              GLOBAL MOBILITY
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4.5 max-w-[16ch] font-mi-accent text-[clamp(1.8rem,3.4vw,2.9rem)] leading-[1.06] font-bold tracking-[-0.035em]">
                One platform, every border.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-[42ch] text-pretty font-mi-body text-[1.04rem] leading-[1.6] text-mi-cream/74">
                Cross-border travel for distributed teams, with local rules, currency and data
                residency handled per office.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-3.5">
            {CARDS.map((card, i) => (
              <Reveal
                key={card.title}
                delay={i * 80}
                className="rounded-[24px] border border-mi-cream/12 bg-mi-cream/3.5 p-[22px]"
              >
                <h3 className="m-0 font-mi-body text-[.72rem] font-bold tracking-[0.12em] text-mi-cream/50">
                  {card.title}
                </h3>
                <p className="mt-2.5 font-mi-body text-[.96rem] leading-[1.6] text-mi-cream/82">
                  {card.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
