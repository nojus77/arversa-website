export const COMPANY = {
  name: "UAB Arversa",
  shortName: "Arversa",
  phone: "+370 685 55 560",
  email: "audrius.technuoma@gmail.com",
  location: "Lentvaris, Lietuva",
  serviceArea: "Visa Lietuva",
  experience: "18+",
  workingHours: "I-V 8:00–19:00",
  founded: 2008,
  mapQuery: "Lentvaris,+Lithuania",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36584.95!2d25.04!3d54.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46df55555c5c5c5d%3A0x4c4c4c4c4c4c4c4c!2sLentvaris!5e0!3m2!1slt!2slt!4v1",
} as const;

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Pagrindinis", href: "/" },
  {
    label: "Paslaugos",
    href: "/#paslaugos",
    children: [
      { label: "Vaikų žaidimų aikštelės", href: "/vaiku-zaidimu-aiksteles" },
      { label: "Sporto aikštelės", href: "/sporto-aiksteles" },
      { label: "Technikos nuoma", href: "/technikos-nuoma" },
      { label: "Žemės kasimas", href: "/zemes-kasimo-darbai" },
      { label: "Trinkelių klojimas", href: "/trinkeliu-klojimas" },
      { label: "Atliekų išvežimas", href: "/atlieku-isvezimas" },
      { label: "Infrastruktūra neįgaliesiems", href: "/neigaliuju-infrastruktura" },
      { label: "Gerbūvio darbai", href: "/gerbuvis" },
      { label: "Griovimo darbai", href: "/griovimas" },
      { label: "Mūro darbai", href: "/muras" },
      { label: "Sniego valymas", href: "/sniego-valymas" },
    ],
  },
  { label: "Atlikti darbai", href: "/atlikti-darbai" },
  { label: "Kontaktai", href: "/kontaktai" },
];
