import { Reveal } from '@/components/motion/reveal';
import { HeroVortexBackground } from '@/components/ui/hero-vortex-background';
import { photography } from '@/content/photography';

const PILLS = [
  { label: 'Employees', href: '#employees' },
  { label: 'Managers', href: '#managers' },
  { label: 'Finance', href: '#finance' },
  { label: 'Travel Leads', href: '#travel-leads' },
  { label: 'Admins', href: '#admins' },
  { label: 'HR Teams', href: '#people' },
];

export function SolutionsHero() {
  return (
    <section className="relative overflow-hidden pt-[clamp(120px,16vh,180px)] pb-[clamp(48px,7vw,80px)]">
      <HeroVortexBackground />
      <div className="mx-auto grid w-[min(1360px,100%-2*clamp(20px,4vw,64px))] items-end gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
        <div>
        <Reveal className="flex items-center gap-3 font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
          SOLUTIONS BY ROLE AND USE CASE
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-[22ch] text-balance font-mi-display text-[clamp(2.4rem,6vw,5rem)] leading-[.96] font-black tracking-[-0.02em] uppercase">
            One platform, six views.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-[54ch] text-pretty font-mi-body text-[clamp(1.05rem,1.3vw,1.24rem)] leading-[1.55] text-mi-cream/74">
            What changes for employees, managers, finance, travel leads, admins and HR teams —
            and every kind of company travel.
          </p>
        </Reveal>
        <Reveal delay={240} className="mt-8 flex flex-wrap gap-2.5">
          {PILLS.map((pill) => (
            <a
              key={pill.label}
              href={pill.href}
              className="rounded-full border border-mi-cream/20 px-4 py-2.5 font-mi-body text-[.8rem] font-semibold text-mi-cream no-underline"
            >
              {pill.label}
            </a>
          ))}
          <a
            href="/use-cases"
            className="rounded-full border border-mi-orange/50 bg-mi-orange/12 px-4 py-2.5 font-mi-body text-[.8rem] font-semibold text-mi-amber-text no-underline"
          >
            Use cases →
          </a>
        </Reveal>
        </div>
        <Reveal delay={180} className="relative aspect-[4/3] w-full overflow-hidden rounded-[clamp(22px,3vw,32px)] border border-mi-cream/14">
          <img {...photography['solutions-hero-shared-view']} sizes="(min-width: 1440px) 560px, (min-width: 1024px) 42vw, calc(100vw - 40px)" decoding="async" loading="eager" fetchPriority="high" alt="Six professionals collaborating around a shared travel-planning view" className="size-full object-cover object-[54%_center]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-background-dark/45 via-transparent to-mi-orange/10" />
          <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-full border border-mi-cream/20 bg-background-dark/70 px-3 py-2 text-center font-mi-body text-[clamp(.56rem,1.5vw,.68rem)] font-bold tracking-[.1em] text-mi-cream/80 backdrop-blur-sm sm:bottom-5 sm:left-5 sm:px-4">TRAVEL, SEEN FROM EVERY ANGLE</div>
        </Reveal>
      </div>
    </section>
  );
}
