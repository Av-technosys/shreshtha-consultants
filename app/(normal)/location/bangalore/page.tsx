import Link from "next/link";
import { LocationHero } from "@/components/location/location-hero";
import { LocationInfo } from "@/components/location/location-info";
import { LocationClients } from "@/components/location/location-clients";
import { LocationWhyChooseUs } from "@/components/location/location-why-choose-us";
import { LocationServices } from "@/components/location/location-services";
import { LocationCommitment } from "@/components/location/location-commitment";
import { LocationStats } from "@/components/location/location-stats";

export const metadata = {
  title: "Best MEP Consulting Services in Bangalore | Shreshtha Consultants",
  description:
    "Top-tier MEP consulting services in Bangalore. Shreshtha Consultants provides expert solutions for mechanical, electrical, and plumbing engineering projects.",
};

export default function BangaloreLocationPage() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#101418]">
      <LocationHero
        title={
          <>
            Best MEP Consulting Services in Bangalore |{" "}
            <br className="hidden md:block" /> Shreshtha Consultants
          </>
        }
        imageSrc="/location/WTP_hero-img.jpg"
      />

      <LocationInfo
        title="Top-Rated MEP Consulting Services in Bangalore"
        paragraphs={[
          <p key="1">
            With constantly evolving urban development and architecturally
            complex building structures, the need for precision-based,
            performance-enhancing MEP design has never been more important. As
            leading MEP services consultants in Bangalore,{" "}
            <Link href="/" className="text-[#ED2967] hover:underline">
              Shreshtha Consultants
            </Link>{" "}
            specializes in delivering fully integrated MEP engineering designs
            that enable buildings to operate safely, efficiently and sustainably
            throughout their lifecycle.
          </p>,
          <p key="2">
            We combine engineering intelligence, advanced design technologies
            like our in-house AI design software and practical construction
            experience to deliver building systems that work seamlessly and
            cost-effectively.
          </p>,
        ]}
      />

      <LocationClients />

      <LocationStats />

      <LocationWhyChooseUs
        title="Why Choose Us as Your MEP Consultants in Bangalore"
        cards={[
          {
            icon: "/location/bangalore/consultant-img1.png",
            title: "End-to-End MEP System Integration",
            description:
              "A single engineering partner handling mechanical, electrical, and plumbing and fire fighting enables faster execution, reduced vendor conflict and predictable project delivery",
          },
          {
            icon: "/location/bangalore/consultant-img2.png",
            title:
              "Deep Understanding of Bangalore's Regulatory & Environmental Landscape",
            description:
              "We design systems keeping in mind BBMP, BESCOM, BWSSB, fire approvals and local building code requirements",
          },
          {
            icon: "/location/bangalore/consultant-img3.png",
            title: "Optimized Energy Performance",
            description:
              "We help clients reduce operational costs through our AI-based design software, energy modeling, HVAC right-sizing and renewable energy integration",
          },
          {
            icon: "/location/bangalore/consultant-img4.png",
            title: "Precision BIM-Based Coordination",
            description:
              "Our BIM approach eliminates clashes and ensures accuracy on-site, reducing delays and cost revisions",
          },
          {
            icon: "/location/bangalore/consultant-img5.png",
            title: "Proven Results Across 1,050+ Projects",
            description:
              "Our multidisciplinary experience allows us to design MEP engineering for varied scale and complexity",
          },
        ]}
      />

      <LocationServices
        title="Comprehensive MEP Consulting Services We Offer"
        services={[
          {
            title: "HVAC and Mechanical Services",
            points: [
              "Focus on delivering comfort through optimized air-conditioning and ventilation systems",
              "Engineering solutions that ensure high performance and energy efficiency",
            ],
          },
          {
            title: "Electrical System Design",
            points: [
              "Safe and reliable power distribution with redundancy for uninterrupted service",
              "Efficient electrical systems designed to handle varying loads and minimize energy loss",
            ],
          },
          {
            title: "Plumbing & PHE",
            points: [
              "Sustainable water supply systems with efficient drainage and waste management",
              "Integration of rainwater harvesting for eco-friendly water conservation",
            ],
          },
          {
            title: "Fire-Safety Engineering",
            points: [
              "Comprehensive fire protection systems, including suppression and detection technologies",
              "Robust fire evacuation plans to ensure safety in emergencies",
            ],
          },
          {
            title: "Testing, Commissioning & Operational Support",
            points: [
              "Thorough testing to ensure systems meet design specifications and operational requirements",
              "Ongoing support to maintain peak performance and address system challenges",
            ],
          },
          {
            title: "Industries & Sectors Served",
            points: [
              "Real estate & mixed-use developments",
              "Offices & IT parks",
              "Healthcare & pharma",
              "Schools & universities",
              "Retail & hospitality",
              "Industrial & warehousing",
            ],
          },
        ]}
      />

      <LocationCommitment
        title="Consult the Best MEP Consultants in Bangalore"
        description="Whether you are designing a new facility or optimizing an existing property, we bring clarity, precision and reliable engineering support."
        imageSrc="/location/delhi/commitment-img.png"
      />
    </div>
  );
}
