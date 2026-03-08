"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

function InfoCard({
  icon,
  label,
  value,
  href,
}: InfoCardProps): React.ReactElement {
  const content = (
    <>
      <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <p className="text-sm text-subtle mb-1">{label}</p>
      <p className="text-charcoal font-medium">{value}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="bg-white rounded-xl p-6 shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow duration-300"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm text-center flex flex-col items-center">
      {content}
    </div>
  );
}

const INFO_CARDS: InfoCardProps[] = [
  {
    icon: <Phone className="w-5 h-5 text-amber" />,
    label: "Telefonas",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
  },
  {
    icon: <Mail className="w-5 h-5 text-amber" />,
    label: "El. paštas",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: <MapPin className="w-5 h-5 text-amber" />,
    label: "Adresas",
    value: COMPANY.location,
  },
  {
    icon: <Clock className="w-5 h-5 text-amber" />,
    label: "Darbo laikas",
    value: COMPANY.workingHours,
  },
];

export function ContactInfo(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {INFO_CARDS.map((card, index) => (
        <ScrollReveal key={card.label} delay={index * 0.1}>
          <InfoCard {...card} />
        </ScrollReveal>
      ))}
    </div>
  );
}
