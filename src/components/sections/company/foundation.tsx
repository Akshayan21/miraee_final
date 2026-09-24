import {
  Award,
  Users,
  Search,
  Building2,
  Plane,
  BedDouble,
  Compass,
  Globe,
} from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';
import { CountUp } from '@/components/motion/count-up';

const STATS = [
  { value: '15', label: 'YEARS, FOUNDED 2011', color: '#F25C05', count: false, Icon: Award },
  {
    value: '125M+',
    label: 'GLOBAL USERS',
    color: 'var(--color-mi-amber-text)',
    count: false,
    Icon: Users,
  },
  { value: '50M', label: 'DAILY SEARCHES', color: '#DE5533', count: false, Icon: Search },
  {
    value: 65000,
    label: 'BUSINESSES',
    color: 'var(--color-mi-blue-text)',
    count: true,
    Icon: Building2,
  },
  { value: '500+', label: 'AIRLINES', color: '#F25C05', count: false, Icon: Plane },
  {
    value: '2M+',
    label: 'HOTELS',
    color: 'var(--color-mi-amber-text)',
    count: false,
    Icon: BedDouble,
  },
  {
    value: '10M+',
    label: 'EXPERIENCES',
    color: 'var(--color-mi-green-text)',
    count: false,
    Icon: Compass,
  },
  { value: '12+', label: 'COUNTRIES', color: '#FF69AD', count: false, Icon: Globe },
];

export function Foundation() {
  return (
    <section className="border-t border-mi-cream/8 py-[clamp(56px,8vw,110px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <div className="mb-[clamp(28px,4vw,48px)] h-0.5 bg-gradient-to-r from-mi-orange via-mi-amber to-mi-rust" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] items-start gap-[clamp(28px,4vw,64px)]">
          <Reveal>
            <div className="font-mi-body text-[.7rem] font-bold tracking-[0.14em] text-mi-cream/45">
              OUR FOUNDATION · THE TABHI GROUP
            </div>
            <p className="mt-5 text-pretty font-mi-body text-[1.08rem] leading-[1.65] text-mi-cream/80">
              Miraee is a Tabhi group company. We built it because we watched businesses run a
              single trip across five disconnected systems. By putting the group&rsquo;s B2B
              travel marketplace behind agentic AI, Miraee brings institutional distribution power
              straight to your travel program.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="max-w-[22ch] font-heading text-section font-semibold text-balance">
              We ran the trips. We saw the handoffs.
            </h2>
            <p className="mt-4.5 max-w-[44ch] font-mi-body text-[1.02rem] leading-[1.6] text-mi-cream/74">
              Five owners, four handoffs, one traveler stuck in the middle. Miraee collapses that
              into one agent and one thread.
            </p>
          </Reveal>
        </div>

        <div className="mt-[clamp(40px,6vw,72px)] grid grid-cols-2 gap-px overflow-hidden rounded-[32px] border border-mi-cream/12 bg-mi-cream/12 sm:grid-cols-4">
          {STATS.map(({ Icon, ...stat }, i) => (
            <Reveal
              key={stat.label}
              delay={i * 60}
              className="group relative bg-background-dark px-5.5 py-7 transition-colors duration-300 hover:bg-mi-cream/[0.04]"
            >
              <Icon
                className="mb-3.5 size-5 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                style={{ color: stat.color }}
                strokeWidth={1.75}
              />
              <b
                className="block font-mi-display text-[clamp(1.9rem,3.4vw,2.8rem)] leading-none font-bold tracking-[-0.02em]"
                style={{ color: stat.color }}
              >
                {stat.count ? <CountUp value={stat.value as number} /> : stat.value}
              </b>
              <span className="mt-2.5 block font-mi-body text-[.64rem] leading-[1.4] font-bold tracking-[0.1em] text-mi-cream/50">
                {stat.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
