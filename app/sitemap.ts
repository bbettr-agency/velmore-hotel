import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/seo";
import { routes } from "@/config/site";

/** Static route sitemap. Add dynamic routes here as sub-pages are built. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["/", ...Object.values(routes).map((r) => r.href)];
  const priority: Record<string, number> = {
    "/": 1,
    "/conferences": 0.9,
    "/weddings": 0.9,
    "/contact": 0.8,
    "/accommodation": 0.8,
  };
  return paths.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: priority[path] ?? 0.7,
  }));
}
