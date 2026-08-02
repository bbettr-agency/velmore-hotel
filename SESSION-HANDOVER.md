# Session Handover — Velmore Hotel Estate

Context for the next session. Read this + `PROJECT_STATUS.md` + `docs/CLIENT-BRIEF.md` before working.

> ⚠️ **Read first:** the Bbettr Website OS (`~/Documents/Bbettr-Website-Os/SYSTEM/00-OPERATING-MODEL.md`, the Design Language + Hero System, `PIPELINE/gates.md`) and this project's `docs/` blueprint. **Do NOT write code — the project is in planning, awaiting client approval.**

## What this is
A full **redesign** of Velmore Hotel Estate (French-Provence hotel + weddings + conferences + spa + events estate in Erasmia/Centurion, between Pretoria & Johannesburg). We have completed a research + blueprint phase (audit, business/competitor/SEO research, Client Brief, 23-part blueprint). The primary conversion is an **enquiry/booking matched to the visitor's path** (Stay / Weddings / Conferences / Celebrations / Spa). Stage: **Phase 1–3 planning done; awaiting client sign-off before Phase 4 design.**

## Hard rules (do not break)
- **No fabrication.** Room count (99?), venue capacities, package prices, star grading are `[client-stated]`/unconfirmed — never ship as fact until Gate-1 confirmations land.
- **Two live sites exist** (velmorehotel.co.za + velmorehotelestate.co.za) — consolidation to one canonical brand/domain is a blocking decision.
- Contact details are real but need canonicalising (phone 078 666 6000 anchor; hours unknown).
- OS standing rules (SYSTEM/00): config-driven copy, GHL backend, Bbettr footer credit, hard gates.

## Knowledge structure (read this first)
- **`knowledge-base/`** = the **Business Knowledge Base** — the living, client-level asset
  (authoritative for *who Velmore is* and how they speak). `BUSINESS-KNOWLEDGE-BASE.md`,
  `voice-print.md`, `learnings.md`. Grows across every future Velmore project. Governed by
  OS `SYSTEM/03-BUSINESS-INTELLIGENCE.md`.
- **`docs/`** = **project knowledge** — this website's blueprint. References the BKB for
  client facts; never restate them.
- Graduation: when Velmore gets a 2nd distinct deliverable (funnel/ads/CRM), reassess moving
  the BKB into its own client-knowledge repo. Not yet.

## Architecture (planned — nothing built yet)
Next.js 14 + TS + Tailwind + Framer Motion on Vercel, config-driven (per OS/showcase convention):
- **Page composition / section order:** `views/*.tsx`
- **Copy/content:** `config/*-config.ts` · **Business details + channels:** `config/site-config.ts` · **SEO:** `config/seo-config.ts` + `lib/metadata.ts` · JSON-LD in `app/layout.tsx`
- **Trust (progressive, verified-only):** `config/trust.ts` · **Images (manifest = shot list):** `config/images.ts`
- **Forms:** per-vertical multi-step → GHL webhook; rooms → eZee/iPMS247 embed/deep-link
- **Brand tokens:** `tailwind.config.ts` — palette Direction 1/2 (Phase 4); accent = primary CTA only; display serif + body sans

## Recently done (this session)
- Crawled/audited both live sites; captured tech stack, schema, sitemaps, content defects (demo/Kafka/lorem text live & indexed, spelling errors, duplicate/orphan pages, two booking engines), NAP fragmentation.
- Ran 3 research legs (business/reputation, competitors, SEO/local) → synthesised into Client Brief + blueprint.
- Wrote all planning docs under `docs/` + README/PROJECT_STATUS/this file.
- **Authored OS v2.3.0 "Marketing Engine"** (`~/Documents/Bbettr-Website-Os/SYSTEM/04-MARKETING-ENGINE.md` + amendments to operating-model, discovery, brief-schema, gates, changelog): we build marketing platforms, not websites — every important page is a landing page; revenue matrix, campaigns, tracking, attribution, CRM designed in from Phase 1.
- Applied it to Velmore → `docs/05-MARKETING-CONVERSION-BLUEPRINT.md` (Parts 24–29). **Read `SYSTEM/04` before design/build.**
- **Authored OS v2.4.0 "Business Intelligence + Continuous Learning"** (`SYSTEM/03`, `PIPELINE/learning-loop.md`, root `LEARNINGS.md` + amendments): three knowledge scopes, three intelligence layers, dual-output learning loop. Created Velmore's **Business Knowledge Base** (`knowledge-base/`) and pointed `CLIENT-BRIEF` at it. **Read `SYSTEM/03` + the BKB before design/build.**
- Repo is now `github.com/bbettr-agency/velmore-hotel` (source of truth). NOTE: stray `/Users/eloff/.git` exists — do not touch until user approves removal.

## Next session — exact starting prompt
> Read `~/Documents/Velmore-Hotel-Estate/` README + PROJECT_STATUS + all `docs/`. If the client has returned the Gate-1 confirmations (`docs/03-CLIENT-INFO-REQUIRED.md` §B/C), update the Client Brief to gate-1-passed, then begin **Phase 4 DESIGN**: analyse the logo + photography, finalise the Visual Direction Brief (palette Direction 1 vs 2, typefaces, density, motion, contrast pairs) and the Hero Brief, and present low-fi → hi-fi of Home + one hub for approval. If confirmations are NOT back, do not start design — chase the blocking items. Still **no code** until Gate 2.
