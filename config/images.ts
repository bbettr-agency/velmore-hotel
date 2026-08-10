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
} as const;

export type ImgKey = keyof typeof img;
