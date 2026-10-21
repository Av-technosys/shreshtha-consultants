import type { Metadata } from "next";
import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/projects/narsi-villa",
  },
  title: "Narsi Villa MEP Project | Shreshtha Consultants",
  description:
    "MEP consultancy for Narsi Villa, Nokha. Premium residential design with efficient electrification, HVAC, plumbing & safety systems by Shreshtha Consultants.",
};

export default function NarsiVillaPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Nokha" },
    { label: "ARCHITECT / PROMOTER", value: "Sanjay Puri Architects" },
    { label: "PROJECT SIZE", value: "50000sq.ft" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="Narsi Villa"
        image="/Projects/narsi villa/narsi villa_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="Narsi Villa is a premium residential property crafted for elegant living. Shreshtha Consultants provided complete MEP consultancy, ensuring modern comforts through efficient electrification, HVAC, plumbing, and safety systems integrated within its luxury design."
        images={[
          "/Projects/narsi villa/narsi villa_img1.png",
          "/Projects/narsi villa/narsi villa_img2.png",
          "/Projects/narsi villa/narsi villa_img3.png"
        ]}
      />
    </main>
  );
}
