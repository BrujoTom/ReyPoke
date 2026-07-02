import type { ReactNode } from "react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Bowl {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  image: string;
  tags: string[];
}

export interface Ingredient {
  id: string;
  name: string;
  image: string;
  nutritionFact: string;
}

export interface HowItWorksStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
  stat?: {
    value: number;
    suffix: string;
    decimals?: number;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  quote: string;
  location: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FloatingChip {
  id: string;
  label: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  delay: number;
}

export type CTAButtonVariant = "primary" | "secondary" | "ghost" | "dark";
export type CTAButtonSize = "sm" | "md" | "lg";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export interface AnimatedRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}
