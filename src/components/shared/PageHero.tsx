"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  breadcrumbs: Breadcrumb[];
}

export function PageHero({
  title,
  subtitle,
  backgroundImage,
  breadcrumbs,
}: PageHeroProps): React.ReactElement {
  return (
    <section className="relative h-[40vh] min-h-[320px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/60 to-charcoal/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-1.5 mb-6"
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              )}
              {crumb.href ? (
                <a
                  href={crumb.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {crumb.label}
                </a>
              ) : (
                <span className="text-sm text-white/80">{crumb.label}</span>
              )}
            </span>
          ))}
        </motion.nav>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight",
          )}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-4 text-lg text-white/70 max-w-xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
