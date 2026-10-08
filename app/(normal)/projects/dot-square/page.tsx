import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export default function DotSquarePage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jaipur" },
    { label: "ARCHITECT / PROMOTER", value: "Lorem" },
    { label: "PROJECT SIZE", value: "1,00,000 Sq.ft" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="Dot Square"
        image="/Projects/dot square/dot square_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="Dot Square, a growing digital solutions and IT services company, established its new office in Jaipur to support its expanding team and operations. Shreshtha Consultancy was engaged to provide end-to-end MEP services for the new workspace. Our scope included intelligent electrical planning, efficient HVAC design, and robust plumbing systems, all tailored to meet the dynamic needs of a modern tech-driven office. The design focused on energy efficiency, occupant comfort, and smooth system integration to ensure a future-ready working environment."
        images={[
          "/Projects/dot square/dot square_img1.png",
          "/Projects/dot square/dot square_img2.png",
          "/Projects/dot square/dot square_img3.png"
        ]}
      />
    </main>
  );
}
