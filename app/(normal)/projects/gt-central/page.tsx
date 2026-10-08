import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export default function GTCentralPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jaipur" },
    { label: "ARCHITECT / PROMOTER", value: "Bardiya Developers Pvt.Ltd." },
    { label: "PROJECT SIZE", value: "120000sq.ft" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="GT Central"
        image="/Projects/gt Central/gt Central_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="GT Central is a prominent retail and entertainment complex in Jaipur, where Shreshtha Consultancy provided end-to-end MEP solutions. Our services ensured efficient HVAC, electrical, and plumbing systems tailored for a high-traffic commercial environment. The design focused on user comfort, energy efficiency, and smooth integration with the building's modern infrastructure."
        images={[
          "/Projects/gt Central/gt Central_img1.png",
          "/Projects/gt Central/gt Central_img2.png",
          "/Projects/gt Central/gt Central_img3.png"
        ]}
      />
    </main>
  );
}
