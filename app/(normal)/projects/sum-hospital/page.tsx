import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export default function SumHospitalPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jaipur" },
    { label: "ARCHITECT / PROMOTER", value: "Sincere Architects Pvt Ltd." },
    { label: "PROJECT SIZE", value: "100000sq.ft" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="SUM Hospital"
        image="/Projects/sum hospital/sum hospital_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="SUM Hospital, part of SOA University, is one of Odisha's leading multispeciality institutions, combining advanced healthcare with education and research. Shreshtha Consultants delivered full MEP consultancy for the project, ensuring efficient air conditioning, reliable electrification, and robust utility systems that support both critical patient care and academic facilities."
        images={[
          "/Projects/sum hospital/sum hospital_img1.png",
          "/Projects/sum hospital/sum hospital_img2.png",
          "/Projects/sum hospital/sum hospital_img3.png"
        ]}
      />
    </main>
  );
}
