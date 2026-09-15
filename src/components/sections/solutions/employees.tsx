import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Reveal } from '@/components/motion/reveal';
import travelerImage from '@/assets/images/platform-human-care-480.webp';

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    title: 'PLANNING AND BOOKING',
    body: 'Say plan a trip to Tokyo. Miraee checks your calendar, reads your policy tier, and books flight and hotel while tracking your visa validity, all in one motion.',
  },
  {
    title: 'DISRUPTION, HANDLED',
    body: 'A delay hits. Miraee pings you with a rebooked option and an exchange summary before the airline announces it at the gate.',
  },
  {
    title: 'MULTI-MODAL ACCESS',
    body: 'Carry the same continuous conversation across phone, desktop and web, by text, voice or avatar.',
  },
];

export function Employees() {
  const barRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      if (barRef.current) {
        gsap.fromTo(
          barRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: 'left center',
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: barRef.current, start: 'top 90%' },
          },
        );
      }

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('[data-card]');
        gsap.fromTo(
          cards,
          { autoAlpha: 0, x: 36, scale: 0.96 },
          {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: { trigger: cardsRef.current, start: 'top 78%' },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="employees" className="border-t border-mi-cream/8 py-[clamp(56px,8vw,110px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <div
          ref={barRef}
          className="mb-[clamp(28px,4vw,48px)] h-0.5 bg-gradient-to-r from-mi-orange via-mi-amber to-mi-rust"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] items-start gap-[clamp(28px,4vw,64px)]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal className="font-mi-body text-[.7rem] font-bold tracking-[0.14em] text-[#FF69AD]">
              FOR EMPLOYEES
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4.5 max-w-[22ch] font-mi-accent text-[clamp(1.8rem,3.4vw,3rem)] leading-[1.06] font-bold tracking-[-0.035em]">
                Meet your hands-free travel assistant.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-[46ch] text-pretty font-mi-body text-[1.04rem] leading-[1.6] text-mi-cream/74">
                Voice, text or avatar. Your preferences, past trips and policy tier are known
                before you make your first request.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <a
                href="/contact"
                className="mt-6 inline-block border-b border-mi-orange/50 pb-1 font-mi-body text-[.88rem] font-bold text-mi-orange no-underline"
              >
                Explore the Traveler solution →
              </a>
            </Reveal>
          </div>
          <div ref={cardsRef} className="grid gap-3.5">
            <div data-card className="relative mb-1 aspect-[16/8] overflow-hidden rounded-[24px] border border-[#FF69AD]/30">
              <img src={travelerImage} alt="Traveller preparing for a trip" className="size-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-r from-background-dark/50 to-transparent" />
              <span className="absolute bottom-4 left-4 font-mi-body text-[.68rem] font-bold tracking-[.12em] text-mi-cream/80">YOUR TRIP, YOUR WAY</span>
            </div>
            {CARDS.map((card) => (
              <div
                key={card.title}
                data-card
                className="rounded-[24px] border border-mi-cream/12 bg-mi-cream/3.5 p-[22px] transition-[border-color,background-color] duration-300 hover:border-mi-cream/22 hover:bg-mi-cream/5"
              >
                <h3 className="m-0 font-mi-body text-[.72rem] font-bold tracking-[0.12em] text-mi-cream/50">
                  {card.title}
                </h3>
                <p className="mt-3 font-mi-body text-[.97rem] leading-[1.6] text-mi-cream/82">
                  {card.body}
                </p>
              </div>
            ))}
            <div
              data-card
              className="rounded-[24px] border border-[#FF69AD]/35 bg-[linear-gradient(140deg,rgba(255,105,173,.12),rgba(17,14,9,0)_75%)] p-[22px] transition-[border-color] duration-300 hover:border-[#FF69AD]/55"
            >
              <h3 className="m-0 font-mi-body text-[.72rem] font-bold tracking-[0.12em] text-[#FF69AD]">
                STRICT PERSONAL SEPARATION
              </h3>
              <p className="mt-3 font-mi-body text-[.97rem] leading-[1.6] text-mi-cream/86">
                Corporate travel and personal trips in one place. Personal trips book on your own
                card at exclusive fares, walled off from company visibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
