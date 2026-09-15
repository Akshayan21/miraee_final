import { usePageMeta } from '@/hooks/use-page-meta';
import { DARK_PAGE_CLASS } from '@/lib/dark-page';
import { Hero } from '@/components/sections/resources/hero';
import { FeaturedArticles } from '@/components/sections/resources/featured-articles';
import { LongReadFeature } from '@/components/sections/resources/long-read-feature';
import { AnnouncementsCareers } from '@/components/sections/resources/announcements-careers';

export default function ResourcesRoute() {
  usePageMeta(
    'Resources | Insights for the Agentic Era | Miraee',
    'Research, guides, news and life at Miraee for the teams rebuilding how their company travels.',
  );

  return (
    <main className={DARK_PAGE_CLASS}>
      <Hero />
      <FeaturedArticles />
      <LongReadFeature />
      <AnnouncementsCareers />
    </main>
  );
}
