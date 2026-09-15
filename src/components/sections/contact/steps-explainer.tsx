import { Reveal } from '@/components/motion/reveal';

const STEPS = [
  {
    number: '01',
    color: 'text-mi-orange',
    title: 'The demo',
    body: 'See end-to-end booking, agentic disruption recovery and automated expense management live.',
  },
  {
    number: '02',
    color: 'text-mi-amber-text',
    title: 'Mutual NDA',
    body: 'We sign a non-disclosure agreement so booking-level data and Miraee contract rates can be shared securely.',
  },
  {
    number: '03',
    color: 'text-mi-rust',
    title: 'The audit',
    body: 'Send us 12 months of your data, and we return your exact savings number within two weeks.',
  },
];

export function StepsExplainer() {
  return (
    <div className="mt-[clamp(32px,5vw,56px)] grid gap-5 border-t border-mi-cream/14 pt-8">
      {STEPS.map((step, i) => (
        <Reveal key={step.number} delay={i * 80} className="grid grid-cols-[auto_1fr] items-start gap-4.5">
          <b className={`pt-1 font-mi-body text-[.8rem] font-bold tracking-[0.1em] ${step.color}`}>{step.number}</b>
          <div>
            <h3 className="m-0 font-mi-accent text-[1.08rem] leading-[1.3] font-bold tracking-[-0.02em]">
              {step.title}
            </h3>
            <p className="mt-2 font-mi-body text-[.96rem] leading-[1.6] text-mi-cream/74">{step.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
