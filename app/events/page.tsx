import { PageHero } from "@/components/sections/PageHero";
import { Statement } from "@/components/sections/Statement";
import { FeatureSplit } from "@/components/sections/FeatureSplit";
import { ImageBand } from "@/components/sections/ImageBand";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/site/Footer";
import { pageMetadata } from "@/lib/metadata";
import { pages } from "@/config/pages";

export const metadata = pageMetadata("events");

export default function EventsPage() {
  const p = pages.events;
  return (
    <main id="main">
      <PageHero {...p.hero} />
      <Statement {...p.statement} />
      <FeatureSplit {...p.occasionsSplit} imageSide="left" tone="ivory" />
      <FeatureSplit {...p.scaleSplit} imageSide="right" tone="mist" />
      <ImageBand {...p.band} />
      <Faq {...p.faq} tone="ivory" />
      <CtaBand {...p.cta} />
      <Footer />
    </main>
  );
}
