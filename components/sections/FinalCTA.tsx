import Image from "next/image";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { ORDER_URL } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section id="pedir" className="relative overflow-hidden">
      <div className="relative min-h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1600&q=80"
          alt="Mesa con poke bowls frescos listos para disfrutar"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-teal-dark/85" />

        <div className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center px-container py-30 text-center">
          <AnimatedReveal>
            <h2 className="max-w-3xl font-display text-section-h2 text-white md:text-[clamp(2.5rem,5vw,4.5rem)]">
              ¿Listo para tu próximo bowl?
            </h2>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <p className="mt-4 max-w-lg text-body-lg text-white/80">
              Frescura real, entregada en minutos. Tu primer pedido con 20% de
              descuento te espera.
            </p>
          </AnimatedReveal>
          <AnimatedReveal delay={0.2}>
            <div className="mt-8">
              <CTAButton href={ORDER_URL} variant="primary" size="lg" showArrow>
                Pedir Ahora
              </CTAButton>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
