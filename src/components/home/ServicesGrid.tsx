"use client";

import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { SERVICES } from "@/lib/data/services";

export function ServicesGrid(): React.ReactElement {
  return (
    <section className="py-20 lg:py-28 bg-offwhite">
      <Container>
        <SectionHeader
          label="Paslaugos"
          title={"M\u016Bs\u0173 paslaugos"}
          subtitle={
            "Si\u016Blome plat\u0173 statybos ir gerb\u016Bvio darb\u0173 spektr\u0105"
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1}>
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                href={service.href ?? undefined}
              />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
