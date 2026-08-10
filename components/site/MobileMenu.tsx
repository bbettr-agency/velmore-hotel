"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/config/site";

/**
 * Mobile navigation — the hamburger opens a full-screen estate-dark panel with
 * the primary routes and the primary CTA. Accessible: labelled toggle,
 * aria-expanded/controls, Escape to close, focusable links, ≥44px targets.
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 flex-col items-center justify-center gap-[5px]"
      >
        <span className={`h-[2px] w-6 rounded bg-ivory transition-transform duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
        <span className={`h-[2px] w-6 rounded bg-ivory transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
        <span className={`h-[2px] w-6 rounded bg-ivory transition-transform duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
      </button>

      {open ? (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
          className="fixed inset-0 z-40 flex flex-col bg-estate-900/98 px-6 pb-10 pt-28 backdrop-blur-sm"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-ivory/10 py-4 font-serif text-[26px] font-semibold text-ivory hover:text-champagne-light"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href={site.cta.primary.href}
            onClick={() => setOpen(false)}
            data-cta="book_viewing"
            data-location="mobile_menu"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-champagne px-6 py-[15px] text-[15px] font-semibold text-ink shadow-accent"
          >
            {site.cta.primary.label} →
          </Link>
          <p className="mt-6 text-[13px] text-ivory/60">{site.cta.reassurance}</p>
        </div>
      ) : null}
    </div>
  );
}
