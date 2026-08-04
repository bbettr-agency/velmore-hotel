# Velmoré — Production Image Library

The authoritative home for **real production photography**. Drop final images into the
correct folder using the conventions below and they're ready to wire into the site.

- **Authority on art direction & the shot list:** [`docs/17-PHOTOGRAPHY-STRATEGY.md`](../../docs/17-PHOTOGRAPHY-STRATEGY.md) (philosophy, one estate-wide grade, per-section direction, the full Image Manifest with IDs/alt/SEO). **This README governs the file structure; docs/17 governs the images themselves.**
- **Status:** folders are scaffolded (empty, `.gitkeep`-tracked). The site currently uses **labelled CSS placeholders** (`.hero-* .conf-* .wed-* .stay-* .spa-* .dine-*`) — no images from this library are referenced in code yet. That wiring happens per-section as real photography lands.
- **Content rules (from the BKB — non-negotiable):** **NO** alcohol / bar / wine / drinks imagery anywhere; certified-halal welcome is a headline asset (a beautifully set halal table, never alcohol); **never** show the non-sellable assets (the old-wing rooms, the large pool and field under restoration, the small glass-garden boardroom). Show the **real** estate only — never stock passed off as Velmoré.

---

## 1. Folders — purpose

| Folder | Purpose |
|---|---|
| `hero/` | Full-width hero / opening images per page (homepage + each inner page). Cinematic, LCP-critical. |
| `estate/` | The estate as a whole — establishing exteriors, aerial/drone, French-Provence architecture, "one estate" story. |
| `conferences/` | The Suleman Convention Centre hall(s) set for conferences; seating configurations; breakout rooms. |
| `weddings/` | Ceremonies & receptions (chapel, glass hall), couples, décor, real weddings (consent required). |
| `accommodation/` | Room interiors by type, the stay experience. *(Alias/overlaps `rooms/` — see note.)* |
| `dining/` | The dining space, set (halal) tables, plated food, hospitality moments. *(Food close-ups → `food/`.)* |
| `spa/` | Spa interiors, treatment details, tranquil sensory imagery. Name-neutral until confirmed. |
| `gallery/` | Curated cross-vertical set for the gallery page/showcase. |
| `about/` | Brand/estate story, architectural detail, heritage imagery. |
| `contact/` | Arrival, entrance/gates, directions, map context. |
| `team/` | Staff / the "one team" — hosts, coordinators, chefs (consent required). |
| `reviews/` | Optional supporting imagery for the trust section (real moments behind curated reviews). |
| `events/` | Year-end functions, galas, matric farewells, private celebrations. |
| `rooms/` | Per-room-type detail shots (linen, window, view). Pairs with `accommodation/`. |
| `gardens/` | The gardens at golden hour, garden details, ceremony-garden moments. |
| `venues/` | Per-venue library keyed to the confirmed registry (see §9) — one home for each hireable space. |
| `food/` | Food & menu close-ups / flat-lays (honest styling, halal, no alcohol). |
| `details/` | Texture & sensory details — place settings, candles, florals, fabric, hands (no faces needed). |
| `branding/logos/` | Logo suite — primary, mono, stacked, horizontal, mark-only (SVG preferred). |
| `branding/favicon/` | Favicon set + app/touch icons + `site.webmanifest` icons. |
| `branding/social/` | OpenGraph / Twitter / share cards (1200×630) and social profile art. |
| `placeholders/` | **Temporary only.** Clearly-labelled stand-ins if a raster placeholder is ever needed. Never ship as final; empty by default (the live site uses CSS placeholders instead). |

> **`accommodation/` vs `rooms/`:** use `accommodation/` for hero + environmental "stay" images, `rooms/` for per-room-type detail sets. **`dining/` vs `food/`:** `dining/` = the space and set tables, `food/` = plated/close-up food. Keep this split so pages can pull the right kind of image.

---

## 2. Filename conventions

**Pattern:** `velmore-<subject>[-<qualifier>][-<variant>].<ext>` — lowercase, hyphen-separated, ASCII, no spaces/underscores/camelCase.

- Always brand-prefix: `velmore-`.
- Be descriptive and SEO-natural (see §7): `velmore-glass-hall-dusk`, not `img_2381`.
- Sequence with zero-padded numbers: `velmore-real-wedding-01.jpg` … `-12.jpg`.
- One subject per file; keep names stable once referenced in code.

**Examples**
```
hero/velmore-home-hero-desktop.avif
weddings/velmore-martels-chapel-ceremony.avif
conferences/velmore-1300-seat-conference-cinema.avif
rooms/velmore-deluxe-room-window.avif
food/velmore-halal-plated-main.avif
branding/logos/velmore-logo-primary.svg
```

### Desktop / mobile hero naming
Heroes are art-directed per breakpoint (different crop, not just resize):
```
<page>/velmore-<page>-hero-desktop.<ext>   # landscape / wide crop
<page>/velmore-<page>-hero-mobile.<ext>    # portrait / 4:5 crop
<page>/velmore-<page>-hero-poster.<ext>    # video poster still (= the hero frame), if a hero video exists
```
e.g. `hero/velmore-home-hero-desktop.avif`, `hero/velmore-home-hero-mobile.avif`.

### Thumbnail naming
Only when a hand-made crop is needed (Next.js `<Image>` usually derives sizes automatically):
```
velmore-<subject>-thumb.<ext>       # square/4:3 card crop
velmore-<subject>-thumb@2x.<ext>    # retina, if hand-exporting
```

---

## 3. Formats & delivery

- **Preferred:** `.avif` (primary) with **`.webp`** fallback.
- **Always keep the original master `.jpg`** (or high-quality source) beside the optimised versions as the archival backup / re-export source.
- **Vectors** (logos, icons, simple marks): **`.svg`** (optimised/SVGO). Provide a `.png` raster fallback only where SVG can't be used.
- **Never** commit TIFF/PSD/RAW masters here — keep those in the design archive, not the web `public/` library.
- Recommended trio per key image: `name.avif`, `name.webp`, `name.jpg`.

---

## 4. Size & weight recommendations

Export at ~2× the largest CSS display size, then let `<Image>` generate responsive sizes.

| Use | Longest edge (source) | Target weight (AVIF) |
|---|---|---|
| Full-bleed hero (desktop) | 2560px | ≤ 250 KB |
| Hero (mobile, portrait) | 1290px | ≤ 150 KB |
| Full-width section band | 2000px | ≤ 200 KB |
| Gallery / card tile | 1200px | ≤ 120 KB |
| Room / detail thumbnail | 800px | ≤ 80 KB |
| OG / social card | 1200×630 (fixed) | ≤ 200 KB |
| Logo (SVG) | — | ≤ 20 KB |

- Quality target: AVIF ~50–60 / WebP ~78–82 (tune per image; protect highlights on dusk frames).
- Strip EXIF/GPS on export; keep colour profile sRGB.
- LCP hero images get Next.js `priority`; nothing above the fold animates in.

---

## 5. Alt-text conventions

Every production image shipped in code **must** have descriptive alt text (the build/lint expects it).

- Describe the **evidence in the frame**, not the slot: *"The D'Charmant Glass Hall at dusk, chandeliers lit, set for a reception"* — not *"hero image"*.
- Include the **place/venue name** where relevant (helps image SEO): *"A ceremony in the Martels Chapel at Velmoré."*
- Keep ~8–16 words, no keyword stuffing, no "image of" / "picture of".
- **Decorative-only** images use empty `alt=""`.
- **No names of real people** without consent (weddings/team).
- Alt text per manifest image is drafted in [`docs/17-PHOTOGRAPHY-STRATEGY.md`](../../docs/17-PHOTOGRAPHY-STRATEGY.md) §4.

---

## 6. SEO naming conventions

- Filenames double as ranking signals — use natural keywords: `velmore-wedding-venue-glass-hall.avif`, `velmore-1300-seat-conference-hall.avif`, `velmore-day-spa-treatment-room.avif`.
- Prefer location/venue keywords where genuine (Pretoria / Centurion / venue names).
- Hyphens as word separators (Google reads them as spaces); never underscores.
- Keep names truthful — the filename must match what's actually shown.

---

## 7. Which folders are waiting for photography

Status keyed to the BKB photo-reality + the Image Manifest (docs/17 §5).

| Folder | Status |
|---|---|
| `estate/`, `gardens/` | 🟡 **Exists** — select & grade (exterior/aerial/drone/gardens already shot). |
| `weddings/` | 🟡 **Exists** — real weddings shot; **written couple consent required** before use. |
| `conferences/`, `venues/` | 🟡 **Partial** — setups exist; a **scale-true 1,300-seat** frame to confirm/shoot. |
| `hero/` | 🟠 **Select or shoot** — confirm the D'Charmant-at-dusk frame exists to the art direction, else schedule. |
| `accommodation/`, `rooms/` | 🔴 **Shoot (thin)** — P0 gap; consistent styling; **do not shoot the old-wing rooms.** |
| `spa/` | 🔴 **Shoot (thin)** — P0 gap; serene interiors/detail; name-neutral. |
| `dining/`, `food/` | 🔴 **Shoot (thin)** — P0 gap; set halal table + plated food; **no alcohol/bar.** |
| `details/`, `events/` | 🔴 **Shoot / select** — sensory details; year-end/function sets. |
| `team/` | 🔴 **Shoot** — the "one team"; consent required. |
| `about/`, `contact/`, `reviews/` | 🟠 **Compose from the above** — brand/arrival/supporting selects. |
| `branding/logos/` | ⛔ **Blocked** — awaiting the client **logo vector** (Gate-1). |
| `branding/favicon/`, `branding/social/` | 🟠 **Derive** — generate once the logo + hero exist. |
| `placeholders/` | ⚪ **Intentionally empty** — live site uses CSS placeholders. |

Legend: 🟡 exists→select/grade · 🟠 select/derive/confirm · 🔴 shoot (gap) · ⛔ blocked on client · ⚪ n/a

---

*Keep this README updated as photography lands. Do not reference images from this library in code until the corresponding section is wired to real assets. Folders are `.gitkeep`-tracked so the structure stays in Git while empty.*
