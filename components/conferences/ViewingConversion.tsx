"use client";

import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { submitEnquiry } from "@/lib/enquiry";
import { Reveal } from "@/components/motion/Reveal";

const ORGANISING = ["For my organisation", "For a client / Event agency", "Other"];
const CONFERENCE_TYPE = ["Day conference", "Residential conference", "Unsure"];
const DELEGATES = ["Under 50", "50–150", "150–400", "400+", "Unsure"];
const ACCOMMODATION = ["Yes", "No", "Unsure"];

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
  // Optional context: the venue explorer's CTA tells us which venue prompted the
  // viewing. Useful for the closer, never required (no added friction).
  const [venue, setVenue] = useState("");
  useEffect(() => {
    const onVenue = (e: Event) => setVenue((e as CustomEvent).detail || "");
    window.addEventListener("velmore:venue", onVenue as EventListener);
    return () => window.removeEventListener("velmore:venue", onVenue as EventListener);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = Object.fromEntries([...f.entries()].map(([k, val]) => [k, String(val)])) as Record<string, string>;
    setStatus("submitting");
    const message = [
      "Venue viewing request",
      v.venueOfInterest ? `Venue of interest: ${v.venueOfInterest}` : "",
      `Organising as: ${v.organisingAs}`,
      `Preferred viewing: ${v.preferredViewing}`,
      v.conferenceType ? `Conference type: ${v.conferenceType}` : "",
      v.eventDate ? `Approx. event date: ${v.eventDate}` : "",
      v.delegates ? `Estimated delegates: ${v.delegates}` : "",
      v.accommodation ? `Accommodation required: ${v.accommodation}` : "",
      "",
      v.message,
    ]
      .filter(Boolean)
      .join("\n");
    const subject = `Venue viewing request — ${v.company || `${v.firstName} ${v.lastName}`.trim()}`;
    try {
      await submitEnquiry({
        firstName: v.firstName,
        lastName: v.lastName,
        email: v.email,
        phone: v.phone,
        company: v.company,
        subject,
        message,
      });
      setStatus("success");
    } catch {
      // never lose a request — fall back to a prefilled email
      window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      setStatus("success");
    }
  }

  const field =
    "mt-1.5 w-full rounded-md border border-estate-100 bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-stone focus:border-champagne";
  const label = "block text-[12px] font-semibold uppercase tracking-[.12em] text-steel";
  const req = <span className="text-champagne-dark"> *</span>;

  return (
    <section id="book-viewing" className="scroll-mt-24 bg-ivory py-20 md:py-28">
      <div className="mx-auto grid max-w-container grid-cols-1 items-start gap-10 px-6 md:grid-cols-12 md:gap-16 md:px-12">
        {/* left — the invitation */}
        <Reveal className="md:col-span-5">
          {eyebrow ? (
            <p className="flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-dark">
              <span aria-hidden className="h-px w-[34px] bg-champagne" />
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-5 max-w-[16ch] font-serif text-[30px] font-semibold leading-[1.1] tracking-[-.01em] text-estate-700 md:text-[40px]">
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
                <a href={`mailto:${site.contact.email}`} className="font-semibold text-champagne-dark underline-offset-4 hover:underline">
                  {site.contact.email}
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-lg bg-white p-6 shadow-card md:p-8">
              <input type="hidden" name="venueOfInterest" value={venue} />
              {venue ? (
                <p className="mb-5 flex items-center gap-2 rounded-md bg-mist px-3.5 py-2.5 text-[13px] text-estate-700">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-champagne" />
                  <span><span className="font-semibold">Viewing:</span> {venue}</span>
                </p>
              ) : null}
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
                  <label htmlFor="v-delegates" className={label}>Estimated delegates</label>
                  <select id="v-delegates" name="delegates" defaultValue="" className={field}>
                    <option value="">Choose…</option>
                    {DELEGATES.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="v-eventDate" className={label}>Approximate event date</label>
                  <input id="v-eventDate" name="eventDate" type="date" className={field} />
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
