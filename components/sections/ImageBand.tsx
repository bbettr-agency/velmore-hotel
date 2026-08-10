import { Button } from "@/components/ui/Button";
import { Placeholder, type PhVariant } from "./Placeholder";
import type { Cta } from "./types";
import type { Img } from "@/config/images";
import { Reveal } from "@/components/motion/Reveal";

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/**
 * Full-bleed image band with a restrained overlaid copy panel — the "let the
 * image do the work" section (like the homepage Dining/Final CTA). Copy sits on
 * a scrim, left-aligned or centered. An optional verified trust chip.
 */
export function ImageBand({
  eyebrow,
  heading,
  body,
  variant,
  note,
  image,
  primary,
  secondary,
  chip,
  align = "left",
}: {
  eyebrow?: string;
  heading: string;
  body?: string;
  variant: PhVariant;
  note?: string;
  image?: Img;
  primary?: Cta;
  secondary?: Cta;
  chip?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <section className="relative isolate flex min-h-[560px] overflow-hidden md:min-h-[620px]">
      <Placeholder variant={variant} image={image} sizes="100vw" />
      <div aria-hidden className="absolute inset-0 dine-scrim" />
      <div aria-hidden className="absolute inset-0 page-vignette" />
      {image ? null : (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-black/35 px-3 py-[5px] text-[9.5px] uppercase tracking-[.12em] text-ivory/75 backdrop-blur-[2px]">
          {note}
        </span>
      )}

      <div className={`relative mx-auto flex w-full max-w-container items-end px-6 py-16 md:items-center md:px-12 md:py-24 ${centered ? "justify-center text-center" : ""}`}>
        <Reveal className={`${centered ? "max-w-[40rem]" : "max-w-[34rem]"}`}>
          {eyebrow ? (
            <p className={`flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-light ${centered ? "justify-center" : ""}`}>
              <span aria-hidden className="h-px w-[34px] bg-champagne/70" />
              {eyebrow}
              {centered ? <span aria-hidden className="h-px w-[34px] bg-champagne/70" /> : null}
            </p>
          ) : null}
          <h2 className="mt-5 max-w-[18ch] font-serif text-[30px] font-semibold leading-[1.1] tracking-[-.01em] text-ivory md:text-[42px]">
            {heading}
          </h2>
          {body ? <p className="mt-5 max-w-[46ch] text-[15.5px] leading-[1.8] text-ivory/80 md:text-[16px]">{body}</p> : null}
          {chip ? (
            <p className={`mt-6 inline-flex items-center gap-2 rounded-full border border-champagne/40 bg-black/20 px-3.5 py-[7px] text-[11px] font-semibold uppercase tracking-[.14em] text-champagne-light backdrop-blur-[2px]`}>
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-champagne" />
              {chip}
            </p>
          ) : null}
          {primary || secondary ? (
            <div className={`mt-8 flex flex-wrap items-center gap-6 ${centered ? "justify-center" : ""}`}>
              {primary ? (
                <Button href={primary.href} variant="primary" track={{ cta: primary.cta, location: primary.location }}>
                  {primary.label}
                  <Arrow />
                </Button>
              ) : null}
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
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
