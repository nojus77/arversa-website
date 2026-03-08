"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

interface EquipmentCardProps {
  name: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  delay?: number;
}

export function EquipmentCard({
  name,
  description,
  image,
  specs,
  delay = 0,
}: EquipmentCardProps): React.ReactElement {
  return (
    <ScrollReveal delay={delay}>
      <div
        className={cn(
          "bg-white rounded-xl overflow-hidden shadow-md",
          "transition-all duration-500 ease-out",
          "hover:-translate-y-1 hover:shadow-xl",
        )}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          <h3 className="font-heading text-2xl text-charcoal mb-3">{name}</h3>
          <p className="text-body leading-relaxed mb-6">{description}</p>

          {/* Specs grid */}
          <div className="bg-offwhite rounded-lg p-4">
            <div className="grid grid-cols-2 gap-3">
              {specs.map((spec) => (
                <div key={spec.label}>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-subtle mb-0.5">
                    {spec.label}
                  </span>
                  <span className="text-sm font-medium text-charcoal">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
