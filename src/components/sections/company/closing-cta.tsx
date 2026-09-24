import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';
import { Magnetic } from '@/components/motion/magnetic';

export function ClosingCta() {
  return (
    <section className="border-t border-mi-cream/8 bg-[radial-gradient(70%_90%_at_80%_100%,rgba(242,92,5,.18),rgba(17,14,9,0)_65%)] py-[clamp(80px,11vw,150px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <Reveal>
          <h2 className="font-heading text-section font-semibold text-balance">
            Bring a real trip.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-[48ch] font-mi-body text-[clamp(1.02rem,1.3vw,1.2rem)] leading-[1.6] text-mi-cream/76">
            Twenty minutes with your policy and your routes. We&rsquo;ll show you the journey end
            to end.
          </p>
        </Reveal>
        <Reveal delay={160} className="mt-8">
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
