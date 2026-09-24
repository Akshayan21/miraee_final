import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';
import { Magnetic } from '@/components/motion/magnetic';

export function ClosingCta() {
  return (
    <section className="border-t border-mi-cream/8 bg-[radial-gradient(70%_90%_at_80%_100%,rgba(242,92,5,.18),rgba(17,14,9,0)_65%)] py-[clamp(64px,8vw,112px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <div className="mb-[clamp(40px,6vw,72px)] h-0.5 bg-gradient-to-r from-mi-orange via-mi-amber to-mi-rust" />
        <Reveal>
          <h2 className="max-w-[24ch] text-balance font-heading text-section font-semibold">
            Give your team their time back.
          </h2>
        </Reveal>
        <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-mi-cream/75">See how Miraee handles your company’s travel, from booking to expenses.</p>
        <Reveal delay={120} className="mt-10 flex flex-wrap gap-3">
          <Magnetic>
            <Link
              to="/contact"
              className="inline-flex h-[54px] items-center gap-2.5 rounded-2xl bg-mi-scarlet px-7 font-mi-body text-[.95rem] font-bold text-white no-underline"
            >
              Request a demo
              <ArrowRight className="size-4.5" aria-hidden="true" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              to="/pricing"
              className="inline-flex h-[54px] items-center gap-2.5 px-4 font-mi-body text-[.95rem] font-bold text-mi-cream no-underline"
            >
              Prove the savings first
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
