"use client";

import { Check } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { StatsCounter } from "@/components/shared/StatsCounter";
import { Button } from "@/components/shared/Button";
import { STATS } from "@/lib/data/stats";

const VALUES = [
  "Kokyb\u0117",
  "Patirtis",
  "Atsakingumas",
  "Punktualumas",
] as const;

export function AboutSection(): React.ReactElement {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Image + Stats */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Image placeholder */}
              <div className="relative rounded-2xl aspect-[4/3] overflow-hidden bg-charcoal/5">
                {/* Subtle pattern for placeholder */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, transparent, transparent 10px, #1a1a2e 10px, #1a1a2e 11px)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-amber/10 flex items-center justify-center mx-auto mb-3">
                      <svg
                        className="w-8 h-8 text-amber/40"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-subtle">Komandos nuotrauka</p>
                  </div>
                </div>
              </div>

              {/* Stats grid overlaid below image */}
              <div className="grid grid-cols-2 gap-4 mt-6 lg:-mt-12 lg:mx-6 relative z-10">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-xl p-3 shadow-lg border border-border/50"
                  >
                    <StatsCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      label={stat.label}
                      size="sm"
                    />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Text content */}
          <div>
            <SectionHeader
              label="Apie mus"
              title={"Patikima komanda su 11+ met\u0173 patirtimi"}
              centered={false}
            />

            <ScrollReveal delay={0.1}>
              <div className="space-y-4 text-body leading-relaxed mb-8">
                <p>
                  {
                    "UAB Arversa \u2014 tai patikima statybos ir gerb\u016Bvio darb\u0173 \u012Fmon\u0117, veikianti nuo 2008 met\u0173. Per daugiau nei 11 met\u0173 sukaup\u0117me didel\u0119 patirt\u012F \u012Fvairiose statybos srityse \u2014 nuo trinkeli\u0173 klojimo iki sud\u0117ting\u0173 \u017Eem\u0117s kasimo darb\u0173."
                  }
                </p>
                <p>
                  {
                    "M\u016Bs\u0173 komanda \u2014 tai kvalifikuoti specialistai, kurie kiekvien\u0105 projekt\u0105 atlieka kruop\u0161\u010Diai ir atsakingai. Dirbame visoje Lietuvoje \u2014 tiek su privat\u016Bmis, tiek su komerciniais klientais."
                  }
                </p>
                <p>
                  {
                    "Turime sav\u0105 technik\u0105: mini krautuvus (BOBCAT), ekskavatorius ir savivartes, tod\u0117l galime pasi\u016Blyti konkurencin\u0119 kain\u0105 ir grei\u010Diau \u012Fgyvendinti projektus."
                  }
                </p>
              </div>
            </ScrollReveal>

            {/* Values list */}
            <ScrollReveal delay={0.2}>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {VALUES.map((value) => (
                  <li key={value} className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-amber/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-amber" />
                    </div>
                    <span className="text-charcoal font-medium">{value}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Button href="/kontaktai">Susisiekite su mumis</Button>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
