import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/shared/Button";
import { COMPANY } from "@/lib/constants";
import { Phone, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Mūro darbai | Arversa",
  description:
    "Profesionalūs mūro darbai — keraminių plytų, blokelių (Fibo, Haus, Aeroc, Ytong) mūras, kaminai ir tvoros. UAB Arversa.",
};

const FEATURES = [
  "Keraminių plytų mūras",
  "Blokelių (Fibo, Haus, Aeroc, Ytong) mūras",
  "Akmeninės ir klinkerinės tvoros",
  "Kaminų mūrijimas ir restauravimas",
  "Rūsių ir pamatų mūras",
  "Atraminės sienelės",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Konsultacija ir sąmata",
    description:
      "Aptariame projektą, parenkame tinkamą medžiagą ir paruošiame detalią darbų sąmatą.",
  },
  {
    step: "02",
    title: "Medžiagų parinkimas",
    description:
      "Padedame pasirinkti tinkamiausią mūro medžiagą pagal paskirtį, klimatą ir biudžetą.",
  },
  {
    step: "03",
    title: "Mūrijimas",
    description:
      "Atliekame darbus laikydamiesi technologijų reikalavimų — tiksliai, kruopščiai ir laiku.",
  },
  {
    step: "04",
    title: "Apdailos darbai",
    description:
      "Atlikę mūro darbus, galime pasirūpinti ir paviršiaus apdaila pagal Jūsų pageidavimus.",
  },
];

export default function MurasPage(): React.ReactElement {
  return (
    <>
      <PageHero
        title="Mūro darbai"
        subtitle="Kokybiški mūro darbai privatiems ir komerciniams objektams"
        backgroundImage="/images/services/muras-new.jpg"
        breadcrumbs={[
          { label: "Pagrindinis", href: "/" },
          { label: "Paslaugos", href: "/#paslaugos" },
          { label: "Mūro darbai" },
        ]}
      />

      {/* Features */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            label="Paslaugos"
            title="Mūro darbų rūšys"
            subtitle="Dirbame su visų rūšių mūro medžiagomis — nuo keraminių plytų iki modernių dujų silikatinių blokelių."
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
            subtitle="Nuo konsultacijos iki gatavo mūro — patikimas procesas su aiškiais terminais."
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
              Planuojate mūro darbus?
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
