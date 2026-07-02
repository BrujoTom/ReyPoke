"use client";

import { useEffect, useState } from "react";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { Badge } from "@/components/ui/badge";
import { ORDER_URL, PROMO_CODE, PROMO_DISCOUNT } from "@/lib/constants";

export function Promotions() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds -= 1;
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <section id="promociones" className="section-padding">
      <div className="container-custom">
        <AnimatedReveal>
          <div className="relative overflow-hidden rounded-xl bg-coral-soft px-8 py-12 md:px-16 md:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-coral/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-teal/10 blur-3xl"
            />

            <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <Badge variant="coral" className="mb-4">
                  Oferta de bienvenida
                </Badge>
                <h2 className="font-display text-section-h2 text-foreground">
                  {PROMO_DISCOUNT}% en tu primer pedido
                </h2>
                <p className="mt-3 text-body-lg text-foreground/80">
                  Usa el código{" "}
                  <span className="rounded-sm bg-surface px-2 py-0.5 font-mono font-bold text-teal-dark">
                    {PROMO_CODE}
                  </span>{" "}
                  al checkout y disfruta tu primer bowl con descuento.
                </p>
              </div>

              <div className="flex flex-col items-start gap-4 md:items-end">
                <div
                  className="flex gap-3 text-foreground"
                  aria-label="Tiempo restante de la promoción"
                >
                  {[
                    { value: pad(timeLeft.hours), label: "hrs" },
                    { value: pad(timeLeft.minutes), label: "min" },
                    { value: pad(timeLeft.seconds), label: "seg" },
                  ].map((unit) => (
                    <div
                      key={unit.label}
                      className="flex flex-col items-center rounded-md bg-surface/80 px-4 py-3 shadow-soft backdrop-blur-sm"
                    >
                      <span className="font-display text-2xl font-bold">
                        {unit.value}
                      </span>
                      <span className="text-caption text-muted">{unit.label}</span>
                    </div>
                  ))}
                </div>
                <CTAButton href={ORDER_URL} variant="primary" size="lg" showArrow>
                  Pedir con descuento
                </CTAButton>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
