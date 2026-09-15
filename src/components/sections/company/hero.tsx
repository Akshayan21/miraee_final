import { Reveal } from '@/components/motion/reveal';

export function Hero() {
  return (
    <section className="bg-[radial-gradient(110%_80%_at_85%_0%,var(--color-glow-85),rgba(17,14,9,0)_60%)] pt-[clamp(120px,16vh,180px)] pb-[clamp(48px,7vw,80px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal className="flex items-center gap-3 font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
          THE COMPANY
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 font-mi-display text-[clamp(2.6rem,6.4vw,5.6rem)] leading-[.96] font-black tracking-[-0.02em] uppercase">
            The agentic core.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-[54ch] text-pretty font-mi-body text-[clamp(1.05rem,1.3vw,1.24rem)] leading-[1.55] text-mi-cream/74">
            Miraee is the employee travel product of the Tabhi group, built on the supply,
            payments and engineering the group already runs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
