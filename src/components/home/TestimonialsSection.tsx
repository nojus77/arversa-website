"use client";

import { Container } from "@/components/shared/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export function TestimonialsSection(): React.ReactElement {
  return (
    <section className="py-20 lg:py-28 bg-charcoal">
      <Container>
        {/* Header — custom here since we need white text on dark bg */}
        <ScrollReveal className="text-center mb-14">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-amber mb-4">
            Atsiliepimai
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            {"K\u0105 sako m\u016Bs\u0173 klientai"}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.15}>
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                rating={testimonial.rating}
              />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
