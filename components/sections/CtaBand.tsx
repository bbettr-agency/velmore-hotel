import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";
import type { Cta } from "./types";

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/**
 * Closing CTA band — the quiet, image-first conversion close reused at the foot
 * of every inner page (a shared version of the homepage Final CTA). Warm
 * full-bleed placeholder, centered minimal copy, primary + secondary + the
 * reassurance line ("the next step is easy").
 */
export function CtaBand({
  eyebrow = "Come and see it",
  heading,
  body,
  primary,
  secondary,
  note = "Photography placeholder · the estate at golden hour (to be shot)",
}: {
  eyebrow?: string;
  heading: string;
  body?: string;
  primary: Cta;
  secondary?: Cta;
  note?: string;
}) {
  return (
    <section className="relative isolate flex min-h-[480px] items-center overflow-hidden md:min-h-[540px]">
      <div aria-hidden className="absolute inset-0 cta-image" />
      <div aria-hidden className="absolute inset-0 cta-scrim" />
      <div aria-hidden className="absolute inset-0 cta-vignette" />
      <span className="absolute right-4 top-4 z-10 rounded-full bg-black/35 px-3 py-[5px] text-[9.5px] uppercase tracking-[.12em] text-ivory/70 backdrop-blur-[2px]">
        {note}
      </span>

      <div className="relative mx-auto w-full max-w-container px-6 py-20 text-center md:px-12 md:py-24">
        <p className="flex items-center justify-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-light">
          <span aria-hidden className="h-px w-[26px] bg-champagne/70" />
          {eyebrow}
          <span aria-hidden className="h-px w-[26px] bg-champagne/70" />
        </p>
        <h2 className="mx-auto mt-6 max-w-[18ch] font-serif text-[32px] font-semibold leading-[1.08] tracking-[-.01em] text-ivory md:text-[44px]">
          {heading}
        </h2>
        {body ? <p className="mx-auto mt-5 max-w-[44ch] text-[15.5px] leading-[1.7] text-ivory/80 md:text-[16.5px]">{body}</p> : null}

        <div className="mt-9 flex flex-wrap items-center justify-center gap-[14px]">
          <Button href={primary.href} variant="primary" track={{ cta: primary.cta, location: primary.location }}>
            {primary.label}
            <Arrow />
          </Button>
          {secondary ? (
            <a
              href={secondary.href}
              data-cta={secondary.cta}
              data-location={secondary.location}
              className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-ivory/90 underline-offset-4 hover:text-champagne-light hover:underline"
            >
              {secondary.label}
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          ) : null}
        </div>
        <p className="mt-7 text-[12px] uppercase tracking-[.16em] text-ivory/55">{site.cta.reassurance}</p>
      </div>
    </section>
  );
}
