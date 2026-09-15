import * as React from 'react';
import { cn } from '@/lib/utils';

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Horizontal drag/scroll image band — reimplements the mockup's Home "Experiences" tile gallery. */
function Marquee({ children, className }: MarqueeProps) {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const dragState = React.useRef({ down: false, startX: 0, startScroll: 0 });

  function onPointerDown(e: React.PointerEvent) {
    const track = trackRef.current;
    if (!track) return;
    dragState.current = { down: true, startX: e.clientX, startScroll: track.scrollLeft };
    track.setPointerCapture(e.pointerId);
  }
  function onPointerMove(e: React.PointerEvent) {
    const track = trackRef.current;
    if (!track || !dragState.current.down) return;
    track.scrollLeft = dragState.current.startScroll - (e.clientX - dragState.current.startX);
  }
  function onPointerUp() {
    dragState.current.down = false;
  }

  React.useEffect(() => {
    const track = trackRef.current;
    if (!track || prefersReducedMotion()) return;
    let raf: number;
    function loop() {
      if (track && !dragState.current.down) {
        track.scrollLeft += 0.6;
        if (track.scrollLeft >= track.scrollWidth / 2) track.scrollLeft = 0;
      }
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={trackRef}
      className={cn(
        'flex cursor-grab gap-4 overflow-x-auto scroll-smooth active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
        className,
      )}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {children}
      {children}
    </div>
  );
}

export { Marquee };
