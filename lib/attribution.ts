/**
 * Meta / Google campaign attribution capture. Reads the campaign params from the
 * landing URL and persists the FIRST-TOUCH values in sessionStorage, so a visitor
 * who explores the site before submitting doesn't lose their source. It also
 * records the FIRST landing page (pathname only). The stored values are folded
 * into the enquiry webhook payload as flat keys (matching the existing flat
 * payload convention) for GHL routing/reporting.
 *
 * Capture runs globally (see components/analytics/AttributionCapture.tsx), mounted
 * once in the root layout, so the true landing page + campaign params are captured
 * on the initial load of ANY route — before internal navigation rewrites the URL.
 *
 * No analytics/tracking scripts are involved — this only reads the URL and the
 * user's own first-party session storage. No personal form data is ever stored.
 */

// Campaign / click-ID params (first-touch). Meta: fbclid. Google: gclid/gbraid/wbraid.
const CAMPAIGN_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
  "gbraid",
  "wbraid",
] as const;

// First-touch landing page (pathname only — never the query string, never PII).
const LANDING_KEY = "landing_page";
const PREFIX = "velmore_attr_";

export type AttributionFields = Partial<
  Record<(typeof CAMPAIGN_KEYS)[number] | typeof LANDING_KEY, string>
>;

/** Capture first-touch attribution from the current URL into sessionStorage.
 *  Safe to call on every mount / route change — existing (first-touch) values are
 *  never overwritten. Records the landing pathname even when no campaign params
 *  are present. No-op on the server. */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    for (const k of CAMPAIGN_KEYS) {
      const v = params.get(k);
      if (v && !sessionStorage.getItem(PREFIX + k)) {
        sessionStorage.setItem(PREFIX + k, v);
      }
    }
    // First-touch landing page — pathname only, no query (no PII, no arbitrary
    // params). Captured even without campaign params, and never overwritten.
    if (!sessionStorage.getItem(PREFIX + LANDING_KEY)) {
      sessionStorage.setItem(PREFIX + LANDING_KEY, window.location.pathname);
    }
  } catch {
    /* sessionStorage can throw in private modes — attribution is best-effort */
  }
}

/** Read the captured attribution (sessionStorage first, current URL/pathname as a
 *  fallback). Returns only the keys that have a value, as flat string fields. */
export function getAttribution(): AttributionFields {
  if (typeof window === "undefined") return {};
  const out: AttributionFields = {};
  let params: URLSearchParams | null = null;
  try {
    params = new URLSearchParams(window.location.search);
  } catch {
    params = null;
  }
  for (const k of CAMPAIGN_KEYS) {
    let v = "";
    try {
      v = sessionStorage.getItem(PREFIX + k) || "";
    } catch {
      /* ignore */
    }
    if (!v && params) v = params.get(k) || "";
    if (v) out[k] = v;
  }
  // landing_page: first-touch stored pathname, else the current pathname as a
  // safe fallback (e.g. storage blocked). Pathname only — never the query string.
  let landing = "";
  try {
    landing = sessionStorage.getItem(PREFIX + LANDING_KEY) || "";
  } catch {
    /* ignore */
  }
  if (!landing) landing = window.location.pathname;
  if (landing) out[LANDING_KEY] = landing;
  return out;
}
