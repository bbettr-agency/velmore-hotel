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

export const metadata = pageMetadata("accommodation");

export default function AccommodationPage() {
  const p = pages.accommodation;
  return (
    <main id="main">
      <JsonLd data={pageJsonLd("accommodation")} />
      <PageHero {...p.hero} />
      <Statement {...p.statement} />
      {/* the four room types — photography-led, alternating sides */}
      {p.rooms.map((room, i) => (
        <FeatureSplit key={room.eyebrow} {...room} imageSide={i % 2 === 0 ? "left" : "right"} tone={i % 2 === 0 ? "ivory" : "mist"} />
      ))}
      <FeatureSplit {...p.estateSplit} imageSide="left" tone="ivory" />
      <SpecList {...p.numbers} tone="mist" columns={4} />
      <Faq {...p.faq} tone="ivory" />
      <CtaBand {...p.cta} />
      <Footer />
    </main>
  );
}
