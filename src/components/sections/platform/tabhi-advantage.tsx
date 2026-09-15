import { Reveal } from '@/components/motion/reveal';
import { photography } from '@/content/photography';

const CARDS = [
  {
    label: '01 GLOBAL CONTENT',
    body: 'Millions of hotels and airline partners, sourced through direct connections and wholesale agreements rather than resold inventory.',
    stat: '2M+ hotels',
  },
  {
    label: '02 WHOLESALE ECONOMICS',
    body: 'Negotiated rates that travel with the trip, applied automatically at booking rather than claimed back later.',
    stat: '500+ airlines',
  },
  {
    label: '03 REACH',
    body: 'The Tabhi network already serves a traveler base at global scale. That volume is what makes the rates possible.',
    stat: '125M+ travelers',
  },
  {
    label: '04 LOCAL EXPERIENCES',
    body: 'Festivals, performances, markets and makers. Content no corporate channel has ever carried.',
    stat: '10M+ experiences',
  },
];

export function TabhiAdvantage() {
  return (
    <section className="bg-gradient-to-b from-[var(--color-glow-60)] to-transparent py-[clamp(64px,9vw,120px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal className="font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
          THE TABHI ADVANTAGE
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4.5 font-mi-accent text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.06] font-bold tracking-[-0.035em]">
            Global reach. Personal execution.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-5 max-w-[60ch] text-pretty font-mi-body text-[1.04rem] leading-[1.6] text-mi-cream/76">
            Miraee runs on the group&rsquo;s own supply, distributed through Mondee One. That
            inventory is wholesale contracts, direct connections and hyperlocal content that
            nobody else has digitized.
          </p>
        </Reveal>
        <Reveal delay={220} className="mt-[clamp(28px,4vw,48px)]">
          <figure className="relative m-0 aspect-[16/7] overflow-hidden rounded-[32px] border border-mi-cream/12 bg-mi-cream/4">
            <img {...photography['platform-local-experiences']} sizes="(min-width: 1440px) 700px, (min-width: 1024px) 50vw, (min-width: 768px) 700px, calc(100vw - 40px)" decoding="async" alt="Business travellers exploring a local night market together" className="size-full object-cover" loading="lazy" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background-dark/28 via-transparent to-transparent" />
          </figure>
        </Reveal>

        <div className="mt-[clamp(32px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-6">
          {CARDS.map((card, i) => (
            <Reveal
              key={card.label}
              delay={i * 80}
              className="flex flex-col gap-3.5 rounded-[32px] border border-mi-cream/12 bg-mi-cream/3.5 p-6.5"
            >
              <b className="font-mi-body text-[.66rem] font-bold tracking-[0.12em] text-mi-orange">
                {card.label}
              </b>
              <p className="flex-1 font-mi-body text-[.96rem] leading-[1.6] text-mi-cream/74">
                {card.body}
              </p>
              <span className="font-mi-display text-[1.6rem] leading-none font-bold tracking-[-0.02em] text-mi-amber-text">
                {card.stat}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="mt-10 max-w-[34ch] font-mi-accent text-[clamp(1.2rem,2.2vw,1.9rem)] leading-[1.3] font-medium tracking-[-0.03em]">
            Most platforms compete on software.{' '}
            <span className="text-mi-orange">We compete on software and supply.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
