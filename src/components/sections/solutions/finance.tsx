import { Reveal } from '@/components/motion/reveal';

const PAINS = [
  {
    title: 'Fragmented spend',
    body: 'A dozen vendors across five systems creates blind spots and spending no one is tracking.',
  },
  {
    title: 'Administrative drain',
    body: 'Finance loses thousands of hours a year chasing missing receipts and fixing GL coding errors.',
  },
];

const CARDS = [
  {
    title: 'BETTER FARES, ON EVERY SEARCH',
    body: 'Miraee compares Tabhi wholesale, your own contracts, Miraee deals and third-party content on every search.',
    stat: '20–30%',
    statLabel: 'ILLUSTRATIVE FARE SAVING',
    color: 'text-mi-amber-text',
  },
  {
    title: 'SAVINGS THE TRAVELLERS HELP YOU MAKE',
    body: 'Each traveller sees a Price-to-Beat. Choose cheaper and part of the saving goes to their wallet, driven by behaviour rather than policing.',
    stat: '5–10%',
    statLabel: 'ILLUSTRATIVE FURTHER REDUCTION',
    color: 'text-mi-green-text',
  },
  {
    title: 'ADMIN AND RECOVERY, AUTOMATED',
    body: 'Receipts captured, coded to the right GL and policy-checked automatically. Miraee recovers unused tickets, unclaimed refunds and duplicate reimbursements.',
    stat: '1,200+',
    statLabel: 'ILLUSTRATIVE ADMIN HOURS SAVED A YEAR',
    color: 'text-mi-orange',
  },
];

export function Finance() {
  return (
    <section id="finance" className="py-[clamp(56px,8vw,110px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] items-start gap-[clamp(28px,4vw,64px)]">
          <div>
            <Reveal className="font-mi-body text-[.7rem] font-bold tracking-[0.14em] text-mi-green-text">
              FOR FINANCE
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4.5 max-w-[20ch] font-heading text-section font-semibold text-balance">
                Unprecedented visibility and cost control.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-[44ch] text-pretty font-mi-body text-[1.04rem] leading-[1.6] text-mi-cream/74">
                Stop savings leakage, automate reconciliation, and drive hard-dollar savings
                straight to the bottom line.
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-8 border-t border-mi-cream/14 pt-6">
              <div className="font-mi-body text-[.68rem] font-bold tracking-[0.14em] text-mi-cream/45">
                THE PAINS YOU KNOW
              </div>
              <div className="mt-4.5 grid gap-4">
                {PAINS.map((pain) => (
                  <div key={pain.title}>
                    <h4 className="m-0 font-mi-accent text-[.98rem] leading-[1.3] font-bold">
                      {pain.title}
                    </h4>
                    <p className="mt-1.5 font-mi-body text-[.93rem] leading-[1.6] text-mi-cream/70">
                      {pain.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={320}>
              <a
                href="/contact"
                className="mt-6 inline-block border-b border-mi-orange/50 pb-1 font-mi-body text-[.88rem] font-bold text-mi-orange no-underline"
              >
                Explore the Finance solution →
              </a>
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
                <p className="mt-3 font-mi-body text-[.97rem] leading-[1.6] text-mi-cream/82">
                  {card.body}
                </p>
                <span className="mt-3.5 flex flex-wrap items-baseline gap-2.5">
                  <span className={`font-mi-display text-[1.4rem] font-bold ${card.color}`}>
                    {card.stat}
                  </span>
                  <span className="font-mi-body text-[.62rem] font-bold tracking-[0.1em] text-mi-cream/50">
                    {card.statLabel}
                  </span>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
