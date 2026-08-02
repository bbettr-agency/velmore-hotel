# 01 — CURRENT-SITE AUDIT

**Project:** Velmore Hotel Estate — premium hospitality redesign (Bbettr Website OS)
**Date:** 2026-08-02 · **Phase:** 1 UNDERSTAND (redesign audit)
**Audited:** `velmorehotel.co.za` (full crawl) + discovery of `velmorehotelestate.co.za` (second live site)
**Marking rule:** `[verified]` = confirmed from a primary source · `[client-stated]` = published by Velmore, unverified externally · `[assumed]` = inference, must be confirmed. Assumed items may never reach new site copy.

---

## 0. Headline verdict

The current presence is a **WordPress "Traveler" theme + Elementor + WooCommerce build** that was never finished to launch standard. It ranks and converts *despite itself*: real photography and a genuinely differentiated offer are buried under **demo/placeholder content that is live and indexed**, **two competing brand identities on two live domains**, **two disconnected booking systems**, a **single generic enquiry form for every audience**, and **no dedicated pages for four of the eight revenue lines** (dining, spa, team building, gallery). The redesign's job is not to restyle this — it is to **replace it with a coherent, config-driven, conversion-and-SEO-led estate site** and to clean up the indexation and NAP fragmentation around it.

The single most valuable asset the current site proves: **the underlying business is strong and differentiated** (99 rooms + ~15 event venues to 1,500 pax + spa + dining on a riverside estate midway between Pretoria and Johannesburg). The site is the weak link, not the business.

---

## 1. Site inventory (what exists today)

### 1a. `velmorehotel.co.za` — the primary marketed site

| URL | Type | Purpose | State |
|---|---|---|---|
| `/` | Page | Homepage | Live · vague hero, demo text lower down |
| `/accommodation/` | Page | Rooms | Live · 4 room types shown, **no prices, no room count** |
| `/conference-venues/` | Page | Conferences | Live · 6 venues named, **no per-venue capacities** |
| `/weddings-events/` | Page | Weddings & events | Live · 3 package price points, 40+ gallery images |
| `/contact-us-1/` | Page | Contact + universal enquiry form | Live · current contact page |
| `/offers/` | Page | Specials | Live · **Lorem Ipsum / Kafka placeholder text**, spelling errors |
| `/hotel_room/standard-room/` | CPT | Standard room detail | Live |
| `/hotel_room/twin-room/` | CPT | Twin room detail | Live |
| `/hotel_room/deluxe-rooms/` | CPT | Deluxe room detail | Live |
| `/contact-us/` | Post | **OLD duplicate contact page** | Indexed · duplicate of `/contact-us-1/` |
| `/heaven-resort-hotel/` | Page | **Theme demo page** (Kafka text, fake testimonial "Darlene Robertson", Italian address "Via Cavour, Merano BZ Italy", "169 rooms") | **Live & indexed — brand risk** |
| `/footer/`, `/modal-box/` | Page | Elementor template parts | **Indexed — should never be crawlable** |
| `/my-account/` | Page | WooCommerce account | Live · no e-commerce purpose on a hotel site |

**Pages that DO NOT exist but should:** Dining/Restaurant, Spa (Allura), Gallery, Team Building, Corporate Events, Year-End Functions, Private Celebrations, individual conference-venue pages, individual wedding-venue pages, About/Estate story, FAQ, Directions, Thank-you pages.

### 1b. `velmorehotelestate.co.za` — the SECOND live site (major finding)

A parallel official site exists under a **different brand name ("Velmore Hotel Estate", tagline "Crafting Experiences, One Event at a Time")**, same address/phone family, with a **`/venues` page that carries the real, detailed capacity data the primary site omits** (see §4). This is the deepest problem in the current setup: **two brands, two domains, split SEO equity, split review equity, contradictory content.** Resolving this — one canonical brand, one canonical domain, 301 the other — is a foundational redesign decision. `[verified]`

---

## 2. Technical & platform audit

| Item | Finding | Source |
|---|---|---|
| Platform | WordPress 7.0.2 + **Traveler theme** (ShineTheme) + Elementor (+Premium Addons) + WooCommerce 10.1.2 + AIOSEO 4.8.7 + Contact Form 7 + CookieAdmin | homepage HTML `[verified]` |
| Page weight | Homepage HTML **287 KB** raw, 2,000+ Elementor references — heavy DOM, likely poor Core Web Vitals on mobile | `[verified]` / `[assumed]` CWV |
| Booking engine #1 | **Traveler `st_hotel` / `st_order`** widget on the homepage ("check availability") | sitemaps + HTML `[verified]` |
| Booking engine #2 | **eZee / iPMS247** — accommodation page "Book Now" links to `live.ipms247.com/booking/book-rooms-velmorehotel` | accommodation page `[verified]` |
| **Booking conflict** | Two half-configured booking systems. The homepage availability widget and the accommodation CTA point at different engines — a broken, confusing booking journey | `[verified]` |
| Schema (JSON-LD) | Only `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`, `ImageObject` (AIOSEO defaults). **No `Hotel`/`LodgingBusiness`, no `HotelRoom`, no `Event`/`EventVenue`, no `Restaurant`, no `FAQPage`, no `AggregateRating`** | homepage HTML `[verified]` |
| Canonical / OG | Canonical present on home; `og:type/title/image` present (`og:image` = Velmore-Image-3.jpg). Twitter card not confirmed | `[verified]` |
| robots.txt | Standard WooCommerce disallows only; sitemap declared. No blocking of `/footer/`, `/modal-box/`, demo pages | `[verified]` |
| Sitemaps | 5 sub-sitemaps incl. legacy `st_hotel` (lastmod 2022) and `st_order` (2023) — stale booking artifacts indexed | `[verified]` |
| SSL / mobile | HTTPS OK; theme is responsive but hero + consent handling break the mobile fold (see §6) | `[verified]` |
| Cookie consent | CookieAdmin banner **re-fires on every load/resize and covers the hero + primary CTA on mobile** — a direct conversion blocker | browser test `[verified]` |

---

## 3. Content & copy defects (verified on the live site)

**Placeholder / demo content shipped live and indexed:**
- `/offers/` contains **Lorem Ipsum and Kafka "Metamorphosis" narrative text** ("Gregor then turned to look out the window…") instead of real offers. `[verified]`
- `/heaven-resort-hotel/` contains a **fake testimonial ("Darlene Robertson", lorem ipsum)** and an **Italian address ("Via Cavour, 239012 Merano (BZ) Italy")** left from the theme demo, plus "**169 rooms**" contradicting the homepage's 99. `[verified]`

**Spelling / grammar errors (each is a Gate-3 fail):**
- "**execlusive**" ×2 (should be *exclusive*) — offers/homepage `[verified]`
- "**Depature Date**" (Departure) — offers `[verified]`
- "**derections**" ×2 (directions) — offers `[verified]`
- "**shuttke**" (shuttle) — offers `[verified]`
- "**Create SOmething magical**" (capitalisation) — weddings `[verified]`
- "**Event of Guests**" (should be *Number of Guests*) — form label `[verified]`
- Phone formatting inconsistent: "078-666 -8000" `[verified]`

**Positioning / clarity defects:**
- Homepage `<title>`: *"Velmore Hotel & Spa Conference and Event Venue"* and meta description: *"…located in Centurion, is an ideal destination for government & corporate conferences… for 1200 pax."* — **conference-only framing** that ignores weddings, accommodation, spa and dining, and uses the jargon "pax". `[verified]`
- Hero headline: *"Your Destination For Inspired Celebrations"* — **a vague luxury slogan**; a stranger cannot tell in 5 seconds that this is a hotel/estate near Pretoria offering stays + weddings + conferences. Fails the OS hero category-clarity test. `[verified]`
- **Location ambiguity**: the same offer is called "in Centurion", "in Pretoria", and sits in "Erasmia" across pages, with no consistent lead location. `[verified]`

---

## 4. Facts extracted from the current site(s)

**Accommodation** `[client-stated]`
- Room types shown: **Presidential Suite, Deluxe, Standard, Twin** (but only 3 room CPT pages exist — Presidential has no page; "99 rooms" claimed on home, "169" on the demo page, **38** on HRS → **true count unconfirmed**).
- Prices (home/offers only): Deluxe **from R1,150**, Twin **from R990**, Standard **from R990**. Accommodation page itself shows **no prices**.

**Conference venues** — named on `velmorehotel.co.za`: De Bastille, De Charmant, Tres Sage, Martells, Voltaire & Satre (Satre/Voltaire), The Vieux Cheval. Copy claims "**25 delegates … up to 1,200 people**" but **no per-venue capacity table**. `[client-stated]`

**The real venue capacity table** (from `velmorehotelestate.co.za/venues`) `[verified — second official site]`:

| Venue | Capacity | Size |
|---|---|---|
| Sabor Boardroom | 14 | 40 m² |
| Fumar Boardroom | 12 | 30 m² |
| Zudor Boardroom | 12 | 30 m² |
| The Vuitton Boardroom | 18 | 50 m² |
| The Cartier Room | 30 | 50 m² |
| The Satre Room | 50 | 100 m² |
| The Voltaire Room | 50 | 100 m² |
| Private Dining | 18 | 30 m² |
| The Vieux Cheval Cellar | 60 | — |
| Martells | 150 | 150 m² |
| The De Voir Maison | 200 | 300 m² |
| Beach & Pool Terrace | 200 banquet / 300 concert | — |
| Tres Sage | 500 | 600 m² |
| De Bastille | 750 | 1,000 m² |
| De Charmant (outdoor) | 1,500+ concert | — |

> The redesign should surface this table (verified with the client) on the new site — it is exactly the capacity data competitors hide (§competitor gap map) and the current *primary* site fails to show.

**Weddings** — packages: **Classic from R400 pp · Grande from R500 pp · Royal Velmore from R950 pp** `[client-stated]`; venue "D' Cha" referenced in captions; 40+ gallery images **with filename-only alt text** (image-SEO fail). `[verified]`

**Spa** — **Allura Day Spa** on the current site `[client-stated]`; **legacy listings still say "Bakwena Day Spa"** (a live conflict to clean up). `[verified]` No treatment menu published.

**Dining** — a restaurant/bar/terrace and a **Boma** are referenced; **no restaurant brand name, menu or hours published.** `[verified]` Also a **certified halal kitchen** per one listing `[client-stated]`.

**Contact / NAP** `[verified]`: 96 Main Road, (Mooiplaats 355-JR), Erasmia, 0183 · phones **078 666 6000** (most consistent anchor) and **078 666 8000** · emails **bookings@** and **info@velmorehotel.co.za** · social: Facebook, Instagram (@velmorehotelofficial), YouTube (@velmorehotelestate). No map embed, no hours on the contact page. WhatsApp claimed on the same two numbers but **not confirmed as WhatsApp-enabled**.

---

## 5. Conversion & journey defects

- **One generic enquiry form for everything.** The same form (First/Last, Email, Phone, Date, Type-of-Function dropdown, Guests dropdown, Message) is used for conferences, weddings and general contact. It has a **broken stray field "Function Last First"** and cannot properly qualify or route a corporate RFP vs a wedding vs a spa booking. `[verified]`
- **No availability→book path that works end-to-end** (two engines, §2).
- **Every CTA is "BOOK NOW"** regardless of intent, all pointing to the contact form — no contextual CTAs (Check Availability / Request a Wedding Package / Request a Conference Proposal / Book a Spa Day). `[verified]`
- **No thank-you page, no tracking of conversions, no WhatsApp click-to-chat, no sticky mobile CTA.** `[verified]`
- **No trust content**: no reviews/testimonials, no star grading badge, no capacity proof on the primary site — despite ~1,600 real Google reviews existing. `[verified]`

---

## 6. Mobile & accessibility (observed)

- Cookie banner covers the hero and the only CTA on mobile, re-firing each load. `[verified]`
- Hero headline wraps to 3+ lines on a 375px viewport, pushing "Book Now" toward/below the fold. `[verified]`
- No sticky mobile call/WhatsApp bar. `[verified]`
- Gallery images lack meaningful alt text; contrast of white serif over a dark-but-busy photo is unmeasured. `[assumed — needs axe/contrast audit]`
- Full WCAG audit not yet run (will be part of Gate 3 on the new build); the current theme is not expected to pass axe cleanly. `[assumed]`

---

## 7. SEO / indexation risk register

| # | Issue | Impact | Fix in redesign |
|---|---|---|---|
| 1 | **Two live domains, two brands** (velmorehotel.co.za + velmorehotelestate.co.za) | Split ranking + review equity; brand confusion | Pick one canonical; 301 the other domain-wide |
| 2 | Demo pages indexed (`/heaven-resort-hotel/`, `/footer/`, `/modal-box/`) | Junk/foreign content in the index; brand risk | Remove; 410/301; noindex template parts |
| 3 | Duplicate contact pages (`/contact-us/` + `/contact-us-1/`) | Duplicate content | Consolidate → `/contact`, 301 both |
| 4 | Conference-only title/meta | Suppresses weddings/stay/spa search | New per-page metadata plan (Part 20) |
| 5 | No Hotel/Room/Event/FAQ schema | Missing rich results | Full schema plan (Part 20) |
| 6 | Filename-only alt text on 40+ images | Zero image SEO | Config-driven alt system (Part 16) |
| 7 | Stale `st_hotel`/`st_order` sitemaps | Crawl budget on dead artifacts | New route-generated sitemap |
| 8 | Duplicate TripAdvisor listings; Bakwena/Allura + name variants across directories | NAP inconsistency, weak local SEO | NAP standardisation + citation cleanup (Part 5/21) |
| 9 | No pages for dining/spa/team-building/celebrations | Whole clusters unranked | New page architecture (Part 6) |

---

## 8. Truth / Verification list (carry to the client — feeds Part 22)

Anything the redesign must NOT state as fact until the client confirms:

1. **Canonical business name** — "Velmore Hotel Estate" vs "Velmore Hotel & Spa" vs "Velmoré" (accent). One name, everywhere.
2. **Canonical domain** — which of the two sites survives; 301 plan for the other.
3. **True room count** — 99 vs 38 vs 169.
4. **Star grading** — is there a *current TGCSA* certificate? "4-star" is currently a marketing claim only.
5. **Per-venue capacities** — confirm the `velmorehotelestate.co.za/venues` table is current and correct.
6. **Wedding package inclusions & current prices** (R400/R500/R950 pp still valid?).
7. **Spa brand = Allura** (not Bakwena) + real treatment/package menu.
8. **Restaurant name, menu, hours**; Boma; **halal-kitchen certification**.
9. **Correct primary phone** (resolve 6000 vs 8000 vs the 9-digit typo on the estate site) + reception/check-in hours + WhatsApp-enabled number.
10. **Ownership / legal entity** (historical Orion / Best Western ~2016 appears lapsed — confirm current independent status).
11. **Founding / opening year** and any renovation timeline.
12. **Drive times** to Pretoria CBD, Centurion, Johannesburg, OR Tambo, Lanseria, Gautrain.
13. **Review consent** for any testimonials used; confirmation before any `AggregateRating` schema (Google 4.0★/~1,600 is real but see trust strategy, Part 12).
14. **Team-building offering** specifics.
15. **Real current special offers** (to replace the placeholder offers page).

> Reputation note (business risk, not for site copy): verified review themes praise the **gardens, setting, spacious rooms and spa**, but recurring complaints cluster on **event catering (cold/late food at large functions), cleanliness/maintenance, and service inconsistency during "management transitions."** The site cannot hide this, and shouldn't try to; the conversion strategy (Part 10/12) leans on *specific, verifiable* proof (capacities, real photography, named packages, review volume) rather than a bare 4.0★ score, and the client should treat service-recovery as a parallel operational track so the new site's promises are kept.
