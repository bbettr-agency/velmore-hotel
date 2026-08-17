# Session Handover — Velmore Hotel Estate

Context for the next session. Read this + `PROJECT_STATUS.md` + `docs/CLIENT-BRIEF.md` before working.

---

# 🔒 LOCKED — 2026-08-15 · Conferences = Meta post-click viewing funnel (READ THIS FIRST)

**Client-approved & LOCKED. Current live commit `df4d5ba`. Do NOT redesign or restructure `/conferences` unless explicitly reopened.**

North-star funnel: **META AD → /conferences → explore / build confidence → BOOK A VENUE VIEWING → viewing request → Velmoré sales team → conference booking.** Goal = *qualified venue viewings that show up* — NOT proposals, cheap leads or CTA clicks. Primary CTA everywhere = **Book a Venue Viewing** (`#book-viewing`, on-page). Do NOT introduce "Request a Conference Proposal" as a competing primary.

**Final locked page structure:** hero (Book a Venue Viewing + Explore the Venues `#venues`; chips incl. **Pretoria & Centurion**) → proof strip (5 confirmed facts) → one-point-of-contact statement (incl. agency + direct-organiser line) → **interactive Venue Explorer** → mid-page viewing CTA → accommodation + certified-halal catering pairing → FAQ → on-page viewing form (`#book-viewing`) + confirmation → footer + mobile sticky viewing CTA. **"The Scale" section REMOVED** (2026-08-15); its `conferenceSeated` image is now **Bastille's default/first carousel slide** (resized 2000², alt=Bastille; `bastille-2-set` dropped as near-dup → Bastille = 3 slides). The **1,300 figure** is resolved compactly in the explorer intro (estate up to 500 · **up to 1,300 at the Suleman Convention Centre, 1.5 km away** — confirmed BKB).
- **Venue Explorer** (`components/conferences/VenueExplorer.tsx`) replaced the old overview + six stacked venue splits (both removed; `VenueOverview` deleted). Accessible tablist (roles, roving tabindex, ←/→/Home/End, champagne active underline); **D'Charmont default**; one crossfading panel = photography/carousel (reuses `RoomCarousel`; single-image venues show one photo, no fake slides) + confirmed details + per-venue Book-a-Viewing CTA that passes venue context to the form (`velmore:venue` custom event → hidden `venueOfInterest` + "Viewing: <venue>" chip). Inactive venues aren't mounted → efficient image loading.
- **CONFIRMED capacities (2026-08-15):** D'Charmont 500 · Bastille 320 · Trisage 200 · Martels 150 · The Vieux Cheval 60 · Voltaire & Satre "Hotel conference rooms" 50. (Capacity-neutral treatment is retired.)
- Other comps: `components/conferences/{MoreThanVenue,ViewingConversion,StickyViewingCta}.tsx`, `lib/enquiry.ts` (shared HubSpot/mailto submit). `Button` renders `#hash` hrefs as native anchors; globals.css has reduced-motion-safe smooth scroll + `[id]{scroll-margin-top}`.
- Viewing form (light by design — books a viewing, does NOT fully qualify): **required** = firstName, lastName, email, phone, Company/Organisation/Agency, "organising as" (For my org / For a client-Event agency / Other), preferred viewing window; **optional** = conference type, delegates (bands), event date, accommodation, message. Agencies + direct organisers = ONE shared flow. Navigation kept FULL (measure leakage before trimming).
- No fabricated facts/capacities/testimonials, no tracking scripts, Website OS untouched.

**Paid-traffic readiness verdict (2026-08-15, after final audit):** PAGE/UX **8.5/10** (ready) · Tracking **2/10** · CRM/viewing follow-up **2/10** · Trust/content **4/10** · **Overall ≈5.5/10 — do NOT start Meta spend yet.** The page is strong; the blockers are measurement + attendance, not structure.

**⏸ PAUSED — before Meta spend, need from Velmoré / next build:** (1) **Tracking** — Meta Pixel + GA4/GTM (CTAs carry `data-cta`/`data-location`, GTM-ready) + plan HubSpot→Meta offline-conversion bridge (optimise for *attended* viewings/won, not form fills). (2) **HubSpot** portal + form GUID + viewing pipeline, then real **confirmation + reminders** — needs viewing ops info: days/hours · duration · who conducts · min notice · blackout dates · directions. (3) **First trust layer** (highest single lever): permitted corporate/gov references or logos, or Google-review connection (module built, gated), or halal certificate. (4) Decide pricing (recommend omit for viewing-first) + conference-pack escape hatch (defer until pack supplied). (5) Optional: WhatsApp contact preference; verified drive times. Do NOT build HubSpot workflows / self-scheduling / reminders until the ops info lands.

---

# ✅ SITE COMPLETE + LAUNCH-HARDENED + POLISHED — 2026-08-10 (READ THIS FIRST)

**Full Velmoré website — built, QA'd, launch-hardened, motion-synced to the OS, and polished — LIVE at https://velmore-hotel.vercel.app.**

## Since "site complete": launch + OS-sync + polish (all live, console-clean on prod)
- **Real photography** wired via `next/image` (config-driven `config/images.ts`) across hero + every section that has a real match; gallery 100% real; honest labelled placeholders remain only where no photo exists (rooms · spa · chapel · glass-hall-at-dusk · seated-conference). 246 source images in `public/images/gallery/`.
- **SEO:** `robots.txt`, `sitemap.xml`, `Hotel`/`WebSite`/`WebPage`/`BreadcrumbList` JSON-LD (no address/phone/rating fabricated), OG+Twitter + real OG image, canonical every page, interim favicon/app-icons, custom 404.
- **Forms:** `EnquiryForm` is HubSpot-ready (env `NEXT_PUBLIC_HUBSPOT_PORTAL_ID`/`FORM_ID`) with mailto fallback + success state.
- **Reviews:** gated (`reviewsPreview.ready=false`) — no fake rating/quotes/schema at launch.
- **Motion (OS Phase 0 sync):** adopted `ENGINE/motion` (`motion/react`) — `MotionProvider`+no-JS fallback, `Reveal`/`Stagger`/`heroStack`/`imageReveal`, **character `editorial`**, single easing, LCP never animates, reduced-motion-safe. Old CSS `.reveal` removed. Project layer: `components/motion/Reveal.tsx` + `config/motion.ts`.
- **Polish:** tactile button hover-lift; scroll reveals on all homepage + inner sections; softened boxes (journey cards ring not border; contact form borderless).
- **Launch register:** `docs/18-LAUNCH-CHECKLIST.md` (🤖 done vs 🙍 client) + readiness %s in `PROJECT_STATUS.md`. **Outstanding = client content/credentials only** (photos for the 5 gaps, names/rates/hours, phone/address, HubSpot IDs, Google reviews source, final domain + redirects, logo vector, analytics access).

---

## (historical) SITE COMPLETE — earlier
**The full Velmoré website is built, QA'd and LIVE** — all 10 pages, commit `db7cb5b`.

## What exists
- **Pages (all live):** Home · `/conferences` · `/weddings` · `/accommodation` · `/dining` · `/spa` · `/events` · `/gallery` · `/about` · `/contact`.
- **Architecture:** config-driven — `config/site.ts` (homepage + global) + `config/pages.ts` (inner pages) drive a shared **section kit** in `components/sections/` (`PageHero`, `FeatureSplit`, `Statement`, `SpecList`, `ImageBand`, `Faq`, `CtaBand`, `GalleryGrid`, `Placeholder`). Site chrome: `components/site/` (`Nav`, `MobileMenu`, `Footer`, `EnquiryForm`). Homepage sections in `components/home/` (LOCKED).
- **Imagery:** all CSS placeholders (`.hero-* .conf-* .wed-* .stay-* .spa-* .dine-* .cta-* + .page-scrim`), every one clearly labelled. Real photos drop into `public/images/**` (see its README + `docs/17`).
- **OS:** v2.4.0 FROZEN — untouched. Reusable patterns flagged in `design/os-component-candidates.md` (#1–34) for a future OS inner-page builder.

## Production QA — PASSED (all 10 pages)
Navigation + functional mobile menu · desktop & mobile responsive (no overflow @375/1280) · a11y (lang, skip link, one H1/page, labelled form, aria menu, focus rings, ≥44px targets) · no console errors · unique title + meta description + canonical each page · all internal links 200 (no broken links) · labelled placeholder imagery · tracking-ready CTAs (`data-cta`/`data-location`) sitewide · accessible enquiry form · footer everywhere · no lorem/bracket placeholders.

## Outstanding — CLIENT / CONTENT, not build (all shown as labelled placeholders)
Real photography (the shoot) · confirmed spa & restaurant **names**, **rates**, **hours**, **phone/address** · **Google reviews** connection (architected: `data-google-reviews`/`data-review-slot`, no `AggregateRating` until consented) · **HubSpot** form wiring (form composes a mailto to `bookings@velmorehotel.co.za` until then) · **logo vector**. None block the build; each is a swap-in.

## Standing rules (unchanged)
Photography-first (image → composition → copy → CTA) · never invent client facts · unconfirmed content stays labelled-placeholder · name-neutral `/spa` `/dining` · no alcohol imagery · sync docs before each push · OS frozen (flag candidates, don't modify).

---

# ⏩ END-OF-DAY HANDOVER — 2026-08-04 (historical)

> Tomorrow, resume **immediately at the Homepage Final CTA review** (Milestone 11 is shipped & live, awaiting approval). No need to revisit earlier milestones — they are LOCKED.

## Current Status

### Website OS
- **v2.4.0 remains FROZEN.**
- **No OS changes made today.**
- Any future OS improvements must come **only from validated project learnings** (flagged in `design/os-component-candidates.md`; promotion via `PIPELINE/learning-loop.md`).

### Velmoré Website
- **Homepage build is in progress.**
- **All approved milestones are LOCKED** unless explicitly reopened.

**Locked homepage milestones:**
- ✅ Hero
- ✅ Journey Selector
- ✅ Estate Introduction
- ✅ Conferences Preview
- ✅ Weddings Preview
- ✅ Stay Preview
- ✅ Spa Preview
- ✅ Dining Preview
- ✅ Gallery Showcase
- ✅ Reviews / Trust *(deployment verified green on prod — LOCK confirmed)*

**Shipped, awaiting review (NOT yet locked):**
- 🟡 **Final CTA** (Milestone 11) — shipped, deployed green, verified on prod. **First action tomorrow = get approval → lock.**

**Also shipped today (chore):** production **image library** scaffold — `public/images/**` (22 `.gitkeep` folders + `public/images/README.md`). No placeholder images; no code references them yet. Build + deploy verified.

**On-page order (live):** Hero → Journey Selector → Estate Introduction → Conferences → Weddings → Stay → Spa → Dining → Gallery → Reviews/Trust → Final CTA. Section-feeling rhythm: anticipation · confidence · capability · emotion · calm · restoration · gathering · inspiration/peak · trust · easy-close.

## Current workflow (every milestone)
Build → Build/Lint/Typecheck → Sync documentation → Flag OS candidates → Commit → Push to `main` → Verify production → Review → **Wait for approval** → LOCK.
- Deploy poll: `gh api repos/bbettr-agency/velmore-hotel/commits/<sha>/status --jq '.state'`.
- Preview server: `velmore-dev` in `~/Documents/Bbettr-Website-Os/.claude/launch.json` (port 3500).
- Browser pane freezes on homepage scroll (100vh hero) → isolate a section via `javascript_exec` (remove sibling `<main>` children) then screenshot.

## Standing project rules
- **Photography drives every section** — design order: image → composition → copy → CTA.
- **Images create emotion, copy provides context, CTAs capture intent.**
- **Every new section must introduce a different emotional rhythm** (distinct feeling AND distinct composition — never repeat a prior layout).
- **Homepage sections become progressively quieter toward conversion** (after the Gallery peak).
- **Never invent client facts.** All unconfirmed content stays **placeholder-driven** and clearly labelled (name-neutral `/spa` `/dining`; no menus/rates/hours/chefs/operator; no alcohol/bar; no non-sellable assets; `docs/17` is the imagery authority).
- **Keep repository documentation synchronized with implementation before every push.**
- **Push every approved milestone to `main`** so Vercel stays reviewable.

## Tomorrow's starting point (in order)
1. ~~Verify the Reviews/Trust deployment~~ — **done, verified green; LOCK confirmed.**
2. **Review & lock the Final CTA** (Milestone 11 — already shipped/live).
3. Build the **Footer** — must *quietly close* the experience (not a utility strip). Then Build/Lint/Typecheck → sync docs → flag OS candidates → commit → push → verify prod → **stop for review**.
4. On Footer approval → **homepage COMPLETE & LOCKED.**
5. Then move to **inner pages** in this order:
   1. Conferences
   2. Weddings
   3. Accommodation
   4. Dining
   5. Spa
   6. Gallery
   7. About
   8. Contact

## End-of-session state (2026-08-04)
- ✅ Working tree **clean** (nothing uncommitted).
- ✅ Everything **pushed to GitHub** `main` — latest commit **`984d33b`** (Final CTA). Today's commits: photography strategy, Weddings/Stay/Spa/Dining/Gallery/Reviews/FinalCTA previews, image-library scaffold.
- ✅ **Vercel synchronized** — https://velmore-hotel.vercel.app deploy **green** on `984d33b`, verified on production.
- ✅ Handover + `PROJECT_STATUS.md` + memory updated; **resume immediately at the Final CTA review with no need to revisit previous milestones.**

---

> ⚠️ **Historical context below (superseded by the END-OF-DAY HANDOVER above):** the Bbettr Website OS (`~/Documents/Bbettr-Website-Os/SYSTEM/00-OPERATING-MODEL.md`, `SYSTEM/03-BUSINESS-INTELLIGENCE.md`, `SYSTEM/04-MARKETING-ENGINE.md`, the Design Language + Hero System, `PIPELINE/gates.md`), this project's `knowledge-base/` (the BKB) and `docs/` blueprint. *(The old "PAUSED — no development authorised" banner no longer applies — the homepage build is active and approved milestone-by-milestone.)*

## Status (2026-08-02) — PAUSED
- ✅ **Architecture & documentation phase complete and approved** (research + 29-part blueprint + OS v2.3.0/v2.4.0).
- ✅ **Business Knowledge Base created** (`knowledge-base/`) — client knowledge, separate from project `docs/`.
- 🔑 **Gate 1 still awaiting client confirmations** (`docs/03-CLIENT-INFO-REQUIRED.md` §B/C).
- ⛔ **No design or development authorised** — no visual design, wireframes, development, components, image-folder setup, content writing, SEO implementation, CRM integration, or further OS architecture changes.
- 📦 **Both repositories pushed & clean** (`velmore-hotel`; `website-os` @ `3af9d3d`).
- 📋 **`VALIDATION.md`** is the project's working scorecard — fill each phase's table at that phase's close (evidence for the Continuous Learning Loop → OS v2.5.0). It does not modify the frozen OS.

## GATE 2 — VISUAL LANGUAGE + CREATIVE CONCEPT + NORTH STAR (2026-08-03) — read first
**North Star** (final) → **[`docs/14-NORTH-STAR.md`](docs/14-NORTH-STAR.md)**: ***"Every occasion — and everyone in it — held in capable, caring hands."*** The one promise every page/image/motion/CTA is measured against (all six services; not product-specific; timeless). **Creative foundation complete** (BKB → Marketing → Visual Language `docs/12` → Creative Concept `docs/13` → North Star `docs/14`). **Hero exploration delivered** → **[`docs/15-HERO-EXPLORATION.md`](docs/15-HERO-EXPLORATION.md)**: 7 directions compared/narrowed → **Primary = "The Glass Hall at Dusk, Held"** (editorial full-bleed of D'Charmant at dusk + capability/trust proof strip + Book-a-viewing); **Backup = split "One Site, One Team, One Invoice"** (also the Conferences-page hero). Primary direction **approved**. **Hero art direction (cinematic treatment)** → **[`docs/16-HERO-ART-DIRECTION.md`](docs/16-HERO-ART-DIRECTION.md)**: dusk, warm-within-cool, guest-arrival POV, expansive-yet-intimate, implied host (no stock people), three-plane depth, glow→scale→threshold→calm hierarchy; the **Hero Cinematic Narrative** (notice → understand → trust → act). Art direction approved. **Hero composition studies (visual)** → `design/hero-compositions.html` (+`.pdf`): 6 compositions, same creative idea / different visual hierarchy, annotated + compared. **Recommended homepage hero: Composition 1 "Lower-Third, Left"**; Composition 4 "Split Panel" = the Conferences hero. Compositions assigned: **Home = 1, Conferences = 4, Weddings = 3.** **Homepage first viewport DESIGNED** (first hi-fi) → `design/homepage-first-viewport.html` (desktop + mobile) — whole first screen as one composition (navbar + hero + promise + trust strip + Certified-Halal badge + Book-a-viewing/Enquire + crafted dusk placeholder + scroll cue + ivory next-section peek). Render note: for mobile screenshots use Chrome `--headless=old` (headless-new won't honor a small layout viewport). **MILESTONE 1 SHIPPED:** first viewport is a real **Next.js 14 + TS + Tailwind** app (config-driven; `config/site.ts` holds copy/facts — trust confirmed, hero H1/sub INDICATIVE), **live at https://velmore-hotel.vercel.app** (reviewed desktop+mobile, no errors). Architecture: `app/` (layout+globals+page), `components/{site,hero,home,ui}`, `config/`, `lib/clsx`. Dusk hero = CSS placeholder classes in `globals.css` (real shot pending). **Dev workflow:** build/lint/tsc → commit (conventional) → push `main` → Vercel deploys → review live → stop. **Vercel needs `vercel.json` framework=nextjs** (was a static preset). Poll deploys: `gh api repos/bbettr-agency/velmore-hotel/commits/<sha>/status`; logs: `vercel inspect <url> --logs --scope info-78148620s-projects`. **Local mobile screenshots: Chrome `--headless=old`.** **PHOTOGRAPHY STRATEGY COMPLETE (docs-only):** **[`docs/17-PHOTOGRAPHY-STRATEGY.md`](docs/17-PHOTOGRAPHY-STRATEGY.md)** = single source of truth for imagery (philosophy, one estate-wide grade, per-section art direction, full Image Manifest with IDs/filenames/alt/SEO). Content rules baked in (no alcohol/bar; certified-halal welcome; no non-sellable assets: old wing/large pool/field/glass-garden-boardroom; `.hero-*`/`.conf-*` CSS are labelled placeholders until the shoot). `docs/09` §5 points to it. **Reference docs/17 before selecting/requesting any image.** Next: **Weddings Preview** (homepage), then remaining sections.

**MILESTONE 11 SHIPPED & LIVE:** Final CTA (`components/home/FinalCta.tsx`) — the natural conclusion, *"the next step is easy."* **NOT** loud/salesy/multi-path: image-FIRST **warm estate-at-golden-hour full-bleed** close (`.cta-*`, bookending the cool dusk hero — 7th placeholder hue) behind **centered, minimal** copy — one line + primary + secondary + reassurance micro-line. CTAs **Book a viewing** → /contact (`book_viewing`) + **Enquire for your date** → /contact (`enquire_date`), reassurance *"free · no obligation · same-business-day reply"* (all from `site.cta`). New OS candidates #27–28. **On-page order: … → Reviews/Trust → Final CTA.**

**ALSO SHIPPED (chore):** production **image library** scaffold — `public/images/**` (22 `.gitkeep`-tracked folders: hero·estate·conferences·weddings·accommodation·dining·spa·gallery·about·contact·team·reviews·events·rooms·gardens·venues·food·details·placeholders + branding/{logos,favicon,social}) + **`public/images/README.md`** (folder purposes · filename/hero/thumbnail conventions · AVIF/WebP+JPG · size/weight targets · alt+SEO rules · per-folder photography status). **NO placeholder images added; no code references these assets yet** (site still uses CSS placeholders). Build verified, deploy green. Governs structure; **docs/17 governs the images.**

**Homepage remaining: FOOTER only** (should *quietly close* the experience, not feel like a utility strip) → then homepage **COMPLETE & LOCKED**.

**Earlier — MILESTONE 10 SHIPPED & LIVE:** Reviews / Trust (`components/home/ReviewsTrust.tsx`) — the turn from **emotion → conversion**. **NOT** a slider/cards/widget/wall of text — quiet, **editorial**, confident: a serif confidence statement (*"The day that matters most, in hands that have held it before."*) + two restrained typographic pull-quotes (champagne quote-marks, hairline divider) + an "awaiting" aggregate (outline stars + "Google reviews · live rating & count will appear here"). Light `mist`, spare, generous whitespace. **Review count / testimonials / grading are Gate-1 + consent** → aggregate & quotes are **clearly-temporary placeholders**, architected with `data-google-reviews` / `data-review-slot` to populate from **live Google reviews** later; **NO `AggregateRating` schema until consented**. No CTA (the Final CTA follows). New OS candidates #25–26 + "progressively-quieter close" principle. **NEW STANDING RULE (client):** from the Gallery onward the homepage gets **progressively quieter** — less content, more confidence, more breathing room (emotion → conversion). **On-page order: … → Dining → Gallery → Reviews/Trust.** **Do NOT continue past Reviews/Trust until approved.** **Homepage remaining: Final CTA → Footer, then homepage is COMPLETE & LOCKED.** Then inner pages in order: **1 Conferences · 2 Weddings · 3 Accommodation · 4 Dining · 5 Spa · 6 Gallery · 7 About · 8 Contact.**

**Earlier — MILESTONE 9 SHIPPED & LIVE:** Gallery Showcase (`components/home/GalleryShowcase.tsx`) — the homepage's **emotional peak** (breadth). **NOT a grid**: an editorial **mosaic** (a signature feature + a tall accent, then a trio) with slow motion-safe hover-zoom; image-FIRST, copy minimal. Tiles reuse the labelled placeholder hues (glass hall · weddings · conferences · gardens · dining) — **every tile a clear "· placeholder"** until the curated gallery is shot (docs/17 §3.10). **Light** ivory ground = a deliberate shift after the two dark sections (Spa, Dining). One CTA **Explore the gallery** → /gallery (`explore_gallery`). New OS candidates #23–24 + the **photography-first process** flagged as a DESIGN-LANGUAGE principle. **PHOTOGRAPHY-FIRST is now a STANDING RULE** (client, M8→M9): design order = image → composition → copy → CTA; images create emotion, copy provides context, CTAs capture intent; never let text compete with photography; keep each section a distinct feeling+composition. **On-page order: Hero → JourneySelector → EstateIntro → Conferences → Weddings → Stay → Spa → Dining → Gallery.** **Do NOT continue past Gallery until approved.** Next (after approval): trust/reviews, final-CTA, footer; then inner pages.

**Earlier — MILESTONE 8 SHIPPED & LIVE:** Dining Preview (`components/home/DiningPreview.tsx`) — the **image-FIRST** section (client directive: from here on design around the image; the photograph does the emotional work, copy supports — see [[velmore-hotel-estate-project]]). A new composition distinct from every sibling: a **full-bleed** dining image band (edge-to-edge `.dine-*` placeholder — warm/appetising, subtle set-table glints, the 6th placeholder hue) with a **restrained overlaid copy panel** on a scrim. Sells the **experience** (gathering · shared meals · conversation · hospitality) + a **certified-halal chip** (BKB-confirmed, inline trust-chip pattern). **NAME-NEUTRAL** — no restaurant name; **NO** invented menu/cuisine/pricing/chefs/hours; **NO alcohol/bar** (docs/17 §3.6). Placeholder honestly labelled *"Dining photography required · a set table on the estate (shoot pending)"*. CTAs **Explore Dining** → /dining (`explore_dining`) + **Enquire** → /contact (`dining_enquire`), distinct labels. New OS candidates #21–22. **On-page order: Hero → JourneySelector → EstateIntro → Conferences → Weddings → Stay → Spa → Dining.** Section-feeling map (client-endorsed rhythm): Hero=anticipation · Estate=confidence · Conferences=capability · Weddings=emotion · Stay=calm · Spa=restoration · Dining=gathering. **Do NOT continue past Dining until approved.** Next (after approval): gallery / trust / final-CTA / footer, then inner pages.

**Earlier — MILESTONE 7 SHIPPED & LIVE:** Spa Preview (`components/home/SpaPreview.tsx`) — the page's **quiet exhale** (stillness / restoration / privacy / escape). The most intimate composition, distinct from every sibling: a warm, dim, **candlelit** ground (`bg-[#1b140c]` + `.spa-ground`), ONE **soft-focus** sensory placeholder (`.spa-*` — blurred/shallow-DoF, the 5th placeholder hue), restrained copy floating in generous negative space, restrained `reveal`. **NAME-NEUTRAL** — never "Allura"; **emotional role only**, asserts **no** invented services/treatments/pricing/hours/product brands/facilities/packages (the estate *has* a spa — confirmed, it's in the name — nothing more claimed). Placeholder honestly labelled *"Spa photography required · treatment detail / tranquil interior (shoot pending)"*. CTAs **Explore the Spa** → /spa (`explore_spa`) + **Enquire** → /contact (`spa_enquire`), distinct tracking labels. New OS candidates #18–20. **On-page order: Hero → JourneySelector → EstateIntro → Conferences → Weddings → Stay → Spa.** **Do NOT continue past Spa until approved.** Next (after approval): Dining preview, then trust / gallery / final-CTA / footer, then inner pages.

**Earlier — MILESTONE 6 SHIPPED & LIVE:** Stay / Accommodation Preview (`components/home/StayPreview.tsx`) — the **calm / rest change of pace** after capability(Conferences) + emotion(Weddings). Deliberately **NOT a split**: centered, spacious, image-led — flanked eyebrow + serif heading (*"Everything is here. There's no need to leave."*) + one calm lead, a wide **environmental** placeholder + a quiet **garden detail** placeholder (new light/airy `.stay-*` CSS — the 4th placeholder hue), a quiet 3-up serif **proof trio** (50 rooms · steps away · gardens & calm), extra vertical rhythm (py-28/40), restrained on-load `reveal`. **Confirmed facts only** — 50 bookable rooms, on the estate, gardens; **no invented room categories/amenities/rates/grading; restoration rooms never mentioned.** Placeholders honestly labelled *"Photography required …"* (image still needed). CTAs **Explore Your Stay** → /accommodation (`explore_stay`) + **Check Availability** → /contact (`check_availability`, `home_stay`) — **no booking engine yet**, routed to the enquiry journey with a distinct tracking label for future booking-engine integration (noted in docs/08 §6). Fixed a desktop overflow (detail image `aspect` vs `md:h-full` → `md:aspect-auto`). New OS candidates #14–17 flagged. **Confirmed on-page order: Hero → JourneySelector → EstateIntro → Conferences → Weddings → Stay** (capability → emotion → rest; Conferences-before-Weddings is the client-approved commercial order). **Do NOT continue past Stay until approved.** Next (after approval): Spa / Dining previews, then trust / final-CTA / footer, then inner pages.

**Earlier — MILESTONE 5 SHIPPED & LIVE:** Weddings Preview (`components/home/WeddingsPreview.tsx`) — the **emotive counterpoint** to Conferences, deliberately *not* a mirror: copy-led (left), **portrait** placeholder (right), tinted `mist` ground, italic kicker (*"This is where one of the biggest days of your life belongs."*), serif heading, two lead-with-emotion paragraphs (chapel · reception under chandeliers · gardens · golden hour), then an understated hairline **"Held for you"** line carrying capability (chapel & reception · gardens · rooms for guests · certified-halal catering · one team · one invoice · private viewings). New `.wed-*` CSS placeholder (golden-hour garden + chapel arch + string-light bokeh) — third placeholder hue after `.hero-*`/`.conf-*`. CTAs **Book a Viewing** (/contact) + **Explore Weddings** (/weddings), tracking-ready (`home_weddings`). Confirmed facts only. **Current on-page order: Hero → JourneySelector → EstateIntro → ConferencesPreview → WeddingsPreview** (capability → emotion turn; blueprint has Weddings §5 before Conferences §6 — final ordering flagged for review in docs/07). New OS candidates flagged (#11 emotive editorial preview, #12 wed placeholder, #13 don't-mirror-the-neighbour rule). Preview served via new `velmore-dev` entry in the OS-root `.claude/launch.json` (port 3500). **Do NOT continue past Weddings until approved.** Next (after approval): Stay/Spa/Dining previews, then trust/final-CTA/footer, then inner pages.

**Earlier — MILESTONE 4 SHIPPED & LIVE:** Conferences Preview (`components/home/ConferencesPreview.tsx`) — image-led editorial (SCC 1,300 / one team-one invoice / breakout / 50 residential / certified-halal catering), labelled photo placeholder (`.conf-*` in globals.css), CTAs Book a Viewing (/contact) + Explore Conferences (/conferences), tracking-ready via `Button` `track={{cta,location}}` → `data-cta`/`data-location`. Homepage: Hero → JourneySelector → EstateIntro → ConferencesPreview. Milestones 1–3 LOCKED. **Do NOT start Weddings preview until Conferences milestone approved.** Next (after approval): per docs/07 — Weddings preview, then Stay/Spa/Dining/Gallery/trust/final-CTA/footer.

**Earlier — MILESTONE 3 SHIPPED:** Estate Introduction / Capability (`components/home/EstateIntro.tsx`) — dark-spotlight editorial (one estate/team/invoice story + stat pairs 1,300/3/50/1 + certified-halal + "held here" links). Milestones 1 (hero) & 2 (journey selector) LOCKED. Homepage so far: Hero → JourneySelector → EstateIntro. **Standing rules:** sync repo docs before pushing; log OS-component candidates in `design/os-component-candidates.md` (don't touch frozen OS). Next: continue homepage per docs/07 §5+ (flagship previews / trust / final CTA / footer).

**Earlier — MILESTONE 2:** homepage **Journey Selector** section (`components/home/JourneySelector.tsx`) + **all real routes** (nine scaffolded via `components/site/RoutePlaceholder.tsx`; `config/site.ts` `routes` is the source; per-page meta in `lib/metadata.ts`). `/dining` + `/spa` (generic — names unconfirmed). First-viewport hero LOCKED (untouched). **Browser-pane note:** the pane's screenshots can freeze after scroll on the homepage (100vh hero) — to capture a below-fold section, `javascript_exec` to remove the `<header>` then screenshot, or Chrome `--headless=old`. **Next: continue the homepage section by section** — next = estate intro + capability/scale proof (docs/07 §3–4). Then pages in order (Conferences first). Placeholder photography + indicative copy until Content Readiness + the shoot land.


**Creative Concept: "The Confident Host"** → **[`docs/13-CREATIVE-CONCEPT.md`](docs/13-CREATIVE-CONCEPT.md)** — the emotional foundation every visual decision inherits. 5-second feeling: *"I'm in capable, gracious hands — and this is grander and warmer than I expected."* Pillars sharpened (Capability→confidence/safe-hands; Hospitality→welcome+**belonging**, incl. the certified-halal inclusion; Elegance→the *manner*, quietly elevated) + **Ease** ("it will be handled" → Book a viewing) + the concept's primary job: **close the gap** (make the online feeling match the on-arrival awe). Use the 4-part **decision test** in `docs/13` for the Hero and every page. **Design the Hero only after the Visual Language (`docs/12`) + Creative Concept (`docs/13`) are approved.**

## Visual Language delivered (2026-08-03)
Gate 2 opened with the **design DNA**, not pages: **[`docs/12-VISUAL-LANGUAGE.md`](docs/12-VISUAL-LANGUAGE.md)** — the complete Velmoré visual system (colour, type, grid, spacing, radius, shadows, buttons, forms, cards, icons, imagery, photography, motion, scroll, hover, transitions, glass/blur, luxury cues, hospitality principles, mobile, a11y, component examples), every decision traced to OS Design Language + `docs/11` + BKB v0.2 + Marketing Engine + onboarding. **Committed values**; one dependency = verify exact hex + display letterform against the **logo vector**. **Awaiting approval of the visual language before any page is designed.** No wireframes/code.

## GATE 1 COMPLETE · GATE 2 READY (2026-08-03)
Client onboarding response (Yaseen Amod) is integrated. **BKB v0.2 (`knowledge-base/`) is authoritative** for all client facts; **[`GATE-1-REVIEW.md`](GATE-1-REVIEW.md)** is the full audit. **Gate 1 (Business Discovery & Validation) = COMPLETE.** The former 5 blockers are reclassified as **Content Readiness** (content-completion, not design blockers — they populate placeholders during Design/Dev; tracked in `docs/03`). **Gate 2 (Visual Design) = READY TO BEGIN on approval.** Guardrail: verified-only rendering — no page goes live showing a Content-Readiness item as fact.
**Non-negotiable content rules now govern the build (BKB / voice-print v0.2):** brand **Velmoré Hotel & Spa** (group: Velmore Hospitality Group, 3 sites incl. **SCC 1,300-hall**); **50 rooms** (never 99/100); **capacities from the BKB registry only** (old site figures were wrong); **no alcohol/bar anywhere**; **"certified halal" only** (headline); **don't feature non-sellable assets** (old wing/pool/field/glass-garden-boardroom); **CRM = HubSpot**; **"Book a viewing" = primary CTA**; **hero = D'Charmant Glass Hall at dusk**; location = **Pretoria + Centurion**; **POPIA build requirement**.

## Parallel workstream (architecture/UX/strategy) — complete (2026-08-02)
While Gate 1 is open, we are completing all **no-client-facts** architecture/UX/strategy:
`docs/06` IA · `07` Page Blueprints (section skeletons) · `08` Conversion/Tracking/CRM spec ·
`09` Design-system direction · `10` Component inventory. Convention: **〔G1: …〕** = pending
client confirmation (never shipped); **`[proposed]`** = palette/type to lock against the logo
at Gate 2. **No final copy, no visual design, no code, no real assets, no live integrations
until Gate 1 → Gate 2.** Website OS stays frozen.

## What this is
A full **redesign** of Velmore Hotel Estate (French-Provence hotel + weddings + conferences + spa + events estate in Erasmia/Centurion, between Pretoria & Johannesburg). We have completed a research + blueprint phase (audit, business/competitor/SEO research, Client Brief, 29-part blueprint) and the client Business Knowledge Base. The primary conversion is an **enquiry/booking matched to the visitor's path** (Stay / Weddings / Conferences / Celebrations / Spa).

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
> Read `~/Documents/Velmore-Hotel-Estate/` README + PROJECT_STATUS + `knowledge-base/` + all `docs/`. **Begin by reviewing the remaining Gate-1 client-confirmation requirements** (`docs/03-CLIENT-INFO-REQUIRED.md` §B/C) and determining exactly what information still needs to be collected from the client before design can start — e.g. produce/refresh a clean client questionnaire and update the BKB/brief with anything already answered. **Do NOT begin design or development** (no wireframes, visual design, components, image folders, content, SEO build, CRM). Phase 4 DESIGN only starts once the client returns the Gate-1 answers **and** you have explicit approval to proceed. Also: the OS remains paused — no further Website OS architecture changes without explicit approval.
