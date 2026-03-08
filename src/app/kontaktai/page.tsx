import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapEmbed } from "@/components/contact/MapEmbed";

export const metadata: Metadata = {
  title: "Kontaktai",
  description:
    "Susisiekite su UAB Arversa — nemokamas pasiūlymas per 24 valandas. Telefonas, el. paštas, adresas ir kontaktinė forma.",
};

export default function KontaktaiPage(): React.ReactElement {
  return (
    <>
      <PageHero
        title="Kontaktai"
        subtitle="Susisiekite su mumis ir gaukite nemokamą pasiūlymą"
        backgroundImage="/images/hero/hero-main.jpg"
        breadcrumbs={[
          { label: "Pagrindinis", href: "/" },
          { label: "Kontaktai" },
        ]}
      />

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-20 bg-offwhite">
        <Container>
          <ContactInfo />
        </Container>
      </section>

      {/* Form + Map */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <ScrollReveal direction="left">
              <ContactForm />
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.15}>
              <MapEmbed />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Bottom Info */}
      <section className="py-16 lg:py-20 bg-offwhite">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
                Nemokamas pasiūlymas
              </h2>
              <p className="text-body text-lg leading-relaxed">
                Pateikite užklausą ir gausite detalų pasiūlymą su kainomis per
                24 valandas. Konsultacija ir atvažiavimas į objektą — nemokamai.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
