import { SITE_URL } from "@/config/seo";
import { routes, type RouteKey } from "@/config/site";

/**
 * Structured data — CONFIRMED facts only. No address, phone, rating or review
 * count is emitted until verified (address/phone are TO CONFIRM; ratings need
 * consent). Certified-halal is confirmed. Update `address`/`telephone` here once
 * the client provides them.
 */
const OG = `${SITE_URL}/images/branding/social/og.jpg`;

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Hotel", "LocalBusiness"],
        "@id": `${SITE_URL}/#hotel`,
        name: "Velmoré Hotel & Spa",
        url: SITE_URL,
        description:
          "A French-Provence estate for weddings, conferences and celebrations in Pretoria & Centurion — one team, one invoice, a certified halal kitchen, and 50 rooms on the estate.",
        image: OG,
        brand: { "@type": "Brand", name: "Velmoré" },
        parentOrganization: { "@type": "Organization", name: "Velmore Hospitality Group" },
        areaServed: [
          { "@type": "City", name: "Pretoria" },
          { "@type": "City", name: "Centurion" },
        ],
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Certified halal kitchen", value: true },
          { "@type": "LocationFeatureSpecification", name: "On-site accommodation (50 rooms)", value: true },
          { "@type": "LocationFeatureSpecification", name: "Conference & event venues", value: true },
          { "@type": "LocationFeatureSpecification", name: "Spa", value: true },
        ],
        // address / telephone: TO CONFIRM — intentionally omitted (no fabrication).
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Velmoré Hotel & Spa",
        publisher: { "@id": `${SITE_URL}/#hotel` },
        inLanguage: "en-ZA",
      },
    ],
  };
}

/** BreadcrumbList + WebPage for an inner page. */
export function pageJsonLd(route: RouteKey) {
  const r = routes[route];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: r.title, item: `${SITE_URL}${r.href}` },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}${r.href}#webpage`,
        url: `${SITE_URL}${r.href}`,
        name: `${r.title} — Velmoré Hotel & Spa`,
        description: r.blurb,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#hotel` },
        inLanguage: "en-ZA",
      },
    ],
  };
}
