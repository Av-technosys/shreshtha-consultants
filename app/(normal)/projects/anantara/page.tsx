import type { Metadata } from "next";
import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/projects/anantara",
  },
  title: "Anantara Jewel Bagh MEP Project | Shreshtha Consultants",
  description:
    "MEP consultancy for Anantara Jewel Bagh, Jaipur, Rajasthan. VRV/VRF air conditioning, 11KV electrification & heritage-sensitive rainwater drainage design.",
};

export default function AnantaraPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jaipur" },
    { label: "ARCHITECT / PROMOTER", value: "Anantara Hotels & Resorts" },
    { label: "PROJECT SIZE", value: "100000sq.ft" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="Jewel Bagh"
        image="/Projects/anantara jewel bagh/anantara jewels_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="Anantara Jewel Bagh offers a unique luxury experience through heritage-inspired architecture and tented accommodations. Shreshtha Consultants delivered full MEP consultancy, including VRV/VRF-based air conditioning, a centralized hot water system, and dual plumbing networks for efficiency. We executed 11KV single-point electrification with 100% DG backup, while solving the major challenge of rainwater drainage across step-level floors of the heritage property. Our design integrated rainwater pipes in a way that preserved the aesthetics, combining functionality with heritage sensitivity."
        images={[
          "/Projects/anantara jewel bagh/anantara jewels_img1.png",
          "/Projects/anantara jewel bagh/anantara jewels_img2.png",
          "/Projects/anantara jewel bagh/anantara jewels_img3.png"
        ]}
      />
    </main>
  );
}
