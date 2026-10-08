import React from "react";
import { Container } from "@/components/common/container";

interface LocationServiceItem {
  title: string;
  description?: string;
  subTitle?: string;
  points: string[];
}

interface LocationServicesProps {
  title: string;
  subtitle?: string;
  services: LocationServiceItem[];
}

export function LocationServices({
  title,
  subtitle,
  services,
}: LocationServicesProps) {
  return (
    <section className="w-full bg-[#FFFFFF] py-[60px] md:py-[100px] font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
      <Container className="flex flex-col items-center font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
        <h2
          className={`font-poppins text-[24px] md:text-[32px] font-semibold leading-[30px] md:leading-[32px] text-[#000000] text-center ${subtitle ? "mb-[16px]" : "mb-[40px] md:mb-[80px]"}`}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="font-lora text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] text-[#ED2967] text-center mb-[40px] md:mb-[80px] max-w-[1000px]">
            {subtitle}
          </p>
        )}

        <div
          className={`grid grid-cols-1 ${services.length === 2 ? "md:grid-cols-2 max-w-[900px] mx-auto" : "md:grid-cols-3"} gap-[40px] md:gap-[30px] w-full font-lora text-[16px] font-normal leading-[24px] text-[#333333]`}
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col h-full font-lora text-[16px] font-normal leading-[24px] text-[#333333]"
            >
              <h3 className="font-poppins text-[18px] md:text-[20px] font-semibold leading-[24px] md:leading-[20px] text-[#000000] mb-[16px] md:mb-[20px]">
                {service.title}
              </h3>

              {(service.description || service.subTitle) && (
                <div className="font-poppins text-[16px] font-normal leading-[23px] text-[#7A7A7A] mb-[40px] flex flex-col gap-[30px] flex-grow">
                  {service.description && (
                    <p className="font-poppins text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[23px] text-[#7A7A7A] flex-grow">
                      {service.description}
                    </p>
                  )}
                  {service.subTitle && (
                    <h4 className="font-poppins text-[14px] md:text-[16px] font-bold leading-[22px] md:leading-[23px] text-[#000000]">
                      {service.subTitle}
                    </h4>
                  )}
                </div>
              )}

              <ul
                className={`flex flex-col gap-[12px] md:gap-[16px] font-lora text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] text-[#333333] ${!service.description && !service.subTitle ? "flex-grow" : ""}`}
              >
                {service.points.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex items-start gap-[10px] md:gap-[12px] font-lora text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] text-[#333333]"
                  >
                    <div className="mt-[4px] shrink-0">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="8" cy="8" r="8" fill="#ED2967" />
                        <path
                          d="M4.5 8L7 10.5L11.5 5.5"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
