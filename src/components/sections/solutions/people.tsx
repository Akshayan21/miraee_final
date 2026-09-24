import { Reveal } from '@/components/motion/reveal';

const PAINS = [
  {
    title: 'Unequal perks',
    body: 'Traditional travel tools only reward the 10% who travel heavily, leaving the rest of the company behind.',
  },
  {
    title: 'Duty-of-care gaps',
    body: 'During a disruption, knowing exactly where your people are is too often a guess based on outdated systems.',
  },
];

export function People() {
  return (
    <section id="people" className="py-[clamp(56px,8vw,110px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] items-start gap-[clamp(28px,4vw,64px)]">
          <div>
            <Reveal className="font-mi-body text-[.7rem] font-bold tracking-[0.14em] text-[#FF69AD]">
              FOR HR TEAMS
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4.5 max-w-[20ch] font-heading text-section font-semibold text-balance">
                A meaningful benefit for every employee.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-[44ch] text-pretty font-mi-body text-[1.04rem] leading-[1.6] text-mi-cream/74">
                Turn corporate travel from an administrative chore into a rewarding perk, with the
                highest standard of safety and duty of care.
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
                Explore the People solution →
              </a>
            </Reveal>
          </div>
          <div className="grid gap-3.5">
            <Reveal
              delay={80}
              className="rounded-[24px] border border-mi-green/35 bg-[linear-gradient(140deg,rgba(0,191,98,.12),rgba(17,14,9,0)_75%)] p-[22px]"
            >
              <h3 className="m-0 font-mi-body text-[.72rem] font-bold tracking-[0.12em] text-mi-green-text">
                WALLETS AND REWARDS FOR ALL
              </h3>
              <p className="mt-3 font-mi-body text-[.97rem] leading-[1.6] text-mi-cream/86">
                Employees earn rewards for smart booking choices, landing in a digital wallet they
                can spend in the burn store, on flight upgrades or on personal travel at exclusive
                fares. A retention lever for the whole workforce, not just frequent flyers.
              </p>
            </Reveal>
            <Reveal
              delay={160}
              className="rounded-[24px] border border-mi-cream/12 bg-mi-cream/3.5 p-[22px]"
            >
              <h3 className="m-0 font-mi-body text-[.72rem] font-bold tracking-[0.12em] text-mi-cream/50">
                MODERN DUTY OF CARE
              </h3>
              <p className="mt-3 font-mi-body text-[.97rem] leading-[1.6] text-mi-cream/82">
                Every traveller is located by their itinerary, with travel alerts, weather and
                disruption monitoring per PNR. SOS intervention on hand, and managers and HR
                notified only when it truly matters, always with an audit trail.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
