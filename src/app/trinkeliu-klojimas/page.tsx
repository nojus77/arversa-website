import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/shared/Button";
import { COMPANY } from "@/lib/constants";
import { Phone } from "lucide-react";
import { PavingTypes } from "@/components/paving/PavingTypes";
import { PavingGallery } from "@/components/paving/PavingGallery";
import { PavingProcess } from "@/components/paving/PavingProcess";

export const metadata: Metadata = {
  title: "Trinkelių klojimas",
  description:
    "Kokybiškos trinkelių klojimo paslaugos privatiems ir komerciniams objektams. Pėsčiųjų takai, aikštelės, terasos ir kiemai. UAB Arversa.",
};

const GALLERY_IMAGES = [
  {
    src: "/images/portfolio/paving/paving-001.jpg",
    alt: "Trinkelių klojimas eliniu raštu privačiame kieme",
  },
  {
    src: "/images/portfolio/paving/paving-003.jpg",
    alt: "Trinkelių klojimas po pergola",
  },
  {
    src: "/images/portfolio/paving/paving-007.jpg",
    alt: "Trinkelės prie komercinės degalinės",
  },
  {
    src: "/images/portfolio/paving/paving-009.jpg",
    alt: "Hexagoninės trinkelės komerciniame objekte",
  },
];

export default function TrinkeliuKlojimasPage(): React.ReactElement {
  return (
    <>
      <PageHero
        title="Trinkelių klojimas"
        subtitle="Kokybiškos trinkelės privatiems ir komerciniams objektams"
        backgroundImage="/images/portfolio/paving/paving-001.jpg"
        breadcrumbs={[
          { label: "Pagrindinis", href: "/" },
          { label: "Trinkelių klojimas" },
        ]}
      />

      {/* Paving Types */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            label="Paslaugos"
            title="Klojame trinkelės visur"
            subtitle="Nuo privačių kiemų iki komercinių objektų — dirbame su visų tipų trinkelėmis ir paviršiais."
          />

          <PavingTypes />
        </Container>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 lg:py-28 bg-offwhite">
        <Container>
          <SectionHeader
            label="Mūsų darbai"
            title="Atlikti trinkelių projektai"
            subtitle="Peržiūrėkite mūsų atliktų trinkelių klojimo darbų nuotraukas."
          />

          <PavingGallery images={GALLERY_IMAGES} />
        </Container>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            label="Mūsų procesas"
            title="Kaip dirbame"
            subtitle="Kiekvienas projektas vykdomas pagal patikrintą procesą, užtikrinantį kokybišką rezultatą."
          />

          <PavingProcess />
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-charcoal">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Planuojate trinkelių darbus?
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
