"use client";

import { MessageSquare, Layers, LayoutGrid, CheckCircle } from "lucide-react";
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
    icon: MessageSquare,
    title: "Konsultacija",
    description:
      "Atvykstame į objektą, įvertiname situaciją, aptariame Jūsų pageidavimus ir pateikiame detalų pasiūlymą.",
  },
  {
    number: 2,
    icon: Layers,
    title: "Pagrindo paruošimas",
    description:
      "Iškasame seną gruntą, paklojame geotekstilę, suformuojame žvyro ir smėlio pagrindą pagal technologiją.",
  },
  {
    number: 3,
    icon: LayoutGrid,
    title: "Trinkelių klojimas",
    description:
      "Klojame trinkeles pagal pasirinktą raštą, montuojame bordiūrus, užpildome siūles ir tankiname paviršių.",
  },
  {
    number: 4,
    icon: CheckCircle,
    title: "Rezultatas",
    description:
      "Galutinis patikrinimas, teritorijos sutvarkymas ir perdavimas. Jūsų naujas paviršius paruoštas naudojimui.",
  },
];

export function PavingProcess(): React.ReactElement {
  return (
    <div className="relative">
      {/* Connecting line (desktop) */}
      <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 border-t-2 border-dashed border-amber/30" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
        {PROCESS_STEPS.map((step) => (
          <ScrollReveal key={step.number} delay={step.number * 0.12}>
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
