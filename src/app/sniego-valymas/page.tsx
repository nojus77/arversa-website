import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/shared/Button";
import { COMPANY } from "@/lib/constants";
import { Phone, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Sniego valymas | Arversa",
  description:
    "Profesionalus sniego valymas — automobilių aikštelės, prekybos centrai, privatūs kiemai ir keliai. Sniego išvežimas. UAB Arversa.",
};

const FEATURES = [
  "Automobilių aikštelių valymas",
  "Privažiavimų ir kelių valymas",
  "Privačių kiemų ir sodybų valymas",
  "Stogų sniego valymas",
  "Sniego išvežimas iš teritorijos",
  "Ledą tirpinančių medžiagų barstimas",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Sutarties sudarymas",
    description:
      "Sudarome sezoninę sutartį arba vienkartinius iškvietimus pagal Jūsų poreikius.",
  },
  {
    step: "02",
    title: "Iškvietimas",
    description:
      "Gavę pranešimą atvykstame kuo greičiau — dirbame 7 d. per savaitę sezono metu.",
  },
  {
    step: "03",
    title: "Valymas",
    description:
      "Valome sniegą naudodami tinkamą techniką — traktoriukais, savivartėmis ar rankiniu būdu.",
  },
  {
    step: "04",
    title: "Išvežimas",
    description:
      "Jei reikia, sukauptą sniegą išvežame iš teritorijos, palikdami švarų ir saugų paviršių.",
  },
];

export default function SniegoValymasPage(): React.ReactElement {
  return (
    <>
      <PageHero
        title="Sniego valymas"
        subtitle="Greitas ir patikimas sniego valymas visoje Lietuvoje"
        backgroundImage="/images/services/snow-clean.jpg"
        breadcrumbs={[
          { label: "Pagrindinis", href: "/" },
          { label: "Paslaugos", href: "/#paslaugos" },
          { label: "Sniego valymas" },
        ]}
      />

      {/* Features */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            label="Paslaugos"
            title="Ką mes valome"
            subtitle="Pasirūpiname Jūsų teritorijos saugumu žiemą — greitai ir kokybiškai."
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
            subtitle="Operatyviai reaguojame į oro sąlygas ir užtikriname švarią teritoriją."
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
              Reikia išvalyti sniegą?
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Skambinkite bet kuriuo metu — dirbame visą žiemos sezoną ir
              reaguojame operatyviai.
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
