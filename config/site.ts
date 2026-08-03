/**
 * Velmoré — site configuration (config-driven; no copy hardcoded in components).
 * Facts tagged below are from the Business Knowledge Base v0.2 (confirmed).
 * Items marked INDICATIVE are placeholder copy pending the copy stage — they must
 * be replaced before launch (see docs/03 Content Readiness). Nothing here is a
 * fabricated fact; the trust items are all client-confirmed.
 */

export const site = {
  brand: {
    name: "Velmoré",
    suffix: "Hotel & Spa",
    // [confirmed] parent entity used on About / corporate / footer only
    group: "Velmore Hospitality Group",
  },

  // Revenue-ordered primary navigation (docs/06). Routes land as later milestones ship;
  // "#" placeholders keep the milestone free of broken links until those pages exist.
  nav: [
    { label: "Weddings", href: "#" },
    { label: "Conferences", href: "#" },
    { label: "Events", href: "#" },
    { label: "Stay", href: "#" },
    { label: "Dining", href: "#" },
    { label: "Spa", href: "#" },
  ],

  cta: {
    primary: { label: "Book a viewing", href: "#" }, // [confirmed] primary action sitewide
    secondary: { label: "Enquire for your date", href: "#" },
    reassurance: "Free · no obligation · we reply the same business day",
  },

  hero: {
    // location framing [confirmed]: Pretoria & Centurion
    eyebrow: "An estate in Pretoria & Centurion",
    // INDICATIVE headline — expresses the North Star ("held"); final copy at the copy stage.
    headline: ["The whole occasion,", "held."],
    // INDICATIVE sub — carries category + breadth + confirmed proof (one team/one invoice, certified halal).
    sub: "A French-Provence estate for weddings, conferences and celebrations — one team, one invoice, and a certified halal kitchen, for eight guests or thirteen hundred.",
    // photography placeholder note (docs/16): the real D'Charmant-at-dusk shot replaces the CSS placeholder.
    imageNote: "Photography placeholder · D'Charmant Glass Hall at dusk",
  },

  // Trust strip — ALL client-confirmed (BKB v0.2). Certified Halal is the headline welcome.
  trust: [
    { label: "1,300-seat hall", kind: "fact" as const },
    { label: "50 rooms on the estate", kind: "fact" as const },
    { label: "Certified Halal", kind: "badge" as const },
    { label: "One team · one invoice", kind: "fact" as const },
  ],

  // Next-section peek (journey selector) — the four confirmed audience paths.
  journeys: {
    kicker: "What brings you to Velmoré",
    heading: "Choose your occasion",
    items: [
      { name: "Weddings", desc: "Ceremony, reception & a chapel — with rooms for your guests.", href: "#" },
      { name: "Conferences", desc: "Residential conferencing: a 1,300-seat hall, breakouts & 50 beds.", href: "#" },
      { name: "Celebrations", desc: "Matric farewells, milestones & private functions on the estate.", href: "#" },
      { name: "Stay", desc: "50 rooms, gardens, pool and spa between Pretoria & Centurion.", href: "#" },
    ],
  },
} as const;

export type Site = typeof site;
