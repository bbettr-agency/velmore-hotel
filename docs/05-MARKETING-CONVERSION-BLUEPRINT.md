# 05 — MARKETING & CONVERSION BLUEPRINT

**Project:** Velmore Hotel Estate · **Standard:** `SYSTEM/04-MARKETING-ENGINE.md` (OS v2.3.0)
**Date:** 2026-08-02 · Applies the marketing-first philosophy to Velmore.
**Principle:** we are not building Velmore a website — we are building a **marketing platform**. Velmore will run paid search, Performance Max, Meta ads, organic, GBP, email and referral traffic into it. **Every important page must be a landing page** that converts standalone, with tracking, attribution and CRM handoff built in. Tags: `[verified] [client-stated] [assumed] [proposed]`.

---

## PART 24 — REVENUE PRIORITY MATRIX

Structure follows revenue. Exact % needs client confirmation (Brief §1 80/20 is `[assumed]`); priorities below are our recommendation from deal value × demand × intent.

| Service | Deal value | Demand (SEO/paid) | Intent | Revenue role | **Priority** |
|---|---|---|---|---|---|
| **Weddings** | very high (venue+catering+rooms) | high, winnable organic + paid | high | flagship | **P0** |
| **Conferences / residential** | very high (multi-day + rooms + catering) | high (directory + paid) | high | flagship | **P0** |
| **Accommodation** | medium, high volume | high (OTA + branded + long-tail) | very high | direct-booking engine | **P0** |
| **Allura Day Spa** | low–medium, repeat + local | strong deal-seeking local | high | cross-sell + local acquisition | **P0** |
| **Year-end functions** | high, seasonal | seasonal spike (Sep–Nov) | high | seasonal revenue | **P1** |
| **Private celebrations / matric** | medium, seasonal | seasonal (matric Oct) | medium-high | fill-the-calendar | **P1** |
| **Team building** | medium | operator-led, venue-as-host | medium | supporting | **P1** |
| **Restaurant / dining** | low, high frequency + local | local near-me + GBP | high local | footfall + local brand | **P1** |
| **Specials** | varies | deal-seeker + branded | high | conversion accelerant | **P1** |

**This matrix drives:** homepage section order (Part 8) leads Weddings + Conferences + Stay; nav order surfaces the P0 lines first with a persistent **Check Availability** button; build order = P0 pages first (Part-04 plan); ad budget points at P0 landing pages; CRM pipelines prioritise event enquiries. **→ confirm the revenue mix with the client to lock the ordering.**

---

## PART 25 — CAMPAIGN ARCHITECTURE

Think in campaigns, not pages. Each P0/P1 service = its own campaign → its own message-matched landing page → **one** conversion → its CRM pipeline. Each landing page is a real SEO page (no throwaway PPC duplicates).

| Campaign | Channels | Landing page | Primary conversion | CRM pipeline |
|---|---|---|---|---|
| **Accommodation** | Google Search, PMax, Meta, GBP | `/accommodation` | Check Availability → Book (eZee) | Bookings |
| **Weddings** | Google Search, Meta/IG (engaged), PMax | `/weddings` (+`/weddings/packages`) | Request Wedding Package / Book a Venue Tour | Weddings |
| **Conferences** | Google Search, PMax, LinkedIn/Meta, directories | `/conferences` | Request a Conference Proposal (RFP) | Conferences |
| **Spa (Allura)** | Google Search, Meta, deal platforms, GBP | `/allura-day-spa` | Book a Spa Day | Spa |
| **Year-end functions** (seasonal) | Google Search, Meta | `/events/year-end-functions` | Enquire / Request Proposal | Events |
| **Matric / celebrations** (seasonal) | Meta/IG, Google | `/events/celebrations` | Plan an Event | Events |
| **Team building** | Google Search, operator partners | `/events/team-building` | Enquire (host-venue) | Events |
| **Restaurant** | Google/GBP, Meta local | `/restaurant` | Book a Table / View Menu | Dining/GBP |
| **Specials** | Meta, email, branded search, GBP posts | `/specials` | Claim / Enquire | routed by offer |

**Message match examples (ad → page):**
- Google *"wedding venue Centurion with accommodation"* → `/weddings` H1 names *wedding venue + Centurion + on-site accommodation*, capacity + packages above the fold.
- Meta carousel of real weddings → `/weddings` opens on the emotional gallery + "Book a Venue Tour" + WhatsApp (low friction, mobile).
- Google *"conference venue Centurion 200 delegates"* → `/conferences` leads with the **capacity table** + "with accommodation" + RFP.
- Meta *day-spa special* → `/allura-day-spa` opens on the package + price + "Book a Spa Day".

---

## PART 26 — LANDING-PAGE READINESS (per P0 page)

Ad-Budget Test applied. Each page must convert without the homepage.

| Page | Intent answered above fold | Trust (before ask) | Objections removed | Primary CTA | Ready when |
|---|---|---|---|---|---|
| `/accommodation` | room types + from-rates + setting + drive-times | review volume, best-rate promise | price, location, why-direct | Check Availability | rates + working eZee embed |
| `/weddings` | spaces + capacity + package from-price | real weddings, review volume | capacity fit, cost, food/service | Request Package / Book Tour | capacities + prices + gallery confirmed |
| `/conferences` | capacity table + configs + "with accommodation" | client logos/testimonials, review volume | capacity, AV, catering, parking, location | Request a Proposal | capacity/config/AV facts confirmed |
| `/allura-day-spa` | treatments + package prices | reviews, real spa photos | what's included, price, couples | Book a Spa Day | Allura menu + prices + photos |

**Attention ratio decision:** the hubs are also SEO pages, so keep the primary nav **but** enforce one dominant CTA + repeated CTA after each proof block. For **dedicated paid campaign variants** (e.g. a spa-special or year-end push), consider a **simplified-nav variant** (attention ratio → ~1:1) via a `?variant=` hero/message swap — same URL, no duplicate page. `[proposed]`

**Conversion architecture (every page answers):** why they clicked · their problem · what must be answered now · objections (Brief §3) · trust + timing · the one next action · what happens after they enquire (auto-reply + speed-to-contact).

---

## PART 27 — TRACKING PLAN (built in Phase 5, not after)

Consent-aware (POPIA), GTM-led. Stack: **GA4 · Google Tag Manager · Meta Pixel · Meta Conversions API · Google Ads Conversion Tracking + Enhanced Conversions · Microsoft Clarity · Search Console** (+ optional call-tracking).

**Event map (Velmore):**
| Event | Fires on |
|---|---|
| `booking_click` | Check Availability / eZee open |
| `booking_confirmed` | eZee thank-you (if engine passes it) |
| `lead_form_submit` | wedding / conference / event / spa forms (`service` param) |
| `whatsapp_click` / `call_click` / `email_click` | channel clicks (sticky bar + pages) |
| `reservation_click` | restaurant table booking |
| `brochure_download` | wedding + conference brochure / rate-card |
| `cta_click` | primary CTA (with `location`,`label`) |
| `scroll_depth` | 25/50/75/100% per landing page |
| `thank_you_view` | `/thank-you/[stay|wedding|conference|event|spa]` |

Each conversion mirrored to **Google Ads (Enhanced Conversions)** + **Meta (Pixel + CAPI)** for full attribution. Every journey ends on a tracked thank-you page.

---

## PART 28 — FORM ATTRIBUTION & CRM (GHL)

**Hidden fields captured on every form** (first-visit persisted): `utm_source/medium/campaign/term/content · gclid · fbclid · landing_page · referrer · device · first_page · returning_visitor · consent_status` → so GHL knows the **channel + campaign + landing page** behind every lead.

**Lead-Routing Map:**
| Form | Pipeline | Stage | Lead source | Owner/inbox | Automation |
|---|---|---|---|---|---|
| Wedding | Weddings | New Enquiry → Tour Booked → Quoted → Won | campaign/channel | events@ / weddings coord. | auto-reply + brochure, notify, 5-touch follow-up |
| Conference | Conferences | New RFP → Proposal Sent → Site Visit → Won | campaign/channel | events@ / conference coord. | auto-reply + capacity chart, notify, RFP follow-up |
| Event (year-end/matric/team) | Events | New → Quoted → Won | campaign/channel | events@ | auto-reply, notify, seasonal follow-up |
| Spa | Spa | New → Booked | campaign/channel | spa@ / bookings@ | auto-reply + specials, notify |
| Accommodation overflow / general | Bookings | New → Handled | campaign/channel | bookings@ | auto-reply, notify |

Qualification captured per form (date, guests/delegates, budget band, occasion) so sales prioritises. **All test-fired end-to-end at Gate 3; automations live at Gate 4.** *(Needs GHL access + confirmed team owners — Brief §9 / doc 03 §E.)*

---

## PART 29 — SEO + ADS AS ONE SYSTEM (Velmore)

- The **same** `/weddings`, `/conferences`, `/accommodation`, `/allura-day-spa` pages serve organic **and** paid — authority + internal links + schema accrue to the pages we advertise.
- Fast, message-matched, trust-forward pages **raise Quality Score → lower CPC** (critical where conferences/accommodation SERPs are directory/OTA-dominated and clicks are expensive).
- Ads reveal which offers/keywords convert → feed SEO copy + FAQ; organic capacity/price content → feed ad landing quality. No throwaway PPC pages (avoids the cannibalisation + index bloat the current WordPress site already risks).
- **Aggressive now:** while Royal Elephant's domain is broken and Irene is mid-rebrand, paid + organic on the same strong pages compounds the land-grab (Brief §7 gap map #4).

---

### How this changes earlier parts of the blueprint
- **Homepage order (Part 8) & nav (Part 9)** are now explicitly ordered by the Revenue Priority Matrix (Part 24).
- **Every hub page (Part 7)** is treated as a standalone landing page (Part 26), not a sub-page of the homepage.
- **Conversion & booking (Parts 10–11)** gain the tracking, attribution and CRM layer specified here (Parts 27–28).
- **Gate readiness:** Velmore must pass the Landing-Page Readiness Scorecard + tracking/CRM checks in `PIPELINE/gates.md` (Gate 2/3/4, marketing-engine items).
