import type { Metadata } from "next";
import { AiSection } from "@/components/home/ai-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { ProposalSection } from "@/components/home/proposal-section";
import { ServicesSection } from "@/components/home/services-section";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { TrustSection } from "@/components/home/trust-section";

export const metadata: Metadata = {
  title: "Shreshtha Consultants – AI-Driven MEP Design Consultants in India",
  description:
    "We are trusted MEP consultants in India offering HVAC, electrical, plumbing & firefighting design with AI-powered drawings and BIM coordination. Request a proposal.",
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/",
  },
};

export default function Home() {
  return (
    <main className="font-inter overflow-hidden bg-[#f7f6f2] text-[#101418]">
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
