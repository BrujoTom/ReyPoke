"use client";

import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="opiniones" className="section-padding bg-sand/40">
      <div className="container-custom">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Opiniones"
            title="Lo que dice nuestra comunidad"
            subtitle="Miles de bowls entregados. Esto es lo que opinan quienes ya probaron."
            align="center"
            className="mx-auto text-center"
          />
        </AnimatedReveal>

        <AnimatedReveal delay={0.15} className="mt-14">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="mx-auto max-w-4xl px-12"
          >
            <CarouselContent className="-ml-4">
              {TESTIMONIALS.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="basis-full pl-4 md:basis-1/2"
                >
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </AnimatedReveal>
      </div>
    </section>
  );
}
