"use client";

import { useState } from "react";
import { site } from "@/config/site";

/**
 * Enquiry form — accessible, tracking-ready UI. No CRM backend is confirmed yet
 * (HubSpot integration is a Gate-1 item), so on submit it composes a pre-filled
 * email to the confirmed bookings address (functional without a backend, and
 * honest — nothing is silently dropped). The submit carries data-cta for GTM;
 * when the CRM is wired, swap the handler for the real POST.
 */
const OCCASIONS = ["Wedding", "Conference", "Event / function", "Stay", "Spa", "Other"];

export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => (f.get(k) as string) || "";
    const subject = `Enquiry — ${get("occasion") || "Velmoré"}${get("date") ? ` (${get("date")})` : ""}`;
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Occasion: ${get("occasion")}`,
      `Preferred date: ${get("date")}`,
      `Guests: ${get("guests")}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "mt-1.5 w-full rounded-md border border-estate-100 bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-stone focus:border-champagne";
  const label = "block text-[12px] font-semibold uppercase tracking-[.12em] text-steel";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name<span className="text-champagne-dark"> *</span></label>
          <input id="name" name="name" required autoComplete="name" className={field} placeholder="Your name" />
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
          <label htmlFor="occasion" className={label}>Occasion</label>
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
        <div>
          <label htmlFor="guests" className={label}>Guests / delegates</label>
          <input id="guests" name="guests" type="number" min="1" inputMode="numeric" className={field} placeholder="Approx." />
        </div>
      </div>
      <div>
        <label htmlFor="message" className={label}>Tell us about your occasion</label>
        <textarea id="message" name="message" rows={4} className={field} placeholder="A few details to help us help you" />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          data-cta="enquiry_submit"
          data-location="contact_form"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-champagne px-6 py-[15px] text-[14.5px] font-semibold text-ink shadow-accent transition-colors duration-200 hover:bg-champagne-dark"
        >
          Send enquiry →
        </button>
        <p className="text-[13px] text-steel" role="status" aria-live="polite">
          {sent
            ? "Opening your email to send — or write us directly at "
            : "Prefer to email? Reach us at "}
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
