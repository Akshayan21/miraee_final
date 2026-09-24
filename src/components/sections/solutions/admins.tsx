import { Reveal } from '@/components/motion/reveal';

const PAINS = [
  {
    title: 'Policing every trip',
    body: 'Compliance means checking bookings by hand and fixing the ones that slipped through after the fact.',
  },
  {
    title: 'A program spread thin',
    body: 'Onboarding gaps, budget, adoption and compliance live in different places, so proving the program works means gathering reports.',
  },
];

const CARDS = [
  {
    title: 'POLICY THAT ENFORCES ITSELF',
    body: 'Rules apply at search and inherit by grade, so trips arrive in policy rather than being fixed later. Nothing publishes until you approve it.',
  },
  {
    title: 'THE WHOLE PROGRAM AT A GLANCE',
    body: 'Onboarding gaps, budget, adoption, compliance and exceptions on one Overview, with duty of care on the Live Map.',
  },
  {
    title: 'PROOF IT IS WORKING',
    body: 'The Agentic ROI Dashboard shows hours and dollars saved and the auto-approval rate, so the program’s value is never a guess.',
  },
];

export function Admins() {
  return (
    <section id="admins" className="bg-mi-cream py-[clamp(56px,8vw,110px)] text-background-dark">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] items-start gap-[clamp(28px,4vw,64px)]">
          <div>
            <Reveal className="font-mi-body text-[.7rem] font-bold tracking-[0.14em] text-mi-scarlet">
              FOR ADMINS
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4.5 max-w-[18ch] font-heading text-background-dark text-section font-semibold text-balance">
                Set the rule once. Let it run.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-[44ch] text-pretty font-mi-body text-[1.04rem] leading-[1.6] text-background-dark/74">
                Policy applies at search, so out-of-policy trips rarely get built, and the whole
                program sits on one screen instead of across a dozen.
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
                Explore the Admin solution →
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
