import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';
import { Magnetic } from '@/components/motion/magnetic';

export function UseCasesClosingCta() {
  return (
    <section
      className="py-[clamp(80px,11vw,150px)]"
      style={{ background: 'radial-gradient(70% 90% at 80% 100%,rgba(242,92,5,.18),rgba(17,14,9,0) 65%)' }}
    >
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal>
          <h2 className="max-w-[24ch] text-balance font-mi-display text-[clamp(2.2rem,5.6vw,4.6rem)] leading-[.98] font-black tracking-[-0.02em] uppercase">
            Bring a real trip.
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
