"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { CTAButtonSize, CTAButtonVariant } from "@/types";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: CTAButtonVariant;
  size?: CTAButtonSize;
  icon?: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
  /** Accesibilidad cuando el botón es solo ícono */
  ariaLabel?: string;
}

/**
 * CTAButton con contraste WCAG AA garantizado por defecto:
 * - primary (coral) → texto navy (#182635), nunca blanco
 * - dark (teal-dark) → texto blanco, para fondos oscuros
 */
const variantMap: Record<
  CTAButtonVariant,
  "default" | "outline" | "ghost" | "dark"
> = {
  primary: "default",
  secondary: "outline",
  ghost: "ghost",
  dark: "dark",
};

export function CTAButton({
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  showArrow = false,
  className,
  children,
  ariaLabel,
}: CTAButtonProps) {
  const buttonVariant = variantMap[variant];
  const isPrimary = variant === "primary";

  const content = (
    <>
      {icon}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
      )}
      {isPrimary && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-pill"
        >
          <span className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </span>
      )}
    </>
  );

  const classes = cn(
    "group relative overflow-hidden",
    className
  );

  if (href) {
    return (
      <Button
        asChild
        variant={buttonVariant}
        size={size}
        className={classes}
        aria-label={ariaLabel}
      >
        <Link href={href}>{content}</Link>
      </Button>
    );
  }

  return (
    <Button
      variant={buttonVariant}
      size={size}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </Button>
  );
}
