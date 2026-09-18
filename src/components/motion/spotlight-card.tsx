import { useRef, type HTMLAttributes, type PointerEvent as ReactPointerEvent } from 'react';
import { cn } from '@/lib/utils';

interface SpotlightCardProps extends HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string;
}

/** Cursor-following radial glow, revealed on hover — desktop pointer only. */
export function SpotlightCard({
  className,
  spotlightColor = 'rgba(242,92,5,.18)',
  children,
  ...rest
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handlePointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (e.pointerType !== 'mouse') return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    node.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn('group relative isolate overflow-hidden', className)}
      {...rest}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(280px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${spotlightColor}, transparent 72%)`,
        }}
      />
      {children}
    </div>
  );
}
