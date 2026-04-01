import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/shared/Button";
import { COMPANY } from "@/lib/constants";
import { Phone, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Gerbūvio darbai | Arversa",
  description:
    "Gerbūvio darbai — trinkelių klojimas, kraštovaizdžio formavimas, apželdinimas, bordiūrų montavimas ir terasos. UAB Arversa.",
};

const FEATURES = [
  "Trinkelių ir plytelių klojimas",
  "Bordiūrų montavimas",
  "Kraštovaizdžio formavimas",
  "Apželdinimas ir vejos įrengimas",
  "Terasų įrengimas",
  "Lauko apšvietimo montavimas",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Teritorijos apžiūra",
    description:
      "Atvykstame į objektą, įvertiname teritoriją ir aptariame Jūsų lūkesčius bei biudžetą.",
  },
  {
    step: "02",
    title: "Plano parengimas",
    description:
      "Parengiame detalų darbų planą ir medžiagų sąrašą, suderinę su užsakovu.",
  },
  {
    step: "03",
    title: "Darbų vykdymas",
    description:
      "Atliekame visus gerbūvio darbus kokybiškai — nuo žemės kasimo iki paskutinių detalių.",
  },
  {
    step: "04",
    title: "Objekto perdavimas",
    description:
      "Sutvarkome teritoriją, pašaliname statybines atliekas ir perduodame švarų rezultatą.",
  },
];

export default function GerbuvioPage(): React.ReactElement {
  return (
    <>
      <PageHero
        title="Gerbūvio darbai"
        subtitle="Tvarkinga ir kokybiška aplinka Jūsų namams ar verslui"
        backgroundImage="/images/services/gerbuvis.jpg"
        breadcrumbs={[
          { label: "Pagrindinis", href: "/" },
          { label: "Paslaugos", href: "/#paslaugos" },
          { label: "Gerbūvio darbai" },
        ]}
      />

      {/* Features */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            label="Paslaugos"
            title="Ką mes atliekame"
            subtitle="Visapusiškas teritorijos sutvarkymas — nuo projektavimo iki gražaus rezultato."
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
            subtitle="Kiekvienas projektas — tai individualus požiūris ir kokybiškas rezultatas."
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
              Norite sutvarkyti teritoriją?
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
