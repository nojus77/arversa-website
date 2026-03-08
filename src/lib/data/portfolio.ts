export type PortfolioCategory =
  | "all"
  | "paving"
  | "metalwork"
  | "woodwork"
  | "interior"
  | "excavation"
  | "landscaping";

export interface PortfolioItem {
  id: string;
  src: string;
  alt: string;
  category: Exclude<PortfolioCategory, "all">;
}

export const PORTFOLIO_CATEGORIES: { id: PortfolioCategory; label: string }[] =
  [
    { id: "all", label: "Visi" },
    { id: "paving", label: "Trinkelės" },
    { id: "metalwork", label: "Metalas" },
    { id: "woodwork", label: "Mediena" },
    { id: "interior", label: "Interjeras" },
    { id: "excavation", label: "Žemės darbai" },
    { id: "landscaping", label: "Gerbūvis" },
  ];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Paving
  {
    id: "p1",
    src: "/images/portfolio/paving/paving-001.jpg",
    alt: "Trinkelių klojimas — eliniu raštu privačiame kieme",
    category: "paving",
  },
  {
    id: "p2",
    src: "/images/portfolio/paving/paving-002.jpg",
    alt: "Pėsčiųjų takas su bordiūrais",
    category: "paving",
  },
  {
    id: "p3",
    src: "/images/portfolio/paving/paving-003.jpg",
    alt: "Trinkelių klojimas po pergola",
    category: "paving",
  },
  {
    id: "p4",
    src: "/images/portfolio/paving/paving-004.jpg",
    alt: "Bordiūrų montavimas daugiabučio kieme",
    category: "paving",
  },
  {
    id: "p5",
    src: "/images/portfolio/paving/paving-005.jpg",
    alt: "Šaligatvio statyba gatvėje",
    category: "paving",
  },
  {
    id: "p6",
    src: "/images/portfolio/paving/paving-006.jpg",
    alt: "Šaligatvio trinkelių klojimas",
    category: "paving",
  },
  {
    id: "p7",
    src: "/images/portfolio/paving/paving-007.jpg",
    alt: "Trinkelės prie komercinės degalinės",
    category: "paving",
  },
  {
    id: "p8",
    src: "/images/portfolio/paving/paving-008.jpg",
    alt: "Šaligatvio klojimas su taktilėmis",
    category: "paving",
  },
  {
    id: "p9",
    src: "/images/portfolio/paving/paving-009.jpg",
    alt: "Hexagoninės trinkelės komerciniame objekte",
    category: "paving",
  },
  {
    id: "p10",
    src: "/images/portfolio/paving/paving-010.jpg",
    alt: "Spalvotos trinkelės automobilių aikštelėje",
    category: "paving",
  },
  {
    id: "p11",
    src: "/images/portfolio/paving/paving-011.jpg",
    alt: "Trinkelių takų tinklas su apželdinimu",
    category: "paving",
  },
  {
    id: "p12",
    src: "/images/portfolio/paving/paving-012.jpg",
    alt: "Akmens grindinio ir laiptų montavimas",
    category: "paving",
  },
  {
    id: "p13",
    src: "/images/portfolio/paving/paving-013.jpg",
    alt: "Didelės ploto trinkelės",
    category: "paving",
  },

  // Metalwork
  {
    id: "m1",
    src: "/images/portfolio/metalwork/metalwork-001.jpg",
    alt: "Metaliniai vartai su dekoratyviniais elementais",
    category: "metalwork",
  },
  {
    id: "m2",
    src: "/images/portfolio/metalwork/metalwork-002.jpg",
    alt: "Ornamentinė geležinė tvora",
    category: "metalwork",
  },
  {
    id: "m3",
    src: "/images/portfolio/metalwork/metalwork-003.jpg",
    alt: "Dekoratyvinė tvora kapinėse",
    category: "metalwork",
  },
  {
    id: "m4",
    src: "/images/portfolio/metalwork/metalwork-004.jpg",
    alt: "Kalvio darbo vartai ir tvorelės",
    category: "metalwork",
  },
  {
    id: "m5",
    src: "/images/portfolio/metalwork/metalwork-005.jpg",
    alt: "Stumdomieji vartai su ornamentais",
    category: "metalwork",
  },
  {
    id: "m6",
    src: "/images/portfolio/metalwork/metalwork-006.jpg",
    alt: "Metaliniai vartai su dekoracijomis",
    category: "metalwork",
  },
  {
    id: "m7",
    src: "/images/portfolio/metalwork/metalwork-007.jpg",
    alt: "Metalinė tvora prie parko",
    category: "metalwork",
  },
  {
    id: "m8",
    src: "/images/portfolio/metalwork/metalwork-008.jpg",
    alt: "Vartai su stogeliu kapinėse",
    category: "metalwork",
  },
  {
    id: "m9",
    src: "/images/portfolio/metalwork/metalwork-009.jpg",
    alt: "Stumdomieji vartai prie namo",
    category: "metalwork",
  },
  {
    id: "m10",
    src: "/images/portfolio/metalwork/metalwork-010.jpg",
    alt: "Metalinis pandusas neįgaliesiems",
    category: "metalwork",
  },
  {
    id: "m11",
    src: "/images/portfolio/metalwork/metalwork-011.jpg",
    alt: "Metalinis pandusas prie pastato",
    category: "metalwork",
  },
  {
    id: "m12",
    src: "/images/portfolio/metalwork/metalwork-012.jpg",
    alt: "Metalinė konstrukcija degalinėje",
    category: "metalwork",
  },

  // Woodwork
  {
    id: "w1",
    src: "/images/portfolio/woodwork/woodwork-001.jpg",
    alt: "Medinė pavėsinė su stalu ir suolais",
    category: "woodwork",
  },
  {
    id: "w2",
    src: "/images/portfolio/woodwork/woodwork-002.jpg",
    alt: "Medinis prieplauka prie ežero",
    category: "woodwork",
  },
  {
    id: "w3",
    src: "/images/portfolio/woodwork/woodwork-003.jpg",
    alt: "Medinis prieplauka — T formos",
    category: "woodwork",
  },
  {
    id: "w4",
    src: "/images/portfolio/woodwork/woodwork-004.jpg",
    alt: "Prieplauka statyba prie prieplaukos",
    category: "woodwork",
  },
  {
    id: "w5",
    src: "/images/portfolio/woodwork/woodwork-005.jpg",
    alt: "L formos medinis prieplauka",
    category: "woodwork",
  },
  {
    id: "w6",
    src: "/images/portfolio/woodwork/woodwork-006.jpg",
    alt: "Prieplauka prie ežero — panoraminis vaizdas",
    category: "woodwork",
  },
  {
    id: "w7",
    src: "/images/portfolio/woodwork/woodwork-007.jpg",
    alt: "Medinis informacinis stendas",
    category: "woodwork",
  },
  {
    id: "w8",
    src: "/images/portfolio/woodwork/woodwork-008.jpg",
    alt: "Gofruoto metalo kioskų eilė",
    category: "woodwork",
  },
  {
    id: "w9",
    src: "/images/portfolio/woodwork/woodwork-009.jpg",
    alt: "Pavėsinės karkaso statyba dirbtuvėse",
    category: "woodwork",
  },

  // Interior
  {
    id: "i1",
    src: "/images/portfolio/interior/interior-001.jpg",
    alt: "Laiptinės plytelių klojimas",
    category: "interior",
  },
  {
    id: "i2",
    src: "/images/portfolio/interior/interior-002.jpg",
    alt: "Laiptinės remontas su turėklais",
    category: "interior",
  },
  {
    id: "i3",
    src: "/images/portfolio/interior/interior-003.jpg",
    alt: "Laiptinės plytelės ir nerūdijančio plieno turėklai",
    category: "interior",
  },
  {
    id: "i4",
    src: "/images/portfolio/interior/interior-004.jpg",
    alt: "Vonios kambario plytelių klojimas",
    category: "interior",
  },
  {
    id: "i5",
    src: "/images/portfolio/interior/interior-005.jpg",
    alt: "Dušo kabinos plytelių montavimas",
    category: "interior",
  },

  // Excavation
  {
    id: "e1",
    src: "/images/portfolio/excavation/excavation-001.jpg",
    alt: "Grunto paruošimas ir bordiūrai",
    category: "excavation",
  },
  {
    id: "e2",
    src: "/images/portfolio/excavation/excavation-002.jpg",
    alt: "Sporto aikštyno teritorijos paruošimas",
    category: "excavation",
  },
  {
    id: "e3",
    src: "/images/portfolio/excavation/excavation-003.jpg",
    alt: "Parkavimo aikštelės žemės darbai",
    category: "excavation",
  },
  {
    id: "e4",
    src: "/images/portfolio/excavation/excavation-004.jpg",
    alt: "Takų ir aikštelės paruošimas parke",
    category: "excavation",
  },
  {
    id: "e5",
    src: "/images/portfolio/excavation/excavation-005.jpg",
    alt: "Šlaito sutvirtinimas geocelėmis",
    category: "excavation",
  },
  {
    id: "e6",
    src: "/images/portfolio/excavation/excavation-006.jpg",
    alt: "Teritorijos paruošimas naujai statybai",
    category: "excavation",
  },

  // Landscaping
  {
    id: "l1",
    src: "/images/portfolio/landscaping/landscaping-001.jpg",
    alt: "Pėsčiųjų takas su gėlių lysve",
    category: "landscaping",
  },
  {
    id: "l2",
    src: "/images/portfolio/landscaping/landscaping-002.jpg",
    alt: "Kiemo takas su bordiūrais ir želdiniais",
    category: "landscaping",
  },
  {
    id: "l3",
    src: "/images/portfolio/landscaping/landscaping-003.jpg",
    alt: "Kiemo takas daugiabučio kieme",
    category: "landscaping",
  },
  {
    id: "l4",
    src: "/images/portfolio/landscaping/landscaping-004.jpg",
    alt: "Žvyro takai su apšvietimu ir želdiniais",
    category: "landscaping",
  },
];
