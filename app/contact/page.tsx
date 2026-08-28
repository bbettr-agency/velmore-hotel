import { PageHero } from "@/components/sections/PageHero";
import { Footer } from "@/components/site/Footer";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { EventEstimator } from "@/components/conferences/EventEstimator";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageJsonLd } from "@/lib/jsonld";
import { pages } from "@/config/pages";

export const metadata = pageMetadata("contact");

export default function ContactPage() {
  const p = pages.contact;
  return (
    <main id="main">
      <JsonLd data={pageJsonLd("contact")} />
      <PageHero {...p.hero} />

      {/* Shared qualification calculator — the enquiry form is gated behind it */}
      <EventEstimator {...p.estimator} venues={pages.conferences.venues} ctaLocation="contact_estimator" />

      {/* Enquiry form — revealed only after the calculator's Continue */}
      <EnquiryForm eyebrow={p.form.eyebrow} heading={p.form.heading} intro={p.form.intro} steps={p.form.steps} />

      <Footer />
    </main>
  );
}
