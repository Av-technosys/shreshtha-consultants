import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export default function GTLandmarkPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jaipur" },
    { label: "ARCHITECT / PROMOTER", value: "Bardiya Developers Pvt.Ltd." },
    { label: "PROJECT SIZE", value: "250000sq.ft" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="GT Landmark"
        image="/Projects/gt Landmark/gt Landmark_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="GT Landmark, Jaipur, is a vibrant shopping and entertainment hub in Malviya Nagar, known for its mix of fashion outlets, lifestyle stores, and one of the busiest multiplexes in the city. As MEP consultants, Shreshtha Consultants designed and executed the complete air-cooled chiller system and managed 33KV electrification through supply from JVVNL. We introduced a single-point metering system for efficient energy management and planned the DG installation strategically above the electrical room, ensuring safety, reliability, and operational ease."
        images={[
          "/Projects/gt Landmark/gt Landmark_img1.png"
        ]}
      />
    </main>
  );
}
