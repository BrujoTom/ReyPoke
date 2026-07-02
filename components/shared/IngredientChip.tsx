"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Ingredient } from "@/types";

interface IngredientChipProps {
  ingredient: Ingredient;
  index?: number;
}

export function IngredientChip({ ingredient, index = 0 }: IngredientChipProps) {
  return (
    <motion.div
      className="group relative flex flex-col items-center gap-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative h-24 w-24 overflow-hidden rounded-full shadow-soft transition-transform duration-300 group-hover:scale-105 md:h-28 md:w-28">
        <Image
          src={ingredient.image}
          alt={ingredient.name}
          fill
          sizes="112px"
          className="object-cover"
        />
      </div>
      <p className="text-sm font-semibold text-foreground">{ingredient.name}</p>
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-pill bg-teal-dark px-3 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
        {ingredient.nutritionFact}
      </span>
    </motion.div>
  );
}
