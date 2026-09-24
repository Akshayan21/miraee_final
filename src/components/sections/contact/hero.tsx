import { Reveal } from '@/components/motion/reveal';
import { StepsExplainer } from './steps-explainer';
import { DemoFormPanel } from './demo-form-panel';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[clamp(120px,16vh,180px)] pb-[clamp(64px,9vw,120px)]">
      <div className="mx-auto grid w-[min(1360px,100%-2*clamp(20px,4vw,64px))] grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] items-start gap-[clamp(32px,5vw,72px)]">
        <div className="min-w-0">
          <Reveal visibleOnLoad className="flex items-center gap-3 font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
            CONTACT / DEMO
          </Reveal>
          <Reveal visibleOnLoad delay={80}>
            <h1 className="mt-6 max-w-[20ch] text-balance font-heading text-mi-cream text-hero font-semibold">
              See the agentic platform in action.
            </h1>
          </Reveal>
          <Reveal visibleOnLoad delay={160}>
            <p className="mt-7 max-w-[46ch] text-pretty font-mi-body text-[clamp(1.05rem,1.3vw,1.22rem)] leading-[1.55] text-mi-cream/74">
              Let us show you how effortless, personalized and rewarding travel can be.
            </p>
          </Reveal>
          <StepsExplainer />
        </div>

        <DemoFormPanel />
      </div>
    </section>
  );
}
