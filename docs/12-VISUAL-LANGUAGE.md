# 12 — THE VELMORÉ VISUAL LANGUAGE (design DNA)

**Project:** Velmoré Hotel & Spa (Velmore Hospitality Group) · **Phase:** Gate 2 — Visual Design
**What this is:** the **design DNA every page inherits.** A complete visual system — not page layouts, not wireframes, not code. Pages are designed *after* this is approved.
**Every decision references:** OS `SYSTEM/DESIGN-LANGUAGE/00+01` (the grammar) · [`11-VISUAL-DIRECTION-INSPIRATION.md`](11-VISUAL-DIRECTION-INSPIRATION.md) (the reasoning) · [`../knowledge-base/BUSINESS-KNOWLEDGE-BASE.md`](../knowledge-base/BUSINESS-KNOWLEDGE-BASE.md) v0.2 + [`../knowledge-base/voice-print.md`](../knowledge-base/voice-print.md) (who they are) · `SYSTEM/04-MARKETING-ENGINE` (conversion) · the confirmed onboarding (content rules). Formalises the `[proposed]` direction in [`09-DESIGN-SYSTEM-DIRECTION.md`](09-DESIGN-SYSTEM-DIRECTION.md).
**Status:** committed direction. **One dependency:** exact brand hex + final letterforms **verify against the official logo vector** when supplied (Content Readiness) — values below are derived from the observed Velmoré crest and are build-ready.
**Legend:** *(why → source)* tags trace each decision.

---

## 0. North star — what Velmoré must feel like
A warm, **French-Provence estate** run by a **confident host** — elegant and established, quietly proud, effortless to act on. It must hold **one tension**: *sell the emotion of a destination while making the enquiry frictionless*, and **prove capability** (a 1,300-seat hall, 50 beds, certified halal, one invoice) without losing the romance. *(BKB §A/§C; docs/11 §0.)*

- **Density mode: Balanced**, with **Editorial** moments (hero, weddings, gardens) and **Substantive** clarity inside conference/capacity content. Chosen once, applied everywhere. *(OS DL §5; docs/09.)*
- **Voice in the pixels:** *specific beats grand* — a stat pair or a real photograph over a superlative. *(voice-print §specificity.)*
- **Governing content rules (hard):** no alcohol/bar imagery or cues anywhere; **certified halal is a headline trust element**, never a footnote; never show non-sellable assets (old wing, pool, field, glass garden boardroom). *(onboarding §13.)*

---

## 1. Colour system
**Discipline:** near-monochrome warm field + **one** accent reserved for the primary CTA. No gold overload, no cheap black-and-gold. *(OS DL §4; docs/11 anti-patterns.)* Palette derived from the estate-green + champagne botanical crest. *(BKB §B.)*

### Core palette
| Token | Hex | Role |
|---|---|---|
| `estate-900` | `#1E2B1F` | deepest green — dark-spotlight backgrounds |
| `estate-700` **primary** | `#2E402F` | brand green — headings, structure, dark panels |
| `estate-500` | `#3E5540` | hover/secondary green |
| `estate-100` | `#E8EDE6` | green wash — tinted grouping surface |
| `champagne-500` **accent** | `#B8923B` | **primary CTA only** + rare key accents |
| `champagne-600` | `#A07E30` | accent hover/press |
| `champagne-200` | `#EAD9B0` | subtle accent tint (keylines, focus glow) |
| `sage-500` support | `#6E7C63` | secondary botanical accent (never a CTA) |

### Neutrals (warm) & surfaces
| Token | Hex | Use |
|---|---|---|
| `ink` | `#1E1D1A` | primary text on light; button label on champagne |
| `charcoal` | `#3D3A34` | secondary text |
| `steel` | `#6B675C` | muted text, captions, disabled |
| `stone` | `#B8B2A5` | borders, hairlines, field outlines |
| `mist` | `#EFEADE` | tinted surface |
| `ivory` | `#FAF6EE` | **default page surface** |
| `white` | `#FFFFFF` | cards, inputs |

### Semantic & action
`success #3F7D5A` · `error #B4453C` · `warning #C08A2E` · `focus` = `champagne-200` ring on light / `champagne-500` on dark. **WhatsApp `#25D366`** is the *only* other action colour. *(OS DL §4; SYSTEM/04 channels.)*

### Surface rhythm (tonal narrative)
`ivory` (default reading) → `mist`/`estate-100` (tinted grouping) → **`estate-700`/`estate-900` dark spotlight** (the most important trust/close moment). **Never two adjacent sections the same tone; ≤2 dark spotlights per page** (usually the trust moment + the final CTA). *(OS DL §4; §17 below.)*

### Contrast rules (measured, never eyeballed — OS DL §4 / §22)
- Body 4.5:1, large text 3:1 — measured over the actual surface/image region.
- **Champagne is a fill colour, not a small-text colour on light.** Primary button = `champagne-500` fill + **`ink` label** (~6:1 ✓). Champagne *text* only at large sizes on `estate-700`+ (verify) — otherwise body on dark green = `ivory`/`mist`.
- Text over photography always requires a scrim (§12).

---

## 2. Typography
Two faces, big size jumps, few weights, tight display tracking — serif for feeling, sans for facts. *(OS DL §3; docs/11 §4.)*

- **Display — `Fraunces`** (soft, warm, characterful serif; optical sizing; holds up from hero to UI). Carries the estate warmth + quiet pride. *(voice-print register.)* Classic-luxury alternative if the logo pushes that way: `Cormorant Garamond` — decide at logo-verify.
- **Body / UI — `Inter`** (humanist sans; excellent legibility for capacity tables, forms, conference spec).
- Self-hosted via `next/font`, `display: swap`. **≤3 weights total** (Fraunces 400/600; Inter 400/500/600).

### Type scale (roles → desktop px · mobile px)
| Role | Face / weight | Desktop | Mobile | Leading · tracking |
|---|---|---|---|---|
| Display XL (hero H1) | Fraunces 600 | 60 | 40 | 1.05 · −0.02em |
| Display L | Fraunces 600 | 48 | 34 | 1.08 · −0.02em |
| H2 (section) | Fraunces 600 | 34 | 27 | 1.15 · −0.01em |
| H3 | Fraunces 600 | 25 | 22 | 1.2 |
| H4 / card title | Inter 600 | 20 | 18 | 1.3 |
| Lead | Inter 400 | 20 | 18 | 1.55 |
| Body | Inter 400 | 17 | 16 (floor) | 1.65 · ≤65ch |
| Small / caption | Inter 400 | 15 | 14 | 1.5 |
| Eyebrow | Inter 600 caps | 13 | 12 | +0.14em, steel/champagne |
| Micro / legal | Inter 400 | 12 | 12 | steel |
| Numeral (stat) | Fraunces 600 | 44–60 | 34–40 | pair with micro label |

**Rules:** one colour per heading (one accent-word span max, once per page); never ALL-CAPS headlines (caps for eyebrows only); **stat pairs** (big numeral + micro label) are first-class — never a stat row with a missing number; measure capped ~65ch. *(OS DL §3.)*

---

## 3. Grid system
- **12 columns**, `max-width 1280px` container, gutters **24px** (mobile 20px). *(OS DL §8.)*
- **Breakpoints:** 360 · 390 · 480 · 768 · 1024 · 1280. Design mobile-first (§21).
- **Common splits:** 6/6, 7/5 (copy/evidence), `1.05fr/0.95fr` (asymmetry for information). Symmetry only for statement moments (a single quote, the closing CTA).
- **One focal point per viewport.** Asymmetry for information, centred for statements. Break the grid **1–2×/page** deliberately (full-bleed image, overlapping card) — never constantly.

## 4. Spacing rhythm
4-based scale, applied without deviation — the "measure it with a ruler" quality. *(OS DL §5.)*
`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 80 · 96 · 112 · 128 · 160`
| Relationship | Value |
|---|---|
| Section padding (Y) | 80 mobile · 112–128 desktop |
| Eyebrow → heading | 12 |
| Heading → body | 16 |
| Body → action | 28–32 |
| Card gap | 24 (mobile) · 32 (desktop) |
| Inside card padding | 24 |
**Grouping principle:** related close, unrelated far — the gap between an eyebrow and its heading is visibly smaller than the gap to the next block.

## 5. Border radius
One family, used without exception. *(OS DL §6.)*
`sm 8` (chips, inputs inner) · `md 10` (**buttons**, inputs) · `lg 16` (**cards**, images) · `xl 24` (large panels) · `pill 999` (badges/eyebrow chips only). No mixed radii.

## 6. Shadows & elevation
Large, soft, low-opacity — never small/hard/dark. **Blur ≥ 2× the y-offset**, negative spread. Borders **or** shadows, rarely both (hairline `1px stone @ ~40%` is the premium alternative on light). *(OS DL §6.)*
| Token | Value | Use |
|---|---|---|
| `shadow-card` | `0 20px 50px -28px rgba(30,29,26,.20)` | resting cards |
| `shadow-lift` | `0 24px 60px -24px rgba(30,29,26,.26)` | hover |
| `shadow-accent` | `0 18px 44px -20px rgba(184,146,59,.42)` | primary CTA hover |
| `shadow-ink` | `0 30px 80px -30px rgba(20,19,17,.55)` | dark spotlight panels |
**Elevation = meaning** (raised = interactive/important). Depth is better made by **layering planes at different offsets** than by heavy shadows.

## 7. Button system
One API, tied to the conversion system. **Primary action sitewide = "Book a viewing"; secondary = "Enquire for your date."** *(onboarding §13.6; SYSTEM/04 CTA system.)* Verb + outcome labels in the voice-print register; reassurance microcopy under primary.
| Variant | Fill / border | Label | States |
|---|---|---|---|
| **Primary — "Book a viewing"** | `champagne-500` fill | `ink` 600 | hover `champagne-600` + lift −2px + `shadow-accent`; focus `champagne-200` ring 2px/2px offset; active press; disabled `mist` fill/`steel` label |
| **Secondary — "Enquire for your date"** | transparent, `1px estate-700` border | `estate-700` 600 | hover `estate-100` wash; focus ring; same disabled |
| **Tertiary / link** | none | `estate-700` + underline-on-hover | arrow translate +4px on hover |
| **Call** | `1px ink` outline + phone icon | number as **real text** | own component (owns number + tracking) |
| **WhatsApp** | `#25D366` fill | white + icon | the only place green fill is used |
- **Sizes:** sm 40 · md 48 · lg 56 (height). **Min tap target ≥44; CTA height ≥48 on mobile.** Radius `md 10`. Padding md = 14×24.
- **Hierarchy is unambiguous:** one solid primary per surface; secondary is visually subordinate. Never two equally-weighted CTAs. *(OS Hero §9.)*
- Reassurance line under primary: *"Free · no obligation · we reply same business day"* (response cadence per BKB; every item true).

## 8. Form styling
Forms feed **HubSpot** and are a conversion surface. *(BKB Operations; docs/08.)*
- **Field:** height 48, radius `md 10`, `1px stone` border, `white` bg, `ink` text; **label above** (placeholder is never the label); focus = `estate-500` 2px ring; error = `error` border + message + `aria` announce; success subtle check.
- **Required capture (maps to HubSpot fields):** name · contact number · email · organisation · **event type** (select) · **estimated pax count** (number, `inputMode=numeric`) · event date (picker) · lead source (hidden). *(onboarding §9.)*
- **Multi-step** for weddings/conferences: ≤5 fields/step, slim progress indicator, back/next; correct `inputMode` per field; honeypot + minimal bot defense.
- **POPIA (build requirement):** consent checkbox + privacy link on every form **and** the WhatsApp entry point; explicit consent wording. *(onboarding §9.)*
- **Mobile:** prominent **click-to-WhatsApp** button beside the form (active enquiry channel). *(onboarding.)*

## 9. Cards
Base: `white` surface, radius `lg 16`, `shadow-card` **or** `1px stone` ring (not both), padding 24, image top with matching radius. Hover: lift −3px + `shadow-lift`. All five states; focus ring on interactive cards.
| Card | Anatomy | Notes |
|---|---|---|
| **Journey card** (Stay/Weddings/Conferences/Events) | icon · title (Fraunces) · one proof line · link | home + mobile menu; equal weight |
| **Venue / capacity card** | image · venue name · **capacity chip** (from BKB registry) · one detail line | chip e.g. "seats 650"; scroll-row on mobile |
| **Package card** | tier name · **from-price** or "from R25,000" (dual-safe) · inclusions ticks · CTA | wedding page dual-pricing-safe (`docs/07`) |
| **Room card** | image · beds/sleeps · from-rate · Check Availability | rates are Content-Readiness placeholders |
| **Testimonial** | quote (Fraunces) · name/role · source | real + consented only; no fake avatars |
| **Offer card** | title · terms · CTA | reusable Specials module; real offers only |

## 10. Icons
- **One line set** (Lucide or Phosphor), **1.5px stroke**, 24px grid, `ink`/`sage` colour, **no circle-backgrounds** (a Tell). Icons **support** text, never replace it. *(OS DL §12; a11y.)*
- **Channel icons** (call/WhatsApp/email) standardised via one component so they can't drift.
- **Certified-Halal badge** = a first-class trust component, not a generic icon: an `estate-700` pill with `ivory` "Certified Halal" (Inter 600) + a small check and a `champagne-200` keyline. Prominent on weddings, conferences, dining, home trust strip. Never "halal-friendly." *(onboarding §13.2 — the #1 differentiator.)*

## 11. Imagery treatment
- **Rectangles, one radius (`lg 16`)** or intentional full-bleed (0). No blob masks, circles, diagonal cuts. *(OS DL §7.)*
- **No heavy filters.** Scrim for text legibility only: bottom-anchored linear gradient (transparent → `rgba(estate-900,.55)`), measured. Full-bleed hero uses lower-third copy on the scrim.
- **Aspect ratios:** hero 16:9 desktop / **4:5 mobile crop**; card 4:3; portrait 3:4; gallery 1:1 or 4:5. Uniform treatment across any set. Art-direct mobile crops (don't CSS-scale an off-centre subject).
- **Content rules (hard):** **no alcohol/bar/cocktail imagery**; **never** photograph or imply non-sellable assets. *(onboarding §13.1/13.3.)*
- **Alt text describes the evidence** ("The D'Charmant Glass Hall at dusk, chandeliers lit, set for a 500-guest banquet") — build fails on missing alt.

## 12. Photography direction
The single biggest premium lever. *(OS DL §7; docs/11 §5.)* The Velmoré look: **French-Provence estate, warm dusk light, real environments, glass + chandeliers + gardens.**
- **Signature hero: the D'Charmant Glass Hall at dusk** — the client's strongest single asset. *(onboarding §11.)*
- **Per vertical:** Weddings — real ceremonies (chapel/garden), styles + seasons, couples; Conferences — real setups that *show scale* and the one-team-one-invoice story (hall + breakouts + beds); Rooms — clean, consistent, calm; Gardens/estate — best hour; Halal/food — celebrate the certified kitchen (when shot).
- **Gap-fill shoot** recommended before design sign-off: **rooms, spa, food** (coverage thin). *(onboarding §11 / docs/03.)*
- Environments over people; **real over stock, always** — stock as a subject is banned.

## 13. Motion language
Physics fixed (grammar), character varies (vocabulary). *(OS DL §10; Hero §7; docs/11 §12.)*
- **Ease `[0.22,1,0.36,1]`** everywhere. **Character: Considered** (duration 0.6–0.7, stagger 0.08); **Editorial** (0.8–0.9) reserved for hero + wedding gallery. "Slow-luxury" — if you notice the animation, it's too much.
- **The LCP element never animates in** — H1 + hero image render at first paint; only secondary elements animate; hero choreography ≤900ms.
- **`prefers-reduced-motion`: all entrance transforms → none, ambient loops → static — verified in the browser** (a CSS override does not stop Framer Motion).
- **Signature moment:** the capacity table / venue registry revealing in reading order (proof, elegantly delivered).

## 14. Scroll behaviour
- **Reveal follows the reading path**, once (`viewport once`, margin −80px); no re-animation on scroll-back. *(OS DL §10.)*
- **Overlap scroll-cue:** let the next section's cards break the fold by 40–80px (signals "more", no JS).
- **No parallax on text; none on mobile;** desktop parallax ≤12% on non-text layers only.
- **Sticky:** the top nav condenses on scroll (subtle translucent backdrop, §16); the **mobile action bar** (Call · WhatsApp · **Book a viewing**) appears after the hero scrolls out (safe-area padding).

## 15. Hover interactions
- Micro, fast (150–250ms), small: lift −3/−4px, arrow translate +4px, subtle shadow/tone change. *(OS DL §11.)*
- **Hover is never the only affordance** (touch has none) — any hover-revealed info is reachable another way.
- Every interactive element has **all five states**; focus ring visible on every surface incl. dark.

## 16. Section transitions
- **Tonal alternation** drives structure: no two adjacent sections share a surface tone; **≤2 dark spotlights** (the trust moment + the final CTA). *(OS DL §4/§9.)*
- Vary **three** dimensions so no two consecutive sections feel alike: surface tone · composition (image-left/right/full/grid/centred) · density.
- **Grid-break moments** 1–2×/page (a full-bleed D'Charmant image; an overlapping capacity panel).
- Transitions are quiet — a tone change + a reveal, never a hard divider, **never angled/blob dividers** (a Tell).

## 17. Glass / blur usage
Restrained and purposeful — a *nod* to the D'Charmant **Glass** Hall, never frosted-everything.
- **Allowed:** a subtle translucent **nav backdrop** on scroll (`backdrop-blur ~10px` over `ivory@~80%`, contrast re-measured); optionally **one** light frosted panel behind hero copy where it aids legibility over a busy dusk image (as an alternative to a gradient scrim).
- **Rules:** performance-safe (limited layers), text contrast measured **over** the blur, never on more than ~2 elements per page, never a decorative frosted wash. If it doesn't aid legibility or echo the glass motif, it doesn't ship.

## 18. Luxury cues (what makes Velmoré feel expensive)
In order of impact: **1** exceptional real photography · **2** typographic control (Fraunces display, tight tracking, real hierarchy) · **3** spacing rhythm you could measure · **4** colour restraint (one champagne accent, disciplined) · **5** quiet depth via layering + soft large shadows · **6** alignment discipline · **7** deliberate asymmetry · **8** motion barely noticed. *(OS DL §13; docs/11 §17.)*
**The negative test:** premium is the *absence of tells* — no cheap gold, no black-and-gold, no stock people, no drop-shadowed text, no gradient-on-gradient, no three CTAs, no angled dividers, no lorem.

## 19. Hospitality-specific design principles
- **Emotion → proof → logistics → one action** on every surface. *(docs/11.)*
- **Trust is forward and specific:** the **Certified-Halal badge**, review **volume** (not a bare score), real weddings, named clients (on permission). *(BKB §C; docs/02 Part 12.)*
- **Capacity/spec is designed content, not a footnote** — the confirmed registry, the "one site, one team, one invoice · 1,300-seat hall · 50 beds · certified halal" proposition, presented with pride. *(BKB §C/§E.)*
- **"Book a viewing" leads** — a site inspection converts far better than photos alone. *(onboarding §4.)*
- **Group scale is a design asset:** surface the multi-site reach (SCC 1,300 + Laudium 250) with clarity, not clutter.

## 20. Mobile behaviour
Designed first, not desktop stacked. *(OS DL §5; Hero §11.)*
- **Hero fold budget ≤5 elements** (logo+menu · H1 ≤3 lines · one sub line · journey selector 2×2 · one trust chip/halal badge).
- **Sticky bottom bar:** Call · WhatsApp · **Book a viewing** (weighted flex, safe-area).
- **Capacity/spec tables → horizontally scrollable cards**; package comparisons stack; galleries fast + swipeable.
- Tap targets ≥44; CTA ≥48; 8px min between targets; body ≥16px; type ×~0.72 with floors; test 360/390/768.
- Fix the current-site defect: **cookie/consent must not cover hero/CTA and must remember choice** (POPIA banner styled to the system).

## 21. Accessibility (WCAG 2.2 AA — non-negotiable)
Contrast measured (incl. over imagery/blur) · one real `<h1>`/page, semantic sections, eyebrow ≠ heading · full keyboard traversal + visible focus on every surface + skip-to-content · forms labelled with announced errors + correct `inputMode` + POPIA consent · `prefers-reduced-motion` honoured (verified in browser) · targets ≥44×44 · **axe zero critical/serious** (Gate 3). *(OS DL §11; docs/02 Part 19.)*

## 22. Component styling examples (the spec, at a glance)
Concrete reference for the pieces every page reuses (values above). **Descriptions, not code.**
| Component | Spec summary |
|---|---|
| **Primary button** | champagne-500 fill · ink 600 label · radius 10 · h48 · pad 14×24 · hover champagne-600 + lift−2 + shadow-accent · focus champagne-200 ring · label "Book a viewing" + reassurance micro |
| **Secondary button** | transparent · 1px estate-700 · estate-700 label · hover estate-100 wash · "Enquire for your date" |
| **Eyebrow** | Inter 600 caps 13 · +0.14em · steel or champagne · 12px above heading |
| **Stat pair** | Fraunces 44–60 numeral (estate-700) + micro label (steel) · used for capacities/scale |
| **Certified-Halal badge** | estate-700 pill · ivory "Certified Halal" · check · champagne-200 keyline · prominent |
| **Venue/capacity card** | white · radius 16 · shadow-card · image 4:3 · Fraunces name · capacity chip (from BKB registry) · hover lift−3 |
| **Package card** | tier · from-price/"from R25,000" (dual-safe) · inclusion ticks · primary CTA |
| **Form field** | h48 · radius 10 · 1px stone · label-above · focus estate-500 ring · error red + announced |
| **Dark-spotlight section** | estate-900 bg · ivory/mist text · champagne accent · shadow-ink panels · trust or final-CTA only |
| **Nav (scrolled)** | translucent ivory@80% + backdrop-blur 10px · condensed · persistent [Book a viewing] accent |

---

## 23. What verifies against the logo vector (single dependency)
When the official logo vector arrives: confirm the **exact estate-green + champagne hex**, the **display letterform choice** (Fraunces vs Cormorant), and the **logo lockup + clear-space + the "Velmoré" wordmark (accent é)**. Everything else in this system is committed and build-ready. Brand guidelines may need creating — this document is the seed. *(docs/03 Content Readiness.)*

---

*This is the creative foundation the entire Velmoré website inherits. No page layouts, wireframes or code produced. Awaiting review + approval before the first page is designed.*
