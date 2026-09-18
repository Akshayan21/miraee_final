import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/motion/reveal';
import { Magnetic } from '@/components/motion/magnetic';
import { CONSOLE_PIN_STYLE } from '@/lib/dark-page';
import { HeroVortexBackground } from '@/components/ui/hero-vortex-background';

const ROWS: [string, number, number, string][] = [
  ['LHR → JFK · business · 42 trips', 186400, 148900, 'Tabhi wholesale'],
  ['BLR → SIN · economy · 318 trips', 214700, 179300, 'Direct deal'],
  ['Hotel · Frankfurt · 640 nights', 121800, 96200, 'Your negotiated rate'],
  ['Unused tickets · 27 found', 38600, 0, 'Recovered'],
  ['Duplicate reimbursements · 14', 9400, 0, 'Recovered'],
  ['Car hire · US domestic · 210 days', 42300, 35100, 'Third-party content'],
];

const money = (n: number) => `$${Math.round(n).toLocaleString()}`;
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/** Renders the re-pricing audit line for one booking. */
function buildAuditRow([label, was, now, lever]: [string, number, number, string]) {
  const row = document.createElement('div');
  row.className =
    'grid grid-cols-[1fr_auto] gap-x-3 gap-y-1 rounded-xl border border-mi-cream/8 bg-background-dark/42 px-3 py-2.5 opacity-0 transition-[opacity,transform] duration-500 ease-out';
  row.style.transform = 'translateY(8px)';
  row.innerHTML =
    `<span class="min-w-0 truncate font-mi-body text-[.78rem] font-medium text-mi-cream/86">${label}</span>` +
    `<span class="flex-none font-mi-body text-[.78rem] font-bold text-mi-green-text">+${money(was - now)}</span>` +
    `<span class="font-mi-body text-[.66rem] font-semibold tracking-[0.06em] text-mi-cream/42 uppercase">${lever}</span>` +
    `<span class="font-mi-body text-[.68rem] font-medium text-mi-cream/42" style="text-decoration:${now ? 'line-through' : 'none'}">${now ? money(was) : 'leakage'}</span>`;
  return row;
}

/** Live re-pricing console — reimplements the mockup's audit-simulation script. */
function AuditConsole() {
  const barRef = useRef<HTMLSpanElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const totalRef = useRef<HTMLElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const bar = barRef.current;
    const pct = pctRef.current;
    const total = totalRef.current;
    const wrap = wrapRef.current;
    if (!bar || !pct || !total || !wrap) return;

    const totalSavings = ROWS.reduce((sum, [, was, now]) => sum + (was - now), 0);

    if (reduced) {
      wrap.innerHTML = '';
      ROWS.forEach((row) => {
        const el = buildAuditRow(row);
        el.style.opacity = '1';
        el.style.transform = 'none';
        wrap.appendChild(el);
      });
      bar.style.width = '100%';
      pct.textContent = 'COMPLETE';
      total.textContent = money(totalSavings);
      return;
    }

    let cancelled = false;

    const run = async () => {
      while (!cancelled) {
        wrap.innerHTML = '';
        bar.style.width = '0';
        pct.textContent = '0%';
        total.textContent = '$0';
        let saved = 0;
        for (let i = 0; i < ROWS.length; i++) {
          if (cancelled) return;
          const row = ROWS[i];
          const el = buildAuditRow(row);
          wrap.appendChild(el);
          requestAnimationFrame(() => {
            el.style.opacity = '1';
            el.style.transform = 'none';
          });
          saved += row[1] - row[2];
          const p = Math.round(((i + 1) / ROWS.length) * 100);
          bar.style.width = `${p}%`;
          pct.textContent = `${p}%`;
          total.textContent = money(saved);
          await wait(900);
        }
        pct.textContent = 'COMPLETE';
        await wait(4200);
      }
    };
    run();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      className="min-w-0 rounded-[32px] border border-mi-cream/14 bg-gradient-to-b from-[rgba(69,14,20,.35)] to-[rgba(17,14,9,.92)] p-5.5 backdrop-blur-md"
      style={CONSOLE_PIN_STYLE}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-2 font-mi-body text-[.62rem] font-bold tracking-[0.12em] text-mi-cream/50">
          <i className="size-1.75 animate-pulse rounded-full bg-mi-orange" aria-hidden="true" />
          RE-PRICING YOUR LAST 12 MONTHS
        </span>
        <span ref={pctRef} className="font-mi-body text-[.7rem] font-bold tracking-[0.06em] text-mi-amber-text">
          0%
        </span>
      </div>
      <div className="mt-3 h-1 overflow-hidden rounded-full bg-mi-cream/10">
        <span
          ref={barRef}
          className="block h-full w-0 bg-gradient-to-r from-mi-orange via-mi-amber to-mi-rust transition-[width] duration-500 ease-linear"
        />
      </div>
      <div ref={wrapRef} className="mt-4.5 grid min-h-[210px] content-start gap-2" />
      <div className="mt-4 flex items-baseline justify-between gap-3 border-t border-mi-cream/12 pt-4">
        <span className="font-mi-body text-[.64rem] font-bold tracking-[0.12em] text-mi-cream/50">
          SAVINGS FOUND
        </span>
        <b
          ref={totalRef as React.RefObject<HTMLElement>}
          className="font-mi-display text-[clamp(1.6rem,3vw,2.4rem)] leading-none font-bold tracking-[-0.02em] text-mi-green-text"
        >
          $0
        </b>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[clamp(120px,16vh,180px)] pb-[clamp(56px,8vw,96px)]">
      <HeroVortexBackground />
      <div className="mx-auto grid w-[min(1360px,100%-2*clamp(20px,4vw,64px))] grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] items-end gap-[clamp(32px,4vw,64px)]">
        <div className="min-w-0">
          <Reveal className="flex items-center gap-3 font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
            PRICING
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-[20ch] text-balance font-mi-display text-[clamp(2.4rem,6vw,5.4rem)] leading-[.96] font-black tracking-[-0.02em] uppercase">
              Prove the savings before you commit.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-[52ch] text-pretty font-mi-body text-[clamp(1.05rem,1.3vw,1.24rem)] leading-[1.55] text-mi-cream/74">
              We don&rsquo;t guess your ROI. We take your last 12 months of booking and expense
              data and re-price it to find your exact savings potential.
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-8">
            <Magnetic>
              <Link
                to="/contact"
                className="inline-flex h-[52px] items-center gap-2.5 rounded-2xl bg-mi-scarlet px-6.5 font-mi-body text-[.92rem] font-bold text-white no-underline"
              >
                Start the savings analysis
              </Link>
            </Magnetic>
          </Reveal>
        </div>

        <Reveal delay={120} className="min-w-0">
          <AuditConsole />
        </Reveal>
      </div>
    </section>
  );
}
