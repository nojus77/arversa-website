"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";

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
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />

      {/* Subtle golden shimmer overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 50%, #d4a853 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, #d4a853 0%, transparent 50%)",
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

      {/* Diagonal decorative line */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 40%, #d4a853 40%, #d4a853 40.5%, transparent 40.5%)",
        }}
      />

      {/* Content */}
      <Container className="relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-block rounded-full bg-amber/10 px-5 py-2 text-sm font-medium text-amber mb-8">
              {"11+ met\u0173 patirties"}
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl md:text-5xl lg:text-7xl text-white leading-[1.1] mb-6"
          >
            {"Statybos ir gerb\u016Bvio"}
            <br />
            {"darbai visoje Lietuvoje"}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-10"
          >
            {
              "Trinkeli\u0173 klojimas, technikos nuoma, \u017Eem\u0117s kasimas ir griovimo darbai \u2014 nuo 2008 met\u0173."
            }
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
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
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
