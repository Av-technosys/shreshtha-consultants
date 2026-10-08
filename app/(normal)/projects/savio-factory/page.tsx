import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export default function SavioFactoryPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jaipur" },
    { label: "ARCHITECT / PROMOTER", value: "Sandeep Khandelwal" },
    { label: "PROJECT SIZE", value: "30000sq.ft" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="Savio Factory"
        image="/Projects/savio factory/Savio factory_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="Savio Factory is a state-of-the-art manufacturing facility focused on precision, quality, and innovation. Shreshtha Consultants provided complete MEP consultancy, designing advanced air conditioning systems and specialized recovery filters for gold and silver particles. Wastewater from processes was routed through STP and recovery tanks, where valuable particles were reclaimed before the balance was treated in the ETP. Both STP and ETP-treated water were reused in flushing systems, reducing water consumption. Along with improved drainage, our solutions combined environmental responsibility with operational efficiency, setting a benchmark in sustainable industrial design."
        images={[
          "/Projects/savio factory/Savio factory_img1.png",
          "/Projects/savio factory/Savio factory_img2.png",
          "/Projects/savio factory/Savio factory_img3.png"
        ]}
      />
    </main>
  );
}
