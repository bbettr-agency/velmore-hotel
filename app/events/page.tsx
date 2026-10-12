import { PageHero } from "@/components/sections/PageHero";
import { Statement } from "@/components/sections/Statement";
import { FeatureSplit } from "@/components/sections/FeatureSplit";
import { ImageBand } from "@/components/sections/ImageBand";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { EnquirySection } from "@/components/site/EnquirySection";
import { Footer } from "@/components/site/Footer";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageJsonLd } from "@/lib/jsonld";
import { pages } from "@/config/pages";

export const metadata = pageMetadata("events");

export default function EventsPage() {
  const p = pages.events;
  return (
    <main id="main">
      <JsonLd data={pageJsonLd("events")} />
      <PageHero {...p.hero} />
      <Statement {...p.statement} />
      <FeatureSplit {...p.occasionsSplit} imageSide="left" tone="ivory" />
      <FeatureSplit {...p.scaleSplit} imageSide="right" tone="mist" />
      <ImageBand {...p.band} />
      <Faq {...p.faq} tone="ivory" />
      <CtaBand {...p.cta} />
      <EnquirySection heading="Let’s Plan Something Memorable" ctaLocation="events_enquiry" />
      <Footer />
    </main>
  );
}
