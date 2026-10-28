import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { ResendForm } from "@/components/forms/resend-form";
import { Star, ChevronDown } from "lucide-react";

export const metadata = {
  title: "Professional MEP Consultants in Chennai | Shreshtha Consultants",
  description:
    "Top-tier MEP consulting services in Chennai. Mechanical (HVAC), electrical, plumbing, firefighting, and BIM engineering solutions for coastal climatic conditions, commercial, and industrial facilities.",
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/location/chennai",
  },
};

const STATS = [
  { n: "1,050+", l: "Projects Completed" },
  { n: "25M+", l: "Sq.Ft Areas Worked" },
  { n: "25+", l: "Years of Experience" },
  { n: "500+", l: "Clients Served" },
  { n: "50+", l: "Team Size" },
];

const TRUST_LOGOS = [
  { id: 1, src: "/Home/clients/logo-1.png", alt: "Client Logo 1" },
  { id: 2, src: "/Home/clients/logo-2.png", alt: "Client Logo 2" },
  { id: 3, src: "/Home/clients/logo-3.png", alt: "Client Logo 3" },
  { id: 4, src: "/Home/clients/logo-4.png", alt: "Client Logo 4" },
];

const WHY_CHOOSE_US = [
  {
    icon: "/location/chennai/card1-img.png",
    title: "MEP engineering expert team",
    desc: "Team of domain experts in HVAC, electrical design, water engineering, and fire-safety compliance.",
  },
  {
    icon: "/location/chennai/card2-img.png",
    title: "Domain expertise with industry projects",
    desc: "We have approx. 1050+ completed projects all across India in varied industries requiring interdisciplinary collaboration.",
  },
  {
    icon: "/location/chennai/card3-img.png",
    title: "Compliance and safety assurances",
    desc: "Our projects are based on CMDA standards, NBC, IS code compliance, and fire department norms.",
  },
  {
    icon: "/location/chennai/card4-img.png",
    title: "Efficient engineering and cost savings",
    desc: "Accurate loading calculation, energy modelling, and planning of resources can help save life cycle cost.",
  },
  {
    icon: "/location/chennai/card5-img.png",
    title: "Effective client delivery",
    desc: "Effective communication and no site holdups.",
  },
];

const MEP_SERVICES_TILES = [
  {
    num: "01",
    title: "HVAC and Mechanical Engineering",
    points: [
      "Custom HVAC planning for coastal climate challenges",
      "Humidity control systems for comfort and operational efficiency",
      "Industrial HVAC solutions with high capacity and durability",
    ],
  },
  {
    num: "02",
    title: "Electrical Planning and Power Distribution",
    points: [
      "Efficient power supply design for commercial, industrial, residential, and public infrastructure",
      "Reliable power distribution and load management",
    ],
  },
  {
    num: "03",
    title: "Plumbing, Drainage and Water Supply",
    points: [
      "Plumbing system design focused on water conservation",
      "Sustainable water supply and drainage systems",
    ],
  },
  {
    num: "04",
    title: "Fire-Fighting and Life Safety",
    points: [
      "Fire suppression and alarm system design",
      "Fire hydrant and evacuation system design",
    ],
  },
  {
    num: "05",
    title: "Sustainability and Green Building Advisory",
    points: [
      "Energy-efficient design and environmentally conscious infrastructure planning",
      "Advisory support for green building standards and practices",
    ],
  },
];

const INDUSTRIES_WE_SERVE = [
  "IT parks and commercial workspaces",
  "Apartment communities and residential townships",
  "Manufacturing and warehousing units",
  "Hospitals, clinics and labs",
  "Universities and educational facilities",
  "Hotels and hospitality",
  "Shopping centres and entertainment complexes",
];

const DESIGN_PROCESS = [
  {
    step: "01",
    title: "Briefing and requirements",
    desc: "We review your brief, drawings and site conditions, and agree design criteria.",
  },
  {
    step: "02",
    title: "Concept design",
    desc: "We propose system options, plant and shaft space needs, and early cost comparisons.",
  },
  {
    step: "03",
    title: "Detailed design",
    desc: "Calculations, layouts, schematics and specifications, coordinated through BIM.",
  },
  {
    step: "04",
    title: "Approvals support",
    desc: "Documentation prepared for local authority, utility and fire submissions.",
  },
  {
    step: "05",
    title: "Tender and BOQ",
    desc: "Tender documents and BOQs, plus support in evaluating contractor bids.",
  },
  {
    step: "06",
    title: "Site coordination and commissioning",
    desc: "Site queries, installation reviews, and testing and commissioning support.",
  },
];

const TESTIMONIALS = [
  {
    initials: "HP",
    name: "Harshad Patil",
    role: "Strategy Head, Kolte Patil Developers",
    quote:
      "Shreshtha offers a unique AI-enabled consultancy for MEP. With AI, optimised MEP designs to save materials, clash-coordinated drawings & multiple routing options are now possible.",
  },
  {
    initials: "SK",
    name: "Satish Kamble",
    role: "MEP Head, HOSMAC",
    quote:
      "We have nurtured a strong partnership with Shreshtha for our hospital projects. Their consultancy support for MEP helps us with quick & highly-detailed drawings for efficient project execution.",
  },
  {
    initials: "AJ",
    name: "Ar. Atishay Jain",
    role: "Managing Director, AJ Studios",
    quote:
      "As architects, we are often pushed to deliver on tight deadlines. Shreshtha team has helped us identify key coordination items to meet critical deadlines with coordinated designs.",
  },
];

const FAQS = [
  {
    q: "What is the role of an MEP consultant?",
    a: "The MEP consultant designs and creates the drawings and specifications for mechanical (HVAC), electrical, plumbing, and firefighting systems and assists in approvals, tendering, and commissioning processes to ensure that the systems are installed as designed.",
  },
  {
    q: "Which HVAC system is the most suitable in Chennai considering its humid climate?",
    a: "The system to use will be dependent on the type of building, but generally VRV/VRF for offices, hotels, and apartments, while a chilled water plant for campus and healthcare buildings. The system to be used in Chennai will not only need to take into consideration cooling but also moisture control; thus, capital and operating costs are compared.",
  },
  {
    q: "How do you design for flood risks in Chennai?",
    a: "In designing for flood risks in Chennai, we look at the stormwater drainage system design and location of critical electrical equipment.",
  },
  {
    q: "When Should I Appoint An MEP Consultant?",
    a: "Right from the concept stage before finalizing architectural layouts. As plant rooms, ducts, and ceiling heights need to be considered for the MEP requirement, altering them later will increase costs.",
  },
  {
    q: "How much does MEP consultancy service charge in Chennai?",
    a: "It depends on the scale, nature, complexity, and scope of the services. It can be charged as a percentage of the total cost of the project, rate per sq. ft. of the total floor area, or even a lump sum. Share your project details and get your proposal.",
  },
  {
    q: "Are you working in other areas of Tamil Nadu?",
    a: "Yes. We work in Chennai and other parts of Tamil Nadu and India.",
  },
];

export default function ChennaiLocationPage() {
  return (
    <div className="bg-[#f7f6f2] text-[#101418] font-lora antialiased min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#142436] pt-[120px] pb-[100px] md:pb-[120px] max-[760px]:pt-[100px] max-[760px]:pb-[90px] text-white">
        {/* Background & Overlays */}
        <div className="absolute inset-0 z-0 bg-[#142436]">
          <div className="absolute inset-0 bg-[#142436]/80 sm:bg-gradient-to-r sm:from-[#142436] sm:from-10% sm:via-[#142436]/85 sm:to-[#142436]/95" />
          {/* Subtle Radial Glow */}
          <div className="absolute -top-32 -right-24 w-[540px] h-[540px] rounded-full bg-[radial-gradient(circle,rgba(237,41,104,0.15),transparent_70%)] pointer-events-none" />
        </div>

        {/* Hero Content */}
        <Container className="relative z-10 w-full">
          <div className="max-w-[760px]">
            {/* Kicker */}
            <div className="font-archivo mb-6 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-neutral-300 before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
              MEP CONSULTANTS · CHENNAI
            </div>

            {/* H1 */}
            <h1 className="font-archivo mb-6 text-[32px] sm:text-[40px] md:text-[46px] font-bold leading-[1.15] tracking-[-0.02em] text-white">
              Professional MEP Consultants in Chennai
            </h1>

            {/* Sub-headline Paragraphs */}
            <div className="mb-8 flex flex-col gap-4 text-[16px] leading-[1.8] text-neutral-300 font-lora">
              <p>
                Development in Chennai takes place in commercial areas,
                residential complexes, industries, and institutions, each of
                which has to deal with issues related to heat, humidity, sea
                breeze, and heavy monsoons. Shreshtha Consultants is an MEP
                Consulting Firm that provides mechanical (HVAC), electrical,
                plumbing, and firefighting solutions for structures in Chennai’s
                climatic conditions.
              </p>
              <p>
                We offer solutions in the form of detailed planning, value
                engineering, BIM-coordinated design, and implementation of the
                designs in various buildings. We serve as a trusted engineering
                partner in growing Chennai by providing energy-efficient
                designs.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="#form"
                className="font-archivo group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/10 bg-[#142436]/80 px-6 py-3.5 text-[13px] font-bold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#142436]"
              >
                Request a Proposal{" "}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. OVERLAPPING STATS BOX */}
      <section className="relative z-20 -mt-[45px] md:-mt-[55px]">
        <Container>
          <div className="bg-white border border-[#e3e0d8] rounded-[24px] shadow-[0_8px_30px_rgb(0_0_0_/_0.04)] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#e3e0d8] overflow-hidden">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 text-center flex flex-col justify-center items-center"
              >
                <div className="font-archivo text-[32px] sm:text-[36px] lg:text-[40px] font-bold text-[#ed2967] leading-tight">
                  {stat.n}
                </div>
                <div className="font-archivo text-[11px] sm:text-[11.5px] font-bold tracking-[0.12em] uppercase text-[#5c6570] mt-1.5">
                  {stat.l}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. INDUSTRY TRUSTED LOGOS */}
      <section className="py-[60px] max-[760px]:py-[40px] text-center">
        <Container>
          <p className="font-archivo text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] mb-8 inline-flex items-center justify-center gap-2.5 before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
            Industry Trusted
          </p>
          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
            {TRUST_LOGOS.map((logo) => (
              <div
                key={logo.id}
                className="bg-white py-3.5 sm:py-4 px-7 sm:px-9 rounded-[16px] border border-[#e3e0d8] shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={65}
                  unoptimized
                  className="h-11 sm:h-13 md:h-14 w-auto max-w-[155px] sm:max-w-[180px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. OUR MEP SERVICES & INDUSTRIES WE SERVE */}
      <section className="bg-[#f7f6f2] py-[70px] max-[760px]:py-[40px] border-t border-[#e3e0d8]">
        <Container className="grid grid-cols-1 lg:grid-cols-[1.22fr_0.78fr] gap-10 lg:gap-14 items-start">
          {/* Left Column: Our MEP Services */}
          <div>
            <div className="font-archivo mb-4 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
              OUR MEP SERVICES IN CHENNAI
            </div>
            <h2 className="font-archivo mb-4 text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.03em] text-[#101418]">
              MEP Consulting Services in Chennai
            </h2>
            <p className="font-lora text-[16px] leading-[1.8] text-[#5c6570] mb-8">
              We provide comprehensive building services engineering tailored
              for coastal climate durability, energy efficiency, and operational
              excellence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {MEP_SERVICES_TILES.map((tile, idx) => (
                <div
                  key={tile.num}
                  className={`bg-white border border-[#e3e0d8] rounded-[18px] sm:rounded-[20px] p-5 sm:p-6 shadow-[0_8px_30px_rgb(0_0_0_/_0.04)] transition-all duration-300 hover:border-[#101418] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0_0_0_/_0.08)] flex flex-col justify-start ${
                    idx === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="font-archivo text-[11px] sm:text-[12px] font-bold text-[#ed2967] tracking-[0.1em] mb-2 sm:mb-2.5">
                    {tile.num}
                  </div>
                  <h3 className="font-archivo text-[16px] sm:text-[17px] font-bold leading-snug tracking-[0.01em] text-[#101418] mb-3">
                    {tile.title}
                  </h3>
                  <ul className="space-y-2">
                    {tile.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="font-lora text-[13.5px] sm:text-[14px] leading-[1.65] text-[#5c6570] flex items-start gap-2.5"
                      >
                        <span className="text-[#ed2967] mt-1 shrink-0 text-[10px]">
                          ●
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Industries We Serve*/}
          <div className="lg:sticky lg:top-[100px] self-start">
            <div className="bg-[#142436] text-white rounded-[24px] p-8 sm:p-10 shadow-xl flex flex-col justify-start">
              <h2 className="font-archivo text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white mb-7 tracking-[-0.02em]">
                Industries We Serve in Chennai
              </h2>

              <div className="flex flex-col items-start gap-3.5">
                {INDUSTRIES_WE_SERVE.map((ind, idx) => (
                  <span
                    key={idx}
                    className="font-archivo text-[13px] sm:text-[13.5px] font-medium border border-white/10 px-5 py-3 rounded-full text-white/90 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-[#142436]"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. CHENNAI REGULATIONS, APPROVALS AND COMPLIANCE */}
      <section className="bg-white py-[70px] max-[760px]:py-[40px] border-y border-[#e3e0d8]">
        <Container className="max-w-[850px]">
          <div className="font-archivo mb-4 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
            Statutory Compliance
          </div>
          <h2 className="font-archivo text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.03em] text-[#101418] mb-6">
            Chennai Regulations, Approvals and Compliance
          </h2>
          <div className="flex flex-col gap-5 text-[16px] leading-[1.8] text-[#5c6570] font-lora">
            <p>
              In Chennai, there are multiple authorities involved, and each one
              has its own set of specifications. Our design will be according to
              the NBC 2016 and other IS codes, ECBC, fire safety specifications,
              and CMDA and DTCP building regulations, and the Tamil Nadu
              Electricity Board for the power supply and metering. Additionally,
              CMWSSB for water and sewerage, and Tamil Nadu Fire and Rescue
              Services for fire approvals should also be taken into
              consideration. It is recommended to confirm each authority and its
              nomenclature.
            </p>
            <p>
              It assists in saving time from getting delayed at the approval
              stage.
            </p>
          </div>
        </Container>
      </section>

      {/* 6. WHAT MAKES US THE PREFERRED MEP CONSULTANTS IN CHENNAI */}
      <section className="bg-[#f7f6f2] py-[70px] max-[760px]:py-[40px]">
        <Container>
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <div className="font-archivo mb-4 flex items-center justify-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
              Engineering Excellence
            </div>
            <h2 className="font-archivo text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.03em] text-[#101418]">
              What Makes Us the Preferred MEP Consultants in Chennai
            </h2>
            <p className="font-lora mt-4 text-[16px] leading-[1.8] text-[#5c6570]">
              Good engineering is a blend of experience, accuracy, and
              practicality. Here is how we do it differently:
            </p>
          </div>

          {/* Top Row: 3 White Cards on Cream Background */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {WHY_CHOOSE_US.slice(0, 3).map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] p-6 sm:p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0_0_0_/_0.04)] border border-[#e3e0d8] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0_0_0_/_0.08)] hover:border-[#101418]"
              >
                <div className="w-[85px] h-[85px] relative mb-6 flex items-center justify-center">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={78}
                    height={78}
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <h3 className="font-archivo text-[16px] sm:text-[17px] font-bold leading-tight tracking-[0.01em] text-[#101418] mb-3">
                  {card.title}
                </h3>
                <p className="font-lora text-[13.5px] leading-[1.65] text-[#5c6570]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 White Cards Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[850px] mx-auto">
            {WHY_CHOOSE_US.slice(3, 5).map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] p-6 sm:p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0_0_0_/_0.04)] border border-[#e3e0d8] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0_0_0_/_0.08)] hover:border-[#101418]"
              >
                <div className="w-[85px] h-[85px] relative mb-6 flex items-center justify-center">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={78}
                    height={78}
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <h3 className="font-archivo text-[16px] sm:text-[17px] font-bold leading-tight tracking-[0.01em] text-[#101418] mb-3">
                  {card.title}
                </h3>
                <p className="font-lora text-[13.5px] leading-[1.65] text-[#5c6570]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. OUR MEP DESIGN PROCESS*/}
      <section className="bg-white py-[70px] max-[760px]:py-[40px] border-y border-[#e3e0d8]">
        <Container>
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <div className="font-archivo mb-4 flex items-center justify-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
              Systematic Engineering
            </div>
            <h2 className="font-archivo text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.03em] text-[#101418]">
              Our MEP Design Process
            </h2>
            <p className="font-lora mt-4 text-[16px] leading-[1.8] text-[#5c6570]">
              From concept formulation to testing and commissioning, our 6-stage
              engineering workflow ensures zero site clashes and total
              regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {DESIGN_PROCESS.map((proc) => (
              <div
                key={proc.step}
                className="bg-[#f7f6f2] rounded-[22px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_8px_30px_rgb(0_0_0_/_0.04)] border border-[#e3e0d8] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0_0_0_/_0.08)] hover:border-[#101418]"
              >
                <div>
                  <div className="font-archivo text-[11px] sm:text-[12px] font-bold text-[#ed2967] tracking-[0.1em] mb-2.5">
                    STEP {proc.step}
                  </div>
                  <h3 className="font-archivo text-[16px] sm:text-[17px] font-bold leading-tight tracking-[0.01em] text-[#101418] mb-2.5">
                    {proc.title}
                  </h3>
                  <p className="font-lora text-[13.5px] leading-[1.65] text-[#5c6570]">
                    {proc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. WHAT OUR CLIENTS SAY */}
      <section className="bg-[#f7f6f2] py-[70px] max-[760px]:py-[40px] border-t border-[#e3e0d8]">
        <Container>
          <div className="text-center max-w-[620px] mx-auto mb-14">
            <div className="font-archivo mb-4 flex items-center justify-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
              Client Testimonials
            </div>
            <h2 className="font-archivo text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.03em] text-[#101418]">
              What Our Clients Say
            </h2>
            <p className="font-lora mt-4 text-[16px] leading-[1.8] text-[#5c6570]">
              Trusted by leading architects, industrial developers, and project
              managers across Chennai.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden gap-4 pb-4 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="w-[82%] sm:w-[360px] md:w-auto shrink-0 snap-start bg-white border border-[#e3e0d8] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgb(0_0_0_/_0.04)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0_0_0_/_0.08)] transition-all duration-300"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-[#ed2967] mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#ed2967] text-[#ed2967]"
                      />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="font-lora text-[14px] sm:text-[15px] text-[#101418] leading-[1.75] italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e3e0d8] flex items-center gap-3.5">
                  <div className="font-archivo grid size-[46px] flex-none place-items-center rounded-full bg-[#101418] font-bold text-[#ed2967]">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-archivo text-[15px] font-bold text-[#101418]">
                      {t.name}
                    </h4>
                    <span className="font-lora text-[12.5px] text-[#5c6570] block">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-[#f7f6f2] py-[70px] max-[760px]:py-[40px] border-t border-[#e3e0d8]">
        <Container className="max-w-[850px]">
          <div className="text-center mb-12">
            <div className="font-archivo mb-4 flex items-center justify-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
              Got Questions?
            </div>
            <h2 className="font-archivo text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.03em] text-[#101418]">
              Frequently Asked Questions
            </h2>
            <p className="font-lora mt-4 text-[16px] leading-[1.8] text-[#5c6570]">
              Everything you need to know about appointing MEP consultants in
              Chennai.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-[20px] border border-[#e3e0d8] bg-white transition-all duration-300 open:shadow-[0_8px_30px_rgb(0_0_0_/_0.04)]"
              >
                <summary className="font-archivo flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6 text-[15px] sm:text-[16px] font-bold text-[#101418] outline-none transition-colors hover:text-[#ed2967] group-open:text-[#ed2967] [&::-webkit-details-marker]:hidden">
                  <span className="leading-snug">{faq.q}</span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#f7f6f2] text-[#101418] transition-all duration-300 group-open:rotate-180 group-open:bg-[#101418] group-open:text-white">
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </summary>
                <div className="font-lora px-5 sm:px-6 pb-6 text-[14px] sm:text-[14.5px] leading-[1.75] text-[#5c6570]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* 10. BOOK A CONSULTATION FORM */}
      <section className="bg-[#142436] text-white py-16 md:py-24" id="form">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading and Text */}
            <div>
              <div className="font-archivo mb-4 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-white/60 before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
                Book a Consultation
              </div>
              <h2 className="font-archivo text-[28px] sm:text-[36px] md:text-[46px] font-bold leading-[1.15] tracking-[-0.03em] text-white">
                Partner With Top MEP Consulting Experts in Chennai
              </h2>
              <p className="font-lora mt-4 text-[16px] leading-[1.8] text-white/70 max-w-[500px]">
                If you’re searching for dependable MEP consultants in Chennai,
                Shreshtha Consultants brings the technical strength and
                execution support needed to deliver a successful project.
              </p>
            </div>

            {/* Right Column: Form Card */}
            <div>
              <div className="rounded-[24px] border border-white/[0.12] bg-white/[0.05] p-6 sm:p-9 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-sm text-left">
                <h3 className="font-archivo text-[30px] sm:text-[32px] font-bold text-white mb-6">
                  Book a Consultation | Contact Shreshtha Consultants Today
                </h3>
                <ResendForm
                  formType="Chennai Location Consultation"
                  className="flex flex-col gap-4"
                >
                  <div className="flex flex-col gap-2">
                    <label className="font-archivo text-[13px] font-bold text-white/90">
                      Name*
                    </label>
                    <input
                      className="w-full rounded-xl border border-white/[0.18] bg-white/[0.08] px-5 py-[13px] text-[15px] text-white placeholder:text-white/40 outline-none transition focus:border-[#ed2967] focus:bg-white/[0.12] focus:shadow-[0_0_0_4px_rgba(237,41,104,0.25)]"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-archivo text-[13px] font-bold text-white/90">
                      Email*
                    </label>
                    <input
                      className="w-full rounded-xl border border-white/[0.18] bg-white/[0.08] px-5 py-[13px] text-[15px] text-white placeholder:text-white/40 outline-none transition focus:border-[#ed2967] focus:bg-white/[0.12] focus:shadow-[0_0_0_4px_rgba(237,41,104,0.25)]"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-archivo text-[13px] font-bold text-white/90">
                      Phone*
                    </label>
                    <input
                      className="w-full rounded-xl border border-white/[0.18] bg-white/[0.08] px-5 py-[13px] text-[15px] text-white placeholder:text-white/40 outline-none transition focus:border-[#ed2967] focus:bg-white/[0.12] focus:shadow-[0_0_0_4px_rgba(237,41,104,0.25)]"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91"
                    />
                  </div>
                  <div className="pt-2">
                    <button
                      className="font-archivo group flex w-full items-center justify-center gap-2.5 rounded-full bg-[#ed2967] hover:bg-white text-white hover:text-[#142436] px-8 py-[14px] sm:py-[18px] text-[15px] font-bold transition duration-300 shadow-lg shadow-[#ed2967]/25 cursor-pointer"
                      type="submit"
                    >
                      Request a Proposal{" "}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </ResendForm>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
