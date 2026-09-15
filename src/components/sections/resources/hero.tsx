import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/motion/reveal';

const TABS = ['Blog', 'Guides', 'Webinars', 'Documentation'];

const NOTES = [
  'Field notes and argument from the team building agentic travel.',
  'Long-form research, benchmarks and the savings methodology in full.',
  'Recorded sessions with travel, finance and IT leads.',
  'Integration references, the unified API and the developer sandbox.',
];

export function Hero() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-[radial-gradient(110%_80%_at_85%_0%,var(--color-glow-85),rgba(17,14,9,0)_60%)] pt-[clamp(120px,16vh,180px)] pb-[clamp(40px,6vw,64px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal className="flex items-center gap-3 font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
          RESOURCES
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 text-balance font-mi-display text-[clamp(2.4rem,6vw,5.2rem)] leading-[.96] font-black tracking-[-0.02em] text-mi-cream uppercase">
            Insights for the Agentic Era.
          </h1>
        </Reveal>
        <Reveal delay={160} className="mt-9 flex flex-wrap gap-2.5">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                'h-[42px] cursor-pointer rounded-2xl border px-5 font-mi-body text-[.85rem] font-bold transition-colors duration-300',
                active === i
                  ? 'border-transparent bg-mi-scarlet text-white'
                  : 'border-mi-cream/20 bg-mi-cream/4 text-mi-cream/78',
              )}
            >
              {tab}
            </button>
          ))}
        </Reveal>
        <Reveal delay={220} className="mt-5 font-mi-body text-[.9rem] leading-[1.5] font-medium text-mi-cream/60">
          {NOTES[active]}
        </Reveal>
      </div>
    </section>
  );
}
