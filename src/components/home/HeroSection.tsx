"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { StatsCounter } from "@/components/shared/StatsCounter";
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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut" as const,
    },
  },
};

export function HeroSection(): React.ReactElement {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
        {/* Mobile: Photo on top */}
        <div className="relative aspect-[4/3] lg:hidden">
          <Image
            src="/images/portfolio/paving/paving-001.jpg"
            alt="Trinkelių klojimo darbai - Arversa"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 to-charcoal/60" />
        </div>

        {/* Left side — Content */}
        <div className="relative flex items-center bg-charcoal">
          {/* Subtle golden shimmer overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 30% 50%, #d4a853 0%, transparent 60%)",
            }}
          />

          {/* Geometric grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(212, 168, 83, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 168, 83, 0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10 w-full px-6 sm:px-10 lg:px-12 xl:px-16 py-12 lg:py-16">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="max-w-xl"
            >
              {/* Badge */}
              <motion.div variants={fadeUp}>
                <span className="inline-block rounded-full bg-amber/10 px-5 py-2 text-sm font-medium text-amber mb-6 lg:mb-8">
                  {"11+ met\u0173 patirties"}
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                variants={fadeUp}
                className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1] mb-5 lg:mb-6"
              >
                {"Statybos ir gerb\u016Bvio"}
                <br />
                {"darbai visoje"}
                <br />
                {"Lietuvoje"}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeUp}
                className="text-base lg:text-lg text-white/70 leading-relaxed max-w-md mb-8 lg:mb-10"
              >
                {
                  "Trinkeli\u0173 klojimas, technikos nuoma, \u017Eem\u0117s kasimas ir griovimo darbai \u2014 nuo 2008 met\u0173."
                }
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-4 mb-10 lg:mb-14"
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
                className="grid grid-cols-4 gap-3 lg:gap-4 pt-8 lg:pt-10 border-t border-white/10"
              >
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <StatsCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      label={stat.label}
                      size="hero"
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Right side — Photo (desktop only) */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="relative hidden lg:block"
        >
          <Image
            src="/images/portfolio/paving/paving-001.jpg"
            alt="Trinkelių klojimo darbai - Arversa"
            fill
            priority
            className="object-cover"
            sizes="50vw"
          />
          {/* Subtle gradient overlay from left edge for blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 via-transparent to-transparent" />
        </motion.div>
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
