"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxImage {
  src: string;
  alt: string;
}

interface PhotoLightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function PhotoLightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: PhotoLightboxProps): React.ReactElement {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrev();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Uždaryti"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Ankstesnis"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
        )}

        {/* Image */}
        <motion.img
          key={currentIndex}
          src={currentImage.src}
          alt={currentImage.alt}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg select-none"
          onClick={(e) => e.stopPropagation()}
          draggable={false}
        />

        {/* Next button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Kitas"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        )}

        {/* Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium bg-black/40 px-4 py-1.5 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
