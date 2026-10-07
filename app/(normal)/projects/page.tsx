import React from "react";
import { ProjectsListingHero } from "@/components/projects/projects-listing-hero";
import { ProjectsGrid } from "@/components/projects/projects-grid";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectsListingHero />
      <ProjectsGrid />
    </main>
  );
}
