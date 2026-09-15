import { Reveal } from '@/components/motion/reveal';

const ROLES = [
  {
    color: '#FF69AD',
    bg: 'rgba(255,105,173,.16)',
    border: 'rgba(255,105,173,.4)',
    audience: 'Travelers',
    title: 'A personal executive assistant',
    body: 'Give your team a voice, text and avatar-driven assistant that is calendar-aware and completely hands-free. It handles corporate trips, remembers preferences, and automatically rebooks during flight delays.',
    path: 'M21 12a8 8 0 0 1-8 8H8l-5 3 1.5-4.5A8 8 0 1 1 21 12Z',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80',
  },
  {
    color: 'var(--color-mi-green-text)',
    bg: 'rgba(0,191,98,.14)',
    border: 'rgba(0,191,98,.4)',
    audience: 'Finance',
    title: 'Zero-touch expenses',
    body: 'Expense reports are filed by the time the plane lands. Receipts are automatically captured, GL-coded, policy-checked and reconciled without manual forms.',
    path: 'M4 4h16v13a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z M8 9h8M8 13h5',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80',
  },
  {
    color: '#F25C05',
    bg: 'rgba(242,92,5,.16)',
    border: 'rgba(242,92,5,.45)',
    audience: 'Travel Admins',
    title: 'Stacked savings',
    body: 'Stop paying retail-plus fares. We stack four contract sources on every search: Tabhi wholesale rates, your own negotiated rates, our direct supplier deals and third-party content. The best bookable fare always wins.',
    path: 'M4 20V10M10 20V6M16 20v-7M22 20V4',
    photo: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80',
  },
  {
    color: 'var(--color-mi-blue-text)',
    bg: 'rgba(128,155,255,.16)',
    border: 'rgba(128,155,255,.42)',
    audience: 'HR Teams',
    title: 'Proactive duty of care',
    body: 'Every traveler is located accurately by their itinerary. Travel alerts, weather updates and disruption monitoring per PNR, notifying managers only when it truly matters.',
    path: 'M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z',
    circle: true,
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80',
  },
];

export function RoleGrid() {
  return (
    <section className="py-[clamp(72px,10vw,140px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal className="flex items-center gap-3 font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
          WHAT CHANGES, BY ROLE
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {ROLES.map((role, i) => (
            <Reveal
              key={role.audience}
              delay={i * 80}
              as="li"
              className="relative flex min-h-[300px] list-none flex-col overflow-hidden rounded-[28px] border border-mi-cream/10 bg-mi-cream/3.5 p-7 md:p-8"
              style={{ background: `linear-gradient(135deg, ${role.bg} 0%, rgba(255,255,255,.035) 38%, rgba(255,255,255,.02) 100%)` }}
            >
              <div aria-hidden="true" className="absolute top-0 right-0 h-px w-1/2" style={{ background: role.color }} />
              <div className="flex items-center gap-4">
                <span className="relative inline-block size-[72px] shrink-0">
                  <img
                    src={role.photo}
                    alt=""
                    aria-hidden="true"
                    className="size-[72px] rounded-full object-cover ring-2"
                    style={{ ['--tw-ring-color' as string]: role.border }}
                    loading="lazy"
                  />
                  <span
                    className="absolute -right-1 -bottom-1 grid size-7 place-items-center rounded-full border"
                    style={{ background: role.bg, borderColor: role.border }}
                  >
                    <svg viewBox="0 0 24 24" className="size-3.5" style={{ stroke: role.color }} fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d={role.path} />
                      {role.circle && <circle cx="12" cy="10" r="2.6" />}
                    </svg>
                  </span>
                </span>
                <div className="min-w-0">
                  <span className="block font-mi-body text-[.68rem] font-bold tracking-[0.12em] text-mi-cream/48">
                    BUILT FOR
                  </span>
                  <h3 className="mt-1 font-mi-accent text-[clamp(1.3rem,1.8vw,1.65rem)] leading-[1.05] font-bold tracking-[-0.035em]" style={{ color: role.color }}>
                    {role.audience}
                  </h3>
                </div>
              </div>
              <div className="mt-auto border-t border-mi-cream/12 pt-6">
                <h4 className="font-mi-body text-[.72rem] font-bold tracking-[0.1em] text-mi-cream/72">
                  {role.title}
                </h4>
                <p className="mt-3 max-w-[55ch] text-pretty font-mi-body text-[.98rem] leading-[1.6] text-mi-cream/74">
                {role.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
