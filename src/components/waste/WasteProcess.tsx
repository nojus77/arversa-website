"use client";

import { ClipboardList, Container as ContainerIcon, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

interface ProcessStep {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    icon: ClipboardList,
    title: "Užsakymas",
    description:
      "Paskambinkite ir papasakokite apie atliekas — kiekį, tipą ir vietą. Pateisime kainą ir sutarsime laiką.",
  },
  {
    number: 2,
    icon: ContainerIcon,
    title: "Atvežimas konteinerio",
    description:
      "Pristatome tinkamo dydžio konteinerį arba atvažiuojame su savivarte. Jūs kraunate arba mes padarome už Jus.",
  },
  {
    number: 3,
    icon: Truck,
    title: "Išvežimas",
    description:
      "Išvežame atliekas į atitinkamą perdirbimo ar šalinimo aikštelę. Objektas lieka švarus ir tvarkingas.",
  },
];

export function WasteProcess(): React.ReactElement {
  return (
    <div className="relative">
      {/* Dashed connecting line (desktop only) */}
      <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 border-t-2 border-dashed border-amber/30" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {PROCESS_STEPS.map((step) => (
          <ScrollReveal key={step.number} delay={step.number * 0.15}>
            <div className="text-center relative">
              {/* Circle badge */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-amber mx-auto mb-6 flex items-center justify-center shadow-lg shadow-amber/25">
                <step.icon className="w-7 h-7 text-white" />
              </div>

              {/* Step number */}
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber mb-2">
                {step.number} Žingsnis
              </span>

              {/* Title */}
              <h3 className="font-heading text-xl text-charcoal mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-body text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
