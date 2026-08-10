/**
 * Shared photography-placeholder renderer for inner-page sections. Reuses the
 * labelled placeholder hues built for the homepage (one base gradient per
 * vertical) so imagery reads consistently until the real shoot (docs/17). The
 * caller supplies the positioned `relative overflow-hidden` box; this fills it.
 */
const BASE = {
  hero: "hero-sky", // cool dusk glass hall (signature)
  conferences: "conf-image", // warm hall interior
  weddings: "wed-image", // golden-hour garden / chapel
  accommodation: "stay-image", // light, airy room
  gardens: "stay-detail", // estate green
  spa: "spa-image", // warm candlelit, soft-focus
  dining: "dine-image", // warm, appetising
  estate: "cta-image", // warm golden-hour estate
} as const;

export type PhVariant = keyof typeof BASE;

export function Placeholder({
  variant,
  note,
  noteClass,
}: {
  variant: PhVariant;
  note?: string;
  noteClass?: string;
}) {
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
