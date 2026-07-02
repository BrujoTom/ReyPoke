"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-lg border border-border-subtle/60 bg-surface p-8 shadow-soft",
        className
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute right-6 top-4 font-display text-8xl leading-none text-teal-soft/80"
      >
        &ldquo;
      </span>
      <div className="mb-4 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-coral text-coral"
            strokeWidth={1.5}
          />
        ))}
      </div>
      <blockquote className="relative z-10 flex-1 text-lg leading-relaxed text-foreground">
        {testimonial.quote}
      </blockquote>
      <div className="mt-6 flex items-center gap-3 border-t border-border-subtle/60 pt-6">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}
