"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { PortfolioCategory } from "@/lib/data/portfolio";

interface CategoryOption {
  id: PortfolioCategory;
  label: string;
}

interface PortfolioFilterProps {
  categories: CategoryOption[];
  activeCategory: PortfolioCategory;
  onCategoryChange: (category: PortfolioCategory) => void;
}

export function PortfolioFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: PortfolioFilterProps): React.ReactElement {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  // Scroll active button into view on mount and category change
  useEffect(() => {
    if (activeRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const button = activeRef.current;
      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      if (
        buttonRect.left < containerRect.left ||
        buttonRect.right > containerRect.right
      ) {
        button.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeCategory]);

  return (
    <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-border/50 py-4 -mx-6 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div
          ref={scrollRef}
          className="flex gap-2.5 overflow-x-auto scrollbar-hide pb-1"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <motion.button
                key={category.id}
                ref={isActive ? activeRef : undefined}
                onClick={() => onCategoryChange(category.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  "relative flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "bg-amber text-white shadow-md shadow-amber/25"
                    : "bg-white text-charcoal border border-border hover:border-amber hover:text-charcoal",
                )}
              >
                {category.label}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
