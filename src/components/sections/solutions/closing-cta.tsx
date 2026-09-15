import { Link } from 'react-router-dom';
import { Reveal } from '@/components/motion/reveal';
import { Magnetic } from '@/components/motion/magnetic';

export function SolutionsClosingCta() {
  return (
    <section
      className="border-t border-mi-cream/8 py-[clamp(80px,11vw,150px)]"
      style={{ background: 'radial-gradient(70% 90% at 80% 100%,rgba(242,92,5,.18),rgba(17,14,9,0) 65%)' }}
    >
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal>
          <h2 className="max-w-[24ch] text-balance font-mi-display text-[clamp(2.2rem,5.6vw,4.4rem)] leading-[.98] font-black tracking-[-0.02em] uppercase">
            Every kind of trip your company takes.
          </h2>
        </Reveal>
        <Reveal delay={120} className="mt-8 flex flex-wrap gap-3">
          <Magnetic>
            <Link
              to="/use-cases"
              className="inline-flex h-[54px] items-center gap-2.5 rounded-2xl bg-mi-scarlet px-7 font-mi-body text-[.95rem] font-bold text-white no-underline"
            >
              See the use cases
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              to="/contact"
              className="inline-flex h-[54px] items-center gap-2.5 rounded-2xl border border-mi-cream/22 bg-mi-cream/4 px-7 font-mi-body text-[.95rem] font-bold text-mi-cream no-underline"
            >
              Request a Demo
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
