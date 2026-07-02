import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturedBowls } from "@/components/sections/FeaturedBowls";
import { Ingredients } from "@/components/sections/Ingredients";
import { Benefits } from "@/components/sections/Benefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { Promotions } from "@/components/sections/Promotions";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Story />
      <HowItWorks />
      <FeaturedBowls />
      <Ingredients />
      <Benefits />
      <Testimonials />
      <Promotions />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
