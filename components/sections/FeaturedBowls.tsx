import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { BowlCard } from "@/components/shared/BowlCard";
import { CTAButton } from "@/components/shared/CTAButton";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FEATURED_BOWLS, ORDER_URL } from "@/lib/constants";

export function FeaturedBowls() {
  return (
    <section id="menu" className="section-padding bg-sand/30">
      <div className="container-custom">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Nuestra carta"
            title="Bowls que conquistan"
            subtitle="Los favoritos de nuestra comunidad. Cada uno, una experiencia distinta."
          />
        </AnimatedReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_BOWLS.map((bowl, index) => (
            <AnimatedReveal key={bowl.id} delay={index * 0.08}>
              <BowlCard bowl={bowl} />
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal delay={0.4}>
          <div className="mt-12 flex justify-center">
            <CTAButton href={ORDER_URL} variant="secondary" size="lg">
              Ver carta completa
            </CTAButton>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
