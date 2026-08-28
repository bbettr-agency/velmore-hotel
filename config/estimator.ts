/**
 * Shared qualification-calculator engine — the SINGLE source of truth for all
 * calculator pricing. Imported by the one <EventEstimator> component that runs on
 * both /conferences and /contact, so the two pages can never drift.
 *
 * Only client-confirmed rates appear here. VAT is only labelled where the client
 * confirmed it (conference/corporate/government + private events are excl. VAT);
 * wedding, accommodation and spa VAT treatment is NOT confirmed, so no VAT label
 * is shown for those (flagged for the client).
 */

// Canonical event types — must stay byte-identical to the GHL eventType routing.
export const CANONICAL_EVENT_TYPES = [
  "Conference",
  "Corporate event",
  "Government event / function",
  "Wedding",
  "Private function / event",
  "Birthday / celebration",
  "Matric farewell",
  "Awards / gala event",
  "Outdoor event",
  "Accommodation / Stay",
  "Spa",
  "Other",
] as const;

// ---- Conference / corporate / government (excl. VAT, confirmed) ----
export const ORG_OPTIONS = ["Government", "NGO", "SOE", "Corporate", "Other"] as const;
export const ORG_RATES: Record<string, number> = { Government: 550, NGO: 550, SOE: 550, Corporate: 680, Other: 680 };
export const ORG_EVENT_TYPES = ["Conference", "Corporate event", "Government event / function"];

// ---- Private / celebration (excl. VAT, confirmed — second-tier package) ----
export const PRIVATE_RATE = 680;
export const PRIVATE_EVENT_TYPES = [
  "Private function / event",
  "Birthday / celebration",
  "Matric farewell",
  "Awards / gala event",
  "Outdoor event",
];

// ---- Wedding (confirmed pp rates; VAT NOT confirmed → no VAT label) ----
// `capacity` is only set where a matching estate venue has a confirmed capacity
// (used for the too-small warning). De Vouir / Martels Lower have no confirmed
// capacity, so they carry none and are never capacity-blocked.
export const WEDDING_VENUES: readonly { name: string; rate: number; capacity?: number }[] = [
  { name: "SCC", rate: 250, capacity: 1300 }, // Suleman Convention Centre
  { name: "Bastille", rate: 250, capacity: 320 },
  { name: "Trisage", rate: 225, capacity: 200 },
  { name: "De Vouir", rate: 200 },
  { name: "Martels", rate: 200, capacity: 150 },
  { name: "Martels Lower", rate: 200 },
  { name: "Glass Hall", rate: 450, capacity: 500 }, // D'Charmont glass hall
];
export const WEDDING_INCLUSION = "Includes tables, chairs, crockery, cutlery, sound and waiter service";

// ---- Accommodation (room only, per room per night; VAT NOT confirmed) ----
// Breakfast R200 per room per night; Presidential breakfast is included.
export const ROOM_TYPES: readonly { name: string; rate: number; breakfastIncluded?: boolean }[] = [
  { name: "Standard", rate: 1150 },
  { name: "Deluxe", rate: 1350 },
  { name: "Presidential", rate: 3500, breakfastIncluded: true },
];
export const BREAKFAST_RATE = 200;

// ---- Spa — confirmed Allura Day Spa packages (VAT NOT confirmed) ----
// A package may support a couple price, a per-person price, or a flat package
// price. Only ask the basis question when both couple & perPerson exist.
export const SPA_PACKAGES: readonly { name: string; couple?: number; perPerson?: number; flat?: number }[] = [
  { name: "Pamper Me | Half Day", couple: 3300, perPerson: 1800 },
  { name: "Pamper Me | Full Day", couple: 5500, perPerson: 3000 },
  { name: "Twilight Spa", couple: 3500, perPerson: 2000 },
  { name: "Girls Day Out", perPerson: 1000 },
  { name: "Mother & Daughter", couple: 1900 },
  { name: "Bridal Package", flat: 4000 },
];

export const zar = (n: number) => `R${n.toLocaleString("en-US")}`;
