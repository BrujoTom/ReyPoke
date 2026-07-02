import { SectionHeading } from "@/components/shared/SectionHeading";
import { StepCard } from "@/components/shared/StepCard";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding bg-background">
      <div className="container-custom">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Simple y rápido"
            title="Tu bowl en tres pasos"
            subtitle="Desde elegir hasta recibir, todo fluye. Sin complicaciones."
            align="center"
            className="mx-auto mb-16 text-center"
          />
        </AnimatedReveal>

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              isLast={index === HOW_IT_WORKS_STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
