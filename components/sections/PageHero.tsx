import { Nav } from "@/components/site/Nav";
import { Button } from "@/components/ui/Button";
import { Placeholder, type PhVariant } from "./Placeholder";
import type { Cta } from "./types";
import type { Img } from "@/config/images";
import { Reveal } from "@/components/motion/Reveal";
import { heroStack } from "@/engine/motion";
import { MOTION_CHARACTER } from "@/config/motion";

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
function Check() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/**
 * Inner-page hero — image-FIRST, dark and cinematic (like the homepage hero but
 * a shared, config-driven primitive). A full-bleed placeholder (per vertical)
 * under a strong scrim keeps the ivory nav + white headline legible over any
 * hue. Eyebrow → H1 → sub → optional proof chips → primary + secondary CTA.
 */
export function PageHero({
  eyebrow,
  title,
  sub,
  variant,
  note,
  image,
  primary,
  secondary,
  chips,
  reassurance,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  variant: PhVariant;
  note: string;
  image?: Img;
  primary: Cta;
  secondary?: Cta;
  chips?: readonly { label: string; badge?: boolean }[];
  reassurance?: string;
}) {
  const hero0 = heroStack({ character: MOTION_CHARACTER });
  return (
    <>
      <Nav />
      <header className="relative flex min-h-[76vh] items-end overflow-hidden text-ivory [isolation:isolate]">
        <Placeholder variant={variant} image={image} sizes="100vw" priority />
        <div aria-hidden className="absolute inset-0 page-scrim" />
        <div aria-hidden className="absolute inset-0 page-vignette" />
        {image ? null : (
          <span className="absolute right-5 top-[92px] z-[5] text-[9px] uppercase tracking-[.1em] text-white/45">{note}</span>
        )}

        <div className="relative mx-auto w-full max-w-container px-6 pb-16 pt-32 md:px-12 md:pb-20">
          <Reveal as="p" {...hero0.step(0)} className="flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.30em] text-champagne-light">
            <span aria-hidden className="h-px w-[34px] bg-champagne" />
            {eyebrow}
          </Reveal>
          <h1 {...hero0.lcp} className="mt-5 max-w-[18ch] font-serif text-[40px] font-semibold leading-[1.04] tracking-[-.015em] text-white [text-shadow:0_2px_40px_rgba(0,0,0,.35)] sm:text-[52px] md:text-[62px]">
            {title}
          </h1>
          {sub ? (
            <Reveal as="p" {...hero0.step(1)} className="mt-5 max-w-[54ch] text-[15.5px] leading-[1.6] text-ivory/90 md:text-[17px]">{sub}</Reveal>
          ) : null}

          {chips && chips.length ? (
            <Reveal as="ul" {...hero0.step(2)} className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-[10px]">
              {chips.map((c) =>
                c.badge ? (
                  <li key={c.label}>
                    <span className="inline-flex items-center gap-[7px] rounded-full border border-champagne px-[13px] py-[5px] text-[11.5px] font-semibold uppercase tracking-[.04em] text-champagne-light">
                      <Check />
                      {c.label}
                    </span>
                  </li>
                ) : (
                  <li key={c.label} className="flex items-center gap-[9px] text-[12.5px] text-ivory/90">
                    <span aria-hidden className="h-1 w-1 rounded-full bg-champagne" />
                    {c.label}
                  </li>
                ),
              )}
            </Reveal>
          ) : null}

          <Reveal {...hero0.step(3)} className="mt-8 flex flex-wrap items-center gap-[14px]">
            <Button href={primary.href} variant="primary" track={{ cta: primary.cta, location: primary.location }}>
              {primary.label}
              <Arrow />
            </Button>
            {secondary ? (
              <Button href={secondary.href} variant="secondary" track={{ cta: secondary.cta, location: secondary.location }}>
                {secondary.label}
              </Button>
            ) : null}
          </Reveal>
          {reassurance ? <Reveal as="p" {...hero0.step(4)} className="mt-[14px] text-[11.5px] tracking-[.01em] text-ivory/60">{reassurance}</Reveal> : null}
        </div>
      </header>
    </>
  );
}
