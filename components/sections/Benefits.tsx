"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Award, Clock, Heart, Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BENEFITS } from "@/lib/constants";
import type { Benefit } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  Clock,
  Heart,
  Award,
};

function CountUp({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();
  const finalValue =
    decimals > 0 ? value.toFixed(decimals) : String(value);
  const [display, setDisplay] = useState(
    prefersReducedMotion ? finalValue : decimals > 0 ? "0.0" : "0"
  );

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    const duration = 1200;
    const start = performance.now();
    let frameId = 0;

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = value * eased;
      setDisplay(
        decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString()
      );
      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, decimals, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <span className="font-display text-4xl font-bold text-coral">
        {finalValue}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-coral">
      {display}
      {suffix}
    </span>
  );
}

function BenefitCard({ benefit, index }: { benefit: Benefit; index: number }) {
  const Icon = iconMap[benefit.icon] ?? Leaf;

  return (
    <AnimatedReveal delay={index * 0.1}>
      <motion.div
        className="group h-full rounded-lg border border-border-subtle/60 bg-surface p-8 shadow-soft transition-shadow duration-300 hover:shadow-soft-hover"
        whileHover={{ y: -2 }}
      >
        {benefit.stat && (
          <CountUp
            value={benefit.stat.value}
            suffix={benefit.stat.suffix}
            decimals={benefit.stat.decimals}
          />
        )}
        <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-sm bg-coral-soft text-coral-dark transition-colors group-hover:bg-coral group-hover:text-foreground">
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
          {benefit.title}
        </h3>
        <p className="mt-2 text-muted">{benefit.description}</p>
      </motion.div>
    </AnimatedReveal>
  );
}

export function Benefits() {
  return (
    <section id="beneficios" className="section-padding bg-background">
      <div className="container-custom">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Por qué Rey Poke"
            title="Más que comida rápida"
            subtitle="+50,000 bowls entregados. 4.9 de valoración. Una promesa que cumplimos en cada pedido."
            align="center"
            className="mx-auto text-center"
          />
        </AnimatedReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, index) => (
            <BenefitCard key={benefit.id} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
