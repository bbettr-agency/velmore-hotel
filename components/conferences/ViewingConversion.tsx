"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/config/site";
import { Reveal } from "@/components/motion/Reveal";
import { captureAttribution, getAttribution } from "@/lib/attribution";

// Qualifies the visitor's intent up front so leads can be routed in GHL. Broad
// enough for all three Meta carousel angles (estate / glass hall / outdoor).
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
const ORGANISING = ["For my organisation", "For a client / Event agency", "Other"];
const CONFERENCE_TYPE = ["Day conference", "Residential conference", "Unsure"];
const DELEGATES = ["Under 50", "50–150", "150–400", "400+", "Unsure"];
const ACCOMMODATION = ["Yes", "No", "Unsure"];

// GHL / LeadConnector inbound webhooks — the viewing-request lead destinations.
// Every submission is delivered to BOTH webhooks in parallel (two independent
// GHL workflows each receive the full lead). Separate from the contact-form
// webhook. Public inbound webhooks (not secrets); each is env-overridable.
const GHL_VIEWING_WEBHOOKS = [
  process.env.NEXT_PUBLIC_GHL_VIEWING_WEBHOOK ||
    "https://services.leadconnectorhq.com/hooks/yxytqQ4pB8M4Z4yrTIAP/webhook-trigger/75a666fe-e13d-4260-a7df-4bb50963e20c",
  process.env.NEXT_PUBLIC_GHL_VIEWING_WEBHOOK_2 ||
    "https://services.leadconnectorhq.com/hooks/yxytqQ4pB8M4Z4yrTIAP/webhook-trigger/d2279152-c84d-4b21-8d6c-58c7fe9524af",
];

// Map an exact guest count (from the estimator) to the form's existing band, so
// the prefilled band select shows a sensible value. The exact number still rides
// through to GHL via a hidden field (see estimatedGuestsExact).
function bandForGuests(n: number): string {
  if (!Number.isFinite(n) || n <= 0) return "";
  if (n < 50) return "Under 50";
  if (n <= 150) return "50–150";
  if (n <= 400) return "150–400";
  return "400+";
}

type Status = "idle" | "submitting" | "success";

/**
 * Venue-viewing conversion — the page's primary conversion, on-page (id="book-
 * viewing"), so every "Book a Venue Viewing" CTA smooth-scrolls here without
 * leaving /conferences. Deliberately light: it books a viewing, it does not fully
 * qualify the conference. Works for direct organisers AND agencies via one
 * "organising as" select. Submits through the shared HubSpot/mailto helper and
 * ends on a real viewing-specific confirmation, not a bare "thank you".
 */
export function ViewingConversion({
  eyebrow,
  heading,
  intro,
  points,
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  points?: readonly string[];
}) {
  const [status, setStatus] = useState<Status>("idle");
  // The form is gated behind the Event Estimator: it stays unmounted (not just
  // hidden) until the visitor completes the calculator and clicks "Continue",
  // which fires velmore:estimate. So it never shows below the calculator, takes
  // no vertical space, and its controls can't be tabbed into before that.
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  // Optional context: the venue explorer's CTA tells us which venue prompted the
  // viewing. Useful for the closer, never required (no added friction).
  const [venue, setVenue] = useState("");
  useEffect(() => {
    const onVenue = (e: Event) => setVenue((e as CustomEvent).detail || "");
    window.addEventListener("velmore:venue", onVenue as EventListener);
    return () => window.removeEventListener("velmore:venue", onVenue as EventListener);
  }, []);
  // Capture Meta/campaign attribution on landing (first-touch, session-persisted)
  // so it survives page interaction and rides along on the webhook submission.
  useEffect(() => {
    captureAttribution();
  }, []);

  // Prefill carried from the Event Estimator (velmore:estimate) — the visitor
  // never re-enters what they already told the calculator. eventType/date/band
  // become controlled so they can be set; the exact count + qualification data
  // ride through as hidden fields.
  const [eventTypeVal, setEventTypeVal] = useState("");
  const [eventDateVal, setEventDateVal] = useState("");
  const [delegatesVal, setDelegatesVal] = useState("");
  const [est, setEst] = useState<Record<string, string>>({
    estimatedGuests: "",
    organisationType: "",
    ratePerPerson: "",
    estimatedSubtotal: "",
    recommendedVenue: "",
    weddingVenue: "",
    roomType: "",
    numberOfRooms: "",
    numberOfNights: "",
    breakfastRequired: "",
    spaPackage: "",
    spaBookingBasis: "",
    spaQuantity: "",
  });
  // Raw numeric estimate — kept as component state (NOT a form field), so the
  // form's String() serialization can't turn it into "204000"; it reaches the
  // webhook payload as a real JSON number. null when there is no estimate.
  const [estValue, setEstValue] = useState<number | null>(null);
  useEffect(() => {
    const onEst = (e: Event) => {
      const d = ((e as CustomEvent).detail || {}) as Record<string, unknown>;
      const s = (k: string) => (typeof d[k] === "string" ? (d[k] as string) : "");
      setEst({
        estimatedGuests: s("estimatedGuests"),
        organisationType: s("organisationType"),
        ratePerPerson: s("ratePerPerson"),
        estimatedSubtotal: s("estimatedSubtotal"),
        recommendedVenue: s("recommendedVenue"),
        weddingVenue: s("weddingVenue"),
        roomType: s("roomType"),
        numberOfRooms: s("numberOfRooms"),
        numberOfNights: s("numberOfNights"),
        breakfastRequired: s("breakfastRequired"),
        spaPackage: s("spaPackage"),
        spaBookingBasis: s("spaBookingBasis"),
        spaQuantity: s("spaQuantity"),
      });
      setEstValue(typeof d.estimatedValue === "number" ? d.estimatedValue : null);
      if (s("eventType")) setEventTypeVal(s("eventType"));
      if (s("eventDate")) setEventDateVal(s("eventDate"));
      if (s("estimatedGuests")) setDelegatesVal(bandForGuests(Number(s("estimatedGuests"))));
      setRevealed(true);
    };
    window.addEventListener("velmore:estimate", onEst as EventListener);
    return () => window.removeEventListener("velmore:estimate", onEst as EventListener);
  }, []);

  // On reveal: scroll the form into view and move focus into it (accessibility),
  // respecting reduced-motion. The Reveal children fade in via the existing
  // motion system; reduced-motion users get an immediate, animation-free reveal.
  useEffect(() => {
    if (!revealed) return;
    const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    sectionRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    const t = window.setTimeout(() => headingRef.current?.focus(), reduce ? 0 : 350);
    return () => window.clearTimeout(t);
  }, [revealed]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = Object.fromEntries([...f.entries()].map(([k, val]) => [k, String(val)])) as Record<string, string>;
    setStatus("submitting");
    const guestsOut = v.estimatedGuestsExact || v.delegates;
    const message = [
      "Venue viewing request",
      v.eventType ? `Planning: ${v.eventType}` : "",
      v.organisationType ? `Organisation type: ${v.organisationType}` : "",
      v.venueOfInterest ? `Venue of interest: ${v.venueOfInterest}` : "",
      `Organising as: ${v.organisingAs}`,
      `Preferred viewing: ${v.preferredViewing}`,
      v.conferenceType ? `Conference type: ${v.conferenceType}` : "",
      v.eventDate ? `Approx. event date: ${v.eventDate}` : "",
      guestsOut ? `Estimated guests / delegates: ${guestsOut}` : "",
      v.weddingVenue ? `Wedding venue: ${v.weddingVenue}` : "",
      v.roomType ? `Room type: ${v.roomType}` : "",
      v.numberOfRooms ? `Rooms: ${v.numberOfRooms}` : "",
      v.numberOfNights ? `Nights: ${v.numberOfNights}` : "",
      v.breakfastRequired ? `Breakfast: ${v.breakfastRequired}` : "",
      v.spaPackage ? `Spa package: ${v.spaPackage}` : "",
      v.spaBookingBasis ? `Spa booking basis: ${v.spaBookingBasis}` : "",
      v.spaQuantity ? `Spa quantity: ${v.spaQuantity}` : "",
      v.ratePerPerson ? `Indicative rate: ${v.ratePerPerson}` : "",
      v.estimatedSubtotal ? `Indicative estimate: ${v.estimatedSubtotal}` : "",
      v.recommendedVenue ? `Potential venues: ${v.recommendedVenue}` : "",
      v.accommodation ? `Accommodation required: ${v.accommodation}` : "",
      "",
      v.message,
    ]
      .filter(Boolean)
      .join("\n");
    const subject = `Venue viewing request — ${v.company || `${v.firstName} ${v.lastName}`.trim()}`;
    // Structured fields (so each GHL workflow can map/notify on them) plus a
    // ready-to-read summary and first-touch Meta attribution — sent to both
    // webhooks as one identical payload.
    const payload = JSON.stringify({
      firstName: v.firstName,
      lastName: v.lastName,
      name: `${v.firstName} ${v.lastName}`.trim(),
      email: v.email,
      phone: v.phone,
      company: v.company,
      eventType: v.eventType,
      organisingAs: v.organisingAs,
      preferredViewing: v.preferredViewing,
      venueOfInterest: v.venueOfInterest,
      conferenceType: v.conferenceType,
      // Standardised shared key (was `delegates`). Prefer the estimator's exact
      // numeric count when present, else the form's band select.
      estimatedGuests: v.estimatedGuestsExact || v.delegates,
      eventDate: v.eventDate,
      accommodation: v.accommodation,
      // Event Estimator qualification fields — empty for direct form submissions
      // that skipped the calculator. Indicative only (excl. VAT), never a quote.
      organisationType: v.organisationType,
      ratePerPerson: v.ratePerPerson,
      estimatedSubtotal: v.estimatedSubtotal,
      // Raw numeric estimate for GHL Opportunity Value — a real JSON number,
      // included only when an automatic estimate exists (absent otherwise).
      ...(typeof estValue === "number" ? { estimatedValue: estValue } : {}),
      recommendedVenue: v.recommendedVenue,
      // Wedding / accommodation / spa qualification (empty unless that mode used).
      weddingVenue: v.weddingVenue,
      roomType: v.roomType,
      numberOfRooms: v.numberOfRooms,
      numberOfNights: v.numberOfNights,
      breakfastRequired: v.breakfastRequired,
      spaPackage: v.spaPackage,
      spaBookingBasis: v.spaBookingBasis,
      spaQuantity: v.spaQuantity,
      message: v.message,
      summary: message,
      subject,
      source: "Velmoré website — conference viewing request",
      page: typeof window !== "undefined" ? window.location.href : "",
      // Meta / campaign attribution (flat keys) — utm_source/medium/campaign/
      // content/term + fbclid, first-touch from the landing URL.
      ...getAttribution(),
    });
    try {
      // Deliver to BOTH GoHighLevel viewing webhooks in parallel (two independent
      // workflows). Success if at least one accepts it; only if both fail do we
      // fall back to a prefilled email so a request is never lost.
      const results = await Promise.allSettled(
        GHL_VIEWING_WEBHOOKS.map((url) =>
          fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: payload,
          }),
        ),
      );
      const anyOk = results.some((r) => r.status === "fulfilled" && r.value.ok);
      if (!anyOk) throw new Error("all GHL viewing webhooks failed");
      setStatus("success");
    } catch {
      // never lose a request — fall back to a prefilled email (conferences inbox)
      window.location.href = `mailto:${site.contact.emailConferences}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      setStatus("success");
    }
  }

  const field =
    "mt-1.5 w-full rounded-md border border-estate-100 bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-stone focus:border-champagne";
  const label = "block text-[12px] font-semibold uppercase tracking-[.12em] text-steel";
  const req = <span className="text-champagne-dark"> *</span>;

  // Not revealed yet → render nothing at all (no DOM, no space, not focusable).
  if (!revealed) return null;

  return (
    <section id="book-viewing" ref={sectionRef} className="scroll-mt-24 bg-ivory py-20 md:py-28">
      <div className="mx-auto grid max-w-container grid-cols-1 items-start gap-10 px-6 md:grid-cols-12 md:gap-16 md:px-12">
        {/* left — the invitation */}
        <Reveal className="md:col-span-5">
          {eyebrow ? (
            <p className="flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-dark">
              <span aria-hidden className="h-px w-[34px] bg-champagne" />
              {eyebrow}
            </p>
          ) : null}
          <h2 ref={headingRef} tabIndex={-1} className="mt-5 max-w-[16ch] font-serif text-[30px] font-semibold leading-[1.1] tracking-[-.01em] text-estate-700 outline-none md:text-[40px]">
            {heading}
          </h2>
          {intro ? <p className="mt-6 max-w-[46ch] text-[15.5px] leading-[1.75] text-charcoal md:text-[16px]">{intro}</p> : null}
          {points && points.length ? (
            <ul className="mt-7 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[14.5px] text-estate-700">
                  <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" />
                  {p}
                </li>
              ))}
            </ul>
          ) : null}
        </Reveal>

        {/* right — the form / confirmation */}
        <div className="md:col-span-7">
          {status === "success" ? (
            <div className="rounded-lg bg-white p-8 shadow-card md:p-10" role="status" aria-live="polite">
              <p className="font-serif text-[26px] font-semibold text-estate-700">Viewing requested — thank you.</p>
              <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.75] text-charcoal">
                Your request is with our team. We&rsquo;ll confirm a viewing time with you the same business day and share directions to
                the estate. When you arrive, one team walks you through the venues, the catering and the accommodation.
              </p>
              <p className="mt-4 text-[15px] leading-[1.75] text-charcoal">
                Prefer to talk sooner? Email us at{" "}
                <a href={`mailto:${site.contact.emailConferences}`} className="font-semibold text-champagne-dark underline-offset-4 hover:underline">
                  {site.contact.emailConferences}
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-lg bg-white p-6 shadow-card md:p-8">
              <input type="hidden" name="venueOfInterest" value={venue} />
              {/* Qualification data carried from the Event Estimator (if used) */}
              <input type="hidden" name="estimatedGuestsExact" value={est.estimatedGuests} />
              <input type="hidden" name="organisationType" value={est.organisationType} />
              <input type="hidden" name="ratePerPerson" value={est.ratePerPerson} />
              <input type="hidden" name="estimatedSubtotal" value={est.estimatedSubtotal} />
              <input type="hidden" name="recommendedVenue" value={est.recommendedVenue} />
              <input type="hidden" name="weddingVenue" value={est.weddingVenue} />
              <input type="hidden" name="roomType" value={est.roomType} />
              <input type="hidden" name="numberOfRooms" value={est.numberOfRooms} />
              <input type="hidden" name="numberOfNights" value={est.numberOfNights} />
              <input type="hidden" name="breakfastRequired" value={est.breakfastRequired} />
              <input type="hidden" name="spaPackage" value={est.spaPackage} />
              <input type="hidden" name="spaBookingBasis" value={est.spaBookingBasis} />
              <input type="hidden" name="spaQuantity" value={est.spaQuantity} />
              {venue ? (
                <p className="mb-5 flex items-center gap-2 rounded-md bg-mist px-3.5 py-2.5 text-[13px] text-estate-700">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-champagne" />
                  <span><span className="font-semibold">Viewing:</span> {venue}</span>
                </p>
              ) : null}
              {est.estimatedSubtotal ? (
                <p className="mb-5 flex items-center gap-2 rounded-md bg-mist px-3.5 py-2.5 text-[13px] text-estate-700">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-champagne" />
                  <span>
                    <span className="font-semibold">Your estimate:</span> from {est.estimatedSubtotal}
                    {est.estimatedGuests ? ` · ${est.estimatedGuests} guests` : ""}
                  </span>
                </p>
              ) : null}
              <div className="mb-5">
                <label htmlFor="v-eventType" className={label}>What are you planning?{req}</label>
                <select id="v-eventType" name="eventType" required value={eventTypeVal} onChange={(e) => setEventTypeVal(e.target.value)} className={field}>
                  <option value="" disabled>Choose…</option>
                  {EVENT_TYPES.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="v-firstName" className={label}>First name{req}</label>
                  <input id="v-firstName" name="firstName" required autoComplete="given-name" className={field} placeholder="First name" />
                </div>
                <div>
                  <label htmlFor="v-lastName" className={label}>Last name{req}</label>
                  <input id="v-lastName" name="lastName" required autoComplete="family-name" className={field} placeholder="Last name" />
                </div>
                <div>
                  <label htmlFor="v-email" className={label}>Email{req}</label>
                  <input id="v-email" name="email" type="email" required autoComplete="email" className={field} placeholder="you@email.com" />
                </div>
                <div>
                  <label htmlFor="v-phone" className={label}>Phone{req}</label>
                  <input id="v-phone" name="phone" type="tel" required autoComplete="tel" className={field} placeholder="Phone number" />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="v-company" className={label}>Company / Organisation / Agency{req}</label>
                <input id="v-company" name="company" required autoComplete="organization" className={field} placeholder="Who you represent" />
              </div>

              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="v-organisingAs" className={label}>You&rsquo;re organising this as{req}</label>
                  <select id="v-organisingAs" name="organisingAs" required defaultValue="" className={field}>
                    <option value="" disabled>Choose…</option>
                    {ORGANISING.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="v-preferredViewing" className={label}>Preferred viewing date / window{req}</label>
                  <input id="v-preferredViewing" name="preferredViewing" required className={field} placeholder="e.g. weekday mornings, or a date" />
                </div>
              </div>

              <p className="mt-7 text-[11px] font-semibold uppercase tracking-[.16em] text-stone">Optional — helps us prepare</p>
              <div className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="v-conferenceType" className={label}>Conference type</label>
                  <select id="v-conferenceType" name="conferenceType" defaultValue="" className={field}>
                    <option value="">Choose…</option>
                    {CONFERENCE_TYPE.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="v-delegates" className={label}>Estimated guests / delegates</label>
                  <select id="v-delegates" name="delegates" value={delegatesVal} onChange={(e) => setDelegatesVal(e.target.value)} className={field}>
                    <option value="">Choose…</option>
                    {DELEGATES.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="v-eventDate" className={label}>Approximate event date</label>
                  <input id="v-eventDate" name="eventDate" type="date" value={eventDateVal} onChange={(e) => setEventDateVal(e.target.value)} className={field} />
                </div>
                <div>
                  <label htmlFor="v-accommodation" className={label}>Accommodation required</label>
                  <select id="v-accommodation" name="accommodation" defaultValue="" className={field}>
                    <option value="">Choose…</option>
                    {ACCOMMODATION.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="v-message" className={label}>Message</label>
                <textarea id="v-message" name="message" rows={3} className={field} placeholder="Anything that helps us prepare for your viewing" />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  data-cta="viewing_submit"
                  data-location="conferences_viewing"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-champagne px-6 py-[15px] text-[14.5px] font-semibold text-ink shadow-accent transition-colors duration-200 hover:bg-champagne-dark disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Request my viewing →"}
                </button>
                <p className="text-[13px] text-steel">No obligation · we reply the same business day.</p>
              </div>
              <p className="mt-4 text-[12px] leading-[1.6] text-stone">Your details are only used to arrange your viewing.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
