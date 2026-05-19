import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Pricing } from "@/components/Pricing";
import { Trust } from "@/components/Trust";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <WhatWeDo />
      <Pricing />
      <Trust />
      <CTA />
    </main>
  );
}
