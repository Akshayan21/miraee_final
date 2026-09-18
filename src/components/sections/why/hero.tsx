import { Reveal } from '@/components/motion/reveal';
import { HeroVortexBackground } from '@/components/ui/hero-vortex-background';

export function WhyHero() {
  return (
    <section className="relative overflow-hidden pt-[clamp(120px,16vh,180px)] pb-[clamp(56px,8vw,96px)]">
      <HeroVortexBackground />
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal visibleOnLoad className="flex items-center gap-3 font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
          WHY MIRAEE
        </Reveal>
        <Reveal visibleOnLoad delay={80}>
          <h1 className="mt-6 max-w-[24ch] text-balance font-mi-display text-[clamp(2.4rem,6vw,5.4rem)] leading-[.96] font-black tracking-[-0.02em] uppercase">
            Your travel program needs a unified framework.
          </h1>
        </Reveal>
        <Reveal visibleOnLoad delay={160}>
          <p className="mt-8 max-w-[54ch] text-pretty font-mi-body text-[clamp(1.05rem,1.3vw,1.24rem)] leading-[1.55] text-mi-cream/74">
            Booking in one tool, policy in another, expense in a third. Miraee runs the whole
            journey as one system.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
