"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import type { Img } from "@/config/images";

/**
 * Editorial room carousel — a calm, premium slider (NOT an e-commerce product
 * gallery). Swipe on mobile, quiet arrow controls on desktop, slim progress dots.
 * No autoplay, no aggressive motion; a single smooth slide on the OS easing curve,
 * disabled under reduced-motion. Fills the caller's positioned `relative
 * overflow-hidden` box, so there is no layout shift. next/image throughout with
 * per-image alt text. A single-image array renders as a plain image (no controls).
 */
export function RoomCarousel({
  images,
  sizes,
  label,
}: {
  images: readonly Img[];
  sizes?: string;
  label?: string;
}) {
  const [i, setI] = useState(0);
  const n = images.length;
  const startX = useRef<number | null>(null);
  const go = useCallback((d: number) => setI((p) => (p + d + n) % n), [n]);

  if (n <= 1) {
    return <Image src={images[0].src} alt={images[0].alt} fill sizes={sizes} className="object-cover" />;
  }

  const onEnd = (endX: number) => {
    if (startX.current == null) return;
    const dx = endX - startX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    startX.current = null;
  };

  return (
    <div
      className="group/car absolute inset-0"
      role="group"
      aria-roledescription="carousel"
      aria-label={label ? `${label} — photos` : "Room photos"}
      onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => onEnd(e.changedTouches[0].clientX)}
    >
      <div
        className="flex h-full w-full transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none"
        style={{ transform: `translateX(-${i * 100}%)` }}
      >
        {images.map((im, idx) => (
          <div key={im.src} className="relative h-full w-full shrink-0 basis-full" aria-hidden={idx !== i}>
            <Image src={im.src} alt={im.alt} fill sizes={sizes} className="object-cover" />
          </div>
        ))}
      </div>

      {/* legibility gradient for the controls */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/30 to-transparent" />

      {/* desktop arrows — quiet, appear/strengthen on hover */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-ivory backdrop-blur-[2px] transition-colors hover:bg-black/45 focus-visible:bg-black/45 md:flex md:h-10 md:w-10"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-ivory backdrop-blur-[2px] transition-colors hover:bg-black/45 focus-visible:bg-black/45 md:flex md:h-10 md:w-10"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      {/* progress dots */}
      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
        {images.map((im, idx) => (
          <button
            key={im.src}
            type="button"
            onClick={() => setI(idx)}
            aria-label={`Go to photo ${idx + 1} of ${n}`}
            aria-current={idx === i}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === i ? "w-5 bg-ivory" : "w-1.5 bg-ivory/55 hover:bg-ivory/85"}`}
          />
        ))}
      </div>

      <span className="sr-only" aria-live="polite">
        Photo {i + 1} of {n}
      </span>
    </div>
  );
}
