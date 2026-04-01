import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/shared/Button";
import { COMPANY } from "@/lib/constants";
import { Phone, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Infrastruktūra neįgaliesiems | Arversa",
  description:
    "Vidaus ir lauko infrastruktūros pritaikymas neįgaliesiems — pandusai, takai, parkavimo vietos ir prieinamumo sprendimai. UAB Arversa.",
};

const FEATURES = [
  "Pandusų projektavimas ir įrengimas",
  "Prieinamų takų klojimas",
  "Neįgaliųjų parkavimo vietos",
  "Bordiūrų nuleidimas",
  "Laikikliai ir apsauginiai elementai",
  "Atitiktis statybos techniniams reglamentams",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Konsultacija",
    description:
      "Įvertiname esamą situaciją, išmatuojame teritoriją ir aptariame reikiamus pakeitimus pagal normas.",
  },
  {
    step: "02",
    title: "Projektavimas",
    description:
      "Parengiame sprendimus atitinkančius STR reikalavimus ir praktinius prieinamumo poreikius.",
  },
  {
    step: "03",
    title: "Darbų vykdymas",
    description:
      "Atliekame visus darbus kokybiškai ir laiku — nuo pagrindo paruošimo iki dangos klojimo.",
  },
  {
    step: "04",
    title: "Priėmimas",
    description:
      "Patikriname visų elementų atitiktį reikalavimams ir perduodame objektą užsakovui.",
  },
];

export default function NeigaliujuInfrastrukturaPage(): React.ReactElement {
  return (
    <>
      <PageHero
        title="Infrastruktūra neįgaliesiems"
        subtitle="Prieinamos aplinkos sprendimai kiekvienam"
        backgroundImage="/images/services/neigaliuju-infra.jpg"
        breadcrumbs={[
          { label: "Pagrindinis", href: "/" },
          { label: "Paslaugos", href: "/#paslaugos" },
          { label: "Infrastruktūra neįgaliesiems" },
        ]}
      />

      {/* Features */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            label="Paslaugos"
            title="Ką mes įrengiame"
            subtitle="Kuriame prieinamą aplinką visiems — atitinkančią teisinius reikalavimus ir realius poreikius."
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
            subtitle="Nuo konsultacijos iki paruošto objekto — skaidriai ir atsakingai."
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
              Reikia pritaikyti aplinką?
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Susisiekite su mumis ir gaukite nemokamą konsultaciją bei detalų
              pasiūlymą Jūsų objektui.
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
