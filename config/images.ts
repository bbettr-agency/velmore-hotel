/**
 * Velmoré — real photography registry (config-driven image paths + alt text).
 * Only REAL supplied Velmoré images live here. Sections that still lack a
 * suitable real photo keep a clearly-labelled CSS placeholder (see each page's
 * `note`). Alt text describes the evidence in the frame (SEO + a11y). Served via
 * next/image (responsive sizes + AVIF/WebP + lazy). See docs/17 + docs/18.
 */
export type Img = { src: string; alt: string };

export const img = {
  // Estate exterior / architecture
  estateFacade: { src: "/images/estate/velmore-estate-facade.jpg", alt: "The Velmoré estate façade at Velmore Hotel & Spa — French-Provence brick, palms and a circular drive" },
  estateFacadeDrive: { src: "/images/estate/velmore-estate-facade-drive.jpg", alt: "The Velmoré estate frontage and gardens, between Pretoria and Centurion" },
  estateEntranceFountain: { src: "/images/estate/velmore-estate-entrance-fountain.jpg", alt: "The columned entrance and stone fountain at the Velmoré estate" },
  estateArchway: { src: "/images/estate/velmore-estate-archway.jpg", alt: "The grand French-Provence brick archway on the Velmoré estate" },
  estateGabledEntrance: { src: "/images/estate/velmore-estate-gabled-entrance.jpg", alt: "The gabled brick entrance portico at the Velmoré estate" },
  estateFacadeTower: { src: "/images/estate/velmore-estate-facade-tower.jpg", alt: "The Velmoré estate façade with its landmark octagonal tower" },
  monogram: { src: "/images/about/velmore-monogram.jpg", alt: "The Velmoré 'V' monogram on the estate's brick tower" },
  colonnade: { src: "/images/about/velmore-colonnade.jpg", alt: "A stone colonnade walkway with balustrades at the Velmoré estate" },

  // Gardens
  gardensStreamArchway: { src: "/images/gardens/velmore-gardens-stream-archway.jpg", alt: "The Velmoré estate gardens with a brick archway reflected in the stream" },
  gardensArchway: { src: "/images/gardens/velmore-gardens-archway.jpg", alt: "The freestanding brick archway framing the Velmoré estate gardens" },
  gardensPergola: { src: "/images/gardens/velmore-gardens-pergola.jpg", alt: "A garden pergola and stone urns in the Velmoré estate grounds" },
  gardensPlanting: { src: "/images/gardens/velmore-gardens-planting.jpg", alt: "Lush planting in the Velmoré estate gardens" },

  // Weddings / functions (reception hall + details)
  receptionTable: { src: "/images/weddings/velmore-reception-table.jpg", alt: "A wedding reception table set with candelabra and gold chairs at Velmoré" },
  receptionRoundTable: { src: "/images/weddings/velmore-reception-round-table.jpg", alt: "A round reception table set with fine china and candelabra at Velmoré" },
  receptionHall: { src: "/images/weddings/velmore-reception-hall.jpg", alt: "A reception hall set for a celebration at the Velmoré estate" },
  functionHall: { src: "/images/events/velmore-function-hall.jpg", alt: "A hall set with round tables and columns for a function at Velmoré" },
  functionCentrepieces: { src: "/images/events/velmore-function-centrepieces.jpg", alt: "Table centrepieces and urns set for a celebration at Velmoré" },
  placeSetting: { src: "/images/details/velmore-place-setting.jpg", alt: "A place setting with charger plate and gold cutlery at Velmoré" },

  // Dining / food (no alcohol)
  setTable: { src: "/images/dining/velmore-set-table.jpg", alt: "A dining table set on the estate at Velmoré" },
  grazingTable: { src: "/images/food/velmore-grazing-table.jpg", alt: "A grazing table of canapés and platters from the Velmoré certified-halal kitchen" },
  canapes: { src: "/images/food/velmore-canapes.jpg", alt: "Canapés plated by the Velmoré certified-halal kitchen" },
  fruitPlatter: { src: "/images/food/velmore-fruit-platter.jpg", alt: "A fresh fruit platter at a Velmoré function" },
  buffetSpread: { src: "/images/food/velmore-buffet-spread.jpg", alt: "A buffet spread catered by the Velmoré certified-halal kitchen" },
  diningGathering: { src: "/images/dining/velmore-dining-gathering.jpg", alt: "Guests gathered over food at a Velmoré function" },

  // Contact / arrival
  entranceSign: { src: "/images/contact/velmore-entrance-sign.jpg", alt: "The Velmore Hotel & Spa entrance gate and signage" },
  welcomeGolden: { src: "/images/contact/velmore-welcome-golden-hour.jpg", alt: "The Velmore Estate welcome sign at golden hour" },
  arrivalGate: { src: "/images/contact/velmore-arrival-gate.jpg", alt: "The arrival gate at the Velmore Hotel & Spa estate" },

  // --- second photography drop (real venue + room photography) ---
  // Weddings / functions
  dcharmantHall: { src: "/images/weddings/velmore-dcharmant-hall.jpg", alt: "The D'Charmant Glass Hall at Velmoré set for a wedding, chandeliers and a floral ceremony arch" },
  weddingGlassHall: { src: "/images/weddings/velmore-wedding-glass-hall.jpg", alt: "A wedding reception down the aisle of the glass hall at Velmoré, chandeliers above and tables either side" },
  ceremonyArch: { src: "/images/weddings/velmore-ceremony-arch.jpg", alt: "The freestanding stone ceremony archway in the Velmoré estate gardens" },
  receptionLounge: { src: "/images/weddings/velmore-reception-lounge.jpg", alt: "A reception lounge setting in the glass hall at Velmoré with a floral backdrop" },
  // Conferences
  conferenceHallSet: { src: "/images/conferences/velmore-conference-hall-set.jpg", alt: "The glass hall at Velmoré set with round tables for a residential event" },
  conferenceSeated: { src: "/images/conferences/velmore-conference-seated.jpg", alt: "A conference seated in rows facing the stage in the hall at Velmoré, chandelier above" },
  banquetScale: { src: "/images/conferences/velmore-banquet-scale.jpg", alt: "Long banquet tables set at scale in the glass hall at Velmoré" },
  // Events
  functionSet: { src: "/images/events/velmore-function-set.jpg", alt: "The glass hall at Velmoré set for a celebration with warm uplighting" },
  celebrationCatering: { src: "/images/events/velmore-celebration-catering.jpg", alt: "A catering table of canapés and pastries at a Velmoré celebration" },
  // Dining
  diningRoom: { src: "/images/dining/velmore-dining-room.jpg", alt: "The dining room at Velmoré, tables set beside the glass frontage" },
  // Estate / arrival
  entranceSignage: { src: "/images/estate/velmore-entrance-signage.jpg", alt: "The Velmore Hotel & Spa brick entrance gate and signage" },
  estateThroughTrees: { src: "/images/estate/velmore-estate-through-trees.jpg", alt: "The arched brick facade of the Velmoré estate framed by trees and lawn" },
  arrivalForecourt: { src: "/images/estate/velmore-arrival-forecourt.jpg", alt: "The entrance and fountain forecourt at the Velmoré estate" },
  estateForecourt: { src: "/images/contact/velmore-estate-forecourt.jpg", alt: "The Velmoré estate facade and palm-lined forecourt on arrival" },
  // Rooms
  presidentialSuite: { src: "/images/rooms/velmore-presidential-suite.jpg", alt: "The Presidential Suite at Velmoré — a tufted headboard, deep colours and rich detail" },
  presidentialSuiteDetail: { src: "/images/rooms/velmore-presidential-suite-detail.jpg", alt: "A breakfast tray beside the bed in the Presidential Suite at Velmoré" },
  deluxeRoom: { src: "/images/rooms/velmore-deluxe-room.jpg", alt: "A Deluxe Room at Velmoré with a private balcony and estate views" },
  deluxeRoomView: { src: "/images/rooms/velmore-deluxe-room-view.jpg", alt: "A Deluxe Room at Velmoré with a desk and a balcony overlooking the gardens" },
  standardRoom: { src: "/images/rooms/velmore-standard-room.jpg", alt: "A Standard Room at Velmoré, warm and restful with a work desk" },
  twinRoom: { src: "/images/rooms/velmore-twin-room.jpg", alt: "A Twin Room at Velmoré with two beds and estate-toned styling" },
} as const;

export type ImgKey = keyof typeof img;
