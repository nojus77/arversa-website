import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/shared/Button";
import { COMPANY } from "@/lib/constants";
import { Phone } from "lucide-react";
import { ExcavationServices } from "@/components/excavation/ExcavationServices";
import { ExcavationGallery } from "@/components/excavation/ExcavationGallery";

export const metadata: Metadata = {
  title: "Žemės kasimo darbai",
  description:
    "Profesionalūs žemės kasimo darbai — žemės kasimas, teritorijų lyginimas, pamatų kastuvai, tranšėjų kasimas. UAB Arversa, 11+ metų patirties.",
};

const GALLERY_IMAGES = [
  {
    src: "/images/portfolio/excavation/excavation-001.jpg",
    alt: "Grunto paruošimas ir bordiūrai",
  },
  {
    src: "/images/portfolio/excavation/excavation-002.jpg",
    alt: "Sporto aikštyno teritorijos paruošimas",
  },
  {
    src: "/images/portfolio/excavation/excavation-003.jpg",
    alt: "Parkavimo aikštelės žemės darbai",
  },
  {
    src: "/images/portfolio/excavation/excavation-004.jpg",
    alt: "Takų ir aikštelės paruošimas parke",
  },
  {
    src: "/images/portfolio/excavation/excavation-005.jpg",
    alt: "Šlaito sutvirtinimas geocelėmis",
  },
  {
    src: "/images/portfolio/excavation/excavation-006.jpg",
    alt: "Teritorijos paruošimas naujai statybai",
  },
];

export default function ZemesKasimoDarbaiPage(): React.ReactElement {
  return (
    <>
      <PageHero
        title="Žemės kasimo darbai"
        subtitle="Profesionalūs žemės darbai nuo pamatų iki teritorijų"
        backgroundImage="/images/portfolio/excavation/excavation-003.jpg"
        breadcrumbs={[
          { label: "Pagrindinis", href: "/" },
          { label: "Žemės kasimo darbai" },
        ]}
      />

      {/* Sub-services */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            label="Paslaugos"
            title="Ką mes darome"
            subtitle="Atliekame visų tipų žemės kasimo darbus — nuo smulkių tranšėjų iki didelių teritorijų paruošimo."
          />

          <ExcavationServices />
        </Container>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 lg:py-28 bg-offwhite">
        <Container>
          <SectionHeader
            label="Mūsų darbai"
            title="Atlikti žemės darbai"
            subtitle="Peržiūrėkite mūsų atliktų žemės kasimo projektų nuotraukas."
          />

          <ExcavationGallery images={GALLERY_IMAGES} />
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
              Gaukite nemokamą įvertinimą
            </h2>
            <p className="text-body text-lg mb-8 leading-relaxed">
              Susisiekite su mumis ir per 24 valandas pateisime Jums detalų
              pasiūlymą su kaina. Konsultacija nemokama.
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
