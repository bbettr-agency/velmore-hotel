"use client";

import { useState } from "react";
import { site } from "@/config/site";

/**
 * Enquiry form — production-ready, HubSpot-first (CRM confirmed = HubSpot).
 *
 * Submit routing:
 *  1. If HubSpot portal + form IDs are configured (env NEXT_PUBLIC_HUBSPOT_PORTAL_ID
 *     + NEXT_PUBLIC_HUBSPOT_FORM_ID), POST to the HubSpot Forms API (no secret
 *     needed — the submission endpoint is public per form). Contact is created/
 *     updated and routed by the form's HubSpot workflow.
 *  2. Otherwise fall back to a pre-filled mailto to the confirmed bookings inbox,
 *     so no enquiry is ever lost before the CRM is wired.
 *
 * TODO(client): provide the HubSpot portal ID + form GUID (and the internal
 * property names for Enquiry type / Event date / Guest count if custom), then set
 * the two env vars in Vercel — no code change needed. See docs/18 §D.
 */
const OCCASIONS = ["Wedding", "Conference", "Event / function", "Stay", "Spa", "Other"];

const PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
const FORM_ID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;

type Status = "idle" | "submitting" | "success" | "error";

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function submitToHubSpot(v: Record<string, string>) {
    const fields = [
      { name: "firstname", value: v.firstName },
      { name: "lastname", value: v.lastName },
      { name: "email", value: v.email },
      { name: "phone", value: v.phone },
      // Structured details are also folded into `message` so a default HubSpot
      // form (firstname/lastname/email/phone/message) captures everything even
      // before custom properties exist.
      {
        name: "message",
        value: [
          `Enquiry type: ${v.occasion}`,
          v.date ? `Preferred date: ${v.date}` : "",
          v.guests ? `Guests/delegates: ${v.guests}` : "",
          "",
          v.message,
        ]
          .filter(Boolean)
          .join("\n"),
      },
    ].filter((f) => f.value);
    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields, context: { pageUri: typeof window !== "undefined" ? window.location.href : "", pageName: "Velmoré enquiry" } }),
      },
    );
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
      "",
      v.message,
    ].join("\n");
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = Object.fromEntries([...f.entries()].map(([k, val]) => [k, String(val)])) as Record<string, string>;
    setStatus("submitting");
    try {
      if (PORTAL_ID && FORM_ID) {
        await submitToHubSpot(v);
        setStatus("success");
      } else {
        submitViaMailto(v);
        setStatus("success");
      }
    } catch {
      // never lose an enquiry — fall back to email
      submitViaMailto(v);
      setStatus("success");
    }
  }

  const field =
    "mt-1.5 w-full rounded-md border border-estate-100 bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-stone focus:border-champagne";
  const label = "block text-[12px] font-semibold uppercase tracking-[.12em] text-steel";

  if (status === "success") {
    return (
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
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
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
          <select id="occasion" name="occasion" defaultValue="" className={field}>
            <option value="" disabled>Choose…</option>
            {OCCASIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date" className={label}>Preferred date</label>
          <input id="date" name="date" type="date" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="guests" className={label}>Guests / delegates</label>
        <input id="guests" name="guests" type="number" min="1" inputMode="numeric" className={`${field} sm:max-w-[220px]`} placeholder="Approx." />
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
  );
}
