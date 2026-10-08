import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export default function UrbanSquarePage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Udaipur" },
    { label: "ARCHITECT / PROMOTER", value: "Bhumika Realty" },
    { label: "PROJECT SIZE", value: "1800000sq.ft" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="Urban Square"
        image="/Projects/urban square/urban square_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="Urban Square Mall, stands as Rajasthan's largest mixed-use destination, encompassing 1.8 million sq. ft. . This iconic hub seamlessly integrates retail, hospitality, and entertainment, redefining the commercial landscape of Udaipur.Shreshtha Consultancy provided comprehensive MEP (Mechanical, Electrical, and Plumbing) design solutions for this landmark project. Our services included the implementation of efficient HVAC systems, optimized electrical layouts, and sustainable water management systems, all tailored to accommodate the high footfall and diverse functionalities of the space. The MEP design emphasized safety, comfort, and long-term operational efficiency."
        images={[
          "/Projects/urban square/urban square_img1.png",
          "/Projects/urban square/urban square_img2.png",
          "/Projects/urban square/urban square_img3.png"
        ]}
      />
    </main>
  );
}
