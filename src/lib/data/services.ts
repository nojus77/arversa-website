export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string | null;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    id: "technikos-nuoma",
    title: "Technikos nuoma",
    description:
      "Mini krautuvai (BOBCAT), ekskavatoriai, mini ekskavatoriai ir savivartės iki 12 tonų su vairuotojais.",
    image: "/images/services/technikos-nuoma.jpg",
    href: "/technikos-nuoma",
    icon: "Truck",
  },
  {
    id: "zemes-kasimas",
    title: "Žemės kasimo darbai",
    description:
      "Žemės kasimas, lyginimas, pamatų kastuvai, tranšėjos ir teritorijų paruošimas statyboms.",
    image: "/images/services/zemes-kasimas-backhoe.jpg",
    href: "/zemes-kasimo-darbai",
    icon: "Mountain",
  },
  {
    id: "trinkeliu-klojimas",
    title: "Trinkelių klojimas",
    description:
      "Trinkelių ir plytelių klojimas privatiems ir komerciniams objektams visoje Lietuvoje.",
    image: "/images/services/trinkeliu-klojimas.jpg",
    href: "/trinkeliu-klojimas",
    icon: "LayoutGrid",
  },
  {
    id: "atlieku-isvezimas",
    title: "Atliekų išvežimas",
    description:
      "Statybinių atliekų, šiukšlių ir grunto išvežimas. Konteinerių nuoma ir transportavimas.",
    image: "/images/services/atlieku-isvezimas.jpg",
    href: "/atlieku-isvezimas",
    icon: "Trash2",
  },
  {
    id: "griovimas",
    title: "Griovimo darbai",
    description:
      "Nuo plytelių nuėmimo iki pastatų griovimo. Sienų griovimas, langų ir durų demontavimas.",
    image: "/images/services/griovimas.jpg",
    href: null,
    icon: "Hammer",
  },
  {
    id: "muras",
    title: "Mūro darbai",
    description:
      "Keraminių plytų, blokelių (Fibo, Haus, Aeroc, Ytong) mūras. Kaminai ir tvoros.",
    image: "/images/services/muras.jpg",
    href: null,
    icon: "Brick",
  },
  {
    id: "gerbuvis",
    title: "Gerbūvio darbai",
    description:
      "Trinkelių klojimas, kraštovaizdžio formavimas, apželdinimas, bordiūrų montavimas ir terasos.",
    image: "/images/services/gerbuvis.jpg",
    href: null,
    icon: "TreePine",
  },
  {
    id: "sniego-valymas",
    title: "Sniego valymas",
    description:
      "Automobilių aikštelių, prekybos centrų, privačių kiemų ir kelių sniego valymas ir išvežimas.",
    image: "/images/services/snow-clean.jpg",
    href: null,
    icon: "Snowflake",
  },
];
