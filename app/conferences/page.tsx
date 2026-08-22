import { PageHero } from "@/components/sections/PageHero";
import { Statement } from "@/components/sections/Statement";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { TrustedBy } from "@/components/conferences/TrustedBy";
import { VenueExplorer } from "@/components/conferences/VenueExplorer";
import { PastEvents } from "@/components/conferences/PastEvents";
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

      {/* Trusted by — credibility strip: organisations the estate has hosted */}
      <TrustedBy {...p.trustedBy} />

      {/* The venues — interactive explorer, directly below the hero (D'Charmont default) */}
      <VenueExplorer {...p.venuesIntro} venues={p.venues} />

      {/* Real occasions — photography-led event gallery (first image = D'Charmont) */}
      <PastEvents {...p.pastEvents} />

      {/* Come and see it — emotional viewing CTA break */}
      <CtaBand {...p.midCta} />

      {/* More than a venue — accommodation + certified-halal catering */}
      <MoreThanVenue {...p.moreThanVenue} />

      {/* One team, one invoice — operational confidence + agency/direct-organiser positioning */}
      <Statement {...p.statement} />

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
