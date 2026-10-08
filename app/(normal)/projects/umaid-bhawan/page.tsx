import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export default function UmaidBhawanPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jodhpur" },
    { label: "ARCHITECT / PROMOTER", value: "Taj Group of Hotels" },
    { label: "PROJECT SIZE", value: "Renovation" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="Umaid Bhawan Palace"
        image="/projects/umaid bhawan palace/umaid bhawan_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="This is the product description. It provides a brief overview of the product's features, benefits, and uses. Add any necessary details here to inform users about the."
        images={[
          "/projects/umaid bhawan palace/umaid bhawan_img1.png",
          "/projects/umaid bhawan palace/umaid bhawan_img2.png",
          "/projects/umaid bhawan palace/umaid bhawan_img3.png"
        ]}
      />
    </main>
  );
}
