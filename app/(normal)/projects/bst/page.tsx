import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export default function BstPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jaipur" },
    { label: "ARCHITECT / PROMOTER", value: "Sincere Architects Pvt Ltd." },
    { label: "PROJECT SIZE", value: "100000sq.ft" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="BST Hospital"
        image="/projects/bst/bst_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="BST Hospital is a growing healthcare facility in Jaipur, committed to affordable and reliable patient care. Shreshtha Consultants executed full MEP consultancy, delivering modern HVAC solutions, optimized electrification, and safety systems tailored for hospitals, ensuring uninterrupted services and patient comfort."
        images={[
          "/projects/bst/bst_img1.png",
          "/projects/bst/bst_img2.png",
          "/projects/bst/bst_img3.png"
        ]}
      />
    </main>
  );
}
