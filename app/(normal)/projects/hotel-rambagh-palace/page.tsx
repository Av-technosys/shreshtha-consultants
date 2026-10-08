import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export default function RambaghPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jaipur" },
    { label: "ARCHITECT / PROMOTER", value: "Taj Group of Hotels" },
    { label: "PROJECT SIZE", value: "100 Rooms" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="Hotel Rambagh Palace"
        image="/Projects/hotel rambagh palace/rambagh_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="Once the residence of Jaipur's Maharaja, Rambagh Palace is today one of India's most celebrated luxury heritage hotels under the Taj group. With its regal architecture and royal ambience, it demanded discreet and efficient engineering support. Shreshtha Consultants contributed MEP solutions that maintained the palace's grandeur while integrating modern utilities for world-class hospitality."
        images={[
          "/Projects/hotel rambagh palace/rambagh_img1.png",
          "/Projects/hotel rambagh palace/rambagh_img2.png",
          "/Projects/hotel rambagh palace/rambagh_img3.png"
        ]}
      />
    </main>
  );
}
