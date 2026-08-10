import { Reveal } from "@/components/motion/Reveal";

/**
 * Centered editorial statement — a quiet, confident beat between image-led
 * sections (North Star / Confident Host voice). Copy only, generous whitespace.
 */
export function Statement({
  eyebrow,
  heading,
  lead,
  tone = "ivory",
}: {
  eyebrow?: string;
  heading: string;
  lead?: string;
  tone?: "ivory" | "mist" | "dark";
}) {
  const dark = tone === "dark";
  const bg = dark ? "bg-estate-900" : tone === "mist" ? "bg-mist" : "bg-ivory";
  return (
    <section className={`${bg} py-24 md:py-32`}>
      <div className="mx-auto max-w-container px-6 md:px-12">
        <Reveal className="mx-auto max-w-[46rem] text-center">
          {eyebrow ? (
            <p className="flex items-center justify-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-dark">
              <span aria-hidden className="h-px w-[26px] bg-champagne" />
              {eyebrow}
              <span aria-hidden className="h-px w-[26px] bg-champagne" />
            </p>
          ) : null}
          <h2
            className={`mx-auto mt-6 max-w-[22ch] font-serif text-[27px] font-semibold leading-[1.14] tracking-[-.01em] md:text-[38px] ${dark ? "text-white" : "text-estate-700"}`}
          >
            {heading}
          </h2>
          {lead ? (
            <p className={`mx-auto mt-6 max-w-[54ch] text-[16px] leading-[1.8] md:text-[17px] ${dark ? "text-ivory/75" : "text-charcoal"}`}>
              {lead}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
