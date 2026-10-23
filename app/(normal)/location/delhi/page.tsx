import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { ResendForm } from "@/components/forms/resend-form";
import { Star, ChevronDown } from "lucide-react";

export const metadata = {
  title: "Best MEP Consulting Services in Delhi | Shreshtha Consultants",
  description:
    "Top-tier MEP consulting services in Delhi. Shreshtha Consultants provides expert solutions for mechanical, electrical, and plumbing engineering projects.",
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/location/delhi",
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

const MEP_SERVICES_TILES = [
  {
    num: "01",
    title: "HVAC Design and Consulting",
    desc: "Comfort, air quality, and energy efficiency, designed for Delhi's extreme climate. Services include load calculations, system selection, VRV/VRF, chilled water and DX systems, ventilation, and smoke management.",
  },
  {
    num: "02",
    title: "Electrical Design and Consulting",
    desc: "Safe, reliable, and efficient power for every kind of building. Services include power distribution and load calculations, lighting design (interior and exterior), earthing and lightning protection, DG, UPS and renewable energy integration, and extra-low-voltage (ELV) systems.",
  },
  {
    num: "03",
    title: "Plumbing and Public Health Engineering",
    desc: "Water supply, drainage and conservation systems designed for reliability and low maintenance. Services include water supply and drainage design, sewerage and stormwater management, rainwater harvesting, water treatment and pumping systems.",
  },
  {
    num: "04",
    title: "Fire Fighting and Fire Alarm Design",
    desc: "Fire protection systems designed to NBC and local fire service requirements, coordinated with HVAC smoke management and electrical systems.",
  },
  {
    num: "05",
    title: "BIM and MEP Coordination",
    desc: "Coordinated 3D models to detect clashes among MEP, structural, and architectural systems before construction begins, reducing rework and delays on site.",
  },
  {
    num: "06",
    title: "Energy Efficiency and Green Building Support",
    desc: "Design strategies and documentation support for ECBC compliance and green building ratings, including IGBC, GRIHA, and LEED.",
  },
  {
    num: "07",
    title: "Tender Support and Site Supervision",
    desc: "BOQs, technical specifications, tender evaluation, site coordination, and testing and commissioning support, so the installed systems match the design intent.",
  },
];

const INDUSTRIES_WE_SERVE = [
  "Residential buildings and townships",
  "Commercial offices",
  "Retail malls and mixed-use developments",
  "Hotels and hospitality",
  "Hospitals and healthcare facilities",
  "Educational institutions",
  "Industrial and warehouse facilities",
];

const HVAC_APPROACH = [
  {
    title: "Accurate load calculations",
    desc: "Based on the building's use, orientation, envelope and occupancy, not rules of thumb.",
  },
  {
    title: "System selection by building type",
    desc: "VRV/VRF suits offices and hotels. Chilled water suits large malls, hospitals and campuses. DX and packaged systems suit smaller floors and industrial spaces.",
  },
  {
    title: "Fresh air, filtration and indoor air quality",
    desc: "In a city with severe outdoor air pollution, ventilation and filtration design matters as much as cooling capacity.",
  },
  {
    title: "Smoke management and pressurisation",
    desc: "For stairwells, lobbies and basements, seamlessly coordinated with fire safety design.",
  },
  {
    title: "Lifecycle cost optimization",
    desc: "We compare capital cost against running cost, so you can see the true cost of each option over 10-15 years.",
  },
];

const HVAC_TABLE = [
  {
    system: "VRV / VRF",
    suited: "Offices, hotels, apartments, mid-size buildings",
    considerations:
      "Flexible zoning and good part-load efficiency; refrigerant piping limits and higher upfront cost at very large scale",
  },
  {
    system: "Chilled water",
    suited: "Malls, hospitals, campuses, large commercial buildings",
    considerations:
      "Efficient at large scale; needs plant room space, water treatment and skilled maintenance",
  },
  {
    system: "DX / packaged",
    suited: "Small floors, showrooms, warehouses, industrial",
    considerations:
      "Lower cost and simple to install; less efficient for large or varied loads",
  },
];

const WHY_CHOOSE_US = [
  {
    icon: "/location/delhi/consultant-img1.png",
    title: "Proven Expertise",
    desc: "With years of experience in Delhi NCR, we understand local codes, authority requirements, and construction practices, enabling faster approvals and smoother execution.",
  },
  {
    icon: "/location/delhi/consultant-img2.png",
    title: "Integrated Design Approach",
    desc: "Our coordinated MEP designs minimize clashes, reduce rework, and improve construction efficiency.",
  },
  {
    icon: "/location/delhi/consultant-img3.png",
    title: "Energy-Efficient Solutions",
    desc: "We emphasize sustainable design strategies that reduce operating costs and enhance long-term building performance.",
  },
  {
    icon: "/location/delhi/consultant-img4.png",
    title: "Compliance & Quality Assurance",
    desc: "All designs adhere to NBC, IS codes, international standards, and project-specific requirements.",
  },
  {
    icon: "/location/delhi/consultant-img5.png",
    title: "Client-Centric Approach",
    desc: "We work closely with clients, architects, and project teams to deliver customized solutions aligned with project goals.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Shreshtha Consultants delivered high-precision MEP coordination for our commercial project in Gurugram. Their proactive clash detection on BIM saved us weeks of rework on site.",
    name: "Rajiv Mehra",
    designation: "Vice President (Projects)",
    company: "Skyline Developers, Gurugram",
  },
  {
    quote:
      "Designing HVAC systems for Delhi's extreme climate is notoriously difficult. Shreshtha's engineering team optimized our central plant, drastically cutting both initial tonnage and ongoing energy bills.",
    name: "Sunil Sharma",
    designation: "Principal Architect",
    company: "Studio Synthesis, New Delhi",
  },
  {
    quote:
      "Their depth of knowledge in fire safety norms, local authority guidelines, and electrical reliability made our hospital project in Noida seamless from concept through commissioning.",
    name: "Dr. Ananya Verma",
    designation: "Director of Infrastructure",
    company: "CarePlus Healthcare Group, Noida",
  },
];

const FAQS = [
  {
    q: "What does an MEP consultant do?",
    a: "An MEP consultant designs a building's mechanical (HVAC), electrical, and plumbing systems, and often fire protection as well. This includes calculations, drawings, specifications and BOQs, plus support during tendering, construction and commissioning, so the installed systems match the design.",
  },
  {
    q: "What is the difference between an MEP consultant and an MEP contractor?",
    a: "The consultant designs the systems and advises the owner independently. The contractor buys equipment and installs the systems. Appointing an independent consultant helps ensure the design is based on your needs and that the contractor's work is checked against it.",
  },
  {
    q: "When should I appoint an MEP consultant?",
    a: "As early as possible, ideally at concept stage, before architectural layouts are finalised. Plant rooms, shafts, ceiling heights and electrical load all depend on MEP requirements, and changing them later is expensive.",
  },
  {
    q: "How much do MEP consultancy services cost in Delhi?",
    a: "Fees depend on the project's size, type and complexity, and on which services you need. Consultancy is commonly charged as a percentage of project cost, a rate per sq. ft., or a fixed fee. Share your project details, and we'll send a proposal.",
  },
  {
    q: "Which HVAC system is best for a building in Delhi?",
    a: "It depends on the building's size, use, and budget. VRV/VRF is common for offices, hotels, and apartments; chilled water for large or complex buildings, and DX or packaged units for smaller spaces. We compare options on both capital and running costs before recommending one.",
  },
  {
    q: "Do you handle fire fighting design and fire NOC documentation?",
    a: "We design fire fighting and fire alarm systems and prepare documentation to meet fire service requirements.",
  },
  {
    q: "Do you work outside Delhi?",
    a: "Yes. We serve projects across Delhi-NCR, including Gurugram, Noida, Faridabad, and Ghaziabad, as well as other cities in India.",
  },
];

export default function DelhiLocationPage() {
  return (
    <div className="bg-[#f7f6f2] text-[#101418] antialiased min-h-screen">
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
              MEP CONSULTANTS · DELHI NCR
            </div>

            {/* H1 - One-liner */}
            <h1 className="font-archivo mb-6 text-[32px] sm:text-[40px] md:text-[46px] font-bold leading-[1.15] tracking-[-0.02em] text-white">
              MEP Consultants in Delhi NCR
            </h1>

            {/* Sub-headline */}
            <p className="mb-6 text-[16px] leading-[1.8] text-neutral-300">
              HVAC, electrical, plumbing and fire protection design for
              buildings across Delhi, Gurugram and Noida.
            </p>

            {/* H2 */}
            <h2 className="font-archivo mb-4 text-[20px] sm:text-[24px] md:text-[28px] font-bold leading-[1.25] tracking-[-0.02em] text-white">
              Expert MEP Consulting Services in Delhi
            </h2>

            {/* Paragraphs */}
            <div className="mb-8 flex flex-col gap-4 text-[16px] leading-[1.8] text-neutral-400">
              <p>
                Shreshtha Consultants is a trusted name among MEP consultants in
                Delhi, delivering comprehensive Mechanical, Electrical, and
                Plumbing engineering solutions for residential, commercial,
                industrial, and institutional projects.
              </p>
              <p>
                We design the mechanical (HVAC), electrical, plumbing, and fire
                safety systems that keep buildings safe, comfortable, and
                efficient, working with architects, developers, project
                management consultants, and building owners.
              </p>
              <p>
                As one of the leading MEP engineering consultancy firms
                featured, we are committed to delivering solutions that enhance
                building performance, safety, and energy efficiency.
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
      <section className="bg-[#f7f6f2] py-[70px] max-[760px]:py-[40px]">
        <Container className="grid grid-cols-1 lg:grid-cols-[1.22fr_0.78fr] gap-10 lg:gap-14 items-start">
          {/* Left Column: Our MEP Services */}
          <div>
            <div className="font-archivo mb-4 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
              OUR MEP SERVICES IN DELHI NCR
            </div>
            <h2 className="font-archivo mb-4 text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.03em] text-[#101418]">
              Our MEP Services
            </h2>
            <p className="font-lora text-[16px] leading-[1.8] text-[#5c6570] mb-8">
              MEP systems account for a large share of a building&apos;s
              construction cost and most of its running cost. Good design at the
              start saves money for the life of the building. We provide
              integrated MEP consulting so that every system is designed to work
              with the others, not in isolation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {MEP_SERVICES_TILES.map((tile, idx) => (
                <div
                  key={tile.num}
                  className={`bg-white border border-[#e3e0d8] rounded-[18px] sm:rounded-[20px] p-5 sm:p-6 shadow-[0_8px_30px_rgb(0_0_0_/_0.04)] transition-all duration-300 hover:border-[#101418] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0_0_0_/_0.08)] flex flex-col justify-start ${
                    idx === 6 ? "sm:col-span-2" : ""
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

          {/* Right Column: Industries We Serve (Sticky on desktop) */}
          <div className="lg:sticky lg:top-[100px] self-start">
            <div className="bg-[#142436] text-white rounded-[24px] p-8 sm:p-10 shadow-xl flex flex-col justify-start">
              <h2 className="font-archivo text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white mb-7 tracking-[-0.02em]">
                Industries We Serve
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

      {/* 5. WHY HIRE HVAC CONSULTANTS IN DELHI */}
      <section className="bg-white py-[70px] max-[760px]:py-[40px] border-y border-[#e3e0d8]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Heading and Context */}
            <div className="lg:col-span-5">
              <div className="font-archivo mb-4 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
                Climate-Resilient Design
              </div>
              <h2 className="font-archivo mb-6 text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.03em] text-[#101418]">
                Why Hire HVAC Consultants in Delhi
              </h2>
              <div className="flex flex-col gap-4 text-[16px] leading-[1.8] text-[#5c6570]">
                <p>
                  Delhi&apos;s climate puts real demands on HVAC systems: summer
                  temperatures above 45°C, cold winters, heavy dust and air
                  pollution for much of the year. A system that is undersized
                  fails on the hottest days. One that is oversized wastes energy
                  and money every month.
                </p>
                <p>
                  As HVAC consultants in Delhi, we help you choose the right
                  system for your building and design it properly, independent
                  of any equipment supplier. Our approach covers:
                </p>
              </div>

              <div className="mt-8 pt-2">
                <Link
                  href="/hvac"
                  className="font-archivo group inline-flex items-center gap-2 text-[14px] font-bold text-[#ed2967] hover:text-[#101418] transition-colors"
                >
                  Explore our full HVAC consulting services{" "}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Column: Approach Points */}
            <div className="lg:col-span-7 space-y-4">
              {HVAC_APPROACH.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#f7f6f2] border border-[#e3e0d8] rounded-[20px] p-5 sm:p-6 shadow-[0_8px_30px_rgb(0_0_0_/_0.04)] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 flex items-start gap-4"
                >
                  <span className="w-8 h-8 rounded-full bg-[#ed2967]/10 text-[#ed2967] font-archivo font-bold text-[13px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="font-archivo text-[15px] font-bold leading-tight tracking-[0.01em] text-[#101418] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[13px] leading-[1.6] text-[#5c6570]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HVAC Comparison Table */}
          <div className="mt-14 pt-2">
            <div className="bg-white border border-[#e3e0d8] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0_0_0_/_0.04)]">
              <div className="p-6 md:p-8 bg-[#142436] text-white">
                <h3 className="font-archivo text-[20px] sm:text-[22px] md:text-[24px] font-bold mb-1.5 tracking-[-0.02em]">
                  HVAC System Comparison for Delhi NCR Buildings
                </h3>
                <p className="text-[14px] text-neutral-400">
                  Selecting the right equipment architecture based on scale,
                  zoning, and lifecycle expenditure.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[640px]">
                  <thead>
                    <tr className="border-b border-[#e3e0d8] bg-[#f7f6f2]">
                      <th className="py-4 px-6 font-archivo text-[11px] font-bold uppercase tracking-[0.15em] text-[#101418] w-1/4">
                        System
                      </th>
                      <th className="py-4 px-6 font-archivo text-[11px] font-bold uppercase tracking-[0.15em] text-[#101418] w-1/3">
                        Best suited for
                      </th>
                      <th className="py-4 px-6 font-archivo text-[11px] font-bold uppercase tracking-[0.15em] text-[#101418]">
                        Key considerations
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e3e0d8] bg-white">
                    {HVAC_TABLE.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-[#f7f6f2]/60 transition-colors"
                      >
                        <td className="py-4 px-6 font-archivo font-bold text-[#ed2967] text-[15px]">
                          {row.system}
                        </td>
                        <td className="py-4 px-6 text-[#101418] font-medium text-[14px]">
                          {row.suited}
                        </td>
                        <td className="py-4 px-6 text-[#5c6570] text-[13px] leading-[1.6]">
                          {row.considerations}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. WHY CHOOSE SHRESHTHA CONSULTANTS AS YOUR MEP CONSULTANTS */}
      <section className="bg-[#f7f6f2] py-[70px] max-[760px]:py-[40px]">
        <Container>
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <h2 className="font-archivo text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.03em] text-[#101418]">
              Why Choose Shreshtha Consultants as Your MEP Consultants
            </h2>
          </div>

          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {WHY_CHOOSE_US.slice(0, 3).map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] p-6 sm:p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0_0_0_/_0.04)] border border-[#e3e0d8] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0_0_0_/_0.08)]"
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
                <h3 className="font-archivo text-[15px] sm:text-[16px] font-bold leading-tight tracking-[0.01em] text-[#101418] mb-3">
                  {card.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-[#5c6570]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 Cards Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[850px] mx-auto">
            {WHY_CHOOSE_US.slice(3, 5).map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] p-6 sm:p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0_0_0_/_0.04)] border border-[#e3e0d8] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0_0_0_/_0.08)]"
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
                <h3 className="font-archivo text-[15px] sm:text-[16px] font-bold leading-tight tracking-[0.01em] text-[#101418] mb-3">
                  {card.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-[#5c6570]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. WHAT OUR CLIENTS SAY */}
      <section className="bg-[#f7f6f2] py-[70px] max-[760px]:py-[40px] border-t border-[#e3e0d8]">
        <Container>
          <div className="text-center max-w-[620px] mx-auto mb-14">
            <div className="font-archivo mb-4 flex items-center justify-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
              Client Testimonials
            </div>
            <h2 className="font-archivo text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.03em] text-[#101418]">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-[16px] leading-[1.8] text-[#5c6570]">
              Trusted by leading architects, developers, and project managers
              across Delhi NCR.
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
                  <p className="text-[14px] sm:text-[15px] text-[#101418] leading-[1.75] italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e3e0d8]">
                  <h4 className="font-archivo text-[15px] font-bold text-[#101418]">
                    {t.name}
                  </h4>
                  <p className="text-[13px] text-[#5c6570]">{t.designation}</p>
                  <p className="font-archivo text-[12px] font-bold text-[#ed2967] mt-0.5">
                    {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-[#f7f6f2] py-[70px] max-[760px]:py-[40px] border-t border-[#e3e0d8]">
        <Container className="max-w-[850px]">
          <div className="text-center mb-12">
            <div className="font-archivo mb-4 flex items-center justify-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
              Got Questions?
            </div>
            <h2 className="font-archivo text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.03em] text-[#101418]">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-[16px] leading-[1.8] text-[#5c6570]">
              Everything you need to know about appointing MEP &amp; HVAC
              consultants in Delhi NCR.
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
                <div className="px-5 sm:px-6 pb-6 text-[14px] sm:text-[14.5px] leading-[1.75] text-[#5c6570]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. BOOK A CONSULTATION FORM */}
      <section className="bg-[#142436] text-white py-16 md:py-24" id="form">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading and Text */}
            <div>
              <div className="font-archivo mb-4 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-white/60 before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
                Book a Consultation
              </div>
              <h2 className="font-archivo text-[28px] sm:text-[36px] md:text-[46px] font-bold leading-[1.15] tracking-[-0.03em] text-white">
                Book a Consultation with Shreshtha Consultants
              </h2>
              <p className="mt-4 text-[16px] leading-[1.8] text-white/70 max-w-[500px]">
                Tell us about your project and our engineers will get back to
                you with the next steps.
              </p>
            </div>

            {/* Right Column: Form Card */}
            <div>
              <div className="rounded-[24px] border border-white/[0.12] bg-white/[0.05] p-6 sm:p-9 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-sm text-left">
                <h3 className="font-archivo text-[30px] sm:text-[32px] font-bold text-white mb-6">
                  Book a Consultation | Contact Shreshtha Consultants Today
                </h3>
                <ResendForm
                  formType="Delhi Location Consultation"
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
