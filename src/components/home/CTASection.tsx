"use client";

import { Phone } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/shared/Button";
import { COMPANY } from "@/lib/constants";

export function CTASection(): React.ReactElement {
  const telHref = `tel:${COMPANY.phone.replace(/\s/g, "")}`;

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />

      {/* Amber accent glow */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, #d4a853 0%, transparent 60%)",
        }}
      />

      {/* Geometric pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(60deg, transparent 45%, rgba(212, 168, 83, 0.4) 45%, rgba(212, 168, 83, 0.4) 45.5%, transparent 45.5%), linear-gradient(-60deg, transparent 45%, rgba(212, 168, 83, 0.4) 45%, rgba(212, 168, 83, 0.4) 45.5%, transparent 45.5%)",
          backgroundSize: "80px 140px",
        }}
      />

      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-5xl text-white leading-tight mb-5">
              {"Pasiruo\u0161\u0119 prad\u0117ti projekt\u0105?"}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10">
              {"Gaukite nemokam\u0105 pasi\u016Blym\u0105 per 2 darbo valandas"}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                href={telHref}
                className="bg-white text-charcoal hover:bg-offwhite hover:shadow-lg"
                size="lg"
              >
                <Phone className="w-5 h-5" />
                Skambinti dabar
              </Button>
              <Button
                href="/kontaktai"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50"
              >
                {"Ra\u0161yti \u017Einut\u0119"}
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <a
              href={telHref}
              className="inline-block text-2xl md:text-3xl font-heading text-amber hover:text-amber-light transition-colors duration-300"
            >
              {COMPANY.phone}
            </a>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
