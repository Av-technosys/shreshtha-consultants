import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export default function NokhaPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jaipur" },
    { label: "ARCHITECT / PROMOTER", value: "Sanjay Puri Architect" },
    { label: "PROJECT SIZE", value: "25000sq.ft" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="Nokha Library"
        image="/Projects/nokha library/nokha library_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="Nokha Library is a vital knowledge hub for students and competitive exam aspirants. Shreshtha Consultants provided MEP consultancy, designing rainwater management systems that reused terrace runoff from natural grass surfaces for drainage, ensuring sustainable water use."
        images={[
          "/Projects/nokha library/nokha library_img1.png",
          "/Projects/nokha library/nokha library_img2.png",
          "/Projects/nokha library/nokha library_img3.png"
        ]}
      />
    </main>
  );
}
