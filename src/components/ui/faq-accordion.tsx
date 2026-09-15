import { Accordion } from 'radix-ui';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export type FaqItem = { q: string; a: string };

function FaqAccordion({ items, className }: { items: FaqItem[]; className?: string }) {
  return (
    <Accordion.Root type="single" collapsible className={cn('flex flex-col gap-3', className)}>
      {items.map((item, i) => (
        <Accordion.Item
          key={item.q}
          value={`item-${i}`}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-mi-body text-sm font-semibold text-mi-cream sm:text-base">
              {item.q}
              <ChevronDown
                aria-hidden="true"
                className="size-4 shrink-0 text-mi-cream/50 transition-transform duration-300 ease-(--motion-ease) group-data-[state=open]:rotate-180"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden px-5 text-sm leading-relaxed text-mi-cream/70 data-[state=closed]:animate-none data-[state=closed]:pb-0 data-[state=open]:pb-5">
            {item.a}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

export { FaqAccordion };
