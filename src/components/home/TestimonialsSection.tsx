"use client";

import { Container } from "@/components/shared/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export function TestimonialsSection(): React.ReactElement {
  const duplicated = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-20 lg:py-28 bg-charcoal">
      <Container>
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-amber mb-4">
            Atsiliepimai
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            {"K\u0105 sako m\u016Bs\u0173 klientai"}
          </h2>
        </ScrollReveal>
      </Container>

      {/* Auto-scrolling carousel */}
      <div className="overflow-hidden group">
        <div className="flex gap-6 w-max animate-[testimonial-scroll_45s_linear_infinite] group-hover:[animation-play-state:paused]">
          {duplicated.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="w-[280px] md:w-[350px] shrink-0"
            >
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                rating={testimonial.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
