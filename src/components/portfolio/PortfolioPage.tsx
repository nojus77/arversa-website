"use client";

import { useState, useMemo, useCallback } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { PhotoLightbox } from "@/components/shared/PhotoLightbox";
import { Container } from "@/components/shared/Container";
import { PortfolioFilter } from "@/components/portfolio/PortfolioFilter";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import {
  PORTFOLIO_ITEMS,
  PORTFOLIO_CATEGORIES,
  type PortfolioCategory,
} from "@/lib/data/portfolio";

export function PortfolioPage(): React.ReactElement {
  const [activeCategory, setActiveCategory] =
    useState<PortfolioCategory>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") {
      return PORTFOLIO_ITEMS;
    }
    return PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const lightboxImages = useMemo(
    () => filteredItems.map((item) => ({ src: item.src, alt: item.alt })),
    [filteredItems],
  );

  const handleImageClick = useCallback((index: number): void => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const handleCloseLightbox = useCallback((): void => {
    setLightboxOpen(false);
  }, []);

  const handlePrev = useCallback((): void => {
    setLightboxIndex((prev) =>
      prev === 0 ? lightboxImages.length - 1 : prev - 1,
    );
  }, [lightboxImages.length]);

  const handleNext = useCallback((): void => {
    setLightboxIndex((prev) =>
      prev === lightboxImages.length - 1 ? 0 : prev + 1,
    );
  }, [lightboxImages.length]);

  return (
    <>
      <PageHero
        title="Atlikti darbai"
        subtitle="Musu darbu galerija is visos Lietuvos"
        backgroundImage="/images/portfolio/paving/paving-001.jpg"
        breadcrumbs={[
          { label: "Pagrindinis", href: "/" },
          { label: "Atlikti darbai" },
        ]}
      />

      {/* Filter + Grid section */}
      <section className="pb-20 lg:pb-28">
        <PortfolioFilter
          categories={PORTFOLIO_CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <Container className="mt-10">
          <PortfolioGrid
            items={filteredItems}
            onImageClick={handleImageClick}
          />
        </Container>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <PhotoLightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  );
}
