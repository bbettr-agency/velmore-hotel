import { EventGallery } from "./EventGallery";
import { Reveal } from "@/components/motion/Reveal";
import type { Img } from "@/config/images";

type Slide = { image: Img; caption?: string; position?: string };

/**
 * "Real occasions" — visual proof that the venues come alive. An editorial split:
 * on desktop the event slider sits on the LEFT and dominates (~58%), with the copy
 * and viewing CTA on the RIGHT — a deliberate flip of the rhythm from the section
 * above. On mobile the copy leads (heading, lead, CTA) so the visitor knows WHY
 * they're looking before the slider follows. The images do the selling; the CTA
 * feeds the same #book-viewing flow.
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
      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-10 px-6 md:px-12 lg:grid-cols-12 lg:gap-14">
        {/* Gallery — left on desktop, second on mobile */}
        <Reveal
          preset="imageReveal"
          className="order-2 lg:order-1 lg:col-span-7"
        >
          <EventGallery items={slides} />
        </Reveal>

        {/* Copy — right on desktop, first on mobile */}
        <Reveal className="order-1 lg:order-2 lg:col-span-5">
          {eyebrow ? (
            <p className="flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-dark">
              <span aria-hidden className="h-px w-[26px] bg-champagne" />
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-5 max-w-[18ch] font-serif text-[27px] font-semibold leading-[1.14] tracking-[-.01em] text-estate-700 md:text-[36px]">
            {heading}
          </h2>
          {lead ? (
            <p className="mt-5 max-w-[46ch] text-[15.5px] leading-[1.75] text-charcoal md:text-[16px]">
              {lead}
            </p>
          ) : null}
          <div className="mt-8">
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
        </Reveal>
      </div>
    </section>
  );
}
