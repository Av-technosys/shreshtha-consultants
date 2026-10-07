import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export default function JaswantPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jaipur" },
    { label: "ARCHITECT / PROMOTER", value: "Sincere Architects Pvt Ltd." },
    { label: "PROJECT SIZE", value: "100000sq.ft" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="Jaswant Gargh School"
        image="/Projects/jaswant gargh school/jaswant gargh school_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="Jaswant Garh School is committed to quality education and holistic development. Shreshtha Consultants provided full MEP consultancy, integrating efficient electrical, HVAC, and plumbing systems to create a safe and supportive environment for learning and extracurricular growth."
        images={[
          "/Projects/jaswant gargh school/jaswant gargh school_img1.png",
          "/Projects/jaswant gargh school/jaswant gargh school_img2.png",
          "/Projects/jaswant gargh school/jaswant gargh school_img3.png"
        ]}
      />
    </main>
  );
}
