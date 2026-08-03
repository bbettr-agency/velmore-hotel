import type { Metadata } from "next";
import { routes, type RouteKey } from "@/config/site";

/** Per-page metadata from the route config (unique title + description). */
export function pageMetadata(route: RouteKey): Metadata {
  const r = routes[route];
  const title = `${r.title} — Velmoré Hotel & Spa`;
  return {
    title,
    description: r.blurb,
    alternates: { canonical: r.href },
    openGraph: { title, description: r.blurb, type: "website", locale: "en_ZA" },
  };
}
