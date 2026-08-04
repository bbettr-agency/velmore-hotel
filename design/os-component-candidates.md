# OS component candidates — flagged during the Velmoré build

Reusable patterns worth reviewing for the **frozen** Website OS **after** Velmoré ships
(do not modify the OS now — this is a running flag list per the client's standing rule;
promotion goes through `PIPELINE/learning-loop.md` on a 2nd project). Updated as we build.

| # | Pattern (Velmoré file) | Why it could generalise | OS home (candidate) |
|---|---|---|---|
| 1 | **`Button`** (`components/ui/Button.tsx`) | one API, `primary`/`secondary`, accent reserved for primary — the OS's "end the per-site Button forks" goal | `ENGINE/ui` |
| 2 | **`RoutePlaceholder`** (`components/site/RoutePlaceholder.tsx`) | on-brand temp page so final routes/nav/SEO exist from day one | `ENGINE/ui` |
| 3 | **Config-driven routes map** (`config/site.ts` `routes` + `lib/metadata.ts`) | single source for nav labels, hrefs, per-page metadata → stable URLs, no nav rework | `ENGINE/seo` + template |
| 4 | **`JourneySelector` / path cards** (`components/home/JourneySelector.tsx`) | multi-service "choose your journey" hub for estates/multi-offer businesses | `ENGINE/ui` |
| 5 | **Stat-pair band** (in `EstateIntro`) | numerals-as-proof, editorial not boxy — the OS "stat pairs are first-class" rule, built | `ENGINE/ui` |
| 6 | **Dark-spotlight editorial section** (`EstateIntro`) | the Design Language's "most important trust moment" pattern, realised | `ENGINE/ui` (Section variant) |
| 7 | **Certified/trust badge** (halal badge, reused hero+estate) | a verified-only trust emblem component | `ENGINE/ui` |
| 8 | **CSS photography-placeholder system** (`globals.css` `.hero-*`, `.conf-*`) | premium, clearly-labelled image placeholders (dusk + warm-interior variants) before the shoot | template pattern |
| 9 | **Tracking-ready `Button`** (`track={{cta,location}}` → `data-cta`/`data-location`) | GTM/analytics select on data-attrs; no analytics coupling in the component (docs/08 taxonomy) | `ENGINE/ui` + analytics |
| 10 | **Image-led editorial split section** (`ConferencesPreview`) | premium "preview" pattern for a service (image + story + capability points + dual CTA), reusable for weddings/spa/etc. | `ENGINE/ui` (Section variant) |
| 11 | **Emotive editorial preview section** (`WeddingsPreview`) | the *contrast* variant of #10 for emotion-led services: copy-led (image right/portrait), italic kicker, tinted ground, capability carried in an understated hairline "held for you" line — same language, deliberately varied so a page reads editorial not repetitive | `ENGINE/ui` (Section variant) |
| 12 | **Wedding photography placeholder** (`globals.css` `.wed-*`) | third premium placeholder hue (golden-hour garden + chapel arch + string-light bokeh) extending the labelled placeholder system alongside `.hero-*` (blue dusk) and `.conf-*` (warm interior) | template pattern |
| 13 | **Section-rhythm / "don't mirror the neighbour" rule** (Conferences vs Weddings vs Stay) | adjacent preview sections should share the visual language but vary ground, image side/count/orientation, layout axis (split vs centered-stack) and info treatment so the page reads editorial; the shipped trio is capability(split)→emotion(portrait split)→rest(centered stack); worth an OS composition guideline | `ENGINE` guideline |
| 14 | **Centered, spacious "calm" preview section** (`StayPreview`) | the rest/change-of-pace variant: centered header, wide environmental + quiet detail image, quiet serif proof trio, extra vertical rhythm (py-28/40), restrained on-load reveal — a distinct third preview archetype alongside #10/#11 | `ENGINE/ui` (Section variant) |
| 15 | **Quiet serif proof trio** (in `StayPreview`) | 3-up centered proof (serif numeral/label + uppercase note), a calmer alternative to the dot-list/hairline treatments — reusable low-emphasis proof band | `ENGINE/ui` |
| 16 | **Light/airy placeholder variant** (`globals.css` `.stay-*`) | a *light* placeholder hue (daylight room + garden detail) — the calm counterpoint completing the placeholder set (blue dusk / warm hall / golden wedding / **light room**) | template pattern |
| 17 | **Interim CTA with future-proof tracking label** (`check_availability` → enquiry, distinct from `book_viewing`/`booking_click`) | route a not-yet-integrated action (booking engine) to the enquiry journey now, with its own tracking label so it can be repointed later without touching sibling CTAs | `ENGINE` + analytics |
| 18 | **Dark-warm "exhale" section** (`SpaPreview`) | an intimate tonal-dip archetype: warm candlelit ground, one soft-focus image, restrained copy, generous negative space — a deliberate pause in the page rhythm; the 4th preview archetype (capability-split / emotion-split / rest-centered / **calm-dark**) | `ENGINE/ui` (Section variant) |
| 19 | **Soft-focus / shallow-DoF placeholder** (`globals.css` `.spa-*`) | a diffuse, blurred, candlelit placeholder (no hard structure) for sensory/close-up imagery — completes the placeholder set (dusk / hall / wedding / room / **soft-focus**) | template pattern |
| 20 | **Name-neutral, service-neutral section pattern** (`SpaPreview`) | when a sub-brand's name/operator/services are unconfirmed, ship a section that communicates only the *emotional role* + an enquiry CTA, asserting nothing unconfirmed — reusable "unconfirmed-offer" guardrail | `ENGINE` guideline (content-readiness) |

### Not yet built, noted for later
- **`Reveal`** (IntersectionObserver, once, reduced-motion + no-JS safe) scroll-reveal wrapper — deferred so this milestone stays no-JS-robust; strong OS candidate when added.
- **`SectionHeading`** (eyebrow/title/lead, one API) — recurring; formalise when a 3rd section repeats it.
