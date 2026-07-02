import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "coral" | "teal" | "neutral" | "dark";
}

function Badge({ className, variant = "neutral", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-pill px-3 py-1 text-caption uppercase tracking-widest",
        {
          "bg-coral-soft text-foreground": variant === "coral",
          "bg-teal-soft text-teal-dark": variant === "teal",
          "bg-sand text-muted": variant === "neutral",
          "bg-teal-dark text-white": variant === "dark",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
