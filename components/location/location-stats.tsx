import React from "react";
import Image from "next/image";
import { Container } from "@/components/common/container";

const STATS = [
  {
    icon: "/location/completed-icon.png",
    number: "2,000",
    suffix: "+",
    label: "PROJECTS\nCOMPLETED",
  },
  {
    icon: "/location/sqft-icon.png",
    number: "200M",
    suffix: "+",
    label: "SQ.FT AREAS\nWORKED",
  },
  {
    icon: "/location/badge-icon.png",
    number: "30",
    suffix: "+",
    label: "YEARS OF\nEXPERIENCE",
  },
  {
    icon: "/location/client-server-icon.png",
    number: "400",
    suffix: "+",
    label: "CLIENTS\nSERVED",
  },
  {
    icon: "/location/team-icon.png",
    number: "100",
    suffix: "+",
    label: "TEAM SIZE",
  },
];

export function LocationStats() {
  return (
    <section className="w-full bg-[#142436] py-[60px] md:py-[100px] font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
      <Container className="font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-y-[40px] md:gap-[40px] lg:gap-0 w-full font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-start gap-[16px] md:gap-[24px] font-lora text-[16px] font-normal leading-[24px] text-[#333333] ${
                idx < 2 ? "w-[48%] md:w-auto" : "w-[31%] md:w-auto"
              }`}
            >
              <div
                className={`relative font-lora text-[16px] font-normal leading-[24px] text-[#333333] ${
                  idx < 2
                    ? "w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
                    : "w-[50px] h-[50px] md:w-[80px] md:h-[80px]"
                }`}
              >
                <Image
                  src={stat.icon}
                  alt={stat.label.replace("\n", " ")}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col gap-[4px] md:gap-[8px]">
                <div
                  className={`flex items-center font-poppins font-bold tracking-[1px] text-[#FFFFFF] uppercase whitespace-nowrap ${
                    idx < 2
                      ? "text-[28px] md:text-[35px] leading-[36px] md:leading-[45px]"
                      : "text-[22px] md:text-[35px] leading-[30px] md:leading-[45px]"
                  }`}
                >
                  {stat.number}
                  <span
                    className={`font-poppins font-bold tracking-[1px] text-[#FFFFFF] uppercase ${
                      idx < 2
                        ? "text-[28px] md:text-[35px] leading-[36px] md:leading-[45px]"
                        : "text-[22px] md:text-[35px] leading-[30px] md:leading-[45px]"
                    }`}
                  >
                    {stat.suffix}
                  </span>
                </div>

                <div
                  className={`font-poppins font-bold text-[#FFFFFF] uppercase whitespace-pre-line ${
                    idx < 2
                      ? "text-[16px] md:text-[20px] leading-[22px] md:leading-[25px]"
                      : "text-[12px] md:text-[20px] leading-[16px] md:leading-[25px]"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
