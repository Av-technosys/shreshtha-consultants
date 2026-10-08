import { ServiceHero } from "@/components/services/service-hero";
import { ServiceDeliverables } from "@/components/services/service-deliverables";
import { ServiceCrossLinks } from "@/components/services/service-cross-links";
import { ServiceCTA } from "@/components/services/service-cta";

export const metadata = {
  title: "Shreshtha Consultants – Electrical Design Consultants India",
  description:
    "Professional electrical design services by Shreshtha Consultants — power systems, lighting, earthing & more for buildings across India.",
};

const ELECTRICAL_DELIVERABLES = [
  {
    title: "Wiring/Controlling plans",
    description:
      "Wiring plans showing positions and interconnections of electrical devices and terminals.",
    imageSrc: "/Services/Electrical/designdel1.png",
  },
  {
    title: "Electrical conduiting layouts",
    description:
      "Efficient conduiting layout with specified material and sizes, ensuring protection from fire and other hazards.",
    imageSrc: "/Services/Electrical/designdel2.png",
  },
  {
    title: "BOQ",
    description:
      "Detailed safety and security system BOQ stating the quality and quantity of equipments required at optimum cost.",
    imageSrc: "/Services/Electrical/designdel3.png",
  },
  {
    title: "DB electrical SLD",
    imageSrc: "/Services/Electrical/designdel4.png",
  },
];

const CROSS_LINKS = [
  { title: "HVAC", href: "/services/hvac" },
  { title: "Fire Fighting", href: "/services/fire-fighting" },
  { title: "Safety and Security", href: "/services/safety-and-security" },
  { title: "Plumbing", href: "/services/plumbing" },
  { title: "BOQ", href: "/boq" },
  { title: "BIM", href: "/bim" },
];

export default function ElectricalPage() {
  return (
    <div className="bg-[#f7f6f2] text-[#101418]">
      <ServiceHero
        kicker="Our Services · Electrical"
        title={
          <>
            Electrical drawings are the blueprint of a building&apos;s{" "}
            <span className="text-[#ed2967]">nervous system</span>
          </>
        }
        description={
          <p>
            At Shreshtha Consultants, we specialize in comprehensive electrical
            system designs that power buildings efficiently and safely. Our
            advanced automation software creates precise MEP designs and
            detailed BOQs, all compliant with NBC 2016 standards.
          </p>
        }
        imageSrc="/Services/Electrical/herobg.png"
        imageAlt="Electrical design services — Shreshtha Consultants"
        ctaText="Request Proposal"
        ctaLink="/contact-us#form"
      />

      <ServiceDeliverables
        kicker="What We Deliver"
        title="Electrical design deliverables"
        introText={
          <>
            <p>
              Electrical drawings are the blueprint of a building&apos;s nervous system, detailing the intricacies of lighting, power, and communication networks.
            </p>
            <p>
              We combine cutting-edge technology with deep expertise to deliver optimized, future-ready electrical designs tailored to each project&apos;s unique needs.
            </p>
          </>
        }
        deliverables={ELECTRICAL_DELIVERABLES}
      />

      <ServiceCrossLinks
        kicker="Explore More"
        title="Our other MEP services"
        links={CROSS_LINKS}
      />

      <ServiceCTA
        kicker="Get Started"
        title="We are the MEP consultants for speedy site execution & lower project costs."
        buttonText="Request Electrical Proposal"
      />
    </div>
  );
}
