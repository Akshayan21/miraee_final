import { useMemo } from 'react';
import privacySource from '@/content/privacy-policy.txt?raw';
import { LegalPage } from '@/components/templates/legal-page';
import { usePageMeta } from '@/hooks/use-page-meta';

function parsePrivacy(source: string) {
  const lines = source.replaceAll('\r', '').split('\n');
  const firstSection = lines.findIndex((line) => /^1\.\s+/.test(line));
  const sections: { id: string; title: string; paragraphs: string[] }[] = [];
  let current: { id: string; title: string; paragraphs: string[] } | undefined;
  for (const line of lines.slice(firstSection)) {
    const heading = line.match(/^(\d+)\.\s+(.+)$/);
    if (heading) { current = { id: `privacy-${heading[1]}`, title: `${heading[1]}. ${heading[2]}`, paragraphs: [] }; sections.push(current); }
    else if (current) current.paragraphs.push(line);
  }
  return { title: 'Miraee Privacy Policy', updated: lines[1], introduction: lines.slice(3, firstSection).filter(Boolean), sections };
}

export default function PrivacyPolicyRoute() {
  usePageMeta('Privacy Policy | Miraee', 'Learn how Miraee collects, uses, discloses, retains, and protects personal information.');
  const document = useMemo(() => parsePrivacy(privacySource), []);
  return <LegalPage document={document} />;
}
