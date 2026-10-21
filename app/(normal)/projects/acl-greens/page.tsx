import type { Metadata } from "next";
import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/projects/acl-greens",
  },
  title: "ACL Greens MEP Project | Shreshtha Consultants",
  description:
    "MEP consultancy for ACL Greens, Jaipur. Electrical & plumbing solutions for modern, sustainable residential utility infrastructure by Shreshtha Consultants.",
};

export default function AclGreenPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jaipur" },
    { label: "ARCHITECT / PROMOTER", value: "Sincere Architects Pvt Ltd." },
    { label: "PROJECT SIZE", value: "1,25,000sq.ft" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="ACL Green"
        image="/Projects/ACL green/ACL green_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="ACL's residential developments are known for quality and timely delivery. Shreshtha Consultants executed electrical and plumbing solutions that ensured modern utility infrastructure with a focus on sustainability and user comfort."
        images={[
          "/Projects/ACL green/ACL green_img1.png",
          "/Projects/ACL green/ACL green_img2.png",
          "/Projects/ACL green/ACL green_img3.png"
        ]}
      />
    </main>
  );
}
