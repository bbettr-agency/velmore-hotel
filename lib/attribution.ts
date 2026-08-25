/**
 * Meta / campaign attribution capture. Reads the campaign params from the
 * landing URL and persists the FIRST-TOUCH values in sessionStorage, so a
 * visitor who explores the page before submitting doesn't lose their source.
 * The stored values are then folded into the enquiry webhook payload as flat
 * keys (matching the existing flat payload convention) for GHL routing.
 *
 * No analytics/tracking scripts are involved — this only reads the URL and the
 * user's own session storage.
 */
const KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"] as const;
const PREFIX = "velmore_attr_";

/** Capture first-touch attribution from the current URL into sessionStorage.
 *  Safe to call on every mount — existing (first-touch) values are never
 *  overwritten. No-op on the server. */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    for (const k of KEYS) {
      const v = params.get(k);
      if (v && !sessionStorage.getItem(PREFIX + k)) {
        sessionStorage.setItem(PREFIX + k, v);
      }
    }
  } catch {
    /* sessionStorage can throw in private modes — attribution is best-effort */
  }
}

/** Read the captured attribution (sessionStorage first, current URL as a
 *  fallback). Returns only the keys that have a value, as flat string fields. */
export function getAttribution(): Partial<Record<(typeof KEYS)[number], string>> {
  if (typeof window === "undefined") return {};
  const out: Partial<Record<(typeof KEYS)[number], string>> = {};
  let params: URLSearchParams | null = null;
  try {
    params = new URLSearchParams(window.location.search);
  } catch {
    params = null;
  }
  for (const k of KEYS) {
    let v = "";
    try {
      v = sessionStorage.getItem(PREFIX + k) || "";
    } catch {
      /* ignore */
    }
    if (!v && params) v = params.get(k) || "";
    if (v) out[k] = v;
  }
  return out;
}
