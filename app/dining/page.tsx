import { PageHero } from "@/components/sections/PageHero";
import { Statement } from "@/components/sections/Statement";
import { FeatureSplit } from "@/components/sections/FeatureSplit";
import { ImageBand } from "@/components/sections/ImageBand";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/site/Footer";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageJsonLd } from "@/lib/jsonld";
import { pages } from "@/config/pages";

export const metadata = pageMetadata("dining");

export default function DiningPage() {
  const p = pages.dining;
  return (
    <main id="main">
      <JsonLd data={pageJsonLd("dining")} />
      <PageHero {...p.hero} />
      <Statement {...p.statement} />
      <FeatureSplit {...p.tableSplit} imageSide="left" tone="ivory" />
      <ImageBand {...p.halalBand} />
      <Faq {...p.faq} tone="mist" />
      <CtaBand {...p.cta} />
      <Footer />
    </main>
  );
}
