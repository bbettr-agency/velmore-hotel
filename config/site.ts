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

  // Estate Introduction / Capability — the "why different" story (facts are BKB-confirmed;
  // prose is INDICATIVE, pending the copy stage).
  estate: {
    eyebrow: "One estate, three venues",
    heading: "Not a room you hire. An estate that holds the whole occasion.", // INDICATIVE
    body: [
      "Velmoré is one team, running three venues across Pretoria and Centurion — including a 1,300-seat hall, the largest in the area, a kilometre and a half from the estate.",
      "Under one roof and one invoice: executive breakout rooms, fifty rooms for the night, gardens and a chapel, and a certified halal kitchen that caters for every guest. Marry, meet, celebrate or stay — held, from the first enquiry to the last goodbye, by the same hands.",
    ], // INDICATIVE
    stats: [
      { value: "1,300", unit: "seats", note: "the largest hall in the area" },
      { value: "3", unit: "venues", note: "across Pretoria & Centurion" },
      { value: "50", unit: "rooms", note: "for the night, on the estate" },
      { value: "1", unit: "invoice", note: "one team, one contract" },
    ],
    halal: "for every guest — without being asked.", // INDICATIVE (paired with the Certified Halal badge)
    holds: [
      { label: "Conferences", href: routes.conferences.href },
      { label: "Weddings", href: routes.weddings.href },
      { label: "Celebrations", href: routes.events.href },
      { label: "Stays", href: routes.accommodation.href },
    ],
  },

  // Homepage Conferences preview — the #1 revenue pillar (facts BKB-confirmed; prose INDICATIVE).
  conferencesPreview: {
    eyebrow: "Conferences & residential events",
    heading: "A conference for thirteen hundred — held by one team, from arrival to departure.", // INDICATIVE
    body: [
      "At the Suleman Convention Centre — the largest hall in the area — Velmoré seats up to 1,300 delegates, with executive breakout rooms and fifty rooms for residential sessions.",
      "One team plans it, runs it and invoices it, with a certified halal kitchen catering for everyone. A government or corporate conference arrives to one point of contact — not a dozen suppliers — held by the same hands from the first delegate to the last goodbye.",
    ], // INDICATIVE
    points: [
      "Up to 1,300 delegates",
      "Residential — 50 rooms on the estate",
      "Certified-halal catering",
      "One team · one invoice",
    ],
    imageNote: "Photography placeholder · the 1,300-seat hall (to be shot)",
    primary: { label: "Book a Viewing", href: routes.contact.href },
    secondary: { label: "Explore Conferences", href: routes.conferences.href },
  },

  // Homepage Weddings preview — the emotive counterpoint to Conferences. Leads with
  // feeling (chapel, gardens, dusk), supported by confidence (one team, one invoice,
  // rooms, halal, viewings). Facts BKB-confirmed; prose INDICATIVE.
  weddingsPreview: {
    eyebrow: "Weddings on the estate",
    kicker: "This is where one of the biggest days of your life belongs.", // INDICATIVE
    heading: "A whole estate, given over to one day — and to everyone in it.", // INDICATIVE
    body: [
      "A ceremony in the chapel. A reception beneath the chandeliers. Gardens for the golden hour, and the soft French-Provence light that makes the photographs. Not a room you hire for a few hours — a whole estate that holds the day, from the first arrival to the last dance.",
      "And behind the beauty, one team quietly holds every part: the viewing and the venue, a certified halal kitchen so every guest is cared for, and fifty rooms so no one has to leave. One invoice, one point of contact, one calm and unhurried plan — so the day feels like yours, never a logistics exercise.",
    ], // INDICATIVE
    heldLabel: "Held for you",
    points: [
      "Chapel & reception spaces",
      "Gardens & estate atmosphere",
      "Rooms for your guests",
      "Certified-halal catering",
      "One team · one invoice",
      "Private venue viewings",
    ],
    imageNote: "Photography placeholder · a wedding on the estate (to be shot)",
    primary: { label: "Book a Viewing", href: routes.contact.href },
    secondary: { label: "Explore Weddings", href: routes.weddings.href },
  },

  // Homepage Stay preview — the third change of pace: calm and rest after the
  // occasion. Deliberately quieter and more spacious than Conferences/Weddings.
  // Facts BKB-confirmed (50 bookable rooms, on the estate, gardens); no invented
  // categories, amenities, rates or grading; restoration rooms never mentioned.
  stayPreview: {
    eyebrow: "Stay on the estate",
    heading: "Everything is here. There's no need to leave.", // INDICATIVE
    lead: "When the occasion ends, the estate doesn't. Fifty rooms on the grounds keep everyone close to the celebration — no drive home, no rush, just gardens to wake up to.", // INDICATIVE
    // Honest placeholders — clearly state the image is still required.
    environmentalNote: "Photography required · estate accommodation (room shoot pending)",
    detailNote: "Photography required · gardens & estate detail",
    proof: [
      { label: "50 rooms", note: "on the estate" },
      { label: "Steps away", note: "from the occasion" },
      { label: "Gardens & calm", note: "to wake up to" },
    ],
    primary: { label: "Explore Your Stay", href: routes.accommodation.href },
    // No booking engine confirmed — "Check Availability" routes to the enquiry
    // journey for now, with its own tracking label kept distinct for the future
    // booking-engine integration (see docs/08 event taxonomy).
    secondary: { label: "Check Availability", href: routes.contact.href },
  },

  // Homepage Spa preview — the page's quiet exhale: stillness, restoration,
  // privacy, escape. Name-NEUTRAL (trading name/operator unconfirmed) — never
  // "Allura". Communicates the emotional role only; NO invented services,
  // treatments, pricing, hours, product brands, facilities or packages. The
  // estate has a spa (confirmed — it's in "Velmoré Hotel & Spa"); nothing beyond
  // that is asserted. Prose INDICATIVE.
  spaPreview: {
    eyebrow: "The spa, on the estate",
    heading: "Somewhere to exhale.", // INDICATIVE
    body: "When the occasion is over and the estate goes quiet, take the time you rarely take — a slow, unhurried moment that belongs to no one but you. Tell us what rest looks like for you, and we'll help you find it here.", // INDICATIVE
    // Honest placeholder — spa photography is still required (docs/17 §3.5).
    imageNote: "Spa photography required · treatment detail / tranquil interior (shoot pending)",
    primary: { label: "Explore the Spa", href: routes.spa.href },
    secondary: { label: "Enquire", href: routes.contact.href },
  },

  // Homepage Dining preview — image-FIRST (the photograph does the emotional
  // work; copy supports). Sells the EXPERIENCE — gathering, shared meals,
  // conversation, hospitality — and the confirmed certified-halal welcome.
  // Name-NEUTRAL (restaurant trading name unconfirmed). NO invented menu,
  // cuisine, pricing, chefs or hours. Content rule: NO alcohol / wine / bar
  // (docs/17 §3.6). Prose INDICATIVE; certified-halal is BKB-confirmed.
  diningPreview: {
    eyebrow: "Dining on the estate",
    heading: "A long table, and everyone at it.", // INDICATIVE
    body: "The part of the day when the speeches soften into conversation and no one's in a hurry to leave — plates passed around a long table, and a certified halal kitchen that cooks for everyone at it, without anyone having to ask.", // INDICATIVE
    halalChip: "Certified halal · every guest",
    // Honest placeholder — dining photography still required (no alcohol / bar).
    imageNote: "Dining photography required · a set table on the estate (shoot pending)",
    primary: { label: "Explore Dining", href: routes.dining.href },
    secondary: { label: "Enquire", href: routes.contact.href },
  },

  // Homepage Gallery showcase — the emotional PEAK. NOT a grid: an editorial
  // mosaic that previews the breadth of the estate and invites exploration.
  // Image-first; copy minimal. Tiles reuse the labelled placeholder hues until
  // the curated gallery is shot (docs/17 §3.10) — every tile is a clear
  // placeholder. Prose INDICATIVE.
  galleryPreview: {
    eyebrow: "A closer look",
    heading: "One estate. Every kind of day.", // INDICATIVE
    lead: "A glimpse of the range — weddings to conferences, gardens to the glass hall. The curated gallery is being photographed for launch; every frame below is a placeholder.",
    // base = an existing placeholder gradient class; size drives the mosaic.
    tiles: [
      { label: "The glass hall", base: "hero-sky", size: "feature" as const },
      { label: "Weddings", base: "wed-image", size: "tall" as const },
      { label: "Conferences", base: "conf-image", size: "wide" as const },
      { label: "Gardens", base: "stay-detail", size: "wide" as const },
      { label: "Dining", base: "dine-image", size: "wide" as const },
    ],
    cta: { label: "Explore the gallery", href: routes.gallery.href },
  },

  // Homepage Reviews / Trust — the turn from emotion into conversion. Quiet,
  // editorial, confident — NOT a slider/cards/widget/wall of text. Answers one
  // question: "can I trust them with one of the most important occasions in my
  // life?" Review count, testimonials and grading are Gate-1 / consent items —
  // so the aggregate + quotes are ELEGANT, CLEARLY-TEMPORARY placeholders,
  // architected (data-* slots) to populate from live Google reviews later. No
  // AggregateRating schema until consented. Heading INDICATIVE.
  reviewsPreview: {
    eyebrow: "Trusted with the occasion",
    heading: "The day that matters most, in hands that have held it before.", // INDICATIVE
    ratingLabel: "Google reviews",
    ratingNote: "Live rating & count will appear here once connected",
    quotes: [
      {
        text: "One team, one point of contact — a celebration for hundreds that somehow felt effortless. Everything, and everyone, taken care of.",
        who: "Placeholder review",
      },
      {
        text: "The certified halal catering was handled without us ever having to ask, and the team treated our family as their own.",
        who: "Placeholder review",
      },
    ],
    note: "Elegant placeholders — real Google reviews will populate here once connected (pending consent & live sync).",
  },

  // Homepage Final CTA — the natural conclusion. NOT loud or salesy; the visitor
  // is already convinced. Image-first (a warm estate-at-golden-hour close,
  // bookending the dusk hero), minimal copy, "the next step is easy". Uses the
  // sitewide primary/secondary CTAs + the reassurance line (all from site.cta).
  finalCta: {
    eyebrow: "Come and see it",
    heading: "The next step is easy.", // INDICATIVE
    body: "Book a viewing, tell us your date, and one team takes it from there.", // INDICATIVE
    imageNote: "Photography placeholder · the estate at golden hour (to be shot)",
  },
} as const;

export type Site = typeof site;
