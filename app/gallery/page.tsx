import { PageHero } from "@/components/sections/PageHero";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/site/Footer";
import { pageMetadata } from "@/lib/metadata";
import { pages } from "@/config/pages";

export const metadata = pageMetadata("gallery");

export default function GalleryPage() {
  const p = pages.gallery;
  return (
    <main id="main">
      <PageHero {...p.hero} />
      <GalleryGrid tiles={p.tiles} note={p.gridNote} tone="ivory" />
      <CtaBand {...p.cta} />
      <Footer />
    </main>
  );
}
