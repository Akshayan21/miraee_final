import { Reveal } from '@/components/motion/reveal';

const CARDS = [
  {
    color: '#FF69AD',
    title: 'STRICT PERSONAL WALL',
    body: 'Corporate and personal travel are kept separate. When employees book personal trips on their own cards, that data remains completely walled off from the company.',
  },
  {
    color: 'var(--color-mi-blue-text)',
    title: 'DATA PROTECTION',
    body: 'All data shared during the 12-month savings analysis is governed by a mutual NDA. We require employee IDs only, no unnecessary personal information.',
  },
  {
    color: 'var(--color-mi-green-text)',
    title: 'INTELLIGENT TRACKING',
    body: 'We locate every traveler based on their itinerary, not by invasive GPS tracking.',
  },
  {
    color: 'var(--color-mi-amber-text)',
    title: 'AUDIT TRAILS',
    body: 'Approvals route to humans, policies are strictly enforced, and managers or people teams are notified only when an intervention truly matters.',
  },
];

export function TrustGrid() {
  return (
    <section className="border-t border-mi-cream/8 py-[clamp(56px,8vw,110px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <div className="mb-[clamp(28px,4vw,48px)] h-0.5 bg-gradient-to-r from-mi-orange via-mi-amber to-mi-rust" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6">
          {CARDS.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 80}
              as="li"
              className="list-none rounded-[32px] border border-mi-cream/12 bg-mi-cream/3.5 p-7"
            >
              <h3 className="m-0 font-mi-body text-[.72rem] font-bold tracking-[0.12em]" style={{ color: card.color }}>
                {card.title}
              </h3>
              <p className="mt-3.5 text-pretty font-mi-body text-[.98rem] leading-[1.6] text-mi-cream/78">
                {card.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
