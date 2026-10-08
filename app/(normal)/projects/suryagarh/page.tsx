import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export default function SuryagarhPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jalselmer" },
    { label: "ARCHITECT / PROMOTER", value: "Ar. Ravi Gupta" },
    { label: "PROJECT SIZE", value: "11000sq.ft" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="Hotel Suryagarh Palace"
        image="/Projects/hotel suryagarh palace/Suryagargh_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="Suryagarh Palace, known as the &quot;Gateway to the Thar Desert,&quot; is a heritage luxury hotel that blends Rajput architecture with modern hospitality. Shreshtha Consultants provided complete MEP consultancy, designing and implementing systems that complemented the property's historic aesthetic while ensuring seamless comfort, safety, and efficiency for guests."
        images={[
          "/Projects/hotel suryagarh palace/Suryagarh_img1.png",
          "/Projects/hotel suryagarh palace/Suryagarh_img2.png",
          "/Projects/hotel suryagarh palace/Suryagarh_img3.png"
        ]}
      />
    </main>
  );
}
