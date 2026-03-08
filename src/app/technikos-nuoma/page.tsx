import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { EQUIPMENT } from "@/lib/data/equipment";
import { COMPANY } from "@/lib/constants";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/shared/Button";
import { EquipmentCard } from "@/components/equipment/EquipmentCard";
import { HowItWorksSteps } from "@/components/equipment/HowItWorksSteps";

export const metadata: Metadata = {
  title: "Technikos nuoma",
  description:
    "Technikos nuoma su vairuotojais — Bobcat mini krautuvai, ekskavatoriai, mini ekskavatoriai ir savivartės iki 12 tonų. UAB Arversa, Lentvaris.",
};

export default function TechnikosNuomaPage(): React.ReactElement {
  return (
    <>
      <PageHero
        title="Technikos nuoma"
        subtitle="Bobcat, ekskavatoriai ir savivartės su vairuotojais"
        backgroundImage="/images/services/technikos-nuoma.jpg"
        breadcrumbs={[
          { label: "Pagrindinis", href: "/" },
          { label: "Technikos nuoma" },
        ]}
      />

      {/* Equipment Grid */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            label="Mūsų technika"
            title="Visa reikalinga technika"
            subtitle="Nuomojame statybų ir žemės darbų techniką su patyrusiais vairuotojais. Jums tereikia nurodyti, ką reikia padaryti."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EQUIPMENT.map((item, index) => (
              <EquipmentCard
                key={item.id}
                name={item.name}
                description={item.description}
                image={item.image}
                specs={item.specs}
                delay={index * 0.1}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28 bg-offwhite">
        <Container>
          <SectionHeader
            label="Procesas"
            title="Kaip tai veikia?"
            subtitle="Paprastas ir greitas užsakymo procesas — nuo skambučio iki darbų pradžios."
          />

          <HowItWorksSteps />
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
              Reikia technikos?
            </h2>
            <p className="text-body text-lg mb-8 leading-relaxed">
              Skambinkite ir aptarsime Jūsų poreikius. Pasiūlymą pateikiame per
              2 valandas.
            </p>
            <Button href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} size="lg">
              <Phone className="w-5 h-5" />
              {COMPANY.phone}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
