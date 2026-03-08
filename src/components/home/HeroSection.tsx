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
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
        {/* Left — Content */}
        <div className="relative bg-charcoal flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-20 py-20 lg:py-24 order-2 lg:order-1">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-block rounded-full bg-amber/15 px-5 py-2 text-sm font-medium text-amber mb-6 lg:mb-8">
                {"11+ met\u0173 patirties"}
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white leading-[1.1] mb-5 lg:mb-6"
            >
              {"Statybos ir gerb\u016Bvio"}
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
                "Trinkeli\u0173 klojimas, technikos nuoma, \u017Eem\u0117s kasimas ir griovimo darbai \u2014 nuo 2008 met\u0173."
              }
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-12 lg:mb-16"
            >
              <Button href="/kontaktai" size="lg">
                {"Gauti pasi\u016Blym\u0105"}
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

        {/* Right — Photo */}
        <div className="relative min-h-[50vh] lg:min-h-0 order-1 lg:order-2">
          <Image
            src="/images/portfolio/paving/paving-012.jpg"
            alt="Arversa trinkelių klojimo darbai"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle gradient on left edge for blending into charcoal */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-charcoal/40 to-transparent hidden lg:block" />
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
            {"\u017Di\u016Br\u0117ti \u017Eemyn"}
          </span>
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
