import { ServiceHero } from "@/components/services/service-hero";
import { ServiceDeliverables } from "@/components/services/service-deliverables";
import { ServiceCrossLinks } from "@/components/services/service-cross-links";
import { ServiceCTA } from "@/components/services/service-cta";

export const metadata = {
  title: "Shreshtha Consultants – HVACR Design Experts India",
};

const HVAC_DELIVERABLES = [
  {
    title: "HVAC",
    imageSrc: "/Services/HVAC/designdel1.png",
  },
  {
    title: "HVAC DBR",
    imageSrc: "/Services/HVAC/designdel2.png",
  },
  {
    title: "Ducting Layouts",
    imageSrc: "/Services/HVAC/designdel3.png",
  },
  {
    title: "Chiller Plans",
    imageSrc: "/Services/HVAC/designdel4.png",
  },
  {
    title: "BOQ HVAC",
    imageSrc: "/Services/HVAC/designdel5.png",
  },
  {
    title: "Heat Load Calculation",
    imageSrc: "/Services/HVAC/designdel6.png",
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

export default function HVACPage() {
  return (
    <div className="bg-[#f7f6f2] text-[#101418]">
      <ServiceHero
        kicker="Our Services · HVAC"
        title={
          <>
            HVAC systems are the lungs and circulatory systems of a building,
            orchestrating climate control, air quality, and thermal comfort
            throughout <span className="text-[#ed2967]">the structure&apos;s interior</span>.
          </>
        }
        description={
          <p>
            At Shreshtha Consultants, we specialize in sustainable HVAC system
            designs that optimize indoor environments. Our advanced software
            creates NBC 2016-compliant MEP designs and detailed BOQs.
          </p>
        }
        imageSrc="/Services/HVAC/herobg.png"
        imageAlt="HVAC design services — Shreshtha Consultants"
        ctaText="Request Proposal"
        ctaLink="/contact#form"
      />

      <ServiceDeliverables
        kicker="What We Deliver"
        title="Our HVAC Services Cover:"
        introText={
          <>
            <p>
              ● Air conditioning and cooling systems
              <br />
              ● Copper piping and ducting layouts
              <br />
              ● Air exhaust and chiller plans
              <br />
              ● Comprehensive schematics
              <br />
              ● Precise bill of quantities
              <br />
              ● Expert product recommendations
            </p>

            <p>
              We, at Shreshtha Consultant, blend expertise with cutting-edge
              technology to deliver energy-efficient, high-performance HVAC
              solutions tailored to each project&apos;s needs
            </p>
          </>
        }
        deliverables={HVAC_DELIVERABLES}
      />

      <ServiceCrossLinks
        kicker="Explore More"
        title="Our other MEP services"
        links={CROSS_LINKS}
      />

      <ServiceCTA
        kicker="Get Started"
        title="We are the MEP consultants for speedy site execution & lower project costs."
        buttonText="Request HVAC Proposal"
      />
    </div>
  );
}