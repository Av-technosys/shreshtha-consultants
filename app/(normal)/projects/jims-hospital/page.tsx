import type { Metadata } from "next";
import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/projects/jims-hospital",
  },
  title: "JIMS Hospital MEP Project | Shreshtha Consultants",
  description:
    "MEP consultancy for JIMS Hospital, Kolkata, an emerging healthcare & medical education hub. HVAC, electrical & safety systems by Shreshtha Consultants.",
};

export default function JimsPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Kolkata" },
    { label: "ARCHITECT / PROMOTER", value: "Sincere Architects Pvt Ltd." },
    { label: "PROJECT SIZE", value: "100000sq.ft" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="JIMS Hospital"
        image="/Projects/jims/jims_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="JIMS is an emerging hub for healthcare and medical education, offering multispeciality treatment along with training for future doctors. Shreshtha Consultants provided complete MEP solutions, designing integrated systems for HVAC, electrical distribution, and safety services to meet the dual demands of a hospital and teaching institute."
        images={[
          "/Projects/jims/jims_img1.png",
          "/Projects/jims/jims_img2.jpeg",
          "/Projects/jims/jims_img3.png"
        ]}
      />
    </main>
  );
}
