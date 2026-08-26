"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Global Meta Pixel — mounted once in the root layout, so it loads on every route
 * (current and future). The official base snippet initialises the pixel exactly
 * once (`if(f.fbq)return;`) and fires the first `PageView` on the hard page load.
 *
 * Because this is a Next.js App Router SPA, subsequent client-side navigations do
 * NOT re-run the base script — so a small effect fires `PageView` on each pathname
 * change. It deliberately SKIPS its first run (the base snippet already tracked the
 * initial load) to avoid a duplicate PageView.
 *
 * This is analytics only. It does not touch the forms, the webhooks, the GHL
 * payloads, or the /conferences UTM/fbclid attribution capture.
 */
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "2621493501624756";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export function MetaPixel() {
  const pathname = usePathname();
  const trackedInitial = useRef(false);

  useEffect(() => {
    // Skip the initial render — the base snippet fires PageView on hard load.
    if (!trackedInitial.current) {
      trackedInitial.current = true;
      return;
    }
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
