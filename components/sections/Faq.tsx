import { Reveal, Stagger } from "@/components/motion/Reveal";

/**
 * Objection-answering FAQ — native <details> accordions (accessible, no-JS,
 * keyboard-operable). Each item answers one real question in the client's voice.
 * Confirmed facts only; anything unconfirmed stays a labelled placeholder answer.
 */
export function Faq({
  eyebrow,
  heading,
  items,
  tone = "mist",
}: {
  eyebrow?: string;
  heading: string;
  items: readonly { q: string; a: string }[];
  tone?: "ivory" | "mist";
}) {
  const bg = tone === "mist" ? "bg-mist" : "bg-ivory";
  return (
    <section className={`${bg} py-24 md:py-28`}>
      <div className="mx-auto max-w-[54rem] px-6 md:px-12">
        <Reveal className="text-center">
          {eyebrow ? (
            <p className="flex items-center justify-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-dark">
              <span aria-hidden className="h-px w-[26px] bg-champagne" />
              {eyebrow}
              <span aria-hidden className="h-px w-[26px] bg-champagne" />
            </p>
          ) : null}
          <h2 className="mx-auto mt-5 max-w-[22ch] font-serif text-[26px] font-semibold leading-[1.14] text-estate-700 md:text-[34px]">
            {heading}
          </h2>
        </Reveal>

        <Stagger className="mt-12 divide-y divide-estate-100 border-y border-estate-100">
          {items.map((it) => (
            <Reveal key={it.q} as="details" preset="fadeIn" className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[16px] font-semibold text-estate-700 md:text-[17px]">
                {it.q}
                <span
                  aria-hidden
                  className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-estate-100 text-champagne-dark transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-[62ch] text-[15px] leading-[1.7] text-charcoal">{it.a}</p>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
