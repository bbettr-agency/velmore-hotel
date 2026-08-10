import { PageHero } from "@/components/sections/PageHero";
import { Statement } from "@/components/sections/Statement";
import { FeatureSplit } from "@/components/sections/FeatureSplit";
import { SpecList } from "@/components/sections/SpecList";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/site/Footer";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageJsonLd } from "@/lib/jsonld";
import { pages } from "@/config/pages";

export const metadata = pageMetadata("about");

export default function AboutPage() {
  const p = pages.about;
  return (
    <main id="main">
      <JsonLd data={pageJsonLd("about")} />
      <PageHero {...p.hero} />
      <Statement {...p.statement} />
      <FeatureSplit {...p.estateSplit} imageSide="left" tone="ivory" />
      <FeatureSplit {...p.teamSplit} imageSide="right" tone="mist" />
      <FeatureSplit {...p.halalSplit} imageSide="left" tone="ivory" />
      <SpecList {...p.numbers} tone="dark" columns={4} />
      <CtaBand {...p.cta} />
      <Footer />
    </main>
  );
}
