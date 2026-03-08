"use client";

import { Footprints, Car, Home, Building2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

interface PavingType {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PAVING_TYPES: PavingType[] = [
  {
    icon: Footprints,
    title: "Pėsčiųjų takai",
    description:
      "Dekoratyvūs ir funkcionalūs pėsčiųjų takai sodams, parkams ir privačioms valdoms. Įvairūs raštai ir medžiagos.",
  },
  {
    icon: Car,
    title: "Automobilių aikštelės",
    description:
      "Tvarios automobilių aikštelės iš sustiprintų trinkelių. Atlaikančios sunkiąją techniką ir intensyvų eismą.",
  },
  {
    icon: Home,
    title: "Terasos ir kiemai",
    description:
      "Jaukios ir estetiškai patrauklios terasos bei kiemų dangos. Rūpinamės kiekviena detale — nuo pagrindo iki užbaigimo.",
  },
  {
    icon: Building2,
    title: "Komerciniai objektai",
    description:
      "Didelės apimties trinkelių klojimas prekybos centrams, degalinėms, sandėliams ir kitiems komerciniams objektams.",
  },
];

export function PavingTypes(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {PAVING_TYPES.map((type, index) => (
        <ScrollReveal key={type.title} delay={index * 0.1}>
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full border border-border/50">
            <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center mb-5">
              <type.icon className="w-6 h-6 text-amber" />
            </div>
            <h3 className="font-heading text-xl text-charcoal mb-3">
              {type.title}
            </h3>
            <p className="text-body text-sm leading-relaxed">
              {type.description}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
