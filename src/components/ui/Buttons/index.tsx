import { Link } from "react-router-dom";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "accent" | "outline" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
}

const variantClass: Record<Variant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-brand-blue-dark shadow-[0_10px_30px_-12px_rgba(0,27,114,0.6)]",
  accent:
    "bg-[var(--brand-blue-dark)] text-white hover:brightness-110 shadow-[0_10px_30px_-12px_rgba(235,0,43,0.6)]",
  outline:
    "border border-brand-border text-brand-dark hover:border-brand-blue hover:text-brand-blue bg-transparent",
  ghost: "text-brand-dark hover:bg-brand-light",
  light: "bg-white text-brand-blue hover:bg-brand-light",
};

const sizeClass: Record<Size, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-sm",
};

function classes(v: Variant, s: Size, extra?: string) {
  return clsx(
    "inline-flex items-center justify-center gap-2 font-semibold uppercase tracking-[0.14em] rounded-sm transition-all duration-300 group/btn",
    variantClass[v],
    sizeClass[s],
    extra
  );
}

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    BaseProps {}

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={classes(variant, size, className)} {...rest}>
      {children}
      {icon && (
        <span className="transition-transform group-hover/btn:translate-x-1">
          {icon}
        </span>
      )}
    </button>
  );
}

interface LinkButtonProps extends BaseProps {
  to: string;
  external?: boolean;
}

export function LinkButton({
  to,
  external = false,
  variant = "primary",
  size = "md",
  icon,
  className,
  children,
}: LinkButtonProps) {
  const cls = classes(variant, size, className);

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
      >
        {children}
        {icon && (
          <span className="transition-transform group-hover/btn:translate-x-1">
            {icon}
          </span>
        )}
      </a>
    );
  }

  return (
    <Link to={to} className={cls}>
      {children}
      {icon && (
        <span className="transition-transform group-hover/btn:translate-x-1">
          {icon}
        </span>
      )}
    </Link>
  );
}