import { img } from "@/config/images";
import type { Img } from "@/config/images";

/**
 * Authoritative Gallery registry — the single source of truth for the Gallery
 * page. Each item references the shared image registry (no duplicated src/alt),
 * tags a category (+ optional venue), and carries the real intrinsic pixel size
 * so the masonry can lay out on natural aspect ratios with zero layout shift.
 * Curated, not dumped: near-duplicates, weak frames, dry-field/construction and
 * any bar/alcohol imagery are deliberately excluded.
 */
export type GalleryCategory =
  | "estate" | "conferences" | "weddings" | "accommodation"
  | "spa" | "dining" | "events" | "gardens";

export type GalleryItem = { image: Img; category: GalleryCategory; caption: string; venue?: string; w: number; h: number };

export const GALLERY_CATEGORIES: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "estate", label: "Estate" },
  { id: "conferences", label: "Conferences" },
  { id: "weddings", label: "Weddings" },
  { id: "accommodation", label: "Accommodation" },
  { id: "spa", label: "Spa" },
  { id: "dining", label: "Dining & Food" },
  { id: "events", label: "Events" },
  { id: "gardens", label: "Gardens & Details" },
];

export const gallery: readonly GalleryItem[] = [
  { image: img.estateFacade, category: "estate", caption: "The estate façade", w: 1822, h: 2560 },
  { image: img.estateFacadeTower, category: "estate", caption: "The landmark tower", w: 2560, h: 1705 },
  { image: img.estateThroughTrees, category: "estate", caption: "Through the trees", w: 2560, h: 1705 },
  { image: img.arrivalForecourt, category: "estate", caption: "Arrival", w: 2560, h: 1805 },
  { image: img.estateArchway, category: "estate", caption: "The brick archway", w: 2560, h: 1705 },
  { image: img.estateAerial, category: "estate", caption: "From above", w: 2000, h: 1126 },
  { image: img.estateAerialGardens, category: "estate", caption: "Gardens from above", w: 2000, h: 1126 },
  { image: img.grandLobby, category: "estate", caption: "The grand lobby", w: 2000, h: 1500 },
  { image: img.grandAerial, category: "estate", caption: "The estate grounds", w: 2000, h: 1126 },
  { image: img.welcomeGolden, category: "estate", caption: "Welcome, at golden hour", w: 1705, h: 2560 },
  { image: img.conferenceHallSet, category: "conferences", caption: "Set for a residential event", w: 720, h: 1280 },
  { image: img.conferenceSeated, category: "conferences", caption: "Plenary seating", w: 2560, h: 2560 },
  { image: img.banquetScale, category: "conferences", caption: "Banquet scale", w: 720, h: 1280 },
  { image: img.dcharmont1, category: "conferences", caption: "From the gardens", venue: "D'Charmont", w: 2000, h: 1500 },
  { image: img.dcharmont2, category: "conferences", caption: "Inside the glass hall", venue: "D'Charmont", w: 2000, h: 1500 },
  { image: img.dcharmont4, category: "conferences", caption: "Glass to the gardens", venue: "D'Charmont", w: 2000, h: 1500 },
  { image: img.dcharmont3, category: "conferences", caption: "The garden approach", venue: "D'Charmont", w: 2000, h: 1500 },
  { image: img.dcharmont6, category: "conferences", caption: "From above", venue: "D'Charmont", w: 2000, h: 1126 },
  { image: img.bastille1, category: "conferences", caption: "The hall", venue: "Bastille", w: 2000, h: 1500 },
  { image: img.bastille2, category: "conferences", caption: "Set for a banquet", venue: "Bastille", w: 2000, h: 2000 },
  { image: img.trisage1, category: "conferences", caption: "The entrance", venue: "Trisage", w: 2000, h: 1500 },
  { image: img.trisage2, category: "conferences", caption: "Set for a banquet", venue: "Trisage", w: 2000, h: 1500 },
  { image: img.trisage3, category: "conferences", caption: "Dressed for a celebration", venue: "Trisage", w: 2000, h: 1500 },
  { image: img.martels1, category: "conferences", caption: "Fountain & gardens", venue: "Martels", w: 2000, h: 1500 },
  { image: img.martels2, category: "conferences", caption: "The entrance", venue: "Martels", w: 2000, h: 1500 },
  { image: img.vieuxCheval, category: "conferences", caption: "Across the lawns", venue: "The Vieux Cheval", w: 2000, h: 1500 },
  { image: img.voltaireSatre, category: "conferences", caption: "The boardroom", venue: "Voltaire & Satre", w: 1536, h: 1024 },
  { image: img.dcharmantHall, category: "weddings", caption: "The glass hall, set for a wedding", w: 720, h: 1280 },
  { image: img.weddingGlassHall, category: "weddings", caption: "Down the aisle", w: 1024, h: 1024 },
  { image: img.ceremonyArch, category: "weddings", caption: "The ceremony arch", w: 2560, h: 1705 },
  { image: img.receptionLounge, category: "weddings", caption: "Reception lounge", w: 720, h: 1280 },
  { image: img.receptionTable, category: "weddings", caption: "Reception table", w: 2560, h: 1705 },
  { image: img.receptionRoundTable, category: "weddings", caption: "A reception setting", w: 2560, h: 1705 },
  { image: img.presidentialBed, category: "accommodation", caption: "Presidential Suite", w: 2000, h: 1500 },
  { image: img.presidentialLounge, category: "accommodation", caption: "Presidential Suite — the sitting corner", w: 2000, h: 1500 },
  { image: img.presidentialBath, category: "accommodation", caption: "Presidential Suite — the en-suite", w: 2000, h: 1500 },
  { image: img.deluxeBed, category: "accommodation", caption: "Deluxe Room", w: 2000, h: 1500 },
  { image: img.deluxeRoomView, category: "accommodation", caption: "Deluxe Room — the view", w: 2560, h: 2560 },
  { image: img.standardBed, category: "accommodation", caption: "Standard Room", w: 2000, h: 1500 },
  { image: img.standardRoomView, category: "accommodation", caption: "Standard Room", w: 2000, h: 1500 },
  { image: img.twinRoom, category: "accommodation", caption: "Twin Room", w: 2560, h: 2560 },
  { image: img.spaRobes, category: "spa", caption: "The robes", w: 2000, h: 1500 },
  { image: img.spaTreatmentTwin, category: "spa", caption: "Twin treatment room", w: 2000, h: 1500 },
  { image: img.spaTreatmentRoom, category: "spa", caption: "Treatment room", w: 2000, h: 1500 },
  { image: img.spaTreatmentDetail, category: "spa", caption: "Treatment detail", w: 2000, h: 1500 },
  { image: img.spaReception, category: "spa", caption: "Spa reception", w: 2000, h: 1500 },
  { image: img.spaLounge, category: "spa", caption: "Relaxation lounge", w: 2000, h: 1500 },
  { image: img.spaColonnade, category: "spa", caption: "The colonnade", w: 2000, h: 1500 },
  { image: img.spaRelaxation, category: "spa", caption: "A slower morning", w: 2000, h: 1500 },
  { image: img.diningRoom, category: "dining", caption: "The dining room", w: 720, h: 1280 },
  { image: img.grazingTable, category: "dining", caption: "Grazing table", w: 1706, h: 2560 },
  { image: img.canapes, category: "dining", caption: "Canapés", w: 1706, h: 2560 },
  { image: img.fruitPlatter, category: "dining", caption: "Fresh platters", w: 1706, h: 2560 },
  { image: img.buffetSpread, category: "dining", caption: "Buffet spread", w: 1706, h: 2560 },
  { image: img.diningGathering, category: "dining", caption: "The gathering", w: 2560, h: 1706 },
  { image: img.setTable, category: "dining", caption: "A table, set", w: 2560, h: 1763 },
  { image: img.placeSetting, category: "dining", caption: "Place setting", w: 1705, h: 2560 },
  { image: img.functionHall, category: "events", caption: "A function, set", w: 2560, h: 1786 },
  { image: img.functionCentrepieces, category: "events", caption: "Centrepieces", w: 2560, h: 1796 },
  { image: img.functionSet, category: "events", caption: "Set for a celebration", w: 720, h: 1280 },
  { image: img.celebrationCatering, category: "events", caption: "Celebration catering", w: 720, h: 1280 },
  { image: img.gardensStreamArchway, category: "gardens", caption: "The stream archway", w: 1705, h: 2560 },
  { image: img.gardensArchway, category: "gardens", caption: "The garden archway", w: 1705, h: 2560 },
  { image: img.gardensPergola, category: "gardens", caption: "The pergola", w: 2560, h: 1705 },
  { image: img.gardensPlanting, category: "gardens", caption: "Estate planting", w: 1705, h: 2560 },
  { image: img.monogram, category: "gardens", caption: "The Velmoré monogram", w: 2246, h: 2560 },
  { image: img.estateEntranceFountain, category: "gardens", caption: "The fountain", w: 2560, h: 1705 },
];
