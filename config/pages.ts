/**
 * Velmoré — per-page content (config-driven; no copy hardcoded in page files).
 * Facts are BKB v0.2 confirmed. Prose marked INDICATIVE is placeholder voice
 * pending the copy stage. Nothing here is a fabricated fact: no invented menus,
 * rates, hours, chefs, operators or capacities beyond the confirmed venue
 * registry. Unconfirmed sub-brands (spa, restaurant) stay name-neutral.
 *
 * Confirmed venue registry (BKB): Suleman Convention Centre 1,300 · Bastille Hall
 * 650 · D'Charmant Glass Hall 550 · Laudium Ballroom 250 · Trisage Hall 300 ·
 * DeVoir Hall 150 · Martels Chapel 150 · Martels Dungeon 130 · Estate Gardens.
 * 50 bookable rooms · certified halal kitchen · Pretoria & Centurion.
 */

import { routes } from "./site";

const contact = routes.contact.href;

export const pages = {
  conferences: {
    hero: {
      eyebrow: "Conferences & residential events",
      title: "A conference for thirteen hundred, held by one team.", // INDICATIVE
      sub: "The largest hall in the area, executive breakaway rooms, fifty rooms for the night and a certified halal kitchen — one team, one invoice, from the first delegate to the last goodbye.", // INDICATIVE
      variant: "conferences" as const,
      note: "Conference photography required · the 1,300-seat hall (shoot pending)",
      chips: [
        { label: "Up to 1,300 delegates" },
        { label: "50 rooms on the estate" },
        { label: "Certified Halal", badge: true },
        { label: "One team · one invoice" },
      ],
      primary: { label: "Book a Viewing", href: contact, cta: "book_viewing", location: "conferences_hero" },
      secondary: { label: "Enquire for your date", href: contact, cta: "enquire_date", location: "conferences_hero" },
    },
    statement: {
      eyebrow: "One team, one invoice",
      heading: "A government or corporate conference arrives to one point of contact — not a dozen suppliers.", // INDICATIVE
      lead: "From the first enquiry to the last delegate leaving, the same team plans it, runs it and invoices it. No coordinating between caterers, venues and hotels — the estate holds all of it, in capable hands.", // INDICATIVE
    },
    scaleSplit: {
      eyebrow: "The scale",
      heading: "Thirteen hundred seats — the largest hall in the area.",
      body: [
        "At the Suleman Convention Centre, Velmoré seats up to 1,300 delegates under one roof — a kilometre and a half from the estate, and the largest hall in the area.",
        "On the estate itself, further halls host breakaway sessions and smaller meetings, so a multi-stream programme runs in one place, coordinated by one team.",
      ], // INDICATIVE
      points: [
        "1,300-seat plenary hall",
        "Estate halls for breakaways",
        "One coordinated programme",
        "Between Pretoria & Centurion",
      ],
      variant: "conferences" as const,
      note: "Conference photography required · plenary hall set (shoot pending)",
    },
    numbers: {
      eyebrow: "The numbers",
      heading: "Everything an important conference needs, in one place.",
      items: [
        { label: "1,300", note: "delegates, seated" },
        { label: "50", note: "rooms on the estate" },
        { label: "Halal", note: "certified kitchen" },
        { label: "1", note: "team · one invoice" },
      ],
    },
    residentialSplit: {
      eyebrow: "Residential",
      heading: "Fifty rooms, so the day doesn't end at the door.",
      body: [
        "Multi-day and residential programmes keep delegates on the estate: fifty rooms mean no shuttle to a separate hotel, and an early start that begins with breakfast, not a commute.",
        "The certified halal kitchen caters for everyone — as standard, without anyone having to ask.",
      ], // INDICATIVE
      points: ["50 rooms for residential sessions", "Certified-halal catering", "Gardens & grounds to reset", "One invoice for it all"],
      variant: "accommodation" as const,
      note: "Accommodation photography required · estate rooms (shoot pending)",
    },
    faq: {
      eyebrow: "The practical answers",
      heading: "What conference organisers ask first.",
      items: [
        {
          q: "How many delegates can you seat?",
          a: "Up to 1,300 in the Suleman Convention Centre — the largest hall in the area — with further halls on the estate for breakaway sessions and smaller meetings.",
        },
        {
          q: "Is it residential — can delegates stay over?",
          a: "Yes. Fifty rooms on the estate mean delegates can stay the night without moving to a separate hotel.",
        },
        {
          q: "Can you cater for halal requirements?",
          a: "Yes — the kitchen is certified halal and caters for every delegate as standard.",
        },
        {
          q: "Do we coordinate with multiple suppliers?",
          a: "No. One team plans, runs and invoices the whole event — a single point of contact from the first delegate to the last goodbye.",
        },
        {
          q: "Where are you located?",
          a: "On an estate between Pretoria and Centurion. Full directions are shared when you book a viewing.",
        },
      ],
    },
    cta: {
      heading: "Come and see the hall for yourself.", // INDICATIVE
      body: "Book a viewing, tell us your dates and delegate numbers, and one team takes it from there.", // INDICATIVE
      primary: { label: "Book a Viewing", href: contact, cta: "book_viewing", location: "conferences_cta" },
      secondary: { label: "Enquire for your date", href: contact, cta: "enquire_date", location: "conferences_cta" },
    },
  },

  weddings: {
    hero: {
      eyebrow: "Weddings on the estate",
      title: "A whole estate, given over to one day.", // INDICATIVE
      sub: "A chapel for the ceremony, chandeliers for the reception, gardens for the golden hour — and a certified halal kitchen and rooms for your guests, all held by one team.", // INDICATIVE
      variant: "weddings" as const,
      note: "Wedding photography required · a wedding on the estate (shoot pending)",
      chips: [
        { label: "Chapel & reception" },
        { label: "Gardens" },
        { label: "Rooms for guests" },
        { label: "Certified Halal", badge: true },
      ],
      primary: { label: "Book a Viewing", href: contact, cta: "book_viewing", location: "weddings_hero" },
      secondary: { label: "Enquire for your date", href: contact, cta: "enquire_date", location: "weddings_hero" },
    },
    statement: {
      eyebrow: "The day that matters most",
      heading: "This is where one of the biggest days of your life belongs.", // INDICATIVE
      lead: "Not a room you hire for a few hours — a whole French-Provence estate given over to one day, and to everyone in it, from the first arrival to the last dance.", // INDICATIVE
    },
    ceremonySplit: {
      eyebrow: "The ceremony",
      heading: "A chapel on the estate, for the vows.",
      body: [
        "The Martels Chapel holds the ceremony — an intimate, dedicated space for the moment everything turns on, without borrowing a corner of a bigger room.",
        "Steps away, the reception waits: no convoy across town between the vows and the celebration.",
      ], // INDICATIVE
      points: ["The Martels Chapel", "Intimate & dedicated", "Steps from the reception", "Gardens for the photographs"],
      variant: "weddings" as const,
      note: "Wedding photography required · the chapel (shoot pending)",
      portrait: true,
    },
    receptionSplit: {
      eyebrow: "The reception",
      heading: "Chandeliers, glass and garden light.",
      body: [
        "The D'Charmant Glass Hall receives the reception beneath its chandeliers — glass on three sides, the gardens glowing at dusk, a room built to be photographed.",
        "For larger celebrations, further halls on the estate seat the whole guest list — the same team, the same certified halal kitchen, one invoice.",
      ], // INDICATIVE
      points: ["The D'Charmant Glass Hall", "Chandeliers & glass", "Larger halls available", "One team · one invoice"],
      variant: "hero" as const,
      note: "Wedding photography required · the glass hall at dusk (shoot pending)",
    },
    gardensBand: {
      eyebrow: "The golden hour",
      heading: "Gardens made for the photographs.",
      body: "When the light softens, the estate gardens do the work no styling can — the frames you'll keep, made on the grounds you married on.", // INDICATIVE
      variant: "gardens" as const,
      note: "Garden photography required · estate gardens at golden hour (shoot pending)",
      align: "center" as const,
    },
    heldSplit: {
      eyebrow: "Everyone, held",
      heading: "Rooms for your guests. Catering for all of them.",
      body: [
        "Fifty rooms on the estate mean your guests stay the night — no one drives home, and the celebration doesn't end at the door.",
        "The certified halal kitchen caters for every guest as standard, so no one at your wedding is an afterthought.",
      ], // INDICATIVE
      points: ["50 rooms for guests", "Certified-halal catering", "One team, start to finish", "Private venue viewings"],
      variant: "accommodation" as const,
      note: "Accommodation photography required · estate rooms (shoot pending)",
    },
    numbers: {
      eyebrow: "The spaces",
      heading: "Room for the whole guest list.",
      items: [
        { label: "Chapel", note: "for the ceremony" },
        { label: "Glass hall", note: "for the reception" },
        { label: "50", note: "rooms for guests" },
        { label: "Halal", note: "certified kitchen" },
      ],
    },
    faq: {
      eyebrow: "The questions couples ask",
      heading: "What you'll want to know first.",
      items: [
        {
          q: "Is the catering halal?",
          a: "Yes — the kitchen is certified halal and caters for every guest as standard, without you having to ask.",
        },
        {
          q: "Can our guests stay the night?",
          a: "Yes. Fifty rooms on the estate mean your guests don't have to drive home after the celebration.",
        },
        {
          q: "Do you have space for a large wedding?",
          a: "Yes — beyond the chapel and the glass hall, further halls on the estate seat larger guest lists, all run by the same team.",
        },
        {
          q: "Do we deal with separate suppliers for venue, catering and rooms?",
          a: "No. One team holds the venue, the certified-halal catering and the accommodation — one point of contact, one invoice.",
        },
        {
          q: "Can we come and see it?",
          a: "Yes — book a viewing and we'll walk you through the estate. We reply the same business day.",
        },
      ],
    },
    cta: {
      heading: "Come and picture your day here.", // INDICATIVE
      body: "Book a viewing, tell us your date, and one team takes it from there.", // INDICATIVE
      primary: { label: "Book a Viewing", href: contact, cta: "book_viewing", location: "weddings_cta" },
      secondary: { label: "Enquire for your date", href: contact, cta: "enquire_date", location: "weddings_cta" },
    },
  },

  accommodation: {
    hero: {
      eyebrow: "Stay on the estate",
      title: "Everything is here. No need to leave.", // INDICATIVE
      sub: "Fifty rooms on the estate — with gardens, a pool and a spa — so your guests, your delegates and you stay close to the occasion, between Pretoria and Centurion.", // INDICATIVE (facts confirmed)
      variant: "accommodation" as const,
      note: "Accommodation photography required · estate rooms (shoot pending)",
      chips: [
        { label: "50 rooms on the estate" },
        { label: "Gardens, pool & spa" },
        { label: "Certified Halal", badge: true },
        { label: "Pretoria & Centurion" },
      ],
      primary: { label: "Check Availability", href: contact, cta: "check_availability", location: "accommodation_hero" },
      secondary: { label: "Enquire for your date", href: contact, cta: "enquire_date", location: "accommodation_hero" },
    },
    statement: {
      eyebrow: "Rest, on the estate",
      heading: "When the occasion ends, the estate doesn't.", // INDICATIVE
      lead: "Fifty rooms on the grounds keep everyone close to the celebration — no drive home, no rush, just gardens to wake up to and the estate still around you.", // INDICATIVE
    },
    roomsSplit: {
      eyebrow: "The rooms",
      heading: "Calm, light-filled rooms on the estate.",
      body: [
        "Fifty rooms sit on the estate itself — restful, private and a short walk from wherever your occasion is held.",
        "Stay the night after a wedding, settle in for a residential conference, or simply take a slow weekend on the grounds.",
      ], // INDICATIVE
      points: ["50 rooms on the estate", "Gardens & grounds", "Steps from the occasion", "Certified-halal dining"],
      variant: "accommodation" as const,
      note: "Accommodation photography required · a room on the estate (shoot pending)",
    },
    estateSplit: {
      eyebrow: "Around your stay",
      heading: "Gardens, a pool and a spa — a step away.",
      body: [
        "The stay isn't just a room. Gardens to walk, a pool on the estate, and a spa for a slower morning are all part of being here.",
        "The certified halal kitchen caters for every guest, so no one has to leave the estate to eat well.",
      ], // INDICATIVE (facts confirmed)
      points: ["Estate gardens", "Pool on the estate", "A spa on the grounds", "Certified-halal dining"],
      variant: "gardens" as const,
      note: "Estate photography required · gardens & grounds (shoot pending)",
    },
    guestsSplit: {
      eyebrow: "For your guests & delegates",
      heading: "Keep everyone close to the occasion.",
      body: [
        "For weddings, fifty rooms mean your guests don't drive home after the celebration. For residential conferences, delegates stay where the sessions are — no shuttle to a separate hotel.",
        "One team, one estate, one invoice — the stay is part of the occasion, not a separate booking to chase.",
      ], // INDICATIVE
      points: ["Wedding-guest accommodation", "Residential conferences", "One team · one invoice", "On the estate"],
      variant: "estate" as const,
      note: "Estate photography required · arrival & grounds (shoot pending)",
    },
    numbers: {
      eyebrow: "The estate stay",
      heading: "Everything, on the grounds.",
      items: [
        { label: "50", note: "rooms on the estate" },
        { label: "Gardens", note: "to wake up to" },
        { label: "Spa", note: "on the grounds" },
        { label: "Halal", note: "certified kitchen" },
      ],
    },
    faq: {
      eyebrow: "Before you book",
      heading: "What guests ask about staying.",
      items: [
        {
          q: "Are the rooms on the estate itself?",
          a: "Yes — the fifty rooms are on the estate, a short walk from where occasions are held, between Pretoria and Centurion.",
        },
        {
          q: "Can our wedding guests or delegates stay over?",
          a: "Yes. Fifty rooms mean wedding guests and conference delegates can stay the night without moving to a separate hotel.",
        },
        {
          q: "Is the catering halal?",
          a: "Yes — the estate kitchen is certified halal and caters for every guest as standard.",
        },
        {
          q: "What are your rates and availability?",
          a: "Rates depend on your dates and group. Tell us what you need and we'll come back to you the same business day.",
        },
      ],
    },
    cta: {
      heading: "Come and see where you'll stay.", // INDICATIVE
      body: "Tell us your dates and group, and one team takes it from there.", // INDICATIVE
      primary: { label: "Check Availability", href: contact, cta: "check_availability", location: "accommodation_cta" },
      secondary: { label: "Enquire for your date", href: contact, cta: "enquire_date", location: "accommodation_cta" },
    },
  },

  // Dining — NAME-NEUTRAL (restaurant name unconfirmed). Sells the EXPERIENCE +
  // the confirmed certified-halal welcome. NO invented menu/cuisine/pricing/
  // chefs/hours; NO alcohol/bar (docs/17 §3.6).
  dining: {
    hero: {
      eyebrow: "Dining on the estate",
      title: "A long table, and everyone at it.", // INDICATIVE
      sub: "The gathering at the heart of every occasion — plates shared, conversation unhurried, and a certified halal kitchen that cooks for everyone at the table.", // INDICATIVE
      variant: "dining" as const,
      note: "Dining photography required · a set table on the estate (shoot pending)",
      chips: [{ label: "Certified Halal", badge: true }, { label: "For every guest" }, { label: "On the estate" }],
      primary: { label: "Book a Viewing", href: contact, cta: "book_viewing", location: "dining_hero" },
      secondary: { label: "Enquire for your date", href: contact, cta: "enquire_date", location: "dining_hero" },
    },
    statement: {
      eyebrow: "The gathering",
      heading: "The part of the day when the speeches soften into conversation.", // INDICATIVE
      lead: "Dining on the estate isn't a course to get through — it's the table everyone remembers, catered for every guest, without anyone having to ask.", // INDICATIVE
    },
    tableSplit: {
      eyebrow: "Shared tables",
      heading: "Made for gathering, not just eating.",
      body: [
        "Whether it's a wedding reception, a conference lunch or a family celebration, the estate sets the table for the whole party — together, in one room.",
        "One kitchen, one team, one invoice: dining is part of the occasion, not a supplier to coordinate.",
      ], // INDICATIVE
      points: ["Weddings & receptions", "Conference catering", "Private celebrations", "One team · one invoice"],
      variant: "dining" as const,
      note: "Dining photography required · a set table (shoot pending)",
    },
    halalBand: {
      eyebrow: "Certified halal",
      heading: "A kitchen that cooks for everyone at the table.",
      body: "The kitchen is certified halal — so every guest is catered for as standard, and no one at your occasion is an afterthought.", // INDICATIVE (fact confirmed)
      variant: "dining" as const,
      note: "Dining photography required · plated food (shoot pending)",
      chip: "Certified halal · every guest",
      align: "center" as const,
    },
    faq: {
      eyebrow: "About dining",
      heading: "What guests ask about the food.",
      items: [
        { q: "Is the kitchen halal?", a: "Yes — the kitchen is certified halal and caters for every guest as standard." },
        {
          q: "Do you cater weddings, conferences and events?",
          a: "Yes — the same estate kitchen caters weddings, conferences and private celebrations, all run by one team.",
        },
        {
          q: "Can we see a menu and pricing?",
          a: "Menus are tailored to your occasion and guest numbers. Tell us what you're planning and we'll put something together — we reply the same business day.",
        },
      ],
    },
    cta: {
      heading: "Come and taste the estate.", // INDICATIVE
      body: "Tell us your occasion and numbers, and one team takes it from there.", // INDICATIVE
      primary: { label: "Book a Viewing", href: contact, cta: "book_viewing", location: "dining_cta" },
      secondary: { label: "Enquire for your date", href: contact, cta: "enquire_date", location: "dining_cta" },
    },
  },

  // Spa — NAME-NEUTRAL; EMOTIONAL ROLE ONLY. Asserts NO services/treatments/
  // pricing/hours/product brands/facilities/packages. The estate has a spa
  // (confirmed — in "Velmoré Hotel & Spa"); nothing more is claimed.
  spa: {
    hero: {
      eyebrow: "The spa, on the estate",
      title: "Somewhere to exhale.", // INDICATIVE
      sub: "When the occasion is over and the estate goes quiet, take the time you rarely take — a slow, unhurried moment that belongs to no one but you.", // INDICATIVE
      variant: "spa" as const,
      note: "Spa photography required · treatment detail / tranquil interior (shoot pending)",
      chips: [{ label: "On the estate" }],
      primary: { label: "Enquire", href: contact, cta: "spa_enquire", location: "spa_hero" },
      secondary: { label: "Book a Viewing", href: contact, cta: "book_viewing", location: "spa_hero" },
    },
    statement: {
      eyebrow: "Stillness",
      heading: "Rest, held — on the same estate as the occasion.", // INDICATIVE
      lead: "Stay a little longer, slow the morning down, and let the estate look after you. Tell us what rest looks like for you, and we'll help you find it here.", // INDICATIVE
    },
    band: {
      eyebrow: "Time for yourself",
      heading: "The estate, quietly looking after you.",
      body: "A quiet corner of the estate for the slower part of your stay — the pause after the celebration, or a reason to arrive early.", // INDICATIVE
      variant: "spa" as const,
      note: "Spa photography required · tranquil interior (shoot pending)",
      align: "center" as const,
    },
    faq: {
      eyebrow: "About the spa",
      heading: "What you might be wondering.",
      items: [
        {
          q: "What treatments does the spa offer?",
          a: "The spa's treatment offering is being finalised. Tell us what you're looking for and we'll share what's available — we reply the same business day.",
        },
        { q: "Is the spa on the estate?", a: "Yes — the spa is on the estate, part of your stay between Pretoria and Centurion." },
        {
          q: "Can I book a visit?",
          a: "Enquire with your dates and we'll arrange it and confirm the details with you directly.",
        },
      ],
    },
    cta: {
      heading: "Give yourself the slower morning.", // INDICATIVE
      body: "Tell us your dates, and one team takes it from there.", // INDICATIVE
      primary: { label: "Enquire", href: contact, cta: "spa_enquire", location: "spa_cta" },
      secondary: { label: "Book a Viewing", href: contact, cta: "book_viewing", location: "spa_cta" },
    },
  },
} as const;
