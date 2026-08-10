import Image from "next/image";
import { site } from "@/config/site";
import { img } from "@/config/images";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/**
 * Homepage Final CTA — the natural conclusion. NOT loud or salesy: the visitor
 * is already convinced, so this simply invites them to begin, quietly. Image-FIRST
 * (a warm estate-at-golden-hour close that bookends the cool dusk hero), centered
 * and minimal — one line, one primary CTA, one secondary CTA, and the reassurance
 * micro-line ("the next step is easy"). Photography is a clearly-labelled
 * placeholder. Config-driven.
 */
export function FinalCta() {
  const f = site.finalCta;
  return (
    <section
      aria-labelledby="finalcta-heading"
      className="relative isolate flex min-h-[520px] items-center overflow-hidden md:min-h-[580px]"
    >
      {/* full-bleed image — carries the emotional close */}
      <Image src={img.entranceSignage.src} alt={img.entranceSignage.alt} fill sizes="100vw" className="object-cover" />
      <div aria-hidden className="absolute inset-0 cta-scrim" />
      <div aria-hidden className="absolute inset-0 cta-vignette" />

      {/* centered, minimal copy */}
      <Reveal className="relative mx-auto w-full max-w-container px-6 py-20 text-center md:px-12 md:py-28">
        <p className="flex items-center justify-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-light">
          <span aria-hidden className="h-px w-[26px] bg-champagne/70" />
          {f.eyebrow}
          <span aria-hidden className="h-px w-[26px] bg-champagne/70" />
        </p>
        <h2
          id="finalcta-heading"
          className="mx-auto mt-6 max-w-[16ch] font-serif text-[34px] font-semibold leading-[1.08] tracking-[-.01em] text-ivory md:text-[48px]"
        >
          {f.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-[44ch] text-[15.5px] leading-[1.7] text-ivory/80 md:text-[16.5px]">
          {f.body}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-[14px]">
          <Button href={site.cta.primary.href} variant="primary" track={{ cta: "book_viewing", location: "home_final_cta" }}>
            {site.cta.primary.label}
            <Arrow />
          </Button>
          <a
            href={site.cta.secondary.href}
            data-cta="enquire_date"
            data-location="home_final_cta"
            className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-ivory/90 underline-offset-4 hover:text-champagne-light hover:underline"
          >
            {site.cta.secondary.label}
            <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>

        <p className="mt-7 text-[12px] uppercase tracking-[.16em] text-ivory/55">{site.cta.reassurance}</p>
      </Reveal>
    </section>
  );
}
