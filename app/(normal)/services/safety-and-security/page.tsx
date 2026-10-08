import { ServiceHero } from "@/components/services/service-hero";
import { ServiceDeliverables } from "@/components/services/service-deliverables";
import { ServiceCrossLinks } from "@/components/services/service-cross-links";
import { ServiceCTA } from "@/components/services/service-cta";

export const metadata = {
  title: "Shreshtha Consultants – Safety & Security Systems India",
};

const SAFETY_SECURITY_DELIVERABLES = [
  {
    title: "Safety Security DBR",
    imageSrc: "/Services/Safety-and-Security/designdel1.png",
  },
  {
    title: "Data and Telephone Wiring",
    imageSrc: "/Services/Safety-and-Security/designdel2.png",
  },
  {
    title: "CCTV Wiring",
    imageSrc: "/Services/Safety-and-Security/designdel3.png",
  },
  {
    title: "Safety Security BOQ",
    imageSrc: "/Services/Safety-and-Security/designdel4.png",
  },
];

const CROSS_LINKS = [
  { title: "HVAC&R", href: "/services/hvac" },
  { title: "Fire Fighting", href: "/services/fire-fighting" },
  { title: "Safety and Security", href: "/services/safety-and-security" },
  { title: "Plumbing", href: "/services/plumbing" },
  { title: "BOQ", href: "/boq" },
  { title: "BIM", href: "/bim" },
];

export default function SafetyAndSecurityPage() {
  return (
    <div className="bg-[#f7f6f2] text-[#101418]">
      <ServiceHero
        kicker="Our Services · Safety and Security"
        title={
          <>
            Ensuring the safety and security of all stakeholders is a top priority for 
            <span className="text-[#ed2967]"> our business.</span>
          </>
        }
        description={
          <p>
            At Shreshtha Consultants, we design comprehensive safety, security,
            and communication systems that help monitor, manage, and prevent
            potential risks to building occupants. Using our advanced
            automation software, we create MEP designs and detailed bills of
            quantities (BOQ) that fully comply with NBC 2016 standards.
            
          </p>
        }
        imageSrc="/Services/Safety-and-Security/herobg.png"
        imageAlt="Safety and Security design services — Shreshtha Consultants"
        ctaText="Request Proposal"
        ctaLink="/contact-us#form"
      />

      <ServiceDeliverables
        kicker="What We Deliver"
        title="Our Safety & Security Services Include:"
        introText={
          <>
            <p>
              ● CCTV wiring
              <br />
              ● WiFi wiring
              <br />
              ● Telephone wiring
              <br />
              ● Data wiring
              <br />
              ● Accurate BOQs
              <br />
              ● Expert product recommendations
            </p>

            <p>
              Shreshtha Consultants delivers tailored, reliable solutions to
              safeguard modern structures.
            </p>
          </>
        }
        deliverables={SAFETY_SECURITY_DELIVERABLES}
      />

      <ServiceCrossLinks
        kicker="Explore More"
        title="Our other MEP services"
        links={CROSS_LINKS}
      />

      <ServiceCTA
        kicker="Get Started"
        title="We are the MEP consultants for speedy site execution & lower project costs."
        buttonText="Request Safety and Security Proposal"
      />
    </div>
  );
}
