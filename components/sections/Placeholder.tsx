import Image from "next/image";
import type { Img } from "@/config/images";

/**
 * Shared image renderer for sections. When a real photo (`image`) is supplied it
 * renders an optimised next/image (fill + object-cover + responsive sizes, AVIF/
 * WebP, lazy unless `priority`). Otherwise it falls back to the labelled CSS
 * placeholder hue for the vertical (honest "photography required" state until the
 * shoot). The caller supplies the positioned `relative overflow-hidden` box.
 */
const BASE = {
  hero: "hero-sky",
  conferences: "conf-image",
  weddings: "wed-image",
  accommodation: "stay-image",
  gardens: "stay-detail",
  spa: "spa-image",
  dining: "dine-image",
  estate: "cta-image",
} as const;

export type PhVariant = keyof typeof BASE;

export function Placeholder({
  variant,
  note,
  image,
  sizes = "100vw",
  priority = false,
  noteClass,
}: {
  variant: PhVariant;
  note?: string;
  image?: Img;
  sizes?: string;
  priority?: boolean;
  noteClass?: string;
}) {
  if (image) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    );
  }
  return (
    <>
      <div aria-hidden className={`absolute inset-0 ${BASE[variant]}`} />
      <div aria-hidden className="absolute inset-0 gal-vignette" />
      {note ? (
        <span
          className={`absolute left-4 top-4 z-10 rounded-full bg-black/35 px-3 py-[5px] text-[9.5px] uppercase tracking-[.12em] text-ivory/75 backdrop-blur-[2px] ${noteClass ?? ""}`}
        >
          {note}
        </span>
      ) : null}
    </>
  );
}
