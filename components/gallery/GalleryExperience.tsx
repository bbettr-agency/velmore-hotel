"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { gallery, GALLERY_CATEGORIES, type GalleryCategory } from "@/config/gallery";
import { Lightbox } from "./Lightbox";

/**
 * The Gallery experience — filter pills + a natural-aspect masonry of curated
 * real photography, each tile opening a full-screen lightbox. Config-driven from
 * `config/gallery`. Image-led (captions on hover/focus only, so mobile stays
 * clean); next/image with responsive sizes + lazy loading below the fold.
 */
export function GalleryExperience() {
  const [cat, setCat] = useState<GalleryCategory | "all">("all");
  const [open, setOpen] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const items = useMemo(() => (cat === "all" ? gallery : gallery.filter((g) => g.category === cat)), [cat]);

  // Only the categories that actually have images appear as filters.
  const cats = useMemo(
    () => GALLERY_CATEGORIES.filter((c) => c.id === "all" || gallery.some((g) => g.category === c.id)),
    [],
  );

  const closeLightbox = () => {
    setOpen(null);
    // return focus to the tile that opened the lightbox
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <section className="bg-ivory py-16 md:py-20" aria-labelledby="gallery-experience-heading">
      <h2 id="gallery-experience-heading" className="sr-only">
        Velmoré photography gallery
      </h2>
      <div className="mx-auto max-w-container px-6 md:px-12">
        {/* filter pills — horizontally scrollable on mobile */}
        <div
          role="tablist"
          aria-label="Filter gallery by category"
          className="-mx-6 mb-10 flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] md:mx-0 md:mb-12 md:flex-wrap md:px-0 md:justify-center [&::-webkit-scrollbar]:hidden"
        >
          {cats.map((c) => {
            const active = cat === c.id;
            const count = c.id === "all" ? gallery.length : gallery.filter((g) => g.category === c.id).length;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setCat(c.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors ${
                  active
                    ? "border-estate-700 bg-estate-700 text-ivory"
                    : "border-estate-100 text-estate-700 hover:border-champagne hover:text-champagne-dark"
                }`}
              >
                {c.label}
                <span className={`ml-1.5 text-[11px] ${active ? "text-ivory/70" : "text-steel"}`}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* natural-aspect masonry */}
        <div className="columns-2 gap-4 md:columns-3 md:gap-5 lg:columns-4">
          {items.map((it, i) => (
            <button
              key={it.image.src}
              type="button"
              onClick={(e) => {
                triggerRef.current = e.currentTarget;
                setOpen(i);
              }}
              aria-label={`View larger: ${it.caption}${it.venue ? ` — ${it.venue}` : ""}`}
              className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg shadow-card md:mb-5"
            >
              <span className="relative block">
                <Image
                  src={it.image.src}
                  alt={it.image.alt}
                  width={it.w}
                  height={it.h}
                  sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 46vw"
                  className="h-auto w-full transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04] motion-reduce:transform-none"
                />
                <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-estate-900/70 via-estate-900/0 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="text-left">
                    <span className="block font-serif text-[14px] leading-tight text-ivory">{it.caption}</span>
                    {it.venue ? <span className="mt-0.5 block text-[10px] uppercase tracking-[.16em] text-champagne-light">{it.venue}</span> : null}
                  </span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && items[open] ? (
        <Lightbox items={items} index={open} onClose={closeLightbox} onNavigate={(next) => setOpen(next)} />
      ) : null}
    </section>
  );
}
