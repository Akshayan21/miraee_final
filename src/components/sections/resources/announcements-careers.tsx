import { Link } from 'react-router-dom';
import { Reveal } from '@/components/motion/reveal';

export function AnnouncementsCareers() {
  return (
    <section className="py-[clamp(56px,8vw,110px)]">
      <div className="mx-auto grid w-[min(1360px,100%-2*clamp(20px,4vw,64px))] grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-6">
        <Reveal as="div" className="rounded-[32px] border border-mi-cream/12 bg-mi-cream/3.5 p-8">
          <div className="font-mi-body text-[.62rem] font-bold tracking-[0.12em] text-mi-cream/45">
            NEWS &amp; UPDATES · /company
          </div>
          <h2 className="mt-4 font-heading text-[clamp(1.3rem,2.4vw,1.9rem)] leading-[1.2] font-bold tracking-[-0.03em]">
            Announcements and press.
          </h2>
          <p className="mt-3.5 font-mi-body text-base leading-[1.6] text-mi-cream/76">
            Product releases, partnerships and company announcements.
          </p>
          <Link
            to="/company"
            className="mt-5 inline-block border-b border-mi-orange/50 pb-1 font-mi-body text-[.88rem] font-bold text-mi-orange no-underline"
          >
            About Miraee →
          </Link>
        </Reveal>
        <Reveal as="div" delay={100} className="rounded-[32px] border border-mi-cream/12 bg-mi-cream/3.5 p-8">
          <div className="font-mi-body text-[.62rem] font-bold tracking-[0.12em] text-mi-cream/45">
            LIFE AT MIRAEE · /resources/life-at-miraee
          </div>
          <h2 className="mt-4 font-heading text-[clamp(1.3rem,2.4vw,1.9rem)] leading-[1.2] font-bold tracking-[-0.03em]">
            How we work, and who we&rsquo;re looking for.
          </h2>
          <p className="mt-3.5 font-mi-body text-base leading-[1.6] text-mi-cream/76">
            The team, the offices, and the activities we plan at Miraee.
          </p>
          <Link
            to="/careers"
            className="mt-5 inline-block border-b border-mi-orange/50 pb-1 font-mi-body text-[.88rem] font-bold text-mi-orange no-underline"
          >
            See open roles →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
