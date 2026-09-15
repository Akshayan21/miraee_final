import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';
import { Magnetic } from '@/components/motion/magnetic';

export function ClosingCta() {
  return (
    <section className="border-t border-mi-cream/8 bg-[radial-gradient(70%_90%_at_80%_100%,rgba(242,92,5,.18),rgba(17,14,9,0)_65%)] py-[clamp(88px,12vw,160px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <div className="mb-[clamp(40px,6vw,72px)] h-0.5 bg-gradient-to-r from-mi-orange via-mi-amber to-mi-rust" />
        <Reveal>
          <h2 className="max-w-[24ch] text-balance font-mi-display text-[clamp(2rem,5.4vw,4.6rem)] leading-[.98] font-black tracking-[-0.02em] uppercase">
            Stop forcing your employees to act as their own travel agents.
          </h2>
        </Reveal>
        <Reveal delay={120} className="mt-10 flex flex-wrap gap-3">
          <Magnetic>
            <Link
              to="/contact"
              className="inline-flex h-[54px] items-center gap-2.5 rounded-2xl bg-mi-scarlet px-7 font-mi-body text-[.95rem] font-bold text-white no-underline"
            >
              Discover Miraee Today
              <ArrowRight className="size-4.5" aria-hidden="true" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              to="/pricing"
              className="inline-flex h-[54px] items-center gap-2.5 rounded-2xl border border-mi-cream/22 bg-mi-cream/4 px-7 font-mi-body text-[.95rem] font-bold text-mi-cream no-underline"
            >
              Prove the savings first
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
