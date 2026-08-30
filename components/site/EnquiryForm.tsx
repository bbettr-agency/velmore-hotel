"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/config/site";
import { Reveal } from "@/components/motion/Reveal";
import { captureAttribution, getAttribution } from "@/lib/attribution";
import { CANONICAL_EVENT_TYPES } from "@/config/estimator";

/**
 * Contact-page enquiry form — GATED behind the shared Event Estimator, exactly
 * like the conferences ViewingConversion. It stays unmounted (no DOM, no space,
 * not focusable) until the calculator's Continue fires `velmore:estimate`, then
 * reveals the enquire section, scrolls/focuses, and prefills what the visitor
 * already told the calculator (event type, date, guests). It carries every
 * calculator qualification field — plus a hidden numeric estimatedValue and
 * first-touch attribution — into the same GHL webhook so the master router sees
 * the same data regardless of which page the lead came from.
 *
 * Submit routing (primary → fallbacks): GHL inbound webhook (d2279152) → HubSpot
 * (if env configured) → prefilled mailto. Payload keys are additive; existing
 * standardised keys are unchanged.
 */
const GHL_WEBHOOK =
  process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL ||
  "https://services.leadconnectorhq.com/hooks/yxytqQ4pB8M4Z4yrTIAP/webhook-trigger/U0dj3cswmo2rFO6U8Zvv";

const PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
const FORM_ID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;

type Status = "idle" | "submitting" | "success" | "error";

const CALC_KEYS = [
  "organisationType",
  "ratePerPerson",
  "estimatedSubtotal",
  "recommendedVenue",
  "weddingVenue",
  "roomType",
  "numberOfRooms",
  "numberOfNights",
  "breakfastRequired",
  "spaPackage",
  "spaBookingBasis",
  "spaQuantity",
] as const;

export function EnquiryForm({
  eyebrow,
  heading,
  intro,
  steps = [],
}: {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  steps?: readonly string[];
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Controlled fields the calculator prefills.
  const [occasionVal, setOccasionVal] = useState("");
  const [dateVal, setDateVal] = useState("");
  const [guestsVal, setGuestsVal] = useState("");
  // All calculator qualification fields (strings), carried as hidden inputs.
  const [est, setEst] = useState<Record<string, string>>(() => Object.fromEntries(CALC_KEYS.map((k) => [k, ""])));
  // Raw numeric estimate — kept as state (not a form field) so it reaches the
  // webhook as a real JSON number.
  const [estValue, setEstValue] = useState<number | null>(null);

  useEffect(() => {
    captureAttribution();
  }, []);

  useEffect(() => {
    const onEst = (e: Event) => {
      const d = ((e as CustomEvent).detail || {}) as Record<string, unknown>;
      const s = (k: string) => (typeof d[k] === "string" ? (d[k] as string) : "");
      setEst(Object.fromEntries(CALC_KEYS.map((k) => [k, s(k)])));
      setEstValue(typeof d.estimatedValue === "number" ? d.estimatedValue : null);
      if (s("eventType")) setOccasionVal(s("eventType"));
      if (s("eventDate")) setDateVal(s("eventDate"));
      if (s("estimatedGuests")) setGuestsVal(s("estimatedGuests"));
      setRevealed(true);
    };
    window.addEventListener("velmore:estimate", onEst as EventListener);
    return () => window.removeEventListener("velmore:estimate", onEst as EventListener);
  }, []);

  useEffect(() => {
    if (!revealed) return;
    const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    sectionRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    const t = window.setTimeout(() => headingRef.current?.focus(), reduce ? 0 : 350);
    return () => window.clearTimeout(t);
  }, [revealed]);

  async function submitToGHL(v: Record<string, string>) {
    const res = await fetch(GHL_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: v.firstName,
        lastName: v.lastName,
        name: `${v.firstName} ${v.lastName}`.trim(),
        email: v.email,
        phone: v.phone,
        eventType: v.occasion,
        eventDate: v.date,
        estimatedGuests: v.guests,
        // Calculator qualification (empty unless that mode was used).
        organisationType: v.organisationType,
        ratePerPerson: v.ratePerPerson,
        estimatedSubtotal: v.estimatedSubtotal,
        ...(typeof estValue === "number" ? { estimatedValue: estValue } : {}),
        recommendedVenue: v.recommendedVenue,
        weddingVenue: v.weddingVenue,
        roomType: v.roomType,
        numberOfRooms: v.numberOfRooms,
        numberOfNights: v.numberOfNights,
        breakfastRequired: v.breakfastRequired,
        spaPackage: v.spaPackage,
        spaBookingBasis: v.spaBookingBasis,
        spaQuantity: v.spaQuantity,
        message: v.message,
        source: "Velmoré website — contact form",
        page: typeof window !== "undefined" ? window.location.href : "",
        ...getAttribution(),
      }),
    });
    if (!res.ok) throw new Error("GHL webhook failed");
  }

  async function submitToHubSpot(v: Record<string, string>) {
    const fields = [
      { name: "firstname", value: v.firstName },
      { name: "lastname", value: v.lastName },
      { name: "email", value: v.email },
      { name: "phone", value: v.phone },
      {
        name: "message",
        value: [
          `Enquiry type: ${v.occasion}`,
          v.date ? `Preferred date: ${v.date}` : "",
          v.guests ? `Guests/delegates: ${v.guests}` : "",
          v.ratePerPerson ? `Indicative rate: ${v.ratePerPerson}` : "",
          "",
          v.message,
        ]
          .filter(Boolean)
          .join("\n"),
      },
    ].filter((f) => f.value);
    const res = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields, context: { pageUri: typeof window !== "undefined" ? window.location.href : "", pageName: "Velmoré enquiry" } }),
    });
    if (!res.ok) throw new Error("HubSpot submission failed");
  }

  function submitViaMailto(v: Record<string, string>) {
    const subject = `Enquiry — ${v.occasion || "Velmoré"}${v.date ? ` (${v.date})` : ""}`;
    const body = [
      `Name: ${v.firstName} ${v.lastName}`.trim(),
      `Email: ${v.email}`,
      `Phone: ${v.phone}`,
      `Enquiry type: ${v.occasion}`,
      `Preferred date: ${v.date}`,
      `Guests/delegates: ${v.guests}`,
      v.ratePerPerson ? `Indicative rate: ${v.ratePerPerson}` : "",
      v.estimatedSubtotal ? `Indicative estimate: ${v.estimatedSubtotal}` : "",
      "",
      v.message,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = Object.fromEntries([...f.entries()].map(([k, val]) => [k, String(val)])) as Record<string, string>;
    setStatus("submitting");
    try {
      await submitToGHL(v);
      setStatus("success");
    } catch {
      try {
        if (PORTAL_ID && FORM_ID) await submitToHubSpot(v);
        else submitViaMailto(v);
        setStatus("success");
      } catch {
        submitViaMailto(v);
        setStatus("success");
      }
    }
  }

  const field =
    "mt-1.5 w-full rounded-md border border-estate-100 bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-stone focus:border-champagne";
  const label = "block text-[12px] font-semibold uppercase tracking-[.12em] text-steel";

  // Gated: nothing rendered until the calculator hands off.
  if (!revealed) return null;

  return (
    <section id="enquire" ref={sectionRef} className="scroll-mt-24 bg-ivory py-24 md:py-28">
      <div className="mx-auto grid max-w-container grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-12">
        {/* intro + reassurance + contact details */}
        <Reveal className="md:col-span-5">
          {eyebrow ? (
            <p className="flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-dark">
              <span aria-hidden className="h-px w-[34px] bg-champagne" />
              {eyebrow}
            </p>
          ) : null}
          {heading ? (
            <h2 ref={headingRef} tabIndex={-1} className="mt-5 max-w-[18ch] font-serif text-[28px] font-semibold leading-[1.12] tracking-[-.01em] text-estate-700 outline-none md:text-[36px]">
              {heading}
            </h2>
          ) : null}
          {intro ? <p className="mt-5 max-w-[46ch] text-[15.5px] leading-[1.7] text-charcoal md:text-[16px]">{intro}</p> : null}
          {steps.length ? (
            <ul className="mt-8 space-y-3">
              {steps.map((s, i) => (
                <li key={s} className="flex items-start gap-3 text-[14.5px] text-estate-700">
                  <span aria-hidden className="mt-[1px] grid h-5 w-5 shrink-0 place-items-center rounded-full bg-champagne/15 text-[11px] font-semibold text-champagne-dark">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-8 space-y-1.5 border-t border-estate-100 pt-6 text-[14px] text-charcoal">
            <p>
              <a href={`mailto:${site.contact.email}`} className="font-semibold text-champagne-dark underline-offset-4 hover:underline">
                {site.contact.email}
              </a>
            </p>
            <p>
              <a href={site.contact.phoneHref} className="font-semibold text-champagne-dark underline-offset-4 hover:underline">
                {site.contact.phone}
              </a>
            </p>
            <p className="text-steel">{site.contact.address}</p>
          </div>
        </Reveal>

        {/* the form / confirmation */}
        <div className="md:col-span-7 md:col-start-6">
          <div className="rounded-xl bg-mist/50 p-6 shadow-card md:p-8">
            {status === "success" ? (
              <div className="rounded-lg bg-white/60 p-8 text-center" role="status" aria-live="polite">
                <p className="font-serif text-[24px] font-semibold text-estate-700">Thank you — we&rsquo;re on it.</p>
                <p className="mx-auto mt-3 max-w-[42ch] text-[15px] leading-[1.7] text-charcoal">
                  Your enquiry is with our team and we&rsquo;ll reply the same business day. Prefer to talk sooner? Email us at{" "}
                  <a href={`mailto:${site.contact.email}`} className="font-semibold text-champagne-dark underline-offset-4 hover:underline">
                    {site.contact.email}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                {/* calculator qualification carried through (hidden) */}
                {CALC_KEYS.map((k) => (
                  <input key={k} type="hidden" name={k} value={est[k] || ""} />
                ))}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className={label}>First name<span className="text-champagne-dark"> *</span></label>
                    <input id="firstName" name="firstName" required autoComplete="given-name" className={field} placeholder="First name" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className={label}>Last name<span className="text-champagne-dark"> *</span></label>
                    <input id="lastName" name="lastName" required autoComplete="family-name" className={field} placeholder="Last name" />
                  </div>
                  <div>
                    <label htmlFor="email" className={label}>Email<span className="text-champagne-dark"> *</span></label>
                    <input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder="you@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className={label}>Phone</label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} placeholder="Optional" />
                  </div>
                  <div>
                    <label htmlFor="occasion" className={label}>Enquiry type</label>
                    <select id="occasion" name="occasion" value={occasionVal} onChange={(e) => setOccasionVal(e.target.value)} className={field}>
                      <option value="">Choose…</option>
                      {CANONICAL_EVENT_TYPES.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className={label}>Preferred date</label>
                    <input id="date" name="date" type="date" value={dateVal} onChange={(e) => setDateVal(e.target.value)} className={field} />
                  </div>
                </div>
                <div>
                  <label htmlFor="guests" className={label}>Guests / delegates</label>
                  <input id="guests" name="guests" type="number" min="1" inputMode="numeric" value={guestsVal} onChange={(e) => setGuestsVal(e.target.value)} className={`${field} sm:max-w-[220px]`} placeholder="Approx." />
                </div>
                <div>
                  <label htmlFor="message" className={label}>Tell us about your occasion</label>
                  <textarea id="message" name="message" rows={4} className={field} placeholder="A few details to help us help you" />
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    data-cta="enquiry_submit"
                    data-location="contact_form"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-champagne px-6 py-[15px] text-[14.5px] font-semibold text-ink shadow-accent transition-colors duration-200 hover:bg-champagne-dark disabled:opacity-60"
                  >
                    {status === "submitting" ? "Sending…" : "Send enquiry →"}
                  </button>
                  <p className="text-[13px] text-steel">
                    Prefer to email? Reach us at{" "}
                    <a href={`mailto:${site.contact.email}`} className="font-semibold text-champagne-dark underline-offset-4 hover:underline">
                      {site.contact.email}
                    </a>
                  </p>
                </div>
                <p className="text-[12px] leading-[1.6] text-stone">
                  We reply the same business day. Your details are only used to answer your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
