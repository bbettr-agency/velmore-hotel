import { PageHero } from "@/components/sections/PageHero";
import { Statement } from "@/components/sections/Statement";
import { ImageBand } from "@/components/sections/ImageBand";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { EnquirySection } from "@/components/site/EnquirySection";
import { Footer } from "@/components/site/Footer";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageJsonLd } from "@/lib/jsonld";
import { pages } from "@/config/pages";

export const metadata = pageMetadata("spa");

export default function SpaPage() {
  const p = pages.spa;
  return (
    <main id="main">
      <JsonLd data={pageJsonLd("spa")} />
      <PageHero {...p.hero} />
      <Statement {...p.statement} />
      <ImageBand {...p.band} />
      <GalleryGrid {...p.gallery} tone="ivory" />
      <Faq {...p.faq} tone="mist" />
      <CtaBand {...p.cta} />
      <EnquirySection heading="Your Moment of Relaxation Starts Here" initialEventType="Spa" ctaLocation="spa_enquiry" />
      <Footer />
    </main>
  );
}
