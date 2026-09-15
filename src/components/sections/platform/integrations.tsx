import { Link } from 'react-router-dom';
import { Reveal } from '@/components/motion/reveal';

const ROWS = [
  {
    n: '01',
    title: 'Identity',
    detail: 'SSO, SAML, SCIM, Okta, Entra',
    body: 'Provisions and deprovisions travelers automatically. No orphaned accounts.',
    tag: 'Auto-provisioned',
    tagColor: 'var(--color-mi-green-text)',
  },
  {
    n: '02',
    title: 'People',
    detail: 'HRIS',
    body: 'Grades, entities, cost centres and managers stay current without manual upkeep.',
    tag: 'Zero upkeep',
    tagColor: 'var(--color-mi-blue-text)',
  },
  {
    n: '03',
    title: 'Finance',
    detail: 'ERP, accounting, card networks',
    body: 'Coded expenses post directly, card spend is managed automatically, and accounts payable reconciles at source.',
    tag: 'Source reconciled',
    tagColor: 'var(--color-mi-green-text)',
  },
  {
    n: '04',
    title: 'Work',
    detail: 'Calendar, email, chat',
    body: 'Itineraries and changes appear where people already work.',
    tag: 'Native in-app',
    tagColor: '#FF69AD',
  },
];

export function Integrations() {
  return (
    <section id="integrations" className="border-t border-mi-cream/8 py-[clamp(64px,9vw,120px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal className="font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
          CONNECTED SYSTEMS
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4.5 font-mi-accent text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.06] font-bold tracking-[-0.035em]">
            Fits the systems you already run.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-4.5 max-w-[52ch] text-pretty font-mi-body text-[1.02rem] leading-[1.6] text-mi-cream/72">
            No rip-and-replace required. Miraee runs alongside your current infrastructure.
          </p>
        </Reveal>

        <div className="mt-[clamp(32px,5vw,56px)] border-t border-mi-cream/14">
          {ROWS.map((row, i) => (
            <Reveal
              key={row.n}
              delay={i * 60}
              className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] items-baseline gap-4 border-b border-mi-cream/12 py-6"
            >
              <div className="font-mi-accent text-[1.25rem] font-bold tracking-[-0.03em]">
                <span className="mr-2.5 font-mi-body text-[.7rem] font-bold tracking-[0.14em] text-mi-orange">
                  {row.n}
                </span>
                {row.title}
              </div>
              <div className="font-mi-body text-[.9rem] font-semibold leading-[1.5] text-mi-cream/80">
                {row.detail}
              </div>
              <div className="font-mi-body text-[.95rem] leading-[1.6] text-mi-cream/70">
                {row.body}
              </div>
              <div>
                <span
                  className="rounded-full border px-3 py-1.75 font-mi-body text-[.68rem] font-bold tracking-[0.06em]"
                  style={{
                    borderColor: `${row.tagColor}66`,
                    background: `${row.tagColor}1f`,
                    color: row.tagColor,
                  }}
                >
                  {row.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <Link
            to="/contact"
            className="mt-6 inline-block border-b border-mi-orange/50 pb-1 font-mi-body text-[.9rem] font-bold text-mi-orange no-underline"
          >
            Unified API and developer sandbox →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
