export interface Equipment {
  id: string;
  name: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
}

export const EQUIPMENT: Equipment[] = [
  {
    id: "dump-truck",
    name: "Savivartė 6x6 su fiskar",
    description:
      "Savivartė su vairuotoju medžiagų pristatymui ir atliekų išvežimui. Žemė, žvyras, smėlis, grutas.",
    image: "/images/services/savivarte-6x6-fiskar.jpeg",
    specs: [
      { label: "Keliamoji galia", value: "iki 12 t" },
      { label: "Kėbulo tūris", value: "8 m³" },
      { label: "Tipas", value: "Savivartė" },
      { label: "Vairuotojas", value: "Įskaičiuotas" },
    ],
  },
  {
    id: "bobcat",
    name: "Mini krautuvas (Bobcat)",
    description:
      "Kompaktiškas ir galingas mini krautuvas, idealus teritorijų paruošimui, grunto lyginimui ir medžiagų transportavimui. Paruošia apie 100 m² per darbo dieną.",
    image: "/images/services/loader.jpg",
    specs: [
      { label: "Keliamoji galia", value: "iki 900 kg" },
      { label: "Variklio galia", value: "49 kW" },
      { label: "Kaušo plotis", value: "1.68 m" },
      { label: "Svoris", value: "~2,800 kg" },
    ],
  },
  {
    id: "excavator",
    name: "Ekskavatorius",
    description:
      "Didelis ekskavatorius sunkiems žemės kasimo darbams, pamatų iškasimui ir didelių teritorijų paruošimui.",
    image: "/images/services/excavator.jpg",
    specs: [
      { label: "Kaušo talpa", value: "iki 1.2 m³" },
      { label: "Kasimo gylis", value: "iki 5.5 m" },
      { label: "Variklio galia", value: "85 kW" },
      { label: "Svoris", value: "~14,000 kg" },
    ],
  },
  {
    id: "mini-excavator",
    name: "Mini ekskavatorius",
    description:
      "Mažas ekskavatorius siaurai erdvei — idealus tranšėjoms, komunikacijoms ir mažiems kasimo darbams.",
    image: "/images/services/zemes-kasimas-backhoe.jpg",
    specs: [
      { label: "Kaušo talpa", value: "iki 0.08 m³" },
      { label: "Kasimo gylis", value: "iki 2.5 m" },
      { label: "Plotis", value: "0.99 m" },
      { label: "Svoris", value: "~1,800 kg" },
    ],
  },
];
