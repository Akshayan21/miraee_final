import { useEffect, useRef } from 'react';
import { Reveal } from '@/components/motion/reveal';
import { CountUp } from '@/components/motion/count-up';
import { CONSOLE_PIN_STYLE } from '@/lib/dark-page';
import peopleImage from '@/assets/images/solutions-hero-airport-team-480.webp';

const PAINS = [
  {
    title: 'Booking by hand, one at a time',
    body: 'Requests arrive from everywhere and each is processed manually, with no single place they all live.',
  },
  {
    title: 'Blind between bookings',
    body: 'Once people are travelling, tracking where they are and what is still open means chasing updates.',
  },
];

const CARDS = [
  {
    title: 'EVERY REQUEST IN ONE QUEUE',
    body: 'The Booking Queue holds every open booking, traveller, dates, items and status, so nothing slips.',
  },
  {
    title: 'A PROGRAM, NOT JUST BOOKINGS',
    body: 'Analytics by team, entity and route, with MICE and group booking built in, and direct supply through Mondee One.',
  },
];

const PEOPLE: [string, string, string, string, number, number][] = [
  ['A. Rao · BLR → SIN', 'SQ 511', '06:40', '#F25C05', 18, 62],
  ['M. Lindqvist · ARN → FRA', 'LH 805', '09:15', 'var(--color-mi-amber-text)', 46, 28],
  ['J. Okafor · LOS → LHR', 'BA 75', '05:20', 'var(--color-mi-blue-text)', 40, 70],
  ['S. Kim · ICN → SFO', 'KE 023', '11:05', 'var(--color-mi-green-text)', 74, 34],
  ['D. Alvarez · MEX → JFK', 'AM 404', '07:50', '#FF69AD', 24, 44],
];

const DOTS = Array.from({ length: 9 }, (_, y) =>
  Array.from({ length: 22 }, (_, x) => ({ x: (x / 21) * 100, y: (y / 8) * 100 })),
).flat();

function LiveTracker() {
  const markerRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const drift = () => {
      markerRefs.current.forEach((marker, i) => {
        if (!marker) return;
        const [, , , , x, y] = PEOPLE[i];
        marker.style.left = `${Math.max(4, Math.min(94, x + (Math.random() * 16 - 8)))}%`;
        marker.style.top = `${Math.max(8, Math.min(88, y + (Math.random() * 12 - 6)))}%`;
      });
    };
    const timeout = setTimeout(drift, 600);
    const interval = setInterval(drift, 4200);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="sticky top-24 overflow-hidden rounded-[32px] border border-mi-cream/14 bg-gradient-to-b from-[rgba(69,14,20,.35)] to-[rgba(17,14,9,.92)]"
      style={CONSOLE_PIN_STYLE}
    >
      <div className="flex items-center justify-between gap-3 border-b border-mi-cream/10 px-5 py-4">
        <span className="font-mi-body text-[.64rem] font-bold tracking-[0.12em] text-mi-cream/50">
          LIVE TRACKER · EVERYONE IN MOTION
        </span>
        <span className="flex items-center gap-2 font-mi-body text-[.64rem] font-bold tracking-[0.1em] text-mi-green-text">
          <i className="size-1.75 rounded-full bg-mi-green" />
          LIVE
        </span>
      </div>
      <div className="relative h-[clamp(200px,26vh,260px)] overflow-hidden border-b border-mi-cream/10 bg-[radial-gradient(60%_80%_at_30%_40%,rgba(128,155,255,.12),rgba(17,14,9,0)_70%)]">
        <div className="absolute inset-x-5 top-4 z-10 flex items-center justify-between font-mi-body text-[.58rem] font-semibold tracking-[0.1em] text-mi-cream/45">
          <span>GLOBAL COVERAGE</span>
          <span>5 TRAVELLERS · MONITORED</span>
        </div>
        <div className="absolute inset-0 opacity-50">
          {DOTS.map((dot, i) => (
            <i
              key={i}
              className="absolute size-0.5 rounded-full bg-mi-cream/18"
              style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
            />
          ))}
        </div>
        <svg className="pointer-events-none absolute inset-0 size-full opacity-35" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <g fill="var(--color-mi-cream)" stroke="var(--color-mi-cream)" strokeWidth=".35" strokeLinejoin="round" opacity=".16">
            <path d="M8 29 12 24 18 21 25 21 30 24 34 30 29 33 25 36 19 35 16 38 11 35Z" />
            <path d="M29 39 34 40 38 45 40 51 38 57 35 64 32 68 30 63 31 57 28 53 30 48 27 44Z" />
            <path d="M45 23 51 20 58 21 64 24 69 28 76 28 82 32 87 35 83 39 76 38 71 41 65 39 60 42 55 39 50 39 47 34 43 31Z" />
            <path d="M65 47 71 44 77 46 83 50 85 55 81 60 77 64 71 66 67 63 69 58 65 54 68 51Z" />
            <path d="M85 23 91 23 95 26 92 30 87 29Z" />
          </g>
          <g fill="none" stroke="var(--color-mi-cream)" strokeWidth=".18" opacity=".13">
            <path d="M5 34C28 27 72 27 96 34" /><path d="M4 50C28 43 72 43 96 50" /><path d="M7 66C30 59 70 59 93 66" />
            <path d="M25 10C18 30 18 70 25 90" /><path d="M50 8C45 30 45 70 50 92" /><path d="M75 10C82 30 82 70 75 90" />
          </g>
          {PEOPLE.slice(0, -1).map(([, , , color, x, y], i) => {
            const [, , , , nextX, nextY] = PEOPLE[i + 1];
            return <line key={i} x1={x} y1={y} x2={nextX} y2={nextY} stroke={color} strokeWidth="0.35" strokeDasharray="1.5 2.5" />;
          })}
        </svg>
        {PEOPLE.map(([, , , color, x, y], i) => (
          <span
            key={i}
            ref={(el) => {
              markerRefs.current[i] = el;
            }}
            className="absolute size-2.25 animate-pulse rounded-full transition-[left,top] duration-[4s] ease-linear"
            style={{ left: `${x}%`, top: `${y}%`, background: color, boxShadow: `0 0 0 0 ${color}66` }}
          />
        ))}
      </div>
      <div className="grid gap-2.5 px-5 py-4.5">
        <div className="relative mb-1 h-24 overflow-hidden rounded-2xl border border-mi-cream/10">
          <img src={peopleImage} alt="Travellers being supported across destinations" className="size-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/65 to-transparent" />
          <span className="absolute bottom-3 left-3 font-mi-body text-[.58rem] font-bold tracking-[.1em] text-mi-cream/75">PEOPLE IN MOTION</span>
        </div>
        <div className="grid grid-cols-[1fr_auto_auto] gap-3 border-b border-mi-cream/10 pb-2.5 font-mi-body text-[.6rem] font-bold tracking-[0.1em] text-mi-cream/42">
          <span>TRAVELLER · ROUTE</span>
          <span>FLIGHT</span>
          <span>ETA</span>
        </div>
        <div className="grid min-h-[120px] gap-2.5">
          {PEOPLE.map(([who, flight, eta, color]) => (
            <div key={who} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 font-mi-body text-[.8rem] leading-[1.3] font-medium text-mi-cream/84">
              <span className="flex min-w-0 items-center gap-2">
                <i className="size-1.75 flex-none rounded-full" style={{ background: color }} />
                <span className="truncate">{who}</span>
              </span>
              <span className="font-semibold text-mi-cream/60">{flight}</span>
              <span className="font-bold tabular-nums">{eta}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 border-t border-mi-cream/10 sm:grid-cols-3">
        <div className="border-r border-mi-cream/10 px-5 py-4">
          <b className="block font-mi-display text-[1.3rem] font-bold text-mi-orange">
            <CountUp value={34} />
          </b>
          <span className="mt-1.5 block font-mi-body text-[.58rem] leading-[1.3] font-bold tracking-[0.1em] text-mi-cream/50">
            ACTIVE TRIPS
          </span>
        </div>
        <div className="border-r border-mi-cream/10 px-5 py-4">
          <b className="block font-mi-display text-[1.3rem] font-bold text-mi-amber-text">
            <CountUp value={12} />
          </b>
          <span className="mt-1.5 block font-mi-body text-[.58rem] leading-[1.3] font-bold tracking-[0.1em] text-mi-cream/50">
            UPCOMING
          </span>
        </div>
        <div className="px-5 py-4">
          <b className="block font-mi-display text-[1.3rem] font-bold text-[var(--color-mi-blue-text)]">
            <CountUp value={9} />
          </b>
          <span className="mt-1.5 block font-mi-body text-[.58rem] leading-[1.3] font-bold tracking-[0.1em] text-mi-cream/50">
            ABROAD
          </span>
        </div>
      </div>
    </div>
  );
}

export function TravelLeads() {
  return (
    <section
      id="travel-leads"
      className="py-[clamp(56px,8vw,110px)]"
      style={{ background: 'radial-gradient(70% 70% at 80% 30%,rgba(128,155,255,.14),rgba(17,14,9,0) 60%)' }}
    >
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] items-start gap-[clamp(28px,4vw,64px)]">
          <div>
            <Reveal className="font-mi-body text-[.7rem] font-bold tracking-[0.14em] text-[var(--color-mi-blue-text)]">
              FOR TRAVEL LEADS
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4.5 max-w-[20ch] font-heading text-section font-semibold text-balance">
                Run a program, not a booking desk.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-[44ch] text-pretty font-mi-body text-[1.04rem] leading-[1.6] text-mi-cream/74">
                Every traveller in motion on one screen, every open request in one queue, and the
                analytics to run travel as a program.
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-8 border-t border-mi-cream/14 pt-6">
              <div className="font-mi-body text-[.68rem] font-bold tracking-[0.14em] text-mi-cream/45">
                THE PAINS YOU KNOW
              </div>
              <div className="mt-4.5 grid gap-4">
                {PAINS.map((pain) => (
                  <div key={pain.title}>
                    <h4 className="m-0 font-mi-accent text-[.98rem] leading-[1.3] font-bold">
                      {pain.title}
                    </h4>
                    <p className="mt-1.5 font-mi-body text-[.93rem] leading-[1.6] text-mi-cream/70">
                      {pain.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <div className="mt-7 grid gap-3.5">
              {CARDS.map((card, i) => (
                <Reveal
                  key={card.title}
                  delay={i * 80}
                  className="rounded-[24px] border border-mi-cream/12 bg-mi-cream/3.5 p-5"
                >
                  <h3 className="m-0 font-mi-body text-[.72rem] font-bold tracking-[0.12em] text-mi-cream/50">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 font-mi-body text-[.95rem] leading-[1.6] text-mi-cream/82">
                    {card.body}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={320}>
              <a
                href="/contact"
                className="mt-6 inline-block border-b border-mi-orange/50 pb-1 font-mi-body text-[.88rem] font-bold text-mi-orange no-underline"
              >
                Explore the Travel Lead solution →
              </a>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <LiveTracker />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
