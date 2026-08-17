"use client";

import { useEffect, useState } from "react";

/**
 * Mobile-only sticky viewing CTA — keeps "Book a viewing" reachable on the long
 * conferences scroll without hunting for it. Premium and restrained: appears only
 * after the hero has been passed, hides itself while the booking form is in view
 * (so it never covers it), and is dismissible. Links to the same #book-viewing
 * flow as every other CTA. ≥44px targets.
 */
export function StickyViewingCta() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    let past = false;
    let inForm = false;
    const update = () => setShow(past && !inForm);
    const onScroll = () => {
      past = window.scrollY > window.innerHeight * 0.85;
      update();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const target = document.getElementById("book-viewing");
    let io: IntersectionObserver | undefined;
    if (target) {
      io = new IntersectionObserver(
        ([entry]) => {
          inForm = entry.isIntersecting;
          update();
        },
        { rootMargin: "0px 0px -35% 0px" },
      );
      io.observe(target);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-3 lg:hidden ${show ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!show}
    >
      <div
        className={`flex items-center gap-3 rounded-xl border border-ivory/10 bg-estate-900/95 px-4 py-3 shadow-ink backdrop-blur-sm transition-all duration-300 ${
          show ? "translate-y-0 opacity-100" : "translate-y-[130%] opacity-0"
        }`}
      >
        <p className="min-w-0 flex-1 text-[13.5px] font-semibold text-ivory">Planning a conference?</p>
        <a
          href="#book-viewing"
          data-cta="book_viewing"
          data-location="conferences_sticky"
          className="inline-flex h-11 shrink-0 items-center rounded-md bg-champagne px-4 text-[13px] font-semibold text-ink shadow-accent"
        >
          Book a viewing
        </a>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ivory/60 hover:text-ivory"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
