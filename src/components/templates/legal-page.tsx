import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './legal-page.css';

type LegalDocument = {
  title: string;
  updated: string;
  introduction: string[];
  sections: { id: string; title: string; paragraphs: string[] }[];
};

const linkClass = 'underline underline-offset-4 decoration-brand hover:text-brand-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand';

function linkedText(text: string): ReactNode {
  return text.split(/(\[[^\]]+\]\((?:https?:\/\/|\/)[^)]+\)|[\w.+-]+@[\w.-]+\.[a-zA-Z]{2,})/g).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/|\/)([^)]+)\)$/);
    if (link) {
      const href = `${link[2]}${link[3]}`;
      return href.startsWith('/')
        ? <Link key={index} to={href} className={linkClass}>{link[1]}</Link>
        : <a key={index} href={href} className={linkClass}>{link[1]}</a>;
    }
    if (/^[\w.+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(part)) {
      return <a key={index} href={`mailto:${part}`} className={linkClass}>{part}</a>;
    }
    return part;
  });
}

function DocumentBody({ paragraphs }: { paragraphs: string[] }) {
  const nodes: ReactNode[] = [];
  for (let index = 0; index < paragraphs.length; index += 1) {
    const line = paragraphs[index].trim();
    if (!line) continue;
    if (line.includes('\t')) {
      const rows = [line.split('\t')];
      while (index + 1 < paragraphs.length && paragraphs[index + 1].includes('\t')) rows.push(paragraphs[++index].trim().split('\t'));
      nodes.push(<div key={`table-${index}`} className="my-7 overflow-x-auto rounded-xl border border-border bg-surface"><table className="min-w-[640px] w-full border-collapse text-left text-sm leading-relaxed"><tbody>{rows.map((row, rowIndex) => <tr key={rowIndex} className={rowIndex === 0 ? 'bg-surface-muted font-semibold text-text' : 'border-t border-border'}>{row.map((cell, cellIndex) => rowIndex === 0 ? <th key={cellIndex} className="px-4 py-3">{cell}</th> : <td key={cellIndex} className="px-4 py-3 text-text-muted">{cell}</td>)}</tr>)}</tbody></table></div>);
    } else if (line.length < 90 && !/[.!?:]$/.test(line) && !line.includes('“')) nodes.push(<h3 key={`subheading-${index}`} className="mt-7 font-heading text-lg font-semibold text-text">{line}</h3>);
    else nodes.push(<p key={`paragraph-${index}`}>{linkedText(line)}</p>);
  }
  return <div className="space-y-5">{nodes}</div>;
}

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <main className="legal-page relative z-2 bg-background font-body text-text">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:108px_108px]" />
      <div className="relative mx-auto max-w-[1312px] px-6 pt-28 pb-20 sm:px-8 lg:pt-32">
        <header id="terms-top" className="scroll-mt-28">
          <h1 className="font-heading text-[clamp(2rem,4vw,4rem)] leading-[1.12] font-semibold tracking-[-0.045em] text-text">{document.title}</h1>
          <p className="mt-4 text-sm font-medium text-text-muted">{document.updated}</p>
        </header>
        <article className="mt-9 min-w-0 text-base leading-[1.75] text-text-muted [overflow-wrap:anywhere] sm:mt-10">
          <div className="space-y-5">
            {document.introduction.map((paragraph) => <p key={paragraph}>{linkedText(paragraph)}</p>)}
          </div>
          <details className="mt-9 rounded-[20px] border border-border bg-surface/50 sm:mt-10">
            <summary className="cursor-pointer rounded-[20px] px-6 py-5 font-heading text-base font-semibold tracking-tight text-text marker:text-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:px-8 sm:py-5 sm:text-lg">On this page</summary>
            <nav aria-label="Terms and conditions sections" className="px-6 pb-7 sm:px-8">
              <ol className="grid gap-x-10 gap-y-1 border-t border-border pt-5 md:grid-cols-2">
                {document.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="block rounded-sm py-2 text-base leading-relaxed text-text-muted transition-colors hover:text-brand-strong focus-visible:outline-2 focus-visible:outline-brand">{section.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </details>
          {document.sections.map((section) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="mt-10 scroll-mt-28 sm:mt-12">
              <h2 id={`${section.id}-title`} className="mb-4 font-heading text-xl leading-snug font-semibold tracking-tight text-text sm:text-[22px]">{section.title}</h2>
                <DocumentBody paragraphs={section.paragraphs} />
            </section>
          ))}
          <a href="#terms-top" className={`mt-16 inline-block text-base ${linkClass}`}>Back to top</a>
        </article>
      </div>
    </main>
  );
}


