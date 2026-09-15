import { Link } from 'react-router-dom';
import { Reveal } from '@/components/motion/reveal';
import { Magnetic } from '@/components/motion/magnetic';

export function ClosingCta() {
  return (
    <section className="border-t border-mi-cream/8 bg-[radial-gradient(70%_90%_at_80%_100%,rgba(242,92,5,.18),rgba(17,14,9,0)_65%)] py-[clamp(80px,11vw,150px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal>
          <h2 className="font-mi-display text-[clamp(2.2rem,5.6vw,4.6rem)] leading-[.98] font-black tracking-[-0.02em] uppercase">
            Bring a real trip.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-[48ch] text-pretty font-mi-body text-[clamp(1.02rem,1.3vw,1.2rem)] leading-[1.6] text-mi-cream/76">
            Twenty minutes with your policy and your routes. We&rsquo;ll show you the journey
            end to end.
          </p>
        </Reveal>
        <Reveal delay={160} className="mt-8">
          <Magnetic>
            <Link
              to="/contact"
              className="inline-flex h-[54px] items-center gap-2.5 rounded-2xl bg-mi-scarlet px-7 font-mi-body text-[.95rem] font-bold text-white no-underline"
            >
              Request a Demo
              <svg
                viewBox="0 0 24 24"
                className="size-4.5"
                stroke="currentColor"
                fill="none"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
