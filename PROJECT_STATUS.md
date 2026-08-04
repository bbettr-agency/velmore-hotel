# Project Status — Velmore Hotel Estate

**Last updated:** 2026-08-02
**Owner:** Bbettr Agency
**Client:** Velmore Hotel Estate / Velmore Hotel & Spa (canonical name TBC — see blocking item)
**Type:** full website **redesign** · hospitality (hotel + weddings + conferencing + spa)
**Repo:** `github.com/bbettr-agency/velmore-hotel` (official — source of truth) · **OS version:** v2.3.0 Marketing Engine + v2.4.0 Business Intelligence (both approved, committed & pushed)
**Playbook:** none yet (first flagship **hospitality** build — candidate to seed one)
**Live:** two existing WordPress sites (velmorehotel.co.za + velmorehotelestate.co.za); new build not started. Preview port: TBD

---

## ✅ Complete
- [x] Full audit of the existing site(s) — pages, tech, schema, sitemap, robots, content defects, NAP, indexation risks → `docs/01-CURRENT-SITE-AUDIT.md`
- [x] Business & reputation research (ownership, grading, GBP 4.0★/~1,600, review themes, venue capacities, NAP fragmentation)
- [x] Competitor teardown (8 rivals, table stakes, gap map)
- [x] SEO & local keyword research (9 clusters, keyword-to-page map, GBP categories, content gaps)
- [x] Client Brief drafted → `docs/CLIENT-BRIEF.md`
- [x] Full redesign blueprint (Parts 2–21) → `docs/02-REDESIGN-BLUEPRINT.md`
- [x] Client-info register (Part 22) → `docs/03-CLIENT-INFO-REQUIRED.md`
- [x] Phased implementation plan (Part 23) → `docs/04-IMPLEMENTATION-PLAN.md`
- [x] **Marketing & conversion blueprint (Parts 24–29)** → `docs/05-MARKETING-CONVERSION-BLUEPRINT.md` (revenue matrix, campaigns, landing-page readiness, tracking, attribution, CRM) — built on new OS v2.3.0 `SYSTEM/04-MARKETING-ENGINE.md`
- [x] **OS upgrade authored:** v2.3.0 Marketing Engine (`SYSTEM/04` + operating-model/discovery/brief-schema/gates/changelog) — Velmore is its first application
- [x] **Business Knowledge Base created** → `knowledge-base/` (BUSINESS-KNOWLEDGE-BASE.md, voice-print.md, learnings.md) — the living client-level asset; `docs/CLIENT-BRIEF.md` now references it (client facts authored once, in the BKB)
- [x] **OS upgrade authored:** v2.4.0 Business Intelligence + Continuous Learning (`SYSTEM/03`, `PIPELINE/learning-loop.md`, root `LEARNINGS.md` + amendments) — three knowledge scopes / three intelligence layers / dual-output loop. Velmore is its first application.
- [x] **Gate 1 client pack** → `GATE-1-COMPLETE-CHECKLIST.md` (internal) + `CLIENT-INFORMATION-REQUEST.md` + `client-pack/*.docx/.pdf` (sendable).
- [x] **Build-ready architecture/UX specs (no client facts):** `docs/06` IA · `07` Page Blueprints · `08` Conversion/Tracking/CRM · `09` Design-system direction · `10` Component inventory.
- [x] **Visual Direction — inspiration & design reasoning** → `docs/11-VISUAL-DIRECTION-INSPIRATION.md` (premium hospitality patterns analysed → reusable principles → OS + Velmore mapping; the creative foundation feeding the Phase-4 Visual Direction Brief). Not design/wireframes/code.

## Status (2026-08-03) — GATE 1 COMPLETE · GATE 2 READY

Client decision (2026-08-03): the remaining unknowns are **content-completion items, not strategic uncertainties** — they do not affect IA, navigation, journeys, conversion strategy, components, design system, creative direction, visual hierarchy, UX or layout. They are therefore reclassified from Gate-1 blockers to **Content Readiness**. (Project-level decision — Website OS unchanged.)

| Stage | State |
|---|---|
| **Gate 1 — Business Discovery & Validation** | ✅ **COMPLETE** (client response integrated; BKB v0.2 authoritative; audit in [`GATE-1-REVIEW.md`](GATE-1-REVIEW.md)) |
| **Content Readiness** | 🔄 **IN PROGRESS** — items populate placeholders during Design/Dev; tracked in [`docs/03-CLIENT-INFO-REQUIRED.md`](docs/03-CLIENT-INFO-REQUIRED.md) |
| **Gate 2 — Visual Design** | 🔄 **IN PROGRESS** — **Visual Language** [`docs/12`](docs/12-VISUAL-LANGUAGE.md) · **Creative Concept "The Confident Host"** [`docs/13`](docs/13-CREATIVE-CONCEPT.md) · **North Star** [`docs/14-NORTH-STAR.md`](docs/14-NORTH-STAR.md) delivered. **Hero is next, on agreement of the North Star.** |

- 🧭 **Confirmed truths (BKB v0.2):** brand **Velmoré Hotel & Spa** / **Velmore Hospitality Group** (3 sites incl. **SCC 1,300-hall**); **50 rooms**; **corrected venue registry** (Bastille 650/Trisage 300/D'Charmant 550…); **CRM = HubSpot**; **Conferences #1**; **"Book a viewing"** primary CTA; **certified halal** headline; **no alcohol/bar**; **Pretoria + Centurion**; hero = **D'Charmant Glass Hall at dusk**.
- 🔄 **Content Readiness items** (populate placeholders, do not block design): restaurant name · spa trading name/operator · per-night room rates · wedding pricing structure · hotel boardroom names — plus High/Medium/Low + access batch (`docs/03`).
- 🛡️ **Guardrail (unchanged):** config-driven, verified-only rendering — **no page goes live showing a Content-Readiness item as fact.** Placeholders render only when confirmed; nothing fabricated ships (OS truth standard).
- ✅ **Foundations done:** BKB + voice-print (v0.2), `docs/06–11` (IA, page blueprints, conversion/tracking/CRM, design-system direction, components, visual direction), client onboarding pack.
- 🚫 **Website OS frozen** — no OS changes; improvements route through the Learning Loop after the build.
- 📦 **Both repos pushed & clean:** `velmore-hotel`; `website-os` @ `3af9d3d`.
- 🎨 **Gate 2 started — Visual Language (design DNA) complete** → `docs/12` (colour, type, grid, spacing, radius, shadows, buttons, forms, cards, icons, imagery, photography, motion, scroll, hover, transitions, glass/blur, luxury cues, hospitality principles, mobile, a11y, component examples). Committed values; one dependency = verify exact hex/letterforms against the **logo vector**.
- 🎯 **Creative Concept complete** → `docs/13` — the emotional foundation ("The Confident Host": capable · gracious · quietly elegant · genuinely glad you're here). Sharpens the three pillars (Capability→confidence, Hospitality→welcome+belonging, Elegance→the manner) + Ease as the conversion emotion + the decision test. Every future decision inherits it.
- ⭐ **North Star** (final, simplified) → `docs/14`: ***"Every occasion — and everyone in it — held in capable, caring hands."*** The one promise every decision is measured against. **Creative foundation is now complete.**
- 🖼️ **Hero exploration complete** → `docs/15-HERO-EXPLORATION.md` — 7 directions interrogated, compared, narrowed. **Recommended: Primary = "The Glass Hall at Dusk, Held"** (editorial full-bleed of D'Charmant at dusk + a capability/trust proof strip + Book-a-viewing; journey selector demoted to a band below); **Backup = "One Site, One Team, One Invoice"** (split copy/evidence — and the natural Conferences-page hero). Awaiting your selection.
- 🎬 **Hero art direction complete** → `docs/16-HERO-ART-DIRECTION.md` — Creative-Director treatment of the chosen Primary hero (D'Charmant Glass Hall at dusk): camera/lens/light/atmosphere/scale/composition/depth/focus/movement/pacing, the **Hero Cinematic Narrative** (4 frames), mobile crop, anti-direction, shot note. Primary direction approved by client (2026-08-03).
- 🖥️ **Hero composition studies (VISUAL)** → `design/hero-compositions.html` (+ `.pdf`) — 6 compositions of the same creative idea, differing only in visual hierarchy; per-composition annotations + comparison + recommendation. **Recommended homepage hero: Composition 1 "Lower-Third, Left"** (art-direction-native; strong on every axis; best mobile parity); Composition 4 "Split Panel" = the natural **Conferences** hero. Placeholder imagery, indicative copy.
- 🎨 **Homepage first viewport DESIGNED (first hi-fi)** → `design/homepage-first-viewport.html` — the whole first screen as one editorial composition (navbar + Composition-1 hero + promise + trust strip + Certified-Halal badge + Book-a-viewing/Enquire + crafted dusk image + scroll cue + ivory next-section peek), desktop + mobile. Placeholder photography + indicative copy. Compositions assigned: **Home = 1, Conferences = 4, Weddings = 3.**
- 🚀 **MILESTONE 1 SHIPPED (live):** the first viewport built as a real **Next.js 14 + TS + Tailwind** app (config-driven; tokens from docs/12; Fraunces + Inter) and **deployed to production → https://velmore-hotel.vercel.app** (reviewed live desktop + mobile; no console errors). Verified build ✓ lint ✓ tsc ✓ · first-load 94 kB.
  - **Dev workflow (this project):** milestone → build/lint/tsc → verify → commit (conventional) → push `main` → Vercel auto-deploys → review live → report → **stop for review**. Push per reviewable milestone (not every change). Direct pushes to `main` permitted.
  - **Vercel gotcha fixed:** project was a static preset from the docs-only era (Output Directory `public`) → `next build` failed looking for `public/`. Pinned **`vercel.json` → framework "nextjs"**. Deploy status pollable via `gh api repos/bbettr-agency/velmore-hotel/commits/<sha>/status`.
- ✅ **MILESTONE 2 SHIPPED (live):** complete **homepage Journey Selector** section (Weddings · Conferences · Events · Stay cards with proof hooks) + the **whole site wired to real routes** — all `#` gone. Scaffolded on-brand temporary pages for `/weddings /conferences /accommodation /dining /spa /events /gallery /about /contact` (unique per-page titles). Route naming: `/dining` + `/spa` generic (names unconfirmed); docs/06 updated. Reviewed live desktop+mobile; build/lint/tsc ✓; no console errors.
- ✅ **MILESTONE 3 SHIPPED (live):** **Estate Introduction / Capability** section (`components/home/EstateIntro.tsx`) — a dark-spotlight editorial section below the Journey Selector: the *one estate, one team, one invoice* story + stat pairs (**1,300 seats · 3 venues · 50 rooms · 1 invoice**) + certified-halal welcome + "held here" links (/conferences /weddings /events /accommodation). Story, not a feature list; supports the North Star. Reviewed live; build/lint/tsc ✓. Docs/07 synced; OS candidates logged in `design/os-component-candidates.md`.
- ✅ **MILESTONE 4 SHIPPED (live):** **Conferences Preview** (`components/home/ConferencesPreview.tsx`) — image-led editorial section for the #1 revenue pillar: labelled photography placeholder + the *one team, one invoice, 1,300 delegates at the SCC* story + 4 capability points + **Book a Viewing** (/contact) & **Explore Conferences** (/conferences), tracking-ready (`data-cta`/`data-location`). Reviewed live desktop+mobile; no console errors; build/lint/tsc ✓. Docs/07 §6 synced; OS candidates logged. `Button` gained an additive `track` prop (locked sections unaffected).
- 🔒 **Milestones 1 (hero), 2 (journey selector), 3 (estate intro) LOCKED** — untouched. Homepage so far: Hero → JourneySelector → EstateIntro → ConferencesPreview.
- 🧩 **Route architecture** now final: `config/site.ts` `routes` map is the single source; `components/site/RoutePlaceholder.tsx` renders temp pages; per-page metadata via `lib/metadata.ts`.
- 📸 **Photography Strategy & Image Manifest COMPLETE** → **[`docs/17-PHOTOGRAPHY-STRATEGY.md`](docs/17-PHOTOGRAPHY-STRATEGY.md)** — the single source of truth for every image: philosophy (North Star / Confident Host / gap-close), one grade for the whole estate, per-section art direction, and the full Image Manifest (ID / page / purpose / orientation / priority / exist-vs-required / placeholder-vs-final / filename / alt / SEO). Docs-only; docs/09 §5 now points to it. **Every future section/page references docs/17 before choosing/requesting imagery.**
- 💍 **Milestone 5 SHIPPED — Homepage Weddings Preview** (`components/home/WeddingsPreview.tsx`): the emotive counterpoint to Conferences (copy-left / portrait image-right / tinted `mist` / italic kicker / hairline "Held for you"). Confirmed facts only; `.wed-*` labelled placeholder; CTAs Book a Viewing + Explore Weddings (tracking-ready). On-page order: Hero → JourneySelector → EstateIntro → Conferences → **Weddings**.
- ➡️ **Next (on approval):** continue the **homepage** — Stay / Spa / Dining previews, then trust / final-CTA / footer (per docs/07), one reviewable milestone at a time. *(Open question flagged: final §5-vs-§6 order of Weddings vs Conferences.)* Then, once the homepage is fully approved, pages in order: Conferences → Weddings → Accommodation → Dining → Spa → Events → Gallery → About → Contact.
- 🧭 **Standing rules (this project):** keep repo docs synced with implementation *before* pushing; flag reusable patterns as future OS-component candidates (`design/os-component-candidates.md`) without touching the frozen OS.

## ⏳ Next
- [ ] **Gate 2 (Visual Design)** on approval — Visual Direction Brief + Hero Brief → low-fi→hi-fi Home + Conferences hub for review.
- [ ] Create the build repo/app scaffold (Phase 5 start) when design is approved.

## 🔄 Content Readiness (populate placeholders during Design/Dev — NOT design blockers)
Live register: **[`docs/03-CLIENT-INFO-REQUIRED.md`](docs/03-CLIENT-INFO-REQUIRED.md)**. Content-critical (gate only the affected page's public **launch**, not its design): restaurant name · spa trading name/operator · per-night room rates · wedding pricing structure · hotel boardroom names. Plus High (NAP/hours/WhatsApp · halal certificate · TGCSA · client naming permissions · HubSpot portal · booking engine) · Medium/Low · and the **access batch** (domain/DNS · hosting · GBP · booking engine · **HubSpot** · GA4 · Search Console · GTM · Meta). Photography gap-fill (rooms/spa/food) — decide before design sign-off.

## Gate results
| Gate | Status | Date | Notes |
|---|---|---|---|
| 1 Research | ✅ **COMPLETE** | 2026-08-03 | Client response integrated (BKB v0.2). Remaining items reclassified as **Content Readiness** → `docs/03` · audit `GATE-1-REVIEW.md` |
| 2 Pre-build (Design) | 🟢 **READY TO BEGIN** | 2026-08-03 | Visual Direction Brief + Hero Brief next, on approval |
| 3 Verify | — | | Lighthouse/CWV targets in blueprint Part 20 |
| 4 Launch | — | | 301 map + citation cleanup required (redesign) |

## Known notes / decisions
- **Density mode:** Balanced (Editorial moments) · **Motion:** Considered/premium · **Hero:** Archetype A Editorial + journey selector — all `[proposed]`, finalise Phase 4.
- **Palette (proposed, not final):** Direction 1 "Estate Green & Champagne" (recommended) vs Direction 2 "Provence Twilight" — decide against logo/photography in Phase 4. Accent reserved for primary CTA only.
- **Booking:** consolidate on eZee/iPMS247 for rooms; retire Traveler `st_hotel`/WooCommerce; GHL for event/spa enquiries.
- **Trust:** lead with review *volume* + specifics, not the bare 4.0★; no fabricated proof; grading only if TGCSA certificate produced.
- **Reputation risk (operational, client):** review complaints on event catering/maintenance/service — parallel service-recovery track so site promises hold.
- No demo data in this project. Prices/capacities/room-count remain `[client-stated]` until confirmed; not to be shipped as fact before Gate 1 closes.
