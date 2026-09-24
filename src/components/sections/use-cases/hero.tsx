import { Reveal } from '@/components/motion/reveal';
import { HeroBackground } from '@/components/ui/hero-background';

export function UseCasesHero() {
  return (
    <section className="relative overflow-hidden pt-[clamp(120px,16vh,180px)] pb-[clamp(48px,7vw,80px)]">
      <HeroBackground />
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal visibleOnLoad className="flex items-center gap-3 font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
          USE CASES
        </Reveal>
        <Reveal visibleOnLoad delay={80}>
          <h1 className="mt-6 max-w-[22ch] text-balance font-heading text-hero font-semibold">
            Every kind of trip your company takes.
          </h1>
        </Reveal>
        <Reveal visibleOnLoad delay={160}>
          <p className="mt-8 max-w-[48ch] font-mi-body text-[clamp(1.05rem,1.3vw,1.24rem)] leading-[1.55] text-mi-cream/74">
            One platform, one ledger, one policy engine.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
