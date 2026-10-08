import Link from "next/link";
import { LocationHero } from "@/components/location/location-hero";
import { LocationInfo } from "@/components/location/location-info";
import { LocationClients } from "@/components/location/location-clients";
import { LocationWhyChooseUs } from "@/components/location/location-why-choose-us";
import { LocationServices } from "@/components/location/location-services";
import { LocationCommitment } from "@/components/location/location-commitment";
import { LocationStats } from "@/components/location/location-stats";

export const metadata = {
  title: "MEP Consultants in Chennai | Shreshtha Consultants",
  description:
    "Top-tier MEP consulting services in Chennai. Shreshtha Consultants provides expert solutions for mechanical, electrical, and plumbing engineering projects.",
};

export default function ChennaiLocationPage() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#101418]">
      <LocationHero
        title={
          <>
            MEP Consultants in Chennai | <br className="hidden md:block" />{" "}
            Shreshtha Consultants
          </>
        }
        imageSrc="/location/WTP_hero-img.jpg"
      />

      <LocationInfo
        title="Your Trusted Partner for Professional MEP Engineering in Chennai"
        paragraphs={[
          <p key="1">
            <Link href="/" className="text-[#ED2967] hover:underline">
              Shreshtha Consultants
            </Link>{" "}
            stands among the leading MEP design companies in Chennai, offering
            highly specialized Mechanical, Electrical, Plumbing, Firefighting,
            Structure, and BOH engineering designs tailored to the unique
            climatic, regulatory, and architectural demands of Chennai's diverse
            development landscape. Our expertise encompasses detailed planning,
            value engineering, technology-enhanced system coordination, and
            execution support across a wide range of building categories and
            scales.
          </p>,
          <p key="2">
            As Chennai continues to expand with commercial corridors,
            residential clusters, industrial developments, and institutional
            growth, we serve as a reliable engineering partner, delivering
            optimized, sustainable, and cost-efficient MEP designs that align
            with long-term building performance.
          </p>,
        ]}
      />

      <LocationClients />

      <LocationStats />

      <LocationWhyChooseUs
        title="What Makes Us the Preferred MOP & MEP Consultants in Chennai"
        subtitle="At Shreshtha Consultants, we believe that great engineering is a combination of experience, precision, and real-world practicality. Here is what sets us apart:"
        cards={[
          {
            icon: "/location/chennai/card1-img.png",
            title: "Expert MEP Engineering Team",
            description:
              "Our engineers hold domain specialization in high-performance HVAC, electrical planning, water management, structure, BOH, and fire-safety compliance.",
          },
          {
            icon: "/location/chennai/card2-img.png",
            title: "Proven Expertise Across Multiple Sectors",
            description:
              "We have successfully delivered 1,050+ MEP projects across India, supporting complex engineering requirements and interdisciplinary coordination.",
          },
          {
            icon: "/location/chennai/card3-img.png",
            title: "Compliance and Safety Assurance",
            description:
              "Our work complies with Chennai Metropolitan Development Authority (CMDA) norms, NBC guidelines, IS codes and fire department regulations.",
          },
          {
            icon: "/location/chennai/card4-img.png",
            title: "Focused on Engineering Efficiency & Cost Optimization",
            description:
              "Through accurate load estimation, energy modeling and resource planning, we help reduce lifecycle cost and avoid oversizing.",
          },
          {
            icon: "/location/chennai/card5-img.png",
            title: "Client-Centric Execution",
            description:
              "Transparent communication, technical clarity and minimal site delays define our working style.",
          },
        ]}
      />

      <LocationServices
        title="Our MEP Services for the Chennai Market"
        services={[
          {
            title: "HVAC & Mechanical Services",
            points: [
              "Custom HVAC planning addressing coastal climate challenges",
              "Specialized humidity control systems for comfort and operational efficiency",
              "Industrial HVAC solutions with high capacity and durability",
            ],
          },
          {
            title: "Electrical Planning & Power Distribution",
            points: [
              "Efficient power supply designs for commercial, industrial, residential, and public infrastructure",
              "Systems that ensure reliable power distribution and load management",
            ],
          },
          {
            title: "Plumbing, Drainage & Water Supply",
            points: [
              "Expert plumbing system design focused on water conservation",
              "Sustainable and efficient water supply and drainage systems",
            ],
          },
          {
            title: "Fire-Fighting & Life Safety",
            points: [
              "Comprehensive fire suppression systems and alarm solutions",
              "Fire hydrant installation and fire evacuation systems to ensure safety",
            ],
          },
          {
            title: "Sustainability & Green Building Advisory",
            points: [
              "Energy-efficient designs and environmentally conscious infrastructure planning",
              "Advisory services for implementing green building standards and practices",
            ],
          },
          {
            title: "Industries We Serve",
            points: [
              "IT Parks & commercial workspaces",
              "Apartment communities & residential townships",
              "Manufacturing & warehousing units",
              "Universities & educational facilities",
              "Hotels & hospitality",
              "Shopping centers & entertainment complexes",
            ],
          },
        ]}
      />

      <LocationCommitment
        title="Partner With Top MEP Consulting Experts in Chennai"
        description="If you're searching for dependable MEP consultants in Chennai, Shreshtha Consultants brings the technical strength and execution support needed to deliver a successful project."
        imageSrc="/location/delhi/commitment-img.png"
      />
    </div>
  );
}
