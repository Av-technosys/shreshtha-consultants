import Link from "next/link";
import { LocationHero } from "@/components/location/location-hero";
import { LocationInfo } from "@/components/location/location-info";
import { LocationClients } from "@/components/location/location-clients";
import { LocationWhyChooseUs } from "@/components/location/location-why-choose-us";
import { LocationServices } from "@/components/location/location-services";
import { LocationCommitment } from "@/components/location/location-commitment";
import { LocationStats } from "@/components/location/location-stats";

export const metadata = {
  title: "Professional MEP Services in Mumbai | Shreshtha Consultants",
  description:
    "Top-tier MEP consulting services in Mumbai. Shreshtha Consultants provides expert solutions for mechanical, electrical, and plumbing engineering projects.",
};

export default function MumbaiLocationPage() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#101418]">
      <LocationHero
        title={
          <>
            Professional MEP Services in Mumbai |{" "}
            <br className="hidden md:block" /> Shreshtha Consultants
          </>
        }
        imageSrc="/location/WTP_hero-img.jpg"
      />

      <LocationInfo
        title="Your Engineering Partner for Reliable & Efficient MEP Services in Mumbai"
        paragraphs={[
          <p key="1">
            As the commercial and financial capital of India, Mumbai requires
            engineering systems that can handle high demand, tight space
            planning, municipal constraints and strict safety standards.{" "}
            <Link href="/" className="text-[#ED2967] hover:underline">
              Shreshtha Consultants
            </Link>
            , recognized among the{" "}
            <strong>best MEP consultants in Mumbai</strong>, delivers
            well-engineered and smartly coordinated Mechanical, Electrical,
            Plumbing, fire-fighting, structural and BOH solutions for complex
            infrastructure projects.
          </p>,
          <p key="2">
            Our ability to align architectural vision with practical MEP
            execution makes us a preferred partner for developers, architects,
            corporate engineering teams and industrial clients.
          </p>,
        ]}
      />

      <LocationClients />

      <LocationStats />

      <LocationWhyChooseUs
        title="Why Work With Us"
        cards={[
          {
            icon: "/location/mumbai/why_work-img1.png",
            title: "Engineering Expertise With Proven Experience",
            description:
              "We leverage decades of industry experience supported by specialized in-house talent and our AI-based technology",
          },
          {
            icon: "/location/mumbai/why_work-img2.png",
            title: "Future-Ready & Energy-Efficient Designs",
            description:
              "We design high-performance systems that reduce operational cost and increase sustainability",
          },
          {
            icon: "/location/mumbai/why_work-img3.png",
            title: "Seamless Coordination",
            description:
              "Our BIM and coordination workflows eliminate conflict during construction phases",
          },
          {
            icon: "/location/mumbai/why_work-img4.png",
            title: "Compliance Focused",
            description:
              "We strictly adhere to Mumbai municipal regulations, DCR standards, NBC, IS and fire norms",
          },
        ]}
      />

      <LocationServices
        title="Our MEP Services in Mumbai"
        services={[
          {
            title: "Our MEP Services",
            points: [
              "HVAC & mechanical engineering",
              "Electrical power distribution, ELV & automation",
              "Plumbing, public health & drainage",
              "Fire-fighting & emergency response systems",
              "Commissioning & system evaluation",
              "MEP audits & upgrade consulting",
            ],
          },
          {
            title: "Industries We Serve",
            points: [
              "Commercial offices & corporate headquarters",
              "Premium residential and mixed-use buildings",
              "Hospitals, clinics and labs",
              "Hotels, retail & hospitality",
              "Manufacturing & industrial",
              "Public and institutional buildings",
            ],
          },
        ]}
      />

      <LocationCommitment
        title="Consult With the Most Reliable MEP Consultants in Mumbai"
        description="If you are searching for technically capable, execution-driven MEP consultants in Mumbai, Shreshtha Consultants is ready to support your goals with proven engineering excellence."
        imageSrc="/location/delhi/commitment-img.png"
      />
    </div>
  );
}
