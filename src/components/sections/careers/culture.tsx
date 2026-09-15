import { Reveal } from '@/components/motion/reveal';

const LOCATIONS = ['Austin, Texas', 'Hyderabad, India', '12+ countries'];

export function Culture() {
  return (
    <section className="border-t border-mi-cream/8 py-[clamp(56px,8vw,110px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <div className="mb-[clamp(28px,4vw,48px)] h-0.5 bg-gradient-to-r from-mi-orange via-mi-amber to-mi-rust" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] items-center gap-[clamp(28px,4vw,56px)]">
          <Reveal>
            <div className="font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
              CULTURE AND VALUES
            </div>
            <p className="mt-5 max-w-[46ch] text-pretty font-mi-body text-[clamp(1.05rem,1.3vw,1.2rem)] leading-[1.65] text-mi-cream/82">
              We are an engineering-led, AI-forward organisation. We believe in building agentic
              software that removes friction from human lives. Our global workforce is
              distributed across major hubs in Austin and Hyderabad, united by a mission to fix a
              deeply broken industry.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {LOCATIONS.map((loc) => (
                <span
                  key={loc}
                  className="rounded-full border border-mi-cream/20 px-4 py-2.25 font-mi-body text-[.8rem] font-semibold text-mi-cream/80"
                >
                  {loc}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal
            delay={120}
            className="relative aspect-4/3 overflow-hidden rounded-[32px] border border-mi-cream/12 bg-mi-cream/4"
          >
            <img
              src="https://images.unsplash.com/photo-1517940213731-39ace4728533?auto=format&fit=crop&w=1600&q=70"
              alt="Team photo"
              className="size-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
