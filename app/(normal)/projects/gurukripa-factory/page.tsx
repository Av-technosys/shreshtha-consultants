import React from "react";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectDetails } from "@/components/projects/project-details";

export default function GurukripaFactoryPage() {
  const projectInfo = [
    { label: "SERVICES PROVIDED", value: "MEP" },
    { label: "LOCATION", value: "Jaipur" },
    { label: "ARCHITECT / PROMOTER", value: "Sandeep Khandelwal" },
    { label: "PROJECT SIZE", value: "27000sq.ft" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="Gurukripa Factory"
        image="/Projects/gurukripa factory/gurukripa_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description="Gurukripa Factory is recognized for its reliable and efficient manufacturing operations. Shreshtha Consultants delivered full MEP consultancy, implementing air conditioning systems integrated with recovery filters for gold and silver. We designed systems to capture precious particles from wastewater through a recovery tank, before further treatment in the STP and ETP. Recycled water was reused for flushing, while drainage systems were optimized for smooth plant operations. This holistic design approach ensured both resource recovery and sustainable industrial practices."
        images={[
          "/Projects/gurukripa factory/gurukripa_img1.png",
          "/Projects/gurukripa factory/gurukripa_img2.png",
          "/Projects/gurukripa factory/gurukripa_img3.png"
        ]}
      />
    </main>
  );
}
