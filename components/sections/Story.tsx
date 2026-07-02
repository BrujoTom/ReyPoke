import Image from "next/image";
import { Leaf, Sparkles, Truck } from "lucide-react";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const STORY_BULLETS = [
  {
    icon: Leaf,
    text: "Pescado seleccionado y cortado a mano cada mañana",
  },
  {
    icon: Sparkles,
    text: "Recetas balanceadas por nutricionistas certificados",
  },
  {
    icon: Truck,
    text: "De nuestra cocina a tu puerta en menos de 30 minutos",
  },
];

export function Story() {
  return (
    <section id="historia" className="section-padding bg-sand/50">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <AnimatedReveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-soft-lg">
                <Image
                  src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=900&q=80"
                  alt="Preparación artesanal de poke bowl con ingredientes frescos"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={0.2}>
              <div className="absolute -bottom-6 -right-4 rounded-lg bg-coral px-6 py-5 shadow-soft-lg md:-right-8">
                <p className="font-display text-3xl font-bold text-foreground md:text-4xl">
                  100%
                </p>
                <p className="mt-1 max-w-[140px] text-sm font-semibold leading-snug text-foreground/80">
                  ingredientes frescos, cero congelados
                </p>
              </div>
            </AnimatedReveal>
          </div>

          <div className="order-1 lg:order-2">
            <AnimatedReveal>
              <SectionHeading
                eyebrow="Nuestra historia"
                title="Del océano a tu bowl, sin atajos"
                subtitle="Rey Poke nació con una obsesión simple: servir poke como debe ser — fresco, honesto y hecho al momento."
              />
            </AnimatedReveal>

            <AnimatedReveal delay={0.15}>
              <p className="mt-6 text-body-lg text-muted">
                Inspirados en la tradición hawaiana y la energía del Pacífico,
                seleccionamos cada ingrediente con el mismo cuidado que pondrías
                en tu mesa. Sin congelados, sin compromisos.
              </p>
            </AnimatedReveal>

            <ul className="mt-8 space-y-4">
              {STORY_BULLETS.map((bullet, i) => (
                <AnimatedReveal key={bullet.text} delay={0.2 + i * 0.08}>
                  <li className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-teal-soft text-teal-dark">
                      <bullet.icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="pt-2 text-foreground">{bullet.text}</span>
                  </li>
                </AnimatedReveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
