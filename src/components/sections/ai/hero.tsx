import { Reveal } from '@/components/motion/reveal';
import travelerImage from '@/assets/images/executive-travel-portrait-1200.webp';

export function Hero() {
  return (
    <section className="bg-[radial-gradient(110%_80%_at_80%_0%,rgba(115,73,245,.18),rgba(17,14,9,0)_58%),radial-gradient(80%_70%_at_10%_100%,rgba(242,92,5,.16),rgba(17,14,9,0)_65%)] pt-[clamp(120px,16vh,180px)] pb-[clamp(56px,8vw,96px)]">
      <div className="mx-auto grid w-[min(1360px,100%-2*clamp(20px,4vw,64px))] items-end gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
        <div>
        <Reveal visibleOnLoad className="flex items-center gap-3 font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
          AI &amp; TECHNOLOGY
        </Reveal>
        <Reveal visibleOnLoad delay={80}>
          <h1 className="mt-6 max-w-[20ch] text-balance font-mi-display text-[clamp(2.4rem,6vw,5.4rem)] leading-[.96] font-black tracking-[-0.02em] uppercase">
            The intelligence beneath every trip.
          </h1>
        </Reveal>
        <Reveal visibleOnLoad delay={160}>
          <p className="mt-8 max-w-[54ch] text-pretty font-mi-body text-[clamp(1.05rem,1.3vw,1.24rem)] leading-[1.55] text-mi-cream/74">
            Miraee runs on the Tabhi Brain, the same engineering group behind the supply, the
            payments and the automation the trip already depends on.
          </p>
        </Reveal>
        </div>
        <Reveal visibleOnLoad delay={180} className="relative aspect-[4/3] w-full overflow-hidden rounded-[clamp(22px,3vw,32px)] border border-mi-cream/14">
          <img src={travelerImage} alt="Traveller using technology while on the move" className="size-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-tr from-background-dark/55 via-transparent to-[#7349F5]/25" />
          <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-full border border-mi-cream/20 bg-background-dark/70 px-3 py-2 text-center font-mi-body text-[clamp(.56rem,1.5vw,.68rem)] font-bold tracking-[.1em] text-mi-cream/80 backdrop-blur-sm sm:bottom-5 sm:left-5 sm:px-4">INTELLIGENCE IN MOTION</div>
        </Reveal>
      </div>
    </section>
  );
}
