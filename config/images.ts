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

  // Room carousels — real supplied room photography (multiple frames per room type)
  presidentialBed: { src: "/images/rooms/velmore-presidential-1-bedroom.jpg", alt: "The Presidential Suite bedroom at Velmoré — a tufted headboard, deep tones and a patterned rug" },
  presidentialLounge: { src: "/images/rooms/velmore-presidential-2-lounge.jpg", alt: "The writing desk and seating corner in the Presidential Suite at Velmoré, in soft curtained light" },
  presidentialBath: { src: "/images/rooms/velmore-presidential-3-bath.jpg", alt: "The Presidential Suite en-suite at Velmoré with a deep tub and a walk-in shower" },
  presidentialBath2: { src: "/images/rooms/velmore-presidential-4-bath.jpg", alt: "The Presidential Suite en-suite at Velmoré with twin vanities" },
  standardBed: { src: "/images/rooms/velmore-standard-1-bedroom.jpg", alt: "A Standard Room at Velmoré with a double bed, headboard and balcony light" },
  standardRoomView: { src: "/images/rooms/velmore-standard-2-room.jpg", alt: "A Standard Room at Velmoré with framed artwork and a made bed in estate tones" },
  standardDetail: { src: "/images/rooms/velmore-standard-3-detail.jpg", alt: "The dressing area and wardrobe in a Standard Room at Velmoré" },
  deluxeBed: { src: "/images/rooms/velmore-deluxe-1-bedroom.jpg", alt: "A Deluxe Room at Velmoré with a padded headboard, work desk and reading chair" },
  deluxeBath: { src: "/images/rooms/velmore-deluxe-2-bath.jpg", alt: "The Deluxe Room en-suite at Velmoré with a tub and vanity" },
  deluxeBath2: { src: "/images/rooms/velmore-deluxe-3-bath.jpg", alt: "The Deluxe Room en-suite at Velmoré with a walk-in shower and vanity" },

  // Spa — real supplied spa photography (Allura Day Spa, on the estate)
  spaRobes: { src: "/images/spa/velmore-spa-robes.jpg", alt: "The spa at Velmoré — a marble corridor lined with fresh robes" },
  spaTreatmentTwin: { src: "/images/spa/velmore-spa-treatment-twin.jpg", alt: "A twin treatment room at the Velmoré spa, two beds beneath a soft green arch" },
  spaTreatmentRoom: { src: "/images/spa/velmore-spa-treatment-room.jpg", alt: "A treatment room at the Velmoré spa with a dressed massage bed and estate-green walls" },
  spaTreatmentDetail: { src: "/images/spa/velmore-spa-treatment-detail.jpg", alt: "A treatment bed set with folded towels and oils at the Velmoré spa" },
  spaReception: { src: "/images/spa/velmore-spa-reception.jpg", alt: "The spa reception at Velmoré, a marble counter beneath a softly lit green wall" },
  spaLounge: { src: "/images/spa/velmore-spa-lounge.jpg", alt: "A relaxation lounge at the Velmoré spa with marble floors and green cabinetry" },
  spaColonnade: { src: "/images/spa/velmore-spa-colonnade.jpg", alt: "A bright marble colonnade at the Velmoré spa" },
  spaEntrance: { src: "/images/spa/velmore-spa-entrance.jpg", alt: "The arched brick entrance to the spa at the Velmoré estate" },
  spaRelaxation: { src: "/images/spa/velmore-spa-relaxation.jpg", alt: "A light-filled relaxation area at the Velmoré spa with garden views" },
  spaExterior: { src: "/images/spa/velmore-spa-exterior.jpg", alt: "The spa building and fountain forecourt at the Velmoré estate" },

  // Estate — real supplied aerial / signage photography
  estateAerial: { src: "/images/estate/velmore-estate-aerial.jpg", alt: "An aerial view of the Velmoré estate — French-Provence architecture, terracotta roofs and manicured gardens" },
  estateAerialGardens: { src: "/images/estate/velmore-estate-aerial-gardens.jpg", alt: "An aerial view of the Velmoré estate gardens, fountain and formal beds" },
  estateSign: { src: "/images/estate/velmore-estate-sign.jpg", alt: "The Velmoré Hotel & Spa monument sign at the estate entrance" },

  // Conference & event venues — real supplied per-venue photography (optimised
  // web copies of the client uploads; originals kept untouched in their folders).
  dcharmont1: { src: "/images/venues/velmore-dcharmont-1-exterior.jpg", alt: "The D'Charmont glass hall at Velmoré seen from the gardens — a steel-and-glass conservatory" },
  dcharmont2: { src: "/images/venues/velmore-dcharmont-2-interior.jpg", alt: "Inside the D'Charmont glass hall at Velmoré — a wide steel-framed glass venue ready to set" },
  dcharmont3: { src: "/images/venues/velmore-dcharmont-3-garden.jpg", alt: "The garden approach to the D'Charmont glass hall at Velmoré, arches along the path" },
  dcharmont4: { src: "/images/venues/velmore-dcharmont-4-glass.jpg", alt: "The glass wall of the D'Charmont hall at Velmoré looking out to the gardens and pool" },
  dcharmont5: { src: "/images/venues/velmore-dcharmont-5-terrace.jpg", alt: "The D'Charmont glass hall at Velmoré with garden seating alongside" },
  dcharmont6: { src: "/images/venues/velmore-dcharmont-6-aerial.jpg", alt: "An aerial view of the D'Charmont glass hall and gardens at Velmoré" },
  bastille1: { src: "/images/venues/velmore-bastille-1-hall.jpg", alt: "The Bastille hall at Velmoré — a chandeliered banquet hall" },
  bastille2: { src: "/images/venues/velmore-bastille-2-set.jpg", alt: "The Bastille hall at Velmoré set with banquet tables and gold chairs" },
  bastille3: { src: "/images/venues/velmore-bastille-3-hall.jpg", alt: "The Bastille hall at Velmoré, chandeliers and space for a large celebration" },
  trisage1: { src: "/images/venues/velmore-trisage-1-exterior.jpg", alt: "The brick entrance archway to the Trisage hall at Velmoré" },
  trisage2: { src: "/images/venues/velmore-trisage-2-interior.jpg", alt: "The Trisage hall at Velmoré set for a banquet with round tables and chandeliers" },
  trisage3: { src: "/images/venues/velmore-trisage-3-interior.jpg", alt: "The Trisage hall at Velmoré dressed for a celebration" },
  martels1: { src: "/images/venues/velmore-martels-1-exterior.jpg", alt: "The Martels venue at Velmoré with its fountain and gardens" },
  martels2: { src: "/images/venues/velmore-martels-2-entrance.jpg", alt: "The brick entrance portico of Martels at Velmoré" },
  vieuxCheval: { src: "/images/venues/velmore-vieux-cheval.jpg", alt: "The Vieux Cheval at Velmoré seen across the estate lawns" },
  voltaireSatre: { src: "/images/venues/velmore-voltaire-satre.jpg", alt: "The Voltaire & Satre boardroom at Velmoré — an executive meeting table" },
} as const;

export type ImgKey = keyof typeof img;
