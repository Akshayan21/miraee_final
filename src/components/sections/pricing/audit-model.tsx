import { Reveal } from '@/components/motion/reveal';

const CARDS = [
  {
    accent: false,
    color: '#F25C05',
    label: '01 SHARE 12 MONTHS OF DATA',
    body: 'Under a mutual NDA, you send a booking-level export of air, hotel, car and expense, using employee IDs only.',
  },
  {
    accent: false,
    color: 'var(--color-mi-amber-text)',
    label: '02 MIRAEE RE-PRICES EVERY BOOKING',
    body: 'We run your exact routes, dates and classes against our four stacked contract layers to find fare savings, process leakage and behavioural opportunities.',
  },
  {
    accent: true,
    color: '#DE5533',
    label: '03 YOUR NUMBER IN TWO WEEKS',
    body: 'We present your exact savings potential, lever by lever. A pilot follows only if the numbers match your goals.',
  },
];

export function AuditModel() {
  return (
    <section className="border-t border-mi-cream/8 py-[clamp(64px,9vw,120px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal className="mb-[clamp(32px,5vw,64px)] h-0.5 bg-gradient-to-r from-mi-orange via-mi-amber to-mi-rust" />
        <Reveal>
          <h2 className="font-heading text-section font-semibold text-balance">
            The audit-first model
          </h2>
        </Reveal>
        <div className="mt-[clamp(32px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6">
          {CARDS.map((card, i) => (
            <Reveal
              key={card.label}
              delay={i * 80}
              className={
                card.accent
                  ? 'rounded-[32px] border border-mi-orange/32 bg-[linear-gradient(140deg,rgba(242,92,5,.14),rgba(17,14,9,0)_72%)] p-7'
                  : 'rounded-[32px] border border-mi-cream/12 bg-mi-cream/3.5 p-7'
              }
            >
              <b
                className="block font-mi-body text-[.68rem] font-bold tracking-[0.14em]"
                style={{ color: card.color }}
              >
                {card.label}
              </b>
              <p
                className={
                  card.accent
                    ? 'mt-4 text-pretty font-mi-body text-[.98rem] leading-[1.6] text-mi-cream/80'
                    : 'mt-4 text-pretty font-mi-body text-[.98rem] leading-[1.6] text-mi-cream/76'
                }
              >
                {card.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
