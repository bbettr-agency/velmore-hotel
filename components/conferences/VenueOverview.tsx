import Image from "next/image";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import type { Img } from "@/config/images";

type Venue = {
  heading: string;
  slug: string;
  eyebrow: string;
  points?: readonly string[];
  images: readonly Img[];
};

/**
 * Compact venue overview — six visual cards that let a visitor grasp the whole
 * venue menu in one or two viewports, then jump straight to the full photography.
 * Each card smooth-scrolls to that venue's detailed section further down the SAME
 * page (id="venue-<slug>") — no separate venue pages. Capacity is shown only where
 * a confirmed figure exists; otherwise the card shows the venue's setting label
 * (no fabricated numbers). Lives under id="venues" for the hero "Explore the
 * Venues" CTA.
 */
export function VenueOverview({
  eyebrow,
  heading,
  lead,
  venues,
}: {
  eyebrow?: string;
  heading: string;
  lead?: string;
  venues: readonly Venue[];
}) {
  return (
    <section id="venues" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <Reveal className="mx-auto max-w-[46rem] text-center">
          {eyebrow ? (
            <p className="flex items-center justify-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-dark">
              <span aria-hidden className="h-px w-[26px] bg-champagne" />
              {eyebrow}
              <span aria-hidden className="h-px w-[26px] bg-champagne" />
            </p>
          ) : null}
          <h2 className="mx-auto mt-5 max-w-[20ch] font-serif text-[27px] font-semibold leading-[1.14] tracking-[-.01em] text-estate-700 md:text-[36px]">
            {heading}
          </h2>
          {lead ? <p className="mx-auto mt-5 max-w-[54ch] text-[15.5px] leading-[1.75] text-charcoal md:text-[16px]">{lead}</p> : null}
        </Reveal>

        <Stagger as="ul" className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-14">
          {venues.map((v) => {
            const capacity = v.points?.find((p) => /^Up to/i.test(p));
            const sub = capacity ?? v.eyebrow;
            return (
              <Reveal as="li" key={v.slug} preset="fadeUpItem">
                <a
                  href={`#venue-${v.slug}`}
                  className="group block h-full overflow-hidden rounded-lg bg-white shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-champagne"
                  aria-label={`Jump to ${v.heading}${capacity ? ` — ${capacity}` : ""}`}
                >
                  <span className="relative block aspect-[4/3] overflow-hidden">
                    <Image
                      src={v.images[0].src}
                      alt={v.images[0].alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw"
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04] motion-reduce:transform-none"
                    />
                  </span>
                  <span className="flex items-center justify-between gap-3 px-5 py-4">
                    <span className="min-w-0">
                      <span className="block font-serif text-[19px] font-semibold text-estate-700">{v.heading}</span>
                      <span className="mt-0.5 block truncate text-[13px] text-steel">{sub}</span>
                    </span>
                    <span className="flex items-center gap-1.5 whitespace-nowrap text-[12.5px] font-semibold text-champagne-dark">
                      View
                      <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </span>
                  </span>
                </a>
              </Reveal>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
