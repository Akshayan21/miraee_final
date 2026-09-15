import { Reveal } from '@/components/motion/reveal';
import { CONSOLE_PIN_STYLE } from '@/lib/dark-page';
import uiAdminDashboard from '@/assets/ui-admin-dashboard.webp';
import miraeeMobilePhone from '@/assets/miraee-mobile-phone.webp';

const WEB_TAGS = ['Policy', 'Approvals', 'Live spend', 'Duty of care', 'Reporting'];

export function TwoViews() {
  return (
    <section className="py-[clamp(64px,9vw,120px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal className="font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
          ONE PLATFORM, TWO VIEWS
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4.5 font-mi-accent text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.06] font-bold tracking-[-0.035em]">
            Two access points. One experience.
          </h2>
        </Reveal>
        <div className="mt-[clamp(32px,5vw,56px)] grid items-stretch grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-6">
          <Reveal
            className="flex flex-col overflow-hidden rounded-[32px] border border-mi-cream/14 bg-[rgba(17,14,9,.94)]"
            style={CONSOLE_PIN_STYLE}
          >
            <div className="flex items-center gap-2 border-b border-mi-cream/10 px-3.5 py-3">
              <i className="size-2.5 rounded-full bg-mi-cream/20" />
              <i className="size-2.5 rounded-full bg-mi-cream/20" />
              <div className="ml-2 flex h-6 flex-1 items-center rounded-lg bg-background-dark/50 px-2.5 font-mi-body text-[.68rem] font-semibold text-mi-cream/45">
                app.miraee.ai/overview
              </div>
            </div>
            <img
              loading="lazy"
              decoding="async"
              src={uiAdminDashboard}
              alt="Miraee web console showing company travel spend, policy compliance and active trips"
              width={1400}
              height={781}
              className="aspect-[16/9] w-full object-cover object-top"
            />
            <div className="flex flex-1 flex-col justify-center p-6.5">
              <div className="font-mi-body text-[.62rem] font-bold tracking-[0.12em] text-[var(--color-mi-blue-text)]">
                WEB CONSOLE · FINANCE AND TRAVEL TEAMS
              </div>
              <p className="mt-3.5 font-mi-body text-[1rem] leading-[1.6] text-mi-cream/78">
                Policy, approvals, live spend, duty of care, reporting and exports.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {WEB_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-mi-cream/18 px-3 py-1.75 font-mi-body text-[.72rem] font-semibold text-mi-cream/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={80}
            className="grid grid-cols-[minmax(0,190px)_minmax(0,1fr)] items-stretch gap-7 rounded-[32px] border border-mi-cream/14 bg-[rgba(17,14,9,.94)] p-6.5 sm:grid-cols-[minmax(0,220px)_minmax(0,1fr)]"
            style={CONSOLE_PIN_STYLE}
          >
            <img
              loading="lazy"
              decoding="async"
              src={miraeeMobilePhone}
              alt="Miraee mobile app showing the AI avatar helping a traveler pick a flight"
              width={800}
              height={1422}
              className="h-full w-full rounded-[22px] object-contain object-top"
            />
            <div className="flex flex-col justify-center">
              <div className="font-mi-body text-[.62rem] font-bold tracking-[0.12em] text-[#FF69AD]">
                MOBILE APP · TRAVELERS
              </div>
              <p className="mt-3.5 font-mi-body text-[1rem] leading-[1.6] text-mi-cream/78">
                Ask, book, change, reach support, capture receipts, plan personal trips.
              </p>
              <div className="mt-5 grid gap-2">
                <div className="rounded-2xl border border-mi-cream/12 bg-mi-cream/6 px-3.5 py-3 font-mi-body text-[.84rem] leading-[1.4] font-medium text-mi-cream/88">
                  &ldquo;Move my Thursday flight to the evening.&rdquo;
                </div>
                <div className="rounded-2xl bg-gradient-to-r from-mi-orange to-mi-rust px-3.5 py-3 font-mi-body text-[.84rem] leading-[1.4] font-semibold text-background-dark">
                  Moved. 19:40, same cabin, in policy. Hotel night added.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
