import { Reveal } from '@/components/motion/reveal';

const POINTS = [
  {
    title: 'MICE',
    body: 'Plan offsites, incentives, conferences and customer events once, and the system books everything directly from the plan.',
  },
  {
    title: 'AFTER 5PM AND HYPERLOCAL',
    body: 'Restaurants, events and hyperlocal experiences after hours, from the Abhee network.',
  },
  {
    title: 'BLEISURE AND PERSONAL TRAVEL',
    body: 'The same assistant plans personal leisure trips, booked at exclusive fares on personal cards, walled off from company visibility.',
  },
];

export function MiceBleisure() {
  return (
    <section className="bg-mi-cream py-[clamp(56px,8vw,110px)] text-background-dark">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] items-start gap-[clamp(28px,4vw,56px)]">
          <Reveal className="relative order-2 aspect-4/3 overflow-hidden rounded-[32px] border border-background-dark/14 bg-background-dark/5">
            <img
              src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=1600&q=70"
              alt="Colleagues at an offsite event mixing work and leisure travel"
              className="size-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <div>
            <Reveal className="font-mi-body text-[.7rem] font-bold tracking-[0.14em] text-mi-scarlet">
              MICE &amp; BLEISURE
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4.5 max-w-[20ch] font-heading text-background-dark text-section font-semibold text-balance">
                Beyond standard business travel.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-[44ch] text-pretty font-mi-body text-[1.04rem] leading-[1.6] text-background-dark/74">
                From complex team offsites to after-hours experiences, Miraee handles every
                dimension of travel.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4.5">
              {POINTS.map((point, i) => (
                <Reveal key={point.title} delay={240 + i * 80}>
                  <h3 className="m-0 font-mi-body text-[.72rem] font-bold tracking-[0.12em] text-background-dark/50">
                    {point.title}
                  </h3>
                  <p className="mt-2 font-mi-body text-[.96rem] leading-[1.6] text-background-dark/78">
                    {point.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
