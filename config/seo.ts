import type { Metadata } from "next";

/** SEO — only confirmed facts (BKB v0.2). No fabricated grading/ratings. */
export const seo: Metadata = {
  metadataBase: new URL("https://velmore-hotel.vercel.app"),
  title: "Velmoré Hotel & Spa — Weddings, Conferences & Celebrations in Pretoria & Centurion",
  description:
    "A French-Provence estate for weddings, conferences and celebrations in Pretoria & Centurion. One team, one invoice, a certified halal kitchen, and 50 rooms on the estate.",
  openGraph: {
    title: "Velmoré Hotel & Spa",
    description:
      "The whole occasion, held — a French-Provence estate for weddings, conferences and celebrations in Pretoria & Centurion.",
    type: "website",
    locale: "en_ZA",
  },
  robots: { index: true, follow: true },
};
