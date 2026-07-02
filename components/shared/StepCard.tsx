"use client";

import {
  Bike,
  SlidersHorizontal,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import type { HowItWorksStep } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  UtensilsCrossed,
  SlidersHorizontal,
  Bike,
};

interface StepCardProps {
  step: HowItWorksStep;
  index: number;
  isLast?: boolean;
}

export function StepCard({ step, index, isLast = false }: StepCardProps) {
  const Icon = iconMap[step.icon] ?? UtensilsCrossed;

  return (
    <AnimatedReveal delay={index * 0.1} className="relative flex-1">
      <div className="group relative h-full rounded-lg border border-border-subtle/60 bg-surface p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-hover">
        {!isLast && (
          <div
            aria-hidden
            className="absolute right-0 top-1/2 hidden h-px w-8 translate-x-full bg-gradient-to-r from-teal/40 to-transparent lg:block"
          />
        )}
        <span className="font-display text-5xl font-bold text-teal-soft transition-colors group-hover:text-coral-soft">
          {step.number}
        </span>
        <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-sm bg-teal-soft text-teal-dark">
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
          {step.title}
        </h3>
        <p className="mt-2 text-muted">{step.description}</p>
      </div>
    </AnimatedReveal>
  );
}
