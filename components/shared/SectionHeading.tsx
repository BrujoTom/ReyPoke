import { cn } from "@/lib/utils";
import type { SectionHeadingProps } from "@/types";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-caption uppercase tracking-widest text-teal-dark">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-section-h2 text-foreground">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-body-lg text-muted">{subtitle}</p>
      )}
    </div>
  );
}
