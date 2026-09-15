import { Reveal } from '@/components/motion/reveal';
import { photography } from '@/content/photography';

const POINTS = [
  {
    title: 'AN ASSISTANT THAT LEARNS YOU',
    body: 'Miraee remembers preferred airlines, seats, hotels and timing, and applies them from the first result.',
  },
  {
    title: 'A HUMAN WHEN YOU WANT ONE',
    body: 'Named support on call, so there is always a person behind the agent.',
  },
  {
    title: 'IDENTITY KEPT SEPARATE',
    body: 'The traveller profile stays walled off from account login, so personal detail follows the executive rather than the company system.',
  },
];

export function ExecutiveTravel() {
  return (
    <section className="py-[clamp(56px,8vw,110px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] items-start gap-[clamp(28px,4vw,56px)]">
          <div>
            <Reveal className="font-mi-body text-[.7rem] font-bold tracking-[0.14em] text-mi-amber-text">
              EXECUTIVE TRAVEL
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4.5 max-w-[20ch] font-mi-accent text-[clamp(1.8rem,3.4vw,2.9rem)] leading-[1.06] font-bold tracking-[-0.035em]">
                White-glove travel, quietly handled.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-[44ch] text-pretty font-mi-body text-[1.04rem] leading-[1.6] text-mi-cream/74">
                Preferences remembered, trips routed with full context, and a named human on call
                when it matters.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4.5">
              {POINTS.map((point, i) => (
                <Reveal key={point.title} delay={240 + i * 80}>
                  <h3 className="m-0 font-mi-body text-[.72rem] font-bold tracking-[0.12em] text-mi-cream/50">
                    {point.title}
                  </h3>
                  <p className="mt-2 font-mi-body text-[.96rem] leading-[1.6] text-mi-cream/80">
                    {point.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal
            delay={120}
            className="relative aspect-4/3 overflow-hidden rounded-[32px] border border-mi-cream/12 bg-mi-cream/4"
          >
            <img
              {...photography['executive-travel-portrait']} sizes="(min-width: 1440px) 700px, (min-width: 1024px) 50vw, (min-width: 768px) 700px, calc(100vw - 40px)" decoding="async"
              alt="Executive traveller relaxing in a hotel lounge before their next journey"
              className="size-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
