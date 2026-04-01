import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/shared/Button";
import { COMPANY } from "@/lib/constants";
import { Phone, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Sporto aikštelės | Arversa",
  description:
    "Sporto aikštelių įrengimas ir montavimas. Kokybiškos sporto erdvės mokykloms, daugiabučių kiemuose ir viešosiose vietose. UAB Arversa.",
};

const FEATURES = [
  "Krepšinio, futbolo, tinklinio aikštelės",
  "Lauko treniruokliai ir sporto įranga",
  "Guminės dangos ir sintetinė žolė",
  "Tvoros ir apšvietimas",
  "Teritorijos paruošimas ir lyginimas",
  "Ilgalaikė priežiūra ir garantija",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Konsultacija ir projektas",
    description:
      "Išanalizuojame Jūsų poreikius, išmatuojame teritoriją ir parengiame individualų projekto planą.",
  },
  {
    step: "02",
    title: "Teritorijos paruošimas",
    description:
      "Išlyginame ir paruošiame pagrindą — iškasome, supilame skaldą ir sutankName.",
  },
  {
    step: "03",
    title: "Dangos įrengimas",
    description:
      "Klojame kokybišką guminę dangą arba sintetinę žolę pagal pasirinktą sporto šaką.",
  },
  {
    step: "04",
    title: "Įrangos montavimas",
    description:
      "Montuojame sporto įrangą, tvoras, apšvietimą ir kitas reikalingas konstrukcijas.",
  },
];

export default function SportoAikstelePage(): React.ReactElement {
  return (
    <>
      <PageHero
        title="Sporto aikštelės"
        subtitle="Kokybiškos sporto erdvės vaikams ir suaugusiems"
        backgroundImage="/images/services/sporto-aiksteles.jpg"
        breadcrumbs={[
          { label: "Pagrindinis", href: "/" },
          { label: "Paslaugos", href: "/#paslaugos" },
          { label: "Sporto aikštelės" },
        ]}
      />

      {/* Features */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            label="Paslaugos"
            title="Ką mes įrengiame"
            subtitle="Nuo projektavimo iki montavimo — kompleksiškas sporto aikštelių sprendimas."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {FEATURES.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 p-5 rounded-xl bg-offwhite"
              >
                <CheckCircle2 className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                <span className="text-charcoal font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-offwhite">
        <Container>
          <SectionHeader
            label="Mūsų procesas"
            title="Kaip dirbame"
            subtitle="Kiekvienas projektas vykdomas pagal patikrintą procesą nuo idėjos iki rezultato."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {PROCESS_STEPS.map((s) => (
              <div key={s.step} className="relative">
                <div className="text-5xl font-heading font-bold text-amber/20 mb-3">
                  {s.step}
                </div>
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">
                  {s.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-charcoal">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Planuojate sporto aikštelę?
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Susisiekite su mumis ir gaukite nemokamą konsultaciją bei detalų
              pasiūlymą Jūsų projektui.
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
