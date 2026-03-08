export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Tomas K.",
    role: "Privatus namas, Trakai",
    quote:
      "Trinkelių klojimo darbai atlikti profesionaliai ir laiku. Kiemas atrodo puikiai, o kaina buvo labai konkurencinga. Rekomenduoju visiems!",
    rating: 5,
  },
  {
    id: "2",
    name: "Rasa M.",
    role: "Daugiabučio bendrija, Vilnius",
    quote:
      "Arversa atliko kiemo remontą — nuo seno šaligatvio išardymo iki naujų takų ir apšvietimo. Darbininkai tvarkingi, darbai kokybiški.",
    rating: 5,
  },
  {
    id: "3",
    name: "Darius P.",
    role: "Komercinis objektas, Lentvaris",
    quote:
      "Nuomojome mini krautuvą ir savivartę teritorijos paruošimui. Technika atvyko laiku, vairuotojai patyrę. Bendradarbiausime ir ateityje.",
    rating: 5,
  },
];
