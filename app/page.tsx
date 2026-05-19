import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Pricing } from "@/components/Pricing";
import { Trust } from "@/components/Trust";
import { CTA } from "@/components/CTA";
import { SiteFooter } from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream">
      <SiteHeader />
      <Hero />
      <HowItWorks />
      <WhatWeDo />
      <Pricing />
      <Trust />
      <CTA />
      <SiteFooter />
    </main>
  );
}
