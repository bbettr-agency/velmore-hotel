/**
 * Quiet proof grid — serif label + uppercase note per item. A calm, low-emphasis
 * way to present confirmed facts (capacities, counts, features) without a boxy
 * stat wall. Only confirmed facts belong here.
 */
export function SpecList({
  eyebrow,
  heading,
  items,
  tone = "ivory",
  columns = 4,
}: {
  eyebrow?: string;
  heading?: string;
  items: readonly { label: string; note: string }[];
  tone?: "ivory" | "mist" | "dark";
  columns?: 2 | 3 | 4;
}) {
  const dark = tone === "dark";
  const bg = dark ? "bg-estate-900" : tone === "mist" ? "bg-mist" : "bg-ivory";
  const cols = columns === 2 ? "sm:grid-cols-2" : columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4";
  return (
    <section className={`${bg} py-20 md:py-24`}>
      <div className="mx-auto max-w-container px-6 md:px-12">
        {eyebrow || heading ? (
          <div className="mx-auto mb-12 max-w-[46rem] text-center md:mb-14">
            {eyebrow ? (
              <p className="flex items-center justify-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-dark">
                <span aria-hidden className="h-px w-[26px] bg-champagne" />
                {eyebrow}
                <span aria-hidden className="h-px w-[26px] bg-champagne" />
              </p>
            ) : null}
            {heading ? (
              <h2 className={`mx-auto mt-5 max-w-[22ch] font-serif text-[26px] font-semibold leading-[1.14] md:text-[34px] ${dark ? "text-white" : "text-estate-700"}`}>
                {heading}
              </h2>
            ) : null}
          </div>
        ) : null}
        <ul className={`mx-auto grid max-w-[62rem] grid-cols-1 gap-10 text-center ${cols}`}>
          {items.map((it) => (
            <li key={it.label}>
              <p className={`font-serif text-[24px] font-semibold md:text-[26px] ${dark ? "text-champagne-light" : "text-estate-700"}`}>
                {it.label}
              </p>
              <p className={`mt-1 text-[12.5px] uppercase tracking-[.16em] ${dark ? "text-ivory/55" : "text-steel"}`}>{it.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
