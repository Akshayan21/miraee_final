import type { CSSProperties } from 'react';
import { Reveal } from '@/components/motion/reveal';
import { photography } from '@/content/photography';

const CARDS = [
  {
    eyebrow: 'FOR EMPLOYEES',
    body: 'Ask once, get a complete policy-safe trip. A trip that feels personal rather than procedural.',
    stat: '4.8/5',
    statLabel: 'TRAVELER EXPERIENCE',
  },
  {
    eyebrow: 'FOR FINANCE',
    body: 'See committed spend before it becomes an expense. Complete transparency over company expenditure.',
    stat: '20–30%',
    statLabel: 'WHOLESALE SAVINGS',
  },
  {
    eyebrow: 'FOR TRAVEL TEAMS',
    body: 'Set the rules once and run the program by exception. No more managing every booking and update.',
    stat: '24/7',
    statLabel: 'AGENT AND HUMAN CARE',
  },
];

export function DesignedForEveryone() {
  return (
    <section className="bg-mi-cream py-[clamp(64px,9vw,120px)] text-background-dark">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal className="font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-background-dark/50">
          DESIGNED FOR EVERYONE
        </Reveal>
        <div className="mt-4.5 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,.62fr)] lg:gap-12">
          <Reveal delay={80}>
            <h2 className="font-mi-accent text-[clamp(2rem,4vw,3.4rem)] leading-[1.04] font-bold tracking-[-0.04em] text-background-dark">
              Less work. Better journeys.
            </h2>
          </Reveal>
          <Reveal delay={140} className="justify-self-end w-full max-w-[430px]">
            <figure className="relative m-0 aspect-[16/8] overflow-hidden rounded-[24px] border border-background-dark/12 bg-background-dark/5">
              <img {...photography['business-case-people']} sizes="(min-width: 1440px) 700px, (min-width: 1024px) 50vw, (min-width: 768px) 700px, calc(100vw - 40px)" decoding="async" alt="A diverse group of business travellers" className="size-full object-cover object-[72%_center]" loading="lazy" />
            </figure>
          </Reveal>
        </div>
        <div className="mt-[clamp(32px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-6">
          {CARDS.map((card, i) => (
            <Reveal
              key={card.eyebrow}
              delay={i * 80}
              className="rounded-[32px] border border-background-dark/14 bg-white p-7"
              style={{ '--color-background-dark': '#150b08' } as CSSProperties}
            >
              <div className="font-mi-body text-[.62rem] font-bold tracking-[0.12em] text-mi-scarlet">
                {card.eyebrow}
              </div>
              <p className="mt-3.5 text-pretty font-mi-body text-[1rem] leading-[1.6] text-background-dark/76">
                {card.body}
              </p>
              <div className="mt-5 border-t border-background-dark/12 pt-4 font-mi-accent text-[1.5rem] font-bold tracking-[-0.03em] text-background-dark">
                {card.stat}{' '}
                <span className="font-mi-body text-[.66rem] font-bold tracking-[0.1em] text-background-dark/50">
                  {card.statLabel}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
