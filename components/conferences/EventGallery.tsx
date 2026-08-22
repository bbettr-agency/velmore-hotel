"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import type { Img } from "@/config/images";

type Slide = { image: Img; caption?: string };

/**
 * Past-events gallery — a premium, photography-led slider (real occasions on the
 * estate). One large frame, manual next/prev + swipe + keyboard, a counter and
 * slim progress dots. Images sit object-contain on a deep estate-green ground so
 * mixed portrait/landscape event photos never crop awkwardly. Restrained
 * crossfade (reduced-motion safe), NO autoplay. Performance: only the current
 * slide and its two neighbours are mounted, so the browser never loads all
 * frames at once; next/image handles responsive sizing + lazy loading.
 */
export function EventGallery({ items, label = "Past events at Velmoré" }: { items: readonly Slide[]; label?: string }) {
  const [i, setI] = useState(0);
  const n = items.length;
  const startX = useRef<number | null>(null);
  const go = useCallback((d: number) => setI((p) => (p + d + n) % n), [n]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
  };

  const cur = items[i];
  const near = (idx: number) => idx === i || idx === (i + 1) % n || idx === (i - 1 + n) % n;

  return (
    <div>
      <div
        className="group relative overflow-hidden rounded-lg bg-estate-900 shadow-ink"
        role="group"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (startX.current == null) return;
          const dx = e.changedTouches[0].clientX - startX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          startX.current = null;
        }}
      >
        {/* the frame — a large landscape stage; portraits letterbox elegantly on the estate ground */}
        <div className="relative aspect-[4/3] w-full sm:aspect-[3/2]">
          {items.map((it, idx) =>
            near(idx) ? (
              <Image
                key={it.image.src}
                src={it.image.src}
                alt={it.image.alt}
                fill
                sizes="(min-width: 1024px) 64vw, 100vw"
                priority={idx === 0}
                className={`object-contain transition-opacity duration-500 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none ${
                  idx === i ? "opacity-100" : "opacity-0"
                }`}
              />
            ) : null,
          )}
        </div>

        {/* counter */}
        <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/40 px-3 py-1 text-[12px] tabular-nums tracking-[.1em] text-ivory backdrop-blur-[2px]">
          {i + 1} / {n}
        </div>

        {/* caption */}
        {cur.caption ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-estate-900/70 to-transparent p-4 md:p-5">
            <p className="font-serif text-[14px] text-ivory md:text-[15px]">{cur.caption}</p>
          </div>
        ) : null}

        {/* prev / next */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-ivory backdrop-blur-[2px] transition-colors hover:bg-black/50 focus-visible:bg-black/50 md:h-12 md:w-12"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-ivory backdrop-blur-[2px] transition-colors hover:bg-black/50 focus-visible:bg-black/50 md:h-12 md:w-12"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      {/* progress dots */}
      <div className="mt-5 flex flex-wrap justify-center gap-1.5">
        {items.map((it, idx) => (
          <button
            key={it.image.src}
            type="button"
            onClick={() => setI(idx)}
            aria-label={`Go to photo ${idx + 1} of ${n}`}
            aria-current={idx === i}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === i ? "w-5 bg-estate-700" : "w-1.5 bg-estate-100 hover:bg-champagne"}`}
          />
        ))}
      </div>

      <span className="sr-only" aria-live="polite">
        Photo {i + 1} of {n}: {cur.image.alt}
      </span>
    </div>
  );
}
