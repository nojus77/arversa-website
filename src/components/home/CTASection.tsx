"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { Container } from "@/components/shared/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { COMPANY } from "@/lib/constants";

export function CTASection(): React.ReactElement {
  const telHref = `tel:${COMPANY.phone.replace(/\s/g, "")}`;
  const mailHref = `mailto:${COMPANY.email}`;

  return (
    <section id="kontaktai" className="relative py-20 lg:py-28 overflow-hidden">
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
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-5xl text-white leading-tight mb-5">
              Susisiekite su mumis
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              {"Gaukite nemokam\u0105 pasi\u016Blym\u0105 per 2 darbo valandas"}
            </p>
          </ScrollReveal>
        </div>

        {/* Form + Map two-column layout */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Contact form */}
            <div>
              <ContactForm />
            </div>

            {/* Right: Map */}
            <div className="min-h-[400px]">
              <MapEmbed />
            </div>
          </div>
        </ScrollReveal>

        {/* Info strip */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {/* Phone */}
            <a
              href={telHref}
              className="flex items-center gap-2.5 text-white/80 hover:text-amber transition-colors duration-200 group"
            >
              <Phone className="w-5 h-5 text-amber group-hover:scale-110 transition-transform duration-200" />
              <span className="text-base font-medium">{COMPANY.phone}</span>
            </a>

            {/* Email */}
            <a
              href={mailHref}
              className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors duration-200 group"
            >
              <Mail className="w-5 h-5 text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-200" />
              <span className="text-base font-medium">{COMPANY.email}</span>
            </a>

            {/* Address */}
            <div className="flex items-center gap-2.5 text-white/80">
              <MapPin className="w-5 h-5 text-white/60" />
              <span className="text-base font-medium">{COMPANY.location}</span>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
