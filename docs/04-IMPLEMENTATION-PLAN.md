# 04 — PHASED IMPLEMENTATION PLAN (Part 23)

**Pipeline:** Bbettr Website OS 8-phase model. Design is Phase 4, not Phase 1. Each phase ends with a client review (present-then-approve) and a gate. **No code until this blueprint + the § pending confirmations are approved.**

---

## Where we are
- **Phase 1 UNDERSTAND** — ✅ substantially complete (audit + business/competitor/SEO research + Client Brief). Gate 1 **not yet passed** — blocked on the § pending confirmations ([03-CLIENT-INFO-REQUIRED.md](03-CLIENT-INFO-REQUIRED.md) §B/C).
- **Phase 2 POSITION** — ✅ drafted (positioning, journeys, messaging in this blueprint) — confirm with client.
- **Phase 3 ARCHITECT** — ✅ drafted (sitemap, keyword map, nav) — confirm.

## The plan from here

### Gate 1 — close research (client working session)
Collect the §B/C answers; finalise canonical name + domain; confirm capacities/prices/room count; grading + review-consent decisions; access (domain/GHL/GBP/analytics/booking). **Output:** Gate-1-passed Client Brief.

### Phase 4 — DESIGN (Visual Direction Brief + tokens)
Analyse logo + photography → finalise palette (Direction 1 vs 2), typeface pairing, density mode, motion character, radius/elevation, surface rhythm, dark-spotlight moments, contrast pairs verified. Finalise the **Hero Brief** (Part 15). Low-fi → hi-fi of Home + one hub (Weddings or Conferences) for approval. **Gate 2.**

### Phase 5 — BUILD (config-driven, in stages, each reviewed)
Repo `bbettr-agency/Velmore-Hotel-Estate` (Next.js 14 + TS + Tailwind + Framer Motion, Vercel), config-driven, GHL backend, handover docs in from templates. Suggested build order:
1. **Foundation** — tokens/tailwind, layout, nav + sticky mobile bar, footer (Bbettr credit), SEO/metadata factory, schema scaffolding, image system (config + folders/READMEs), forms system (GHL) + thank-you pages.
2. **P0 pages** — Home (all sections, hero), Accommodation (+ eZee booking), Weddings (+ packages), Conferences (+ capacity table), Allura Day Spa, Contact/Directions.
3. **P1 pages** — Events (year-end / team-building / celebrations), Restaurant, Specials, Gallery, About, FAQ.
4. **Content** — real copy in the client's voice, all facts verified; strip every trace of the old demo/placeholder text; per-image alt.

### Phase 6 — VERIFY (Gate 3, hard)
Build/lint/tsc clean; Lighthouse ≥95 mobile, LCP<2.5 CLS<0.1 INP<200; axe zero critical; mobile 360/390/768; schema validates; every conversion path test-fired (form→GHL→notification, tel:, WhatsApp, booking); truth check (every claim traces to a verified brief item). QA report.

### Phase 7 — LAUNCH (Gate 4)
DNS/SSL; **301 map live** (both domains + old pages; demo pages removed/410; ranking pages preserved); Search Console verified + sitemap submitted; GBP linked + NAP/citation cleanup (merge duplicate TripAdvisor, Bakwena→Allura); GA4 events verified firing in production; 404; launch report.

### Phase 8 — GROW
Publish P1 content/FAQ/blog for the content-gap topics; build P1 venue/location pages as P0 ranks; monitor rankings/CWV/conversions; get listed on the SERP-dominating aggregators; quarterly review. Post-launch OS retro → commit learnings (first flagship **hospitality** project — likely seeds a hospitality playbook).

---

## Indicative sequencing (calendar TBC on client responsiveness + photography)
| Stage | Depends on |
|---|---|
| Gate-1 confirmations | client working session |
| Design (Phase 4) | Gate 1 + logo/photo access |
| Photography shoot | client approval (can run parallel to build foundation) |
| Build P0 | Gate 2 approval |
| Build P1 + content | P0 approved + client facts |
| Verify + Launch | content complete + access (GHL/eZee/DNS/GBP) |

**Critical-path risks:** (1) the two-domain/brand decision blocks canonical + 301 work; (2) unconfirmed capacities/prices/room-count block headline copy; (3) photography gaps (dining/spa) block those pages; (4) booking-engine access blocks the Stay journey. All are client-owned — surfaced now so they don't stall the build.
