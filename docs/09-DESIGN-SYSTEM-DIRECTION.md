# 09 — DESIGN SYSTEM DIRECTION

> **⟳ Gate-1 update (2026-08-03) — authoritative. Source of truth: [`../knowledge-base/BUSINESS-KNOWLEDGE-BASE.md`](../knowledge-base/BUSINESS-KNOWLEDGE-BASE.md) + [`../knowledge-base/voice-print.md`](../knowledge-base/voice-print.md).**
> - **Brand = "Velmoré Hotel & Spa"** (accent é); parent **Velmore Hospitality Group**.
> - **Hero image = D'Charmant Glass Hall at dusk** (client's strongest asset — glass, 360° garden views, chandeliers).
> - **Content rules (govern imagery + copy):** **no alcohol/bar imagery or references** anywhere; **certified-halal badge is a prominent, headline trust element** (never "halal-friendly"); **never show non-sellable assets** (old wing, pool, field, glass garden boardroom).
> - **Voice = confident host, not brochure** — apply `voice-print.md` v0.2 use/never-use lists; "specific beats grand"; no emoji/ALL CAPS/exclamations.
> - **Photography:** rooms/spa/food coverage thin — **recommend a gap-fill shoot before design sign-off.** Logo vector available; **brand guidelines may need creating** — palette/type stay `[proposed]` and lock at Gate 2 against the logo.

**Project:** Velmore Hotel Estate · **Phase:** 4 DESIGN direction (pre-Gate-1, pre-logo)
**What this is:** the design-system *direction* — colour, type, iconography, imagery, motion, mobile UX — that can be planned before client confirmation. **Nothing here is finalised:** palette + typefaces are **`[proposed]`** and locked in Phase 4 against the **actual logo + photography** (`docs/02` Part 14, OS Design Language §13 Visual Direction Brief). **References, does not duplicate,** OS `SYSTEM/DESIGN-LANGUAGE/00+01` and `SYSTEM/01-DESIGN-TOKENS` (token *structure*; brand *overrides values*).
**Placeholders:** **〔G1: …〕** client-dependent · **`[proposed]`** = design hypothesis to confirm at Gate 2 with logo/photography in hand.

---

## 1. Governing choices (from the blueprint)
- **Density mode:** **Balanced** with Editorial moments (hero, weddings, gallery) and Substantive treatment inside conference/capacity sections. Chosen once, applied everywhere (`docs/02` Part 14).
- **Motion character:** **Considered / premium** (duration 0.6–0.7, stagger 0.08); Editorial (0.8–0.9) on hero + wedding gallery. Ease `[0.22,1,0.36,1]` fixed (grammar). Record in PROJECT_STATUS.
- **The Tells to avoid** (OS §12): excessive gold, cheap black-and-gold, generic hotel-template styling, angled/blob dividers, stock-as-subject, multi-accent, uniform spacing, unmeasured contrast.

## 2. Colour system `[proposed — confirm against logo]`
Token **structure** is fixed by `SYSTEM/01`; Velmore overrides values. One accent, reserved for the primary CTA. Near-monochrome field + surface alternation (light/tinted/dark spotlight).

**Direction 1 — "Estate Green & Champagne" (recommended)** — matches the existing olive/green + champagne crest; warm, established, avoids cheap gold.
```
primary   estate-green   ~#2E402F   (structure, headings, dark spotlights)
accent    champagne      ~#B8923B   (PRIMARY CTA ONLY)
support   sage           ~#6E7C63   (secondary botanical, non-CTA)
ink       ~#23231F  charcoal ~#3D3D38  steel ~#8A8578  mist ~#EFEBE3  ivory ~#FAF7F0
semantic  success ~#3F7D5A · error ~#B4453C · focus = primaryLight (2px, 2px offset)
whatsapp  #25D366 (only other action colour)
```
**Direction 2 — "Provence Twilight"** `[alt]` — midnight-ink primary + warm ivory + sage + soft bronze accent (cooler, more editorial).
```
primary midnight-ink ~#20303F · accent soft-bronze ~#B98E5A · sage ~#7C8A78 · ivory ~#F7F3EC
```
**Rules:** all pairs **contrast-measured** at token time (4.5:1 body / 3:1 large), incl. over hero imagery (scrim). Accent audited to appear on CTAs only. **Final hexes derived from the logo vector 〔G1: logo〕** — values above are starting points.

**Surface rhythm (sitewide plan):** light default → tinted grouping → **≤2 dark spotlights** (estate-story / final CTA; trust strip). No two adjacent sections share a tone.

## 3. Typography direction `[proposed — confirm]`
Two faces max, ≤3 weights, big size jumps, tight tracking on display (OS §3). Self-hosted via `next/font`, `display:swap`.
- **Display (serif):** a high-contrast, romantic-but-premium serif for estate character — *candidates:* **Fraunces** or **Cormorant Garamond**. `[proposed]`
- **Body/UI (sans):** a clean humanist sans — *candidates:* **Inter** or **Mulish**. `[proposed]`
- **Type roles** (map to `SYSTEM/01` scale): Display (H1/major heads) · Heading (H2/H3) · Body (16–18px, ≤65ch) · Lead · Eyebrow (caps, tracked, accent/muted) · Micro (≥12px) · Numeral (stat pairs — large weight jump; never a stat row with a missing number).
- **Wordmark note:** confirm "Velmore" vs "Velmoré" (accent) 〔G1〕 — affects display setting + logo lockup.
- Final pairing chosen in Phase 4 to match the voice-print register (warm, elegant, plain).

## 4. Iconography
- **One line-icon set**, consistent stroke weight + corner radius, matched to the radius family. *Candidate:* a single premium set (e.g. Lucide/Phosphor) themed to ink/sage — **not** filled clip-art, **no** circles-around-every-icon (a Tell).
- Uses: amenity grids, config/AV lists, journey-selector marks, contact/channel icons, stat accents. Icons **support** text, never replace it (a11y).
- Channel icons (call/WhatsApp/email) standardised via one component (`docs/10`) so they can't drift.

## 5. Image strategy & manifest (config-driven)
Photography is the #1 premium determinant (OS §7). **No hardcoded paths** — a config manifest (`config/images.ts` pattern) doubles as the **photography shot list** (`docs/02` Part 16). Documented folders, each with a README (filenames, dimensions, aspect, optimisation, alt guidance):
`logo · hero · exterior · architecture · rooms · weddings · conferences · events · dining · spa · gardens · team · gallery · offers`

- **Specs:** hero 16:9 desktop / 4:5 mobile @2400px ≤200KB; split 4:3 @1600px ≤150KB; card 1:1/4:5 @1200px ≤120KB; AVIF+WebP via `next/image`; LCP image `priority`; explicit dimensions (CLS); **build fails on missing alt**; alt describes the evidence.
- **Placeholders now, real later:** every slot ships a marked placeholder in the manifest 〔G1: photography access + shoot〕; likely gaps = dining, spa interiors, conference setups, aerial → **shoot** (sell as part of the project). **No stock as subject** (OS ban).
- **Art direction, not scaling:** separate mobile crops where the subject is off-centre.

## 6. Motion & interaction planning
- **Physics (fixed):** ease `[0.22,1,0.36,1]`; reveal `y:24→0` 0.6, stagger 0.08, once, viewport −80px. Character = Considered (duration/stagger per `docs/02` Part 17).
- **LCP never animates in** (fix the portfolio defect); hero entrance choreography ≤900ms; only secondary elements animate.
- **`prefers-reduced-motion` verified in the browser** (a CSS override does NOT stop Framer Motion) — entrance transforms → none, ambient loops → static. Gate 3.
- **Interaction states:** all five (rest/hover/focus-visible/active/disabled) on every interactive element; focus ring visible on every surface incl. dark; micro-interactions 150–250ms/≤4px; hover never the only affordance (touch).
- **Signature moments (restrained):** capacity table reveal; wedding gallery editorial fade; journey-selector hover lift; overlap scroll-cue between hero and next section (no JS). Motion must survive removal.

## 7. Mobile-first UX planning
Mobile designed first, not desktop stacked (OS §11).
- **Hero fold budget ≤5 elements:** logo+menu · H1 (≤3 lines) · one sub line · journey selector (2×2, thumb-reachable) · one trust chip.
- **Sticky bottom bar:** Call · WhatsApp · Check Availability (after hero; safe-area).
- **Capacity/config tables → horizontally scrollable cards**; package comparisons stack readably; galleries fast + swipeable.
- **Booking widget** collapses to a single primary input w/ progressive disclosure.
- Tap targets ≥44×44; CTA height ≥48; 8px spacing; body ≥16px; type ×0.72 desktop; test 360/390/768 (Gate 3).
- Fix the current-site defects: cookie consent must **not** cover hero/CTA and must remember choice (`docs/01`).

## 8. Accessibility (WCAG 2.2 AA) — carried into the system
Contrast measured (incl. over imagery); one real H1; semantic sections; keyboard traversal + visible focus + skip-link; labelled forms w/ announced errors + correct `inputMode`; reduced-motion honoured; targets ≥44px; axe zero critical/serious (Gate 3). Full list `docs/02` Part 19.

## 9. What locks at Gate 2 (needs logo/photography)
Final palette hexes (Direction 1 vs 2) · final typeface pairing · icon set · logo lockup + wordmark form · confirmed contrast pairs · real photography into the manifest · the Visual Direction Brief + Hero Brief sign-off. Everything above is **direction**, ready to finalise the moment assets + Gate 1 answers land.
