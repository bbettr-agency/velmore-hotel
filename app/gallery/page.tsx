import { PageHero } from "@/components/sections/PageHero";
import { GalleryExperience } from "@/components/gallery/GalleryExperience";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/site/Footer";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageJsonLd } from "@/lib/jsonld";
import { pages } from "@/config/pages";

export const metadata = pageMetadata("gallery");

export default function GalleryPage() {
  const p = pages.gallery;
  return (
    <main id="main">
      <JsonLd data={pageJsonLd("gallery")} />
      <PageHero {...p.hero} />
      <GalleryExperience />
      <CtaBand {...p.cta} />
      <Footer />
    </main>
  );
}
