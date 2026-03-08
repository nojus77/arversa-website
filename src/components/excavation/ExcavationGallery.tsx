"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

interface GalleryImage {
  src: string;
  alt: string;
}

interface ExcavationGalleryProps {
  images: GalleryImage[];
}

export function ExcavationGallery({
  images,
}: ExcavationGalleryProps): React.ReactElement {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <ScrollReveal key={image.src} delay={index * 0.08}>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            {/* Hover overlay with alt text */}
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-end">
              <p className="text-white text-sm px-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                {image.alt}
              </p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
