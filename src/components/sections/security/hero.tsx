import { Reveal } from '@/components/motion/reveal';
import { HeroVortexBackground } from '@/components/ui/hero-vortex-background';

const PILLS = [
  { label: '01 Identity, SSO and SCIM', active: false },
  { label: '02 Policy, configurable', active: false },
  { label: '03 Approval, human when needed', active: false },
  { label: '04 Evidence, always logged', active: true },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[clamp(120px,16vh,180px)] pb-[clamp(48px,7vw,80px)]">
      <HeroVortexBackground />
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal visibleOnLoad className="flex items-center gap-3 font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
          SECURITY / TRUST
        </Reveal>
        <Reveal visibleOnLoad delay={80}>
          <h1 className="mt-6 max-w-[22ch] text-balance font-mi-display text-[clamp(2.2rem,5.6vw,5rem)] leading-[.96] font-black tracking-[-0.02em] uppercase">
            Enterprise-Grade Security and Control.
          </h1>
        </Reveal>
        <Reveal visibleOnLoad delay={160}>
          <p className="mt-8 max-w-[50ch] font-mi-body text-[clamp(1.05rem,1.3vw,1.24rem)] leading-[1.55] text-mi-cream/74">
            We protect your corporate data while strictly respecting employee privacy.
          </p>
        </Reveal>
        <Reveal visibleOnLoad delay={240} className="mt-8 flex flex-wrap gap-2.5">
          {PILLS.map((pill) => (
            <span
              key={pill.label}
              className={
                pill.active
                  ? 'rounded-full border border-mi-orange/50 bg-mi-orange/12 px-4 py-2.25 font-mi-body text-[.78rem] font-semibold text-mi-amber-text'
                  : 'rounded-full border border-mi-cream/20 px-4 py-2.25 font-mi-body text-[.78rem] font-semibold text-mi-cream/80'
              }
            >
              {pill.label}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
