import Link from "next/link";
import { site } from "@/config/site";

/**
 * The beginning of the next section (journey selector), overlapping the fold —
 * the scroll transition from the dark hero into the ivory estate. The full
 * section is fleshed out in the next milestone.
 */
export function JourneyPeek() {
  const { journeys } = site;
  return (
    <section
      aria-label={journeys.heading}
      className="relative z-20 -mt-8 rounded-t-[30px] bg-ivory px-6 pb-24 pt-10 shadow-[0_-30px_60px_-40px_rgba(10,15,12,.5)] md:px-12"
    >
      <p className="flex items-center justify-center gap-[14px] text-[11.5px] font-semibold uppercase tracking-[.26em] text-steel">
        <span aria-hidden className="h-px w-10 bg-stone" />
        {journeys.kicker}
        <span aria-hidden className="h-px w-10 bg-stone" />
      </p>
      <h2 className="mt-[14px] text-center font-serif text-[30px] font-semibold tracking-[-.01em] text-estate-700">
        {journeys.heading}
      </h2>

      <ul className="mt-7 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {journeys.items.map((j) => (
          <li key={j.name}>
            <Link
              href={j.href}
              className="group block h-full rounded-lg border border-[#E4DCCB] bg-white p-5 shadow-card transition-transform duration-200 hover:-translate-y-[3px] hover:shadow-lift"
            >
              <span className="font-serif text-[19px] font-semibold text-estate-700">{j.name}</span>
              <span className="mt-[6px] block text-[12.5px] leading-[1.5] text-steel">{j.desc}</span>
              <span className="mt-[14px] block text-[12px] font-semibold tracking-[.02em] text-champagne-dark">
                Explore {j.name.toLowerCase()} →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
