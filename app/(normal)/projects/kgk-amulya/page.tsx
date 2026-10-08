import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export default function KgkAmulyaPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jaipur" },
    { label: "ARCHITECT / PROMOTER", value: "Tushar Sogani" },
    { label: "PROJECT SIZE", value: "2,90,000sq.ft" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="KGK Amulya"
        image="/Projects/kgk amulya/kgk amulya_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="For the globally renowned KGK Group, Shreshtha Consultants provided complete MEP consultancy across its residential projects. Our designs emphasized energy efficiency, safety, and sustainability while matching the luxury standards of one of the world's leading names in gems, jewellery, and real estate."
        images={[
          "/Projects/kgk amulya/kgk amulya_img1.png",
          "/Projects/kgk amulya/kgk amulya_img2.png",
          "/Projects/kgk amulya/kgk amulya_img3.png"
        ]}
      />
    </main>
  );
}
