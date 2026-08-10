import { Button } from "@/components/ui/Button";
import { Placeholder, type PhVariant } from "./Placeholder";
import type { Cta } from "./types";
import type { Img } from "@/config/images";

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
 * Image + copy split section (image-first). The workhorse for inner pages:
 * a labelled placeholder on one side, an editorial copy block on the other,
 * with an optional points list and CTAs. Alternate `imageSide` and `tone`
 * between instances so a page keeps an editorial rhythm.
 */
export function FeatureSplit({
  eyebrow,
  heading,
  body,
  points,
  variant,
  note,
  image,
  imageSide = "left",
  tone = "ivory",
  portrait = false,
  primary,
  secondary,
  id,
}: {
  eyebrow?: string;
  heading: string;
  body: readonly string[];
  points?: readonly string[];
  variant: PhVariant;
  note: string;
  image?: Img;
  imageSide?: "left" | "right";
  tone?: "ivory" | "mist";
  portrait?: boolean;
  primary?: Cta;
  secondary?: Cta;
  id?: string;
}) {
  const bg = tone === "mist" ? "bg-mist" : "bg-ivory";
  const imageFirst = imageSide === "left";
  return (
    <section id={id} aria-labelledby={heading ? undefined : undefined} className={`${bg} py-24 md:py-28`}>
      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-10 px-6 md:grid-cols-12 md:gap-16 md:px-12">
        <div className={`md:col-span-6 ${imageFirst ? "" : "md:order-2"}`}>
          <div className={`relative ${portrait ? "mx-auto aspect-[4/5] max-w-[440px]" : "aspect-[4/3]"} overflow-hidden rounded-lg shadow-card`}>
            <Placeholder variant={variant} note={note} image={image} sizes="(min-width: 768px) 46vw, 100vw" />
          </div>
        </div>
        <div className={`md:col-span-6 ${imageFirst ? "" : "md:order-1"}`}>
          {eyebrow ? (
            <p className="flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-dark">
              <span aria-hidden className="h-px w-[34px] bg-champagne" />
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-5 max-w-[20ch] font-serif text-[28px] font-semibold leading-[1.12] tracking-[-.01em] text-estate-700 md:text-[36px]">
            {heading}
          </h2>
          <div className="mt-6 space-y-4">
            {body.map((p, i) => (
              <p key={i} className="max-w-[56ch] text-[15.5px] leading-[1.7] text-charcoal md:text-[16px]">
                {p}
              </p>
            ))}
          </div>
          {points && points.length ? (
            <ul className="mt-7 grid grid-cols-1 gap-x-8 gap-y-[10px] sm:grid-cols-2">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-[10px] text-[14px] text-estate-700">
                  <Dot />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {primary || secondary ? (
            <div className="mt-9 flex flex-wrap items-center gap-[14px]">
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
                  className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-estate-700 underline-offset-4 hover:text-champagne-dark hover:underline"
                >
                  {secondary.label}
                  <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
