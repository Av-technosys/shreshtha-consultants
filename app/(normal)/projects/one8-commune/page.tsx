"use client";

import React from 'react';
import { ProjectHero } from '@/components/projects/project-hero';
import { ProjectDetails } from '@/components/projects/project-details';

export default function One8CommunePage() {
  const projectInfo = [
    { label: 'SERVICES PROVIDED', value: 'MEP' },
    { label: 'LOCATION', value: 'Jaipur' },
    { label: 'ARCHITECT / PROMOTER', value: 'Saaz Designs LLP' },
    { label: 'PROJECT SIZE', value: '13000sq.ft' },
  ];

  const projectDescription = "One8 Commune, Jaipur, the premium dining and lounge destination by Virat Kohli, is celebrated for its chic interiors, global cuisine, and vibrant atmosphere. Shreshtha Consultants delivered complete MEP consultancy for the project, ensuring seamless integration of electrical, HVAC, and firefighting systems to match the high standards of a luxury hospitality space. Our designs provided energy-efficient air conditioning, reliable power distribution, and safety systems that supported both functionality and ambience, making One8 Commune a benchmark for modern dining and nightlife experiences in Jaipur.";

  const projectImages = [
    '/Projects/one8 Commune/one8 Commune_img1.png',
    '/Projects/one8 Commune/one8 Commune_img3.png'
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <ProjectHero 
        title="One8 Commune"
        image="/Projects/one8 Commune/one8 Commune_hero.png"
      />
      <ProjectDetails 
        info={projectInfo}
        description={projectDescription}
        images={projectImages}
      />
    </main>
  );
}
