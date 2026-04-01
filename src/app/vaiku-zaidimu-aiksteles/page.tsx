import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/shared/Button";
import { COMPANY } from "@/lib/constants";
import { Phone, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Vaikų žaidimų aikštelės | Arversa",
  description:
    "Vaikų žaidimų aikštelių įrengimas ir montavimas. Saugi, kokybiška ir atitinkanti standartus aplinka vaikams. UAB Arversa.",
};

const FEATURES = [
  "Čiuožyklės, supynės, laipiojimo konstrukcijos",
  "Smėlio dėžės ir vandens žaidimų elementai",
  "Guminė smūgius slopinanti danga",
  "Tvoros ir saugos elementai",
  "Apšvietimas ir suoliukai",
  "Atitiktis EN 1176 saugos standartams",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Projekto planavimas",
    description:
      "Išanalizuojame teritoriją, amžiaus grupę ir poreikius. Parengiame individualų aikštelės išplanavimo planą.",
  },
  {
    step: "02",
    title: "Teritorijos paruošimas",
    description:
      "Išlyginame žemę, pašaliname augalus ir paruošiame saugų pagrindą smūgiams slopinti.",
  },
  {
    step: "03",
    title: "Dangos įrengimas",
    description:
      "Klojame guminę arba smėlio dangą, atitinkančią saugos reikalavimus kritimo zonose.",
  },
  {
    step: "04",
    title: "Įrangos montavimas",
    description:
      "Montuojame visus žaidimų elementus pagal gamintojo instrukcijas ir saugos normas.",
  },
];

export default function VaikuZaidimuAikstelePage(): React.ReactElement {
  return (
    <>
      <PageHero
        title="Vaikų žaidimų aikštelės"
        subtitle="Saugi ir kokybiška aplinka vaikams"
        backgroundImage="/images/services/vaiku-zaidimu-aiksteles.jpg"
        breadcrumbs={[
          { label: "Pagrindinis", href: "/" },
          { label: "Paslaugos", href: "/#paslaugos" },
          { label: "Vaikų žaidimų aikštelės" },
        ]}
      />

      {/* Features */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            label="Paslaugos"
            title="Ką mes įrengiame"
            subtitle="Kompleksiškas vaikų žaidimų aikštelių sprendimas — nuo projektavimo iki montavimo."
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
            subtitle="Kiekvienas projektas vykdomas pagal patikrintą procesą nuo idėjos iki saugios aikštelės."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {PROCESS_STEPS.map((s) => (
              <div key={s.step}>
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
              Planuojate žaidimų aikštelę?
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
