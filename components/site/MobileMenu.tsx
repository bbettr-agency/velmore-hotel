"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/config/site";
import { isActivePath } from "@/components/site/Nav";

/**
 * Mobile navigation — the hamburger opens a full-screen estate-dark panel with
 * the primary routes and the primary CTA. Accessible: labelled toggle,
 * aria-expanded/controls, Escape to close, focusable links, ≥44px targets.
 * `items` is supplied by Nav (includes an explicit Home link on inner pages);
 * the current route gets a subtle champagne active state.
 */
export function MobileMenu({
  items = site.nav,
  pathname = "/",
}: {
  items?: readonly { label: string; href: string }[];
  pathname?: string;
}) {
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
            {items.map((item) => {
              const active = isActivePath(item.href, pathname);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-3 border-b border-ivory/10 py-4 font-serif text-[26px] font-semibold hover:text-champagne-light ${active ? "text-champagne-light" : "text-ivory"}`}
                >
                  {active ? <span aria-hidden className="h-4 w-px bg-champagne" /> : null}
                  {item.label}
                </Link>
              );
            })}
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
