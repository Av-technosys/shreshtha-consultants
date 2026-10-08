import Link from "next/link";
import { LocationHero } from "@/components/location/location-hero";
import { LocationInfo } from "@/components/location/location-info";
import { LocationClients } from "@/components/location/location-clients";
import { LocationProjects } from "@/components/location/location-projects";
import { LocationStats } from "@/components/location/location-stats";
import { LocationWhyChooseUs } from "@/components/location/location-why-choose-us";
import { LocationServices } from "@/components/location/location-services";
import { LocationCommitment } from "@/components/location/location-commitment";

export const metadata = {
  title: "Best MEP Consulting Services in Delhi | Shreshtha Consultants",
  description:
    "Top-tier MEP consulting services in Delhi. Shreshtha Consultants provides expert solutions for mechanical, electrical, and plumbing engineering projects.",
};

export default function DelhiLocationPage() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#101418]">
      <LocationHero
        title={
          <>
            Best MEP Consulting Services in Delhi |{" "}
            <br className="hidden md:block" /> Shreshtha Consultants
          </>
        }
        imageSrc="/location/WTP_hero-img.jpg"
      />

      <LocationInfo
        title="Top-Rated MEP Consulting Services in Delhi"
        paragraphs={[
          <p key="1">
            Shreshtha Consultants is a trusted name among MEP consultants in
            Delhi, delivering comprehensive Mechanical, Electrical, and Plumbing
            engineering solutions for residential, commercial, industrial, and
            institutional projects. With a strong presence across Delhi NCR, we
            provide technically sound, cost-effective, and sustainable MEP
            designs that meet international standards and local regulatory
            requirements.
          </p>,
          <p key="2">
            Our expertise, combined with a client-focused approach, makes us one
            of the most preferred MEP consultants in Delhi NCR for architects,
            builders, developers, and project management consultants.
          </p>,
          <p key="3">
            <Link href="/" className="text-[#ED2967] hover:underline">
              Shreshtha Consultants
            </Link>{" "}
            is an engineering consultancy firm specializing in integrated MEP
            services. We support projects from concept design to execution and
            commissioning, ensuring seamless coordination between all building
            systems. Our team of experienced engineers brings deep technical
            knowledge and hands-on project experience across diverse sectors.
          </p>,
          <p key="4">
            As one of the leading firms featured in the list of MEP consultants
            in Delhi, we are committed to delivering solutions that enhance
            building performance, safety, and energy efficiency.
          </p>,
        ]}
      />

      <LocationClients />

      <LocationStats />

      <LocationProjects
        title="Projects We Serve in Delhi NCR"
        description="As one of the preferred MEP consultants in Delhi NCR, we cater to a wide range of projects, including:"
        points={[
          "Residential buildings & townships",
          "Retail malls & mixed-use developments",
          "Hospitals & healthcare facilities",
          "Educational institutions",
          "Industrial & warehouse facilities",
        ]}
        conclusion="Our multidisciplinary experience positions us strongly within the list of MEP consultants in Delhi trusted for complex and large-scale developments."
        imageSrc="/location/delhi/project-img.png"
      />

      <LocationWhyChooseUs
        title="Why Choose Us as Your MEP Consultants in Delhi"
        cards={[
          {
            icon: "/location/delhi/consultant-img1.png",
            title: "Proven Expertise",
            description:
              "With years of experience in Delhi NCR, we understand local codes, authority requirements, and construction practices, enabling faster approvals and smoother execution.",
          },
          {
            icon: "/location/delhi/consultant-img2.png",
            title: "Integrated Design Approach",
            description:
              "Our coordinated MEP designs minimize clashes, reduce rework, and improve construction efficiency.",
          },
          {
            icon: "/location/delhi/consultant-img3.png",
            title: "Energy-Efficient Solutions",
            description:
              "We emphasize sustainable design strategies that reduce operating costs and enhance long-term building performance.",
          },
          {
            icon: "/location/delhi/consultant-img4.png",
            title: "Compliance & Quality Assurance",
            description:
              "All designs adhere to NBC, IS codes, international standards, and project-specific requirements.",
          },
          {
            icon: "/location/delhi/consultant-img5.png",
            title: "Client-Centric Approach",
            description:
              "We work closely with clients, architects, and project teams to deliver customized solutions aligned with project goals.",
          },
        ]}
      />

      <LocationServices
        title="Our MEP Consulting Services in Delhi"
        services={[
          {
            title: "Mechanical (HVAC) Consulting",
            description:
              "We are recognized among reliable HVAC consultants in Delhi, offering end-to-end heating, ventilation, and air-conditioning solutions. Our HVAC designs focus on comfort, energy efficiency, and compliance with applicable standards.",
            subTitle: "HVAC services Include:",
            points: [
              "HVAC system design & calculations",
              "Centralized and VRV/VRF systems",
              "Chilled water & DX systems",
              "Ventilation and smoke management",
              "Energy-efficient HVAC solutions",
            ],
          },
          {
            title: "Electrical Consulting",
            description:
              "Our electrical engineering services ensure safe, efficient, and reliable power distribution systems for all types of buildings.",
            subTitle: "Electrical services include:",
            points: [
              "Power distribution & load calculations",
              "Lighting design (interior & exterior)",
              "Earthing & lightning protection systems",
              "DG, UPS & renewable energy integration",
              "Low voltage systems (ELV)",
            ],
          },
          {
            title: "Plumbing & Public Health Engineering",
            description:
              "We provide complete plumbing and public health engineering solutions aligned with sustainability and water conservation goals.",
            subTitle: "Plumbing services include:",
            points: [
              "Water supply & drainage system design",
              "Sewerage & stormwater management",
              "Rainwater harvesting",
              "Water treatment & pumping systems",
              "Fire fighting systems coordination",
            ],
          },
        ]}
      />

      <LocationCommitment imageSrc="/location/delhi/commitment-img.png" />
    </div>
  );
}
