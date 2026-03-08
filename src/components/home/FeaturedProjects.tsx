"use client";

import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/shared/Button";
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from "@/lib/data/portfolio";

/** Pick 6 items from different categories for variety */
const FEATURED_IDS = ["p1", "m1", "w1", "i1", "e1", "l1"];
const FEATURED_ITEMS = FEATURED_IDS.map((id) =>
  PORTFOLIO_ITEMS.find((item) => item.id === id),
).filter(Boolean) as (typeof PORTFOLIO_ITEMS)[number][];

function getCategoryLabel(category: string): string {
  const match = PORTFOLIO_CATEGORIES.find((c) => c.id === category);
  return match?.label ?? category;
}

export function FeaturedProjects(): React.ReactElement {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeader
          label="Portfolio"
          title="Atlikti darbai"
          subtitle={
            "M\u016Bs\u0173 darb\u0173 pavyzd\u017Eiai i\u0161 visos Lietuvos"
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURED_ITEMS.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-charcoal/5">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Hover content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                  <span className="inline-block rounded-full bg-amber/90 text-charcoal text-xs font-semibold px-3 py-1 mb-2">
                    {getCategoryLabel(item.category)}
                  </span>
                  <p className="text-white text-sm">{item.alt}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="flex justify-center mt-12">
            <Button href="/atlikti-darbai" variant="outline">
              {"Visi darbai \u2192"}
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
