import { site } from "@/config/site";

type Tile = (typeof site.galleryPreview.tiles)[number];

function GalleryTile({ tile, className }: { tile: Tile; className?: string }) {
  return (
    <figure className={`group relative overflow-hidden rounded-lg shadow-card ${className ?? ""}`}>
      {/* placeholder image (reuses a labelled placeholder hue) — slow hover zoom */}
      <div
        aria-hidden
        className={`absolute inset-0 ${tile.base} scale-[1.02] transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-[1.02]`}
      />
      <div aria-hidden className="absolute inset-0 gal-vignette" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 gal-chipscrim" />
      <figcaption className="absolute bottom-4 left-4 flex items-baseline gap-2">
        <span className="font-serif text-[15px] font-semibold text-ivory md:text-[16px]">{tile.label}</span>
        <span className="text-[9.5px] uppercase tracking-[.14em] text-ivory/55">· placeholder</span>
      </figcaption>
    </figure>
  );
}

/**
 * Homepage Gallery showcase — the emotional PEAK. Not a grid: an editorial mosaic
 * (a signature feature + a tall accent, then a trio) that previews the breadth of
 * the estate and invites the visitor to keep exploring. Image-FIRST — the tiles do
 * the work; copy is minimal. Light ground, a deliberate shift after the two dark
 * sections (Spa, Dining). Every tile is a clearly-labelled placeholder until the
 * curated gallery is shot (docs/17 §3.10). Config-driven.
 */
export function GalleryShowcase() {
  const g = site.galleryPreview;
  const feature = g.tiles.find((t) => t.size === "feature")!;
  const tall = g.tiles.find((t) => t.size === "tall")!;
  const wide = g.tiles.filter((t) => t.size === "wide");

  return (
    <section aria-labelledby="gallery-heading" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-container px-6 md:px-12">
        {/* minimal editorial header */}
        <div className="reveal reveal-1 mx-auto max-w-[46rem] text-center">
          <p className="flex items-center justify-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-dark">
            <span aria-hidden className="h-px w-[26px] bg-champagne" />
            {g.eyebrow}
            <span aria-hidden className="h-px w-[26px] bg-champagne" />
          </p>
          <h2
            id="gallery-heading"
            className="mx-auto mt-6 max-w-[18ch] font-serif text-[30px] font-semibold leading-[1.12] tracking-[-.01em] text-estate-700 md:text-[40px]"
          >
            {g.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-[54ch] text-[14px] leading-[1.7] text-steel md:text-[14.5px]">
            {g.lead}
          </p>
        </div>

        {/* editorial mosaic — feature + tall accent */}
        <div className="reveal reveal-2 mt-14 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-12 md:gap-5">
          <GalleryTile tile={feature} className="aspect-[4/3] md:col-span-7 md:aspect-[16/11]" />
          <GalleryTile tile={tall} className="aspect-[4/3] md:col-span-5 md:aspect-auto" />
        </div>

        {/* the trio */}
        <div className="reveal reveal-3 mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-5 md:gap-5">
          {wide.map((t) => (
            <GalleryTile key={t.label} tile={t} className="aspect-[4/3]" />
          ))}
        </div>

        {/* one clear invitation to keep exploring */}
        <div className="mt-12 flex justify-center md:mt-14">
          <a
            href={g.cta.href}
            data-cta="explore_gallery"
            data-location="home_gallery"
            className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-estate-700 underline-offset-4 hover:text-champagne-dark hover:underline"
          >
            {g.cta.label}
            <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
