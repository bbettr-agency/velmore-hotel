"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { site } from "@/config/site";
import { isActivePath } from "@/components/site/Nav";

/**
 * Mobile navigation — the hamburger opens a deliberate full-screen panel on a
 * SOLID cream/ivory ground (no translucency, no glass), so the page behind never
 * competes with it. It carries its own header (brand + an obvious close X), the
 * primary routes with strong spacing, and the primary CTA. Rendered in a portal
 * on <body> at a high z-index so nothing (e.g. a sticky CTA) can sit over it.
 *
 * Accessibility: role=dialog + aria-modal, an obvious ≥44px close control
 * (aria-label="Close menu"), Escape to close, a focus trap while open, focus
 * moved to the close control on open, visible focus rings, and body-scroll lock.
 * Selecting any link (or the brand) closes the menu; navigating leaves it closed.
 */
export function MobileMenu({
  items = site.nav,
  pathname = "/",
  ctaHref = site.cta.primary.href,
}: {
  items?: readonly { label: string; href: string }[];
  pathname?: string;
  ctaHref?: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  useEffect(() => setMounted(true), []);

  // While open: lock body scroll, close on Escape, close if resized to desktop,
  // and move focus to the close control. Everything is restored on close.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    const t = window.setTimeout(() => closeRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(t);
    };
  }, [open]);

  // Simple focus trap so Tab stays within the open dialog.
  const onTrapKey = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab" || !panelRef.current) return;
    const f = panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    if (!f.length) return;
    const first = f[0];
    const last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const ctaClass =
    "inline-flex w-full items-center justify-center gap-2 rounded-md bg-champagne px-6 py-[15px] text-[15px] font-semibold text-ink shadow-accent transition-colors hover:bg-champagne-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-dark";

  const panel = (
    <div
      ref={panelRef}
      id="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      onKeyDown={onTrapKey}
      className="fixed inset-0 z-[100] flex flex-col bg-ivory px-6 pb-10 pt-6 text-estate-700 lg:hidden"
    >
      {/* header — brand + obvious close */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          onClick={close}
          aria-label={`${site.brand.name} ${site.brand.suffix} — home`}
          className="flex flex-col leading-none"
        >
          <span className="font-serif text-[23px] font-semibold tracking-[.02em] text-estate-700">{site.brand.name}</span>
          <span className="mt-[5px] pl-[2px] text-[9px] uppercase tracking-[.42em] text-champagne-dark">{site.brand.suffix}</span>
        </Link>
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label="Close menu"
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-estate-700 transition-colors hover:text-champagne-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-dark"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      {/* routes */}
      <nav aria-label="Mobile" className="mt-8 flex flex-1 flex-col">
        {items.map((item) => {
          const active = isActivePath(item.href, pathname);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              aria-current={active ? "page" : undefined}
              className={`flex items-center gap-3 border-b border-estate-700/10 py-4 font-serif text-[26px] font-semibold transition-colors hover:text-champagne-dark focus-visible:text-champagne-dark ${active ? "text-champagne-dark" : "text-estate-700"}`}
            >
              {active ? <span aria-hidden className="h-5 w-px bg-champagne" /> : null}
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* CTA + reassurance */}
      <div className="pt-6">
        {ctaHref.startsWith("#") ? (
          <a href={ctaHref} onClick={close} data-cta="book_viewing" data-location="mobile_menu" className={ctaClass}>
            {site.cta.primary.label} →
          </a>
        ) : (
          <Link href={ctaHref} onClick={close} data-cta="book_viewing" data-location="mobile_menu" className={ctaClass}>
            {site.cta.primary.label} →
          </Link>
        )}
        <p className="mt-4 text-center text-[13px] text-steel">{site.cta.reassurance}</p>
      </div>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
      >
        <span className="h-[2px] w-6 rounded bg-ivory" />
        <span className="h-[2px] w-6 rounded bg-ivory" />
        <span className="h-[2px] w-6 rounded bg-ivory" />
      </button>

      {open && mounted ? createPortal(panel, document.body) : null}
    </div>
  );
}
