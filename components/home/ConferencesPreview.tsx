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
function Dot() {
  return <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-champagne" />;
}

/**
 * Homepage Conferences preview — the largest revenue pillar. Image-led editorial
 * storytelling (not a feature grid): capability + trust + scale + hospitality + ease.
 * Photography is a clearly-labelled CSS placeholder. Config-driven.
 */
export function ConferencesPreview() {
  const c = site.conferencesPreview;
  return (
    <section aria-labelledby="conf-heading" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-10 px-6 md:grid-cols-12 md:gap-16 md:px-12">
        {/* image (placeholder) */}
        <div className="md:col-span-6">
          <Reveal preset="imageReveal" className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card">
            <Image src={img.conferenceHallSet.src} alt={img.conferenceHallSet.alt} fill sizes="(min-width: 768px) 46vw, 100vw" className="object-cover" />
          </Reveal>
        </div>

        {/* copy */}
        <Reveal className="md:col-span-6">
          <p className="flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-dark">
            <span aria-hidden className="h-px w-[34px] bg-champagne" />
            {c.eyebrow}
          </p>
          <h2
            id="conf-heading"
            className="mt-5 max-w-[20ch] font-serif text-[30px] font-semibold leading-[1.1] tracking-[-.01em] text-estate-700 md:text-[40px]"
          >
            {c.heading}
          </h2>

          <div className="mt-6 space-y-4">
            {c.body.map((p, i) => (
              <p key={i} className="max-w-[56ch] text-[15.5px] leading-[1.7] text-charcoal md:text-[16px]">
                {p}
              </p>
            ))}
          </div>

          <ul className="mt-7 grid grid-cols-1 gap-x-8 gap-y-[10px] sm:grid-cols-2">
            {c.points.map((p) => (
              <li key={p} className="flex items-start gap-[10px] text-[14px] text-estate-700">
                <Dot />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-[14px]">
            <Button href={c.primary.href} variant="primary" track={{ cta: "book_viewing", location: "home_conferences" }}>
              {c.primary.label}
              <Arrow />
            </Button>
            <a
              href={c.secondary.href}
              data-cta="explore_conferences"
              data-location="home_conferences"
              className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-estate-700 underline-offset-4 hover:text-champagne-dark hover:underline"
            >
              {c.secondary.label}
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
