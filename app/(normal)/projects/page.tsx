import type { Metadata } from "next";
import React from "react";
import { ProjectsListingHero } from "@/components/projects/projects-listing-hero";
import { ProjectsGrid } from "@/components/projects/projects-grid";

export const metadata: Metadata = {
  title: "Our Projects | MEP & BIM Consultants | Shreshtha Consultants",
  description:
    "Explore projects by Shreshtha Consultants: electrical, plumbing, firefighting, HVAC, and safety & security design and BIM services for buildings across India.",
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectsListingHero />
      <ProjectsGrid />
    </main>
  );
}
