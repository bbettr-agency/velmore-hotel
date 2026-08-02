# 08 — CONVERSION, TRACKING & CRM (implementation spec)

**Project:** Velmore Hotel Estate · **Phase:** 3 ARCHITECT → 5 BUILD prep (pre-Gate-1)
**What this is:** the *implementation-level* spec for CTAs, forms, thank-you pages, CRM routing, event tracking and analytics — the build detail beneath the strategy in `docs/05-MARKETING-CONVERSION-BLUEPRINT` (Parts 24–29). **Does not duplicate** `SYSTEM/04-MARKETING-ENGINE` (authoritative standard) — it applies it.
**Client-dependent items** (credentials, IDs, response times, team routing) are marked **〔G1: …〕** and wired as config placeholders now, filled after Gate 1.

---

## 1. Conversion architecture (recap → build)
Match CTA to intent; one primary conversion per page (`SYSTEM/04` §3/§5). Accommodation + spa → transactional rails; weddings/conferences/events → qualified forms → GHL. Every path ends on a tracked `/thank-you/[type]`.

## 2. CTA system (labels · placement · hierarchy)

**Global rules:** one accent primary per page (solid), secondaries ghost/outline; WhatsApp `#25D366` only; verb + outcome labels (voice-print); reassurance microcopy under primary ("Free · no obligation · we reply within 〔G1: response time〕"). No "Submit"/"Learn more" as primary.

| Page | Primary CTA (label) | Secondary | Placement |
|---|---|---|---|
| Home | Journey selector (Stay/Weddings/Conferences/Celebrations) | Check Availability (persistent) · Call/WhatsApp | hero + §14 close |
| Accommodation | **Check Availability** | WhatsApp · Call | hero widget + after each room + close |
| Weddings | **Request a Wedding Package** | Book a Venue Tour · WhatsApp | hero + after packages + after proof + close |
| Wedding packages | **Request a Wedding Package** | Download brochure 〔G1〕 | after table + close |
| Conferences | **Request a Conference Proposal** | Download capacity chart 〔G1〕 · Call | hero + after table + close |
| Events (+children) | **Plan an Event** | WhatsApp | hero + close |
| Restaurant | **Book a Table** | View Menu · Call | hero + close |
| Allura Spa | **Book a Spa Day** | WhatsApp | hero + after packages + close |
| Specials | Claim / Enquire | WhatsApp | per offer |
| Contact | path-routed enquiry | Call · WhatsApp | top |

**Sticky mobile bar (sitewide):** Call · WhatsApp · Check Availability (weighted flex; appears after hero; safe-area padding).

## 3. Forms — spec per vertical (feed GHL)

Rules (`SYSTEM/04` §7): ask only what routes/qualifies; ≤5 fields/step; multi-step for high-value B2B; correct `inputMode`; honeypot + min bot defense; POPIA consent; labelled fields, announced errors. **Every submission also captures the hidden attribution set** (§6).

| Form | Visible fields (step order) | Transport | Routes to |
|---|---|---|---|
| **Wedding** | Step 1: date · guest count · ceremony type (garden/chapel/indoor) · budget band. Step 2: name · email · phone · message | GHL webhook | Weddings pipeline |
| **Conference (RFP)** | Step 1: date(s) · delegates · setup · accommodation needed? · catering? Step 2: company · name · email · phone · message | GHL webhook | Conferences pipeline |
| **Event** | occasion · date · guests · name · contact · message | GHL webhook | Events pipeline |
| **Spa** | package/treatment · date · people · name · contact | GHL webhook / WhatsApp | Spa pipeline |
| **General / stay overflow** | reason · name · contact · message | GHL webhook | Bookings pipeline |
| **Room booking** | (not a form) availability widget → **eZee/iPMS247** | eZee deep-link/embed 〔G1: access〕 | eZee/PMS |

Field microcopy human ("Best number to reach you"); date pickers; guest/delegate as ranges or number; budget band optional but valuable. Consent checkbox + privacy link required.

## 4. Thank-you page strategy
One template, typed by route: `/thank-you/{stay|wedding|conference|event|spa}`.
- **Content:** confirmation + "what happens next" + **response-time promise 〔G1〕** + secondary action (WhatsApp / explore related content) + reassurance. No nav distractions.
- **Tracking:** the **conversion event fires here** (not on button click) — server-confirmed where possible. Each type maps to a distinct GA4 conversion + Ads/Meta conversion (§6).
- **Booking confirmation:** eZee may not redirect to our thank-you; capture `booking_click` on hand-off and, where eZee supports a return/postback, fire `booking_confirmed` 〔G1: eZee capabilities〕.

## 5. CRM & automation — Lead-Routing Map (GHL)
Backend = GHL (OS standing rule) 〔G1: confirm GHL + access〕. Each submission creates/updates a Contact + an Opportunity with source/campaign/landing-page + type, then triggers automation.

| Form → Pipeline | Stages | Owner (notify) | Automation |
|---|---|---|---|
| **Weddings** | New enquiry → Tour booked → Quoted → Won/Lost | 〔G1: weddings coord.〕 | instant auto-reply + brochure 〔G1〕; notify; 5-touch follow-up |
| **Conferences** | New RFP → Proposal sent → Site visit → Won/Lost | 〔G1: conf coord.〕 | auto-reply + capacity chart 〔G1〕; notify; RFP follow-up |
| **Events** | New → Quoted → Won/Lost | 〔G1: events〕 | auto-reply; notify; seasonal follow-up |
| **Spa** | New → Booked | 〔G1: spa/bookings〕 | auto-reply + specials; notify |
| **Bookings/general** | New → Handled | 〔G1: bookings〕 | auto-reply; notify |

Qualification fields (date, guests/delegates, budget band, occasion) sync to the opportunity so sales prioritises. UTM/GCLID/FBCLID → GHL custom fields for attribution. Notification channels 〔G1: which inbox/WhatsApp/SMS〕.

## 6. Tracking — event taxonomy (with parameters)
Stack (`SYSTEM/04` §6): **GTM** (tag layer) → GA4 · Google Ads (Enhanced Conversions) · Meta Pixel + CAPI · Microsoft Clarity · Search Console. Consent-aware (POPIA) — marketing/analytics tags gated until consent. All events pushed to `dataLayer` and routed via GTM.

| Event | Fires on | Key params |
|---|---|---|
| `booking_click` | Check Availability / eZee open | `location`, `page` |
| `booking_confirmed` | eZee return/postback 〔G1〕 | `value?`, `currency:ZAR` |
| `lead_form_submit` | any enquiry success | `service` (wedding/conference/event/spa/stay), `form_id`, `step_count` |
| `call_click` | any `tel:` | `location` |
| `whatsapp_click` | any WhatsApp link | `location`, `prefill` |
| `email_click` | any `mailto:` | `location` |
| `reservation_click` | restaurant table booking | `page` |
| `brochure_download` | package/rate-card/PDF | `doc` (wedding/conference), `page` |
| `cta_click` | primary CTA clicks | `label`, `location` |
| `scroll_depth` | 25/50/75/100% | `percent`, `page` |
| `thank_you_view` | each `/thank-you/[type]` | `service` |

**Conversions (mirror to Ads EC + Meta CAPI):** `lead_form_submit`, `booking_click`(soft)/`booking_confirmed`(hard), `whatsapp_click`, `call_click`, `reservation_click`. Values 〔G1: assign per service if desired〕.

## 7. GTM / dataLayer plan
- **dataLayer schema:** on every page push `{page_type, service, revenue_priority}`; on interaction push the event + params above.
- **GTM structure:** Variables (dataLayer keys, consent state, UTM/click-ids from storage) · Triggers (custom events + element clicks for tel/mailto/WhatsApp + history-change for thank-you) · Tags (GA4 config + events, Ads conversion + EC, Meta Pixel + CAPI, Clarity). One container 〔G1: GTM account/container ID〕.
- **Attribution capture:** on first visit, persist `utm_*`, `gclid`, `fbclid`, `landing_page`, `referrer`, `device`, `first_page`, `returning` to storage; attach to every form submit + pushed to dataLayer (`SYSTEM/04` §7).
- **Enhanced Conversions:** hashed email/phone from form success (consent-gated). **Meta CAPI:** server event mirroring Pixel with dedup `event_id`.

## 8. Analytics implementation plan (phased)
1. **Build:** GTM container + dataLayer pushes + consent gating in the Next.js app; GA4 property 〔G1〕; event wiring; thank-you conversions.
2. **Pre-launch (Gate 3):** test-fire every event + conversion end-to-end (form→GHL→notification; tel; WhatsApp; booking hand-off); verify dataLayer; Tag Assistant + GA4 DebugView; Clarity recording.
3. **Launch (Gate 4):** verify all firing **in production**; Ads EC + Meta CAPI active; Search Console verified + sitemap; GBP linked 〔G1: access〕.
4. **Grow:** dashboards (conversions by service × channel × landing page), CWV monitoring, message-match iteration (`SYSTEM/04` §10 GROW).

**Open (all Gate 1 / access):** GA4 ID · GTM ID · Ads account + conversion IDs · Meta pixel/CAPI token · Clarity ID · Search Console · GHL access + pipeline build · eZee access + postback capability · response-time + team routing.
