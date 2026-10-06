import { AiSection } from "@/components/home/ai-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { ProposalSection } from "@/components/home/proposal-section";
import { ServicesSection } from "@/components/home/services-section";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { TrustSection } from "@/components/home/trust-section";
import { Inter } from "next/font/google";

const bodyFont = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${bodyFont.className} overflow-hidden bg-[#f7f6f2] text-[#101418]`}>
      <HeroSection />
      <TrustSection />
      <StatsSection />
      <ServicesSection />
      <AiSection />
      <ProposalSection />
      <ProjectsSection />
      <TestimonialsSection />
    </main>
  );
}
