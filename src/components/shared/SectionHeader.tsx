"use client";

import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps): React.ReactElement {
  return (
    <ScrollReveal className={cn("mb-14", centered && "text-center")}>
      <span className="inline-block text-sm font-semibold uppercase tracking-widest text-amber mb-4">
        {label}
      </span>
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-body text-lg max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
