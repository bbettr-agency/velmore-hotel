import { site } from "@/config/site";

/**
 * Shared enquiry submit — HubSpot-first (CRM confirmed = HubSpot), with a
 * prefilled mailto fallback so no enquiry is ever lost before the portal is wired.
 * Used by the /conferences venue-viewing flow (and available to other forms).
 *
 * When NEXT_PUBLIC_HUBSPOT_PORTAL_ID + NEXT_PUBLIC_HUBSPOT_FORM_ID are set, this
 * POSTs to the public HubSpot Forms submission endpoint (no secret needed). The
 * structured detail is also folded into `message` so a default HubSpot form
 * captures everything even before custom properties exist. See docs/18 §D.
 */
const PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
const FORM_ID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;

export const hasHubSpot = Boolean(PORTAL_ID && FORM_ID);

export type EnquiryCore = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
};

export async function submitEnquiry(core: EnquiryCore): Promise<void> {
  if (PORTAL_ID && FORM_ID) {
    const fields = [
      { name: "firstname", value: core.firstName },
      { name: "lastname", value: core.lastName },
      { name: "email", value: core.email },
      { name: "phone", value: core.phone },
      { name: "company", value: core.company },
      { name: "message", value: core.message },
    ].filter((f) => f.value);
    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields,
          context: { pageUri: typeof window !== "undefined" ? window.location.href : "", pageName: core.subject },
        }),
      },
    );
    if (!res.ok) throw new Error("HubSpot submission failed");
    return;
  }
  // No portal configured yet — fall back to a prefilled email so nothing is lost.
  window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(core.subject)}&body=${encodeURIComponent(core.message)}`;
}
