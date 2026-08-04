import { site } from "@/config/site";

/** Outline star — signals the "awaiting live data" state (no rating asserted). */
function Star() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden>
      <path d="M12 3.2l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z" />
    </svg>
  );
}

/**
 * Homepage Reviews / Trust — the turn from emotion into conversion: quiet,
 * editorial, confident. NOT a slider/cards/widget/wall of text. Answers "can I
 * trust them with one of the most important occasions in my life?" through a
 * single confident statement and two restrained pull-quotes, with generous
 * breathing room. Review count / testimonials / grading are Gate-1 + consent
 * items, so the aggregate and quotes are CLEARLY-TEMPORARY placeholders,
 * architected with data-* slots to populate from live Google reviews later.
 * No AggregateRating schema until consented. Config-driven.
 */
export function ReviewsTrust() {
  const r = site.reviewsPreview;
  return (
    <section aria-labelledby="trust-heading" className="bg-mist py-28 md:py-40">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <div className="reveal reveal-1 mx-auto max-w-[46rem] text-center">
          <p className="flex items-center justify-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-dark">
            <span aria-hidden className="h-px w-[26px] bg-champagne" />
            {r.eyebrow}
            <span aria-hidden className="h-px w-[26px] bg-champagne" />
          </p>
          <h2
            id="trust-heading"
            className="mx-auto mt-6 max-w-[20ch] font-serif text-[28px] font-semibold leading-[1.14] tracking-[-.01em] text-estate-700 md:text-[38px]"
          >
            {r.heading}
          </h2>

          {/* aggregate — architected to populate from live Google reviews */}
          <div
            data-google-reviews="aggregate"
            className="mt-8 inline-flex flex-col items-center gap-1.5"
          >
            <div className="flex items-center gap-1 text-champagne/70" aria-hidden>
              <Star /><Star /><Star /><Star /><Star />
            </div>
            <p className="text-[11px] uppercase tracking-[.18em] text-steel">
              {r.ratingLabel} · <span className="italic normal-case tracking-normal">{r.ratingNote}</span>
            </p>
          </div>
        </div>

        {/* two restrained pull-quotes — editorial, not cards */}
        <div className="reveal reveal-2 mx-auto mt-16 grid max-w-[60rem] grid-cols-1 gap-12 md:mt-20 md:grid-cols-2 md:gap-16">
          {r.quotes.map((q, i) => (
            <figure
              key={i}
              data-review-slot={i}
              className={`text-center md:text-left ${i === 1 ? "md:border-l md:border-estate-100 md:pl-16" : ""}`}
            >
              <span aria-hidden className="block font-serif text-[40px] leading-none text-champagne/60">&ldquo;</span>
              <blockquote className="mt-3 font-serif text-[19px] italic leading-[1.5] text-estate-700 md:text-[21px]">
                {q.text}
              </blockquote>
              <figcaption className="mt-4 text-[11px] uppercase tracking-[.18em] text-steel">
                — {q.who}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* honest, quiet placeholder disclosure */}
        <p className="mx-auto mt-14 max-w-[52ch] text-center text-[12px] leading-[1.6] text-stone md:mt-16">
          {r.note}
        </p>
      </div>
    </section>
  );
}
