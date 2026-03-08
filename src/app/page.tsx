import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage(): React.ReactElement {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesGrid />
      <FeaturedProjects />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
