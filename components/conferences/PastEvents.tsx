import { EventGallery } from "./EventGallery";
import { Reveal } from "@/components/motion/Reveal";
import type { Img } from "@/config/images";

type Slide = { image: Img; caption?: string };

/**
 * "Real occasions" — visual proof that the venues come alive. Photography-led:
 * a short header, one large event-gallery slider, and a single viewing CTA that
 * feeds the same #book-viewing flow. Minimal copy; the images do the selling.
 */
export function PastEvents({
  eyebrow,
  heading,
  lead,
  slides,
  cta,
}: {
  eyebrow?: string;
  heading: string;
  lead?: string;
  slides: readonly Slide[];
  cta: { label: string; href: string };
}) {
  return (
    <section className="bg-mist py-20 md:py-28">
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

        <Reveal preset="imageReveal" className="mx-auto mt-10 max-w-[64rem] md:mt-12">
          <EventGallery items={slides} />
        </Reveal>

        <div className="mt-10 flex justify-center md:mt-12">
          <a
            href={cta.href}
            data-cta="book_viewing"
            data-location="conferences_past_events"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-champagne px-6 py-[15px] text-[14.5px] font-semibold text-ink shadow-accent transition-[transform,background-color] duration-200 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-px hover:bg-champagne-dark active:translate-y-0 motion-reduce:transform-none"
          >
            {cta.label}
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
