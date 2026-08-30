"use client";

import { ROOM_TYPES, SPA_PACKAGES } from "@/config/estimator";

/**
 * Shared conditional-form pieces for the Velmoré calculator → enquiry handoff.
 *
 * The same shared calculator feeds two page forms (contact EnquiryForm and
 * conferences ViewingConversion). After Continue, the form adapts to the chosen
 * eventType: standard events keep the full viewing form, while Accommodation and
 * Spa show a short, already-qualified booking form. These presentational field
 * blocks render the mode-specific, calculator-prefilled fields identically in
 * both forms so the logic isn't duplicated. Field `name`s are the canonical
 * payload keys — visible in their mode, carried hidden otherwise — so each key
 * appears exactly once in the submitted FormData regardless of mode.
 */

export type EnquiryMode = "event" | "accommodation" | "spa";

export function enquiryMode(eventType: string): EnquiryMode {
  if (eventType === "Accommodation / Stay") return "accommodation";
  if (eventType === "Spa") return "spa";
  return "event";
}

// Calculator keys the short forms surface as visible, editable fields.
export const ACCOMMODATION_KEYS = ["roomType", "numberOfRooms", "numberOfNights", "breakfastRequired"] as const;
export const SPA_KEYS = ["spaPackage", "spaBookingBasis", "spaQuantity"] as const;
// Calculator keys that are never visibly editable — always carried hidden so the
// indicative estimate + routing context reach GHL unchanged in every mode.
export const ALWAYS_HIDDEN_CALC_KEYS = [
  "organisationType",
  "ratePerPerson",
  "estimatedSubtotal",
  "recommendedVenue",
  "weddingVenue",
] as const;

// Breakfast mirrors the calculator: "Included" for Presidential, else Yes/No.
const BREAKFAST_OPTS = ["Yes", "No", "Included"];
// Booking basis mirrors the calculator's computed values (Couple / Per Person / Package).
const SPA_BASIS_OPTS = ["Per Person", "Couple", "Package"];

type FieldStyles = { field: string; label: string; idPrefix: string };

export function HiddenCalcInputs({ keys, values }: { keys: readonly string[]; values: Record<string, string> }) {
  return (
    <>
      {keys.map((k) => (
        <input key={k} type="hidden" name={k} value={values[k] || ""} />
      ))}
    </>
  );
}

export function AccommodationFields({
  values,
  onChange,
  styles,
}: {
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
  styles: FieldStyles;
}) {
  const { field, label, idPrefix } = styles;
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor={`${idPrefix}roomType`} className={label}>Room type</label>
        <select id={`${idPrefix}roomType`} name="roomType" value={values.roomType || ""} onChange={(e) => onChange("roomType", e.target.value)} className={field}>
          <option value="">Choose…</option>
          {ROOM_TYPES.map((t) => (
            <option key={t.name} value={t.name}>{t.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={`${idPrefix}breakfastRequired`} className={label}>Breakfast required</label>
        <select id={`${idPrefix}breakfastRequired`} name="breakfastRequired" value={values.breakfastRequired || ""} onChange={(e) => onChange("breakfastRequired", e.target.value)} className={field}>
          <option value="">Choose…</option>
          {BREAKFAST_OPTS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={`${idPrefix}numberOfRooms`} className={label}>Number of rooms</label>
        <input id={`${idPrefix}numberOfRooms`} name="numberOfRooms" type="number" min="1" inputMode="numeric" value={values.numberOfRooms || ""} onChange={(e) => onChange("numberOfRooms", e.target.value)} className={field} placeholder="e.g. 2" />
      </div>
      <div>
        <label htmlFor={`${idPrefix}numberOfNights`} className={label}>Number of nights</label>
        <input id={`${idPrefix}numberOfNights`} name="numberOfNights" type="number" min="1" inputMode="numeric" value={values.numberOfNights || ""} onChange={(e) => onChange("numberOfNights", e.target.value)} className={field} placeholder="e.g. 3" />
      </div>
    </div>
  );
}

export function SpaFields({
  values,
  onChange,
  styles,
}: {
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
  styles: FieldStyles;
}) {
  const { field, label, idPrefix } = styles;
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label htmlFor={`${idPrefix}spaPackage`} className={label}>Spa package</label>
        <select id={`${idPrefix}spaPackage`} name="spaPackage" value={values.spaPackage || ""} onChange={(e) => onChange("spaPackage", e.target.value)} className={field}>
          <option value="">Choose…</option>
          {SPA_PACKAGES.map((s) => (
            <option key={s.name} value={s.name}>{s.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={`${idPrefix}spaBookingBasis`} className={label}>Booking basis</label>
        <select id={`${idPrefix}spaBookingBasis`} name="spaBookingBasis" value={values.spaBookingBasis || ""} onChange={(e) => onChange("spaBookingBasis", e.target.value)} className={field}>
          <option value="">Choose…</option>
          {SPA_BASIS_OPTS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={`${idPrefix}spaQuantity`} className={label}>Quantity</label>
        <input id={`${idPrefix}spaQuantity`} name="spaQuantity" type="number" min="1" inputMode="numeric" value={values.spaQuantity || ""} onChange={(e) => onChange("spaQuantity", e.target.value)} className={field} placeholder="e.g. 2" />
      </div>
    </div>
  );
}
