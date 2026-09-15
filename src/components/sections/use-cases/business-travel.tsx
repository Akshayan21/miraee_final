import { Reveal } from '@/components/motion/reveal';

const POINTS = [
  {
    title: 'BOOKED FROM A SENTENCE',
    body: 'Describe the trip and Miraee plans it, priced and in policy from the first result.',
  },
  {
    title: 'SPEND THAT TRACKS ITSELF',
    body: 'An overview of total trips and spend, with savings rate and rewards always in view.',
  },
  {
    title: 'EXPENSES THAT CLOSE THEMSELVES',
    body: 'Per diem rules apply at search and reconciliation happens automatically. Nothing to file.',
  },
];

export function BusinessTravel() {
  return (
    <section className="border-t border-mi-cream/8 py-[clamp(56px,8vw,110px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <div className="mb-[clamp(28px,4vw,48px)] h-0.5 bg-gradient-to-r from-mi-orange via-mi-amber to-mi-rust" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] items-start gap-[clamp(28px,4vw,56px)]">
          <div>
            <Reveal className="font-mi-body text-[.7rem] font-bold tracking-[0.14em] text-mi-orange">
              BUSINESS TRAVEL
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4.5 max-w-[20ch] font-mi-accent text-[clamp(1.8rem,3.4vw,2.9rem)] leading-[1.06] font-bold tracking-[-0.035em]">
                The everyday trip, made effortless.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-[44ch] text-pretty font-mi-body text-[1.04rem] leading-[1.6] text-mi-cream/74">
                Describe where you need to be and Miraee books it in policy. No forms, no report,
                no back-and-forth.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4.5">
              {POINTS.map((point, i) => (
                <Reveal key={point.title} delay={240 + i * 80}>
                  <h3 className="m-0 font-mi-body text-[.72rem] font-bold tracking-[0.12em] text-mi-cream/50">
                    {point.title}
                  </h3>
                  <p className="mt-2 font-mi-body text-[.96rem] leading-[1.6] text-mi-cream/80">
                    {point.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal
            delay={120}
            className="relative aspect-4/3 overflow-hidden rounded-[32px] border border-mi-cream/12 bg-mi-cream/4"
          >
            <img
              src="https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=1600&q=70"
              alt="Business travel"
              className="size-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
