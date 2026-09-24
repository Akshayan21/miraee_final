import { Reveal } from '@/components/motion/reveal';

const ITEMS = [
  {
    title: '01 COMPLETE THE WORK',
    body: 'An agent that answers is a chatbot. Ours finish the job and report what they did.',
    accent: true,
  },
  {
    title: '02 AUTONOMY INSIDE LIMITS',
    body: 'Every agent carries a written boundary. Past it, a human decides.',
    accent: false,
  },
  {
    title: '03 A PERSON WHEN IT MATTERS',
    body: 'Escalation is a feature, not a failure. The human arrives with the trip attached.',
    accent: false,
  },
  {
    title: '04 THE TRAVELER IS THE TEST',
    body: 'If it is not better for the person on the trip, it is not shipped.',
    accent: false,
  },
];

export function HowWeBuild() {
  return (
    <section className="bg-[radial-gradient(70%_70%_at_15%_20%,rgba(242,92,5,.14),rgba(17,14,9,0)_65%)] py-[clamp(56px,8vw,110px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal className="font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
          HOW WE BUILD
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4.5 max-w-[24ch] font-heading text-section font-semibold text-balance">
            Agents that do the work, not chat about it.
          </h2>
        </Reveal>
        <div className="mt-[clamp(32px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-6">
          {ITEMS.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 80}
              className={
                'pt-5 ' + (item.accent ? 'border-t-2 border-mi-orange' : 'border-t-2 border-mi-cream/18')
              }
            >
              <b className="block font-mi-body text-[.68rem] leading-[1] font-bold tracking-[0.14em] text-mi-amber-text">
                {item.title}
              </b>
              <p className="mt-3.5 font-mi-body text-[.96rem] leading-[1.6] text-mi-cream/76">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
