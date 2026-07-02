import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <AnimatedReveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Preguntas frecuentes"
              subtitle="Todo lo que necesitas saber antes de tu primer pedido."
            />
          </AnimatedReveal>

          <AnimatedReveal delay={0.15}>
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
