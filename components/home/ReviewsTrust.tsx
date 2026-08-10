import { site } from "@/config/site";

/** Filled star for the real (verified) rating state. */
function Star({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden>
      <path d="M12 3.2l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z" />
    </svg>
  );
}

/**
 * Homepage Reviews / Trust — quiet, editorial, confident. Answers "can I trust
 * them with the most important occasion?". LAUNCH-GATED: until real verified
 * Google reviews are connected (`ready:false`), it shows ONLY the confident
 * statement (brand copy, not a testimonial) + an honest "reviews being connected"
 * line — NO placeholder rating, count, quotes or AggregateRating schema. When
 * `ready:true`, it renders the real rating + curated quotes (and schema can be
 * emitted upstream). Config-driven.
 */
export function ReviewsTrust() {
  const r = site.reviewsPreview;
  const ready = r.ready && r.quotes.length > 0;

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

          {ready && "rating" in r ? (
            <div data-google-reviews="aggregate" className="mt-8 inline-flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-1 text-champagne" aria-hidden>
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} filled={n <= Math.round((r as { rating: number }).rating)} />
                ))}
              </div>
              <p className="text-[11px] uppercase tracking-[.18em] text-steel">{r.ratingLabel}</p>
            </div>
          ) : (
            // launch state — no fabricated rating; honest "connecting" line + optional Google link
            <p className="mt-7 text-[12.5px] uppercase tracking-[.16em] text-steel">
              {r.googleUrl ? (
                <a href={r.googleUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-champagne-dark hover:underline">
                  Read our reviews on Google →
                </a>
              ) : (
                r.connectingNote
              )}
            </p>
          )}
        </div>

        {ready ? (
          <div className="reveal reveal-2 mx-auto mt-16 grid max-w-[60rem] grid-cols-1 gap-12 md:mt-20 md:grid-cols-2 md:gap-16">
            {r.quotes.map((q, i) => (
              <figure key={i} data-review-slot={i} className={`text-center md:text-left ${i === 1 ? "md:border-l md:border-estate-100 md:pl-16" : ""}`}>
                <span aria-hidden className="block font-serif text-[40px] leading-none text-champagne/60">&ldquo;</span>
                <blockquote className="mt-3 font-serif text-[19px] italic leading-[1.5] text-estate-700 md:text-[21px]">{q.text}</blockquote>
                <figcaption className="mt-4 text-[11px] uppercase tracking-[.18em] text-steel">— {q.who}</figcaption>
              </figure>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
