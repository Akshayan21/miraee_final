import { Reveal } from '@/components/motion/reveal';
import { CountUp } from '@/components/motion/count-up';
import { photography } from '@/content/photography';

const STATS = [
  { value: '20–30%', label: 'TRAVEL SAVINGS, VALIDATED LIKE FOR LIKE', color: '#CC3600', count: false },
  { value: 100, label: 'OF THE JOURNEY MANAGED BY THE AGENT', color: '#F25C05', count: true },
  { value: '1', label: 'PLATFORM FOR BUSINESS AND PERSONAL TRAVEL', color: 'var(--color-mi-rust)', count: false },
];

export function BusinessCase() {
  return (
    <section className="relative overflow-hidden bg-mi-cream py-[clamp(72px,10vw,140px)] text-background-dark">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[18%] right-[-10rem] size-[28rem] rounded-full bg-mi-orange/8 blur-3xl"
      />
      <div className="relative mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal className="flex items-center gap-3 font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-background-dark/50">
          <b className="font-mi-body text-[.82rem] font-bold text-mi-scarlet">04</b>
          THE BUSINESS CASE
        </Reveal>
        <div className="mt-[clamp(28px,4vw,52px)] grid items-center gap-[clamp(32px,5vw,80px)] lg:grid-cols-[minmax(0,.9fr)_minmax(420px,1.1fr)]">
          <Reveal delay={80} className="lg:pb-8">
            <h2 className="max-w-[16ch] text-balance font-mi-accent text-[clamp(2.5rem,4.7vw,4.35rem)] leading-[.98] font-bold tracking-[-0.055em] text-background-dark">
              Loved by employees. Trusted by finance.
            </h2>
            <div aria-hidden="true" className="mt-8 h-px w-20 bg-mi-orange" />
          </Reveal>
          <Reveal delay={160} className="relative justify-self-end w-full max-w-[680px]">
            <div aria-hidden="true" className="absolute -top-4 -right-4 -bottom-4 left-12 rounded-[32px] border border-mi-orange/25 bg-mi-orange/9" />
            <figure className="relative m-0 aspect-[16/10] overflow-hidden rounded-[28px] border border-background-dark/10 bg-background-dark/5 shadow-[0_28px_58px_rgba(69,14,20,.16)]">
              <img
                {...photography['business-case-people']} sizes="(min-width: 1440px) 700px, (min-width: 1024px) 50vw, (min-width: 768px) 700px, calc(100vw - 40px)" decoding="async"
                alt="Three business travellers ready for their next trip"
                className="size-full object-cover object-[70%_center]"
                loading="lazy"
              />
            </figure>
          </Reveal>
        </div>
        <div className="mt-[clamp(56px,8vw,112px)] grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] border-y border-background-dark/14">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 80}
              className="border-r border-background-dark/14 py-8 pr-6 pl-6 first:pl-0 last:border-r-0 last:pr-0 lg:py-10"
            >
              <b
                className="block font-mi-display text-[clamp(2.6rem,5vw,4.4rem)] leading-none font-bold tracking-[-0.02em]"
                style={{ color: stat.color }}
              >
                {stat.count ? <CountUp value={stat.value as number} suffix="%" /> : stat.value}
              </b>
              <h4 className="mt-4 font-mi-body text-[.78rem] leading-[1.5] font-bold tracking-[0.1em] text-background-dark/62">
                {stat.label}
              </h4>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
