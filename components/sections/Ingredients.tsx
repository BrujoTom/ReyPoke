import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { IngredientChip } from "@/components/shared/IngredientChip";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { INGREDIENTS } from "@/lib/constants";

export function Ingredients() {
  return (
    <section id="ingredientes" className="section-padding bg-teal-soft/30">
      <div className="container-custom">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Ingredientes"
            title="Cada pieza, elegida con intención"
            subtitle="Seleccionamos cada ingrediente pensando en tu salud y en el sabor auténtico del Pacífico."
            align="center"
            className="mx-auto text-center"
          />
        </AnimatedReveal>

        <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:gap-x-8">
          {INGREDIENTS.map((ingredient, index) => (
            <IngredientChip
              key={ingredient.id}
              ingredient={ingredient}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
