import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';
import { cn } from '@/lib/utils';

const ROLES = [
  {
    color: '#FF69AD',
    audience: 'Travelers',
    title: 'A personal executive assistant',
    points: [
      'Voice, text and avatar-driven assistant',
      'Calendar-aware, completely hands-free',
      'Auto-rebooks during flight delays',
    ],
    stat: ['24/7', 'Hands-free, always on'],
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=facearea&facepad=2.5&w=600&h=800&q=80',
  },
  {
    color: 'var(--color-mi-green-text)',
    audience: 'Finance',
    title: 'Zero-touch expenses',
    points: [
      'Receipts captured and GL-coded automatically',
      'Policy-checked and reconciled without forms',
      'Reports filed by the time you land',
    ],
    stat: ['0', 'Manual expense forms'],
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=facearea&facepad=2.5&w=600&h=800&q=80',
  },
  {
    color: '#F25C05',
    audience: 'Travel Admins',
    title: 'Stacked savings',
    points: [
      'Four contract sources stacked per search',
      'Tabhi wholesale plus your negotiated rates',
      'The best bookable fare always wins',
    ],
    stat: ['20–30%', 'Fare savings, validated'],
    photo: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2.5&w=600&h=800&q=80',
  },
  {
    color: 'var(--color-mi-blue-text)',
    audience: 'HR Teams',
    title: 'Proactive duty of care',
    points: [
      'Every traveler located by their itinerary',
      'Weather and disruption monitoring per PNR',
      'Managers notified only when it matters',
    ],
    stat: ['100%', 'Travelers located, always'],
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2.5&w=600&h=800&q=80',
  },
];

export function RoleGrid() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-[clamp(48px,6vw,88px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Reveal className="flex items-center gap-3 font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
            WHAT CHANGES, BY ROLE
          </Reveal>
          <Reveal delay={60} className="font-mi-body text-[.72rem] font-semibold text-mi-cream/35">
            Select a role to explore
          </Reveal>
        </div>

        {/* Desktop: expanding accordion rail */}
        <Reveal
          delay={80}
          as="div"
          className="mt-8 hidden gap-3 lg:flex"
          style={{ height: 460 }}
          onMouseLeave={() => setActive(null)}
        >
          {ROLES.map((role, i) => {
            const isActive = active === i;
            const isDimmed = active !== null && !isActive;
            return (
              <div
                key={role.audience}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(i); }
                }}
                className="relative cursor-pointer overflow-hidden rounded-[24px] outline-none focus-visible:ring-2 focus-visible:ring-mi-orange focus-visible:ring-offset-4 transition-[flex-grow] duration-500 ease-(--motion-ease)"
                style={{ flexGrow: isActive ? 3.4 : 1, flexBasis: 0, minWidth: 0 }}
              >
                <img
                  src={role.photo}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className={cn(
                    'absolute inset-0 size-full object-cover transition-[filter,opacity] duration-500',
                    isDimmed && 'opacity-70 grayscale',
                  )}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,6,4,.92)_0%,rgba(10,6,4,.35)_46%,rgba(10,6,4,.05)_72%)]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 transition-opacity duration-500"
                  style={{ background: role.color, opacity: isActive ? 1 : 0.5 }}
                />

                <div className="absolute inset-0 flex flex-col justify-end p-6 [--color-mi-cream:#f3f1ed] [--color-mi-green-text:#71e6a7] [--color-mi-blue-text:#a6b8ff]">
                  <span className="font-mi-body text-[.68rem] font-bold tracking-[0.12em] text-mi-cream/60">
                    BUILT FOR
                  </span>
                  <h3
                    className="mt-1 font-mi-accent text-[clamp(1.15rem,1.6vw,1.5rem)] leading-[1.05] font-bold tracking-[-0.03em] whitespace-nowrap"
                    style={{ color: isActive ? role.color : '#f3f1ed' }}
                  >
                    {role.audience}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#f3f1ed]/85">{role.title}</p>
                  <div
                    className="grid transition-[grid-template-rows,opacity] duration-400 ease-(--motion-ease)"
                    style={{ gridTemplateRows: isActive ? '1fr' : '0fr', opacity: isActive ? 1 : 0 }}
                  >
                    <div className="overflow-hidden">

                      <ul className="mt-3 flex flex-col gap-2">
                        {role.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 font-mi-body text-[.86rem] leading-[1.4] text-mi-cream/78">
                            <span
                              aria-hidden="true"
                              className="mt-[7px] size-1.5 flex-none rounded-full"
                              style={{ background: role.color }}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 inline-flex items-baseline gap-2 rounded-full border border-mi-cream/20 bg-mi-cream/8 px-3.5 py-2">
                        <span className="font-mi-accent text-[1.1rem] leading-none font-bold" style={{ color: role.color }}>
                          {role.stat[0]}
                        </span>
                        <span className="font-mi-body text-[.72rem] font-semibold text-mi-cream/70">{role.stat[1]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  className="absolute top-5 right-5 grid size-8 place-items-center rounded-full border border-mi-cream/25 bg-white/10 text-white transition-transform duration-500"
                  style={{ transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            );
          })}
        </Reveal>

        {/* Mobile / touch: tap-to-expand accordion, stacked */}
        <div className="mt-8 flex flex-col gap-3 lg:hidden">
          {ROLES.map((role, i) => {
            const isActive = active === i;
            return (
              <div key={role.audience} className="overflow-hidden rounded-[22px] border border-mi-cream/10">
                <button
                  type="button"
                  aria-expanded={isActive}
                  onClick={() => setActive(isActive ? null : i)}
                  className="flex w-full items-center gap-4 p-4 text-left"
                >
                  <img
                    src={role.photo}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="size-14 flex-none rounded-full object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <span className="block font-mi-body text-[.65rem] font-bold tracking-[0.12em] text-mi-cream/48">
                      BUILT FOR
                    </span>
                    <h3 className="font-mi-accent text-[1.1rem] font-bold" style={{ color: role.color }}>
                      {role.audience}
                    </h3>
                  </div>
                  <ArrowUpRight
                    className="size-5 flex-none text-mi-cream/50 transition-transform duration-300"
                    style={{ transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  />
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-400 ease-(--motion-ease)"
                  style={{ gridTemplateRows: isActive ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-5">
                      <p className="font-mi-body text-[.78rem] font-bold tracking-[.02em] text-mi-cream/85">{role.title}</p>
                      <ul className="mt-3 flex flex-col gap-2">
                        {role.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 font-mi-body text-[.9rem] leading-[1.5] text-mi-cream/74">
                            <span aria-hidden="true" className="mt-[7px] size-1.5 flex-none rounded-full" style={{ background: role.color }} />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 inline-flex items-baseline gap-2 rounded-full border border-mi-cream/16 bg-mi-cream/4 px-3.5 py-2">
                        <span className="font-mi-accent text-[1.1rem] leading-none font-bold" style={{ color: role.color }}>
                          {role.stat[0]}
                        </span>
                        <span className="font-mi-body text-[.72rem] font-semibold text-mi-cream/70">{role.stat[1]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
