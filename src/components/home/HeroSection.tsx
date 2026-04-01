"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { STATS } from "@/lib/data/stats";

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function HeroSection(): React.ReactElement {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Full-width background photo */}
      <Image
        src="/images/hero-trinkeliu-klojimas.jpg"
        alt="Trinkelių klojimo darbai — Arversa"
        fill
        priority
        quality={95}
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient overlay: solid charcoal left → transparent right */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/95 via-35% to-charcoal/20 lg:to-transparent" />

      {/* Mobile: darker overlay so text is readable */}
      <div className="absolute inset-0 bg-charcoal/60 lg:hidden" />

      {/* Content */}
      <div className="relative z-10 min-h-[90vh] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-20 lg:py-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-block rounded-full bg-amber/15 backdrop-blur-sm px-5 py-2 text-sm font-medium text-amber mb-6 lg:mb-8">
                {"18+ metų patirties"}
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white leading-[1.1] mb-5 lg:mb-6"
            >
              {"Statybos ir gerbūvio"}
              <br />
              {"darbai visoje"}
              <br />
              <span className="text-amber">{"Lietuvoje"}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-white/70 leading-relaxed max-w-lg mb-8 lg:mb-10"
            >
              {
                "Trinkelių klojimas, technikos nuoma, žemės kasimas ir griovimo darbai — nuo 2008 metų."
              }
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-12 lg:mb-16"
            >
              <Button href="/kontaktai" size="lg">
                {"Gauti pasiūlymą"}
              </Button>
              <Button
                href="/atlikti-darbai"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50"
              >
                Atlikti darbai
              </Button>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-5 md:gap-7 pt-8 border-t border-white/15"
            >
              {STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-5 md:gap-7"
                >
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-amber">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="text-[10px] md:text-xs uppercase tracking-widest text-white/50 mt-1">
                      {stat.label}
                    </div>
                  </div>
                  {index < STATS.length - 1 && (
                    <div className="w-px h-10 bg-white/15" />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-white/40">
            {"Žiūrėti žemyn"}
          </span>
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
