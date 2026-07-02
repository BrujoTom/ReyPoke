"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn, formatPrice } from "@/lib/utils";
import type { Bowl } from "@/types";

interface BowlCardProps {
  bowl: Bowl;
  className?: string;
}

export function BowlCard({ bowl, className }: BowlCardProps) {
  return (
    <motion.article
      className={cn("group relative", className)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="overflow-hidden rounded-lg bg-surface shadow-soft transition-shadow duration-300 group-hover:shadow-soft-hover">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={bowl.image}
            alt={`${bowl.name} — ${bowl.description}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
          />
          {bowl.tags[0] && (
            <Badge
              variant="coral"
              className="absolute left-4 top-4 z-10"
            >
              {bowl.tags[0]}
            </Badge>
          )}
          <motion.button
            className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-coral text-foreground opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100 md:opacity-0 max-md:opacity-100 focus-ring"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Agregar ${bowl.name}`}
          >
            <Plus className="h-5 w-5" strokeWidth={1.5} />
          </motion.button>
        </div>
        <div className="space-y-2 p-5">
          <h3 className="font-display text-card-h3 text-foreground">
            {bowl.name}
          </h3>
          <p className="line-clamp-2 text-sm text-muted">{bowl.description}</p>
          <div className="flex items-center justify-between pt-2">
            <span className="font-display text-xl font-bold text-coral">
              {formatPrice(bowl.price)}
            </span>
            <Link
              href="#pedir"
              className="text-sm font-semibold text-teal-dark transition-colors hover:text-teal focus-ring rounded-sm"
            >
              Agregar
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
