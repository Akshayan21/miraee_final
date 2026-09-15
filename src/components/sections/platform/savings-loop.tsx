import { Reveal } from '@/components/motion/reveal';

const STEPS = [
  { color: '#F25C05', label: '01 EMPLOYEE CHOOSES SMART', body: 'Miraee surfaces a better option and a price to beat.' },
  { color: 'var(--color-mi-amber-text)', label: '02 COMPANY SAVES', body: 'Savings are captured and visible in real time.' },
  { color: 'var(--color-mi-green-text)', label: '03 EMPLOYEE EARNS', body: 'Rewards land in the Miraee Wallet.' },
  { color: '#DE5533', label: '04 ADOPTION GROWS', body: 'More trips on Miraee, more savings next quarter.' },
];

export function SavingsLoop() {
  return (
    <section className="bg-[radial-gradient(70%_70%_at_15%_20%,rgba(242,92,5,.14),rgba(17,14,9,0)_65%)] py-[clamp(64px,9vw,120px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal>
          <h2 className="max-w-[26ch] font-mi-accent text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.06] font-bold tracking-[-0.035em]">
            Savings that compound on their own.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-5 max-w-[52ch] text-pretty font-mi-body text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.6] text-mi-cream/74">
            Miraee does not enforce savings with restrictive policy alone. It rewards the
            behaviour that creates them.
          </p>
        </Reveal>

        <div className="mt-[clamp(32px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(230px,100%),1fr))] gap-4">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.label}
              delay={i * 80}
              className="rounded-3xl border border-mi-cream/12 bg-mi-cream/3.5 p-6"
            >
              <b
                className="block font-mi-body text-[.66rem] font-bold tracking-[0.12em]"
                style={{ color: step.color }}
              >
                {step.label}
              </b>
              <p className="mt-3 font-mi-body text-[.95rem] leading-[1.6] text-mi-cream/74">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] items-start gap-8 border-t border-mi-cream/12 pt-10">
          <Reveal>
            <b className="block bg-gradient-to-r from-mi-orange via-mi-amber to-mi-rust bg-clip-text font-mi-display text-[clamp(3rem,7vw,5.6rem)] leading-none font-bold tracking-[-0.02em] text-transparent">
              20–30%
            </b>
            <h3 className="mt-3 font-mi-accent text-[1.5rem] leading-[1.1] font-bold tracking-[-0.03em]">
              Savings, defined once.
            </h3>
          </Reveal>
          <Reveal delay={80}>
            <p className="font-mi-body text-[1.02rem] leading-[1.6] text-mi-cream/80">
              Savings of 20 to 30% against published fares on comparable itineraries, achieved
              through wholesale rates and direct supplier connections.
            </p>
            <p className="mt-4 font-mi-body text-[.82rem] leading-[1.55] text-mi-cream/50">
              Based on itineraries booked, compared with publicly available fares for the same
              route, travel date, cabin and booking window. Individual results may vary by
              route, lead time and travel mix.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
