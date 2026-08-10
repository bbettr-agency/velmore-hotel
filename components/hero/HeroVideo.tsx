"use client";

import { useEffect, useRef } from "react";
import { useMotionSafe } from "@/engine/motion";

/**
 * Ambient hero video — muted, looping, playsInline. Reduced-motion safe per the
 * OS Motion System: when the visitor asks for reduced motion, the video does not
 * autoplay and the poster frame is shown instead. The poster paints immediately
 * (no layout shift, no LCP penalty from the video). Decorative → aria-hidden.
 */
export function HeroVideo({ poster, className }: { poster: string; className?: string }) {
  const reduced = useMotionSafe();
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (reduced) {
      v.pause();
    } else {
      // muted autoplay can need a nudge on some browsers
      v.play().catch(() => {});
    }
  }, [reduced]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      autoPlay={!reduced}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
      tabIndex={-1}
    >
      <source src="/videos/velmore-estate.mp4" type="video/mp4" />
    </video>
  );
}
