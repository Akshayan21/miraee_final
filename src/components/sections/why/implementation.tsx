import { Reveal } from '@/components/motion/reveal';

const STEPS = [
  {
    step: '01 POLICY',
    body: 'Your rules, entities, grades and approval chains are configured.',
    who: 'Who: your travel and finance leads.',
    active: true,
  },
  {
    step: '02 CONNECT',
    body: 'SSO, HRIS, ERP and card networks are linked.',
    who: 'Who: IT, one working session.',
    active: false,
  },
  {
    step: '03 PILOT',
    body: 'One entity or region runs live alongside the incumbent.',
    who: 'Who: a single team.',
    active: false,
  },
  {
    step: '04 ROLL OUT',
    body: 'Program-wide, with the pilot numbers as the baseline.',
    who: 'Who: everyone.',
    active: false,
  },
];

export function Implementation() {
  return (
    <section className="bg-mi-cream py-[clamp(64px,9vw,120px)] text-background-dark">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal className="font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-background-dark/50">
          IMPLEMENTATION AND ONBOARDING
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4.5 font-heading text-background-dark text-section font-semibold text-balance">
            Live in weeks, not quarters.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-5 max-w-[54ch] text-pretty font-mi-body text-[1.04rem] leading-[1.6] text-background-dark/72">
            Pilots reach full deployment in as little as 90 days, and nothing has to be switched
            off to start.
          </p>
        </Reveal>
        <div className="mt-[clamp(32px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(230px,100%),1fr))] gap-6">
          {STEPS.map((item, i) => (
            <Reveal
              key={item.step}
              delay={240 + i * 80}
              className="border-t-2 pt-4.5"
              style={{ borderColor: item.active ? '#F25C05' : 'rgb(from var(--color-background-dark) r g b / .2)' }}
            >
              <b className="block font-mi-body text-[.68rem] font-bold tracking-[0.14em] text-mi-scarlet">
                {item.step}
              </b>
              <p className="mt-3.5 font-mi-body text-[.96rem] leading-[1.6] text-background-dark/76">
                {item.body}
              </p>
              <span className="mt-3 block font-mi-body text-[.82rem] leading-[1.4] font-semibold text-background-dark/50">
                {item.who}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
