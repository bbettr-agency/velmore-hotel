"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

/**
 * Global first-touch attribution capture. Mounted once in the root layout so it
 * runs on the initial hard load — capturing the true landing page (pathname) and
 * any campaign params BEFORE internal navigation rewrites the URL — and again on
 * every client-side route change (a no-op once first-touch values exist, since
 * captureAttribution never overwrites them).
 *
 * Renders nothing. No network, no cookies, no Meta Pixel / conversion events, no
 * PII. All storage logic lives in lib/attribution.ts (first-party sessionStorage,
 * safely guarded). Deliberately separate from MetaPixel so attribution storage is
 * not coupled to the Pixel.
 */
export function AttributionCapture() {
  const pathname = usePathname();
  useEffect(() => {
    captureAttribution();
  }, [pathname]);
  return null;
}
