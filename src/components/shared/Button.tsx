import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "default" | "lg" | "sm";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

interface ButtonAsAnchor extends ButtonBaseProps {
  href: string;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-amber text-charcoal hover:bg-amber-light hover:shadow-lg hover:shadow-amber/20",
  outline:
    "border-2 border-amber text-amber hover:bg-amber hover:text-charcoal",
  ghost: "text-body hover:bg-offwhite hover:text-charcoal",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-7 py-3.5 text-base",
  lg: "px-9 py-4 text-lg",
  sm: "px-5 py-2.5 text-sm",
};

export function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}: ButtonProps): React.ReactElement {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium",
    "transition-all duration-300 ease-out",
    "hover:scale-[1.02] active:scale-[0.98]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  const { type = "button", onClick, disabled } = props as ButtonAsButton;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        classes,
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
      )}
    >
      {children}
    </button>
  );
}
