import { Reveal } from '@/components/motion/reveal';

const ARTICLES = [
  {
    image:
      'https://images.unsplash.com/photo-1583528306385-8f29f27cb2d6?auto=format&fit=crop&w=1600&q=70',
    alt: 'Article 1 image',
    title: 'The leap to agentic: how AI is removing the work from business travel.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1522199873717-bc67b1a5e32b?auto=format&fit=crop&w=1600&q=70',
    alt: 'Article 2 image',
    title: 'Identifying travel leakage: the four areas where corporate travel budgets bleed.',
  },
];

export function FeaturedArticles() {
  return (
    <section className="border-t border-mi-cream/8 py-[clamp(40px,6vw,80px)] pb-[clamp(56px,8vw,110px)]">
      <div className="mx-auto w-[min(1360px,100%-2*clamp(20px,4vw,64px))]">
        <div className="mb-[clamp(28px,4vw,48px)] h-0.5 bg-gradient-to-r from-mi-orange via-mi-amber to-mi-rust" />
        <Reveal className="font-mi-body text-[.72rem] font-bold tracking-[0.14em] text-mi-cream/45">
          FEATURED CONTENT
        </Reveal>
        <div className="mt-7 grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] gap-6">
          {ARTICLES.map((article, i) => (
            <Reveal
              key={article.title}
              delay={i * 100}
              as="div"
              className="overflow-hidden rounded-[32px] border border-mi-cream/12 bg-mi-cream/3.5"
            >
              <div className="relative aspect-video">
                <img src={article.image} alt={article.alt} loading="lazy" className="size-full object-cover" />
              </div>
              <div className="p-6.5">
                <div className="font-mi-body text-[.62rem] font-bold tracking-[0.12em] text-mi-orange">
                  ARTICLE
                </div>
                <h2 className="mt-3.5 text-pretty font-heading text-[clamp(1.2rem,2.2vw,1.7rem)] leading-[1.25] font-bold tracking-[-0.03em]">
                  {article.title}
                </h2>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
