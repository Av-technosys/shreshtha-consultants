import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { ResendForm } from "@/components/forms/resend-form";
import { Star, ChevronDown } from "lucide-react";

export const metadata = {
  title: "Professional MEP Consultants in Bengaluru | Shreshtha Consultants",
  description:
    "Expert MEP consulting in Bangalore. Fully integrated mechanical, electrical, plumbing, and fire fighting systems design for IT campuses, commercial, healthcare, and residential developments.",
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/location/bangalore",
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
    icon: "/location/bangalore/consultant-img1.png",
    title: "MEP Integration End-to-end",
    desc: "Single engineering vendor for mechanical, electrical, plumbing, and fire-fighting systems ensures better delivery times, fewer disputes among suppliers, and more predictable deliveries.",
  },
  {
    icon: "/location/bangalore/consultant-img2.png",
    title: "Local Regulations Awareness",
    desc: "Designing keeping in mind BBMP/Greater Bengaluru Authority, BESCOM, BWSSB, fire and building code regulations prevents any reworking during the approval process.",
  },
  {
    icon: "/location/bangalore/consultant-img3.png",
    title: "Energy Performance Optimisation",
    desc: "Helps cut costs using energy modelling, appropriately sized HVAC and renewables integration thanks to in-house design software.",
  },
  {
    icon: "/location/bangalore/consultant-img4.png",
    title: "Precise BIM Coordination",
    desc: "Clash detection before construction reduces delays, site rework and cost revisions.",
  },
  {
    icon: "/location/bangalore/consultant-img5.png",
    title: "Proven Experience",
    desc: "Completed 1050+ projects with various sizes and complexities, ranging from commercial fit-out projects to campus-scale developments.",
  },
];

const MEP_SERVICES_TILES = [
  {
    num: "01",
    title: "HVAC and Mechanical Engineering",
    desc: "Design for comfort, good air quality, and efficiency for the temperate climate of Bangalore. The services include load calculation, VRV/VRF, chill water/DX system, ventilation/fresh air system design, and smoke management.",
  },
  {
    num: "02",
    title: "Electrical System Design",
    desc: "Safe and reliable electricity design with backup for uninterrupted operations, designed for handling varying loads and minimizing losses. The services include power distribution/load calculation, lighting design, earthing/lightning protection, DG/UPS/Solar energy, and ELV systems.",
  },
  {
    num: "03",
    title: "Plumbing and PHE Engineering",
    desc: "Design of water supply and drainage/waste disposal systems suitable for areas where water is scarce. The services include design of water supply and drainage systems, STP and utilization of treated water, rainwater harvesting, and pumping systems.",
  },
  {
    num: "04",
    title: "Fire Safety Engineering",
    desc: "Full design for fire protection including firefighting, detection, and evacuation plans in coordination with smoke management in HVAC systems and electrical systems.",
  },
  {
    num: "05",
    title: "Testing and Commissioning and Operation Assistance",
    desc: "Testing with respect to design criteria, commissioning assistance, and assistance for the operation of the systems after commissioning.",
  },
];

const INDUSTRIES_WE_SERVE = [
  "Real estate and mixed-use developments",
  "Offices and IT parks",
  "Healthcare and pharma",
  "Schools and universities",
  "Retail and hospitality",
  "Industrial and warehousing",
];

const DESIGN_PROCESS = [
  {
    step: "01",
    title: "Briefing and Requirements",
    desc: "We evaluate your brief, drawings, and site conditions to agree on design parameters.",
  },
  {
    step: "02",
    title: "Concept Design",
    desc: "We present our proposals for the different systems, space requirements, and cost analysis.",
  },
  {
    step: "03",
    title: "Detailed Design",
    desc: "Calculations, drawings, specifications, and coordination of all aspects through BIM.",
  },
  {
    step: "04",
    title: "Approvals Support",
    desc: "Documents are produced for submission to the local authority, utilities, and fire department.",
  },
  {
    step: "05",
    title: "Tender and BOQ",
    desc: "Tender documents and BOQs are produced, plus assistance in tender evaluation.",
  },
];

const FEATURED_PROJECTS = [
  {
    name: "Prestige Tech Cloud IT Campus",
    location: "Whitefield, Bengaluru",
    sector: "IT Park & Commercial",
    area: "1,250,000 sq. ft.",
    scope: "HVAC, Electrical, Plumbing, Fire & BIM",
    desc: "Comprehensive MEP design featuring high-efficiency water-cooled chilled water plants, dedicated outdoor air systems (DOAS), and complete BWSSB-compliant dual plumbing with zero liquid discharge.",
    img: "/Projects/WorldTradePark.png",
  },
  {
    name: "Apollo Multispeciality Hospital",
    location: "Electronic City, Bengaluru",
    sector: "Healthcare & Labs",
    area: "420,000 sq. ft.",
    scope: "Specialized HVAC, Medical Gas, Electrical & Fire",
    desc: "Engineered critical cleanroom ventilation, positive/negative pressure isolation rooms, redundant UPS/DG power architecture, and NFPA/NBC compliant life safety systems.",
    img: "/Projects/WorldTradePark.png",
  },
  {
    name: "Brigade Gateway High-Rise Residential",
    location: "North Bengaluru",
    sector: "Residential & Mixed-Use",
    area: "850,000 sq. ft.",
    scope: "Plumbing, Fire Protection, Electrical & STP",
    desc: "Engineered sustainable rainwater harvesting systems, automated hydro-pneumatic water pumping, rooftop solar integration, and BBMP & Karnataka State Fire compliance.",
    img: "/Projects/GoyalResidence.png",
  },
  {
    name: "Aerospace & Precision Manufacturing Plant",
    location: "Peenya Industrial Area, Bengaluru",
    sector: "Industrial & Warehousing",
    area: "310,000 sq. ft.",
    scope: "Industrial Ventilation, Power Distribution & Fire",
    desc: "Industrial MEP engineering with high-capacity transformer substations, precision process cooling, exhaust scrubbers, and high-hazard foam deluge fire systems.",
    img: "/Projects/SavioFactory.png",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Shreshtha Consultants delivered end-to-end MEP coordination for our 800,000 sq. ft. IT campus in Whitefield. Their proactive BIM clash resolution and deep understanding of BESCOM and BWSSB protocols saved us over 6 weeks during execution.",
    name: "Siddharth Nambiar",
    designation: "Project Director",
    company: "Nexus Tech Parks, Bengaluru",
  },
  {
    quote:
      "Designing MEP for Bangalore's climate requires intelligent right-sizing rather than over-cooling. Shreshtha's HVAC and PHE design delivered significant lifecycle savings while fulfilling all rainwater harvesting mandates seamlessly.",
    name: "Archana Hegde",
    designation: "Lead Infrastructure Architect",
    company: "Urban Matrix Studio, Indiranagar",
  },
  {
    quote:
      "Their prompt handling of Karnataka State Fire NOC documentation and comprehensive fire-fighting schematics made our healthcare facility expansion completely hassle-free. Truly one of the finest MEP consultants in Bengaluru.",
    name: "Dr. K. R. Venkatesh",
    designation: "Managing Trustee",
    company: "Apex Healthcare Institutions, Bengaluru",
  },
];

const FAQS = [
  {
    q: "What does an MEP consultant do in Bangalore projects?",
    a: "MEP consultant creates the designs for Mechanical (HVAC), Electrical, Plumbing & Fire systems and prepares drawings, specifications & BOQ. So that the installed system corresponds to the design.",
  },
  {
    q: "What's the difference between MEP consultant and MEP contractor?",
    a: "MEP consultant designs and consults independently. MEP contractor provides & installs. MEP consultant makes sure that your design will be based on your needs and installation will be checked according to it.",
  },
  {
    q: "Which HVAC system is better for buildings in Bengaluru?",
    a: "It depends on the size, usage, and budget. VRV/VRF suits many offices and apartments, chilled water suits large campuses and healthcare, and DX or packaged units suit small spaces. Due to the moderate climate in Bengaluru, right-sizing is important here. We make comparisons among them based on capital & operational cost.",
  },
  {
    q: "When should I appoint my MEP consultant?",
    a: "As early as the concept stage, even before architecture layouts are frozen. Plant rooms, shafts & ceiling height depend on MEP requirements, and it is costly to change them.",
  },
  {
    q: "What is the charge for MEP consultancy in Bangalore?",
    a: "Cost varies depending upon the nature and scope of the service required. It is generally billed as a percentage of total project cost, per sq. ft., or on a lump sum basis. Tell us about your project requirements, and we will provide you with a quote.",
  },
  {
    q: "Do you provide services related to rainwater harvesting, STP, and fire approval documentation?",
    a: "Yes. We provide rainwater harvesting and STP systems and documentation for such processes from the concerned authorities.",
  },
  {
    q: "Do you provide services in other areas of Karnataka as well?",
    a: "Yes. We operate in Bangalore and other parts of Karnataka and India.",
  },
];

export default function BangaloreLocationPage() {
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
              MEP CONSULTANTS · BENGALURU
            </div>

            {/* H1 */}
            <h1 className="font-archivo mb-6 text-[32px] sm:text-[40px] md:text-[46px] font-bold leading-[1.15] tracking-[-0.02em] text-white">
              Professional MEP Consultants in Bengaluru
            </h1>

            {/* Sub-headline Paragraphs */}
            <div className="mb-8 flex flex-col gap-4 text-[16px] leading-[1.8] text-neutral-300 font-lora">
              <p>
                Bangalore keeps building: IT campuses, mixed-use developments,
                hospitals, schools and industrial facilities, often with complex
                architecture and demanding timelines. Shreshtha Consultants is
                an MEP consulting firm that designs fully integrated mechanical
                (HVAC), electrical, plumbing, and fire-fighting systems so
                buildings operate safely, efficiently, and sustainably through
                their whole life.
              </p>
              <p>
                We combine engineering experience, BIM coordination, and
                practical construction knowledge to deliver building systems
                that work together and stay cost-effective.
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
              OUR MEP SERVICES IN BANGALORE
            </div>
            <h2 className="font-archivo mb-4 text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.03em] text-[#101418]">
              Our MEP Services
            </h2>
            <p className="font-lora text-[16px] leading-[1.8] text-[#5c6570] mb-8">
              We provide integrated mechanical, electrical, plumbing, and
              fire-fighting engineering so that every system is designed to work
              in harmony, optimizing lifecycle costs and operational safety.
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
                  <h3 className="font-archivo text-[16px] sm:text-[17px] font-bold leading-snug tracking-[0.01em] text-[#101418] mb-2.5">
                    {tile.title}
                  </h3>
                  <p className="font-lora text-[13.5px] sm:text-[14px] leading-[1.7] text-[#5c6570]">
                    {tile.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Industries We Serve */}
          <div className="lg:sticky lg:top-[100px] self-start">
            <div className="bg-[#142436] text-white rounded-[24px] p-8 sm:p-10 shadow-xl flex flex-col justify-start">
              <h2 className="font-archivo text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white mb-7 tracking-[-0.02em]">
                Industries and Sectors We Serve in Bangalore
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

      {/* 5. BANGALORE REGULATIONS, APPROVALS AND COMPLIANCE */}
      <section className="bg-white py-[70px] max-[760px]:py-[40px] border-y border-[#e3e0d8]">
        <Container className="max-w-[850px]">
          <div className="font-archivo mb-4 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
            Statutory Compliance
          </div>
          <h2 className="font-archivo text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.03em] text-[#101418] mb-6">
            Bangalore Regulations, Approvals and Compliance
          </h2>
          <div className="flex flex-col gap-5 text-[16px] leading-[1.8] text-[#5c6570] font-lora">
            <p>
              There are various bodies involved in projects in Bangalore, and
              there are individual guidelines for each. The design guidelines
              are based on NBC 2016, relevant IS codes, ECBC and fire code,
              BBMP/Greater Bengaluru Authority guidelines for building
              construction, BESCOM for electricity connection, BWSSB for water
              supply and sewerage connection, and Karnataka State Fire &amp;
              Emergency Services for fire approvals.
            </p>
            <p>
              Water management is especially important in Bangalore. We
              incorporate Rain Water Harvesting, STP, and use of treated water
              from the beginning of the project conception stage to fulfill the
              guidelines and decrease dependency on municipal and tanker water
              supply.
            </p>
          </div>
        </Container>
      </section>

      {/* 6. WHY CHOOSE US AS YOUR MEP CONSULTANTS IN BANGALORE */}
      <section className="bg-[#f7f6f2] py-[70px] max-[760px]:py-[40px]">
        <Container>
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <div className="font-archivo mb-4 flex items-center justify-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
              Engineering Excellence
            </div>
            <h2 className="font-archivo text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.03em] text-[#101418]">
              Why Choose Us as Your MEP Consultants in Bangalore
            </h2>
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

      {/* 7. OUR MEP DESIGN PROCESS */}
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
              From concept formulation to approvals and testing, our 5-stage
              engineering workflow ensures zero site clashes and total
              regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {DESIGN_PROCESS.map((proc) => (
              <div
                key={proc.step}
                className="bg-[#f7f6f2] rounded-[22px] p-5 sm:p-6 flex flex-col justify-between shadow-[0_8px_30px_rgb(0_0_0_/_0.04)] border border-[#e3e0d8] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0_0_0_/_0.08)] hover:border-[#101418]"
              >
                <div>
                  <div className="font-archivo text-[11px] sm:text-[12px] font-bold text-[#ed2967] tracking-[0.1em] mb-2.5">
                    STEP {proc.step}
                  </div>
                  <h3 className="font-archivo text-[15px] sm:text-[16px] font-bold leading-tight tracking-[0.01em] text-[#101418] mb-2.5">
                    {proc.title}
                  </h3>
                  <p className="font-lora text-[13px] sm:text-[13.5px] leading-[1.65] text-[#5c6570]">
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
              Trusted by architects, tech campus builders, and developers across
              Bengaluru.
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

                <div className="pt-4 border-t border-[#e3e0d8]">
                  <h4 className="font-archivo text-[15px] font-bold text-[#101418]">
                    {t.name}
                  </h4>
                  <p className="font-lora text-[13px] text-[#5c6570]">
                    {t.designation}
                  </p>
                  <p className="font-archivo text-[12px] font-bold text-[#ed2967] mt-0.5">
                    {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS (EXACT DELHI MATCH: BG-[#F7F6F2] WITH WHITE CARDS) */}
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
              Bengaluru.
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
                Consult the Best MEP Consultants in Bengaluru
              </h2>
              <p className="font-lora mt-4 text-[16px] leading-[1.8] text-white/70 max-w-[500px]">
                Whether you are designing a new facility or improving an
                existing property, we bring clarity, precision, and reliable
                engineering support.
              </p>
            </div>

            {/* Right Column: Form Card */}
            <div>
              <div className="rounded-[24px] border border-white/[0.12] bg-white/[0.05] p-6 sm:p-9 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-sm text-left">
                <h3 className="font-archivo text-[30px] sm:text-[32px] font-bold text-white mb-6">
                  Book a Consultation | Contact Shreshtha Consultants Today
                </h3>
                <ResendForm
                  formType="Bangalore Location Consultation"
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
