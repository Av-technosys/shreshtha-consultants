import type { Metadata } from "next";
import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/projects/the-sky-bunglows",
  },
  title: "The Sky Bungalows MEP Project | Shreshtha Consultants",
  description:
    "MEP consultancy for The Sky Bungalows, Jaipur. High-end air conditioning, electrification & water management for luxury residents by Shreshtha Consultants.",
};

export default function TheSkyBunglowsPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jaipur, Rajasthan" },
    { label: "ARCHITECT / PROMOTER", value: "Luxury Residential" },
    { label: "PROJECT SIZE", value: "High-End Residential" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="The Sky Bungalows"
        image="/Projects/kgk amulya/kgk amulya_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="MEP consultancy for The Sky Bungalows, Jaipur. High-end air conditioning, electrification & water management for luxury residents delivered by Shreshtha Consultants."
        images={[
          "/Projects/kgk amulya/kgk amulya_img1.png",
          "/Projects/kgk amulya/kgk amulya_img2.png"
        ]}
      />
    </main>
  );
}
