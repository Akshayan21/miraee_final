import { Link } from 'react-router-dom';
import { Reveal } from '@/components/motion/reveal';
import { CountUp } from '@/components/motion/count-up';
import { photography } from '@/content/photography';

const STATS = [
  { value: '20–30%', label: 'Travel savings, compared like for like', color: '#CC3600', count: false },
  { value: 100, label: 'Of the journey managed by the agent', color: '#F25C05', count: true },
  { value: '1', label: 'Platform for business and personal travel', color: 'var(--color-mi-rust)', count: false },
];

export function BusinessCase() {
  return (
    <section className="relative overflow-hidden border-y border-mi-cream/10 bg-mi-cream/3 py-[clamp(56px,7vw,96px)] text-mi-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[18%] right-[-10rem] size-[28rem] rounded-full bg-mi-orange/8 blur-3xl"
      />
      <div className="relative mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal className="flex items-center gap-3 font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/50">
          THE BUSINESS CASE
        </Reveal>
        <div className="mt-[clamp(28px,4vw,52px)] grid items-center gap-[clamp(32px,5vw,80px)] lg:grid-cols-[minmax(0,.9fr)_minmax(420px,1.1fr)]">
          <Reveal delay={80} className="lg:pb-8">
            <h2 className="max-w-[16ch] text-balance font-mi-accent text-[clamp(2.5rem,4.7vw,4.35rem)] leading-[1.1] font-semibold tracking-[-0.055em] text-mi-cream">
              Loved by employees. Trusted by finance.
            </h2>
            <div aria-hidden="true" className="mt-8 h-px w-20 bg-mi-orange" />
          </Reveal>
          <Reveal delay={160} className="relative justify-self-end w-full max-w-[680px]">
            <div aria-hidden="true" className="absolute -top-4 -right-4 -bottom-4 left-12 rounded-[32px] border border-mi-orange/25 bg-mi-orange/9" />
            <figure className="relative m-0 aspect-[16/10] overflow-hidden rounded-[28px] border border-mi-cream/10 bg-mi-cream/5 shadow-[0_28px_58px_rgba(69,14,20,.16)]">
              <img
                {...photography['business-case-people']} sizes="(min-width: 1440px) 700px, (min-width: 1024px) 50vw, (min-width: 768px) 700px, calc(100vw - 40px)" decoding="async"
                alt="Three business travellers ready for their next trip"
                className="size-full object-cover object-[70%_center]"
                loading="lazy"
              />
            </figure>
          </Reveal>
        </div>
        <div className="mt-[clamp(32px,4vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] border-y border-mi-cream/14">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 80}
              className="border-b border-mi-cream/14 py-7 sm:border-b-0 sm:px-6 sm:first:pl-0 sm:last:pr-0"
            >
              <b
                className="block font-mi-display text-[clamp(2.6rem,5vw,4.4rem)] leading-none font-bold tracking-[-0.02em]"
                style={{ color: stat.color }}
              >
                {stat.count ? <CountUp value={stat.value as number} suffix="%" /> : stat.value}
              </b>
              <h4 className="mt-4 font-mi-body text-[.9rem] leading-[1.5] font-bold tracking-normal text-mi-cream/62">
                {stat.label}
              </h4>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 max-w-[65ch] text-sm leading-relaxed text-mi-cream/75">Savings depend on routes, availability and your travel mix. <Link to="/pricing" className="underline underline-offset-4 hover:text-mi-orange">See how we compare fares</Link>.</p>
      </div>
    </section>
  );
}
