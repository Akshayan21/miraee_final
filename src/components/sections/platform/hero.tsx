import { useRef } from 'react';
import gsap from 'gsap';
import { Reveal } from '@/components/motion/reveal';
import { HeroBackground } from '@/components/ui/hero-background';
import { photography } from '@/content/photography';
import avatarImage from '@/assets/images/Avatar.png';

export function Hero() {
  const avatarRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !avatarRef.current) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    gsap.to(avatarRef.current, { rotationY: x * 16, rotationX: y * -14, x: x * 14, y: y * 10, duration: 0.45, ease: 'power3.out', overwrite: 'auto' });
  }

  function resetAvatar() {
    if (avatarRef.current) gsap.to(avatarRef.current, { rotationX: 0, rotationY: 0, x: 0, y: 0, duration: 0.7, ease: 'power3.out', overwrite: 'auto' });
  }

  return (
    <section className="relative overflow-hidden pt-[clamp(120px,16vh,180px)] pb-[clamp(56px,8vw,96px)]">
      <HeroBackground />
      <div className="mx-auto grid w-[min(1360px,100%-2*clamp(20px,4vw,64px))] items-center gap-10 lg:grid-cols-[minmax(0,.92fr)_minmax(420px,1.08fr)] lg:gap-14">
        <div>
          <Reveal visibleOnLoad className="flex items-center gap-3 font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
            PLATFORM
          </Reveal>
          <Reveal visibleOnLoad delay={80}>
            <h1 className="mt-6 max-w-[16ch] text-balance font-heading text-hero font-semibold">
              Welcome to the agentic era of travel.
            </h1>
          </Reveal>
          <Reveal visibleOnLoad delay={160}>
            <p className="mt-8 max-w-[50ch] text-pretty font-mi-body text-[clamp(1.05rem,1.3vw,1.24rem)] leading-[1.55] text-mi-cream/74">
              We have moved beyond the digital search-and-click era. Miraee offers a swarm of AI
              agents that execute the entire travel lifecycle end to end, with a human always in
              the loop.
            </p>
          </Reveal>
        </div>
        <Reveal visibleOnLoad delay={140} className="relative justify-self-end w-full max-w-[700px] [perspective:1000px]" onPointerMove={handlePointerMove} onPointerLeave={resetAvatar}>
          <div aria-hidden="true" className="absolute -top-4 -right-4 -bottom-4 left-10 rounded-[32px] border border-mi-orange/22 bg-mi-orange/8" />
          <figure className="relative m-0 aspect-[4/3] overflow-hidden rounded-[28px] border border-mi-cream/14 bg-mi-cream/4 shadow-[0_30px_64px_rgba(0,0,0,.28)]">
            <img {...photography['platform-hero-traveler']} sizes="(min-width: 1440px) 700px, (min-width: 1024px) 50vw, (min-width: 768px) 700px, calc(100vw - 40px)" decoding="async" loading="eager" fetchPriority="high" alt="Business traveller using Miraee as she arrives at her hotel" className="size-full object-cover object-[72%_top]" />
          </figure>
          <div ref={avatarRef} data-parallax-owned="platform-avatar-tilt" className="absolute top-[7%] left-[2%] z-10 w-[clamp(7.5rem,15vw,12rem)] overflow-hidden rounded-[22px] border border-white/60 bg-white shadow-[0_24px_45px_rgba(0,0,0,.28)] [transform-style:preserve-3d]">
            <img src={avatarImage} alt="Miraee AI travel assistant" className="aspect-square w-full object-cover object-center" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-3 pt-8 pb-2.5 font-mi-body text-[.64rem] font-bold tracking-[.08em] text-white">MIRAEE AI</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
