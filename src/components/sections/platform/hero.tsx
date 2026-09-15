import { Reveal } from '@/components/motion/reveal';
import { photography } from '@/content/photography';

export function Hero() {
  return (
    <section className="bg-[radial-gradient(110%_80%_at_80%_0%,var(--color-glow-85),rgba(17,14,9,0)_60%)] pt-[clamp(120px,16vh,180px)] pb-[clamp(56px,8vw,96px)]">
      <div className="mx-auto grid w-[min(1360px,100%-2*clamp(20px,4vw,64px))] items-center gap-10 lg:grid-cols-[minmax(0,.92fr)_minmax(420px,1.08fr)] lg:gap-14">
        <div>
          <Reveal className="flex items-center gap-3 font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
            PLATFORM
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-[16ch] text-balance font-mi-display text-[clamp(2.4rem,5.4vw,5.1rem)] leading-[.96] font-black tracking-[-0.02em] uppercase">
              Welcome to the Agentic Era of Travel.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-[50ch] text-pretty font-mi-body text-[clamp(1.05rem,1.3vw,1.24rem)] leading-[1.55] text-mi-cream/74">
              We have moved beyond the digital search-and-click era. Miraee offers a swarm of AI
              agents that execute the entire travel lifecycle end to end, with a human always in
              the loop.
            </p>
          </Reveal>
        </div>
        <Reveal delay={140} className="relative justify-self-end w-full max-w-[700px]">
          <div aria-hidden="true" className="absolute -top-4 -right-4 -bottom-4 left-10 rounded-[32px] border border-mi-orange/22 bg-mi-orange/8" />
          <figure className="relative m-0 aspect-[4/3] overflow-hidden rounded-[28px] border border-mi-cream/14 bg-mi-cream/4 shadow-[0_30px_64px_rgba(0,0,0,.28)]">
            <img {...photography['platform-hero-traveler']} sizes="(min-width: 1440px) 700px, (min-width: 1024px) 50vw, (min-width: 768px) 700px, calc(100vw - 40px)" decoding="async" loading="eager" fetchPriority="high" alt="Business traveller using Miraee as she arrives at her hotel" className="size-full object-cover object-[72%_top]" />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
