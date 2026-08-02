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

## Status (2026-08-02) — PAUSED
- ✅ **Architecture & documentation phase COMPLETE and approved** (research + 29-part blueprint + Business Knowledge Base + OS v2.3.0/v2.4.0).
- ✅ **Business Knowledge Base created** (`knowledge-base/`) — client knowledge separated from project knowledge.
- 🔑 **Gate 1 still awaiting client confirmations** (see Client-blocked + `docs/03-CLIENT-INFO-REQUIRED.md`).
- ⛔ **No design or development authorised.** Do NOT begin: visual design · wireframes · development · component creation · image-folder setup · content writing · SEO page implementation · CRM integration · further OS architecture changes.
- 📦 **Both repositories pushed & clean:** `velmore-hotel` and `website-os` (OS @ `3af9d3d`).
- ➡️ **Next session starts by** reviewing the remaining Gate-1 client-confirmation requirements and determining what information still needs collecting — *before* any design.

## ⏳ Pending
- [ ] Gate-1 confirmations (see Client-blocked) → then Phase 4 DESIGN (Visual Direction Brief + tokens)
- [ ] Create client repo from canonical structure + copy handover templates (Phase 5 start)

## 🔑 Client-blocked (waiting on client)
- [ ] Canonical **business name** + canonical **domain** (+ 301 decision)
- [ ] True **room count**; confirm **venue capacities**; **wedding/conference package** inclusions + current prices; **room rates**
- [ ] **Spa** = Allura confirm + treatment menu; **restaurant** name/menu/hours; halal cert
- [ ] Correct **phone** + **hours** + WhatsApp number; **real current offers**
- [ ] **TGCSA grading** certificate (else no star claim); **review consent** + AggregateRating decision
- [ ] Ownership/entity; founding year; team-building specifics; drive-times (we can measure)
- [ ] Access: **domain/DNS, GHL, GBP, GA4, eZee booking engine, logo vectors, photography** (+ shoot approval)
Full list: `docs/03-CLIENT-INFO-REQUIRED.md`.

## Gate results
| Gate | Status | Date | Notes |
|---|---|---|---|
| 1 Research | **Draft — not passed** | 2026-08-02 | Brief drafted; blocked on § pending client confirmations |
| 2 Pre-build | — | | after Phase 4 design |
| 3 Verify | — | | Lighthouse/CWV targets in blueprint Part 20 |
| 4 Launch | — | | 301 map + citation cleanup required (redesign) |

## Known notes / decisions
- **Density mode:** Balanced (Editorial moments) · **Motion:** Considered/premium · **Hero:** Archetype A Editorial + journey selector — all `[proposed]`, finalise Phase 4.
- **Palette (proposed, not final):** Direction 1 "Estate Green & Champagne" (recommended) vs Direction 2 "Provence Twilight" — decide against logo/photography in Phase 4. Accent reserved for primary CTA only.
- **Booking:** consolidate on eZee/iPMS247 for rooms; retire Traveler `st_hotel`/WooCommerce; GHL for event/spa enquiries.
- **Trust:** lead with review *volume* + specifics, not the bare 4.0★; no fabricated proof; grading only if TGCSA certificate produced.
- **Reputation risk (operational, client):** review complaints on event catering/maintenance/service — parallel service-recovery track so site promises hold.
- No demo data in this project. Prices/capacities/room-count remain `[client-stated]` until confirmed; not to be shipped as fact before Gate 1 closes.
