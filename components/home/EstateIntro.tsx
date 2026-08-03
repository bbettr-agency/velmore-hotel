import Link from "next/link";
import { site } from "@/config/site";

function Check() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/**
 * Estate Introduction / Capability — a dark-spotlight editorial section (the page's
 * centre of gravity, per the Design Language). Tells the "one estate, one team, one
 * invoice" story and proves the scale — as narrative + stat pairs, not a feature list.
 * Config-driven.
 */
export function EstateIntro() {
  const { estate } = site;
  return (
    <section
      aria-labelledby="estate-heading"
      className="relative overflow-hidden bg-estate-900 py-24 text-ivory md:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(90% 60% at 88% 0%, rgba(196,150,62,.16), rgba(196,150,62,0) 55%)" }}
      />
      <div className="mx-auto max-w-container px-6 md:px-12">
        <p className="flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.30em] text-champagne-light">
          <span aria-hidden className="h-px w-[34px] bg-champagne" />
          {estate.eyebrow}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-12">
          <h2
            id="estate-heading"
            className="font-serif text-[34px] font-semibold leading-[1.08] tracking-[-.015em] text-white md:col-span-7 md:text-[48px]"
          >
            {estate.heading}
          </h2>
          <div className="space-y-5 md:col-span-5 md:pt-2">
            {estate.body.map((p, i) => (
              <p key={i} className="max-w-[54ch] text-[16px] leading-[1.7] text-ivory/80 md:text-[17px]">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* stat band — proof, delivered as numerals, not cards */}
        <dl className="mt-16 grid grid-cols-2 gap-y-10 border-t border-ivory/15 pt-12 md:mt-20 md:grid-cols-4 md:gap-y-0">
          {estate.stats.map((s, i) => (
            <div key={s.unit} className={i > 0 ? "px-2 md:border-l md:border-ivory/15 md:px-8" : "px-2 md:pr-8"}>
              <dd className="font-serif text-[46px] font-semibold leading-none text-champagne-light md:text-[58px]">
                {s.value}
              </dd>
              <dt className="mt-3 text-[12px] font-semibold uppercase tracking-[.18em] text-ivory/75">{s.unit}</dt>
              <p className="mt-2 max-w-[22ch] text-[12.5px] leading-[1.5] text-ivory/65">{s.note}</p>
            </div>
          ))}
        </dl>

        {/* the certified-halal welcome + what's held here */}
        <div className="mt-14 flex flex-col items-start gap-8 border-t border-ivory/15 pt-12 md:mt-16 md:flex-row md:items-center md:justify-between">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px] text-ivory/90 md:text-[16px]">
            <span className="inline-flex items-center gap-[7px] rounded-full border border-champagne px-[13px] py-[5px] text-[11.5px] font-semibold uppercase tracking-[.04em] text-champagne-light">
              <Check /> Certified Halal
            </span>
            {estate.halal}
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px]">
            <span className="uppercase tracking-[.18em] text-ivory/50">Held here</span>
            {estate.holds.map((h) => (
              <Link
                key={h.label}
                href={h.href}
                className="text-ivory/85 underline-offset-4 transition-colors hover:text-champagne-light hover:underline"
              >
                {h.label}
              </Link>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
