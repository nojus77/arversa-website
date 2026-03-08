"use client";

import { Shovel, Ruler, Landmark, GitBranch } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

interface SubService {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SUB_SERVICES: SubService[] = [
  {
    icon: Shovel,
    title: "Žemės kasimas",
    description:
      "Bendri žemės kasimo darbai bet kokio masto projektams. Kasame ekskavatoriais ir mini ekskavatoriais pagal projektinius brėžinius.",
  },
  {
    icon: Ruler,
    title: "Teritorijų lyginimas",
    description:
      "Teritorijų ir sklypų lyginimas, grunto paskirstymas, aikštelių ir kelių pagrindo formavimas pagal reikiamus nuolydžius.",
  },
  {
    icon: Landmark,
    title: "Pamatų kastuvai",
    description:
      "Tikslus pamatų kasimas pagal projektinius brėžinius. Dirbame su juostiniais, plokštiniais ir poliniais pamatais.",
  },
  {
    icon: GitBranch,
    title: "Tranšėjų kasimas",
    description:
      "Tranšėjos vandentiekiui, kanalizacijai, elektros kabeliams ir drenažo sistemoms. Mini ekskavatoriai siaurai erdvei.",
  },
];

export function ExcavationServices(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {SUB_SERVICES.map((service, index) => (
        <ScrollReveal key={service.title} delay={index * 0.1}>
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
            <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center mb-5">
              <service.icon className="w-6 h-6 text-amber" />
            </div>
            <h3 className="font-heading text-xl text-charcoal mb-3">
              {service.title}
            </h3>
            <p className="text-body text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
