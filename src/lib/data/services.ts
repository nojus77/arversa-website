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
    image: "/images/services/loader.jpg",
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
    id: "vaiku-zaidimu-aiksteles",
    title: "Vaikų žaidimų aikštelės",
    description:
      "Vaikų žaidimų aikštelių įrengimas, montavimas ir teritorijos paruošimas. Saugi ir kokybiška aplinka vaikams.",
    image: "/images/services/vaiku-zaidimu-aiksteles.jpg",
    href: "/vaiku-zaidimu-aiksteles",
    icon: "Baby",
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
    image: "/images/services/atlieku-isvezimas.avif",
    href: "/atlieku-isvezimas",
    icon: "Trash2",
  },
  {
    id: "sporto-aiksteles",
    title: "Sporto aikštelės",
    description:
      "Sporto aikštelių įrengimas ir montavimas. Krepšinio, futbolo, tinklinio aikštelės, lauko treniruokliai ir guminės dangos.",
    image: "/images/services/sporto-aiksteles.jpg",
    href: "/sporto-aiksteles",
    icon: "Trophy",
  },
  {
    id: "neigaliuju-infrastruktura",
    title: "Infrastruktūra neįgaliesiems",
    description:
      "Vidaus ir lauko infrastruktūros pritaikymas neįgaliesiems — pandusai, takai, aikštelės ir prieinamumo sprendimai.",
    image: "/images/services/neigaliuju-infra.jpg",
    href: "/neigaliuju-infrastruktura",
    icon: "Accessibility",
  },
  {
    id: "griovimas",
    title: "Griovimo darbai",
    description:
      "Nuo plytelių nuėmimo iki pastatų griovimo. Sienų griovimas, langų ir durų demontavimas.",
    image: "/images/services/griovimas-new.jpg",
    href: "/griovimas",
    icon: "Hammer",
  },
  {
    id: "muras",
    title: "Mūro darbai",
    description:
      "Keraminių plytų, blokelių (Fibo, Haus, Aeroc, Ytong) mūras. Kaminai ir tvoros.",
    image: "/images/services/muras-new.jpg",
    href: "/muras",
    icon: "Brick",
  },
  {
    id: "gerbuvis",
    title: "Gerbūvio darbai",
    description:
      "Trinkelių klojimas, kraštovaizdžio formavimas, apželdinimas, bordiūrų montavimas ir terasos.",
    image: "/images/services/gerbuvis.jpg",
    href: "/gerbuvis",
    icon: "TreePine",
  },
  {
    id: "sniego-valymas",
    title: "Sniego valymas",
    description:
      "Automobilių aikštelių, prekybos centrų, privačių kiemų ir kelių sniego valymas ir išvežimas.",
    image: "/images/services/snow-clean.jpg",
    href: "/sniego-valymas",
    icon: "Snowflake",
  },
];
