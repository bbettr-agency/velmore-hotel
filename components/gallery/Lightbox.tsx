"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import type { GalleryItem } from "@/config/gallery";
import { GALLERY_CATEGORIES } from "@/config/gallery";

function catLabel(id: string) {
  return GALLERY_CATEGORIES.find((c) => c.id === id)?.label ?? "";
}

/**
 * Full-screen gallery lightbox — deep estate-green backdrop, large object-contain
 * image, caption + category/venue, prev/next + counter, close. Keyboard (←/→/Esc),
 * swipe on mobile, focus trapped to the controls with focus returned to the
 * originating tile on close, background scroll locked, reduced-motion respected.
 */
export function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: readonly GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const n = items.length;
  const item = items[index];
  const closeRef = useRef<HTMLButtonElement>(null);
  const startX = useRef<number | null>(null);

  const go = useCallback(
    (d: number) => onNavigate((index + d + n) % n),
    [index, n, onNavigate],
  );

  // Keyboard + background scroll lock while open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [go, onClose]);

  // Keep focus within the dialog (only the three controls are focusable).
  const onKeyDownTrap = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const focusable = Array.from(
      (e.currentTarget as HTMLElement).querySelectorAll<HTMLElement>("button:not([disabled])"),
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.caption}${item.venue ? ` — ${item.venue}` : ""}, image ${index + 1} of ${n}`}
      onKeyDown={onKeyDownTrap}
      onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (startX.current == null) return;
        const dx = e.changedTouches[0].clientX - startX.current;
        if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
        startX.current = null;
      }}
      className="fixed inset-0 z-[60] flex flex-col bg-[#0e1712]"
    >
      {/* top bar: counter + close */}
      <div className="flex shrink-0 items-center justify-between px-4 py-4 md:px-6">
        <span className="text-[13px] tabular-nums tracking-[.14em] text-ivory/70">
          {index + 1} / {n}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="flex h-11 w-11 items-center justify-center rounded-full text-ivory transition-colors hover:bg-ivory/10"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      {/* image + side controls */}
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 md:px-16">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-ivory backdrop-blur-[2px] transition-colors hover:bg-black/45 md:left-4 md:h-12 md:w-12"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>

        <div className="relative h-full w-full">
          <Image
            key={item.image.src}
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="100vw"
            priority
            className="object-contain motion-safe:animate-[fadeIn_.28s_ease]"
          />
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next image"
          className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-ivory backdrop-blur-[2px] transition-colors hover:bg-black/45 md:right-4 md:h-12 md:w-12"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      {/* caption */}
      <div className="shrink-0 px-4 py-5 text-center md:py-6">
        <p className="font-serif text-[16px] text-ivory md:text-[18px]">{item.caption}</p>
        <p className="mt-1 text-[11px] uppercase tracking-[.2em] text-champagne-light">
          {item.venue ? `${item.venue} · ` : ""}
          {catLabel(item.category)}
        </p>
      </div>
    </div>
  );
}
