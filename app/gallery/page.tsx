import { PageHero } from "@/components/sections/PageHero";
import { GalleryExperience } from "@/components/gallery/GalleryExperience";
import { CtaBand } from "@/components/sections/CtaBand";
import { EnquirySection } from "@/components/site/EnquirySection";
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
      <EnquirySection heading="Begin Your Enquiry" ctaLocation="gallery_enquiry" />
      <Footer />
    </main>
  );
}
