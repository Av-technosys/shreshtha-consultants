"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/common/container";
import { ResendForm } from "@/components/forms/resend-form";

const HeroSection = () => {
  return (
    <section className="relative w-full flex items-center bg-[#0f1418] overflow-hidden min-h-[100vh]">
      <div className="absolute inset-0 z-0">
        <img
          src="/bim/hero-pic.png"
          alt="BIM 3D Model"
          className="absolute right-0 bottom-0 w-full md:w-[85%] h-full object-cover object-right-bottom opacity-50 md:opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1418] via-[#0f1418]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1418]/50 to-transparent" />
      </div>

      <Container className="relative z-10 pt-[50px] md:pt-[60px] pb-[80px] md:pb-[180px] max-lg:px-[6%]">
        <div className="max-w-[760px]">
          <div className="flex items-center gap-[12px] mb-[24px]">
            <span className="block w-[28px] h-[1.5px] bg-[#ee2559] shrink-0" />
            <span className="font-archivo text-[12px] font-semibold leading-[19.2px] tracking-[2.64px] uppercase text-white">
              BIM
            </span>
          </div>

          <h1 className="font-archivo text-[36px] md:text-[66px] font-bold leading-[40px] md:leading-[72px] tracking-[-1px] md:tracking-[-1.86px] text-white mb-[24px]">
            Smart solutions for efficient, precise, and collaborative project
            management.
          </h1>

          <p className="font-lora text-[16px] md:text-[18px] font-normal leading-[26px] md:leading-[28px] text-white max-w-[640px] m-0 text-white/90 pr-[10%] md:pr-0">
            At Shreshtha Consultancy, we leverage cutting-edge Building
            Information Modeling to ensure accuracy, efficiency, and seamless
            project execution — from conceptual design to final implementation.
          </p>
        </div>
      </Container>
    </section>
  );
};

const TypesOfBimSection = () => {
  return (
    <section className="w-full bg-[#F7F6F2] pt-[80px] md:pt-[100px] pb-[8px]">
      <Container className="font-lora text-[16px] font-normal leading-[25.6px] text-[#101418] max-lg:px-[6%]">
        <div className="flex items-center gap-[12px] mb-[16px]">
          <span className="block w-[28px] h-[1.5px] bg-[#ee2559] shrink-0" />
          <span className="font-archivo text-[12px] font-semibold leading-[19.2px] tracking-[2.64px] text-[#5C6570] uppercase">
            Types of BIM Services We Offer
          </span>
        </div>

        <h2 className="font-archivo text-[36px] font-bold leading-[37.44px] tracking-[-1.08px] text-[#101418] mb-[32px] md:mb-[40px]">
          Six ways we put BIM to work on your <br className="hidden md:block" />
          project.
        </h2>

        <div>
          <div className="font-lora text-[16px] font-normal leading-[25.6px] text-[#101418] grid grid-cols-1 md:grid-cols-2 gap-[48px] items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-lora text-[16px] font-normal leading-[25.6px] text-[#101418] flex flex-col pt-[40px] md:pt-[64px] pl-[16px] md:pl-[48px]"
            >
              <span className="font-archivo text-[13px] font-bold leading-[20.8px] text-[#ED2967] mb-[20px]">
                01
              </span>
              <h3 className="font-archivo text-[22px] font-bold leading-[22.88px] tracking-[-0.66px] text-[#101418] mb-[24px]">
                3D BIM Modeling
              </h3>
              <p className="font-lora text-[14px] font-normal leading-[23.1px] text-[#5C6570] m-0 max-w-[420px]">
                Detailed, coordinated 3D models that let you preview a project&apos;s
                performance and aesthetics before a single beam goes up.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="font-lora text-[16px] font-normal leading-[25.6px] text-[#101418]"
            >
              <div className="bg-white rounded-[24px] p-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#eee] flex items-center justify-center">
                <img
                  src="/bim/3DModeling.png"
                  alt="3D BIM Modeling"
                  className="w-full max-h-[340px] object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div>
          <div className="font-lora text-[16px] font-normal leading-[25.6px] text-[#101418] grid grid-cols-1 md:grid-cols-2 gap-[48px] items-start">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="font-lora text-[16px] font-normal leading-[25.6px] text-[#101418] order-last md:order-first flex justify-center"
            >
              <div className="bg-white w-full max-w-[460px] aspect-[4/3] rounded-[24px] p-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#eee] flex items-center justify-center ml-[20px] md:ml-[60px]">
                <img
                  src="/bim/ClashCoordination.png"
                  alt="Clash Detection & Coordination"
                  className="w-full h-full object-cover rounded-[12px]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-lora text-[16px] font-normal leading-[25.6px] text-[#101418] flex flex-col pt-[40px] md:pt-[64px] pr-[16px] md:pr-[48px] order-first md:order-last"
            >
              <span className="font-archivo text-[13px] font-bold leading-[20.8px] text-[#ED2967] mb-[20px]">
                02
              </span>
              <h3 className="font-archivo text-[22px] font-bold leading-[22.88px] tracking-[-0.66px] text-[#101418] mb-[24px]">
                Clash Detection & Coordination
              </h3>
              <p className="font-lora text-[14px] font-normal leading-[23.1px] text-[#5C6570] m-0 max-w-[420px]">
                We identify and resolve conflicts between architectural,
                structural, and MEP systems early, keeping designs
                installation-ready and construction on schedule.
              </p>
            </motion.div>
          </div>
        </div>

        <div>
          <div className="font-lora text-[16px] font-normal leading-[25.6px] text-[#101418] grid grid-cols-1 md:grid-cols-2 gap-[48px] items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-lora text-[16px] font-normal leading-[25.6px] text-[#101418] flex flex-col pt-[40px] md:pt-[64px] pl-[16px] md:pl-[48px]"
            >
              <span className="font-archivo text-[13px] font-bold leading-[20.8px] text-[#ED2967] mb-[20px]">
                03
              </span>
              <h3 className="font-archivo text-[22px] font-bold leading-[22.88px] tracking-[-0.66px] text-[#101418] mb-[24px]">
                BOQ & Quantity Takeoff
              </h3>
              <p className="font-lora text-[14px] font-normal leading-[23.1px] text-[#5C6570] m-0 max-w-[420px]">
                Automatic, accurate quantity takeoffs generate precise bills of
                quantities for tighter procurement and budget control.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="font-lora text-[16px] font-normal leading-[25.6px] text-[#101418]"
            >
              <div className="bg-white rounded-[24px] p-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#eee] flex items-center justify-center">
                <img
                  src="/bim/BOQBIM.png"
                  alt="4D & 5D Scheduling & Costing"
                  className="w-full max-h-[340px] object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div>
          <div className="font-lora text-[16px] font-normal leading-[25.6px] text-[#101418] grid grid-cols-1 md:grid-cols-2 gap-[48px] items-start">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="font-lora text-[16px] font-normal leading-[25.6px] text-[#101418] order-last md:order-first flex justify-center"
            >
              <div className="bg-white w-full max-w-[460px] aspect-[4/3] rounded-[24px] p-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#eee] flex items-center justify-center ml-[20px] md:ml-[60px]">
                <img
                  src="/bim/Shopdrawing.png"
                  alt="BIM Consulting & Strategy"
                  className="w-full h-full object-cover rounded-[12px]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-lora text-[16px] font-normal leading-[25.6px] text-[#101418] flex flex-col pt-[40px] md:pt-[64px] pr-[16px] md:pr-[48px] order-first md:order-last"
            >
              <span className="font-archivo text-[13px] font-bold leading-[20.8px] text-[#ED2967] mb-[20px]">
                04
              </span>
              <h3 className="font-archivo text-[22px] font-bold leading-[22.88px] tracking-[-0.66px] text-[#101418] mb-[24px]">
                Shop Drawings & Documentation
              </h3>
              <p className="font-lora text-[14px] font-normal leading-[23.1px] text-[#5C6570] m-0 max-w-[420px]">
                Construction-ready shop drawings and complete documentation
                derived directly from the model, built for smooth contractor
                handovers.
              </p>
            </motion.div>
          </div>
        </div>

        <div>
          <div className="font-lora text-[16px] font-normal leading-[25.6px] text-[#101418] grid grid-cols-1 md:grid-cols-2 gap-[48px] items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-lora text-[16px] font-normal leading-[25.6px] text-[#101418] flex flex-col pt-[32px] md:pt-[100px] pl-[16px] md:pl-[48px]"
            >
              <span className="font-archivo text-[13px] font-bold leading-[20.8px] text-[#ED2967] mb-[20px]">
                05
              </span>
              <h3 className="font-archivo text-[22px] font-bold leading-[22.88px] tracking-[-0.66px] text-[#101418] mb-[24px]">
                Digital Twin
              </h3>
              <p className="font-lora text-[14px] font-normal leading-[23.1px] text-[#5C6570] m-0 max-w-[420px]">
                Support with NOCs, fire safety approvals, and environmental
                clearances, backed by the model&apos;s precision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="font-lora text-[16px] font-normal leading-[25.6px] text-[#101418] py-[8px]"
            >
              <div className="rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden flex items-center justify-center w-full">
                <img
                  src="/bim/DigitalTwin.png"
                  alt="Digital Twin"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div>
          <div className="font-lora text-[16px] font-normal leading-[25.6px] text-[#101418] grid grid-cols-1 md:grid-cols-2 gap-[48px] items-start">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="font-lora text-[16px] font-normal leading-[25.6px] text-[#101418] py-[8px]"
            >
              <div className="rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden flex items-center justify-center w-full">
                <img
                  src="/bim/ScantoBIM.png"
                  alt="ScantoBIM"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-lora text-[16px] font-normal leading-[25.6px] text-[#101418] flex flex-col pt-[32px] md:pt-[100px] pl-[16px] md:pl-[48px]"
            >
              <span className="font-archivo text-[13px] font-bold leading-[20.8px] text-[#ED2967] mb-[20px]">
                06
              </span>
              <h3 className="font-archivo text-[22px] font-bold leading-[22.88px] tracking-[-0.66px] text-[#101418] mb-[24px]">
                Scan to BIM
              </h3>
              <p className="font-lora text-[14px] font-normal leading-[23.1px] text-[#5C6570] m-0 max-w-[420px]">
                Long-term operational insights drawn from the model, built for
                efficiency well beyond handover.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const GetStartedSection = () => {
  return (
    <section className="w-full bg-[#F7F6F2] pt-[100px] pb-[80px] md:pb-[120px]">
      <Container className="font-lora text-[16px] font-normal leading-[25.6px] text-[#101418] max-lg:px-[6%] flex flex-col items-center text-center">
        <div className="flex items-center gap-[12px] mb-[24px] justify-center">
          <span className="block w-[28px] h-[1.5px] bg-[#ee2559] shrink-0" />
          <span className="font-archivo text-[12px] font-semibold leading-[19.2px] tracking-[2.64px] text-[#5C6570] uppercase">
            Get Started
          </span>
        </div>

        <h2 className="font-archivo text-[32px] md:text-[42px] font-bold leading-[1.2] md:leading-[43.68px] tracking-[-1.26px] text-[#101418] mb-[48px] max-w-[800px]">
          We are the MEP consultants for
          <br className="hidden md:block" />
          speedy site execution & lower
          <br className="hidden md:block" />
          project costs.
        </h2>

        <ResendForm formType="BIM Inquiry" className="flex flex-col md:flex-row items-center gap-[16px] w-full max-w-[900px] mx-auto justify-center">
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="w-full md:w-auto flex-1 font-inter text-[14px] font-normal leading-[21px] text-[#000000] placeholder-[#888] bg-white rounded-[12px] px-[20px] py-[16px] border border-transparent shadow-[0_2px_10px_rgba(0,0,0,0.03)] focus:outline-none focus:border-[#e5e5e5] transition-colors"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="w-full md:w-auto flex-1 font-inter text-[14px] font-normal leading-[21px] text-[#000000] placeholder-[#888] bg-white rounded-[12px] px-[20px] py-[16px] border border-transparent shadow-[0_2px_10px_rgba(0,0,0,0.03)] focus:outline-none focus:border-[#e5e5e5] transition-colors"
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone"
            className="w-full md:w-auto flex-1 font-inter text-[14px] font-normal leading-[21px] text-[#000000] placeholder-[#888] bg-white rounded-[12px] px-[20px] py-[16px] border border-transparent shadow-[0_2px_10px_rgba(0,0,0,0.03)] focus:outline-none focus:border-[#e5e5e5] transition-colors"
          />
          <button
            type="submit"
            className="w-full md:w-auto bg-[#101418] text-white font-archivo text-[14px] font-semibold leading-[21px] rounded-[999px] px-[32px] py-[16px] hover:bg-[#2a3036] transition-colors whitespace-nowrap flex items-center justify-center gap-2"
          >
            Get Profile <span>&rarr;</span>
          </button>
        </ResendForm>
      </Container>
    </section>
  );
};

export default function BimPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <HeroSection />
      <TypesOfBimSection />
      <GetStartedSection />
    </div>
  );
}
 
