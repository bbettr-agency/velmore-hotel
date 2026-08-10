import { Placeholder, type PhVariant } from "./Placeholder";
import type { Img } from "@/config/images";
import { Reveal, Stagger } from "@/components/motion/Reveal";

/**
 * A curated tile grid for the Gallery page — captioned placeholder tiles across
 * verticals with a slow, motion-safe hover-zoom. Every tile is a clearly-labelled
 * placeholder until the curated gallery is shot (docs/17 §3.10).
 */
export function GalleryGrid({
  tiles,
  note,
  eyebrow,
  heading,
  tone = "ivory",
}: {
  tiles: readonly { label: string; variant: PhVariant; image?: Img }[];
  note?: string;
  eyebrow?: string;
  heading?: string;
  tone?: "ivory" | "mist";
}) {
  const bg = tone === "mist" ? "bg-mist" : "bg-ivory";
  return (
    <section className={`${bg} py-20 md:py-24`}>
      <div className="mx-auto max-w-container px-6 md:px-12">
        {heading ? (
          <Reveal className="mb-12 max-w-[46ch]">
            {eyebrow ? (
              <p className="flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-dark">
                <span aria-hidden className="h-px w-[34px] bg-champagne" />
                {eyebrow}
              </p>
            ) : null}
            <h2 className="mt-5 font-serif text-[28px] font-semibold leading-[1.12] tracking-[-.01em] text-estate-700 md:text-[36px]">
              {heading}
            </h2>
          </Reveal>
        ) : null}
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          {tiles.map((t) => (
            <Reveal key={t.label} as="figure" preset="fadeUpItem" className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-card">
              <div className="absolute inset-0 scale-[1.02] transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-[1.02]">
                <Placeholder variant={t.variant} image={t.image} sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw" />
              </div>
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 gal-chipscrim" />
              <figcaption className="absolute bottom-4 left-4 flex items-baseline gap-2">
                <span className="font-serif text-[15px] font-semibold text-ivory md:text-[16px]">{t.label}</span>
                {t.image ? null : <span className="text-[9.5px] uppercase tracking-[.14em] text-ivory/55">· placeholder</span>}
              </figcaption>
            </Reveal>
          ))}
        </Stagger>
        {note ? <p className="mx-auto mt-12 max-w-[54ch] text-center text-[12px] leading-[1.6] text-stone">{note}</p> : null}
      </div>
    </section>
  );
}
