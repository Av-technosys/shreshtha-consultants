import type { Metadata } from "next";
import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/projects/delhi-world-public-school",
  },
  title: "Delhi World Public School MEP Project | Shreshtha Consultants",
  description:
    "Shreshtha Consultants delivered MEP engineering for Delhi World Public School's new academic blocks in Ajmer, with a safe, sustainable & future-ready design.",
};

export default function DwpsPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Ajmer" },
    { label: "ARCHITECT / PROMOTER", value: "-" },
    { label: "PROJECT SIZE", value: "-" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="Delhi World Public School"
        image="/Projects/dwps/dwps_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="This is the product description. It provides a brief overview of the product's features, benefits, and uses. Add any necessary details here to inform users about the."
        images={[
          "/Projects/dwps/dwps_img1.png",
          "/Projects/dwps/dwps_img3.png"
        ]}
      />
    </main>
  );
}
