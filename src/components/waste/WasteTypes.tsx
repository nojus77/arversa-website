"use client";

import { HardHat, Trash2, Mountain, Building } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

interface WasteType {
  icon: LucideIcon;
  title: string;
  description: string;
  examples: string[];
}

const WASTE_TYPES: WasteType[] = [
  {
    icon: HardHat,
    title: "Statybinės atliekos",
    description:
      "Visos atliekos, susidarančios statybų, remonto ar rekonstrukcijos metu.",
    examples: ["Betonas", "Plytos", "Gipsokartonas", "Metalas", "Mediena"],
  },
  {
    icon: Trash2,
    title: "Buitinės šiukšlės",
    description:
      "Didelės apimties buitinių šiukšlių išvežimas iš privačių namų ir įmonių.",
    examples: ["Baldai", "Buitinė technika", "Tekstilė", "Pakuotės"],
  },
  {
    icon: Mountain,
    title: "Žemė ir gruntas",
    description: "Iškastos žemės, grunto ir uolienų išvežimas iš statybvietės.",
    examples: ["Juodžemis", "Molis", "Žvyras", "Akmenys"],
  },
  {
    icon: Building,
    title: "Senų pastatų griuvėsiai",
    description:
      "Nugriauto pastato liekanų ir griuvėsių surinkimas bei išvežimas.",
    examples: [
      "Griovimo atliekos",
      "Stogo dangos",
      "Langai ir durys",
      "Fasado apdaila",
    ],
  },
];

export function WasteTypes(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {WASTE_TYPES.map((type, index) => (
        <ScrollReveal key={type.title} delay={index * 0.1}>
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full border border-border/50">
            <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center mb-5">
              <type.icon className="w-6 h-6 text-amber" />
            </div>
            <h3 className="font-heading text-xl text-charcoal mb-3">
              {type.title}
            </h3>
            <p className="text-body text-sm leading-relaxed mb-4">
              {type.description}
            </p>

            {/* Example tags */}
            <div className="flex flex-wrap gap-2">
              {type.examples.map((example) => (
                <span
                  key={example}
                  className="inline-block text-xs font-medium bg-offwhite text-subtle px-3 py-1.5 rounded-full"
                >
                  {example}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
