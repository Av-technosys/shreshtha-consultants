import type { Metadata } from "next";
import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/projects/nokha-library",
  },
  title: "Nokha Library MEP Project | Shreshtha Consultants",
  description:
    "MEP consultancy for Nokha Library, Rajasthan. Sustainable rainwater management design reusing terrace runoff for student knowledge hub by Shreshtha Consultants",
};

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
          "/Projects/nokha library/nokha library_img2.jpg",
          "/Projects/nokha library/nokha library_img3.png"
        ]}
      />
    </main>
  );
}
