# 02 — REDESIGN BLUEPRINT (Parts 2–21)

**Project:** Velmore Hotel Estate — premium hospitality redesign · **OS:** Bbettr Website OS
**Date:** 2026-08-02 · **Phase:** 1–3 (UNDERSTAND → POSITION → ARCHITECT) planning output
**Read with:** [CLIENT-BRIEF.md](CLIENT-BRIEF.md) · [01-CURRENT-SITE-AUDIT.md](01-CURRENT-SITE-AUDIT.md) · [03-CLIENT-INFO-REQUIRED.md](03-CLIENT-INFO-REQUIRED.md) · [04-IMPLEMENTATION-PLAN.md](04-IMPLEMENTATION-PLAN.md) · **[05-MARKETING-CONVERSION-BLUEPRINT.md](05-MARKETING-CONVERSION-BLUEPRINT.md) (Parts 24–29 — marketing-first layer)**

> **Marketing-first (OS v2.3.0, `SYSTEM/04`):** every important page here is a **landing page** built to receive paid traffic and convert standalone — homepage order & nav (Parts 8–9) follow the **Revenue Priority Matrix**, and tracking/attribution/CRM are designed in. Full detail in [05-MARKETING-CONVERSION-BLUEPRINT.md](05-MARKETING-CONVERSION-BLUEPRINT.md).
**Governing standards:** `SYSTEM/DESIGN-LANGUAGE/00-DESIGN-LANGUAGE.md`, `01-HERO-SYSTEM.md`, `SYSTEM/01-DESIGN-TOKENS.md`, `PIPELINE/gates.md`.
**Tags:** `[verified]` `[client-stated]` `[assumed]` `[proposed]` (a design/strategy recommendation, not a fact).

> **Nothing in this blueprint is coded yet.** It awaits client approval and the § pending confirmations before Phase 4 (DESIGN) and Phase 5 (BUILD).

---

## PART 2 — BUSINESS & POSITIONING ANALYSIS

**What Velmore is today:** an independent, privately-run **hotel estate** in Erasmia (north-west Centurion), midway between Pretoria and Johannesburg — combining **99 rooms, ~15 event venues (12 → 1,500+ guests), a day spa, dining and gardens on a riverside, French-Provence-styled property.** `[verified/client-stated]` Historically linked to the Orion Group and a lapsed ~2016 Best Western Plus plan; now trades under "Velmore". `[client-stated]`

**The positioning problem to solve:** the current presence is **fragmented** (two domains, two brand names), **narrow in message** (title/meta sell only conferences), and **undersells the one thing that is genuinely rare** — that a single estate can host a whole occasion (celebrate + stay + meet + unwind) at almost any scale, in the exact geographic middle of Gauteng's two biggest cities.

**The positioning (recommended):**
> **Velmore Hotel Estate — the all-in-one celebration & conference estate between Pretoria and Johannesburg.** A French-Provence riverside estate where you can hold the whole occasion in one place: marry, meet, celebrate, dine, unwind and stay — for eight guests or fifteen hundred. `[proposed]`

**Why this wins (from the gap map):** every local rival is either **too small** (Kleinkaap 34 suites, Casa Toscana ~150 pax), **too corporate/soulless** (ANEW, Protea), **off-corridor** (Lethabo), or **disrupted** (Royal Elephant's broken site, Irene's rebrand). None matches Velmore's **scale + all-in-one + midway-location** combination, and none publishes **capacities and package pricing** — the two things buyers most want. Velmore can own that whitespace now, while two key rivals are weak. `[verified market analysis]`

**Strongest revenue services (site leads with these):** Weddings · Residential conferencing (conference + rooms) · Accommodation · Spa. Supporting: dining, team building, private celebrations, year-end functions.

**Emotions the brand should create:** *elegant, warm, established, peaceful, capable, easy-to-deal-with.* Not: cold luxury, generic gold-and-black opulence, or corporate blandness.

**Concerns that prevent booking (must be answered on-site):** capacity fit · price uncertainty · food/service quality (real review theme) · location clarity · trust in a place with a moderate rating and a dated old site. See objection map (Brief §3).

---

## PART 3 — AUDIENCE JOURNEYS

Four journeys, four primary conversions. The site must **let visitors self-select immediately** (hero journey selector) rather than funnelling everyone to one "Book Now".

### A. Leisure / staycation guest
Needs: rooms, rates, amenities, setting, spa, dining, location/drive-times, why book direct, current specials.
Path: Home → **Stay** → room types + rates + gallery → **Check Availability** (booking engine) → confirmation.
**Primary conversion: Check Availability / Book a Stay** (direct booking). Secondary: spa-&-stay special, WhatsApp.

### B. Couple / wedding planner
Needs: ceremony + reception venues, capacities, packages + inclusions + price guidance, on-site accommodation for guests, catering, real-wedding galleries, coordination, what's included.
Path: Home → **Weddings** → venues + capacities → packages → real weddings gallery → **Request a Wedding Package / Book a Venue Tour** (multi-step form) → thank-you.
**Primary conversion: Request a Wedding Package / Book a Venue Tour.** Secondary: WhatsApp, brochure download.

### C. Corporate / conference organiser
Needs: **per-venue delegate capacities + configurations** (cinema/school/U-shape/banquet/boardroom), AV/equipment, day vs residential packages, catering, parking, accommodation, location between the cities, fast response.
Path: Home → **Conferences** → capacity table + configs → residential/day packages → **Request a Conference Proposal (RFP)** (multi-step form) → thank-you.
**Primary conversion: Request a Conference Proposal.** Secondary: call, brochure/capacity-chart download.

### D. Private-event client (matric farewell, birthday, gala, memorial)
Needs: flexible spaces + capacities, photogenic backdrop, catering/bar, seasonal availability, pricing tiers, quick enquiry.
Path: Home → **Celebrations/Events** → event types + venues → **Plan an Event** (form) → thank-you.
**Primary conversion: Plan an Event.** Secondary: WhatsApp.

*(Spa is a fifth micro-journey: Home/Stay → **Spa** → packages/specials → **Book a Spa Day** — importantly it also serves *local* non-guests, lifting the whole domain. Dining similarly serves locals via GBP/map.)*

---

## PART 4 — COMPETITOR ANALYSIS

Battlegrounds: **A** weddings · **B** conferences/corporate · **C** accommodation.

| Competitor | Type / where | Battles | Notable | Weakness Velmore exploits |
|---|---|---|---|---|
| **Royal Elephant** | Moroccan hotel+conf, Centurion (same Hennops River) | B,C,(A) | Conf to ~450, spa, "near 3 airports" | **Domain broken/redirecting; OTA-reliant** — cedes the owned funnel |
| **Irene Country Lodge → Hotel** | Prestige lakeside country hotel, Irene | A,B,C | 5★ grading, polished site, ~170 rooms | **Mid-rebrand off Marriott**; no published capacities/pricing |
| **Kleinkaap** | Boutique Cape-Dutch, Clubview Centurion | A,B,C | **Best owned site**; 4.5★/2,288 reviews | **Only 34 suites** — can't hold large weddings/conferences or big room blocks |
| **Casa Toscana** | Tuscan wedding venue+guesthouse, Pretoria | A,(C) | 50+ pro photos, LGBT-friendly, all-inclusive | Max ~150; thin on conferencing & stay |
| **ANEW Hotel Centurion** | Corporate city hotel | B,C | 7 venues to 220, loyalty programme | No estate/garden romance; weddings weak |
| **Protea by Marriott Centurion** | Chain full-service | A,B,C | Fast global platform, Bonvoy, weddings ~500 | Generic templating; no local/estate story |
| **Lethabo Estate** | Nature wedding estate, Lanseria side | A,B,C | Content-SEO, breadth, spa | **Off the Centurion corridor**; broken booking widget |
| **Oakfield Farm** | Wedding farm, Muldersdrift | A | Classic garden weddings | Wedding-only; off-corridor |

**Table stakes (new site MUST have):** dedicated per-vertical pages · rich real photography galleries · working room booking · per-vertical enquiry + WhatsApp + phone · fast responsive design · visible social proof/grading · clear location + directions.

**Gap map (ranked by customer impact — this is the strategy):**
1. **Publish per-venue capacities** (almost nobody does). 2. **Package/price transparency + downloadable brochures** (nobody does). 3. **Real reviews + "real weddings" case studies.** 4. **Seize owned-domain SEO authority now**, while Royal Elephant & Irene are disrupted. 5. **True all-in-one destination narrative.** 6. **Local long-tail + schema** ("wedding/conference venue Erasmia / Hennops River / Centurion").

**SERP read:** conferences **directory-dominated** (also get listed on aggregators) · weddings **winnable organically** (Kleinkaap proves it) · accommodation **OTA-dominated** (own branded + long-tail + drive direct booking).

---

## PART 5 — SEO & LOCAL SEO RESEARCH

**Location strategy:** **lead with Centurion** (where the demand is) in titles/H1s/GBP · **anchor NAP + schema to Erasmia** (accuracy; low-competition secondary wins like "accommodation Erasmia") · **own "between Pretoria and Johannesburg"** as the differentiator · Pretoria/Tshwane/Midrand as supporting modifiers. Do **not** build fake suburb pages.

**Keyword-to-page map (P0 = launch, P1 = grow):**

| Page | Primary cluster | Supporting terms | Intent | Priority |
|---|---|---|---|---|
| `/` Home | Velmore Hotel Estate (branded) + "hotel between Pretoria & Johannesburg" | Velmore Erasmia/Centurion | branded/navigational | **P0** |
| `/accommodation` | hotels in Centurion | accommodation near Pretoria; hotel between PTA & JHB; Erasmia accommodation; near Gautrain; 4-star hotel Centurion | transactional-local | **P0** |
| `/weddings` | wedding venues Centurion | wedding venues Pretoria; garden/chapel wedding venue; wedding venue with accommodation; all-inclusive wedding Gauteng | transactional + comparison | **P0** |
| `/weddings/packages` | wedding packages Centurion | wedding venue prices Pretoria; all-inclusive; per-guest cost | comparison-trust | P1 |
| `/conferences` | conference venues Centurion | conference venue Pretoria; conference with accommodation; delegate capacity; meeting venue between PTA & JHB | service + transactional | **P0** |
| `/conferences/venues/[venue]` | [venue name] capacity | boardroom/banquet capacity Centurion | service | P1 |
| `/events/year-end-functions` | year-end function venues Centurion | year-end with accommodation; Christmas/gala function Pretoria | transactional (seasonal) | P1 |
| `/events/team-building` | team building venues Centurion | with accommodation; outdoor team building near Pretoria; Hennops River | service | P1 |
| `/events/celebrations` | private function venue Centurion | matric farewell venue Centurion; birthday/party venue; engagement; private dining | transactional (part seasonal) | P1 |
| `/restaurant` | restaurant Centurion / Erasmia | Sunday lunch buffet Centurion; restaurant with a view; hotel restaurant | transactional + informational | P1 |
| `/allura-day-spa` | day spa Centurion | spa near Pretoria; day spa packages/specials; couples spa; massage Centurion | transactional + deal | **P0** |
| `/specials` | hotel specials Centurion | weekend getaway deals; spa & stay package; conference specials | transactional + deal | P1 |
| `/contact` | Velmore contact/directions | directions Erasmia; how to get to Velmore | navigational/local | **P0** |

**Search-intent map** (what each audience types → must see): leisure → rooms+rates+setting+drive-times+specials+easy booking; couple → spaces+capacity+package price+accommodation+real gallery+fast enquiry; corporate → capacities+configs+AV+residential packages+location+RFP; private → flexible spaces+capacity+photos+pricing tiers+quick enquiry.

**Content-gap topics to own (FAQ + GROW blog):** "how much does a wedding venue cost in Centurion/Pretoria" · "best area for a venue between Pretoria & Johannesburg" · "venue with on-site accommodation — why it matters" · "how many delegates can a Centurion conference venue hold (capacity vs configuration)" · "day-spa packages Centurion — couples vs full-day" · "matric-farewell venue guide" · "getting to Velmore from PTA/JHB/OR Tambo/Lanseria/Gautrain" · "garden vs indoor wedding in Gauteng".

**GBP categories:** primary **Hotel**; secondary **Wedding venue · Conference center · Event venue · Day spa · Restaurant · Resort hotel · Banquet hall.** One GBP at the Erasmia address, optimised for Centurion terms.

**Local citation cleanup:** standardise NAP everywhere; **merge duplicate TripAdvisor listings**; fix Bakwena→Allura on all directories; ensure listing on the aggregators that dominate SERPs (sa-venues, conferences.co.za, wheretostay, EatOut/Tripadvisor for dining, Booksy/Hyperli for spa).

---

## PART 6 — PROPOSED SITEMAP

```
/                              Home (all-in-one estate + journey selector)
/accommodation                 Stay hub — room types, rates, amenities, book
  /accommodation/[room]        (optional) room detail (Standard, Twin, Deluxe, Presidential Suite)
/weddings                      Weddings hub — spaces, capacities, real weddings
  /weddings/packages           Packages + price guidance + inclusions (+ brochure)
/conferences                   Conferences hub — capacity table, configs, AV, packages
  /conferences/venues/[venue]  (P1) individual venue pages for top spaces
/events                        Events overview (corporate + private)
  /events/year-end-functions   Seasonal, evergreen
  /events/team-building        Host-venue positioning
  /events/celebrations         Matric farewells, birthdays, milestones, memorials
/restaurant                    Dining — menu, hours, Sunday lunch, Boma
/allura-day-spa                Spa — treatments, packages, specials, book
/specials                      Offers hub (Offer schema)
/gallery                       Estate gallery (filtered by vertical)
/about                         The estate story, location, "between PTA & JHB"
/contact                       Contact + directions + map + hours (consolidated)
/thank-you/[type]              Tracked conversion pages (stay/wedding/conf/event/spa)
  404, /privacy (POPIA)
```

Nav-visible: Stay · Weddings · Conferences · Events · Dining · Spa · Gallery · Contact. About/Specials/Packages live in-context + footer. **Old pages** `/heaven-resort-hotel/`, `/footer/`, `/modal-box/`, `/my-account/`, `/contact-us/` → removed/redirected (Part 21).

---

## PART 7 — PAGE-BY-PAGE OBJECTIVES

Each page answers a named objection and has ONE primary conversion (OS §9: a section/page that answers nothing gets cut).

| Page | Job (the question it answers) | Primary CTA | Key proof it must carry |
|---|---|---|---|
| **Home** | "What is this, does it do my thing, where, is it good — which way do I go?" | Journey selector → path CTA | breadth, location, capacity headline, review volume, real photos |
| **Accommodation** | "Where do I stay, what does it cost, why book direct?" | Check Availability | room types, rates, amenities, setting, drive-times, best-rate promise |
| **Weddings** | "Can you host my wedding beautifully, at my size, in my budget?" | Request a Wedding Package / Book a Venue Tour | ceremony+reception spaces, capacities, package price guidance, real weddings, accommodation |
| **Wedding packages** | "What's included and what will it cost?" | Request a Wedding Package | 3 tiers + inclusions + from-price + brochure |
| **Conferences** | "Can you hold my delegates with the right setup, catering, rooms, near me?" | Request a Conference Proposal | **capacity table**, configs, AV, residential/day packages, parking, location |
| **Events (hub + children)** | "Can you host my function type?" | Plan an Event | venue options, capacities, catering, seasonal hooks (year-end/matric) |
| **Restaurant** | "Can I eat here / host a private dinner; what & when?" | Book a Table / View Menu | menu highlights, hours, Sunday lunch, Boma, view |
| **Allura Day Spa** | "What treatments/packages, how much, can I book a spa day?" | Book a Spa Day | treatment/package list + prices + specials + couples |
| **Specials** | "Is there a deal right now?" | Claim / Enquire | real dated offers only (Offer schema) |
| **Gallery** | "Show me it's real and beautiful" | contextual path CTA | curated real photography by vertical |
| **About** | "Who are you, where exactly, can I trust you?" | contextual | estate story, location + map, values, grading (if confirmed) |
| **Contact** | "How do I reach you / get there?" | path-appropriate enquiry | NAP, hours, map, directions, per-department routing |

---

## PART 8 — HOMEPAGE SECTION ORDER

Not the current order. A question-chain narrative (OS Law 5). Every section has a conversion purpose.

1. **Premium estate hero** — one cinematic estate image; H1 names category + location + breadth; restrained **journey selector** (Stay / Weddings / Conferences / Celebrations). *(Answers the Blocking Question in 5s.)*
2. **Journey selector detail / quick paths** — four cards, each → its hub with the right CTA. *(Self-selection.)*
3. **Estate introduction + location advantage** — "one estate, between Pretoria & Johannesburg", the all-in-one proposition; drive-times. *(Category + differentiation.)*
4. **Capacity/scale proof strip** — "99 rooms · ~15 venues · 8 to 1,500 guests · one estate" (verified numbers). *(Objection #1.)*
5. **Weddings preview** — emotive image band + "real weddings" teaser → Weddings. *(Flagship revenue.)*
6. **Conferences & corporate preview** — capacity highlight + "with accommodation" → Conferences. *(Flagship revenue.)*
7. **Stay preview** — room types + from-rates + Check Availability. *(Direct booking.)*
8. **Spa & wellness (Allura)** — restful band → Spa. *(Cross-sell + local audience.)*
9. **Dining & estate experiences** — restaurant/Boma/gardens → Dining. *(Depth + local.)*
10. **Signature venue / gallery showcase** — the estate at its best (grid-break moment). *(Emotional peak.)*
11. **Reviews & trust** — real Google review volume + selected testimonials (consented) + grading badge (if confirmed). *(Trust.)*
12. **Specials** — current real offers (or suppressed if none). *(Deal-seekers.)*
13. **Location & map** — map embed, address, drive-times, directions. *(Objection #4.)*
14. **Final multi-path CTA (dark spotlight)** — "Which occasion are we hosting?" → the four path CTAs + call/WhatsApp. *(Conversion close.)*
15. **Footer** — nav, NAP, hours, social, cashless note, Bbettr credit.

---

## PART 9 — NAVIGATION ARCHITECTURE

**Primary nav (desktop):** `Stay · Weddings · Conferences · Events · Dining · Spa · Gallery · Contact` + a persistent, visually distinct **"Check Availability"** button (accent) kept separate from service enquiries. `[proposed]`
- **Events** is a dropdown: Corporate Events · Year-End Functions · Team Building · Celebrations & Matric Farewells.
- **Weddings** may expose Packages · Real Weddings · Book a Tour on hover.
- Keep it premium and simple — 8 items + one booking button is the ceiling (OS warns against overloaded nav).

**Contextual CTAs (never one generic "Book Now"):** Book a Stay · Check Availability · Request a Wedding Package · Book a Venue Tour · Request a Conference Proposal · Plan an Event · Book a Spa Day · Call Velmore.

**Mobile:** compact hamburger; the four journey paths surfaced first inside the menu; **sticky bottom bar: Call + WhatsApp + Check Availability.**

---

## PART 10 — CONVERSION STRATEGY

- **Match CTA to intent** at every touchpoint (Part 9 list). Accommodation → booking engine; events → qualified forms; spa → form/WhatsApp.
- **Primary CTA above the fold** on every page (Gate 3). CTAs after trust, after the offer, after FAQ.
- **Multi-step forms for events** (proven higher-converting on OS insurance work) — qualify by type, date, guests, budget band, then contact details; ≤5 fields per step.
- **WhatsApp-first for low-commitment** enquiries (SA market norm) with pre-filled context messages; **sticky mobile call+WhatsApp bar** sitewide.
- **Tracked thank-you pages** per journey (fire GA4 events: `booking_click`, `lead_form_submit`, `whatsapp_click`, `call_click`).
- **Trust adjacent to CTA** (OS proximity principle) — capacity fact or review volume beside event-form CTAs.
- **Kill the conversion blockers** found in the audit: fix the cookie banner (don't cover the hero/CTA; remember consent), remove demo content, single working booking path.

---

## PART 11 — BOOKING & ENQUIRY STRATEGY

**Two rails, cleanly separated:**

1. **Room booking (transactional):** consolidate on **ONE** engine — recommend the existing **eZee/iPMS247** (`live.ipms247.com/...velmorehotel`) as the availability+booking provider, embedded/deep-linked from a hero "Check Availability" widget and the Stay page. Retire the Traveler `st_hotel`/WooCommerce rail entirely. *(Confirm eZee is the client's live PMS/channel manager.)* `[proposed]`
2. **Event & spa enquiry (qualification):** **per-vertical multi-step forms → GHL** (OS backend standard). Each submission must: create/update the contact, create the correctly-typed opportunity (Wedding / Conference / Year-End / Team-Building / Celebration / Spa / Stay), tag enquiry type + source, capture UTM/campaign, notify the correct inbox (bookings@ vs events), and redirect to a tracked `/thank-you/[type]`.

**Form field discipline (ask only what routes/qualifies):**
- Wedding: date · guest count · ceremony type (garden/chapel/indoor) · budget band · name/contact · message.
- Conference: date(s) · delegates · setup · accommodation needed? · catering · company · contact.
- Celebration: occasion · date · guests · contact.
- Spa: package · date · people · contact.
- General/stay overflow: reason · contact.

**Not built yet — architecture only.** GHL pipeline design, webhook wiring and eZee embed are Phase 5 tasks documented here for approval. `[proposed]`

---

## PART 12 — TRUST & REVIEW STRATEGY

The honest challenge: **Google 4.0★** (moderate) with **~1,600 reviews** (high volume), plus real complaint themes (event food, maintenance, service consistency). OS rule: **don't fabricate, don't lead with your weakest asset, use specific verifiable proof.**

- **Lead with volume + specifics, not the bare score:** "Trusted by thousands of guests and couples — 1,600+ Google reviews" reads stronger than "4.0★". Show the star score honestly where it appears but let **capacities, real photography, named packages and real testimonials** carry the trust weight (they counter the actual objections). `[proposed]`
- **AggregateRating schema:** only if the client is comfortable surfacing 4.0 and it's genuine first-party data (it is) — otherwise omit rather than fabricate. Decide with client.
- **"Real Weddings at Velmore"** case-study gallery + **corporate/delegate testimonials** (with consent) — the trust content competitors leave thin.
- **Grading badge** only if a **current TGCSA certificate** is produced (else no star claim).
- **Credibility by construction:** a fast, modern, error-free site is itself a trust signal after the dated current one.
- **Operational parallel track (client):** service-recovery on catering/maintenance so the site's promises hold — flagged as a business risk, not site copy.

---

## PART 13 — CONTENT & TONE DIRECTION

- **Voice:** warm, elegant, specific, human, search-aware, easy to scan (Brief §5). Confident, not boastful.
- **Banned clichés** (OS copy standard): "unparalleled luxury", "unforgettable experience", "world-class service", "where luxury meets…", "pax", empty superlatives — unless made specific and supported.
- **Specificity is the premium signal (OS Law 2):** replace "spacious venues" with "**De Bastille — 750 guests, 1,000 m²**"; replace "affordable weddings" with "**from R400 per guest, all-in**"; replace "great location" with "**35 min from Pretoria, 40 from Sandton, midway on the M26**" (drive-times TBC).
- **Scannability:** short paragraphs, capacity/spec tables, package cards, FAQ blocks — no walls of text (a current-site failing).
- **Every top-5 objection answered somewhere** (Brief §3). **FAQ** built from real PAA (Part 5) → FAQPage schema.
- **The specificity test:** if a sentence could sit unchanged on Kleinkaap's or Casa Toscana's site, rewrite it.

---

## PART 14 — VISUAL DIRECTION & PROPOSED PALETTES

**Density mode (OS §5): Balanced** — a "considered brochure" — with **Editorial moments** (hero, weddings, gallery) and **Substantive treatment inside the conference/capacity sections** (spec tables are correct there). Chosen once, applied consistently. *Rationale:* hospitality is aspirational (wants editorial imagery and space) but the buying decision needs substantive proof (capacities, packages); Balanced holds both without the incoherence of mixing modes. `[proposed]`

**Motion character:** **Considered / premium** — duration 0.6–0.7, stagger 0.08, ease `[0.22,1,0.36,1]`; **Editorial** timing (0.8–0.9) reserved for hero/wedding gallery reveals. Record in PROJECT_STATUS. `[proposed]`

**Typography (2 faces max, ≤3 weights):** one **high-contrast display serif** (romantic-but-premium estate character — e.g. *Fraunces* or *Cormorant Garamond*) + one **clean humanist sans** for body/UI (e.g. *Inter* or *Mulish*). Big size jumps, tight tracking on display, ≤65ch measure. Final pairing chosen in Phase 4 against the logo. `[proposed]`

**Palettes** — derived from the existing **olive/green + champagne botanical crest**, warm ivory/stone, charcoal ink. **Not final until logo + photography are analysed in Phase 4.** Two directions:

**Direction 1 — "Estate Green & Champagne" (recommended):** aligns with the current crest; warm, established, avoids cheap black-and-gold. `[proposed]`
```
primary  Estate Green   ~#2E402F  (deep olive-forest; structure, headings, dark spotlights)
accent   Champagne      ~#C4A363  (bronze-gold; PRIMARY CTA ONLY)
neutral  ink ~#23231F · charcoal ~#3D3D38 · stone ~#8A8578 · mist ~#EFEBE3 · ivory ~#FAF7F0
support  Sage           ~#6E7C63  (secondary botanical accent, non-CTA)
whatsapp #25D366 (only other action colour)
```
**Direction 2 — "Provence Twilight":** refined midnight/ink blue primary + warm ivory + muted sage + soft bronze accent — more editorial/romantic, cooler. `[proposed alternative]`
```
primary  Midnight Ink   ~#20303F     accent  Soft Bronze ~#B98E5A
neutral  ivory ~#F7F3EC · stone ~#8C8A84 · charcoal ~#2A2E33      support Sage ~#7C8A78
```

**Discipline (OS §4):** one accent, reserved for the primary CTA; near-monochrome fields; **no excessive gold, no cheap black-and-gold**; surface rhythm light → tinted → **dark spotlight** (estate story / final CTA); one radius family; one soft, large, low-opacity elevation family; all contrast **measured** (4.5:1 body / 3:1 large). Contrast pairs verified in Phase 4.

**Deliberately avoid (from the brief + OS "Tells"):** generic hotel-template styling, big text blocks, excessive gold, repetitive cards, dashboard sections, overloaded nav, random gradients, decorative clutter, heavy animation, artificial formal copy, angled/blob dividers, stock photography as subject.

---

## PART 15 — HERO STRATEGY

**Blocking Question:** *"Can this one place actually host my thing — beautifully, at my size, near me — and is it easy to deal with?"* (Brief §3; traced to objections #1, #4.)

**Category sentence:** *French-Provence hotel estate between Pretoria & Johannesburg — weddings, conferences, celebrations & stays, for 8 to 1,500 guests.*

**Archetype (OS §5):** **A — Editorial Full-Bleed**, upgraded with a restrained **journey selector** (a touch of **F — Functional/Tool**). *Rationale:* hospitality converts on aspiration (editorial imagery, one cinematic estate visual — never a slideshow), but Velmore's breadth and the Blocking Question demand instant category/breadth clarity and a path choice — the selector delivers that without a wall of text. Archetype **H (Progressive Capability)** was considered (it shows many services in-hero) but rejected as too complex/technical for an emotion-first hospitality brand. `[proposed]`

**Hero Brief:**
```
Blocking Question:  "Can this one estate host my thing — beautifully, at my scale, near me?"  (Brief §3 #1/#4)
Category sentence:  French-Provence hotel estate between Pretoria & Johannesburg — stay, weddings,
                    conferences & celebrations, 8 to 1,500 guests.
Emotional arc:      arrives comparison-weary/unsure → leaves confident + oriented to their path
Archetype:          A Editorial Full-Bleed + journey selector (F). Why: emotion-first + instant breadth/path.
Evidence layer:     one cinematic estate image (real) + a 3-fact strip: "99 rooms · ~15 venues to 1,500 · one estate"
                    + review-volume line ("1,600+ reviews") — all verified.
CTA:                journey selector (Stay / Weddings / Conferences / Celebrations) as the primary action;
                    "Check Availability" as the persistent accent button. No generic "Book Now".
Mobile fold budget: logo+menu · H1 (≤3 lines) · one sub line · journey selector (2×2) · one trust line.
LCP element:        the H1 (real text) + hero image — both render at first paint, never animated in.
```

**H1 (must contain entity + category + location; survive keyword removal; sound like them):** e.g. *"An estate for the whole occasion — between Pretoria & Johannesburg."* with a sub carrying qualifiers: *"Weddings, conferences and celebrations for 8 to 1,500 guests, plus 99 rooms and a day spa, on a French-Provence estate in Centurion."* `[proposed]`

**Hero rules enforced:** LCP renders at first paint; ≤3 verified proof items; contrast measured over the actual image region (the current dark-busy image needs a proper scrim or a cleaner crop); real photography only; one focal point; primary action above the fold on desktop **and** mobile.

---

## PART 16 — PHOTOGRAPHY STRATEGY

**Photography is the #1 premium determinant (OS §7).** Real assets exist; a curated/edited set + targeted new shots are recommended.

**Config-driven image system** (no paths hardcoded in components) with documented folders, each getting a README (expected filenames, dimensions, aspect, optimisation, alt-text guidance):
`logo · hero · exterior · architecture · rooms · weddings · conferences · events · dining · spa · gardens · team · gallery · offers`

**Shot list (fills the gaps; sell as part of the project):**
- **Hero:** one cinematic estate/architecture image at golden hour (and a separate **mobile 4:5 crop**).
- **Weddings:** real ceremony (garden + chapel + indoor), reception setups, couples, details — enough for a "Real Weddings" gallery.
- **Conferences:** venues **in real setups** (cinema/banquet/U-shape) with capacity context; AV; catering.
- **Rooms:** each room type, clean and consistent aspect.
- **Spa (Allura):** interiors, treatments — likely a gap.
- **Dining:** restaurant, Boma, Sunday lunch, plated food (real, not stock-styled), the view.
- **Gardens/estate:** the setting at its best hour; river/Magaliesberg context.

**Specs (OS §6):** hero 16:9 desktop / 4:5 mobile @2400px ≤200KB; split 4:3 @1600px ≤150KB; card 1:1/4:5 @1200px ≤120KB; AVIF+WebP via `next/image`; LCP image `priority`; **descriptive alt on every image** ("De Bastille set for a 400-guest banquet…" not "hero"); build fails on missing alt. **No stock as subject.**

---

## PART 17 — MOTION STRATEGY

- **Character:** Considered/premium (Part 14); ease `[0.22,1,0.36,1]` fixed; reveal `y:24→0` 0.6, stagger 0.08, once, viewport −80px.
- **LCP never animates in** (fix the current portfolio defect); hero entrance choreography ≤900ms; only secondary elements animate.
- **`prefers-reduced-motion` verified in the browser** (a CSS duration override does NOT stop Framer Motion) — all entrance transforms → none, ambient loops → static. Gate 3.
- **Restraint:** no parallax on text, no scroll-back re-animation, micro-interactions 150–250ms/≤4px. Motion must survive removal. Editorial timing (0.8–0.9) only on hero + wedding gallery.

---

## PART 18 — MOBILE STRATEGY

Mobile is designed first and separately (OS §11), not desktop stacked.
- **Fold budget ≤5 elements** (Part 15 hero brief). Journey selector as 2×2, thumb-reachable.
- **Sticky bottom bar: Call · WhatsApp · Check Availability** (appears after hero scrolls out; safe-area padding).
- **Fix the cookie banner** so it never covers the hero/CTA and remembers consent.
- **Capacity tables** become horizontally scrollable cards; **package comparisons** stack readably; **galleries** are fast, swipeable.
- Tap targets ≥44×44, CTA height ≥48, 8px spacing; body ≥16px; type ×0.72 desktop; test at 360/390/768 (Gate 3).

---

## PART 19 — ACCESSIBILITY REQUIREMENTS (WCAG 2.2 AA)

- **Contrast measured** (4.5:1 body / 3:1 large), including over hero imagery (scrim required).
- **Semantics:** one real `<h1>` per page; eyebrow not a heading; CTAs are `<a>`/`<button>`; evidential images described, decorative `alt=""`.
- **Keyboard:** full traversal in visual order; visible focus ring on every surface incl. dark; skip-to-content.
- **Forms:** every field labelled (placeholder ≠ label); errors announced; correct `inputMode`; POPIA consent.
- **Motion:** `prefers-reduced-motion` honoured (verified in browser).
- **Targets:** ≥44×44px. **axe: zero critical/serious** (Gate 3 hard).

---

## PART 20 — TECHNICAL SEO & SCHEMA PLAN

**Tech baseline (replaces WordPress):** Next.js 14 + TS + Tailwind + Framer Motion on Vercel (OS stack), static/SSG, config-driven copy, self-hosted fonts `display:swap`. Targets: **Lighthouse ≥95 mobile, LCP <2.5s, CLS <0.1, INP <200ms, first-load JS <150KB** (Gate 3) — a large upgrade on the current heavy WordPress/Elementor stack.

**Per-page metadata:** unique `<title>` <60ch (lead location + entity + category), unique meta <155ch, one H1, logical H2/H3, canonical on every page, OG + Twitter, real `og-image` in `/public`.

**Schema plan (JSON-LD, only where genuine — validate in Rich Results Test):**
| Schema | Where |
|---|---|
| `Hotel` / `LodgingBusiness` (real NAP, amenities, geo, priceRange) | Home / Accommodation |
| `HotelRoom` | room types |
| `EventVenue` + `Event` (only real, dated events) | Weddings / Conferences / Events venue pages |
| `Restaurant` (+ `Menu` if published) | Dining |
| `HealthAndBeautyBusiness` / `DaySpa` | Allura Day Spa |
| `Offer` (only real current offers) | Specials |
| `FAQPage` (only visible genuine FAQs) | FAQ blocks |
| `BreadcrumbList` | inner pages |
| `AggregateRating` | **only** if surfacing genuine consented Google reviews (client decision) |
| `Organization` + `WebSite` (sitelinks search) | layout |

**Do NOT fabricate** ratings, stars, capacities, prices, room counts or amenities.

**Technical hygiene:** route-generated `sitemap.ts` + `robots.ts`; canonical consolidation of the two domains; descriptive SEO image filenames; internal-linking so no orphan pages (every hub linked from home + footer; reciprocal links stay↔weddings↔conferences↔spa); strong Core Web Vitals; 404 page.

---

## PART 21 — CONTENT MIGRATION & REDIRECT PLAN

**Domain decision (§ pending):** choose ONE canonical (recommend `velmorehotel.co.za` — it's the GBP-linked, more-marketed domain; confirm) and **301 `velmorehotelestate.co.za` → the canonical** page-by-page (its `/venues` content migrates into `/conferences` + `/weddings`). `[proposed]`

**Redirect map (old → new, all 301 unless noted):**
| Old URL | New URL |
|---|---|
| `/accommodation/` | `/accommodation` (keep) |
| `/conference-venues/` | `/conferences` |
| `/weddings-events/` | `/weddings` (+ `/events` for non-wedding) |
| `/contact-us-1/` | `/contact` |
| `/contact-us/` (dup post) | `/contact` |
| `/offers/` | `/specials` |
| `/hotel_room/standard-room/` etc. | `/accommodation` (or room detail) |
| `/heaven-resort-hotel/` | **410/remove** (demo junk) |
| `/footer/`, `/modal-box/` | **remove/noindex** (template parts) |
| `/my-account/` | **remove** (no e-commerce) |
| stale `st_hotel`/`st_order` sitemaps | drop from index |
| `velmorehotelestate.co.za/*` | 301 → canonical equivalents |

**Migration rules:** export current Search Console rankings first — **anything ranking keeps its URL or is 301'd** (Gate 4 item); preserve the real content (capacity table, packages, galleries) into the new config; **strip all demo/placeholder text**; fix every spelling error; standardise NAP; submit new sitemap; request removal/reindex of demo pages; monitor for 404s post-launch.
