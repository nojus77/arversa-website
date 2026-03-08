import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

export function TestimonialCard({
  quote,
  name,
  role,
  rating,
}: TestimonialCardProps): React.ReactElement {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg relative">
      {/* Decorative quote mark */}
      <span
        className="absolute top-4 left-6 text-6xl font-heading text-amber/20 leading-none select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Quote */}
      <p className="text-lg text-charcoal italic leading-relaxed mt-6 mb-6">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Star rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "fill-amber text-amber" : "fill-none text-subtle/30"
            }`}
          />
        ))}
      </div>

      {/* Author */}
      <div>
        <p className="font-semibold text-charcoal">{name}</p>
        <p className="text-sm text-subtle">{role}</p>
      </div>
    </div>
  );
}
