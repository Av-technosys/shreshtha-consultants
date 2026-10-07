import Link from "next/link";
import { Container } from "@/components/common/container";
import {
  Box,
  Droplet,
  Flame,
  ShieldCheck,
  Snowflake,
  Zap,
} from "lucide-react";


const serviceCards = [
  {
    title: "Plumbing",
    href: "/services",
    icon: Droplet,
    items: [
      "Water supply (internal and external)",
      "Vertical stake piping",
      "Plumbing wall elevations",
      "Bill of quantities",
      "Product recommendations",
    ],
  },
  {
    title: "Fire-Fighting",
    href: "/services",
    icon: Flame,
    items: [
      "Fire sprinklers layouts",
      "Fire hydrant layouts",
      "Fire alarms",
      "Bill of quantities",
      "Product recommendations",
    ],
  },
  {
    title: "HVAC",
    href: "/services",
    icon: Snowflake,
    items: [
      "Air conditioning",
      "Copper piping",
      "Ducting layouts",
      "Air cooling layouts",
      "Air exhaust layouts",
      "Chiller plans",
      "Schematics",
      "Bill of quantities",
      "Product recommendations",
    ],
  },
  {
    title: "Electrical",
    href: "/services",
    icon: Zap,
    items: [
      "Wiring/Controlling plans",
      "Switchboard module tables",
      "Electrical conduiting layouts",
      "DB electrical SLD (Single Line Diagrams)",
      "Panel SLD",
      "Electrical automation",
      "Bill of quantities",
      "Product recommendations",
    ],
  },
  {
    title: "Safety and Security",
    href: "/services",
    icon: ShieldCheck,
    items: [
      "CCTV Wiring",
      "WiFi Wiring",
      "Telephone Wiring",
      "Data Wiring",
      "Bill of quantities",
      "Product recommendations",
    ],
  },
  {
    title: "BIM",
    href: "/bim",
    icon: Box,
    items: [
      "Ensuring seamless integration of all MEP services.",
      "Precise models for better project understanding.",
      "Identifying and resolving clashes before execution.",
      "Promoting eco-friendly and energy-efficient designs.",
      "Supporting projects from design to operation.",
    ],
  },
];

export function ServicesSection() {
  return (
    <section className="py-[110px] max-[760px]:py-20" id="services">
      <Container>
        <div className="mb-16 max-w-[760px] max-[760px]:mb-10">
          <Kicker>Our Services</Kicker>
          <h2 className="font-archivo my-[18px] mt-[22px] text-[clamp(32px,3.4vw,50px)] font-bold leading-[1.04] tracking-[-0.03em]">
            Shreshtha Consultants — Your Complete Suite of Building Services
          </h2>
          <p className="text-[17px] leading-7 text-[#5c6570]">
            We combine experience and technology to deliver building designs
            that perform better, last longer, and add measurable value.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[22px] max-[1080px]:grid-cols-2 max-[760px]:grid-cols-1">
          {serviceCards.map(({ title, href, icon: Icon, items }) => (
            <article
              className="group relative flex flex-col overflow-hidden rounded-[18px] border border-[#e3e0d8] bg-white px-8 py-9 transition duration-500 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:origin-left before:scale-x-0 before:bg-[#ed2967] before:transition-transform before:duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgb(16_20_24_/_0.09)] hover:before:scale-x-100"
              key={title}
            >
              <div className="mb-[22px] grid size-[52px] place-items-center rounded-xl border border-[#e3e0d8] bg-[#f7f6f2]">
                <Icon className="size-6 stroke-[#101418] stroke-[1.6]" />
              </div>
              <h3 className="font-archivo mb-4 text-[22px] font-bold leading-[1.1] tracking-[-0.03em]">
                {title}
              </h3>
              <ul className="mb-[26px] flex-1 list-none">
                {items.map((item) => (
                  <li
                    className="relative border-b border-dashed border-[#e3e0d8] py-1.5 pl-5 text-sm text-[#5c6570] before:absolute before:left-0.5 before:top-3.5 before:size-[7px] before:rounded-[2px] before:bg-[#ed2967] last:border-b-0"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={href} className="font-archivo inline-flex items-center gap-2 text-sm font-bold">
                Read More <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-archivo flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-[#5c6570] before:h-0.5 before:w-[26px] before:bg-[#ed2967]">
      {children}
    </div>
  );
}
