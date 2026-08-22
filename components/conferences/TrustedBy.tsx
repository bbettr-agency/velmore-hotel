import Image from "next/image";
import type { Img } from "@/config/images";

/**
 * "Trusted by" — a restrained credibility strip directly below the hero. A single
 * trust line over one continuous, seamless logo marquee (no cards, boxes, borders
 * or shadows; logos sit at a consistent height on the ivory ground). The track
 * holds two identical groups and translates by exactly -50%, so the loop is
 * seamless with no jump on reset, and it keeps moving on hover. Under
 * prefers-reduced-motion the animation stops and the strip becomes horizontally
 * scrollable instead — motion is never forced.
 */
export function TrustedBy({ line, logos }: { line: string; logos: readonly Img[] }) {
  const group = (hidden = false) => (
    <ul className="vm-marquee__group" aria-hidden={hidden || undefined}>
      {logos.map((logo, idx) => (
        <li key={`${hidden ? "b" : "a"}-${idx}`} className="vm-marquee__item">
          <Image
            src={logo.src}
            alt={hidden ? "" : logo.alt}
            width={220}
            height={80}
            sizes="220px"
            className="vm-marquee__logo"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Organisations we have hosted" className="border-y border-ink/[.07] bg-ivory">
      <div className="mx-auto max-w-container px-6 py-11 md:px-12 md:py-14">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[.3em] text-champagne-dark">
          {line}
        </p>
        <div className="vm-marquee mt-8 md:mt-9">
          <div className="vm-marquee__track">
            {group(false)}
            {group(true)}
          </div>
        </div>
      </div>
    </section>
  );
}
