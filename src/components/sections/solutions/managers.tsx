import { Reveal } from '@/components/motion/reveal';

const PAINS = [
  {
    title: 'Approval overload',
    body: 'Every trip pings you for sign-off, most of them routine, and the queue never really clears.',
  },
  {
    title: 'No read on the team',
    body: 'Seeing how the team is tracking on spend means pulling a report, or asking around and waiting.',
  },
];

const CARDS = [
  {
    title: 'THE WHOLE TEAM IN ONE VIEW',
    body: 'Team Analytics shows spend against budget, KPIs met, travel outcomes and spend insights together.',
  },
  {
    title: 'APPROVALS THAT TAKE A CLICK',
    body: 'Routine trips self-book inside policy. Only real exceptions reach you, each with estimated cost, exact policy overage and an AI confidence score.',
  },
  {
    title: 'REWARDS YOU CONTROL PER PERSON',
    body: 'Allocate the team’s points pool by employee, recognising the people booking smart and on-policy.',
  },
];

export function Managers() {
  return (
    <section id="managers" className="bg-mi-cream py-[clamp(56px,8vw,110px)] text-background-dark">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] items-start gap-[clamp(28px,4vw,64px)]">
          <div>
            <Reveal className="font-mi-body text-[.7rem] font-bold tracking-[0.14em] text-mi-scarlet">
              FOR MANAGERS
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4.5 max-w-[20ch] font-heading text-background-dark text-section font-semibold text-balance">
                Run the team, not the paperwork.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-[44ch] text-pretty font-mi-body text-[1.04rem] leading-[1.6] text-background-dark/74">
                Routine trips book themselves inside policy. Only the exceptions reach you, with
                the context to decide in one glance.
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-8 border-t border-background-dark/14 pt-6">
              <div className="font-mi-body text-[.68rem] font-bold tracking-[0.14em] text-background-dark/50">
                THE PAINS YOU KNOW
              </div>
              <div className="mt-4.5 grid gap-4">
                {PAINS.map((pain) => (
                  <div key={pain.title}>
                    <h4 className="m-0 font-mi-accent text-[.98rem] leading-[1.3] font-bold text-background-dark">
                      {pain.title}
                    </h4>
                    <p className="mt-1.5 font-mi-body text-[.93rem] leading-[1.6] text-background-dark/70">
                      {pain.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={320}>
              <a
                href="/contact"
                className="mt-6 inline-block border-b border-mi-scarlet/45 pb-1 font-mi-body text-[.88rem] font-bold text-mi-scarlet no-underline"
              >
                Explore the Manager solution →
              </a>
            </Reveal>
          </div>
          <div className="grid gap-3.5">
            {CARDS.map((card, i) => (
              <Reveal
                key={card.title}
                delay={i * 80}
                className="on-light-surface rounded-[24px] border border-background-dark/14 bg-white p-[22px]"
              >
                <h3 className="m-0 font-mi-body text-[.72rem] font-bold tracking-[0.12em] text-background-dark/50">
                  {card.title}
                </h3>
                <p className="mt-3 font-mi-body text-[.97rem] leading-[1.6] text-background-dark/80">
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
