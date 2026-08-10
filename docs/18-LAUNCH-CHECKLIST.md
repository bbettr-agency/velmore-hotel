# 18 — Velmoré Launch Checklist

**Actionable** register to take the site from *complete production build* → *public-launch-ready*.
**Owner key:** 🤖 = Claude can complete independently · 🙍 = needs Eloff/client input.
**Status:** ⬜ open · 🟡 in progress · ✅ done. Live: https://velmore-hotel.vercel.app · Repo: bbettr-agency/velmore-hotel.

---

---

## 0. Readiness (as of this pass)

| Track | % | Note |
|---|---|---|
| **Development** | **100%** | All 10 pages, section kit, forms, SEO, 404, image system — built, verified, live. |
| **Photography** | **~75%** | Real photos live for estate, gardens, weddings-reception, events, dining, food, gallery, arrival. **Gaps (placeholder):** guest rooms, spa, seated-conference, glass-hall-at-dusk, chapel-ceremony. |
| **Content** | **~60%** | Structure + confirmed facts in; copy is INDICATIVE pending sign-off; spa/restaurant names, rates, hours, packages unconfirmed (config-driven, name-neutral). |
| **CRM** | **~70%** | Form built + HubSpot-ready (env-driven) + mailto fallback; needs portal/form IDs to go live. |
| **SEO** | **~85%** | robots, sitemap, schema, OG/Twitter, canonical, titles/desc/alt done; pending final domain, old-URL redirects, GSC/GA/GBP. |
| **LAUNCH** | **~70%** | **Not** fully launch-ready — visible placeholders remain (room/spa imagery, no phone/address, indicative copy). Everything Claude can do independently is done; the rest is client input below. |

**Status: DEVELOPMENT COMPLETE — awaiting client content/credentials for public launch.**

## A. Photography (highest priority)
Real photography (246 images) is in `public/images/gallery/`. Mapped against the Image Manifest (`docs/17`).

| # | Item | Owner | Status |
|---|---|---|---|
| A1 | Categorise supplied images → per-vertical folders + descriptive filenames (`config/images.ts`) | 🤖 | ✅ |
| A2 | Replace CSS placeholders with real photos via `next/image` where a suitable image exists — home hero + all preview sections + all inner-page heroes/splits/bands/CTAs + gallery (all real) | 🤖 | ✅ |
| A3 | Keep clearly-labelled placeholders where **no** real image exists: **guest rooms** (accommodation hero uses estate exterior; room-detail splits stay placeholder), **spa** (all), **chapel interior** (weddings ceremony split), **D'Charmant glass-hall-at-dusk**, **seated-conference layout** (conferences scale-split, events scale-split) | 🤖 | ✅ |
| A4 | Never use construction/earthworks (restoration area), the dry field, the grounds-crew group, or the drinks/bar station (no-alcohol rule) | 🤖 | ✅ (excluded) |
| A5 | **Supply the missing shoots:** rooms (all types), spa, a real seated-conference set, D'Charmant glass hall at dusk, wedding ceremony in the chapel | 🙍 | ⬜ |
| A6 | Confirm consent for any identifiable guests/couples/staff before use | 🙍 | ⬜ |

## B. Copy & content (INDICATIVE → final)
All body copy is currently INDICATIVE (placeholder voice). Config-driven in `config/site.ts` + `config/pages.ts`.

| # | Item | Owner | Status |
|---|---|---|---|
| B1 | Sign off / edit final copy per page (headlines + body) | 🙍 | ⬜ |
| B2 | Restaurant **trading name** (dining stays name-neutral until then) | 🙍 | ⬜ |
| B3 | Spa **trading name / operator** (spa stays name-neutral until then) | 🙍 | ⬜ |
| B4 | Room **types, rates, availability** process | 🙍 | ⬜ |
| B5 | Wedding **package** structure / pricing guidance | 🙍 | ⬜ |
| B6 | Conference **breakaway rooms / boardroom** specifics, AV, capacities-by-config | 🙍 | ⬜ |
| B7 | Spa **treatment menu** (kept as "being finalised" placeholder) | 🙍 | ⬜ |

## C. Contact details & CTAs
| # | Item | Owner | Status |
|---|---|---|---|
| C1 | **Public phone number** (none shown yet — TO CONFIRM) | 🙍 | ⬜ |
| C2 | **Physical address** for footer + Contact + LocalBusiness schema + map | 🙍 | ⬜ |
| C3 | **WhatsApp** number (if used as a channel) | 🙍 | ⬜ |
| C4 | Confirm `bookings@velmorehotel.co.za` is the right enquiry inbox | 🙍 | ⬜ |
| C5 | Wire real address into footer/contact/schema once provided (config-driven) | 🤖 | ⬜ |

## D. Forms + HubSpot (CRM confirmed = HubSpot)
| # | Item | Owner | Status |
|---|---|---|---|
| D1 | Refactor `EnquiryForm` to production HubSpot-ready fields (first/last name, email, phone, enquiry type, date, guests, message) + validation + success state | 🤖 | ✅ |
| D2 | Wire submit to HubSpot Forms API (env `NEXT_PUBLIC_HUBSPOT_PORTAL_ID`/`FORM_ID`) with graceful mailto fallback until set | 🤖 | ✅ |
| D3 | **Provide HubSpot portal ID + form GUID** (or a private-app token + the target form/pipeline) — *which of the two portals?* | 🙍 | ⬜ |
| D4 | Map fields → HubSpot contact/deal props + pipeline routing (docs/08) | 🤖→🙍 | ⬜ |
| D5 | Thank-you state + conversion event on success | 🤖 | ⬜ |
| D6 | Booking engine (rooms) — is there one (eZee)? destination for "Check Availability"? | 🙍 | ⬜ |

## E. Reviews
| # | Item | Owner | Status |
|---|---|---|---|
| E1 | Gate the section so **no placeholder testimonials/rating render at launch** (`reviewsPreview.ready=false`) | 🤖 | ✅ |
| E2 | Provide the **Google Place / reviews source** (Place ID or API) to populate real reviews + curate featured ones | 🙍 | ⬜ |
| E3 | Enable star rating, count, quotes + `AggregateRating` schema **only** once real & consented | 🤖 (on E2) | ⬜ |

## F. SEO
| # | Item | Owner | Status |
|---|---|---|---|
| F1 | `robots.txt` + `sitemap.xml` (dynamic Next routes) | 🤖 | ✅ |
| F2 | Structured data — `Hotel`/`LocalBusiness` + `WebSite` (home) + `WebPage` + `BreadcrumbList` (every inner page). No address/phone/rating until confirmed. | 🤖 | ✅ |
| F3 | Per-page unique title/description/canonical/one-H1 (verified) | 🤖 | ✅ |
| F4 | Open Graph + Twitter card (all pages) + real **OG share image** (façade + brand) | 🤖 | ✅ |
| F5 | **Canonical production domain** (Vercel URL now — confirm final domain e.g. velmorehotel.co.za) | 🙍 | ⬜ |
| F6 | **301 redirects** from the two old sites' URLs (velmorehotel.co.za + velmorehotelestate.co.za) — needs old URL list | 🙍→🤖 | ⬜ |
| F7 | Google Search Console + GA4 (GTM) + Google Business Profile — provide access/IDs | 🙍 | ⬜ |
| F8 | Descriptive image filenames + meaningful alt text (`config/images.ts`) | 🤖 | ✅ |

## G. Branding / assets
| # | Item | Owner | Status |
|---|---|---|---|
| G1 | **Logo vector (SVG)** — current nav uses a text logotype | 🙍 | ⬜ |
| G2 | Favicon + app icons — interim branded 'V' (`app/icon.png`, `app/apple-icon.png`) until the vector arrives | 🤖 | ✅ |
| G3 | Brand colour/type sign-off against the real logo | 🙍 | ⬜ |

## H. Technical / QA
| # | Item | Owner | Status |
|---|---|---|---|
| H1 | Multi-width QA (1440/1280/768/390/375) — no overflow any page; nav, mobile menu, CTAs, form, footer all verified | 🤖 | ✅ |
| H2 | a11y — focus-visible rings, reduced-motion (motion-safe reveals + zoom), scrims for contrast over imagery, one H1/page, alt on every image, labelled form, aria mobile menu | 🤖 | ✅ |
| H3 | No console errors / hydration warnings (verified home + client pages); LCP = priority hero image, next/image sized to prevent CLS | 🤖 | ✅ |
| H4 | Custom **404** page (`app/not-found.tsx`) | 🤖 | ✅ |
| H5 | build / lint / typecheck green; Vercel deploy verified | 🤖 | ✅ (ongoing) |
| H6 | Analytics/consent (POPIA) banner if analytics added | 🤖 (on F7) | ⬜ |

---
*Independently-completable items (🤖) are being worked now and pushed continuously. 🙍 items are consolidated in the "WHAT ELOFF STILL NEEDS TO PROVIDE" list in the final readiness report.*
