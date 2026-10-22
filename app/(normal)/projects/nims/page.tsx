import type { Metadata } from "next";
import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/projects/nims",
  },
  title: "NIMS Medical University MEP Project | Shreshtha Consultants",
  description:
    "MEP consultancy for NIMS, Jaipur. Reliable power, climate control & safety systems for a multispeciality hospital and academic campus by Shreshtha Consultants.",
};

export default function NimsPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jaipur, Rajasthan" },
    { label: "ARCHITECT / PROMOTER", value: "NIMS University" },
    { label: "PROJECT SIZE", value: "Campus Scale" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="NIMS Medical University"
        image="/Projects/jims/jims_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="MEP consultancy for NIMS, Jaipur. Reliable power, climate control & safety systems for a multispeciality hospital and academic campus delivered by Shreshtha Consultants."
        images={[
          "/Projects/jims/jims_img1.png",
          "/Projects/jims/jims_img2.png"
        ]}
      />
    </main>
  );
}
