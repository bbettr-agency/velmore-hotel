import { EventEstimator } from "@/components/conferences/EventEstimator";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { pages } from "@/config/pages";

/**
 * Shared site-wide enquiry section — the SAME calculator + gated enquiry form the
 * Contact page uses, wrapped for reuse on marketing pages (home, weddings, stay,
 * spa, events, dining, about, gallery). There is one implementation: any future
 * change to EventEstimator / EnquiryForm applies everywhere automatically.
 *
 * The visible entry point is the EventEstimator (id="estimate"); the EnquiryForm
 * stays gated/unmounted until the calculator's Continue fires `velmore:estimate`,
 * then reveals (id="enquire"). Submission, webhook (Contact webhook), attribution
 * (landing_page first-touch + per-page `page` + form_name=contact_enquiry) and
 * success/error handling are inherited unchanged from EnquiryForm.
 *
 * `initialEventType` preselects the calculator for the page's vertical (e.g.
 * /weddings → "Wedding"); it must be a canonical eventType value and never
 * bypasses the calculator. Empty = the visitor chooses.
 */

// Shared defaults, lifted from the Contact page config so copy stays consistent.
const ESTIMATOR_EYEBROW = "Begin your enquiry";
const ESTIMATOR_INTRO =
  "A quick, indicative guide to your enquiry — tell us what you're planning and we'll estimate it on Velmoré's current rates. Final pricing depends on your requirements.";
const FORM = {
  eyebrow: "Enquire",
  heading: "Tell us about your occasion.",
  intro:
    "Whether it's a wedding, a conference or a celebration, one team will come back to you the same business day — with real answers, not a call-centre.",
  steps: ["We reply the same business day", "We answer your questions directly", "We invite you to view the estate"],
} as const;

export function EnquirySection({
  heading,
  intro = ESTIMATOR_INTRO,
  eyebrow = ESTIMATOR_EYEBROW,
  initialEventType = "",
  ctaLocation,
}: {
  heading: string;
  intro?: string;
  eyebrow?: string;
  initialEventType?: string;
  ctaLocation: string;
}) {
  return (
    <>
      <EventEstimator
        eyebrow={eyebrow}
        heading={heading}
        intro={intro}
        venues={pages.conferences.venues}
        ctaLocation={ctaLocation}
        initialEventType={initialEventType}
      />
      <EnquiryForm eyebrow={FORM.eyebrow} heading={FORM.heading} intro={FORM.intro} steps={FORM.steps} />
    </>
  );
}
