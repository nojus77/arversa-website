import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({
  children,
  className,
}: ContainerProps): React.ReactElement {
  return (
    <div className={cn("max-w-[1200px] mx-auto px-6", className)}>
      {children}
    </div>
  );
}
