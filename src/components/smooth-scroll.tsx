"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

/**
 * Global smooth-scroll provider. Hydration-safe: with `root`, ReactLenis
 * renders no wrapper DOM, so server HTML and first client render match.
 * `prefers-reduced-motion` disables smooth wheel after mount.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [smooth, setSmooth] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setSmooth(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.1,
        smoothWheel: smooth,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
      }}
    >
      {children}
    </ReactLenis>
  );
}
