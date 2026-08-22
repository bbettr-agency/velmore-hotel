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
import { img } from "./images";

const contact = routes.contact.href;
// The estate spa is operated by Allura Day Spa — spa enquiries link out to their site.
const alluraSpa = "https://www.alluradayspa.com/";

export const pages = {
  conferences: {
    hero: {
      eyebrow: "Conferences & residential events",
      title: "A conference for thirteen hundred, held by one team.", // INDICATIVE
      sub: "The largest hall in the area, executive breakaway rooms, fifty rooms for the night and a certified halal kitchen — one team, one invoice, from the first delegate to the last goodbye.", // INDICATIVE
      variant: "conferences" as const,
      note: "Conference hero · the D'Charmont glass hall set for an event",
      image: img.conferencesHero,
      chips: [
        { label: "Up to 1,300 delegates" },
        { label: "50 rooms on the estate" },
        { label: "Certified Halal", badge: true },
        { label: "Pretoria & Centurion" },
      ],
      primary: { label: "Book a Venue Viewing", href: "#book-viewing", cta: "book_viewing", location: "conferences_hero" },
      secondary: { label: "Explore the Venues", href: "#venues", cta: "explore_venues", location: "conferences_hero" },
    },
    // Trusted-by marquee — a restrained credibility strip directly below the hero.
    // Wording is a plain statement of fact (organisations whose events the estate
    // has hosted), never a claim of partnership, endorsement or clientele.
    trustedBy: {
      line: "Organisations we've welcomed to the estate",
      logos: [img.logoTelkom, img.logoExxaro, img.logoNsfIcm, img.logoCrossBorder, img.logoKitKat, img.logoNomad],
    },
    statement: {
      eyebrow: "One team, one invoice",
      heading: "A government or corporate conference arrives to one point of contact — not a dozen suppliers.", // INDICATIVE
      lead: "From the first enquiry to the last delegate leaving, the same team plans it, runs it and invoices it — no coordinating between caterers, venues and hotels. Planning in-house or sourcing on behalf of a client, it's the same one team from the first walkthrough to event day: Velmoré works with corporate organisers and professional event partners alike.", // INDICATIVE
    },
    venuesIntro: {
      eyebrow: "The venues",
      heading: "Explore the spaces.",
      // Compactly resolves the 1,300 figure: estate venues up to 500, plus the
      // Suleman Convention Centre for the largest events (confirmed BKB facts).
      lead: "Six settings on and around the estate host up to 500 guests — with capacity for up to 1,300 delegates at the Suleman Convention Centre, a kilometre and a half away. Each is held by the same team, on one invoice.", // INDICATIVE
    },
    // Per-venue photography (exterior-first where an exterior exists). Copy is
    // deliberately restrained: only confirmed capacities (BKB registry) appear as
    // points; venues without a confirmed capacity carry none. Single-image venues
    // render one photo (no carousel); 2+ images become a carousel.
    // Client-confirmed capacities (2026-08-15) drive the venue explorer tabs.
    venues: [
      {
        eyebrow: "Glass hall",
        heading: "D' Charmont",
        slug: "dcharmont",
        capacity: "Up to 500 guests",
        body: ["Glass on every side and chandeliers overhead — the estate's signature hall, built to be photographed."], // INDICATIVE
        points: ["Glass hall & gardens", "The estate's signature space"],
        variant: "conferences" as const,
        note: "D'Charmont glass hall",
        images: [img.dcharmont1, img.dcharmont2, img.dcharmont3, img.dcharmont4, img.dcharmont5, img.dcharmont6],
      },
      {
        eyebrow: "Grand hall",
        heading: "Bastille",
        slug: "bastille",
        capacity: "Up to 320 guests",
        body: ["A grand chandeliered hall with room to seat a celebration or a conference at scale."], // INDICATIVE
        points: ["Chandeliered hall", "Seated at scale"],
        variant: "conferences" as const,
        note: "Bastille hall",
        // Lead image = the seated-conference shot moved from the old Scale section;
        // bastille-2-set was a near-duplicate of it, so it's dropped to avoid a
        // repetitive carousel. Sequence: conference in use → grand hall → full scale.
        images: [img.conferenceSeated, img.bastille3, img.bastille1],
      },
      {
        eyebrow: "Banquet hall",
        heading: "Trisage",
        slug: "trisage",
        capacity: "Up to 200 guests",
        body: ["A dressed banquet hall beneath chandeliers, made for a seated function."], // INDICATIVE
        points: ["Seated banquets", "Chandeliered setting"],
        variant: "conferences" as const,
        note: "Trisage hall",
        images: [img.trisage1, img.trisage2, img.trisage3],
      },
      {
        eyebrow: "Chapel & gardens",
        heading: "Martels",
        slug: "martels",
        capacity: "Up to 150 guests",
        body: ["A brick chapel and gardens for the moments that ask for something more intimate."], // INDICATIVE
        points: ["The Chapel & the Dungeon", "Intimate gatherings"],
        variant: "conferences" as const,
        note: "Martels",
        images: [img.martels1, img.martels2],
      },
      {
        eyebrow: "On the estate",
        heading: "The Vieux Cheval",
        slug: "vieux-cheval",
        capacity: "Up to 60 guests",
        body: ["A quieter setting on the estate, framed by lawns and old trees."], // INDICATIVE
        points: ["A quieter setting", "Framed by the gardens"],
        variant: "conferences" as const,
        note: "The Vieux Cheval",
        images: [img.vieuxCheval],
      },
      {
        eyebrow: "Boardroom",
        heading: "Voltaire & Satre",
        slug: "voltaire-satre",
        capacity: "Up to 50 guests",
        tabNote: "Hotel conference rooms",
        body: ["Hotel conference rooms for executive meetings and breakaway sessions."], // INDICATIVE
        points: ["Breakaway sessions", "Executive meetings"],
        variant: "conferences" as const,
        note: "Voltaire & Satre boardroom",
        images: [img.voltaireSatre],
      },
    ],
    // Mid-page viewing prompt — the natural next step after the venue photography.
    // Real occasions — visual proof gallery (first image = D'Charmont). Photography
    // leads; captions are minimal. All images are real Velmoré event photography.
    pastEvents: {
      eyebrow: "Real occasions",
      heading: "The spaces, in action.",
      lead: "Set tables, full halls and the evenings that follow — real occasions on the estate, so you can picture your own.", // INDICATIVE
      cta: { label: "Book a Venue Viewing", href: "#book-viewing" },
      // Per-slide object-position: images fill the frame (object-cover), so the
      // focal point is nudged where a centre crop would otherwise clip a subject
      // (faces biased slightly up; the welcome signage kept toward the left).
      slides: [
        { image: img.eventDcharmontSet, caption: "D'Charmont, set for the day", position: "50% 42%" },
        { image: img.eventHallStage, caption: "The grand hall, staged", position: "50% 50%" },
        { image: img.eventWelcome, caption: "Arrival on the estate", position: "42% 50%" },
        { image: img.eventCatering, caption: "Catered on the estate", position: "50% 45%" },
        { image: img.eventGuestsBackdrop, caption: "The occasion", position: "50% 40%" },
        { image: img.eventPodium, caption: "On stage", position: "50% 32%" },
        { image: img.eventToast, caption: "Together", position: "50% 38%" },
        { image: img.eventEvening, caption: "Into the evening", position: "50% 42%" },
        { image: img.eventLit, caption: "After dark", position: "50% 38%" },
        { image: img.eventHallSet, caption: "Set beneath the glass", position: "50% 50%" },
        { image: img.eventHallWarm, caption: "Ready for guests", position: "50% 45%" },
        { image: img.eventChandelier, caption: "Overhead", position: "50% 45%" },
      ],
    },
    midCta: {
      eyebrow: "Come and see it",
      heading: "Better seen in person.", // INDICATIVE
      body: "Walk the spaces, see the setups and find the venue that fits your conference — one team takes it from there.", // INDICATIVE
      image: img.conferencesEstate,
      primary: { label: "Book a Venue Viewing", href: "#book-viewing", cta: "book_viewing", location: "conferences_mid" },
    },
    // More than a venue — accommodation + certified-halal catering, compact.
    moreThanVenue: {
      eyebrow: "More than a venue",
      heading: "Conference. Dinner. Stay. Breakfast. All on one estate.",
      lead: "For multi-day and residential programmes, delegates never have to leave — accommodation and a certified-halal kitchen are on the estate, held by the same team.", // INDICATIVE
      cards: [
        {
          eyebrow: "Stay on the estate",
          heading: "Fifty rooms, a short walk from the hall.",
          body: "Multi-day programmes keep delegates on the grounds — no shuttle to a separate hotel, and a start that begins with breakfast, not a commute.", // INDICATIVE
          image: img.deluxeRoomView,
          link: { label: "View accommodation", href: routes.accommodation.href },
        },
        {
          eyebrow: "Certified-halal catering",
          heading: "One kitchen that caters for every delegate.",
          body: "The estate's certified-halal kitchen caters for everyone as standard — no separate arrangements, no delegate left out.", // INDICATIVE
          image: img.grazingTable,
        },
      ],
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
          q: "Do you work with event agencies and professional organisers?",
          a: "Yes. We work with corporate organisers, internal event teams and professional event agencies sourcing on behalf of a client — book a viewing and one team walks you through the spaces.",
        },
        {
          q: "Where are you located?",
          a: "On an estate between Pretoria and Centurion. Full directions are shared when you book a viewing.",
        },
      ],
    },
    // Final conversion — the on-page viewing-request form (id="book-viewing").
    viewing: {
      eyebrow: "Book a venue viewing",
      heading: "Come and see the venues for yourself.", // INDICATIVE
      intro: "Tell us a little about your event and a viewing time that suits — one team walks you through the spaces on the estate. We reply the same business day, and there's no obligation.", // INDICATIVE
      points: [
        "Walk the individual venues in person",
        "See the estate, catering and accommodation",
        "Meet the team who would run your event",
      ],
      image: img.entranceSignage,
    },
  },

  weddings: {
    hero: {
      eyebrow: "Weddings on the estate",
      title: "A whole estate, given over to one day.", // INDICATIVE
      sub: "A chapel for the ceremony, chandeliers for the reception, gardens for the golden hour — and a certified halal kitchen and rooms for your guests, all held by one team.", // INDICATIVE
      variant: "weddings" as const,
      note: "Wedding photography required · a wedding on the estate (shoot pending)",
      image: img.weddingGlassHall,
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
      image: img.ceremonyArch,
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
      image: img.receptionLounge,
    },
    gardensBand: {
      eyebrow: "The golden hour",
      heading: "Gardens made for the photographs.",
      body: "When the light softens, the estate gardens do the work no styling can — the frames you'll keep, made on the grounds you married on.", // INDICATIVE
      variant: "gardens" as const,
      note: "Garden photography required · estate gardens at golden hour (shoot pending)",
      image: img.gardensStreamArchway,
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
      image: img.deluxeRoomView,
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
      image: img.estateThroughTrees,
      primary: { label: "Book a Viewing", href: contact, cta: "book_viewing", location: "weddings_cta" },
      secondary: { label: "Enquire for your date", href: contact, cta: "enquire_date", location: "weddings_cta" },
    },
  },

  accommodation: {
    hero: {
      eyebrow: "Stay on the estate",
      title: "Fifty rooms. One estate. No need to leave.", // INDICATIVE
      sub: "From the flagship Presidential Suite to easy twin rooms — restful, estate-toned rooms a short walk from wherever your occasion is held, between Pretoria and Centurion.", // INDICATIVE (facts confirmed)
      variant: "accommodation" as const,
      note: "Accommodation photography · Presidential Suite",
      image: img.presidentialSuite,
      chips: [
        { label: "50 rooms on the estate" },
        { label: "Suites to twins" },
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
    // Four room types — photography-led. Copy is elegant and confirmed-safe:
    // no invented bed configurations, rates, sizes or amenities (those are TO
    // CONFIRM). Only what the photography and the confirmed estate facts support.
    rooms: [
      {
        eyebrow: "The Presidential Suite",
        heading: "The estate's most generous room.",
        body: [
          "The flagship of the estate — a suite dressed in deep tones, a tufted headboard and quiet, considered luxury, for the guest of honour or the occasion that deserves a little more room.",
          "The most spacious way to stay, a few steps from wherever the celebration is held.",
        ], // INDICATIVE
        points: ["The estate's flagship suite", "En-suite bathroom", "On the estate", "Certified-halal dining"],
        variant: "accommodation" as const,
        note: "Accommodation photography · Presidential Suite",
        image: img.presidentialBed,
        images: [img.presidentialBed, img.presidentialLounge, img.presidentialBath, img.presidentialBath2],
        price: { amount: "R3,500", unit: "per night", note: "Including breakfast for 2 guests" }, // CONFIRMED (client-supplied rate)
      },
      {
        eyebrow: "The Deluxe Room",
        heading: "Light, space and a view of the estate.",
        body: [
          "A generous room that opens onto a private balcony and the estate beyond — soft light, estate-toned comfort and room to settle in for more than a night.",
          "The easy choice for couples, and for guests who like a little more space.",
        ], // INDICATIVE
        points: ["Private balcony", "Estate views", "En-suite bathroom", "On the estate"],
        variant: "accommodation" as const,
        note: "Accommodation photography · Deluxe Room",
        image: img.deluxeBed,
        images: [img.deluxeBed, img.deluxeBath, img.deluxeBath2],
        price: { amount: "R1,550", unit: "per night", note: "Including breakfast for 2 guests" }, // CONFIRMED (client-supplied rate)
      },
      {
        eyebrow: "The Standard Room",
        heading: "Calm, comfortable, everything the night asks for.",
        body: [
          "A restful room, warm and quietly styled, a short walk from wherever your occasion is held — comfortable for a wedding guest, easy for a conference delegate.",
          "Everything you need for the night, and the whole estate beyond the door.",
        ], // INDICATIVE
        points: ["Warm & restful", "Work desk", "En-suite bathroom", "On the estate"],
        variant: "accommodation" as const,
        note: "Accommodation photography · Standard Room",
        image: img.standardBed,
        images: [img.standardBed, img.standardRoomView, img.standardDetail],
        price: { amount: "R1,300", unit: "per night", note: "Including breakfast for 2 guests" }, // CONFIRMED (client-supplied rate)
      },
      {
        eyebrow: "The Twin Room",
        heading: "Two beds, for the people you arrive with.",
        body: [
          "Two comfortable beds in one calm, estate-toned room — for friends sharing a wedding weekend, colleagues at a residential conference, or family staying close.",
          "The same estate comfort, made for two.",
        ], // INDICATIVE
        points: ["Two beds", "En-suite bathroom", "Estate-toned styling", "On the estate"],
        variant: "accommodation" as const,
        note: "Accommodation photography · Twin Room",
        image: img.twinRoom,
        price: { amount: "R1,850", unit: "per night", note: "Including breakfast for 2 guests" }, // CONFIRMED (client-supplied rate)
      },
    ],
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
      image: img.gardensPergola,
    },
    numbers: {
      eyebrow: "The estate stay",
      heading: "Everything, on the grounds.",
      items: [
        { label: "50", note: "rooms on the estate" },
        { label: "4", note: "room types · suites to twins" },
        { label: "Venues", note: "and conference centres" },
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
      image: img.deluxeRoom,
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
      note: "Dining photography · the estate dining room",
      image: img.diningRoom,
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
      image: img.functionHall,
    },
    halalBand: {
      eyebrow: "Certified halal",
      heading: "A kitchen that cooks for everyone at the table.",
      body: "The kitchen is certified halal — so every guest is catered for as standard, and no one at your occasion is an afterthought.", // INDICATIVE (fact confirmed)
      variant: "dining" as const,
      note: "Dining photography · certified-halal catering",
      image: img.canapes,
      chip: "Certified halal · every guest",
      align: "center" as const,
    },
    foodGallery: {
      eyebrow: "From the kitchen",
      heading: "Catered for every guest, at every scale.",
      note: "Real Velmoré catering. Certified halal — for every guest, without being asked.",
      tiles: [
        { label: "Grazing tables", variant: "dining" as const, image: img.grazingTable },
        { label: "Canapés", variant: "dining" as const, image: img.canapes },
        { label: "Fresh platters", variant: "dining" as const, image: img.fruitPlatter },
        { label: "Buffet spreads", variant: "dining" as const, image: img.buffetSpread },
        { label: "Celebration catering", variant: "dining" as const, image: img.celebrationCatering },
        { label: "The gathering", variant: "dining" as const, image: img.diningGathering },
      ],
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
      image: img.celebrationCatering,
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
      note: "Spa photography · robe corridor",
      image: img.spaRobes,
      chips: [{ label: "On the estate" }, { label: "By Allura Day Spa" }],
      primary: { label: "Enquire at Allura Day Spa", href: alluraSpa, cta: "spa_enquire", location: "spa_hero" },
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
      image: img.spaTreatmentTwin,
      align: "center" as const,
    },
    gallery: {
      eyebrow: "Inside the spa",
      heading: "Marble, green and quiet.",
      note: "The spa on the Velmoré estate, operated by Allura Day Spa.",
      tiles: [
        { label: "Treatment detail", variant: "spa" as const, image: img.spaTreatmentDetail },
        { label: "Reception", variant: "spa" as const, image: img.spaReception },
        { label: "Relaxation lounge", variant: "spa" as const, image: img.spaLounge },
        { label: "The colonnade", variant: "spa" as const, image: img.spaColonnade },
        { label: "The entrance", variant: "spa" as const, image: img.spaEntrance },
        { label: "A slower morning", variant: "spa" as const, image: img.spaRelaxation },
      ],
    },
    faq: {
      eyebrow: "About the spa",
      heading: "What you might be wondering.",
      items: [
        {
          q: "What treatments does the spa offer?",
          a: "Manicures and pedicures, body treatments, facials, waxing, and laser hair removal for both men and women. To book a treatment or ask about anything specific, enquire with Allura Day Spa directly.",
        },
        { q: "Is the spa on the estate?", a: "Yes — the spa is on the estate, part of your stay between Pretoria and Centurion." },
        {
          q: "Can I book a visit?",
          a: "Spa bookings are looked after by Allura Day Spa, who operate the spa on the estate — enquire with them directly and they'll confirm your treatment and time.",
        },
      ],
    },
    cta: {
      heading: "Give yourself the slower morning.", // INDICATIVE
      body: "Allura Day Spa looks after the spa on the estate — enquire with them directly.", // INDICATIVE
      image: img.spaExterior,
      primary: { label: "Enquire at Allura Day Spa", href: alluraSpa, cta: "spa_enquire", location: "spa_cta" },
      secondary: { label: "Book a Viewing", href: contact, cta: "book_viewing", location: "spa_cta" },
    },
  },

  events: {
    hero: {
      eyebrow: "Celebrations & functions",
      title: "Every celebration, held on the estate.", // INDICATIVE
      sub: "Year-end functions, matric farewells, milestones and private celebrations — halls that seat an intimate dinner or hundreds, a certified halal kitchen, and one team from the first guest to the last.", // INDICATIVE
      variant: "estate" as const,
      note: "Events photography required · a function on the estate (shoot pending)",
      image: img.functionHall,
      chips: [{ label: "Year-end functions" }, { label: "Matric farewells" }, { label: "Certified Halal", badge: true }],
      primary: { label: "Book a Viewing", href: contact, cta: "book_viewing", location: "events_hero" },
      secondary: { label: "Enquire for your date", href: contact, cta: "enquire_date", location: "events_hero" },
    },
    statement: {
      eyebrow: "The occasion, held",
      heading: "The celebration is yours. The logistics are ours.", // INDICATIVE
      lead: "Whatever the reason to gather, the estate holds it — the venue, the catering and the rooms — so the day feels like a celebration, not a project to manage.", // INDICATIVE
    },
    occasionsSplit: {
      eyebrow: "The occasions",
      heading: "Whatever you're marking, there's a room for it.",
      body: [
        "Year-end functions and awards evenings, matric farewells, birthdays, anniversaries and family milestones — the estate hosts the celebrations that matter.",
        "One team plans and runs it, with a certified halal kitchen catering for everyone in the room.",
      ], // INDICATIVE
      points: ["Year-end functions", "Matric farewells", "Milestones & birthdays", "Private celebrations"],
      variant: "weddings" as const,
      note: "Events photography required · a celebration set (shoot pending)",
      image: img.functionSet,
    },
    scaleSplit: {
      eyebrow: "The scale",
      heading: "From an intimate dinner to hundreds.",
      body: [
        "The estate's halls flex from a private dinner to a function for hundreds — and, at the Suleman Convention Centre, up to 1,300 for the largest events.",
        "One estate, one team, one invoice — the celebration stays in one place.",
      ], // INDICATIVE (capacities confirmed)
      points: ["Intimate to hundreds", "Up to 1,300 at the SCC", "Certified-halal catering", "One team · one invoice"],
      variant: "conferences" as const,
      note: "Events photography required · a hall set for a function (shoot pending)",
      image: img.celebrationCatering,
    },
    band: {
      eyebrow: "One team",
      heading: "One point of contact, from invitation to last dance.",
      body: "The venue, the catering and the rooms — held by the same team, on one invoice, so nothing falls between suppliers.", // INDICATIVE
      variant: "estate" as const,
      note: "Events photography required · the estate at night (shoot pending)",
      image: img.estateFacadeDrive,
      chip: "Certified halal · every guest",
      align: "center" as const,
    },
    faq: {
      eyebrow: "Planning your function",
      heading: "What organisers ask first.",
      items: [
        { q: "What kinds of events do you host?", a: "Year-end functions, matric farewells, milestone birthdays, anniversaries and private celebrations — from intimate dinners to large functions." },
        { q: "How many guests can you host?", a: "From an intimate dinner to hundreds on the estate, and up to 1,300 at the Suleman Convention Centre for the largest events." },
        { q: "Is the catering halal?", a: "Yes — the kitchen is certified halal and caters for every guest as standard." },
        { q: "Can guests stay over?", a: "Yes — fifty rooms on the estate mean guests can stay the night." },
      ],
    },
    cta: {
      heading: "Let's plan the celebration.", // INDICATIVE
      body: "Tell us the occasion, the date and the numbers, and one team takes it from there.", // INDICATIVE
      image: img.arrivalForecourt,
      primary: { label: "Book a Viewing", href: contact, cta: "book_viewing", location: "events_cta" },
      secondary: { label: "Enquire for your date", href: contact, cta: "enquire_date", location: "events_cta" },
    },
  },

  about: {
    hero: {
      eyebrow: "One estate, one team",
      title: "The whole occasion — held in one place.", // INDICATIVE
      sub: "Velmoré Hotel & Spa is the flagship of the Velmore Hospitality Group — a French-Provence estate for weddings, conferences and celebrations, between Pretoria and Centurion.", // INDICATIVE (facts confirmed)
      variant: "estate" as const,
      note: "Estate photography required · the estate exterior (shoot pending)",
      image: img.estateFacade,
      chips: [{ label: "Weddings · conferences · events" }, { label: "50 rooms" }, { label: "Certified Halal", badge: true }],
      primary: { label: "Book a Viewing", href: contact, cta: "book_viewing", location: "about_hero" },
      secondary: { label: "Enquire for your date", href: contact, cta: "enquire_date", location: "about_hero" },
    },
    statement: {
      eyebrow: "The idea",
      heading: "Not a room you hire. An estate that holds the whole occasion.", // INDICATIVE
      lead: "Every occasion — and everyone in it — held in capable, caring hands. One team runs the venues, the catering and the rooms, so an important day is felt, not managed.", // INDICATIVE (North Star)
    },
    estateSplit: {
      eyebrow: "The estate",
      heading: "A French-Provence estate, with room for everything.", // ABOUT estateSplit
      body: [
        "Halls for weddings and functions, a chapel, gardens, a pool and a spa — and, at the Suleman Convention Centre, the largest hall in the area.",
        "It's all on, or moments from, the estate, between Pretoria and Centurion.",
      ], // INDICATIVE (facts confirmed)
      points: ["Halls, chapel & gardens", "A pool & a spa", "The 1,300-seat SCC", "Pretoria & Centurion"],
      variant: "estate" as const,
      note: "Estate photography · the grand lobby",
      image: img.grandLobby,
    },
    teamSplit: {
      eyebrow: "One team, one invoice",
      heading: "The same hands, from the first enquiry to the last goodbye.",
      body: [
        "Most occasions are stitched together from a dozen suppliers. Velmoré isn't — one team plans it, runs it and invoices it.",
        "A single point of contact, one contract, and no coordinating between caterers, venues and hotels.",
      ], // INDICATIVE
      points: ["One point of contact", "One invoice, one contract", "Venue · catering · rooms", "Held, not managed"],
      variant: "conferences" as const,
      note: "Photography required · the team at work (shoot pending)",
      image: img.colonnade,
    },
    halalSplit: {
      eyebrow: "Everyone, held",
      heading: "A certified halal kitchen — for every guest, without being asked.",
      body: [
        "The estate kitchen is certified halal, catering for every guest as standard — an inclusion that's built in, not bolted on.",
        "It's part of what 'the whole occasion, held' means: everyone in the room is looked after.",
      ], // INDICATIVE (fact confirmed)
      points: ["Certified halal kitchen", "For every guest", "Standard, not on request", "Weddings · conferences · events"],
      variant: "dining" as const,
      note: "Dining photography required · a set halal table (shoot pending)",
      image: img.grazingTable,
    },
    numbers: {
      eyebrow: "The estate, in numbers",
      heading: "One estate, every occasion.",
      items: [
        { label: "1,300", note: "seats · largest in the area" },
        { label: "3", note: "venues · Pretoria & Centurion" },
        { label: "50", note: "rooms on the estate" },
        { label: "1", note: "team · one invoice" },
      ],
    },
    cta: {
      heading: "Come and see the estate.", // INDICATIVE
      body: "Book a viewing, tell us your occasion, and one team takes it from there.", // INDICATIVE
      image: img.welcomeGolden,
      primary: { label: "Book a Viewing", href: contact, cta: "book_viewing", location: "about_cta" },
      secondary: { label: "Enquire for your date", href: contact, cta: "enquire_date", location: "about_cta" },
    },
  },

  gallery: {
    hero: {
      eyebrow: "The estate, in pictures",
      title: "One estate. Every kind of day.", // INDICATIVE
      sub: "Weddings to conferences, gardens to the glass hall — a glimpse of the range across the estate.", // INDICATIVE
      variant: "hero" as const,
      image: img.estateFacade,
      primary: { label: "Book a Viewing", href: contact, cta: "book_viewing", location: "gallery_hero" },
      secondary: { label: "Enquire for your date", href: contact, cta: "enquire_date", location: "gallery_hero" },
    },
    gridNote: "Real photography from across the Velmoré estate. A dedicated spa shoot is still to come and will be added as it lands.",
    tiles: [
      { label: "The estate", variant: "estate" as const, image: img.estateAerial },
      { label: "The archway", variant: "estate" as const, image: img.estateArchway },
      { label: "Gardens", variant: "gardens" as const, image: img.gardensStreamArchway },
      { label: "Weddings", variant: "weddings" as const, image: img.receptionTable },
      { label: "Celebrations", variant: "weddings" as const, image: img.functionCentrepieces },
      { label: "Dining", variant: "dining" as const, image: img.grazingTable },
      { label: "The colonnade", variant: "estate" as const, image: img.colonnade },
      { label: "The entrance", variant: "estate" as const, image: img.estateEntranceFountain },
      { label: "Arrival", variant: "estate" as const, image: img.welcomeGolden },
    ],
    cta: {
      heading: "Better in person.", // INDICATIVE
      body: "Book a viewing and see the estate for yourself — we reply the same business day.", // INDICATIVE
      image: img.gardensArchway,
      primary: { label: "Book a Viewing", href: contact, cta: "book_viewing", location: "gallery_cta" },
      secondary: { label: "Enquire for your date", href: contact, cta: "enquire_date", location: "gallery_cta" },
    },
  },

  contact: {
    hero: {
      eyebrow: "Come and see the estate",
      title: "Book a viewing, or enquire for your date.", // INDICATIVE
      sub: "One team, one reply — the same business day. Tell us about your occasion and we'll come back with real answers.", // INDICATIVE
      variant: "estate" as const,
      note: "Estate photography required · arrival & entrance (shoot pending)",
      image: img.estateForecourt,
      primary: { label: "Send an enquiry", href: "#enquire", cta: "enquiry_scroll", location: "contact_hero" },
      secondary: { label: "Email us", href: "mailto:online@velmore.co.za", cta: "email_click", location: "contact_hero" },
    },
    form: {
      eyebrow: "Enquire",
      heading: "Tell us about your occasion.",
      intro: "Whether it's a wedding, a conference or a celebration, one team will come back to you the same business day — with real answers, not a call-centre.", // INDICATIVE
      steps: [
        "We reply the same business day",
        "We answer your questions directly",
        "We invite you to view the estate",
      ],
      location: "Pretoria & Centurion",
    },
  },
} as const;
