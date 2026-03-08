import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/shared/Button";
import { COMPANY } from "@/lib/constants";
import { Phone } from "lucide-react";
import { WasteTypes } from "@/components/waste/WasteTypes";
import { WasteProcess } from "@/components/waste/WasteProcess";

export const metadata: Metadata = {
  title: "Atliekų išvežimas",
  description:
    "Statybinių atliekų, šiukšlių ir grunto išvežimas visoje Lietuvoje. Konteinerių nuoma ir transportavimas. UAB Arversa.",
};

export default function AtliekuIsvezimas(): React.ReactElement {
  return (
    <>
      <PageHero
        title="Atliekų išvežimas"
        subtitle="Statybinių atliekų ir šiukšlių išvežimas visoje Lietuvoje"
        backgroundImage="/images/services/atlieku-isvezimas.jpg"
        breadcrumbs={[
          { label: "Pagrindinis", href: "/" },
          { label: "Atliekų išvežimas" },
        ]}
      />

      {/* Waste Types */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            label="Ką išvežame"
            title="Atliekų tipai"
            subtitle="Išvežame visų tipų statybines atliekas ir šiukšles. Rūpinamės tinkamu atliekų tvarkymu ir utilizavimu."
          />

          <WasteTypes />
        </Container>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-offwhite">
        <Container>
          <SectionHeader
            label="Procesas"
            title="Kaip tai veikia?"
            subtitle="Paprastas 3 žingsnių procesas — nuo užsakymo iki švaraus objekto."
          />

          <WasteProcess />
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="relative overflow-hidden bg-charcoal rounded-2xl py-16 px-8 text-center">
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-amber/5" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-amber/5" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                Reikia išvežti atliekas?
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Skambinkite bet kuriuo metu. Aptarsime Jūsų poreikius ir
                organizuosime atliekų išvežimą greičiausiu būdu.
              </p>
              <Button
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                size="lg"
              >
                <Phone className="w-5 h-5" />
                {COMPANY.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
