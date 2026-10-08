"use client";

import React, { useState } from "react";
import { Container } from "@/components/common/container";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

interface LocationInfoProps {
  title: React.ReactNode;
  paragraphs: React.ReactNode[];
}

export function LocationInfo({ title, paragraphs }: LocationInfoProps) {
  const [recaptchaStatus, setRecaptchaStatus] = useState<
    "unverified" | "verifying" | "verified" | "failed"
  >("unverified");

  const handleRecaptchaClick = () => {
    if (recaptchaStatus === "unverified" || recaptchaStatus === "failed") {
      setRecaptchaStatus("verifying");
      setTimeout(() => {
        setRecaptchaStatus("verified");
      }, 1000);
    }
  };

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

          <form className="flex flex-col gap-[16px] font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-[#F4F4F6] border-none rounded-[8px] px-[16px] py-[12px] font-poppins text-[15px] font-normal leading-[23px] text-[#142436] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#000000] transition-all"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#F4F4F6] border-none rounded-[8px] px-[16px] py-[12px] font-poppins text-[15px] font-normal leading-[23px] text-[#142436] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#000000] transition-all"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-[#F4F4F6] border-none rounded-[8px] px-[16px] py-[12px] font-poppins text-[15px] font-normal leading-[23px] text-[#142436] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#000000] transition-all"
            />
            <input
              type="text"
              placeholder="Project Size"
              className="w-full bg-[#F4F4F6] border-none rounded-[8px] px-[16px] py-[12px] font-poppins text-[15px] font-normal leading-[23px] text-[#142436] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#000000] transition-all"
            />
            <input
              type="text"
              placeholder="Project Location"
              className="w-full bg-[#F4F4F6] border-none rounded-[8px] px-[16px] py-[12px] font-poppins text-[15px] font-normal leading-[23px] text-[#142436] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#000000] transition-all"
            />

            <div className="relative">
              <select className="w-full bg-[#F4F4F6] border-none rounded-[8px] px-[16px] py-[12px] font-poppins text-[15px] font-normal leading-[23px] text-[#142436] appearance-none focus:outline-none focus:ring-2 focus:ring-[#000000] transition-all">
                <option>Type of Project</option>
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

            <div className="w-full border border-[#d3d3d3] rounded-[3px] bg-[#f9f9f9] p-[10px] flex flex-col mt-[4px]">
              {recaptchaStatus === "failed" && (
                <span className="text-[#d93025] text-[11px] leading-[14px] mb-[6px] font-sans">
                  Verification expired. Check the checkbox again.
                </span>
              )}
              <div className="flex items-center justify-between w-full">
                <div
                  className="flex items-center gap-[12px] cursor-pointer"
                  onClick={handleRecaptchaClick}
                >
                  <div
                    className={`w-[28px] h-[28px] bg-white border-2 flex items-center justify-center rounded-[2px] ${recaptchaStatus === "failed" ? "border-[#d93025]" : "border-[#c1c1c1]"}`}
                  >
                    {recaptchaStatus === "verifying" && (
                      <div className="w-4 h-4 rounded-full border-2 border-t-[#4285F4] border-r-[#4285F4] border-b-[#4285F4] border-l-transparent animate-spin"></div>
                    )}
                    {recaptchaStatus === "verified" && (
                      <IconCheck size={20} stroke={3} color="#009E5A" />
                    )}
                  </div>
                  <span className="font-sans text-[14px] text-[#222222]">
                    I'm not a robot
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center mr-[4px]">
                  <Image
                    src="/location/recaptcha-img.png"
                    alt="reCAPTCHA logo"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                  <span className="text-[9px] text-[#555555] mt-[2px] font-sans">
                    reCAPTCHA
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="w-full mt-[8px] bg-[#ED2967] hover:bg-[#172554] shadow-md hover:shadow-lg transform hover:-translate-y-[2px] transition-all duration-300 py-[14px] rounded-full flex items-center justify-center"
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
