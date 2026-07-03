"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Reveal — entrance animation that ENHANCES an already-visible default.
 * Content is visible without JS (globals.css keeps [data-reveal] opaque until
 * the `.js` flag is set in <head>). With JS, items start offset and settle.
 *
 * trigger="scroll" (default): settles when scrolled into view; `delay` is a
 *   CSS transition-delay that staggers siblings.
 * trigger="load": settles on a timer `delay` ms after mount, independent of
 *   scroll position — a deliberate attention beat for above-fold elements
 *   that sit near the fold. The timer owns the timing, so no CSS delay is set.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  trigger = "scroll",
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  trigger?: "scroll" | "load";
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;

    if (trigger === "load") {
      const t = setTimeout(() => setShown(true), delay);
      return () => clearTimeout(t);
    }

    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown, trigger, delay]);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={[className, shown ? "is-in" : ""].filter(Boolean).join(" ")}
      style={
        trigger === "scroll" && delay
          ? { ["--reveal-delay" as string]: `${delay}ms` }
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
