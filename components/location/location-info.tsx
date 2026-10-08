"use client";

import { Container } from "@/components/common/container";
import { ResendForm } from "@/components/forms/resend-form";
import Link from "next/link";
import Image from "next/image";

interface LocationInfoProps {
  title: React.ReactNode;
  paragraphs: React.ReactNode[];
}

export function LocationInfo({ title, paragraphs }: LocationInfoProps) {
  return (
    <section className="w-full bg-[#FFFFFF] py-[60px] md:py-[100px] font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
      <Container className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-[40px] lg:gap-[60px]">
        <div className="flex flex-col font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
          <h2 className="font-poppins text-[24px] md:text-[32px] font-semibold leading-[30px] md:leading-[32px] text-[#000000] mb-[20px] md:mb-[24px]">
            {title}
          </h2>

          <div className="flex flex-col gap-[20px]">
            {paragraphs.map((para, index) => (
              <div
                key={index}
                className="font-poppins text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[23px] text-[#142436]"
              >
                {para}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-fit bg-[#FFFFFF] rounded-[16px] shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-[30px] md:p-[40px] font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
          <h3 className="font-poppins text-[22px] md:text-[26px] font-medium leading-[26px] text-[#ED2967] text-center mb-[24px] md:mb-[30px]">
            Connect With Us
          </h3>

          <ResendForm
            formType="Location Info Inquiry"
            className="flex flex-col gap-[16px] font-lora text-[16px] font-normal leading-[24px] text-[#333333]"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="w-full bg-[#F4F4F6] border-none rounded-[8px] px-[16px] py-[12px] font-poppins text-[15px] font-normal leading-[23px] text-[#142436] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#000000] transition-all"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full bg-[#F4F4F6] border-none rounded-[8px] px-[16px] py-[12px] font-poppins text-[15px] font-normal leading-[23px] text-[#142436] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#000000] transition-all"
            />
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              className="w-full bg-[#F4F4F6] border-none rounded-[8px] px-[16px] py-[12px] font-poppins text-[15px] font-normal leading-[23px] text-[#142436] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#000000] transition-all"
            />
            <input
              type="text"
              name="projectSize"
              required
              placeholder="Project Size"
              className="w-full bg-[#F4F4F6] border-none rounded-[8px] px-[16px] py-[12px] font-poppins text-[15px] font-normal leading-[23px] text-[#142436] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#000000] transition-all"
            />
            <input
              type="text"
              name="projectLocation"
              required
              placeholder="Project Location"
              className="w-full bg-[#F4F4F6] border-none rounded-[8px] px-[16px] py-[12px] font-poppins text-[15px] font-normal leading-[23px] text-[#142436] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#000000] transition-all"
            />

            <div className="relative">
              <select
                name="projectType"
                required
                className="w-full bg-[#F4F4F6] border-none rounded-[8px] px-[16px] py-[12px] font-poppins text-[15px] font-normal leading-[23px] text-[#142436] appearance-none focus:outline-none focus:ring-2 focus:ring-[#000000] transition-all"
              >
                <option value="">Type of Project</option>
                <option value="Commercial">Commercial</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Hospital">Hospital</option>
                <option value="Infrastructure/Industrial">
                  Infrastructure/Industrial
                </option>
                <option value="Institutional">Institutional</option>
                <option value="Landscape">Landscape</option>
                <option value="Residential">Residential</option>
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

            <button
              type="submit"
              className="w-full mt-[8px] bg-[#ED2967] hover:bg-[#172554] shadow-md hover:shadow-lg transform hover:-translate-y-[2px] transition-all duration-300 py-[14px] rounded-full flex items-center justify-center"
            >
              <span className="font-poppins text-[16px] font-medium leading-[16px] text-[#FFFFFF]">
                Request a Proposal
              </span>
            </button>
          </ResendForm>
        </div>
      </Container>
    </section>
  );
}
