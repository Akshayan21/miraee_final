import { Reveal } from '@/components/motion/reveal';

const POINTS = [
  {
    title: 'REBOOKING BEFORE YOU ASK',
    body: 'Miraee watches for disruption and offers a rebooked option, often before the airline announces it.',
  },
  {
    title: 'EVERYONE LOCATED, IN REAL TIME',
    body: 'Live traveller location on the map, so the team always knows who is affected and where.',
  },
  {
    title: 'ONE CONSOLE FOR THE RESPONSE',
    body: 'Duty of care runs from the same screen, so travel leads, admins and people teams act on the same picture.',
  },
];

export function EmergencyDisruption() {
  return (
    <section className="border-t border-mi-cream/8 py-[clamp(56px,8vw,110px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] items-start gap-[clamp(28px,4vw,56px)]">
          <Reveal className="relative order-2 aspect-4/3 overflow-hidden rounded-[32px] border border-mi-cream/12 bg-mi-cream/4">
            <img
              src="https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&w=1600&q=70"
              alt="Emergency and disruption"
              className="size-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <div>
            <Reveal className="font-mi-body text-[.7rem] font-bold tracking-[0.14em] text-mi-rust">
              EMERGENCY &amp; DISRUPTION
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4.5 max-w-[20ch] font-mi-accent text-[clamp(1.8rem,3.4vw,2.9rem)] leading-[1.06] font-bold tracking-[-0.035em]">
                When plans break, one thread holds.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-[44ch] text-pretty font-mi-body text-[1.04rem] leading-[1.6] text-mi-cream/74">
                Proactive rebooking, live traveller location, and the whole response in one place.
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
        </div>
      </div>
    </section>
  );
}
