"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Event Estimate / Qualification calculator (V1). A calm, editorial step between
 * exploring the venues and enquiring — it gives an INDICATIVE, "from" estimate on
 * Velmoré's confirmed 2026/27 package rates, suggests venues that could fit, then
 * hands the answers to the existing viewing form (no re-entry) via a
 * `velmore:estimate` CustomEvent — the same pattern the venue explorer uses.
 *
 * It never fabricates pricing: only event types covered by the confirmed rates get
 * a number; Wedding / Other continue to enquiry with a "we'll prepare pricing"
 * note. Everything shown is indicative and excl. VAT — never a quotation. This is
 * analytics-neutral: it fires no Meta Pixel / Lead event (a Lead is a successful
 * enquiry submission, not an estimate).
 */

// Confirmed rates (excl. VAT). Gov / NGO / SOE = R550pp; Corporate / Other and
// private events = R680pp. Private R680 is Velmoré's second-tier package.
const ORG_RATES: Record<string, number> = {
  Government: 550,
  NGO: 550,
  SOE: 550,
  Corporate: 680,
  Other: 680,
};
const PRIVATE_RATE = 680;
const ORG_OPTIONS = ["Government", "NGO", "SOE", "Corporate", "Other"];

const EVENT_TYPES = [
  "Conference",
  "Corporate event",
  "Government event / function",
  "Wedding",
  "Private function / event",
  "Birthday / celebration",
  "Matric farewell",
  "Awards / gala event",
  "Outdoor event",
  "Other",
];
// Event types that ask the organisation question (rate is R550 or R680).
const ORG_EVENT_TYPES = ["Conference", "Corporate event", "Government event / function"];
// Private / celebration types — flat R680 second-tier package (no org question).
const PRIVATE_EVENT_TYPES = [
  "Private function / event",
  "Birthday / celebration",
  "Matric farewell",
  "Awards / gala event",
  "Outdoor event",
];
// Not covered by confirmed rates → no auto estimate, continue to enquiry.
const NO_ESTIMATE_TYPES = ["Wedding", "Other"];

// Suleman Convention Centre — confirmed larger option (1,300), a short distance
// from the estate (see the venues-intro copy). Sourced from confirmed facts, not
// invented; the on-estate capacities come from the venue config passed in.
const SULEMAN = { name: "Suleman Convention Centre", cap: 1300, offsite: true };

const zar = (n: number) => `R${n.toLocaleString("en-US")}`;

type Venue = { heading: string; capacity?: string };

export function EventEstimator({
  eyebrow,
  heading,
  intro,
  venues,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  venues: readonly Venue[];
}) {
  const [eventType, setEventType] = useState("");
  const [organisationType, setOrganisationType] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");

  const needsOrg = ORG_EVENT_TYPES.includes(eventType);
  const isPrivate = PRIVATE_EVENT_TYPES.includes(eventType);
  const noEstimate = NO_ESTIMATE_TYPES.includes(eventType);

  const guestsNum = /^\d+$/.test(guests.trim()) ? parseInt(guests, 10) : NaN;
  const guestsValid = Number.isFinite(guestsNum) && guestsNum > 0;

  const rate = needsOrg ? (organisationType ? ORG_RATES[organisationType] : null) : isPrivate ? PRIVATE_RATE : null;
  const subtotal = rate != null && guestsValid ? rate * guestsNum : null;
  const showEstimate = rate != null && guestsValid;

  // Venue fit — on-estate capacities from config; Suleman for larger groups.
  const venueFit = useMemo(() => {
    if (!guestsValid) return { list: [] as { name: string; cap: number }[], overflow: false };
    const estate = venues
      .map((v) => ({ name: v.heading.trim(), cap: parseInt((v.capacity || "").replace(/[^\d]/g, ""), 10) }))
      .filter((v) => Number.isFinite(v.cap) && v.cap >= guestsNum)
      .sort((a, b) => a.cap - b.cap)
      .slice(0, 3);
    if (estate.length) return { list: estate, overflow: false };
    if (guestsNum <= SULEMAN.cap) return { list: [{ name: SULEMAN.name, cap: SULEMAN.cap }], overflow: false };
    return { list: [], overflow: true };
  }, [venues, guestsNum, guestsValid]);

  const recommendedVenue = venueFit.list.map((v) => v.name).join(", ");
  const rateLabel = rate != null ? `R${rate} pp excl. VAT` : "";
  const subtotalLabel = subtotal != null ? `${zar(subtotal)} excl. VAT` : "";

  // The form is gated behind a valid qualification result: an estimate, or a
  // no-estimate type (Wedding / Other) that still produces a "we'll prepare
  // pricing" outcome. Continue stays disabled until then, so an invalid state
  // can never reveal the form.
  const canContinue = noEstimate || showEstimate;

  function onContinue() {
    if (typeof window === "undefined" || !canContinue) return;
    // Dispatch the qualification data — the enquiry form listens, reveals itself,
    // prefills, and moves focus/scroll. The estimator does NOT scroll (the form
    // doesn't exist in the DOM until it receives this event).
    window.dispatchEvent(
      new CustomEvent("velmore:estimate", {
        detail: {
          eventType,
          organisationType: needsOrg ? organisationType : "",
          estimatedGuests: guestsValid ? String(guestsNum) : "",
          eventDate: date,
          ratePerPerson: rateLabel,
          estimatedSubtotal: subtotalLabel,
          // Raw numeric estimate (same `subtotal` source of truth as the display
          // string) — carried as a real number for GHL Opportunity Value. `null`
          // when there is no automatic estimate (e.g. Wedding / Other).
          estimatedValue: subtotal,
          recommendedVenue,
        },
      }),
    );
  }

  const field =
    "mt-1.5 w-full rounded-md border border-estate-100 bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-stone focus:border-champagne";
  const label = "block text-[12px] font-semibold uppercase tracking-[.12em] text-steel";

  return (
    <section id="estimate" className="scroll-mt-24 bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <Reveal className="mx-auto max-w-[46rem] text-center">
          {eyebrow ? (
            <p className="flex items-center justify-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-dark">
              <span aria-hidden className="h-px w-[26px] bg-champagne" />
              {eyebrow}
              <span aria-hidden className="h-px w-[26px] bg-champagne" />
            </p>
          ) : null}
          <h2 className="mx-auto mt-5 max-w-[20ch] font-serif text-[27px] font-semibold leading-[1.14] tracking-[-.01em] text-estate-700 md:text-[36px]">
            {heading}
          </h2>
          {intro ? <p className="mx-auto mt-5 max-w-[54ch] text-[15.5px] leading-[1.75] text-charcoal md:text-[16px]">{intro}</p> : null}
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-[62rem] md:mt-12">
          <div className="grid grid-cols-1 gap-x-14 gap-y-8 rounded-lg bg-white p-6 shadow-card md:grid-cols-2 md:p-9">
            {/* inputs */}
            <div>
              <div>
                <label htmlFor="est-eventType" className={label}>What are you planning?</label>
                <select
                  id="est-eventType"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className={field}
                >
                  <option value="">Choose…</option>
                  {EVENT_TYPES.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              {needsOrg ? (
                <div className="mt-5">
                  <label htmlFor="est-org" className={label}>What type of organisation are you booking for?</label>
                  <select
                    id="est-org"
                    value={organisationType}
                    onChange={(e) => setOrganisationType(e.target.value)}
                    className={field}
                  >
                    <option value="">Choose…</option>
                    {ORG_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              ) : null}

              <div className="mt-5">
                <label htmlFor="est-guests" className={label}>Estimated guests / delegates</label>
                <input
                  id="est-guests"
                  type="number"
                  min={1}
                  step={1}
                  inputMode="numeric"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className={field}
                  placeholder="e.g. 300"
                />
                {guests.trim() !== "" && !guestsValid ? (
                  <p className="mt-1.5 text-[12.5px] text-champagne-dark">Enter a whole number of guests.</p>
                ) : null}
              </div>

              <div className="mt-5">
                <label htmlFor="est-date" className={label}>Approximate event date <span className="text-stone">· optional</span></label>
                <input id="est-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className={field} />
              </div>
            </div>

            {/* result */}
            <div className="border-t border-estate-700/10 pt-8 md:border-l md:border-t-0 md:pl-14 md:pt-1">
              <EstimateResult
                eventType={eventType}
                noEstimate={noEstimate}
                needsOrg={needsOrg}
                organisationType={organisationType}
                guestsValid={guestsValid}
                guestsNum={guestsNum}
                isPrivate={isPrivate}
                showEstimate={showEstimate}
                rateLabel={rateLabel}
                subtotal={subtotal}
                venueFit={venueFit}
              />

              <button
                type="button"
                onClick={onContinue}
                disabled={!canContinue}
                data-cta="continue_enquiry"
                data-location="conferences_estimator"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-champagne px-6 py-[15px] text-[14.5px] font-semibold text-ink shadow-accent transition-[transform,background-color] duration-200 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-px hover:bg-champagne-dark active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transform-none"
              >
                Continue with my enquiry
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
              <p className="mt-3 text-center text-[12px] text-stone">No obligation · the Velmoré team prepares your final pricing.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EstimateResult({
  eventType,
  noEstimate,
  needsOrg,
  organisationType,
  guestsValid,
  guestsNum,
  isPrivate,
  showEstimate,
  rateLabel,
  subtotal,
  venueFit,
}: {
  eventType: string;
  noEstimate: boolean;
  needsOrg: boolean;
  organisationType: string;
  guestsValid: boolean;
  guestsNum: number;
  isPrivate: boolean;
  showEstimate: boolean;
  rateLabel: string;
  subtotal: number | null;
  venueFit: { list: { name: string; cap: number }[]; overflow: boolean };
}) {
  const hint = (text: string) => <p className="text-[15px] leading-[1.7] text-charcoal">{text}</p>;

  // Empty / prompting states.
  if (!eventType) return hint("Tell us a little about your event to see an indicative estimate.");
  if (noEstimate)
    return (
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[.22em] text-champagne-dark">Tailored pricing</p>
        <p className="mt-3 text-[15px] leading-[1.7] text-charcoal">
          For {eventType.toLowerCase()} enquiries, Velmoré prepares pricing based on your specific requirements. Continue with your
          enquiry and the team will come back to you the same business day.
        </p>
      </div>
    );
  if (needsOrg && !organisationType) return hint("Select the organisation type to see your indicative estimate.");
  if (!guestsValid) return hint("Add your estimated guest count to see an indicative estimate.");

  // Estimate available.
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[.22em] text-champagne-dark">
        {isPrivate ? "Indicative package estimate" : "Your indicative event estimate"}
      </p>
      <p className="mt-3 text-[14px] text-steel">
        {guestsNum.toLocaleString("en-US")} guests / delegates · {rateLabel}
      </p>
      <p className="mt-4 text-[12px] font-semibold uppercase tracking-[.24em] text-stone">From</p>
      <p className="font-serif text-[40px] font-semibold leading-[1.05] tracking-[-.01em] text-estate-700 md:text-[46px]">
        {subtotal != null ? `R${subtotal.toLocaleString("en-US")}` : ""}
        <span className="ml-2 align-middle text-[14px] font-sans font-medium tracking-normal text-steel">excl. VAT</span>
      </p>

      <p className="mt-5 text-[13.5px] leading-[1.65] text-charcoal">
        {isPrivate
          ? "Based on Velmoré's current second-tier private-event package. Alternative packages and additional options are available — final pricing will depend on your event requirements."
          : "An indicative estimate on Velmoré's current package rate. Final pricing may vary with your requirements, venue, accommodation, date and additional services."}
      </p>

      {/* venue fit */}
      <div className="mt-6 border-t border-estate-700/10 pt-5">
        {venueFit.overflow ? (
          <p className="text-[13.5px] leading-[1.65] text-charcoal">
            Your event may need a tailored venue configuration. Continue with your enquiry and the Velmoré team will advise on the
            best option.
          </p>
        ) : (
          <>
            <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-champagne-dark">Venues that may suit your event</p>
            <ul className="mt-3 space-y-2">
              {venueFit.list.map((v) => (
                <li key={v.name} className="flex items-baseline gap-3 text-[14px] text-estate-700">
                  <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-champagne" />
                  <span>
                    {v.name} <span className="text-steel">— up to {v.cap.toLocaleString("en-US")}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[12px] text-stone">Based on your estimated guest count — availability is confirmed by the team.</p>
          </>
        )}
      </div>
    </div>
  );
}
