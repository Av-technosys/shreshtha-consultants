import { ServiceHero } from "@/components/services/service-hero";
import { ServiceDeliverables } from "@/components/services/service-deliverables";
import { ServiceCrossLinks } from "@/components/services/service-cross-links";
import { ServiceCTA } from "@/components/services/service-cta";

export const metadata = {
  title: "Shreshtha Consultants – Expert Plumbing Consultants India",
  description:
    "Top plumbing design & drainage services by Shreshtha Consultants — efficient water supply, compliant systems & cost-effective solutions across India.",
};

const PLUMBING_DELIVERABLES = [
  {
    title: "BOQ",
    description:
      "Detailed plumbing system BOQ stating the quality and quantity of equipment required at optimum cost.",
    imageSrc: "/Services/Plumbing/designdel1.png",
  },
  {
    title: "Plumbing Water Supply",
    imageSrc: "/Services/Plumbing/designdel2.png",
  },
  {
    title: "Plumbing SLD",
    imageSrc: "/Services/Plumbing/designdel3.png",
  },
  {
    title: "Plumbing DBR",
    imageSrc: "/Services/Plumbing/designdel4.png",
  },
  {
    title: "Plumbing Drainage Layout",
    imageSrc: "/Services/Plumbing/designdel5.png",
  },
];

const CROSS_LINKS = [
  { title: "HVAC", href: "/services/hvac" },
  { title: "Fire Fighting", href: "/services/fire-fighting" },
  { title: "Safety and Security", href: "/services/safety-and-security" },
  { title: "Electrical", href: "/services/electrical" },
  { title: "BOQ", href: "/boq" },
  { title: "BIM", href: "/bim" },
];

export default function PlumbingPage() {
  return (
    <div className="bg-[#f7f6f2] text-[#101418]">
      <ServiceHero
        kicker="Our Services · Plumbing"
        title={
          <>
            Plumbing systems are intricate pipeline structures that form the{" "}
            <span className="text-[#ed2967]">lifeblood of a building</span>.
          </>
        }
        description={
          <>
            <p>
              At Shreshtha Consultants, we specialize in comprehensive plumbing
              design, by leveraging advanced technology and our deep industry
              knowledge. Shreshtha Consultants delivers plumbing solutions that
              are not only efficient and code-compliant but also tailored to
              each project’s unique requirements. Our approach ensures that
              every aspect of your building’s plumbing system is meticulously
              planned and executed to the highest standards, ensuring full
              compliance with the National Building Codes (NBC), 2016.
            </p>
          </>
        }
        imageSrc="/Services/Plumbing/herobg.png"
        imageAlt="Plumbing design services — Shreshtha Consultants"
        ctaText="Request Proposal"
        ctaLink="/contact-us#form"
      />
      <ServiceDeliverables
        kicker="What We Deliver"
        title="Plumbing design deliverables"
        introText={
          <>
            <p>
              Plumbing drawings are the blueprint of a building&apos;s system,
              detailing the intricacies of water, drainage, and pipeline networks.
            </p>
            <p>
              We combine cutting-edge technology with deep expertise to deliver
              optimized, future-ready plumbing designs tailored to each
              project&apos;s unique needs.
            </p>
          </>
        }
        deliverables={PLUMBING_DELIVERABLES}
      />
      <ServiceCrossLinks
        kicker="Explore More"
        title="Our other MEP services"
        links={CROSS_LINKS}
      />
      <ServiceCTA
        kicker="Get Started"
        title="We are the MEP consultants for speedy site execution & lower project costs."
        buttonText="Request Plumbing Proposal"
      />
    </div>
  );
}
