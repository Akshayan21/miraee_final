import { Reveal } from '@/components/motion/reveal';
import { photography } from '@/content/photography';

const CARDS = [
  {
    title: 'Live location tracking, real reassurance',
    body: 'See every active traveler on one live map, with itinerary changes flagged in real time. Built for duty of care.',
    tag: 'REAL-TIME, ONE LIVE MAP',
    tagColor: 'var(--color-mi-blue-text)',
  },
  {
    title: 'Your travel data, read your way',
    body: 'Tailored reports on spend, compliance, savings and reimbursements by team, entity or route. Export instantly.',
    tag: 'EXPORTABLE IN ONE CLICK',
    tagColor: 'var(--color-mi-green-text)',
  },
  {
    title: 'Guided self-setup and onboarding',
    body: 'Employees build their travel profiles with live progress tracking. Simple onboarding, no implementation team required.',
    tag: 'LIVE COMPLETION %',
    tagColor: 'var(--color-mi-amber-text)',
  },
];

export function PlatformDepth() {
  return (
    <section className="py-[clamp(64px,9vw,120px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal className="font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
          PLATFORM DEPTH
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4.5 max-w-[30ch] text-balance font-mi-accent text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.06] font-bold tracking-[-0.035em]">
            The Miraee platform adapts. So your people don&rsquo;t have to.
          </h2>
        </Reveal>
        <Reveal delay={140} className="mt-[clamp(28px,4vw,48px)]">
          <figure className="relative m-0 aspect-[16/7] overflow-hidden rounded-[32px] border border-mi-cream/12 bg-mi-cream/4">
            <img {...photography['platform-duty-of-care']} sizes="(min-width: 1440px) 700px, (min-width: 1024px) 50vw, (min-width: 768px) 700px, calc(100vw - 40px)" decoding="async" alt="Business traveller moving through a rail station" className="size-full object-cover" loading="lazy" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background-dark/35 via-transparent to-transparent" />
          </figure>
        </Reveal>
        <div className="mt-[clamp(32px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6">
          {CARDS.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 80}
              className="rounded-[32px] border border-mi-cream/12 bg-mi-cream/3.5 p-7"
            >
              <h3 className="font-mi-accent text-[1.15rem] leading-[1.3] font-bold tracking-[-0.02em]">
                {card.title}
              </h3>
              <p className="mt-3.5 font-mi-body text-[.96rem] leading-[1.6] text-mi-cream/74">
                {card.body}
              </p>
              <span
                className="mt-4.5 block font-mi-body text-[.68rem] font-bold tracking-[0.12em]"
                style={{ color: card.tagColor }}
              >
                {card.tag}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
