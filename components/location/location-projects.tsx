import React from "react";
import Image from "next/image";
import { Container } from "@/components/common/container";

interface LocationProjectsProps {
  title: string;
  description: string;
  points: string[];
  conclusion: string;
  imageSrc: string;
}

export function LocationProjects({
  title,
  description,
  points,
  conclusion,
  imageSrc,
}: LocationProjectsProps) {
  return (
    <section className="w-full bg-[#FFFFFF] py-[60px] md:py-[100px] font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px] items-start font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
        <div className="w-full aspect-[4/3] sm:aspect-[16/10] relative rounded-[8px] bg-white shadow-[0_4px_30px_rgba(0,0,0,0.05)] font-lora text-[16px] font-normal leading-[24px] text-[#333333] flex items-center justify-center p-[20px]">
          <div className="relative w-full h-full">
            <Image
              src={imageSrc}
              alt="Projects We Serve"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col font-lora text-[16px] font-normal leading-[24px] text-[#333333] pt-[10px]">
          <h2 className="font-poppins text-[24px] md:text-[32px] font-semibold leading-[30px] md:leading-[32px] text-[#142436] mb-[20px] md:mb-[24px]">
            {title}
          </h2>

          <p className="font-poppins text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[23px] text-[#5A5A66] mb-[20px] md:mb-[24px]">
            {description}
          </p>

          <ul className="flex flex-col gap-[16px] md:gap-[20px] mb-[24px] md:mb-[32px] ml-[20px] list-disc font-poppins text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[23px] text-[#5A5A66]">
            {points.map((point, idx) => (
              <li
                key={idx}
                className="font-poppins text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[23px] text-[#5A5A66] pl-[4px] md:pl-[8px] marker:text-[#5A5A66]"
              >
                <span className="font-poppins text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[23px] text-[#5A5A66]">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <p className="font-poppins text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[23px] text-[#5A5A66]">
            {conclusion}
          </p>
        </div>
      </Container>
    </section>
  );
}
