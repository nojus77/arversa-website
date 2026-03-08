"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Expand } from "lucide-react";
import type { PortfolioItem } from "@/lib/data/portfolio";
import { PORTFOLIO_CATEGORIES } from "@/lib/data/portfolio";

interface PortfolioGridProps {
  items: PortfolioItem[];
  onImageClick: (index: number) => void;
}

export function PortfolioGrid({
  items,
  onImageClick,
}: PortfolioGridProps): React.ReactElement {
  return (
    <div>
      {/* Count indicator */}
      <motion.p
        key={items.length}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-subtle text-sm mb-5"
      >
        Rodomi{" "}
        <span className="text-charcoal font-semibold">{items.length}</span>{" "}
        {items.length === 1 ? "darbas" : items.length < 10 ? "darbai" : "darbu"}
      </motion.p>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
      >
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => {
            const categoryLabel =
              PORTFOLIO_CATEGORIES.find((c) => c.id === item.category)?.label ??
              item.category;

            return (
              <motion.div
                key={item.id}
                layout
                layoutId={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                  layout: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                }}
                className="relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => onImageClick(index)}
              >
                {/* Image */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index < 8}
                  loading={index < 8 ? "eager" : "lazy"}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  {/* Category label */}
                  <span className="text-white/90 text-xs font-semibold uppercase tracking-wider mb-1">
                    {categoryLabel}
                  </span>
                  {/* Alt text as description */}
                  <span className="text-white/70 text-xs line-clamp-2 leading-relaxed">
                    {item.alt}
                  </span>
                </div>

                {/* Expand icon */}
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-75">
                  <Expand className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {items.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-subtle text-lg">
            Sioje kategorijoje darbu kol kas nera.
          </p>
        </motion.div>
      )}
    </div>
  );
}
