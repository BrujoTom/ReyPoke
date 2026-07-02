"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { FloatingChip } from "@/types";

interface FloatingBadgeProps {
  label: string;
  delay?: number;
  className?: string;
}

export function FloatingBadge({ label, delay = 0, className }: FloatingBadgeProps) {
  return (
    <motion.div
      className={cn(
        "rounded-pill border border-white/20 bg-white/70 px-4 py-2 text-sm font-medium text-foreground shadow-glass backdrop-blur-md",
        className
      )}
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {label}
    </motion.div>
  );
}

interface FloatingElementsProps {
  chips: FloatingChip[];
}

export function FloatingElements({ chips }: FloatingElementsProps) {
  return (
    <>
      {chips.map((chip) => (
        <div
          key={chip.id}
          className="absolute hidden lg:block"
          style={chip.position}
        >
          <FloatingBadge label={chip.label} delay={chip.delay} />
        </div>
      ))}
    </>
  );
}
