import { ServiceHero } from "@/components/services/service-hero";
import { ServiceDeliverables } from "@/components/services/service-deliverables";
import { ServiceCrossLinks } from "@/components/services/service-cross-links";
import { ServiceCTA } from "@/components/services/service-cta";

const FIRE_FIGHTING_DELIVERABLES = [
  {
    title: "Fire Hydrant Layout",
    imageSrc: "/Services/Fire-Fighting/designdel1.png",
  },
  {
    title: "DBR Fire Fighting",
    imageSrc: "/Services/Fire-Fighting/designdel2.png",
  },
  {
    title: "Fire Fighting BOQ",
    imageSrc: "/Services/Fire-Fighting/designdel3.png",
  },
  {
    title: "Fire Sprinkler Layout",
    imageSrc: "/Services/Fire-Fighting/designdel4.png",
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

export default function FireFightingPage() {
  return (
    <div className="bg-[#f7f6f2] text-[#101418]">
      <ServiceHero
        kicker="Our Services · Fire Fighting"
        title={
          <>
            Fire-Fighting Systems: The Vital Shield 
            <span className="text-[#ed2967]"> of Modern Structures.</span>
          </>
        }
        description={
          <p>
            At Shreshtha Consultants, we specialize in designing fire-fighting
            systems essential for modern buildings, using advanced automation
            tools for MEP designs and BOQs, all compliant with NBC 2016
            standards.
          </p>
        }
        imageSrc="/Services/Fire-Fighting/herobg.png"
        imageAlt="Fire Fighting design services — Shreshtha Consultants"
        ctaText="Request Proposal"
        ctaLink="/contact-us#form"
      />

      <ServiceDeliverables
        kicker="What We Deliver"
        title="Our Fire Fighting Services Include:"
        introText={
          <>
            <p>
              ● Fire sprinkler and hydrant system layouts
              <br />
              ● Fire alarm systems
              <br />
              ● Detailed BOQs
              <br />
              ● Expert product recommendations
            </p>

            <p>
              Shreshtha Consultants delivers innovative, regulation-compliant
              fire safety solutions that integrate seamlessly into building
              systems for maximum protection.
            </p>
          </>
        }
        deliverables={FIRE_FIGHTING_DELIVERABLES}
      />

      <ServiceCrossLinks
        kicker="Explore More"
        title="Our other MEP services"
        links={CROSS_LINKS}
      />

      <ServiceCTA
        kicker="Get Started"
        title="We are the MEP consultants for speedy site execution & lower project costs."
        buttonText="Request Fire Fighting Proposal"
      />
    </div>
  );
}
