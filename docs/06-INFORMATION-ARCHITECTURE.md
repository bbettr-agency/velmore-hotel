# 06 — INFORMATION ARCHITECTURE

**Project:** Velmore Hotel Estate · **Phase:** 3 ARCHITECT (build-ready, pre-Gate-1)
**Status:** architectural work that needs **no client confirmation.** Anything client-dependent is a marked placeholder.
**References (not duplicated):** OS `SYSTEM/00`, `SYSTEM/04-MARKETING-ENGINE`; project `docs/02-REDESIGN-BLUEPRINT` (Parts 5/6/9/21), `docs/05-MARKETING-CONVERSION-BLUEPRINT`, `knowledge-base/BUSINESS-KNOWLEDGE-BASE.md` (BKB, authoritative for client facts).

> **Placeholder convention (used in every doc from here on):** **〔G1: … 〕** = value/label pending Gate 1 client confirmation (see `CLIENT-INFORMATION-REQUEST.md` / `docs/03`). Placeholders **never ship as fact**; they are replaced with confirmed data after Gate 1. URL slugs, structure, hierarchy and IA below are **our decisions** and do not need client input.

---

## 1. Sitemap (final structure) + page register

Every page has: a URL, a type, a single primary intent, a single primary conversion, and its schema. Priority: **P0** = launch, **P1** = grow (`docs/02` Part 5).

| # | Page | URL | Type | Primary intent | Primary CTA | Priority |
|---|---|---|---|---|---|---|
| 1 | Home | `/` | Hub / landing | breadth + route to path | Journey selector → path | P0 |
| 2 | Accommodation | `/accommodation` | Service landing | rooms + book direct | Check Availability | P0 |
| 3 | Room detail (×N) | `/accommodation/[room]` | Detail | room specifics | Check Availability | P1 |
| 4 | Weddings | `/weddings` | Service landing | venue fit + book tour | Request Wedding Package / Book a Tour | P0 |
| 5 | Wedding packages | `/weddings/packages` | Sub / conversion | inclusions + price guidance | Request Wedding Package | P1 |
| 6 | Real weddings | `/weddings/real-weddings` | Proof | social proof | Book a Venue Tour | P1 |
| 7 | Conferences | `/conferences` | Service landing | capacity + residential | Request a Conference Proposal | P0 |
| 8 | Conference venue detail (×N) | `/conferences/venues/[venue]` | Detail | per-venue specs | Request a Proposal | P1 |
| 9 | Events (hub) | `/events` | Category hub | route to function type | Plan an Event | P1 |
| 10 | Year-end functions | `/events/year-end-functions` | Landing (seasonal) | year-end fit | Enquire / Request Proposal | P1 |
| 11 | Team building | `/events/team-building` | Landing | host-venue fit | Enquire | P1 |
| 12 | Celebrations | `/events/celebrations` | Landing | private-event fit (matric/birthday/gala/memorial) | Plan an Event | P1 |
| 13 | Restaurant | `/restaurant` | Service landing | dine / private dining | Book a Table | P1 |
| 14 | Allura Day Spa | `/allura-day-spa` | Service landing | treatments + spa day | Book a Spa Day | P0 |
| 15 | Specials | `/specials` | Offers hub | current deals | Claim / Enquire | P1 |
| 16 | Gallery | `/gallery` | Proof | see it's real | contextual path CTA | P1 |
| 17 | About / the estate | `/about` | Trust / story | who + where + trust | contextual | P1 |
| 18 | Contact & directions | `/contact` | Utility / local | reach + get there | path-appropriate enquiry | P0 |
| 19 | Thank-you (×5) | `/thank-you/[type]` | Conversion | confirm + track | secondary (WhatsApp/next) | P0 |
| 20 | FAQ | `/faq` (or per-hub blocks) | Support | answer objections | contextual | P1 |
| 21 | Privacy (POPIA) | `/privacy` | Legal | compliance | — | P0 |
| 22 | 404 | `/404` | System | recover | back to hubs | P0 |

**Notes:** `[room]` and `[venue]` are dynamic — the *number and names* of rooms/venues are **〔G1: confirm room list + venue list/capacities〕**; the *template* is built now. Room detail pages may launch as anchored sections on `/accommodation` (P0) and graduate to standalone URLs at P1 if search demand warrants.

**Page depth:** max **3 levels** from home (`/` → `/weddings` → `/weddings/packages`). Nothing deeper — protects crawl + UX.

---

## 2. URL architecture (rules — our decision, no client input)

- Lowercase, hyphen-separated, no trailing slash enforced consistently (pick one at build; canonical set either way).
- **Descriptive, keyword-natural, stable:** `/weddings`, `/conferences`, `/allura-day-spa` — not `/services/venue-1`.
- **`/events/` parent** groups non-wedding/non-conference functions; each child is a real, differentiated page (no doorway pages, OS rule).
- No dates, no IDs, no query params in canonical URLs; campaign params (`utm_*`, `gclid`, `fbclid`) are captured but never part of the canonical (`docs/05` Part 28).
- **One canonical per page**; self-referencing canonical tag sitewide.
- **Redirect + domain-consolidation map** already specified — `docs/02` Part 21 (old WordPress URLs → new; `velmorehotelestate.co.za` → canonical domain). Canonical domain choice = **〔G1: velmorehotel.co.za vs velmorehotelestate.co.za〕**.
- Trailing-slash + www/non-www + http→https all 301 to one canonical form.

---

## 3. Navigation architecture

### 3.1 Primary navigation (desktop)
Order follows the **Revenue Priority Matrix** (`docs/05` Part 24) — **〔G1: confirm revenue ranking to lock order〕**. Proposed default:

`Stay · Weddings · Conferences · Events ▾ · Dining · Spa · Gallery · About · Contact` + a persistent, visually distinct **[ Check Availability ]** button (accent) held separate from service enquiries.

- **Events ▾** dropdown: Corporate & Year-End · Team Building · Celebrations & Matric Farewells.
- **Weddings** hover-expose: Packages · Real Weddings · Book a Tour.
- **Ceiling: 9 top items + 1 booking button** (OS warns against overloaded nav). If confirmed revenue mix deprioritises a line, it moves under a parent — not removed.
- Utility row (optional, above nav): phone (`tel:` — real text) + hours. Language: EN only unless **〔G1: AF wanted〕**.

### 3.2 Footer navigation (4 columns + strip)
1. **Stay & Dine:** Accommodation · Restaurant · Allura Day Spa · Specials
2. **Celebrate & Meet:** Weddings · Conferences · Year-End · Team Building · Celebrations
3. **Estate:** About · Gallery · Contact & Directions · FAQ
4. **Book / Enquire:** Check Availability · Request a Proposal · Call · WhatsApp
- Strip: NAP (from BKB, **〔G1: confirm phone/hours〕**), social, cashless note, POPIA/Privacy, **Bbettr credit** (OS standing rule).

### 3.3 Mobile navigation
- Compact top bar: logo + hamburger + one quick action (call).
- Menu opens with the **4 journey paths surfaced first** (Stay / Weddings / Conferences / Celebrations), then full nav.
- **Sticky bottom bar (sitewide, after hero):** Call · WhatsApp · Check Availability (weighted flex, safe-area padding) — the mobile conversion surface (`docs/02` Part 18).

### 3.4 Breadcrumbs
- On all level-2/3 pages: `Home › Weddings › Packages`. Emits `BreadcrumbList` schema (`docs/10`/`02` Part 20). Not on home. Improves crawl + orientation for paid landers.

---

## 4. Internal linking architecture (hub-and-spoke)

Every important page is reachable from home + footer (no orphans, OS Gate 3). Clusters:

- **Stay cluster:** `/accommodation` ⇄ room details ⇄ `/specials` ⇄ `/allura-day-spa` (spa-&-stay) ⇄ `/restaurant`.
- **Weddings cluster:** `/weddings` ⇄ `/weddings/packages` ⇄ `/weddings/real-weddings` ⇄ relevant venue detail ⇄ `/accommodation` (guest block) ⇄ `/gallery`.
- **Conferences cluster:** `/conferences` ⇄ `/conferences/venues/[venue]` ⇄ `/events/year-end-functions` ⇄ `/events/team-building` ⇄ `/accommodation` (residential).
- **Events cluster:** `/events` ⇄ its children ⇄ `/weddings` & `/conferences` (shared spaces) ⇄ `/restaurant` (catering).
- **Cross-sell spine (every service page):** contextual links Stay ↔ Weddings ↔ Conferences ↔ Spa ↔ Dining — the "all-in-one estate" story made navigable.
- **Location spine:** every page footer links `/contact` (directions, map, drive-times, "between Pretoria & Johannesburg").

**Rules:** descriptive anchor text (keyword-natural, not "click here"); each hub links down to its spokes and spokes link back up; the "one estate" cross-links appear once per page in-context (not a link dump). Orphan check is a Gate 3 item.

---

## 5. User journey maps (incl. paid-entry — every page is a landing page)

Each audience can enter at **home OR directly on its service page** (paid/organic). Journeys reference BKB §D + `docs/02` Part 3; deepened here for direct entry.

| Audience | Typical entry (organic + paid) | On-page path | Primary conversion | Cross-sell |
|---|---|---|---|---|
| **A Leisure** | `/` or `/accommodation` (Google Ads "hotels Centurion"; Meta getaway) | rooms → rates → setting/drive-times → gallery → **Check Availability** | Book a Stay (eZee) | spa-&-stay, dining, specials |
| **B Wedding** | `/` or `/weddings` (Google "wedding venue Centurion"; Meta real-weddings) | venues+capacity → packages → real weddings → **Request Package / Book Tour** | Wedding enquiry (multi-step) | accommodation block, spa |
| **C Conference** | `/` or `/conferences` (Google "conference venue + accommodation"; PMax) | capacity table → configs/AV → residential/day → **Request Proposal (RFP)** | Conference RFP | accommodation, dining, team building |
| **D Private event** | `/events/*` (Meta/seasonal — matric/year-end) | event type → space/capacity → **Plan an Event** | Event enquiry | catering, accommodation |
| **Spa (local + guest)** | `/allura-day-spa` (Google "day spa Centurion"; Meta specials) | treatments → packages → **Book a Spa Day** | Spa booking/enquiry | spa-&-stay, dining |

**Direct-entry rule (OS Ad-Budget Test):** a visitor landing cold on any P0 page must convert **without visiting home** — the page carries category clarity, proof, objection handling and its own CTA (spec in `docs/07`). Every journey ends on a tracked `/thank-you/[type]` (`docs/08`).

---

## 6. Page hierarchy (tree)

```
/
├── /accommodation ─ /accommodation/[room]
├── /weddings ─ /weddings/packages · /weddings/real-weddings
├── /conferences ─ /conferences/venues/[venue]
├── /events ─ /events/year-end-functions · /events/team-building · /events/celebrations
├── /restaurant
├── /allura-day-spa
├── /specials
├── /gallery
├── /about
├── /contact
├── /faq · /privacy · /404
└── /thank-you/[stay|wedding|conference|event|spa]
```

**Open dependencies for IA (all Gate 1):** revenue ranking → final nav order; room list → room routes; venue list/capacities → venue routes; canonical domain → redirect map. Templates and structure are built now; these swap in confirmed values at Gate 1.
