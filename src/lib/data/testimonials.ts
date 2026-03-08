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
  {
    id: "4",
    name: "Andrius V.",
    role: "Privatus namas, Vilnius",
    quote:
      "Greitai ir kokybi\u0161kai i\u0161kas\u0117 pamatus naujai statybai. Ekskavatorius dirbo tiksliai, nereik\u0117jo joki\u0173 pataisym\u0173. Labai patenkinti.",
    rating: 5,
  },
  {
    id: "5",
    name: "Jolanta S.",
    role: "Sod\u0173 bendrija, Trakai",
    quote:
      "U\u017Esakeme \u017Evyro tak\u0173 \u012Frengim\u0105 ir ap\u0161vietim\u0105. Rezultatas pranoko l\u016Bkes\u010Dius \u2014 kaimynai irgi prad\u0117jo klausineti kontakt\u0173.",
    rating: 5,
  },
  {
    id: "6",
    name: "Mindaugas R.",
    role: "Logistikos centras, Kaunas",
    quote:
      "Didel\u0117s aik\u0161tel\u0117s trinkeli\u0173 klojimas \u2014 per 3 savaites viskas buvo padaryta. Profesionali komanda, ai\u0161kus komunikavimas.",
    rating: 5,
  },
  {
    id: "7",
    name: "Egl\u0117 B.",
    role: "Privatus namas, Lentvaris",
    quote:
      "Statybini\u0173 atliek\u0173 i\u0161ve\u017Eimas buvo organizuotas labai greitai. Konteineris atve\u017Etas t\u0105 pa\u010Di\u0105 dien\u0105, viskas \u0161varu.",
    rating: 4,
  },
  {
    id: "8",
    name: "Vytautas G.",
    role: "Daugiabu\u010Dio renovacija, Vilnius",
    quote:
      "Laistin\u0117s remontas atliktas tvarkingai ir be triuk\u0161mo nereikalingomis valandomis. Kaimynai liko patenkinti. A\u010Di\u016B!",
    rating: 5,
  },
];
