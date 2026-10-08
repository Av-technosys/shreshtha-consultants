import Link from "next/link";
import { LocationHero } from "@/components/location/location-hero";
import { LocationInfo } from "@/components/location/location-info";
import { LocationClients } from "@/components/location/location-clients";
import { LocationWhyChooseUs } from "@/components/location/location-why-choose-us";
import { LocationServices } from "@/components/location/location-services";
import { LocationCommitment } from "@/components/location/location-commitment";
import { LocationStats } from "@/components/location/location-stats";

export const metadata = {
  title: "Best MEP Consultants in Hyderabad | Shreshtha Consultants",
  description:
    "Top-tier MEP consulting services in Hyderabad. Shreshtha Consultants provides expert solutions for mechanical, electrical, and plumbing engineering projects.",
};

export default function HyderabadLocationPage() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#101418]">
      <LocationHero
        title={
          <>
            Best MEP Consultants in Hyderabad |{" "}
            <br className="hidden md:block" /> Shreshtha Consultants
          </>
        }
        imageSrc="/location/WTP_hero-img.jpg"
      />

      <LocationInfo
        title="Leading MEP Consultants in Hyderabad for Modern Infrastructure Excellence"
        paragraphs={[
          <p key="1">
            When it comes to shaping modern, efficient, and future-ready
            buildings, the role of skilled MEP engineering becomes critical. As
            one of the <strong>best MEP consultants in Hyderabad</strong>,
            Shreshtha Consultants delivers complete Mechanical, Electrical,
            Plumbing, Firefighting, Structure, and BOH, solutions engineered
            around performance, sustainability, and safety. We work closely with
            architects, developers, PMC teams, contractors, and facility
            operators, ensuring that the building systems we design are
            practical, efficient and optimized for long-term operational value.
          </p>,
          <p key="2">
            With growing infrastructure across Hyderabad&apos;s IT corridors,
            residential hubs, industrial belts, and commercial clusters, there
            is a strong need for technically sound and dependable engineering
            partners. Shreshtha Consultants brings more than two decades of
            real-world consulting experience backed by highly specialized
            engineering professionals, advanced technology tools, and an
            extensive portfolio of successful projects across India and
            overseas.
          </p>,
        ]}
      />

      <LocationClients />

      <LocationStats />

      <LocationWhyChooseUs
        title="Why We Are Trusted as the Best MEP Consultants in Hyderabad"
        subtitle="Choosing the right MEP partner can determine a project's operational efficiency, cost success, and delivery timeline. Here is why clients rely on us"
        cards={[
          {
            icon: "/location/hyderabad/mep consultant-img1.png",
            title: "Project Delivery Without Rework",
            description:
              "All solutions strictly follow local Hyderabad municipal regulations, NBC, IS standards, NFPA guidelines, and required approval processes.",
          },
          {
            icon: "/location/hyderabad/mep consultant-img2.png",
            title: "Code Compliance and Safety Priority",
            description:
              "All solutions strictly follow local Hyderabad municipal regulations, NBC, IS standards, NFPA guidelines, and required approval processes.",
          },
          {
            icon: "/location/hyderabad/mep consultant-img3.png",
            title: "End-to-End MEP Consulting Support",
            description:
              "From feasibility studies to final commissioning, we deliver complete engineering support under one roof — reducing project delays and ensuring seamless system integration.",
          },
          {
            icon: "/location/hyderabad/mep consultant-img4.png",
            title: "Energy-Efficient and Sustainable Design Approach",
            description:
              "Our design philosophy prioritizes resource optimization through smart engineering, renewable integration, and lifecycle cost reduction.",
          },
          {
            icon: "/location/hyderabad/mep consultant-img5.png",
            title: "Strong Technical Expertise Backed by Industry Experience",
            description:
              "Our team consists of qualified senior engineers and experienced specialists across BOH, Structure, HVAC, electrical systems, plumbing & public health engineering, and fire-safety systems design.",
          },
        ]}
      />

      <LocationServices
        title="Our MEP Consulting Services in Hyderabad"
        subtitle="We offer comprehensive building services engineering to support diverse project types, including corporate campuses, hospitals, mixed-use buildings, residential towers, industrial facilities, hotels, retail malls, and educational institutions."
        services={[
          {
            title: "Mechanical & HVAC Engineering",
            points: [
              "Central HVAC plant design",
              "VRF / VRV systems for commercial buildings",
              "Industrial ventilation and cleanroom engineering",
              "IAQ improvement and efficiency-driven airflow design",
            ],
          },
          {
            title: "Electrical System Engineering",
            points: [
              "Power distribution and load calculation",
              "HT / LT systems, backup power, and UPS planning",
              "Automation, ELV, security, and smart control systems",
              "Energy analysis and electrical safety compliance",
            ],
          },
          {
            title: "Plumbing & Public Health Engineering",
            points: [
              "Water supply and distribution networks",
              "Sewage, drainage, pumping systems and stormwater design",
              "Water treatment & conservation planning",
              "Rainwater harvesting integration",
            ],
          },
          {
            title: "Fire Fighting & Life Safety",
            points: [
              "Fire detection and suppression system design",
              "NBC and NFPA-compliant fire engineering",
              "Evacuation and smoke control systems",
            ],
          },
          {
            title: "BIM & MEP Coordination",
            points: [
              "Clash-free interdisciplinary working drawings",
              "Fabrication and shop drawing detailing",
              "On-site coordination & commissioning support",
            ],
          },
          {
            title: "Industries We Serve",
            points: [
              "Corporate & commercial offices",
              "Residential and high-rise developments",
              "Hospitals, pharma and medical labs",
              "Manufacturing and industrial factories",
            ],
          },
        ]}
      />

      <LocationCommitment
        title="Work With the Most Reliable MEP Consultants in Hyderabad"
        description="If you're looking for professional, detail-driven and execution-oriented MEP consultants in Hyderabad, Shreshtha Consultants is the right partner for your next project. We bring engineering clarity, accuracy and predictable results — helping clients build smarter, faster and more efficiently."
        imageSrc="/location/delhi/commitment-img.png"
      />
    </div>
  );
}
