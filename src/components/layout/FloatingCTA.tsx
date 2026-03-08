"use client";

import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function FloatingCTA(): React.ReactElement {
  return (
    <a
      href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
      className="md:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-amber rounded-full flex items-center justify-center shadow-lg shadow-amber/30 hover:bg-amber-light transition-colors animate-pulse"
      aria-label="Paskambinti"
    >
      <Phone className="w-6 h-6 text-charcoal" />
    </a>
  );
}
