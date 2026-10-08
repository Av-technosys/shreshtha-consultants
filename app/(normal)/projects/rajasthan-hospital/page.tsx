import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export default function RajasthanHospitalPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jaipur" },
    { label: "ARCHITECT / PROMOTER", value: "Ar. Anoop Bartaria" },
    { label: "PROJECT SIZE", value: "500000sq.ft" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="Rajasthan Hospital"
        image="/projects/rajasthan hospital/rajasthan hospital_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="Rajasthan Hospital is one of Jaipur's leading multispeciality hospitals, recognized for its advanced infrastructure and patient-focused care across critical departments. Shreshtha Consultants provided complete MEP consultancy for the project, executed in a phase-wise manner to align with construction and operational requirements. Our scope included designing floor-wise VRV/VRF systems for efficient air conditioning along with water-cooled chillers to ensure reliability, energy efficiency, and comfort across critical healthcare spaces."
        images={[
          "/projects/rajasthan hospital/rajasthan hospital_img1.png",
          "/projects/rajasthan hospital/rajasthan hospital_img2.png",
          "/projects/rajasthan hospital/rajasthan hospital_img3.png"
        ]}
      />
    </main>
  );
}
