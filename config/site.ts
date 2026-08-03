/**
 * Velmoré — site configuration (config-driven; no copy hardcoded in components).
 * Facts here are from the Business Knowledge Base v0.2 (confirmed). Items marked
 * INDICATIVE are placeholder copy pending the copy stage (docs/03 Content Readiness)
 * and must be replaced before launch. Nothing here is a fabricated fact.
 *
 * Route naming (final): /dining and /spa are generic on purpose — the restaurant and
 * spa trading names are unconfirmed (Content Readiness), so name-agnostic URLs stay
 * stable. Recorded in docs/06-INFORMATION-ARCHITECTURE.md.
 */

export const routes = {
  weddings: {
    href: "/weddings",
    title: "Weddings",
    eyebrow: "Weddings on the estate",
    // INDICATIVE
    blurb:
      "A ceremony, a reception and a chapel on one French-Provence estate — with rooms for your guests and a certified halal kitchen.",
  },
  conferences: {
    href: "/conferences",
    title: "Conferences",
    eyebrow: "Residential conferencing",
    blurb:
      "One site, one team, one invoice — a 1,300-seat hall, executive breakout rooms and 50 beds, with a certified halal kitchen, in Pretoria & Centurion.",
  },
  accommodation: {
    href: "/accommodation",
    title: "Stay",
    eyebrow: "Stay on the estate",
    blurb:
      "50 rooms on the estate, with gardens, a pool and a spa, between Pretoria and Centurion.",
  },
  dining: {
    href: "/dining",
    title: "Dining",
    eyebrow: "Dining on the estate",
    blurb: "Estate dining with a certified halal kitchen.",
  },
  spa: {
    href: "/spa",
    title: "Spa",
    eyebrow: "A restorative day",
    blurb: "A restorative day on the estate.",
  },
  events: {
    href: "/events",
    title: "Events",
    eyebrow: "Celebrations & functions",
    blurb:
      "Year-end functions, matric farewells, milestones and private celebrations on the estate.",
  },
  gallery: {
    href: "/gallery",
    title: "Gallery",
    eyebrow: "The estate, in pictures",
    blurb: "The estate at its best — venues, gardens and real occasions.",
  },
  about: {
    href: "/about",
    title: "About Velmoré",
    eyebrow: "One estate, one team",
    blurb:
      "Velmoré Hotel & Spa is the flagship of the Velmore Hospitality Group, hosting weddings, conferences and celebrations across Pretoria & Centurion.",
  },
  contact: {
    href: "/contact",
    title: "Contact & viewings",
    eyebrow: "Come and see the estate",
    blurb:
      "Book a viewing or enquire for your date — we reply the same business day.",
  },
} as const;

export type RouteKey = keyof typeof routes;

export const site = {
  brand: {
    name: "Velmoré",
    suffix: "Hotel & Spa",
    group: "Velmore Hospitality Group",
  },

  // Primary navigation — final routes (revenue-informed order, matching the locked nav).
  nav: [
    { label: routes.weddings.title, href: routes.weddings.href },
    { label: routes.conferences.title, href: routes.conferences.href },
    { label: routes.events.title, href: routes.events.href },
    { label: routes.accommodation.title, href: routes.accommodation.href }, // "Stay" → /accommodation
    { label: routes.dining.title, href: routes.dining.href },
    { label: routes.spa.title, href: routes.spa.href },
  ],

  cta: {
    primary: { label: "Book a viewing", href: routes.contact.href },
    secondary: { label: "Enquire for your date", href: routes.contact.href },
    reassurance: "Free · no obligation · we reply the same business day",
  },

  contact: {
    // [confirmed] emails are live (BKB v0.2). Phone/address are TO CONFIRM — not shown as fact yet.
    email: "bookings@velmorehotel.co.za",
    location: "Pretoria & Centurion",
  },

  hero: {
    eyebrow: "An estate in Pretoria & Centurion",
    headline: ["The whole occasion,", "held."], // INDICATIVE
    sub: "A French-Provence estate for weddings, conferences and celebrations — one team, one invoice, and a certified halal kitchen, for eight guests or thirteen hundred.", // INDICATIVE
    imageNote: "Photography placeholder · D'Charmant Glass Hall at dusk",
  },

  trust: [
    { label: "1,300-seat hall", kind: "fact" as const },
    { label: "50 rooms on the estate", kind: "fact" as const },
    { label: "Certified Halal", kind: "badge" as const },
    { label: "One team · one invoice", kind: "fact" as const },
  ],

  // Homepage journey selector — the four audience paths (real routes).
  journeys: {
    kicker: "What brings you to Velmoré",
    heading: "Choose your occasion",
    lead: "One estate, one team — start where your occasion begins.", // INDICATIVE
    items: [
      {
        name: "Weddings",
        href: routes.weddings.href,
        desc: "A ceremony, reception and chapel — with rooms for your guests.",
        hook: ["Chapel", "Gardens", "Guest rooms"],
      },
      {
        name: "Conferences",
        href: routes.conferences.href,
        desc: "Residential conferencing at scale, one team and one invoice.",
        hook: ["1,300-seat hall", "50 beds", "Certified halal"],
      },
      {
        name: "Events",
        href: routes.events.href,
        desc: "Year-end functions, matric farewells and private celebrations.",
        hook: ["Year-end", "Matric", "Milestones"],
      },
      {
        name: "Stay",
        href: routes.accommodation.href,
        desc: "50 rooms with gardens, a pool and a spa on the estate.",
        hook: ["50 rooms", "Spa", "Gardens"],
      },
    ],
  },
} as const;

export type Site = typeof site;
