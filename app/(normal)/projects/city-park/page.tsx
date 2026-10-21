import type { Metadata } from "next";
import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/projects/city-park",
  },
  title: "City Park MEP Project | Shreshtha Consultants",
  description:
    "MEP consultancy for City Park, Jaipur. Sustainable plumbing & electrical design using STP-treated water for landscaping & pond circulation by Shreshtha Consultants.",
};

export default function CityParkPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jaipur, Rajasthan" },
    { label: "ARCHITECT / PROMOTER", value: "Jaipur Development Authority" },
    { label: "PROJECT SIZE", value: "Public Infrastructure" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="City Park"
        image="/Projects/ACL green/ACL green_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="MEP consultancy for City Park, Jaipur. Sustainable plumbing & electrical design using STP-treated water for landscaping & pond circulation delivered by Shreshtha Consultants."
        images={[
          "/Projects/ACL green/ACL green_img1.png",
          "/Projects/ACL green/ACL green_img2.png"
        ]}
      />
    </main>
  );
}
