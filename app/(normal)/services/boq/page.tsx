import { ServiceHero } from "@/components/services/service-hero";
import { ServiceDeliverables } from "@/components/services/service-deliverables";
import { ServiceCrossLinks } from "@/components/services/service-cross-links";
import { ServiceCTA } from "@/components/services/service-cta";

export const metadata = {
  title: "Shreshtha Consultants – BOQ (Bill of Quantities) Services India",
  description:
    "Accurate MEP Bill of Quantities (BOQ) by Shreshtha Consultants. Automated NBC 2016 compliant BOQs for electrical, plumbing, HVAC & firefighting systems.",
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/boq",
  },
};

const BOQ_DELIVERABLES = [
  {
    title: "Plumbing BOQ",
    description:
      "Detailed plumbing BOQ stating the quality and quantity of pipes, fixtures, water faucets, etc. required at optimum cost.",
    imageSrc: "/Services/Boq/designdel1.png",
  },
  {
    title: "Electrical BOQ",
    description:
      "Detailed electrical BOQ stating the quality and quantity of conduits, sockets, light fixtures etc. required at optimum cost.",
    imageSrc: "/Services/Boq/designdel2.png",
  },
];

const CROSS_LINKS = [
  { title: "Electrical", href: "/electrical" },
  { title: "HVAC", href: "/hvac" },
  { title: "Fire Fighting", href: "/fire-fighting" },
  { title: "Safety and Security", href: "/safety-and-security" },
  { title: "Plumbing", href: "/plumbing" },
  { title: "BIM", href: "/bim" },
];

export default function BOQPage() {
  return (
    <div className="bg-[#f7f6f2] text-[#101418]">
      <ServiceHero
        kicker="Our Services · BOQ"
        title={
          <>
            A BOQ lists all materials, quantities, and components required by
            contractors to complete a{" "}
            <span className="text-[#ed2967]">construction project.</span>
          </>
        }
        description={
          <p>
            At Shreshtha Consultants, our advanced automation software generates
            precise MEP designs and accurate BOQs, ensuring full compliance with NBC
            2016 standards and optimized project costs.
          </p>
        }
        imageSrc="/Services/Boq/herobg.png"
        imageAlt="Bill of Quantities (BOQ) services — Shreshtha Consultants"
        ctaText="Request Proposal"
        ctaLink="/contact-us#form"
      />

      <ServiceDeliverables
        kicker="What We Deliver"
        title="BOQ design deliverables"
        introText={
          <>
            <p>
              A Bill of Quantities (BOQ) is a vital construction document specifying the exact quality and quantity of MEP materials, equipment, and labor required for seamless procurement.
            </p>
            <div className="space-y-2.5">
              <p className="font-medium text-[#101418]">Our BOQ services include:</p>
              <ul className="space-y-1.5 pl-1">
                <li className="flex items-center gap-2.5">
                  <span className="size-1.5 shrink-0 rounded-full bg-[#ed2967]" />
                  <span>Comprehensive list of materials</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="size-1.5 shrink-0 rounded-full bg-[#ed2967]" />
                  <span>Curated contractors and vendors</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="size-1.5 shrink-0 rounded-full bg-[#ed2967]" />
                  <span>Expert product recommendations</span>
                </li>
              </ul>
            </div>
            <p>
              Shreshtha Consultants ensures precise documentation to streamline project execution.
            </p>
          </>
        }
        deliverables={BOQ_DELIVERABLES}
      />

      <ServiceCrossLinks
        kicker="Explore More"
        title="Our other MEP services"
        links={CROSS_LINKS}
      />

      <ServiceCTA
        kicker="Get Started"
        title="We are the MEP consultants for speedy site execution & lower project costs."
        buttonText="Request BOQ Proposal"
      />
    </div>
  );
}
