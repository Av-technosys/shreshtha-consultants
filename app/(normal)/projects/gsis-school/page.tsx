import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export default function GsisPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jaipur" },
    { label: "ARCHITECT / PROMOTER", value: "Sincere Architects Pvt Ltd." },
    { label: "PROJECT SIZE", value: "100000sq.ft" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="GSIS School"
        image="/Projects/gsis school/gsis school.jpg"
      />
      <ProjectDetails 
        info={projectInfo}
        description="GSIS is an international-style school offering modern, student-centric learning. Shreshtha Consultants delivered complete MEP solutions, including VRV/VRF-based air conditioning and a rainwater harvesting system, ensuring energy efficiency and sustainability while enhancing the overall campus experience."
        images={[
          "/Projects/gsis school/gsis school_img1.png",
          "/Projects/gsis school/gsis school_img2.png",
          "/Projects/gsis school/gsis school_img3.png"
        ]}
      />
    </main>
  );
}
