import { site } from "@/config/site";
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
 * Homepage Spa preview — the page's quiet exhale after Conferences (capability),
 * Weddings (emotion) and Stay (rest). The most intimate composition: a warm, dim,
 * candlelit ground, one soft-focus sensory image, restrained copy and generous
 * negative space — a deliberate tonal dip. NAME-NEUTRAL (spa trading name/operator
 * unconfirmed — never "Allura"); communicates only the emotional role and invites
 * an enquiry — no invented services, treatments, pricing, hours, brands, facilities
 * or packages. Photography is a clearly labelled "still required" placeholder
 * (docs/17 §3.5). Config-driven.
 */
export function SpaPreview() {
  const s = site.spaPreview;
  return (
    <section aria-labelledby="spa-heading" className="relative overflow-hidden bg-[#131d17] py-28 md:py-40">
      <div aria-hidden className="absolute inset-0 spa-ground" />
      <div className="relative mx-auto grid max-w-container grid-cols-1 items-center gap-14 px-6 md:grid-cols-12 md:gap-16 md:px-12">
        {/* copy — restrained, floating in negative space */}
        <Reveal className="md:col-span-5 md:py-6">
          <p className="flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-light">
            <span aria-hidden className="h-px w-[34px] bg-champagne/70" />
            {s.eyebrow}
          </p>
          <h2
            id="spa-heading"
            className="mt-6 font-serif text-[34px] font-semibold leading-[1.08] tracking-[-.01em] text-ivory md:text-[46px]"
          >
            {s.heading}
          </h2>
          <p className="mt-6 max-w-[42ch] text-[15.5px] leading-[1.85] text-ivory/70 md:text-[16px]">
            {s.body}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Button href={s.primary.href} variant="primary" track={{ cta: "explore_spa", location: "home_spa" }}>
              {s.primary.label}
              <Arrow />
            </Button>
            <a
              href={s.secondary.href}
              data-cta="spa_enquire"
              data-location="home_spa"
              className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-ivory/90 underline-offset-4 hover:text-champagne-light hover:underline"
            >
              {s.secondary.label}
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Reveal>

        {/* one soft-focus sensory image (placeholder) — dominant, intimate */}
        <Reveal preset="imageReveal" className="md:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-ink">
            <div aria-hidden className="absolute inset-0 spa-image" />
            <div aria-hidden className="absolute inset-0 spa-soft" />
            <div aria-hidden className="absolute inset-0 spa-vignette" />
            <span className="absolute left-4 top-4 rounded-full bg-black/35 px-3 py-[5px] text-[9.5px] uppercase tracking-[.12em] text-ivory/75 backdrop-blur-[2px]">
              {s.imageNote}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
