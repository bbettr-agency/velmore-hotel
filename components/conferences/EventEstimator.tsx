"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import {
  CANONICAL_EVENT_TYPES,
  ORG_OPTIONS,
  ORG_RATES,
  ORG_EVENT_TYPES,
  PRIVATE_RATE,
  PRIVATE_EVENT_TYPES,
  WEDDING_VENUES,
  WEDDING_INCLUSION,
  ROOM_TYPES,
  BREAKFAST_RATE,
  SPA_PACKAGES,
  zar,
} from "@/config/estimator";

/**
 * Shared qualification calculator — the ONE calculator used on both /conferences
 * and /contact. All pricing comes from config/estimator.ts (single source of
 * truth), so the two pages can never drift. It asks only the questions relevant
 * to the chosen enquiry type, leads with an indicative PER-PERSON / PER-ROOM /
 * PACKAGE rate, and hands every answer (including a hidden numeric estimatedValue)
 * to the page's enquiry form via a `velmore:estimate` CustomEvent — the form
 * stays gated/unmounted until Continue fires. It fires no Meta Pixel / Lead event.
 */

const SULEMAN = { name: "Suleman Convention Centre", cap: 1300 };

const posInt = (s: string) => {
  const n = /^\d+$/.test(s.trim()) ? parseInt(s, 10) : NaN;
  return Number.isFinite(n) && n > 0 ? n : null;
};

type Venue = { heading: string; capacity?: string };

export function EventEstimator({
  eyebrow,
  heading,
  intro,
  venues,
  ctaLocation = "conferences_estimator",
  initialEventType = "",
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  venues: readonly Venue[];
  ctaLocation?: string;
  // Optional page-specific preselection (e.g. /weddings → "Wedding"). Must be a
  // canonical eventType value; empty = visitor chooses. Only sets the initial
  // selection — the visitor can still change it, and the calculator is never
  // bypassed (a valid estimate is still required to Continue).
  initialEventType?: string;
}) {
  const [eventType, setEventType] = useState(initialEventType);
  const [date, setDate] = useState("");
  // conference / wedding / private
  const [organisationType, setOrganisationType] = useState("");
  const [guests, setGuests] = useState("");
  const [weddingVenue, setWeddingVenue] = useState("");
  // accommodation
  const [roomType, setRoomType] = useState("");
  const [rooms, setRooms] = useState("");
  const [nights, setNights] = useState("");
  const [breakfast, setBreakfast] = useState("No");
  // spa
  const [spaPackage, setSpaPackage] = useState("");
  const [spaBasis, setSpaBasis] = useState("");
  const [spaQty, setSpaQty] = useState("1");

  const mode = ORG_EVENT_TYPES.includes(eventType)
    ? "conference"
    : eventType === "Wedding"
      ? "wedding"
      : PRIVATE_EVENT_TYPES.includes(eventType)
        ? "private"
        : eventType === "Accommodation / Stay"
          ? "accommodation"
          : eventType === "Spa"
            ? "spa"
            : eventType === "Other"
              ? "other"
              : "";

  const guestsNum = posInt(guests);
  const roomsNum = posInt(rooms);
  const nightsNum = posInt(nights);
  const qtyNum = posInt(spaQty);

  // Conference/private venue fit (from confirmed config capacities + Suleman).
  const venueFit = useMemo(() => {
    if (!guestsNum) return { list: [] as { name: string; cap: number }[], overflow: false };
    const estate = venues
      .map((v) => ({ name: v.heading.trim(), cap: parseInt((v.capacity || "").replace(/[^\d]/g, ""), 10) }))
      .filter((v) => Number.isFinite(v.cap) && v.cap >= guestsNum)
      .sort((a, b) => a.cap - b.cap)
      .slice(0, 3);
    if (estate.length) return { list: estate, overflow: false };
    if (guestsNum <= SULEMAN.cap) return { list: [{ name: SULEMAN.name, cap: SULEMAN.cap }], overflow: false };
    return { list: [], overflow: true };
  }, [venues, guestsNum]);

  // The single compute — returns everything the display AND the dispatch need.
  const r = useMemo(() => {
    // Defaults / no-estimate.
    const base = {
      ready: false,
      eyebrow: "Your indicative rate",
      contextLine: "",
      rateNumber: null as number | null,
      rateUnit: "pp",
      vat: false,
      supporting: "",
      inclusion: "",
      capacityWarning: "",
      showVenues: false,
      ratePerPerson: "",
      estimatedSubtotal: "",
      estimatedValue: null as number | null,
      recommendedVenue: "",
      organisationType: "",
      weddingVenue: "",
      roomType: "",
      numberOfRooms: "",
      numberOfNights: "",
      breakfastRequired: "",
      spaPackage: "",
      spaBookingBasis: "",
      spaQuantity: "",
    };

    if (mode === "conference") {
      const rate = organisationType ? ORG_RATES[organisationType] : null;
      const ready = rate != null && !!guestsNum;
      const value = ready ? rate! * guestsNum! : null;
      return {
        ...base,
        ready,
        eyebrow: "Your indicative event rate",
        contextLine: guestsNum ? `${guestsNum.toLocaleString("en-US")} guests / delegates` : "",
        rateNumber: rate,
        rateUnit: "pp",
        vat: true,
        supporting:
          "An indicative per-person rate based on Velmoré's current package. Final pricing may vary depending on your requirements, venue, accommodation, date and additional services.",
        showVenues: true,
        ratePerPerson: rate != null ? `R${rate} pp excl. VAT` : "",
        estimatedSubtotal: value != null ? `${zar(value)} excl. VAT` : "",
        estimatedValue: value,
        recommendedVenue: venueFit.list.map((v) => v.name).join(", "),
        organisationType,
      };
    }

    if (mode === "private") {
      const ready = !!guestsNum;
      const value = ready ? PRIVATE_RATE * guestsNum! : null;
      return {
        ...base,
        ready,
        eyebrow: "Indicative package rate",
        contextLine: guestsNum ? `${guestsNum.toLocaleString("en-US")} guests` : "",
        rateNumber: PRIVATE_RATE,
        rateUnit: "pp",
        vat: true,
        supporting:
          "Based on Velmoré's current second-tier private-event package. Alternative packages and add-ons are available — final pricing will depend on your event requirements.",
        showVenues: true,
        ratePerPerson: `R${PRIVATE_RATE} pp excl. VAT`,
        estimatedSubtotal: value != null ? `${zar(value)} excl. VAT` : "",
        estimatedValue: value,
        recommendedVenue: venueFit.list.map((v) => v.name).join(", "),
      };
    }

    if (mode === "wedding") {
      const v = WEDDING_VENUES.find((w) => w.name === weddingVenue) || null;
      const ready = v != null && !!guestsNum;
      const value = ready ? v!.rate * guestsNum! : null;
      const tooSmall = v && v.capacity != null && guestsNum != null && guestsNum > v.capacity;
      return {
        ...base,
        ready,
        eyebrow: "Your indicative wedding rate",
        contextLine: guestsNum ? `${guestsNum.toLocaleString("en-US")} guests` : "",
        rateNumber: v ? v.rate : null,
        rateUnit: "pp",
        vat: false, // wedding VAT treatment not confirmed → no label
        supporting: "An indicative per-person rate for your chosen venue. Final pricing is confirmed by the Velmoré team.",
        inclusion: WEDDING_INCLUSION,
        capacityWarning: tooSmall
          ? `${v!.name} currently seats up to ${v!.capacity!.toLocaleString("en-US")} — above your guest count. Choose another venue, or continue and the team will advise on a tailored option.`
          : "",
        ratePerPerson: v ? `R${v.rate} pp` : "",
        estimatedSubtotal: value != null ? zar(value) : "",
        estimatedValue: value,
        recommendedVenue: v ? v.name : "",
        weddingVenue: v ? v.name : "",
      };
    }

    if (mode === "accommodation") {
      const rt = ROOM_TYPES.find((t) => t.name === roomType) || null;
      const included = !!rt?.breakfastIncluded;
      const ready = rt != null && !!roomsNum && !!nightsNum;
      const roomTotal = ready ? rt!.rate * roomsNum! * nightsNum! : null;
      const bfast = ready && !included && breakfast === "Yes" ? BREAKFAST_RATE * roomsNum! * nightsNum! : 0;
      const value = ready ? roomTotal! + bfast : null;
      return {
        ...base,
        ready,
        eyebrow: "Your indicative room rate",
        contextLine: roomsNum && nightsNum ? `${roomsNum} room${roomsNum > 1 ? "s" : ""} · ${nightsNum} night${nightsNum > 1 ? "s" : ""}` : "",
        rateNumber: rt ? rt.rate : null,
        rateUnit: "per room / night",
        vat: false,
        supporting: included ? "Breakfast included." : "Breakfast available at R200 per room per day.",
        ratePerPerson: rt ? `${zar(rt.rate)} per room / night` : "",
        estimatedSubtotal: value != null ? zar(value) : "",
        estimatedValue: value,
        roomType: rt ? rt.name : "",
        numberOfRooms: roomsNum ? String(roomsNum) : "",
        numberOfNights: nightsNum ? String(nightsNum) : "",
        breakfastRequired: rt ? (included ? "Included" : breakfast) : "",
      };
    }

    if (mode === "spa") {
      const pkg = SPA_PACKAGES.find((s) => s.name === spaPackage) || null;
      const hasBoth = !!pkg && pkg.couple != null && pkg.perPerson != null;
      const basis = pkg ? (hasBoth ? spaBasis : pkg.couple != null ? "Couple" : pkg.perPerson != null ? "Per Person" : "Package") : "";
      const unit =
        basis === "Couple" ? pkg?.couple ?? null : basis === "Per Person" ? pkg?.perPerson ?? null : basis === "Package" ? pkg?.flat ?? null : null;
      const ready = pkg != null && (hasBoth ? !!basis : true) && unit != null && !!qtyNum;
      const value = ready ? unit! * qtyNum! : null;
      const unitLabel = basis === "Couple" ? "per couple" : basis === "Per Person" ? "pp" : "per package";
      return {
        ...base,
        ready,
        eyebrow: "Your indicative spa rate",
        contextLine: pkg ? `${pkg.name}${hasBoth && basis ? ` · ${basis}` : ""}` : "",
        rateNumber: unit,
        rateUnit: unitLabel,
        vat: false,
        supporting: "A confirmed Allura Day Spa package. Your booking is finalised with the spa team.",
        ratePerPerson: unit != null ? `${zar(unit)} ${unitLabel}` : "",
        estimatedSubtotal: value != null ? zar(value) : "",
        estimatedValue: value,
        spaPackage: pkg ? pkg.name : "",
        spaBookingBasis: basis,
        spaQuantity: qtyNum ? String(qtyNum) : "",
      };
    }

    // other / not chosen — no fabricated price.
    return base;
  }, [mode, organisationType, guestsNum, weddingVenue, roomType, roomsNum, nightsNum, breakfast, spaPackage, spaBasis, qtyNum, venueFit]);

  const canContinue = mode === "other" ? true : r.ready;

  function onContinue() {
    if (typeof window === "undefined" || !canContinue) return;
    window.dispatchEvent(
      new CustomEvent("velmore:estimate", {
        detail: {
          eventType,
          eventDate: date,
          estimatedGuests: mode === "conference" || mode === "wedding" || mode === "private" ? (guestsNum ? String(guestsNum) : "") : "",
          organisationType: r.organisationType,
          ratePerPerson: r.ratePerPerson,
          estimatedSubtotal: r.estimatedSubtotal,
          // Raw numeric estimate — real number for GHL Opportunity Value (null when
          // there is no safely-calculable total, e.g. Other).
          estimatedValue: r.estimatedValue,
          recommendedVenue: r.recommendedVenue,
          weddingVenue: r.weddingVenue,
          roomType: r.roomType,
          numberOfRooms: r.numberOfRooms,
          numberOfNights: r.numberOfNights,
          breakfastRequired: r.breakfastRequired,
          spaPackage: r.spaPackage,
          spaBookingBasis: r.spaBookingBasis,
          spaQuantity: r.spaQuantity,
        },
      }),
    );
  }

  const field =
    "mt-1.5 w-full rounded-md border border-estate-100 bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-stone focus:border-champagne";
  const label = "block text-[12px] font-semibold uppercase tracking-[.12em] text-steel";
  const rt = ROOM_TYPES.find((t) => t.name === roomType);
  const spaPkg = SPA_PACKAGES.find((s) => s.name === spaPackage);
  const spaHasBoth = !!spaPkg && spaPkg.couple != null && spaPkg.perPerson != null;
  const spaQtyLabel = r.spaBookingBasis === "Couple" ? "How many couples?" : r.spaBookingBasis === "Package" ? "How many packages?" : "How many people?";

  return (
    <section id="estimate" className="scroll-mt-24 bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <Reveal className="mx-auto max-w-[46rem] text-center">
          {eyebrow ? (
            <p className="flex items-center justify-center gap-3 text-[11.5px] font-semibold uppercase tracking-[.28em] text-champagne-dark">
              <span aria-hidden className="h-px w-[26px] bg-champagne" />
              {eyebrow}
              <span aria-hidden className="h-px w-[26px] bg-champagne" />
            </p>
          ) : null}
          <h2 className="mx-auto mt-5 max-w-[20ch] font-serif text-[27px] font-semibold leading-[1.14] tracking-[-.01em] text-estate-700 md:text-[36px]">
            {heading}
          </h2>
          {intro ? <p className="mx-auto mt-5 max-w-[54ch] text-[15.5px] leading-[1.75] text-charcoal md:text-[16px]">{intro}</p> : null}
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-[62rem] md:mt-12">
          <div className="grid grid-cols-1 gap-x-14 gap-y-8 rounded-lg bg-white p-6 shadow-card md:grid-cols-2 md:p-9">
            {/* inputs */}
            <div>
              <div>
                <label htmlFor="est-eventType" className={label}>What are you planning?</label>
                <select id="est-eventType" value={eventType} onChange={(e) => setEventType(e.target.value)} className={field}>
                  <option value="">Choose…</option>
                  {CANONICAL_EVENT_TYPES.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              {mode === "conference" ? (
                <div className="mt-5">
                  <label htmlFor="est-org" className={label}>What type of organisation are you booking for?</label>
                  <select id="est-org" value={organisationType} onChange={(e) => setOrganisationType(e.target.value)} className={field}>
                    <option value="">Choose…</option>
                    {ORG_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              ) : null}

              {mode === "wedding" ? (
                <div className="mt-5">
                  <label htmlFor="est-venue" className={label}>Preferred venue</label>
                  <select id="est-venue" value={weddingVenue} onChange={(e) => setWeddingVenue(e.target.value)} className={field}>
                    <option value="">Choose…</option>
                    {WEDDING_VENUES.map((v) => (
                      <option key={v.name} value={v.name}>{v.name}</option>
                    ))}
                  </select>
                </div>
              ) : null}

              {mode === "conference" || mode === "wedding" || mode === "private" ? (
                <div className="mt-5">
                  <label htmlFor="est-guests" className={label}>{mode === "conference" ? "Estimated guests / delegates" : "Estimated guests"}</label>
                  <input id="est-guests" type="number" min={1} step={1} inputMode="numeric" value={guests} onChange={(e) => setGuests(e.target.value)} className={field} placeholder="e.g. 200" />
                  {guests.trim() !== "" && !guestsNum ? <p className="mt-1.5 text-[12.5px] text-champagne-dark">Enter a whole number of guests.</p> : null}
                </div>
              ) : null}

              {mode === "accommodation" ? (
                <>
                  <div className="mt-5">
                    <label htmlFor="est-roomType" className={label}>Room type</label>
                    <select id="est-roomType" value={roomType} onChange={(e) => setRoomType(e.target.value)} className={field}>
                      <option value="">Choose…</option>
                      {ROOM_TYPES.map((t) => (
                        <option key={t.name} value={t.name}>{t.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="est-rooms" className={label}>Rooms</label>
                      <input id="est-rooms" type="number" min={1} step={1} inputMode="numeric" value={rooms} onChange={(e) => setRooms(e.target.value)} className={field} placeholder="e.g. 2" />
                    </div>
                    <div>
                      <label htmlFor="est-nights" className={label}>Nights</label>
                      <input id="est-nights" type="number" min={1} step={1} inputMode="numeric" value={nights} onChange={(e) => setNights(e.target.value)} className={field} placeholder="e.g. 3" />
                    </div>
                  </div>
                  {rt && !rt.breakfastIncluded ? (
                    <div className="mt-5">
                      <label htmlFor="est-breakfast" className={label}>Breakfast required?</label>
                      <select id="est-breakfast" value={breakfast} onChange={(e) => setBreakfast(e.target.value)} className={field}>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </div>
                  ) : null}
                </>
              ) : null}

              {mode === "spa" ? (
                <>
                  <div className="mt-5">
                    <label htmlFor="est-spa" className={label}>Spa package</label>
                    <select id="est-spa" value={spaPackage} onChange={(e) => { setSpaPackage(e.target.value); setSpaBasis(""); }} className={field}>
                      <option value="">Choose…</option>
                      {SPA_PACKAGES.map((s) => (
                        <option key={s.name} value={s.name}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                  {spaHasBoth ? (
                    <div className="mt-5">
                      <label htmlFor="est-spaBasis" className={label}>Booking for</label>
                      <select id="est-spaBasis" value={spaBasis} onChange={(e) => setSpaBasis(e.target.value)} className={field}>
                        <option value="">Choose…</option>
                        <option value="Couple">Couple</option>
                        <option value="Per Person">Per Person</option>
                      </select>
                    </div>
                  ) : null}
                  {spaPkg ? (
                    <div className="mt-5">
                      <label htmlFor="est-spaQty" className={label}>{spaQtyLabel}</label>
                      <input id="est-spaQty" type="number" min={1} step={1} inputMode="numeric" value={spaQty} onChange={(e) => setSpaQty(e.target.value)} className={field} placeholder="e.g. 2" />
                    </div>
                  ) : null}
                </>
              ) : null}

              {mode ? (
                <div className="mt-5">
                  <label htmlFor="est-date" className={label}>
                    {mode === "accommodation" ? "Approximate check-in date" : "Approximate date"} <span className="text-stone">· optional</span>
                  </label>
                  <input id="est-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className={field} />
                </div>
              ) : null}
            </div>

            {/* result */}
            <div className="border-t border-estate-700/10 pt-8 md:border-l md:border-t-0 md:pl-14 md:pt-1">
              <EstimateResult mode={mode} eventType={eventType} r={r} venueFit={venueFit} />

              <button
                type="button"
                onClick={onContinue}
                disabled={!canContinue}
                data-cta="continue_enquiry"
                data-location={ctaLocation}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-champagne px-6 py-[15px] text-[14.5px] font-semibold text-ink shadow-accent transition-[transform,background-color] duration-200 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-px hover:bg-champagne-dark active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transform-none"
              >
                Continue with my enquiry
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
              <p className="mt-3 text-center text-[12px] text-stone">No obligation · the Velmoré team prepares your final pricing.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type ResultView = {
  ready: boolean;
  eyebrow: string;
  contextLine: string;
  rateNumber: number | null;
  rateUnit: string;
  vat: boolean;
  supporting: string;
  inclusion: string;
  capacityWarning: string;
  showVenues: boolean;
};

function EstimateResult({
  mode,
  eventType,
  r,
  venueFit,
}: {
  mode: string;
  eventType: string;
  r: ResultView;
  venueFit: { list: { name: string; cap: number }[]; overflow: boolean };
}) {
  const hint = (text: string) => <p className="text-[15px] leading-[1.7] text-charcoal">{text}</p>;

  if (!eventType) return hint("Tell us a little about your enquiry to see your indicative rate.");
  if (mode === "other")
    return (
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[.22em] text-champagne-dark">Tailored pricing</p>
        <p className="mt-3 text-[15px] leading-[1.7] text-charcoal">
          Velmoré prepares pricing for this enquiry based on your specific requirements. Continue with your enquiry and the team will
          come back to you the same business day.
        </p>
      </div>
    );
  if (!r.ready) return hint("Add the details on the left to see your indicative rate.");

  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[.22em] text-champagne-dark">{r.eyebrow}</p>
      {r.contextLine ? <p className="mt-3 text-[14px] text-steel">{r.contextLine}</p> : null}
      <p className="mt-4 text-[12px] font-semibold uppercase tracking-[.24em] text-stone">From</p>
      <p className="font-serif text-[44px] font-semibold leading-[1.05] tracking-[-.01em] text-estate-700 md:text-[52px]">
        {r.rateNumber != null ? `R${r.rateNumber.toLocaleString("en-US")}` : ""}
        {r.rateUnit === "pp" ? (
          <span className="ml-1.5 align-baseline text-[22px] font-sans font-medium tracking-normal text-steel md:text-[24px]">pp</span>
        ) : null}
      </p>
      {r.rateUnit !== "pp" ? <p className="mt-1 text-[14px] font-medium text-steel">{r.rateUnit}</p> : null}
      {r.vat ? <p className="mt-1.5 text-[13px] font-medium uppercase tracking-[.14em] text-steel">excl. VAT</p> : null}

      {r.inclusion ? <p className="mt-4 text-[13.5px] leading-[1.65] text-estate-700">{r.inclusion}</p> : null}
      <p className="mt-4 text-[13.5px] leading-[1.65] text-charcoal">{r.supporting}</p>

      {r.capacityWarning ? (
        <p className="mt-4 rounded-md bg-champagne/10 px-3.5 py-2.5 text-[13px] leading-[1.6] text-estate-700">{r.capacityWarning}</p>
      ) : null}

      {r.showVenues ? (
        <div className="mt-6 border-t border-estate-700/10 pt-5">
          {venueFit.overflow ? (
            <p className="text-[13.5px] leading-[1.65] text-charcoal">
              Your event may need a tailored venue configuration. Continue with your enquiry and the Velmoré team will advise on the
              best option.
            </p>
          ) : (
            <>
              <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-champagne-dark">Venues that may suit your event</p>
              <ul className="mt-3 space-y-2">
                {venueFit.list.map((v) => (
                  <li key={v.name} className="flex items-baseline gap-3 text-[14px] text-estate-700">
                    <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-champagne" />
                    <span>
                      {v.name} <span className="text-steel">— up to {v.cap.toLocaleString("en-US")}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[12px] text-stone">Based on your estimated guest count — availability is confirmed by the team.</p>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}
