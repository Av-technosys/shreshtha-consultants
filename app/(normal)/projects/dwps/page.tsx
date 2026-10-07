import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export default function DwpsPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Ajmer" },
    { label: "ARCHITECT / PROMOTER", value: "-" },
    { label: "PROJECT SIZE", value: "-" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="Delhi World Public School"
        image="/Projects/dwps/dwps_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="This is the product description. It provides a brief overview of the product's features, benefits, and uses. Add any necessary details here to inform users about the."
        images={[
          "/Projects/dwps/dwps_img1.png",
          "/Projects/dwps/dwps_img2.png",
          "/Projects/dwps/dwps_img3.png"
        ]}
      />
    </main>
  );
}
