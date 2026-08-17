import { PageHero } from "@/components/sections/PageHero";
import { Statement } from "@/components/sections/Statement";
import { SpecList } from "@/components/sections/SpecList";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { VenueExplorer } from "@/components/conferences/VenueExplorer";
import { MoreThanVenue } from "@/components/conferences/MoreThanVenue";
import { ViewingConversion } from "@/components/conferences/ViewingConversion";
import { StickyViewingCta } from "@/components/conferences/StickyViewingCta";
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

      {/* Hero → Book a Venue Viewing (#book-viewing) · Explore the Venues (#venues) */}
      <PageHero {...p.hero} />

      {/* Immediate proof strip — confirmed facts only */}
      <SpecList items={p.proof.items} tone="dark" columns={5} />

      {/* One team / one point of contact — includes agency + direct-organiser positioning */}
      <Statement {...p.statement} />

      {/* Interactive venue explorer — one section, tabbed. The intro resolves the
          1,300 figure (estate up to 500 · SCC up to 1,300). */}
      <VenueExplorer {...p.venuesIntro} venues={p.venues} />

      {/* Mid-page viewing prompt */}
      <CtaBand {...p.midCta} />

      {/* More than a venue — accommodation + certified-halal catering */}
      <MoreThanVenue {...p.moreThanVenue} />

      {/* Objection handling */}
      <Faq {...p.faq} tone="mist" />

      {/* Final conversion — the on-page viewing request + confirmation */}
      <ViewingConversion {...p.viewing} />

      <Footer />

      {/* Mobile-only persistent viewing CTA */}
      <StickyViewingCta />
    </main>
  );
}
