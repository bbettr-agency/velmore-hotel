"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { RoomCarousel } from "@/components/sections/RoomCarousel";
import { Reveal } from "@/components/motion/Reveal";
import type { Img } from "@/config/images";

type Venue = {
  heading: string;
  slug: string;
  eyebrow: string;
  capacity?: string;
  tabNote?: string;
  body: readonly string[];
  points?: readonly string[];
  images: readonly Img[];
};

function Dot() {
  return <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-champagne" />;
}
function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/**
 * Venue explorer — one interactive section that replaces six stacked venue
 * splits. An accessible tablist (roving tabindex, ←/→/Home/End) selects a venue;
 * a single panel below crossfades to that venue's photography/carousel + confirmed
 * details + a Book-a-Venue-Viewing CTA. Keeps all the visual proof, removes the
 * scroll. D'Charmont is selected by default (flagship). Reuses the existing
 * RoomCarousel for multi-image venues; single-image venues show one photo (no
 * fake slides). The CTA feeds the same #book-viewing flow and passes the selected
 * venue as context (a custom event the viewing form listens for). Reduced-motion
 * safe; tabs scroll horizontally on mobile without clashing with carousel swipe
 * (they occupy separate regions).
 */
export function VenueExplorer({
  eyebrow,
  heading,
  lead,
  venues,
}: {
  eyebrow?: string;
  heading: string;
  lead?: string;
  venues: readonly Venue[];
}) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const v = venues[active];

  function select(i: number) {
    setActive(i);
    tabRefs.current[i]?.focus();
  }
  function onKeyDown(e: React.KeyboardEvent) {
    const last = venues.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    select(next);
  }

  function bookViewing() {
    // Pass the selected venue to the viewing form as (optional) context.
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("velmore:venue", { detail: v.heading }));
    }
  }

  return (
    <section id="venues" className="scroll-mt-24 bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <Reveal className="mx-auto max-w-[46rem] text-center">
          {eyebrow ? (
            <p className="flex items-center justify-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-dark">
              <span aria-hidden className="h-px w-[26px] bg-champagne" />
              {eyebrow}
              <span aria-hidden className="h-px w-[26px] bg-champagne" />
            </p>
          ) : null}
          <h2 className="mx-auto mt-5 max-w-[20ch] font-serif text-[27px] font-semibold leading-[1.14] tracking-[-.01em] text-estate-700 md:text-[36px]">
            {heading}
          </h2>
          {lead ? <p className="mx-auto mt-5 max-w-[54ch] text-[15.5px] leading-[1.75] text-charcoal md:text-[16px]">{lead}</p> : null}
        </Reveal>

        {/* venue selector — horizontally scrollable on mobile, centred on desktop */}
        <div
          role="tablist"
          aria-label="Choose a venue"
          onKeyDown={onKeyDown}
          className="mt-10 flex gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] md:mt-12 md:flex-wrap md:justify-center [&::-webkit-scrollbar]:hidden"
        >
          {venues.map((vn, i) => {
            const selected = i === active;
            return (
              <button
                key={vn.slug}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`vtab-${vn.slug}`}
                aria-selected={selected}
                aria-controls={`vpanel-${vn.slug}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`relative shrink-0 snap-start rounded-md px-4 py-2.5 text-left transition-colors ${
                  selected ? "bg-white shadow-card" : "hover:bg-white/60"
                }`}
              >
                <span className={`block whitespace-nowrap font-serif text-[16px] font-semibold ${selected ? "text-estate-700" : "text-steel"}`}>
                  {vn.heading}
                </span>
                {vn.tabNote ? <span className="mt-0.5 block whitespace-nowrap text-[10px] uppercase tracking-[.12em] text-stone">{vn.tabNote}</span> : null}
                {vn.capacity ? <span className={`mt-0.5 block whitespace-nowrap text-[11.5px] ${selected ? "text-champagne-dark" : "text-steel"}`}>{vn.capacity}</span> : null}
                <span
                  aria-hidden
                  className={`absolute inset-x-3 -bottom-px h-[2px] rounded-full bg-champagne transition-opacity duration-200 ${selected ? "opacity-100" : "opacity-0"}`}
                />
              </button>
            );
          })}
        </div>

        {/* active venue — key forces a restrained crossfade on change */}
        <div
          key={v.slug}
          role="tabpanel"
          id={`vpanel-${v.slug}`}
          aria-labelledby={`vtab-${v.slug}`}
          className="mt-8 grid grid-cols-1 items-center gap-8 motion-safe:animate-[fadeIn_.35s_ease] md:mt-12 md:grid-cols-12 md:gap-14"
        >
          <div className="md:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card">
              {v.images.length > 1 ? (
                <RoomCarousel images={v.images} label={v.heading} sizes="(min-width: 768px) 58vw, 100vw" />
              ) : (
                <Image src={v.images[0].src} alt={v.images[0].alt} fill sizes="(min-width: 768px) 58vw, 100vw" className="object-cover" />
              )}
            </div>
          </div>

          <div className="md:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-champagne-dark">{v.eyebrow}</p>
            <h3 className="mt-2 font-serif text-[28px] font-semibold leading-[1.1] tracking-[-.01em] text-estate-700 md:text-[34px]">{v.heading}</h3>
            {v.capacity ? (
              <p className="mt-3 text-[15px] font-semibold text-champagne-dark">
                {v.tabNote ? <span className="font-normal text-steel">{v.tabNote} · </span> : null}
                {v.capacity}
              </p>
            ) : null}
            <div className="mt-4 space-y-3">
              {v.body.map((para, i) => (
                <p key={i} className="max-w-[48ch] text-[15.5px] leading-[1.7] text-charcoal">{para}</p>
              ))}
            </div>
            {v.points && v.points.length ? (
              <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-[10px] sm:grid-cols-2">
                {v.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-[10px] text-[14px] text-estate-700">
                    <Dot />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="mt-7">
              <a
                href="#book-viewing"
                onClick={bookViewing}
                data-cta="book_viewing"
                data-location={`conferences_venue_${v.slug}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-champagne px-6 py-[15px] text-[14.5px] font-semibold text-ink shadow-accent transition-[transform,background-color] duration-200 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-px hover:bg-champagne-dark active:translate-y-0 motion-reduce:transform-none"
              >
                Book a Venue Viewing
                <Arrow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
