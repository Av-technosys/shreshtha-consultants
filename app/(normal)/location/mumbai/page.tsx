import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { TrustSection } from "@/components/home/trust-section";
import { ResendForm } from "@/components/forms/resend-form";
import { Star, ChevronDown } from "lucide-react";

export const metadata = {
  title: "Professional MEP Consultants in Mumbai | Shreshtha Consultants",
  description:
    "Top-tier MEP consulting services in Mumbai. Shreshtha Consultants provides expert solutions for mechanical, electrical, and plumbing engineering projects.",
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/location/mumbai",
  },
};

const STATS = [
  { n: "1,050+", l: "Projects Completed" },
  { n: "25M+", l: "Sq.Ft Areas Worked" },
  { n: "25+", l: "Years of Experience" },
  { n: "500+", l: "Clients Served" },
  { n: "50+", l: "Team Size" },
];

const WHY_WORK_ROWS = [
  {
    num: "01",
    title: "Expertise in Engineering with Proven Experience",
    desc: "Our engineering team is built on years of experience in the industry and our unique combination of talent and AI technology.",
    img: "/location/mumbai/work_with_us-img1.jpg",
    alt: "Engineering Expertise",
    rev: false,
  },
  {
    num: "02",
    title: "Future-Focused & Energy-Saving Solutions",
    desc: "We provide designs for energy-saving solutions and future-focused systems.",
    img: "/location/mumbai/work_with_us-img2.jpg",
    alt: "Future-Focused & Energy-Saving Solutions",
    rev: true,
  },
  {
    num: "03",
    title: "Perfectly Coordinated",
    desc: "Our advanced technology, such as BIM, ensures no conflicts during the construction process.",
    img: "/location/mumbai/work_with_us-img3.jpg",
    alt: "Perfectly Coordinated",
    rev: false,
  },
  {
    num: "04",
    title: "Adherence to Compliance Regulations",
    desc: "We follow all the regulations set forth by the Municipal Corporation of Mumbai, DCR standards, NBC, IS, and fire norms.",
    img: "/location/mumbai/work_with_us-img4.png",
    alt: "Adherence to Compliance Regulations",
    rev: true,
  },
];

const MEP_SERVICES_TILES = [
  {
    num: "01",
    title: "HVAC & Mechanical Engineering",
    desc: "Cooling, ventilation and indoor air quality design for the hot and humid climate of Mumbai. Services include load calculations, VRV/VRF, chilled water and DX systems, fresh air and ventilation design, and smoke management.",
  },
  {
    num: "02",
    title: "Electrical Power Distribution, ELV & Automation",
    desc: "Effective and safe power for all types of buildings. Services include power distribution and load calculation, lighting design, earthing and lightning protection, DG, UPS and renewables integration, ELV systems and building automation.",
  },
  {
    num: "03",
    title: "Plumbing, Public Health & Drainage",
    desc: "Water supply and drainage design with special consideration of Mumbai’s rainy season. Services include water supply and drainage design, STP and water treatment, rainwater harvesting and pumping systems.",
  },
  {
    num: "04",
    title: "Fire Fighting & Emergency Response Systems",
    desc: "Fire protection design according to NBC and Mumbai Fire Brigade standards along with HVAC smoke management and electrical systems.",
  },
  {
    num: "05",
    title: "MEP Audits & Upgrade Consulting",
    desc: "Auditing of existing buildings for energy efficiency, reliability and compliance.",
  },
];

const INDUSTRIES_WE_SERVE = [
  "Commercial offices & corporate headquarters",
  "Premium residential and mixed-use buildings",
  "Hospitals, clinics and labs",
  "Hotels, retail & hospitality",
  "Manufacturing & industrial",
  "Public and institutional buildings",
];

const DESIGN_PROCESS = [
  {
    step: "01",
    title: "Briefing & Requirements",
    desc: "Your brief, drawings, and site constraints are examined, and we determine the design criteria.",
  },
  {
    step: "02",
    title: "Conceptual Design",
    desc: "System alternatives are presented, and space and cost calculations for plant rooms and shafts are done.",
  },
  {
    step: "03",
    title: "Detailed Design",
    desc: "Calculation work, layout drawings, schematic drawings, and detailed specification work using BIM.",
  },
  {
    step: "04",
    title: "Approval Documentation",
    desc: "Documents produced to assist in getting planning approval and fire authority approvals.",
  },
  {
    step: "05",
    title: "Tender and Bill of Quantities",
    desc: "Tender documents and Bill of Quantities, as well as help with tender evaluation.",
  },
  {
    step: "06",
    title: "Site Coordination and Commissioning",
    desc: "Questions on-site and assistance with installation and commissioning.",
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
    q: "Why do I need an MEP consultant for a project in Mumbai?",
    a: "Mumbai projects suffer from limited space, complicated high-rise issues, stringent approval processes, and a tough, humid coastal climate. An MEP consultant designs the systems, integrates them with the architecture and structure, and provides the required documentation for the authorities.",
  },
  {
    q: "How does an MEP consultant differ from an MEP contractor?",
    a: "The consultant designs the systems and gives independent advice to you. The contractor provides and installs them. The independent consultant helps in designing according to your requirements, and installation is done according to that.",
  },
  {
    q: "Which HVAC system is the best choice for Mumbai's humid climate?",
    a: "It depends upon the requirements of the building. VRV/VRF is suitable for most office buildings, hotels, and apartments, while chilled water is appropriate for big or complex buildings. The DX/packaged units work well for small buildings. In the case of Mumbai, controlling the humidity level and resisting corrosion become as much of a priority as cooling. Comparison is made in terms of capital expenditure and operational expenses.",
  },
  {
    q: "When do I need to engage an MEP Consultant?",
    a: "Immediately at the concept stage itself, before freezing your architectural layouts. This is because plant rooms, shafts, ceiling heights and electrical loads all depend on MEP requirements, and changing them later is expensive.",
  },
  {
    q: "How much does MEP Consultancy service cost in Mumbai?",
    a: "The charges for consultation depend upon the nature and size of the project and scope of services required. It is generally billed as a % of project cost, per sq. ft. or a fixed charge.",
  },
  {
    q: "Do you do fire fighting design and fire authority documentation?",
    a: "Yes, we can design fire fighting/fire alarm system and prepare fire authority documentation.",
  },
];

export default function MumbaiLocationPage() {
  return (
    <div className="bg-[#f7f6f2] text-[#142436] font-inter antialiased min-h-screen">
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
              MEP CONSULTANTS · MUMBAI
            </div>

            {/* H1 */}
            <h1 className="font-archivo mb-6 text-[32px] sm:text-[40px] md:text-[46px] font-bold leading-[1.15] tracking-[-0.02em] text-white">
              Professional MEP Consultants in Mumbai
            </h1>

            {/* Sub-headline */}
            <p className="font-inter mb-6 text-[16px] leading-[1.8] text-neutral-300">
              Engineering partner to provide efficient MEP solutions. Being the
              commercial and financial capital of India, Mumbai demands
              engineering solutions that cater to the needs of high demand,
              tight space planning, municipal restrictions, and high safety
              standards. Shreshtha Consultants is one of the best MEP
              consultants in Mumbai, providing well-engineered and intelligently
              coordinated MEP services.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="#form"
                className="font-archivo group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/10 bg-[#142436]/80 px-6 py-3.5 text-[13px] font-bold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#142436]"
              >
                Request Proposal{" "}
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
      <TrustSection />

      {/* 4. WHY WORK WITH US */}
      <section className="bg-[#f7f6f2] py-[70px] max-[760px]:py-[40px]">
        <Container>
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <div className="font-archivo mb-4 flex items-center justify-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
              Why Work With Us
            </div>
            <h2 className="font-archivo text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.03em] text-[#142436]">
              Aligning architectural vision
              <br className="hidden sm:block" /> with practical MEP execution.
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-8 max-w-[1240px] mx-auto">
            {WHY_WORK_ROWS.map((row) => (
              <div
                key={row.num}
                className="grid grid-cols-1 md:grid-cols-2 items-stretch rounded-[22px] shadow-[0_4px_25px_rgba(0,0,0,0.04)] overflow-hidden"
              >
                {!row.rev ? (
                  <>
                    <div className="relative min-h-[280px] md:min-h-[340px] bg-[#e3e0d8] rounded-[22px_22px_0_0] md:rounded-[22px_0_0_22px] overflow-hidden">
                      <Image
                        src={row.img}
                        alt={row.alt}
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="bg-white border border-[#e3e0d8] md:border-l-0 rounded-[0_0_22px_22px] md:rounded-[0_22px_22px_0] p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
                      <div className="font-archivo text-[11px] sm:text-[12px] font-bold tracking-[0.1em] text-[#ed2967] mb-3">
                        {row.num}
                      </div>
                      <h3 className="font-archivo text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#142436] mb-3 leading-snug tracking-[-0.02em]">
                        {row.title}
                      </h3>
                      <p className="font-inter text-[16px] text-[#5c6570] leading-[1.8] max-w-[440px]">
                        {row.desc}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-white border border-[#e3e0d8] md:border-r-0 rounded-[0_0_22px_22px] md:rounded-[22px_0_0_22px] p-8 sm:p-12 lg:p-14 flex flex-col justify-center order-2 md:order-1">
                      <div className="font-archivo text-[11px] sm:text-[12px] font-bold tracking-[0.1em] text-[#ed2967] mb-3">
                        {row.num}
                      </div>
                      <h3 className="font-archivo text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#142436] mb-3 leading-snug tracking-[-0.02em]">
                        {row.title}
                      </h3>
                      <p className="font-inter text-[16px] text-[#5c6570] leading-[1.8] max-w-[440px]">
                        {row.desc}
                      </p>
                    </div>
                    <div className="relative min-h-[280px] md:min-h-[340px] bg-[#e3e0d8] rounded-[22px_22px_0_0] md:rounded-[0_22px_22px_0] overflow-hidden order-1 md:order-2">
                      <Image
                        src={row.img}
                        alt={row.alt}
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. OUR MEP SERVICES & INDUSTRIES WE SERVE*/}
      <section className="bg-[#f7f6f2] py-[70px] max-[760px]:py-[40px] border-t border-[#e3e0d8]">
        <Container className="grid grid-cols-1 lg:grid-cols-[1.22fr_0.78fr] gap-10 lg:gap-14 items-start">
          {/* Left Column: Our MEP Services */}
          <div>
            <div className="font-archivo mb-4 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
              OUR MEP SERVICES IN MUMBAI
            </div>
            <h2 className="font-archivo text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.03em] text-[#142436] mb-4">
              Our MEP Services
            </h2>
            <p className="font-inter text-[16px] leading-[1.8] text-[#5c6570] mb-8">
              Effective MEP design has a major influence on performance and
              operation costs. We offer integrated services in order for all
              systems to be designed in harmony.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {MEP_SERVICES_TILES.map((tile, idx) => (
                <div
                  key={tile.num}
                  className={`bg-white border border-[#e3e0d8] rounded-[18px] sm:rounded-[20px] p-5 sm:p-6 shadow-[0_8px_30px_rgb(0_0_0_/_0.04)] transition-all duration-300 hover:border-[#ed2967] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0_0_0_/_0.08)] flex flex-col justify-start ${
                    idx === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="font-archivo text-[11px] sm:text-[12px] font-bold text-[#ed2967] tracking-[0.1em] mb-2 sm:mb-2.5">
                    {tile.num}
                  </div>
                  <h3 className="font-archivo text-[16px] sm:text-[17px] font-bold leading-snug tracking-[-0.01em] text-[#142436] mb-2.5">
                    {tile.title}
                  </h3>
                  <p className="font-inter text-[13.5px] sm:text-[14px] leading-[1.7] text-[#5c6570]">
                    {tile.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Industries We Serve*/}
          <div className="lg:sticky lg:top-[100px] self-start">
            <div className="bg-[#142436] text-white rounded-[24px] p-8 sm:p-10 shadow-xl flex flex-col justify-start">
              <h2 className="font-archivo text-[24px] sm:text-[32px] font-bold text-white mb-6 tracking-[-0.02em]">
                Industries We Serve
              </h2>

              <div className="flex flex-col items-start gap-3.5">
                {INDUSTRIES_WE_SERVE.map((ind, idx) => (
                  <span
                    key={idx}
                    className="font-archivo text-[13px] sm:text-[13.5px] font-medium border border-white/20 px-5 py-3 rounded-full text-white/90 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. OUR MEP DESIGN PROCESS */}
      <section className="bg-white py-[70px] max-[760px]:py-[40px] border-t border-[#e3e0d8]">
        <Container>
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <div className="font-archivo mb-4 flex items-center justify-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
              Systematic Engineering
            </div>
            <h2 className="font-archivo text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.03em] text-[#142436]">
              Our MEP Design Process
            </h2>
            <p className="font-inter mt-4 text-[16px] leading-[1.8] text-[#5c6570]">
              From concept formulation to site commissioning, our 6-stage
              engineering process ensures total accuracy and zero site
              conflicts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {DESIGN_PROCESS.map((proc) => (
              <div
                key={proc.step}
                className="bg-[#f7f6f2] rounded-[24px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_8px_30px_rgb(0_0_0_/_0.04)] border border-[#e3e0d8] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0_0_0_/_0.08)] hover:border-[#142436]"
              >
                <div>
                  <div className="font-archivo text-[11px] sm:text-[12px] font-bold text-[#ed2967] tracking-[0.1em] mb-2.5">
                    STEP {proc.step}
                  </div>
                  <h3 className="font-archivo text-[16px] sm:text-[17px] font-bold leading-tight tracking-[0.01em] text-[#142436] mb-2.5">
                    {proc.title}
                  </h3>
                  <p className="font-inter text-[14px] sm:text-[14.5px] leading-[1.7] text-[#5c6570]">
                    {proc.desc}
                  </p>
                </div>
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
            <h2 className="font-archivo text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.03em] text-[#142436]">
              What Our Clients Say
            </h2>
            <p className="font-inter mt-4 text-[16px] leading-[1.8] text-[#5c6570]">
              Trusted by leading architects, developers, and project managers
              across Mumbai.
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
                  <p className="font-inter text-[14px] sm:text-[15px] text-[#142436] leading-[1.75] italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e3e0d8] flex items-center gap-3.5">
                  <div className="font-archivo grid size-[46px] flex-none place-items-center rounded-full bg-[#101418] font-bold text-[#ed2967]">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-archivo text-[15px] font-bold text-[#142436]">
                      {t.name}
                    </h4>
                    <span className="font-inter text-[12.5px] text-[#5c6570] block">
                      {t.role}
                    </span>
                  </div>
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
            <p className="font-inter mt-4 text-[16px] leading-[1.8] text-[#5c6570]">
              Everything you need to know about appointing MEP consultants in
              Mumbai.
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
                <div className="font-inter px-5 sm:px-6 pb-6 text-[14px] sm:text-[14.5px] leading-[1.75] text-[#5c6570]">
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
                Consult With the Most Reliable MEP Consultants in Mumbai
              </h2>
              <p className="font-inter mt-4 text-[16px] leading-[1.8] text-white/70 max-w-[500px]">
                If you are looking for technically capable, execution-driven MEP
                consultants in Mumbai, Shreshtha Consultants is ready to support
                your project, from concept design to commissioning.
              </p>
            </div>

            {/* Right Column: Form Card */}
            <div>
              <div className="rounded-[24px] border border-white/[0.12] bg-white/[0.05] p-6 sm:p-9 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-sm text-left">
                <h3 className="font-archivo text-[30px] sm:text-[32px] font-bold text-white mb-6">
                  Book a Consultation | Contact Shreshtha Consultants Today
                </h3>
                <ResendForm
                  formType="Mumbai Location Consultation"
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
