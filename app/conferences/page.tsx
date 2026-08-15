import { PageHero } from "@/components/sections/PageHero";
import { Statement } from "@/components/sections/Statement";
import { FeatureSplit } from "@/components/sections/FeatureSplit";
import { SpecList } from "@/components/sections/SpecList";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/site/Footer";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageJsonLd } from "@/lib/jsonld";
import { pages } from "@/config/pages";

export const metadata = pageMetadata("conferences");

export default function ConferencesPage() {
  const p = pages.conferences;
  return (
    <main id="main">
      <JsonLd data={pageJsonLd("conferences")} />
      <PageHero {...p.hero} />
      <Statement {...p.statement} />
      <FeatureSplit {...p.scaleSplit} imageSide="left" tone="ivory" />
      <SpecList {...p.numbers} tone="mist" columns={4} />

      {/* Explore the individual venues — photography-led, alternating rhythm */}
      <Statement {...p.venuesIntro} />
      {p.venues.map((v, i) => (
        <FeatureSplit
          key={v.heading}
          {...v}
          imageSide={i % 2 === 0 ? "left" : "right"}
          tone={i % 2 === 0 ? "ivory" : "mist"}
        />
      ))}

      <FeatureSplit {...p.residentialSplit} imageSide="right" tone="ivory" />
      <Faq {...p.faq} tone="mist" />
      <CtaBand {...p.cta} />
      <Footer />
    </main>
  );
}
