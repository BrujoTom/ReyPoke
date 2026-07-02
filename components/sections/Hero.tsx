"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { FloatingElements } from "@/components/shared/FloatingElements";
import { HERO_FLOATING_CHIPS, ORDER_URL } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen overflow-hidden pt-24 md:pt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-1/4 top-0 h-[80vh] w-[80vw] rounded-full bg-coral/8 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-1/4 bottom-0 h-[60vh] w-[60vw] rounded-full bg-teal-soft/40 blur-3xl"
      />

      <div className="container-custom grid min-h-[calc(100vh-6rem)] items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="order-2 flex flex-col justify-center lg:order-1">
          <AnimatedReveal>
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-pill border border-white/30 bg-white/70 px-4 py-2 text-sm font-medium text-foreground shadow-glass backdrop-blur-md">
              <span aria-hidden>🥢</span>
              Delivery en menos de 30 min
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <h1 className="font-display text-hero-h1 text-foreground">
              Frescura real.
              <br />
              <span className="text-teal-dark">Entregada en minutos.</span>
            </h1>
          </AnimatedReveal>

          <AnimatedReveal delay={0.2}>
            <p className="mt-6 max-w-lg text-body-lg text-muted">
              Poke bowls hechos al momento con pescado cortado a mano cada
              mañana. Saludable, rápido y con sabor de primera.
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.3}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton href={ORDER_URL} variant="primary" size="lg" showArrow>
                Pedir Ahora
              </CTAButton>
              <CTAButton
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection("menu")}
              >
                Ver Carta
              </CTAButton>
            </div>
          </AnimatedReveal>
        </div>

        <AnimatedReveal delay={0.15} className="relative order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] max-h-[70vh] w-full max-w-lg lg:max-h-none lg:max-w-none">
            <motion.div
              style={{ y: imageY }}
              className="relative h-full w-full overflow-hidden rounded-xl shadow-soft-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=85"
                alt="Poke bowl fresco con salmón, aguacate y edamame"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 55vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-coral/5" />
            </motion.div>
            <FloatingElements chips={HERO_FLOATING_CHIPS} />
          </div>
        </AnimatedReveal>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection("historia")}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted focus-ring"
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Desplazarse hacia abajo"
      >
        <span className="h-8 w-px animate-scroll-line bg-teal/40" />
        <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
      </motion.button>
    </section>
  );
}
