import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/shared/Button";
import { COMPANY } from "@/lib/constants";
import { Phone, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Griovimo darbai | Arversa",
  description:
    "Profesionalūs griovimo darbai — nuo plytelių nuėmimo iki pastatų griovimo. Sienų griovimas, demontavimas, atliekų išvežimas. UAB Arversa.",
};

const FEATURES = [
  "Pastatų ir statinių griovimas",
  "Sienų, pertvarų griovimas",
  "Plytelių ir grindų nuėmimas",
  "Langų ir durų demontavimas",
  "Stogo konstrukcijų ardymas",
  "Statybinių atliekų išvežimas",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Objekto įvertinimas",
    description:
      "Atvykstame į vietą, įvertiname griovimo apimtį, pavojus ir parengiame darbų planą.",
  },
  {
    step: "02",
    title: "Pasiruošimas",
    description:
      "Apsaugome gretimas konstrukcijas, atjungiame komunikacijas ir paruošiame techniką darbams.",
  },
  {
    step: "03",
    title: "Griovimas",
    description:
      "Atliekame griovimo darbus saugiai ir efektyviai — rankiniu būdu arba naudojant techniką.",
  },
  {
    step: "04",
    title: "Valymas ir išvežimas",
    description:
      "Surenkame ir išvežame visas statybines atliekas, paliekame švarų ir paruoštą objektą.",
  },
];

export default function GriovimasPage(): React.ReactElement {
  return (
    <>
      <PageHero
        title="Griovimo darbai"
        subtitle="Saugus ir profesionalus griovimas nuo mažų iki didelių objektų"
        backgroundImage="/images/services/griovimas-new.jpg"
        breadcrumbs={[
          { label: "Pagrindinis", href: "/" },
          { label: "Paslaugos", href: "/#paslaugos" },
          { label: "Griovimo darbai" },
        ]}
      />

      {/* Features */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            label="Paslaugos"
            title="Ką mes griauname"
            subtitle="Nuo smulkių ardymo darbų iki pilno statinio griovimo — vienas rangovas visam procesui."
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
            subtitle="Saugiai, greitai ir atsakingai — nuo pirmo apžiūros iki švaraus objekto."
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
              Planuojate griovimo darbus?
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
