import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export default function GoyalHousePage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jaipur" },
    { label: "ARCHITECT / PROMOTER", value: "Sanjay Puri Architect" },
    { label: "PROJECT SIZE", value: "20000sq.ft" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero
        title="Goyal House"
        image="/Projects/goyal house/goyal house_hero.png"
      />
      <ProjectDetails
        info={projectInfo}
        description="Goyal House is a landmark residence and community space blending heritage with modern living. Shreshtha Consultants delivered full MEP consultancy, integrating reliable electrical, HVAC, and plumbing systems that supported both daily living and social gatherings."
        images={[
          "/Projects/goyal house/goyal house_img1.png",
          "/Projects/goyal house/goyal house_img2.png",
          "/Projects/goyal house/goyal house_img3.png",
        ]}
      />
    </main>
  );
}
