import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';
import { Magnetic } from '@/components/motion/magnetic';

export function ClosingCta() {
  return (
    <section className="bg-[linear-gradient(120deg,#F25C05,var(--color-mi-amber-text)_55%,#DE5533)] py-[clamp(80px,11vw,150px)] text-brand-dark">
      <div className="mx-auto flex w-[min(1360px,100%-2*clamp(20px,4vw,64px))] flex-wrap items-end justify-between gap-8">
        <Reveal>
          <h2 className="max-w-[20ch] font-mi-display text-[clamp(2.2rem,5.4vw,4.4rem)] leading-[.98] font-black tracking-[-0.02em] text-brand-dark uppercase">
            Join a team fixing a broken industry.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <Magnetic>
            <Link
              to="/contact"
              className="inline-flex h-[54px] items-center gap-2.5 rounded-2xl bg-brand-dark px-7 font-mi-body text-[.95rem] font-bold text-mi-cream no-underline"
            >
              View Open Roles
              <ArrowRight className="size-4.5" aria-hidden="true" />
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
