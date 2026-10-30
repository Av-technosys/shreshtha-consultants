import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { TrustSection } from "@/components/home/trust-section";
import { ResendForm } from "@/components/forms/resend-form";
import { Star, ChevronDown } from "lucide-react";

export const metadata = {
  title: "Professional MEP Consultants in Ahmedabad | Shreshtha Consultants",
  description:
    "Expert MEP consulting in Ahmedabad. Fully integrated mechanical, electrical, plumbing, and fire fighting systems design for IT campuses, commercial, healthcare, and residential developments.",
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/location/ahmedabad",
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
    title: "Proven Industry Experience",
    desc: "Our extensive project experience enables us to deliver practical and efficient MEP solutions across diverse building types.",
    img: "/location/ahmedabad/card1.jpeg",
    alt: "Proven Industry Experience team",
    rev: false,
  },
  {
    num: "02",
    title: "Integrated Design Coordination",
    desc: "We ensure effective coordination between mechanical, electrical, and plumbing systems to avoid conflicts during construction.",
    img: "/location/ahmedabad/card2.jpg",
    alt: "Integrated Design Coordination",
    rev: true,
  },
  {
    num: "03",
    title: "Energy-Efficient & Sustainable Designs",
    desc: "Our designs focus on reducing energy consumption and operational costs while improving building performance.",
    img: "/location/ahmedabad/card3.jpg",
    alt: "Energy-Efficient & Sustainable Designs",
    rev: false,
  },
  {
    num: "04",
    title: "Code Compliance & Quality Standards",
    desc: "All designs comply with NBC, IS codes, and applicable local authority regulations.",
    img: "/location/ahmedabad/card4.jpg",
    alt: "Integrated Design Coordination",
    rev: true,
  },
];

const MEP_SERVICES_TILES = [
  {
    num: "01",
    title: "Mechanical & HVAC Consulting",
    desc: "We are experienced HVAC consultants in Ahmedabad, offering complete heating, ventilation, and air-conditioning system design tailored to local climate conditions and building usage.",
  },
  {
    num: "02",
    title: "Electrical Engineering Services",
    desc: "Our electrical consulting services ensure safe, reliable, and efficient power distribution for modern buildings.",
  },
  {
    num: "03",
    title: "Plumbing & Public Health Engineering",
    desc: "We provide comprehensive plumbing and public health engineering solutions that emphasize efficiency, sustainability, and regulatory compliance.",
  },
  {
    num: "04",
    title: "HVAC services include",
    desc: "HVAC system planning and design, Cooling load calculations, Chilled water, VRF/VRV & DX systems, Ventilation and smoke management systems, Energy-efficient and green HVAC solutions",
  },
  {
    num: "05",
    title: "Electrical services include",
    desc: "Power distribution system design, Lighting design and lux level calculations, Earthing and lightning protection systems, DG sets, UPS & renewable energy integration, ELV and building automation coordination",
  },
  {
    num: "06",
    title: "Plumbing services include:",
    desc: "Water supply and drainage systems, Sewerage and stormwater management, Rainwater harvesting, Pumping and water treatment solutions, Fire protection system coordination",
  },
];

const INDUSTRIES_WE_SERVE = [
  "Residential apartments and townships",
  "Commercial offices and IT parks",
  "Retail malls and mixed-use developments",
  "Hotels and hospitality projects",
  "Hospitals and healthcare facilities",
  "Educational institutions",
  "Industrial and warehouse facilities",
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
    q: "What MEP consultancy services does Shreshtha Consultants have to offer in Ahmedabad?",
    a: "We offer complete MEP engineering services, which include HVAC systems design, electrical power distribution, and plumbing engineering services.",
  },
  {
    q: "What kind of projects do you take up in Ahmedabad?",
    a: "We take up projects that can range from residential apartments and townships, commercial offices and IT parks, retail shopping centers, mixed-use developments, hotels, healthcare projects, educational institutions, to industries and warehouses.",
  },
  {
    q: " Is there a minimum or maximum project size you work with?",
    a: "Yes. With experience in various sectors, we have the ability to cater to both large and small projects.",
  },
  {
    q: "What HVAC services do you offer?",
    a: "The HVAC services that we offer include system planning and design, cooling load calculation, chilled water system, VRF/VRV and DX systems, ventilation, smoke control, and energy-efficient green HVAC system design. The design is based on Ahmedabad’s local weather conditions and building usage.",
  },
  {
    q: "Which electrical engineering services do you provide?",
    a: "Power distribution, lighting design including lux level calculations, earthing and lightning protection design, and DG sets, UPS, and renewable energy design are provided by us.",
  },
  {
    q: "What plumbing design services are part of your offering?",
    a: "We offer design services for water supply and drainage, sewerage and stormwater, rainwater harvesting, and pumping and water treatment. We also coordinate fire protection systems.",
  },
  {
    q: "Does your design comply with Indian codes?",
    a: "Yes. Our design complies with all Indian codes and local authority regulations.",
  },
];

export default function AhmedabadLocationPage() {
  return (
    <div className="bg-[#f7f6f2] text-[#101418] font-inter antialiased min-h-screen">
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
              MEP CONSULTANTS · AHMEDABAD
            </div>

            {/* H1 */}
            <h1 className="font-archivo mb-6 text-[32px] sm:text-[40px] md:text-[46px] font-bold leading-[1.15] tracking-[-0.02em] text-white">
              Professional MEP Consultants in Ahmedabad
            </h1>

            {/* Sub-headline Paragraphs */}
            <div className="mb-8 flex flex-col gap-4 text-[16px] leading-[1.8] text-neutral-300 font-inter">
              <p>
                Shreshtha Consultants is one of the best-known MEP Consulting
                Service providers in Ahmedabad, providing reliable and effective
                Mechanical, Electrical, and Plumbing engineering services for
                various building constructions. Shreshtha Consultants has
                extensive experience in designing buildings of various kinds. We
                provide reliable technical advice based on project objectives
                and sustainability standards.
              </p>
              <p>
                A professional approach and high-quality technical expertise
                make us one of the best MEP consultants in Ahmedabad, serving
                all our clients in Gujarat with high-quality service and
                performance. Our team of qualified engineers collaborates with
                architects, developers, project managers, and other specialists
                in order to provide coordinated building services throughout the
                whole process.
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
      <TrustSection />

            {/* 4. WHY WORK WITH US */}
      <section className="bg-[#f7f6f2] py-[70px] max-[760px]:py-[40px]">
        <Container>
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <div className="font-archivo mb-4 flex items-center justify-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
              Why Work With Us
            </div>
            <h2 className="font-archivo text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.03em] text-[#142436]">
              Why Choose Us as Your MEP Consultants in Ahmedabad
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

      {/* 5. OUR MEP SERVICES & INDUSTRIES WE SERVE */}
      <section className="bg-[#f7f6f2] py-[70px] max-[760px]:py-[40px] border-t border-[#e3e0d8]">
        <Container className="grid grid-cols-1 lg:grid-cols-[1.22fr_0.78fr] gap-10 lg:gap-14 items-start">
          {/* Left Column: Our MEP Services */}
          <div>
            <div className="font-archivo mb-4 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
              OUR MEP SERVICES IN AHMEDABAD
            </div>
            <h2 className="font-archivo mb-4 text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.03em] text-[#101418]">
              Our MEP Services
            </h2>
            <p className="font-inter text-[16px] leading-[1.8] text-[#5c6570] mb-8">
              We provide integrated mechanical, electrical, plumbing, and
              fire-fighting engineering so that every system is designed to work
              in harmony, optimizing lifecycle costs and operational safety.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {MEP_SERVICES_TILES.map((tile) => (
                <div
                  key={tile.num}
                  className="bg-white border border-[#e3e0d8] rounded-[18px] sm:rounded-[20px] p-5 sm:p-6 shadow-[0_8px_30px_rgb(0_0_0_/_0.04)] transition-all duration-300 hover:border-[#101418] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0_0_0_/_0.08)] flex flex-col justify-start"
                >
                  <div className="font-archivo text-[11px] sm:text-[12px] font-bold text-[#ed2967] tracking-[0.1em] mb-2 sm:mb-2.5">
                    {tile.num}
                  </div>
                  <h3 className="font-archivo text-[16px] sm:text-[17px] font-bold leading-snug tracking-[0.01em] text-[#101418] mb-2.5">
                    {tile.title}
                  </h3>
                  <p className="font-inter text-[13.5px] sm:text-[14px] leading-[1.7] text-[#5c6570]">
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
                Industries and Sectors We Serve in Ahmedabad
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

      {/* 6. OUR MEP DESIGN PROCESS */}
      <section className="bg-white py-[70px] max-[760px]:py-[40px] border-y border-[#e3e0d8]">
        <Container>
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <div className="font-archivo mb-4 flex items-center justify-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
              Systematic Engineering
            </div>
            <h2 className="font-archivo text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.03em] text-[#101418]">
              Our MEP Design Process
            </h2>
            <p className="font-inter mt-4 text-[16px] leading-[1.8] text-[#5c6570]">
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
                  <p className="font-inter text-[13px] sm:text-[13.5px] leading-[1.65] text-[#5c6570]">
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
            <h2 className="font-archivo text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-[-0.03em] text-[#101418]">
              What Our Clients Say
            </h2>
            <p className="font-inter mt-4 text-[16px] leading-[1.8] text-[#5c6570]">
              Trusted by architects, tech campus builders, and developers across
              Ahmedabad.
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
                  <p className="font-inter text-[14px] sm:text-[15px] text-[#101418] leading-[1.75] italic mb-6">
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

      {/* 8. FREQUENTLY ASKED QUESTIONS*/}
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
              Ahmedabad.
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
                Consult the Best MEP Consultants in Ahmedabad
              </h2>
              <p className="font-inter mt-4 text-[16px] leading-[1.8] text-white/70 max-w-[500px]">
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
                  formType="Ahmedabad Location Consultation"
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
