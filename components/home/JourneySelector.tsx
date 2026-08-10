import Link from "next/link";
import { site } from "@/config/site";
import { Reveal, Stagger } from "@/components/motion/Reveal";

/**
 * Homepage Journey Selector — the complete section. Continues the dark-hero → ivory
 * transition and lets each visitor pick their path quickly. Config-driven.
 */
export function JourneySelector() {
  const { journeys } = site;
  return (
    <section
      aria-label={journeys.heading}
      className="relative z-20 -mt-8 rounded-t-[30px] bg-ivory px-6 pb-24 pt-14 shadow-[0_-30px_60px_-40px_rgba(10,15,12,.5)] md:px-12 md:pt-20"
    >
      <div className="mx-auto max-w-container">
        <Reveal>
          <p className="flex items-center justify-center gap-[14px] text-[11.5px] font-semibold uppercase tracking-[.26em] text-steel">
            <span aria-hidden className="h-px w-10 bg-stone" />
            {journeys.kicker}
            <span aria-hidden className="h-px w-10 bg-stone" />
          </p>
          <h2 className="mt-[14px] text-center font-serif text-[30px] font-semibold tracking-[-.01em] text-estate-700 md:text-[38px]">
            {journeys.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-center text-[15px] leading-[1.6] text-steel md:text-[16px]">
            {journeys.lead}
          </p>
        </Reveal>

        <Stagger as="ul" className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-14 md:gap-6">
          {journeys.items.map((j, i) => (
            <Reveal key={j.name} as="li" preset="fadeUpItem">
              <Link
                href={j.href}
                className="group flex h-full flex-col rounded-lg bg-white p-6 shadow-card ring-1 ring-ink/[0.04] transition-transform duration-200 hover:-translate-y-1 hover:shadow-lift focus-visible:-translate-y-1"
              >
                <span aria-hidden className="mb-5 flex items-center justify-between">
                  <span className="font-serif text-[15px] italic text-champagne-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-10 bg-champagne/40 transition-all duration-200 group-hover:w-16 group-hover:bg-champagne" />
                </span>

                <span className="font-serif text-[24px] font-semibold leading-tight text-estate-700">
                  {j.name}
                </span>
                <span className="mt-2 text-[13.5px] leading-[1.55] text-steel">{j.desc}</span>

                <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                  {j.hook.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-[6px] text-[11.5px] text-charcoal"
                    >
                      <span aria-hidden className="h-1 w-1 rounded-full bg-champagne" />
                      {h}
                    </li>
                  ))}
                </ul>

                <span className="mt-auto pt-6 text-[13px] font-semibold tracking-[.01em] text-champagne-dark">
                  Explore {j.name.toLowerCase()}{" "}
                  <span aria-hidden className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
