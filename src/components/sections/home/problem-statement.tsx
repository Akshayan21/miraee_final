import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Reveal } from '@/components/motion/reveal';

gsap.registerPlugin(ScrollTrigger);

const TODAY_TAGS = ['Booking tool', 'Expense tool', 'Card program', 'Approvals', 'Support desk'];

const MIRAEE_STEPS: [string, string][] = [
  ['#F25C05', 'Intent stated, once'],
  ['var(--color-mi-amber-text)', 'Policy applied before you see options'],
  ['#DE5533', 'Booked, paid, coordinated'],
  ['var(--color-mi-green-text)', 'Recovered and filed, without you'],
];

export function ProblemStatement() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = timelineRef.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      end: 'bottom 55%',
      scrub: 1,
      onUpdate: (self) => setProgress(self.progress),
    });

    return () => trigger.kill();
  }, []);

  return (
    <section className="py-[clamp(72px,10vw,140px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <div className="mb-[clamp(40px,6vw,72px)] h-0.5 bg-gradient-to-r from-mi-orange via-mi-amber to-mi-rust" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] items-start gap-[clamp(32px,5vw,80px)]">
          <div className="min-w-0">
            <Reveal className="flex items-center gap-3 font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
              THE PROBLEM
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 max-w-[22ch] text-balance font-mi-accent text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.06] font-bold tracking-[-0.035em]">
                Business Travel Should Not Be a Second Job.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-[52ch] text-pretty font-mi-body text-[clamp(1rem,1.2vw,1.14rem)] leading-[1.6] text-mi-cream/72">
                Today, booking a business trip means wrestling with five disconnected systems,
                navigating complex policies, and spending hours filing expense reports. Travelers
                are left stranded during disruptions, and finance teams lose countless hours
                chasing missing receipts.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-[46ch] text-pretty font-mi-accent text-[clamp(1.05rem,1.3vw,1.24rem)] leading-[1.5] font-medium tracking-[-0.01em] text-mi-cream">
                Miraee changes who does the work. We replace search-and-click frustration with
                agentic AI that manages the entire trip end to end.
              </p>
            </Reveal>
          </div>

          <div className="grid min-w-0 gap-6">
            <Reveal delay={80} className="rounded-[32px] border border-mi-cream/10 bg-mi-cream/3 p-6">
              <div className="font-mi-body text-[.62rem] font-bold tracking-[0.14em] text-mi-cream/40">
                TODAY · FIVE SYSTEMS, OUT OF STEP
              </div>
              <div className="mt-4.5 flex flex-wrap gap-2.5">
                {TODAY_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-dashed border-mi-cream/22 px-3.5 py-2.5 font-mi-body text-[.78rem] font-semibold text-mi-cream/66"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal
              delay={160}
              className="rounded-[32px] border border-mi-orange/35 bg-[linear-gradient(140deg,rgba(242,92,5,.14),rgba(17,14,9,0)_70%)] p-6"
            >
              <div className="font-mi-body text-[.62rem] font-bold tracking-[0.14em] text-mi-amber-text">
                WITH MIRAEE · ONE CONTINUOUS PROCESS
              </div>
              <div ref={timelineRef} className="relative mt-6 pl-1">
                <div className="absolute top-1.5 bottom-1.5 left-[5px] w-0.5 overflow-hidden rounded-full bg-mi-cream/14">
                  <div
                    className="w-full origin-top rounded-full bg-gradient-to-b from-mi-orange via-mi-amber to-mi-rust transition-[transform] duration-150 ease-out"
                    style={{ height: '100%', transform: `scaleY(${progress})` }}
                  />
                </div>
                <div className="grid gap-4">
                  {MIRAEE_STEPS.map(([color, label], i) => {
                    const isLit = progress * MIRAEE_STEPS.length > i;
                    return (
                      <div key={label} className="flex items-center gap-3.5">
                        <i
                          className="size-3 flex-none rounded-full transition-[background-color,box-shadow,transform] duration-300"
                          style={{
                            background: isLit ? color : 'rgba(243,241,237,.16)',
                            boxShadow: isLit ? `0 0 0 4px ${color}2e` : 'none',
                            transform: isLit ? 'scale(1.15)' : 'scale(1)',
                          }}
                        />
                        <b
                          className="font-mi-body text-[.92rem] font-semibold transition-opacity duration-300"
                          style={{ opacity: isLit ? 1 : 0.45 }}
                        >
                          {label}
                        </b>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
