import { PageHero } from "@/components/sections/PageHero";
import { Statement } from "@/components/sections/Statement";
import { FeatureSplit } from "@/components/sections/FeatureSplit";
import { ImageBand } from "@/components/sections/ImageBand";
import { SpecList } from "@/components/sections/SpecList";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/site/Footer";
import { pageMetadata } from "@/lib/metadata";
import { pages } from "@/config/pages";

export const metadata = pageMetadata("weddings");

export default function WeddingsPage() {
  const p = pages.weddings;
  return (
    <main id="main">
      <PageHero {...p.hero} />
      <Statement {...p.statement} />
      <FeatureSplit {...p.ceremonySplit} imageSide="right" tone="ivory" />
      <FeatureSplit {...p.receptionSplit} imageSide="left" tone="mist" />
      <ImageBand {...p.gardensBand} />
      <FeatureSplit {...p.heldSplit} imageSide="right" tone="ivory" />
      <SpecList {...p.numbers} tone="mist" columns={4} />
      <Faq {...p.faq} tone="ivory" />
      <CtaBand {...p.cta} />
      <Footer />
    </main>
  );
}
