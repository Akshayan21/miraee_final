import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CONSOLE_PIN_STYLE } from '@/lib/dark-page';

gsap.registerPlugin(ScrollTrigger);

const TABS = ['Plan', 'Book', 'Expense', 'Change'];

const PANELS = [
  {
    eyebrow: '01 PLAN · JUST COMMAND',
    title: 'Describe the trip in plain language.',
    body: 'Miraee builds an in-policy itinerary in seconds.',
  },
  {
    eyebrow: '02 BOOK · WHOLESALE INVENTORY',
    title: 'Flights, hotels and cars from Mondee One wholesale inventory.',
    body: 'Real savings, one tap.',
  },
  {
    eyebrow: '03 EXPENSE · ZERO FORMS',
    title: 'Receipts, reports and reconciliation handled automatically.',
    body: 'No forms, no chasing.',
  },
  {
    eyebrow: '04 CHANGE · SELF-REBOOKING',
    title: 'Plans shift, the agent rebooks itself.',
    body: 'Within policy, before you even ask.',
  },
];

function PanelDetail({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="rounded-3xl border border-mi-cream/14 bg-[rgba(17,14,9,.92)] p-4.5" style={CONSOLE_PIN_STYLE}>
        <div className="font-mi-body text-[.6rem] font-bold tracking-[0.12em] text-mi-cream/42">YOU SAID</div>
        <p className="mt-2.5 font-mi-accent text-[1.05rem] leading-[1.4] font-medium tracking-[-0.02em] text-mi-cream">
          "Tokyo Tuesday for the Aoyama review, back Thursday night."
        </p>
        <div className="mt-4.5 flex flex-wrap gap-2">
          <span className="rounded-full border border-mi-orange/40 bg-mi-orange/16 px-3 py-1.5 font-mi-body text-[.72rem] font-semibold text-mi-amber-text">
            Calendar checked
          </span>
          <span className="rounded-full border border-[var(--color-mi-blue-text)]/36 bg-[var(--color-mi-blue-text)]/14 px-3 py-1.5 font-mi-body text-[.72rem] font-semibold text-[var(--color-mi-blue-text)]">
            Grade A policy
          </span>
          <span className="rounded-full border border-mi-green/36 bg-mi-green/14 px-3 py-1.5 font-mi-body text-[.72rem] font-semibold text-mi-green-text">
            Visa valid 14 mo
          </span>
        </div>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="grid gap-2.5 rounded-3xl border border-mi-cream/14 bg-[rgba(17,14,9,.92)] p-4.5" style={CONSOLE_PIN_STYLE}>
        <div className="flex items-center justify-between gap-3 border-b border-mi-cream/10 pb-2.5">
          <span className="font-mi-body text-[.84rem] font-semibold text-mi-cream">Published fare</span>
          <span className="font-mi-accent text-[.95rem] font-bold text-mi-cream/50 line-through">$3,180</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="font-mi-body text-[.84rem] font-semibold text-mi-cream">Four contract layers stacked</span>
          <span className="font-mi-accent text-[1.3rem] font-bold tracking-[-0.03em] text-mi-amber-text">$2,304</span>
        </div>
        <div className="mt-1.5 flex gap-1.5">
          <i className="h-1.5 flex-1 rounded-sm bg-mi-orange" />
          <i className="h-1.5 flex-1 rounded-sm bg-mi-amber" />
          <i className="h-1.5 flex-1 rounded-sm bg-mi-rust" />
          <i className="h-1.5 flex-1 rounded-sm bg-[var(--color-mi-blue-text)]" />
        </div>
        <div className="mt-1 font-mi-body text-[.64rem] leading-[1.4] font-bold tracking-[0.1em] text-mi-cream/45">
          TABHI WHOLESALE · YOUR RATES · DIRECT DEALS · THIRD-PARTY
        </div>
      </div>
    );
  }
  if (index === 2) {
    return (
      <div className="grid gap-2.5 rounded-3xl border border-mi-cream/14 bg-[rgba(17,14,9,.92)] p-4.5" style={CONSOLE_PIN_STYLE}>
        <div className="flex justify-between gap-3 font-mi-body text-[.82rem] font-semibold text-mi-cream">
          <span>Taxi · Narita → Shiodome</span>
          <span className="font-bold text-mi-green-text">GL 6410</span>
        </div>
        <div className="flex justify-between gap-3 font-mi-body text-[.82rem] font-semibold text-mi-cream">
          <span>Dinner · Aoyama</span>
          <span className="font-bold text-mi-green-text">PER DIEM OK</span>
        </div>
        <div className="flex justify-between gap-3 font-mi-body text-[.82rem] font-semibold text-mi-cream">
          <span>Hotel folio · 3 nights</span>
          <span className="font-bold text-mi-green-text">MATCHED</span>
        </div>
        <div className="mt-2 flex items-baseline justify-between gap-3 border-t border-mi-cream/10 pt-3">
          <span className="font-mi-body text-[.64rem] font-bold tracking-[0.12em] text-mi-cream/45">REPORT</span>
          <span className="font-mi-accent text-[1.1rem] font-bold tracking-[-0.03em] text-mi-green-text">
            Closed on landing
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="grid gap-3 rounded-3xl border border-mi-cream/14 bg-[rgba(17,14,9,.92)] p-4.5" style={CONSOLE_PIN_STYLE}>
      <div className="flex items-center gap-2.5 font-mi-body text-[.68rem] font-bold tracking-[0.12em] text-mi-rust">
        <i className="size-2 rounded-full bg-mi-rust" />
        NH 217 DELAYED · 2H 40M
      </div>
      <div className="grid gap-2 font-mi-body text-[.82rem] leading-[1.35] font-semibold text-mi-cream/80">
        <span>Alternative priced against policy · in band</span>
        <span>Rebooked NH 219 · 14:05 · same cabin</span>
        <span>Hotel night held · transfer moved</span>
      </div>
      <div className="border-t border-mi-cream/10 pt-2.5 font-mi-accent text-[.8rem] font-bold tracking-[-0.02em] text-mi-cream">
        Traveler notified before the gate announcement.
      </div>
    </div>
  );
}

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    let trigger: ScrollTrigger | undefined;
    const create = () => {
      if (pin.offsetWidth < 200 || pin.offsetHeight < 200) return;
      trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=300%',
        pin,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          setActive(Math.min(3, Math.floor(self.progress * 4.0001)));
          setProgress(self.progress);
        },
      });
    };
    const timer = setTimeout(create, 220);
    return () => {
      clearTimeout(timer);
      trigger?.kill();
    };
  }, []);

  return (
    <section id="how" ref={sectionRef}>
      <div
        ref={pinRef}
        className="flex min-h-svh flex-col justify-center py-[clamp(88px,12vh,132px)] pb-[clamp(48px,7vh,80px)]"
      >
        <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
                HOW IT WORKS
              </div>
              <h2 className="mt-4.5 max-w-[26ch] text-balance font-mi-accent text-[clamp(1.7rem,3.2vw,2.9rem)] leading-[1.08] font-bold tracking-[-0.035em]">
                One agent, the whole journey: plan, book, expense, change.
              </h2>
            </div>
            <p className="max-w-[22ch] font-mi-script text-base leading-[2] text-mi-amber-text">
              Voice, chat or avatar. It remembers your preferences.
            </p>
          </div>

          <div className="mt-[clamp(32px,4vw,56px)] grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-4 sm:gap-y-3">
            {TABS.map((tab, i) => {
              const segmentFill = Math.min(Math.max(progress * 4 - i, 0), 1) * 100;
              const isActive = active === i;
              const isDone = progress * 4 > i + 1;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActive(i)}
                  className="group cursor-pointer pt-3.5 text-left"
                >
                  <i className="relative block h-0.5 w-full overflow-hidden rounded-full bg-mi-cream/14">
                    <i
                      className="absolute inset-y-0 left-0 block rounded-full bg-gradient-to-r from-mi-orange to-mi-amber transition-[width] duration-150 ease-out"
                      style={{ width: `${segmentFill}%` }}
                    />
                  </i>
                  <div className="mt-3 flex items-center gap-2.5">
                    <span
                      className="flex size-6 shrink-0 items-center justify-center rounded-full font-mi-body text-[.62rem] font-bold tracking-[0.08em] transition-[background-color,color,box-shadow,transform] duration-400"
                      style={{
                        backgroundColor: isActive || isDone ? '#F25C05' : 'rgba(243,241,237,.1)',
                        color: isActive || isDone ? '#110E09' : 'rgba(243,241,237,.5)',
                        boxShadow: isActive ? '0 0 0 4px rgba(242,92,5,.18)' : 'none',
                        transform: isActive ? 'scale(1.08)' : 'scale(1)',
                      }}
                    >
                      {i + 1}
                    </span>
                    <b
                      className="block font-mi-accent text-[clamp(.95rem,1.7vw,1.5rem)] leading-[1.05] font-bold tracking-[-0.03em] transition-opacity duration-400"
                      style={{ opacity: isActive ? 1 : 0.42 }}
                    >
                      {tab}
                    </b>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative mt-[clamp(24px,3vw,40px)] min-h-[clamp(320px,38vh,380px)] rounded-[32px] border border-mi-cream/12 bg-[linear-gradient(140deg,var(--color-glow-85),rgba(17,14,9,0)_70%)] p-[clamp(24px,3vw,40px)]">
            {PANELS.map((panel, i) => {
              const isActive = active === i;
              const childStyle = (order: number) => ({
                transitionDelay: isActive ? `${order * 90}ms` : '0ms',
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'none' : 'translateY(16px)',
              });
              return (
                <div
                  key={panel.eyebrow}
                  className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] items-center gap-8 transition-[opacity,transform] duration-500"
                  style={
                    i === 0
                      ? { opacity: isActive ? 1 : 0, transform: isActive ? 'none' : 'translateY(18px)' }
                      : {
                          position: 'absolute',
                          inset: 'clamp(24px,3vw,40px)',
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? 'none' : 'translateY(18px)',
                          pointerEvents: isActive ? 'auto' : 'none',
                        }
                  }
                >
                  <div>
                    <div
                      className="font-mi-body text-[.66rem] font-bold tracking-[0.14em] text-mi-orange transition-[opacity,transform] duration-500"
                      style={childStyle(0)}
                    >
                      {panel.eyebrow}
                    </div>
                    <h3
                      className="mt-4 max-w-[20ch] font-mi-accent text-[clamp(1.5rem,2.6vw,2.3rem)] leading-[1.1] font-bold tracking-[-0.035em] transition-[opacity,transform] duration-500"
                      style={childStyle(1)}
                    >
                      {panel.title}
                    </h3>
                    <p
                      className="mt-4 max-w-[40ch] font-mi-body text-[1.02rem] leading-[1.6] text-mi-cream/74 transition-[opacity,transform] duration-500"
                      style={childStyle(2)}
                    >
                      {panel.body}
                    </p>
                  </div>
                  <div className="transition-[opacity,transform] duration-500" style={childStyle(3)}>
                    <PanelDetail index={i} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
