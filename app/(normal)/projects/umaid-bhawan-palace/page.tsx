import type { Metadata } from "next";
import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/projects/umaid-bhawan-palace",
  },
  title: "Umaid Bhawan Palace MEP Project | Shreshtha Consultants",
  description:
    "Shreshtha Consultants executed the MEP renovation for Umaid Bhawan Palace, Jodhpur, a Taj Group heritage hotel & royal residence. Call us to discuss your project",
};

export default function UmaidBhawanPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jodhpur" },
    { label: "ARCHITECT / PROMOTER", value: "Taj Group of Hotels" },
    { label: "PROJECT SIZE", value: "Renovation" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="Umaid Bhawan Palace"
        image="/Projects/umaid bhawan palace/umaid bhawan_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="This is the product description. It provides a brief overview of the product's features, benefits, and uses. Add any necessary details here to inform users about the."
        images={[
          "/Projects/umaid bhawan palace/umaid bhawan_img1.png",
          "/Projects/umaid bhawan palace/umaid bhawan_img3.png"
        ]}
      />
    </main>
  );
}
