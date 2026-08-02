# 10 — COMPONENT INVENTORY (build planning)

**Project:** Velmore Hotel Estate · **Phase:** 4→5 prep (pre-Gate-1)
**What this is:** the component library the build needs — props, variants, states and where to **harvest** each pattern from (OS rule: harvest from SHOWCASE, don't reinvent). **No components are built yet.** This is planning; it informs Phase 5.
**References:** OS `SYSTEM/DESIGN-LANGUAGE/01-HERO-SYSTEM` (one `<Hero>`, variants), `SYSTEM/02-TECH-STACK`, `docs/07` (where each is used), `docs/08` (tracking), `docs/09` (design system). **Content is config-driven** — components hold no copy/facts; those live in `config/*` (filled at Gate 1). Placeholders **〔G1〕**.

**Architecture (OS/showcase convention):** page composition in `views/*.tsx`; copy/content in `config/*-config.ts`; business+channels in `config/site-config.ts`; SEO in `config/seo-config.ts` + `lib/metadata.ts`; trust in `config/trust.ts` (verified-only, progressive); images in `config/images.ts` (= shot list); tokens in `tailwind.config.ts`. **Every component: tokenized, accessible, all five states, reduced-motion-safe.**

---

## 1. Layout primitives
| Component | Purpose | Key props | Notes |
|---|---|---|---|
| `Section` | one section shell w/ surface tone + rhythm | `tone` (light/tinted/dark), `as`, `spacing` | enforces py-scale + no-two-adjacent-tones discipline |
| `Container` | max-w-7xl + gutters | `size` | px-6 lg:px-8 |
| `Grid` / `Stack` | 12-col grid / vertical rhythm | `cols`, `gap` | 6/6, 7/5, 1.05fr/0.95fr splits |
| `SectionHeading` | eyebrow/title/lead — ONE api | `eyebrow`, `title`, `lead`, `tone`, `as` | eyebrow ≠ heading; one H2 |

## 2. Navigation & chrome
| Component | Purpose | Variants / props | Harvest | Notes |
|---|---|---|---|---|
| `TopNav` | desktop nav + dropdowns + Check-Availability button | items (revenue-ordered 〔G1〕), `Events▾`, sticky-on-scroll | showcase navs | 9 items + 1 accent button ceiling |
| `MobileNav` | drawer; **journey paths first** | open/close, focus-trap | — | journey selector surfaced first |
| `StickyMobileCTA` | Call · WhatsApp · Check Availability | weighted flex, scroll-gated, safe-area | Multi Risk / Vision Motors bars | highest-ROI mobile element |
| `Breadcrumbs` | level-2/3 orientation | trail | — | emits `BreadcrumbList` |
| `Footer` | 4-col nav + NAP + social + credit | columns per `docs/06` §3.2 | showcase footer | Bbettr credit (OS rule); NAP from `site-config` |

## 3. Hero (one component, variants — OS Hero System)
`<Hero variant eyebrow headline sub proof[] media mobileMedia primaryCta secondaryCta>` — LCP rule enforced *inside* the component (H1+image render at first paint; only secondary animates).
| Variant | Used on | Extra |
|---|---|---|
| `editorial` + **journey selector** | Home | full-bleed image + 4-path selector (functional element) |
| `service` | Weddings, Conferences, Spa, Restaurant, Events, About | image + H1 + proof chip + primary CTA |
| `functional` (availability) | Accommodation | inline dates+guests → eZee widget |
| `utility/light` | Contact, Specials, sub-pages | compact, CTA-forward |

## 4. Content / evidence blocks
| Component | Purpose | Variants / props | Notes |
|---|---|---|---|
| `JourneySelector` | 4 path cards → hubs | icon, label, proof line, href | home + mobile menu + final CTA |
| `StatStrip` | stat pairs (scale proof) | items[{value,label}] | verified-only; no missing-number rows |
| `CapacityTable` | venue × layout capacities | rows 〔G1〕, scrollable mobile | the market-gap differentiator (weddings/conferences) |
| `PackageCards` | tiered package comparison | tiers[{name,from,includes[]}] 〔G1〕 | price = guidance, verified-only |
| `RoomCard` | room type teaser | image, beds, size, amenities, from-rate 〔G1〕, CTA | `HotelRoom` schema |
| `VenueCard` | venue teaser/detail link | image, capacity, size 〔G1〕 | `EventVenue` |
| `ServiceBand` | image-left/right preview | `side`, media, heading, CTA | alternate sides for rhythm |
| `GalleryGrid` + `Lightbox` | filtered real photography | filter by vertical, `ImageObject` alt | fast, swipeable mobile |
| `Testimonials` | grid + single | quotes 〔G1: consent〕 | no fabricated proof |
| `TrustStrip` / `ReviewBadge` | review volume + grading | count 〔G1〕, grading 〔G1: TGCSA〕 | progressive (`config/trust.ts`); render only verified |
| `ProcessSteps` | proposal/enquiry process | steps 〔G1〕 | kills "what happens if I enquire?" |
| `FAQAccordion` | objection answers | items 〔G1 + PAA〕 | emits `FAQPage` (visible, genuine) |
| `MapDirections` | map + drive-times | embed, routes, drive-times 〔G1〕 | contact + location sections |
| `SpecialsCards` | current offers | offers 〔G1 — else suppressed〕 | `Offer` schema, real only |
| `FinalCTA` | dark-spotlight close | multi-path + channels | ≤2 dark spotlights/page |

## 5. Forms & conversion
| Component | Purpose | Props | Notes |
|---|---|---|---|
| `LeadForm` | multi-step, per-vertical | `fields` config, `transport:'ghl-webhook'`, `service`, `onSuccess:/thank-you/[type]` | ≤5/step; honeypot; POPIA consent; attribution hidden fields (`docs/08` §3/§6) |
| `FormField` set | typed inputs | text/date/select/range/tel/email | correct `inputMode`; labelled; announced errors |
| `ConsentCheckbox` | POPIA | privacy link | required |
| `AvailabilityWidget` | rooms → eZee | dates, guests → deep-link/embed 〔G1: eZee access〕 | fires `booking_click` |
| `ThankYou` | tracked confirmation | `type`, response-time 〔G1〕 | conversion fires here (`docs/08` §4) |

## 6. UI primitives
| Component | Purpose | Variants | Notes |
|---|---|---|---|
| `Button` | one API | primary (accent) / ghost / link | end per-site forks; all 5 states; focus ring |
| `CallButton` `WhatsAppButton` `EmailButton` | own the channel + `aria-label` + tracking | — | **harvest Vision Motors `CallButton`** so number/tracking can't drift; `#25D366` WhatsApp only |
| `Card` `Badge` `Chip` `Icon` | surfaces / proof chips / one icon set | — | one radius + elevation family |
| `Img` | alt-enforced `next/image` wrapper | `priority` for LCP | build fails on missing alt; AVIF/WebP; dims set |

## 7. SEO / analytics infrastructure
| Component / module | Purpose | Notes |
|---|---|---|
| `lib/metadata.ts` | per-page title/OG/canonical/Twitter factory | placeholders 〔G1: canonical name/domain〕 |
| Schema emitters | `Hotel`, `HotelRoom`, `EventVenue`, `Restaurant`, `DaySpa`, `Offer`, `FAQPage`, `BreadcrumbList`, `Organization`, `WebSite` | only genuine data; no fabricated ratings/prices (OS truth) |
| `sitemap.ts` / `robots.ts` | route-generated | replaces stale WP sitemaps |
| `ConsentManager` + `dataLayer`/GTM | consent-aware tag layer + event pushes | `docs/08` §6/§7; fix current cookie-banner defect |

---

## Build sequencing (informs Phase 5 — `docs/04`)
1. **Foundation:** tokens/tailwind, layout primitives, `TopNav`+`MobileNav`+`StickyMobileCTA`+`Footer`, `Img`, metadata + schema scaffolding, `LeadForm` + `ThankYou` + consent/GTM.
2. **P0 pages:** Home (Hero+JourneySelector+bands+TrustStrip+FinalCTA), Accommodation (+AvailabilityWidget+RoomCard), Weddings (+CapacityTable+PackageCards), Conferences (+CapacityTable+ProcessSteps), Allura Spa, Contact (+MapDirections).
3. **P1 pages:** Events + children, Restaurant, Specials, Gallery, About, FAQ, room/venue details.
4. **Content pass:** fill `config/*` with confirmed Gate-1 facts + voice-print copy; drop real photography into `config/images.ts`.

**Harvest-first (OS anti-overbuild):** reuse proven SHOWCASE patterns (Vision Motors `CallButton` + no-JS interactive column; Zaydtex collage-as-evidence; Multi Risk multi-step form + sticky bar; Cuisine Foods `config/trust.ts` progressive trust + `config/images.ts` shot list). Nothing invented that a showcase already solves.
