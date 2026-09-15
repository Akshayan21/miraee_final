import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';
import { Magnetic } from '@/components/motion/magnetic';

export function ClosingCta() {
  return (
    <section className="border-t border-mi-cream/8 bg-[radial-gradient(70%_90%_at_80%_100%,rgba(242,92,5,.18),rgba(17,14,9,0)_65%)] py-[clamp(80px,11vw,150px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal>
          <h2 className="max-w-[22ch] font-mi-display text-[clamp(2.2rem,5.6vw,4.4rem)] leading-[.98] font-black tracking-[-0.02em] uppercase">
            Ask us anything about the guardrails.
          </h2>
        </Reveal>
        <Reveal delay={120} className="mt-8">
          <Magnetic>
            <Link
              to="/contact"
              className="inline-flex h-[54px] items-center gap-2.5 rounded-2xl bg-mi-scarlet px-7 font-mi-body text-[.95rem] font-bold text-white no-underline"
            >
              Request a Demo
              <ArrowRight className="size-4.5" aria-hidden="true" />
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
