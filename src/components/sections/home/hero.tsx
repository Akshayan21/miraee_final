import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Reveal } from '@/components/motion/reveal';
import { Magnetic } from '@/components/motion/magnetic';
import heroImage from '@/assets/hero-section-image.webp';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const stage = stageRef.current;
    const parallax = parallaxRef.current;
    if (!stage || !parallax) return;

    const ctx = gsap.context(() => {
      gsap.to(parallax, {
        y: -36,
        ease: 'none',
        scrollTrigger: { trigger: stage, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_90%_at_85%_0%,var(--color-glow-85),rgba(17,14,9,0)_62%),radial-gradient(70%_60%_at_8%_100%,rgba(242,92,5,.16),rgba(17,14,9,0)_70%)] pt-[clamp(120px,16vh,180px)] pb-[clamp(56px,8vw,96px)]">
      <div className="mx-auto grid w-[min(1360px,100%-2*clamp(20px,4vw,64px))] items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-6">
        <div className="min-w-0 max-w-[52rem]">
          <Reveal className="flex items-center gap-3 font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
            A PRIVATE TRAVEL ASSISTANT FOR EVERY EMPLOYEE
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-balance font-mi-display text-[clamp(2rem,4vw,3.6rem)] leading-[1.05] font-black tracking-[-0.02em] text-mi-cream uppercase">
              The Travel &amp; Expense Platform That Actually Does the Work.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-[46ch] text-pretty font-mi-body text-[clamp(1.05rem,1.35vw,1.26rem)] leading-[1.55] text-mi-cream/74">
              Meet Miraee. State your intent, and our AI agents search, book, pay, coordinate,
              recover, and file your expenses. Effortless for travelers, strictly controlled for
              finance, and rewarding for everyone.
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-8 flex flex-wrap gap-3">
            <Magnetic>
              <Link
                to="/contact"
                className="inline-flex h-[52px] items-center gap-2.5 rounded-2xl bg-mi-scarlet px-6.5 font-mi-body text-[.92rem] font-bold text-white no-underline"
              >
                Request a Demo
              </Link>
            </Magnetic>
            <Magnetic>
              <a
                href="#how"
                className="inline-flex h-[52px] items-center gap-2.5 rounded-2xl border border-mi-cream/22 bg-mi-cream/4 px-6.5 font-mi-body text-[.92rem] font-bold text-mi-cream no-underline"
              >
                See how it works
              </a>
            </Magnetic>
          </Reveal>
          <Reveal delay={320} className="mt-10 font-mi-script text-[clamp(2rem,3vw,3rem)] leading-[1.35] text-mi-orange">
            Travel Limitless
          </Reveal>
        </div>

        <Reveal delay={160} className="relative min-w-0">
          <div ref={stageRef} className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 scale-100 rounded-full bg-[radial-gradient(closest-side,rgba(242,92,5,.36),rgba(242,92,5,0)_72%)] blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-16 -bottom-6 -z-10 h-14 rounded-full bg-mi-orange/25 blur-3xl"
            />
            <div ref={parallaxRef}>
              <img
                src={heroImage}
                loading="eager"
                fetchPriority="high"
                alt="Miraee admin dashboard showing company travel spend, and the Miraee avatar helping an employee choose a flight to Delhi"
                width={1200}
                height={800}
                className="mx-auto w-full max-w-[920px] rotate-[-1.5deg] drop-shadow-[0_40px_60px_rgba(0,0,0,.4)] lg:w-[128%] lg:max-w-none"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
