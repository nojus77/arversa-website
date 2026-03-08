"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
}

export function ServiceCard({
  title,
  description,
  image,
  href,
}: ServiceCardProps): React.ReactElement {
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href ? { href } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        "group block bg-white rounded-xl overflow-hidden shadow-md",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-1.5 hover:shadow-xl",
        href && "cursor-pointer",
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
        />
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-heading text-xl text-charcoal mb-2">{title}</h3>
        <p className="text-body text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
        {href && (
          <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-amber transition-all duration-300 group-hover:gap-2.5">
            Skaityti daugiau
            <ArrowRight className="w-4 h-4" />
          </span>
        )}
      </div>
    </Wrapper>
  );
}
