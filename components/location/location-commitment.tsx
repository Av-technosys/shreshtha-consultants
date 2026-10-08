import React from "react";
import Image from "next/image";
import { Container } from "@/components/common/container";

interface LocationCommitmentProps {
  imageSrc: string;
  title?: string;
  description?: string;
}

export function LocationCommitment({
  imageSrc,
  title = "Commitment to Excellence",
  description = "At Shreshtha Consultants, we believe that efficient MEP systems are the backbone of any successful building. Our designs aim to optimize lifecycle costs, ensure occupant comfort, and support sustainable development. By leveraging advanced engineering tools and best industry practices, we consistently deliver value-driven outcomes for our clients.",
}: LocationCommitmentProps) {
  return (
    <section className="w-full bg-[#142436] py-[60px] md:py-[100px] font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
      <Container className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-[40px] lg:gap-[60px] font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
        <div className="flex flex-col font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
          <h2 className="font-poppins text-[24px] md:text-[32px] font-semibold leading-[30px] md:leading-[32px] text-[#FFFFFF] mb-[20px] md:mb-[24px]">
            {title}
          </h2>
          <p className="font-poppins text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[23px] text-[#FFFFFF] mb-[32px] md:mb-[40px]">
            {description}
          </p>
          <div className="w-full relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-[350px] font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
            <Image
              src={imageSrc}
              alt="Commitment to Excellence Diagram"
              fill
              className="object-cover md:object-contain object-left-top"
            />
          </div>
        </div>

        <div className="bg-[#FFFFFF] p-[30px] md:p-[40px] rounded-[16px] shadow-[0_10px_40px_rgba(0,0,0,0.15)] font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
          <h3 className="font-poppins text-[20px] md:text-[24px] font-semibold leading-[28px] md:leading-[32px] text-[#000000] mb-[24px] md:mb-[30px]">
            Book a Consultation | Contact Shreshtha Consultants Today
          </h3>

          <form className="flex flex-col gap-[20px] font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
            <div className="flex flex-col gap-[6px] font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
              <label className="font-poppins text-[14px] font-medium leading-[20px] text-[#5A5A66]">
                Name*
              </label>
              <input
                type="text"
                className="w-full bg-[#F4F4F6] border-none rounded-[8px] px-[16px] py-[12px] font-poppins text-[15px] font-normal leading-[23px] text-[#142436] focus:outline-none focus:ring-2 focus:ring-[#000000] transition-all"
              />
            </div>

            <div className="flex flex-col gap-[6px] font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
              <label className="font-poppins text-[14px] font-medium leading-[20px] text-[#5A5A66]">
                Email*
              </label>
              <input
                type="email"
                className="w-full bg-[#F4F4F6] border-none rounded-[8px] px-[16px] py-[12px] font-poppins text-[15px] font-normal leading-[23px] text-[#142436] focus:outline-none focus:ring-2 focus:ring-[#000000] transition-all"
              />
            </div>

            <div className="flex flex-col gap-[6px] font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
              <label className="font-poppins text-[14px] font-medium leading-[20px] text-[#5A5A66]">
                Phone number*
              </label>
              <input
                type="tel"
                className="w-full bg-[#F4F4F6] border-none rounded-[8px] px-[16px] py-[12px] font-poppins text-[15px] font-normal leading-[23px] text-[#142436] focus:outline-none focus:ring-2 focus:ring-[#000000] transition-all"
              />
            </div>

            <div className="flex flex-col gap-[6px] font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
              <label className="font-poppins text-[14px] font-medium leading-[20px] text-[#5A5A66]">
                Project Size (in sq. ft.)
              </label>
              <input
                type="text"
                placeholder="Message"
                className="w-full bg-[#F4F4F6] border-none rounded-[8px] px-[16px] py-[12px] font-poppins text-[15px] font-normal leading-[23px] text-[#142436] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#000000] transition-all"
              />
            </div>

            <div className="flex flex-col gap-[6px] font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
              <label className="font-poppins text-[14px] font-medium leading-[20px] text-[#5A5A66]">
                Project Location
              </label>
              <input
                type="text"
                className="w-full bg-[#F4F4F6] border-none rounded-[8px] px-[16px] py-[12px] font-poppins text-[15px] font-normal leading-[23px] text-[#142436] focus:outline-none focus:ring-2 focus:ring-[#000000] transition-all"
              />
            </div>

            <div className="flex flex-col gap-[6px] font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
              <label className="font-poppins text-[14px] font-medium leading-[20px] text-[#5A5A66]">
                Type of Project
              </label>
              <div className="relative">
                <select className="w-full bg-[#F4F4F6] border-none rounded-[8px] px-[16px] py-[12px] font-poppins text-[15px] font-normal leading-[23px] text-[#142436] appearance-none focus:outline-none focus:ring-2 focus:ring-[#000000] transition-all">
                  <option>Commercial</option>
                  <option>Healthcare</option>
                  <option>Hospital</option>
                  <option>Infrastructure/Industrial</option>
                  <option>Institutional</option>
                  <option>Landscape</option>
                  <option>Residential</option>
                </select>
                <div className="absolute inset-y-0 right-[16px] flex items-center pointer-events-none">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L6 6.5L11 1.5"
                      stroke="#5A5A66"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="w-full mt-[10px] bg-[#ED2967] hover:bg-[#172554] shadow-md hover:shadow-lg transform hover:-translate-y-[2px] transition-all duration-300 py-[14px] rounded-full font-lora text-[16px] font-normal leading-[24px] flex items-center justify-center"
            >
              <span className="font-poppins text-[16px] font-medium leading-[16px] text-[#FFFFFF]">
                Request a Proposal
              </span>
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
