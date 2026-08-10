import Image from "next/image";
import { site } from "@/config/site";
import { img } from "@/config/images";
import { Button } from "@/components/ui/Button";

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/**
 * Homepage Weddings preview — the emotive counterpoint to ConferencesPreview.
 * Same premium editorial language, deliberately varied: copy leads (left), the
 * image is portrait (right) for intimacy, and capability is carried in an
 * understated "held for you" line rather than a feature grid. Leads with emotion,
 * supported by confidence. Photography is a clearly-labelled CSS placeholder.
 * Config-driven; confirmed facts only.
 */
export function WeddingsPreview() {
  const w = site.weddingsPreview;
  return (
    <section aria-labelledby="wed-heading" className="bg-mist py-24 md:py-32">
      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-12">
        {/* copy — leads, on the left (conferences led with the image) */}
        <div className="md:col-span-6 md:pr-6">
          <p className="flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-dark">
            <span aria-hidden className="h-px w-[34px] bg-champagne" />
            {w.eyebrow}
          </p>

          <p className="mt-6 max-w-[26ch] font-serif text-[19px] italic leading-[1.45] text-estate-700/90 md:text-[21px]">
            {w.kicker}
          </p>
          <h2
            id="wed-heading"
            className="mt-4 max-w-[18ch] font-serif text-[31px] font-semibold leading-[1.1] tracking-[-.01em] text-estate-700 md:text-[42px]"
          >
            {w.heading}
          </h2>

          <div className="mt-6 space-y-4">
            {w.body.map((p, i) => (
              <p key={i} className="max-w-[54ch] text-[15.5px] leading-[1.75] text-charcoal md:text-[16px]">
                {p}
              </p>
            ))}
          </div>

          {/* capability, quietly — a hairline "held for you" line, not a feature grid */}
          <div className="mt-8 border-t border-estate-100 pt-5">
            <p className="text-[10.5px] font-semibold uppercase tracking-[.24em] text-champagne-dark">
              {w.heldLabel}
            </p>
            <ul className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13.5px] text-estate-700">
              {w.points.map((p, i) => (
                <li key={p} className="flex w-full items-center gap-3 sm:w-auto">
                  {i > 0 && <span aria-hidden className="hidden h-3 w-px bg-estate-100 sm:block" />}
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-[14px]">
            <Button href={w.primary.href} variant="primary" track={{ cta: "book_viewing", location: "home_weddings" }}>
              {w.primary.label}
              <Arrow />
            </Button>
            <a
              href={w.secondary.href}
              data-cta="explore_weddings"
              data-location="home_weddings"
              className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-estate-700 underline-offset-4 hover:text-champagne-dark hover:underline"
            >
              {w.secondary.label}
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* image (placeholder) — portrait, for intimacy vs the conference landscape */}
        <div className="md:col-span-6">
          <div className="relative mx-auto aspect-[4/5] max-w-[440px] overflow-hidden rounded-lg shadow-card md:ml-auto md:mr-0">
            <Image src={img.receptionTable.src} alt={img.receptionTable.alt} fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
