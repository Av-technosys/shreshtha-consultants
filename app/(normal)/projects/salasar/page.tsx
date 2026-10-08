import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export default function SalasarPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jaipur" },
    { label: "ARCHITECT / PROMOTER", value: "Sandeep Khandelwal" },
    { label: "PROJECT SIZE", value: "28000sq.ft" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="Salasar Balaji Creation"
        image="/Projects/salasar balaji creation/salasar balaji creation_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="Salasar Balaji, a name associated with trust and tradition, extends its presence into modern industrial operations. Shreshtha Consultants provided full MEP consultancy, including air conditioning systems with specialized recovery filters to extract gold and silver from wastewater. Our design integrated STP and ETP treatment, enabling recycled water to be reused in flushing and ensuring improved drainage throughout the facility. By merging efficiency with sustainability, we supported Salasar Balaji's transition into a future-ready industrial setup."
        images={[
          "/Projects/salasar balaji creation/salasar balaji creation.png"
        ]}
      />
    </main>
  );
}
