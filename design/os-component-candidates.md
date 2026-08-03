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

### Not yet built, noted for later
- **`Reveal`** (IntersectionObserver, once, reduced-motion + no-JS safe) scroll-reveal wrapper — deferred so this milestone stays no-JS-robust; strong OS candidate when added.
- **`SectionHeading`** (eyebrow/title/lead, one API) — recurring; formalise when a 3rd section repeats it.
