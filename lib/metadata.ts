import type { Metadata } from "next";
import { routes, type RouteKey } from "@/config/site";

/** Per-page metadata from the route config (unique title + description). */
export function pageMetadata(route: RouteKey): Metadata {
  const r = routes[route];
  const title = `${r.title} — Velmoré Hotel & Spa`;
  const ogImage = { url: "/images/branding/social/og.jpg", width: 1200, height: 630, alt: "Velmoré Hotel & Spa" };
  return {
    title,
    description: r.blurb,
    alternates: { canonical: r.href },
    openGraph: { title, description: r.blurb, type: "website", locale: "en_ZA", url: r.href, siteName: "Velmoré Hotel & Spa", images: [ogImage] },
    twitter: { card: "summary_large_image", title, description: r.blurb, images: [ogImage.url] },
  };
}
