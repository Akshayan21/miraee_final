import { Link } from 'react-router-dom';
import { Plane } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';
import { Magnetic } from '@/components/motion/magnetic';
import { DARK_PAGE_CLASS } from '@/lib/dark-page';
import { usePageMeta } from '@/hooks/use-page-meta';
import { primaryNav } from '@/config/navigation';

export default function NotFoundRoute() {
  usePageMeta('Page Not Found | Miraee', 'This route does not exist. Get back to the Miraee employee travel platform.');

  return (
    <main className={`${DARK_PAGE_CLASS} flex min-h-[78vh] items-center bg-[radial-gradient(80%_70%_at_12%_0%,var(--color-glow-80),rgba(17,14,9,0)_60%)]`}>
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))] py-[clamp(96px,14vh,150px)]">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16">
          <div className="min-w-0">
            <Reveal className="flex items-center gap-3 font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
              404 · OFF THE MAP
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-balance font-mi-accent text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[1.06] font-bold tracking-[-0.03em] text-mi-cream">
                This trip doesn&apos;t exist.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-[46ch] text-pretty font-mi-body text-[1.04rem] leading-[1.6] text-mi-cream/74">
                The route you asked for isn&apos;t on our map. It may have been renamed, moved, or
                never booked in the first place. Let&apos;s get you back on itinerary.
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-8 flex flex-wrap gap-3">
              <Magnetic>
                <Link
                  to="/platform"
                  className="inline-flex h-[52px] items-center gap-2.5 rounded-2xl bg-mi-scarlet px-6.5 font-mi-body text-[.92rem] font-bold text-white no-underline"
                >
                  Explore the Platform
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  to="/"
                  className="inline-flex h-[52px] items-center gap-2.5 rounded-2xl border border-mi-cream/22 bg-mi-cream/4 px-6.5 font-mi-body text-[.92rem] font-bold text-mi-cream no-underline"
                >
                  Go home
                </Link>
              </Magnetic>
            </Reveal>

            <Reveal delay={320} className="mt-12">
              <div className="font-mi-body text-[.68rem] font-bold tracking-[0.14em] text-mi-cream/40">
                OR TRY ONE OF THESE
              </div>
              <nav aria-label="Suggested pages" className="mt-4 flex flex-wrap gap-2">
                {primaryNav.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="rounded-full border border-mi-cream/14 px-4 py-2 font-mi-body text-[.82rem] font-semibold text-mi-cream/72 no-underline transition-colors hover:border-mi-orange/40 hover:text-mi-orange"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </Reveal>
          </div>

          <Reveal delay={160} className="relative min-w-0">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 scale-105 rounded-full bg-[radial-gradient(closest-side,rgba(242,92,5,.32),rgba(242,92,5,0)_72%)] blur-3xl"
            />
            <div
              className="mx-auto max-w-[420px] rotate-[-1.5deg]"
              style={{ animation: 'ticket-float 5s ease-in-out infinite' }}
            >
              <div className="flex overflow-hidden rounded-[28px] border border-mi-cream/14 bg-mi-cream/4 shadow-[0_36px_70px_rgba(0,0,0,.4)]">
                <div className="min-w-0 flex-1 p-7">
                  <div className="flex items-center justify-between font-mi-body text-[.68rem] font-bold tracking-[0.14em] text-mi-cream/45">
                    <span>BOARDING PASS</span>
                    <Plane className="size-4 text-mi-orange" aria-hidden="true" />
                  </div>

                  <div className="mt-7 flex items-center gap-3">
                    <div>
                      <div className="font-mi-display text-[1.8rem] leading-none font-black tracking-tight text-mi-cream">
                        YOU
                      </div>
                      <div className="mt-1.5 font-mi-body text-[.66rem] font-semibold tracking-[0.08em] text-mi-cream/50">
                        CURRENT ROUTE
                      </div>
                    </div>
                    <div className="flex flex-1 items-center gap-1.5">
                      <span className="h-px flex-1 border-t border-dashed border-mi-cream/25" />
                      <Plane
                        className="size-4 text-mi-orange/70"
                        style={{ animation: 'ticket-fly 2.6s ease-in-out infinite' }}
                        aria-hidden="true"
                      />
                      <span className="h-px flex-1 border-t border-dashed border-mi-cream/25" />
                    </div>
                    <div className="text-right">
                      <div className="font-mi-display text-[1.8rem] leading-none font-black tracking-tight text-mi-rust">
                        404
                      </div>
                      <div className="mt-1.5 font-mi-body text-[.66rem] font-semibold tracking-[0.08em] text-mi-cream/50">
                        NOT FOUND
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 grid grid-cols-3 gap-4 border-t border-mi-cream/10 pt-5">
                    <div>
                      <div className="font-mi-body text-[.6rem] font-bold tracking-[0.12em] text-mi-cream/40">
                        GATE
                      </div>
                      <div className="mt-1 font-mi-accent text-sm font-bold text-mi-cream">&mdash;</div>
                    </div>
                    <div>
                      <div className="font-mi-body text-[.6rem] font-bold tracking-[0.12em] text-mi-cream/40">
                        SEAT
                      </div>
                      <div className="mt-1 font-mi-accent text-sm font-bold text-mi-cream">&mdash;</div>
                    </div>
                    <div>
                      <div className="font-mi-body text-[.6rem] font-bold tracking-[0.12em] text-mi-cream/40">
                        STATUS
                      </div>
                      <div className="mt-1 font-mi-accent text-sm font-bold text-mi-rust">CANCELLED</div>
                    </div>
                  </div>

                  <div
                    aria-hidden="true"
                    className="mt-6 flex h-6 items-stretch gap-[3px] border-t border-mi-cream/10 pt-4 opacity-40"
                  >
                    {[2, 1, 3, 1, 2, 4, 1, 2, 3, 1, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 1, 4, 2, 1, 3].map(
                      (w, i) => (
                        <span key={i} className="bg-mi-cream" style={{ width: `${w}px` }} />
                      ),
                    )}
                  </div>
                </div>

                <div className="relative flex w-14 flex-none items-center justify-center border-l border-dashed border-mi-cream/20 bg-mi-cream/3">
                  <span
                    aria-hidden="true"
                    className="absolute -top-3 left-1/2 size-6 -translate-x-1/2 rounded-full bg-background-dark"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-3 left-1/2 size-6 -translate-x-1/2 rounded-full bg-background-dark"
                  />
                  <span className="[writing-mode:vertical-rl] font-mi-body text-[.6rem] font-bold tracking-[0.22em] text-mi-cream/40">
                    MIRAEE · 404
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
