import type { Metadata } from "next";
import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/projects/taj-pratap-mahal",
  },
  title: "Taj Pratap Mahal MEP Project | Shreshtha Consultants",
  description:
    "MEP consultancy for Taj Pratap Mahal, Pushkar, Rajasthan. A 125,000 sq. ft heritage-style property. Electrical, HVAC & plumbing design by Shreshtha Consultants.",
};

export default function TajPratapMahalPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Pushkar, Rajasthan" },
    { label: "ARCHITECT / PROMOTER", value: "Taj Group" },
    { label: "PROJECT SIZE", value: "125000sq.ft" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="Taj Pratap Mahal"
        image="/Projects/hotel suryagarh palace/suryagarh_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="MEP consultancy for Taj Pratap Mahal, Pushkar, Rajasthan. A 125,000 sq. ft heritage-style property with robust electrical, HVAC & plumbing design delivered by Shreshtha Consultants."
        images={[
          "/Projects/hotel suryagarh palace/suryagarh_img1.png",
          "/Projects/hotel suryagarh palace/suryagarh_img2.png"
        ]}
      />
    </main>
  );
}
