import type { Metadata } from "next";
import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/projects/world-trade-park",
  },
  title: "World Trade Park MEP Project | Shreshtha Consultants",
  description:
    "MEP consultancy for World Trade Park, Jaipur, Rajasthan. Advanced HVAC, STP/ETP water recovery & sustainable industrial design solutions by Shreshtha Consultants.",
};

export default function WorldTradeParkPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jaipur" },
    { label: "ARCHITECT / PROMOTER", value: "Dr. Anoop Bartaria" },
    { label: "PROJECT SIZE", value: "2400000 sq. ft" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="World Trade Park"
        image="/Projects/world trade park/wtp-hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="World Trade Park (WTP) is one of Asia’s most iconic shopping destinations, renowned for its unique architecture and retail experience. Shreshtha Consultants delivered comprehensive MEP (Mechanical, Electrical, and Plumbing) consultancy to ensure seamless and sustainable operations for this landmark destination."
        images={[
          "/Projects/world trade park/wtp-img1.png",
          "/Projects/world trade park/wtp-img2.png",
          "/Projects/world trade park/wtp-img3.jpeg"
        ]}
      />
    </main>
  );
}
