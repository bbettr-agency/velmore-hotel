import type { Metadata } from "next";

/**
 * Canonical production origin — the connected live domain (velmorehotel.co.za
 * redirects to www). Single source used by metadata, sitemap, robots and
 * structured data. NOTE: the website enquiry inbox is online@velmore.co.za (a
 * different domain to the website) — confirmed by the client.
 */
export const SITE_URL = "https://www.velmorehotel.co.za";

/** SEO — only confirmed facts (BKB v0.2). No fabricated grading/ratings. */
export const seo: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Velmoré Hotel & Spa — Weddings, Conferences & Celebrations in Pretoria & Centurion",
  description:
    "A French-Provence estate for weddings, conferences and celebrations in Pretoria & Centurion — one team, one invoice, a certified halal kitchen, 50 rooms.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Velmoré Hotel & Spa",
    description:
      "The whole occasion, held — a French-Provence estate for weddings, conferences and celebrations in Pretoria & Centurion.",
    type: "website",
    locale: "en_ZA",
    url: "/",
    siteName: "Velmoré Hotel & Spa",
    images: [{ url: "/images/branding/social/og.jpg", width: 1200, height: 630, alt: "Velmoré Hotel & Spa — the estate façade" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velmoré Hotel & Spa",
    description: "A French-Provence estate for weddings, conferences and celebrations in Pretoria & Centurion.",
    images: ["/images/branding/social/og.jpg"],
  },
  robots: { index: true, follow: true },
};
