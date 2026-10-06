import * as React from "react";
import Link from "next/link";
import { Archivo } from "next/font/google";
import { Container } from "@/components/common/container";

const displayFont = Archivo({ subsets: ["latin"] });

export interface CrossLink {
  title: string;
  href: string;
}

export interface ServiceCrossLinksProps {
  kicker: string;
  title: string;
  links: CrossLink[];
}

export function ServiceCrossLinks({ kicker, title, links }: ServiceCrossLinksProps) {
  return (
    <section className="bg-[#f7f6f2] py-[70px] max-[760px]:py-[40px]">
      <Container>
        <div className="mb-10 flex flex-col">
          <div className={`${displayFont.className} mb-4 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] before:h-[1px] before:w-[26px] before:bg-[#ed2967]`}>
            {kicker}
          </div>
          <h2 className={`${displayFont.className} mt-[18px] text-[clamp(26px,3vw,36px)] font-bold leading-[1.1] tracking-[-0.03em] text-[#101418]`}>
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="group flex items-center justify-between rounded-[16px] border border-[#e3e0d8] bg-white px-5 py-5 sm:px-[30px] sm:py-[26px] transition-all duration-300 hover:border-[#111519] hover:bg-[#111519] hover:shadow-[0_10px_20px_rgba(16,20,24,0.1)]"
            >
              <b className={`${displayFont.className} text-[15px] font-bold text-[#101418] transition-colors duration-300 group-hover:text-white`}>
                {link.title}
              </b>
              <span className="text-[#101418] transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

