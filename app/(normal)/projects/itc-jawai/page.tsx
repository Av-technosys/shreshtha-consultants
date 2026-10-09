import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export default function SuryagarhPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jawai Rajasthan" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="Itc jawai"
        image="/Projects/itc jawai/itc-jawai_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="Nestled amidst the rugged landscapes of Rajasthan, ITC Jawai is a luxury retreat that blends sustainable hospitality with the region’s natural beauty. Shreshtha Consultants delivered MEP engineering solutions designed to support the resort’s premium guest experience, integrating efficient building services while preserving the architectural vision and ensuring long-term operational reliability. "
        images={[
          "/Projects/itc jawai/itc-jawai-img1.png",
          "/Projects/itc jawai/itc-jawai-img2.png",
          "/Projects/itc jawai/itc-jawai-img3.png"
        ]}
      />
    </main>
  );
}
