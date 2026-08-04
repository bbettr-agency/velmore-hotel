# 07 — PAGE BLUEPRINTS (section skeletons)

> **⟳ Gate-1 update (2026-08-03) — authoritative; supersedes conflicting content below. Source of truth: [`../knowledge-base/BUSINESS-KNOWLEDGE-BASE.md`](../knowledge-base/BUSINESS-KNOWLEDGE-BASE.md).**
> - **⚠️ ALL capacity figures in this doc are void** — use the **BKB confirmed venue registry only**. The old numbers (Bastille **650** not 750 · Trisage **300** not 500 · D'Charmant Glass Hall **550** not 1,500+ · DeVoir **150** · Martels Chapel **150** · **new** Martels Dungeon **130** · **SCC Main Hall 1,300** · Laudium **250**) and **50 rooms (not 99)** are the truth. Content-rule: never carry a figure from the old site.
> - **Conferences is the #1 page.** Lead: *one site, one team, one invoice — a 1,300-seat hall, executive breakout rooms, 50 beds and a certified halal kitchen, within 1.5 km.* Boardroom names (Cartier/Satre/Voltaire) are **🔴 unconfirmed** — page structure builds now, names swap in.
> - **Weddings:** build to display **either "from R25,000" venue-hire OR a per-head package table** without a rebuild (pricing structure 🔴 unconfirmed). **Certified halal = headline** on weddings + conferences (never "halal-friendly").
> - **Hero image = D'Charmant Glass Hall at dusk** (client's strongest single image).
> - **Accommodation:** 50 rooms, **package-first** (DBB R1,350 / Elite Nexus R1,950 per delegate) alongside per-night; per-night rates 🔴 unconfirmed. **No bar** listed.
> - **Spa page ON HOLD** (name unconfirmed) · **Dining page BLOCKED** (restaurant name 🔴). Ship only when named.
> - **Primary CTA sitewide = "Book a viewing"** (then "Enquire for your date"). **No alcohol/bar anywhere** (board rule); don't feature non-sellable assets (old wing, pool, field, glass garden boardroom).

**Project:** Velmore Hotel Estate · **Phase:** 3–4 (build-ready structure, pre-Gate-1)
**What this is:** the section-by-section structure of every page — a *wireframe in words*, not visual design and **not final copy**. It defines what each section must *do*, the content blocks it holds, its CTA, schema and internal links. Copy shown is **direction/example only** (marked *ex.*), never final.
**References:** OS Design Language (`00` §9 Section System, `01` Hero System), `SYSTEM/04`; project `docs/02` (Parts 7/8/15), `docs/06` (IA), `docs/08` (conversion/tracking), `docs/09` (design system), `knowledge-base/` (BKB + voice-print, authoritative for facts/voice).

> **Placeholder convention:** **〔G1: …〕** = pending client confirmation — never ships as fact. All *ex.* copy is placeholder direction to be written properly at Gate 2+ from the voice-print. Section **structure** needs no client input and is final.

**Every section obeys the OS anatomy** (`eyebrow · heading · lead · body · evidence · action`) and answers one named objection/question (BKB §D). Surfaces alternate tone (light / tinted / dark spotlight); ≤2 dark spotlights per page; accent on primary CTA only.

---

## HOME `/` — Hub + primary landing (P0)

**Job:** answer the Blocking Question in 5s — *what Velmore is, that it does stay/weddings/conferences/celebrations, where it is, that it's a premium estate* — and route to a path. **Density:** Balanced w/ Editorial hero. **Primary action:** journey selector.

| # | Section | Job (question) | Content blocks | Surface | CTA / schema |
|---|---|---|---|---|---|
| 1 | **Hero (Editorial + journey selector)** | "what is this / is it for me / where?" | one cinematic estate image (LCP, no animate-in); H1 *ex.* "An estate for the whole occasion — between Pretoria & Johannesburg"; sub w/ breadth+location; 3 proof chips: 〔G1: rooms〕 · ~15 venues to 1,500 · day spa; **journey selector** Stay/Weddings/Conferences/Celebrations | image | persistent [Check Availability]; `Hotel`+`WebSite` schema |
| 2 | **Journey paths** | self-select | 4 cards → hubs, each w/ its own CTA + 1 proof line | light | 4 path CTAs |
| 3–4 | **Estate Introduction / Capability** *(SHIPPED — `components/home/EstateIntro.tsx`)* | "what is this + why here + can it hold my thing?" (obj #1) | dark-spotlight editorial: the *one estate, one team, one invoice* story (voice-print) + stat pairs **1,300 seats · 3 venues · 50 rooms · 1 invoice**, certified-halal welcome, "held here" links. Narrative, not a feature list. Pretoria & Centurion. | **dark spotlight** | links → /conferences /weddings /events /accommodation |
| 5 | **Weddings preview** *(SHIPPED — `components/home/WeddingsPreview.tsx`)* | flagship interest, the emotive counterpoint to Conferences | emotive editorial band, deliberately varied from §6 (copy-led on the **left**, **portrait** placeholder on the right, tinted `mist` ground): italic kicker + serif heading (*a whole estate, given over to one day*) + 2 lead-with-emotion paragraphs (chapel · reception under chandeliers · gardens · golden hour), then an understated hairline **"Held for you"** line — chapel & reception · gardens · rooms for guests · certified-halal catering · one team · one invoice · private viewings; tracking-ready CTAs | tinted, **copy-left / portrait image-right** | **Book a Viewing** → /contact · **Explore Weddings** → /weddings |
| 6 | **Conferences preview** *(SHIPPED — `components/home/ConferencesPreview.tsx`)* | flagship interest (obj #1, largest revenue) | image-led editorial split: labelled photography placeholder + the *one team, one invoice, 1,300 delegates* story + 4 capability points (up to 1,300 · residential 50 rooms · certified-halal catering · one invoice); tracking-ready CTAs | light, image-left | **Book a Viewing** → /contact · **Explore Conferences** → /conferences |
| 7 | **Stay preview** *(SHIPPED — `components/home/StayPreview.tsx`)* | the calm/rest change of pace ("everything is here — no need to leave") | deliberately NOT a split (distinct from §5/§6): a centered, spacious, image-led composition — flanked eyebrow + serif heading + one calm lead, a wide **environmental** placeholder + a quiet **garden detail** placeholder (both `.stay-*`, light & airy, honestly labelled *"Photography required …"*), a quiet 3-up serif proof trio (**50 rooms** · steps away · gardens & calm), restrained on-load reveal. **Confirmed facts only** — no invented room categories/amenities/rates/grading; restoration rooms never shown. | ivory, **centered / stacked / airy** | **Explore Your Stay** → /accommodation · **Check Availability** → /contact *(no booking engine yet — enquiry journey; tracking `check_availability` kept distinct for future booking-engine integration)* |
| — | *Confirmed on-page order:* Hero → Journey selector → Estate Introduction → Conferences (§6) → Weddings (§5) → **Stay (§7)**. Capability → emotion → rest. Conferences-before-Weddings is the client-approved commercial order (largest revenue pillar first); the Journey selector already lets weddings-first visitors enter directly. |
| 8 | **Spa (Allura) band** | cross-sell + local | restful image + treatment/package teaser 〔G1: menu〕 | image | → /allura-day-spa |
| 9 | **Dining & estate experiences** | depth + local | restaurant 〔G1: name〕, boma, gardens | light | → /restaurant |
| 10 | **Signature gallery showcase** | emotional peak | grid-break moment, curated real photos | tinted | → /gallery |
| 11 | **Reviews & trust** | objection #5 (trust) | review **volume** ("〔G1: confirm count〕+ Google reviews") + selected testimonials 〔G1: consent〕 + grading badge 〔G1: TGCSA〕 | **dark spotlight** | `AggregateRating` only if consented |
| 12 | **Specials** | deal-seekers | current real offers only 〔G1: real offers — else suppress section〕 | light | → /specials · `Offer` schema |
| 13 | **Location & map** | objection #4 | map embed, address (BKB NAP), drive-times, directions | tinted | → /contact |
| 14 | **Final multi-path CTA** | conversion close | "Which occasion are we hosting?" 4 path CTAs + call/WhatsApp | **dark spotlight** | all channel CTAs |
| 15 | **Footer** | wayfinding + NAP | per `docs/06` §3.2 | dark | Bbettr credit |

**On-page SEO skeleton:** Title *ex.* "Velmore Hotel Estate — Hotel, Weddings & Conferences between Pretoria & Johannesburg" (<60ch, 〔G1: canonical name〕) · one H1 (hero) · meta *ex.* breadth+location (<155ch) · H2 per section.
**Landing-readiness:** category+location+CTA above fold; trust before final ask; attention ratio moderate (hub keeps nav). Passes Ad-Budget Test as a brand/breadth landing page.

---

## ACCOMMODATION `/accommodation` — Service landing (P0)

**Blocking sub-Q:** "where do I stay, what does it cost, why book direct?" **Primary CTA:** Check Availability (eZee). **Density:** Balanced.

1. **Hero** — H1 *ex.* "Stay on the estate, between Pretoria & Johannesburg"; sub (setting + spa/dining on-site); **inline availability widget** (dates+guests → eZee) as the functional element; proof chip 〔G1: rooms〕/grading. LCP = H1+image.
2. **Room types** — card per type 〔G1: confirm room list: Presidential Suite / Deluxe / Standard / Twin〕: image, beds/occupancy, size, 3–5 amenities, **from-rate 〔G1: rates〕**, [Check Availability]. `HotelRoom` schema each.
3. **Why book direct** — best-rate/perks 〔G1: direct benefit〕 vs OTAs; objection: "why not Booking.com?"
4. **Amenities** — icon grid 〔G1: confirm amenities list〕 (pool, wifi, parking, restaurant, spa, gardens…).
5. **The estate experience** — spa + dining + gardens cross-sell band.
6. **Location & getting here** — drive-times 〔G1〕, map, directions, Gautrain/airports.
7. **Policies + FAQ** — check-in/out 〔G1〕, cashless, cancellation 〔G1〕; `FAQPage` schema (real Qs only).
8. **Final CTA (dark)** — Check Availability + WhatsApp/Call.

**SEO:** Title *ex.* "Hotel Accommodation in Centurion — Rooms between Pretoria & Johannesburg" · `Hotel`+`HotelRoom` schema · links → specials, spa, restaurant, contact.
**Readiness:** rooms+rates+book above fold; works standalone for Google Ads "hotels Centurion". Attention ratio tightened (booking is the one goal).

---

## WEDDINGS `/weddings` — Service landing (P0, flagship)

**Blocking sub-Q:** "can you host my wedding beautifully, at my size, in my budget?" **Primary CTA:** Request a Wedding Package / Book a Venue Tour. **Density:** Editorial-leaning.

1. **Hero (Editorial)** — real ceremony/reception image; H1 *ex.* "Weddings on a French-Provence estate near Centurion"; sub (indoor+garden+chapel, up to 〔G1: max capacity〕 guests, guests stay over); primary CTA + WhatsApp.
2. **The estate wedding story** — emotive lead (voice-print), the all-in-one promise (ceremony+reception+stay+spa).
3. **Venues & capacities** — **capacity table/cards** 〔G1: confirm venue list + seated/standing〕 — the market-gap differentiator; indoor/garden/chapel filter.
4. **Packages & what's included** — 3 tiers 〔G1: names/inclusions/price-guidance〕 as comparison cards → /weddings/packages. Objection #2 (cost).
5. **Real weddings** — gallery teaser 〔G1: photos+consent〕 → /weddings/real-weddings. Objection #3 (is it actually good).
6. **Catering & details** — menus 〔G1〕, halal 〔G1〕, coordination, suppliers 〔G1〕.
7. **Accommodation for guests** — room-block band → /accommodation.
8. **Wedding FAQ** — 〔G1: coordinator FAQs〕; `FAQPage` schema.
9. **Final CTA (dark spotlight)** — Request a Wedding Package + Book a Venue Tour + WhatsApp.

**SEO:** Title *ex.* "Wedding Venues in Centurion — Garden & Chapel Weddings | Velmore" · `EventVenue` schema · links → packages, real-weddings, accommodation, gallery.
**Readiness:** venue-fit + capacity + package price-guidance + CTA above/early; strong for organic + "wedding venue Centurion with accommodation" ads.

### `/weddings/packages` (P1) — conversion sub-page
Hero (light) → **package comparison table** 〔G1: full inclusions + from-price〕 → what's included/excluded → downloadable brochure 〔G1: brochure asset〕 (`brochure_download` event) → catering note → **Request a Wedding Package** (form) → FAQ. Schema: `Offer`/`EventVenue` (no fabricated prices).

### `/weddings/real-weddings` (P1) — proof
Hero → filterable real-wedding gallery 〔G1: images+consent〕 → 2–3 mini case studies (couple, guest count, spaces used) 〔G1〕 → testimonial 〔G1: consent〕 → Book a Venue Tour. `ImageObject` alt describes the evidence.

---

## CONFERENCES `/conferences` — Service landing (P0, flagship)

**Blocking sub-Q:** "can you hold my delegates, right setup, catering, rooms, near me?" **Primary CTA:** Request a Conference Proposal. **Density:** Balanced→Substantive (spec tables welcome here).

1. **Hero** — real setup image; H1 *ex.* "Conference Venues in Centurion — with on-site accommodation"; sub (X venues, up to 〔G1: max delegates〕, midway PTA↔JHB); [Request a Proposal] + [Download capacity chart 〔G1〕].
2. **Capacity & configurations table** — per venue × layout (cinema/schoolroom/U-shape/boardroom/banquet) 〔G1: confirm capacities/sizes〕. The decisive filter. Horizontally scrollable on mobile.
3. **Residential vs day conferencing** — "with accommodation" USP; package outlines 〔G1: pricing/inclusions〕.
4. **Equipment & AV** — included vs hireable 〔G1〕 (icon list).
5. **Catering** — teas/lunch/dinners/boma, halal 〔G1〕.
6. **Logistics** — parking 〔G1〕, accessibility, location/drive-times 〔G1〕, Gautrain/airports.
7. **Trusted by** — client logos 〔G1: permission〕; delegate testimonial 〔G1〕.
8. **Proposal process** — 3 steps + turnaround 〔G1〕 (kills "what happens if I enquire?").
9. **Final CTA (dark)** — Request a Proposal + Call.

**SEO:** Title *ex.* "Conference Venues in Centurion with Accommodation | Velmore" · `EventVenue` schema · links → venue details, year-end, team building, accommodation.
**Readiness:** capacity + "with accommodation" + RFP above/early; wins "conference venue Centurion [N] delegates".

### `/conferences/venues/[venue]` (P1) — per-venue detail
Hero (venue photo) → specs table (capacities per layout, m²) 〔G1〕 → AV → gallery → "pairs with accommodation" → Request a Proposal. `EventVenue` schema per venue.

---

## EVENTS `/events` (hub, P1) + children

**Hub:** route to function type. Sections: hero → 4 event-type cards (Year-End · Team Building · Celebrations · Corporate) → shared-spaces note (links weddings/conferences) → catering band → Plan an Event.

- **`/events/year-end-functions`** (seasonal, evergreen) — hero *ex.* "Year-End Function Venues near Centurion — with accommodation"; spaces+capacity 〔G1〕; gala/braai options; package 〔G1〕; **seasonal urgency** (books out Sep–Nov); Enquire. Refreshed annually.
- **`/events/team-building`** — host-venue positioning (space+catering+accommodation+grounds); in-house vs partner 〔G1〕; enquire.
- **`/events/celebrations`** — matric farewell (own H2/section — distinct seasonal search), birthday, baby shower, engagement, memorial, gala; flexible spaces+capacity 〔G1〕; Plan an Event.

Each: `EventVenue` schema, links to /restaurant (catering) + /accommodation, its own tracked enquiry.

---

## RESTAURANT `/restaurant` — Service landing (P1)

**Blocking sub-Q:** "can I eat here / host a private dinner; what & when?" **Primary CTA:** Book a Table.
Sections: hero (real food/venue, 〔G1: restaurant name〕) → menu highlights 〔G1: menu〕 → hours 〔G1〕 → Sunday lunch/buffet 〔G1〕 → private dining/boma → the view/gardens → Book a Table + directions. Schema: `Restaurant` (+`Menu` if provided). Serves local + guest audiences (GBP/map value).

---

## ALLURA DAY SPA `/allura-day-spa` — Service landing (P0)

**Blocking sub-Q:** "what treatments/packages, how much, can I book a spa day?" **Primary CTA:** Book a Spa Day.
1. Hero — restful image; H1 *ex.* "Allura Day Spa — a day spa near Centurion" 〔G1: confirm Allura〕; sub (couples/full-day/spa-&-stay).
2. Treatment menu 〔G1: treatments+durations〕.
3. Packages & specials 〔G1: package prices〕 (couples, full-day, spa-&-stay).
4. Spa-&-stay cross-sell → /accommodation.
5. Hours + how to book 〔G1〕; gift vouchers 〔G1〕.
6. Gallery (spa interiors 〔G1: shoot likely needed〕) + review.
7. Final CTA — Book a Spa Day + WhatsApp.
Schema: `DaySpa`/`HealthAndBeautyBusiness`. Captures **local, non-guest** demand (lifts whole domain).

---

## SPECIALS `/specials` (P1)
Hero → current offers as cards 〔G1: real dated offers — if none, page suppressed, never filled with filler (OS Content-Gap Protocol)〕 → terms → Claim/Enquire. `Offer` schema only for real offers. Feeds seasonal ad campaigns + GBP posts.

## GALLERY `/gallery` (P1)
Hero → filter by vertical (Estate/Rooms/Weddings/Conferences/Spa/Dining/Gardens) → curated real photography 〔G1: assets/shoot〕 → contextual path CTAs. `ImageObject` alt = evidence.

## ABOUT / THE ESTATE `/about` (P1)
Hero (estate at best light) → the story 〔G1: founding year/history + mission/vision/values from voice-print〕 → the all-in-one proposition → location + map + drive-times 〔G1〕 → grading/credentials 〔G1: TGCSA/halal〕 → values/culture 〔G1〕 → multi-path CTA. **dark spotlight** on the estate-story moment. Schema: `AboutPage`/`Organization`.

## CONTACT & DIRECTIONS `/contact` (P0)
Hero (light) → **path-routed enquiry** (choose: Stay/Wedding/Conference/Event/Spa → correct form) → NAP block (BKB, 〔G1: confirm phone/hours〕) → **map embed + directions** (from PTA/JHB/Gautrain/airports, drive-times 〔G1〕) → department contacts 〔G1: who handles what〕 → WhatsApp/Call. Schema: `LocalBusiness`/`Hotel` w/ geo. Consolidates the two old contact pages (`docs/02` Part 21).

## THANK-YOU `/thank-you/[stay|wedding|conference|event|spa]` (P0)
Confirmation message (what happens next + response-time 〔G1〕) → secondary action (WhatsApp / explore related) → **conversion tracking fires here** (`docs/08`). No nav distractions; reassurance-first. One template, typed by route.

## FAQ `/faq` + per-hub blocks (P1)
Questions from real PAA (`docs/02` Part 5) + 〔G1: coordinator/organiser FAQs〕. Visible, genuine → `FAQPage` schema. Also embedded as per-page FAQ blocks (weddings/conferences/accommodation/spa).

## PRIVACY `/privacy` (P0) · 404 (P0)
Privacy: POPIA policy (consent, data use, who receives enquiries 〔G1〕). 404: friendly recovery → hubs + search.

---

## Cross-cutting (all pages)
- **One H1**, logical H2/H3; eyebrow ≠ heading.
- **Primary CTA above the fold**, repeated after each proof block (OS landing hierarchy).
- **Sticky mobile CTA** sitewide; **skip-to-content**; measured contrast.
- **No section ships without a job** mapped to an objection/proof/conversion (OS §9).
- **Truth:** every `[verified]`-only fact renders; 〔G1〕 placeholders are visibly marked in the build config (not shipped) until confirmed.
