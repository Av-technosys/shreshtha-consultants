"use client";

import { motion } from "framer-motion";
import React from "react";
import { Container } from "@/components/common/container";
import { ResendForm } from "@/components/forms/resend-form";

const HeroSection = () => (
  <section className="pt-[60px] md:pt-[120px] pb-[60px]">
    <Container className="flex flex-col items-center text-center max-lg:px-[4%]">
      <div className="flex flex-col items-center max-w-[800px] w-full mx-auto">
        <div className="flex items-center gap-[12px] mb-[24px]">
          <span className="block w-[28px] h-[1.5px] bg-[#ee2559] shrink-0" />
          <span
            className={`font-archivo text-[13.5px] font-semibold leading-[19.2px] tracking-[2.64px] uppercase text-[#5C6570]`}
          >
            Careers at Shreshtha
          </span>
        </div>
        <h1
          className={`font-archivo w-full text-[42px] md:text-[56px] lg:text-[84px] font-bold leading-[1.1] lg:leading-[92.4px] tracking-[-1.2px] lg:tracking-[-2.52px] text-[#101418] mb-[24px]`}
        >
          Join our team of <br className="block md:hidden" />
          experts.
        </h1>
        <p
          className={`font-lora text-[18px] font-normal leading-[28.8px] tracking-normal text-[#5C6570] m-0 px-[16px] md:px-0`}
        >
          Be part of an innovative and inspiring journey.
        </p>
      </div>
    </Container>
  </section>
);

const HeroBanner = () => (
  <section className="pb-[80px]">
    <Container className="max-lg:px-[4%]">
      <div className="w-full rounded-[24px] overflow-hidden">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          src="/career/careers-hero.png"
          alt="Engineers at work on MEP design"
          className="w-full h-[320px] md:h-auto object-cover block"
        />
      </div>
    </Container>
  </section>
);

const tiles = [
  {
    n: "01",
    title: "To experience AI-driven MEP solutions",
    text: "At Shreshtha Consultancy, we combine engineering excellence with Artificial Intelligence to generate optimal MEP designs that ensure faster site execution, enhanced efficiency, and reduced project costs. Our AI-driven approach transforms innovation into intelligent engineering, delivering sustainable and future-ready solutions.",
    img: "/career/tile-1.png",
    label: "Life at Shreshtha",
  },
  {
    n: "02",
    title: "To work on big complex and iconic projects",
    text: "At Shreshtha Consultancy, you'll gain hands-on exposure to large-scale and technically challenging projects across hospitality, residential, and commercial developments. From concept design to site execution, you'll be part of projects that shape skylines and set industry benchmarks.",
    img: "/career/tile-2.jpg",
    label: "Design in Action",
  },
  {
    n: "03",
    title: "To work with best people in MEP",
    text: "At Shreshtha Consultancy, you'll work alongside some of the finest minds in MEP engineering. Our team-driven environment emphasizes practical design, strong fundamentals, and continuous learning to build industry ready professionals.",
    img: "/career/tile-3.jpg",
    label: "On Site",
  },
];

const TilesSection = () => (
  <section className="pb-[100px]">
    <Container className="max-lg:px-[4%]">
      <div className="flex flex-col rounded-[24px] overflow-hidden">
        {tiles.map((t, i) => {
          const reversed = i % 2 === 1;
          return (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              key={t.n}
              className="grid grid-cols-1 lg:grid-cols-2"
            >
              <div
                className={`bg-[#f9f7f3] flex flex-col justify-center px-[32px] lg:px-[64px] py-[32px] ${
                  reversed ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div
                  className={`font-archivo text-[64px] font-extrabold leading-[64px] tracking-normal text-[#E3E0D8] mb-[16px]`}
                >
                  {t.n}
                </div>
                <h3
                  className={`font-archivo text-[22px] font-bold leading-[26.84px] tracking-[-0.66px] text-[#101418] mb-[24px]`}
                >
                  {t.title}
                </h3>
                <p
                  className={`font-lora text-[#5C6570] text-[14px] font-normal leading-[23.8px] tracking-normal m-0 max-w-[660px]`}
                >
                  {t.text}
                </p>
              </div>

              <div
                className={`bg-[#F7F6F2] w-full h-full ${reversed ? "lg:order-1" : "lg:order-2"}`}
              >
                <div
                  className="relative h-[320px] lg:h-[380px] w-full overflow-hidden rounded-[28px]"
                >
                  <img
                    src={t.img}
                    alt={t.label}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                  <div
                    className={`font-inter absolute bottom-[32px] left-[38px] text-white text-[15px] font-bold tracking-[0.1em] uppercase`}
                  >
                    {t.label}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Container>
  </section>
);

const roles = [
  {
    n: "01",
    title: "HVAC Designer",
    loc: "Jaipur, Rajasthan",
    level: "Senior",
    open: true,
  },
  { n: "02", title: "Open Position", loc: "—", level: "—", open: false },
  { n: "03", title: "Open Position", loc: "—", level: "—", open: false },
];

const RolesSection = () => (
  <section
    className="pt-[120px] pb-[80px]"
    style={{ backgroundColor: "#101418" }}
  >
    <Container className="max-lg:px-[4%]">
      <div className="flex items-center gap-[16px] mb-[16px]">
        <span className="block w-[24px] h-[1.5px] bg-[#ee2559] shrink-0" />
        <span
          className={`font-inter text-[13px] font-bold tracking-[0.15em] uppercase text-[#888]`}
        >
          Open Positions
        </span>
      </div>

      <h2
        className={`font-archivo font-bold text-white leading-[1.2] md:leading-[1.1] tracking-[-0.03em] mb-[40px] md:mb-[64px] text-[28px] md:text-[44px] lg:text-[48px] max-w-[640px]`}
      >
        Three roles on the team right now — one of them might be yours.
      </h2>

      <div className="border-t border-[#222]">
        {roles.map((r) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            key={r.n}
            className="flex flex-col lg:flex-row lg:items-center py-[32px] border-b border-[#222] gap-[8px] lg:gap-0"
          >
            <div
              className={`font-inter text-[13px] text-[#777] w-[60px] shrink-0`}
            >
              {r.n}
            </div>
            <div
              className={`font-archivo text-[20px] font-bold tracking-[-0.01em] text-white flex-1 mb-[4px] lg:mb-0`}
            >
              {r.title}
            </div>
            <div
              className={`font-inter text-[14px] text-[#888] lg:w-[240px] mb-[4px] lg:mb-0`}
            >
              {r.loc}
            </div>
            <div
              className={`font-inter text-[14px] text-[#888] lg:w-[160px] mb-[12px] lg:mb-0`}
            >
              {r.level}
            </div>
            <div className="w-[100px] flex justify-start lg:justify-end">
              <span
                className={`font-inter inline-block text-[11px] font-bold tracking-[0.1em] uppercase px-[20px] py-[8px] rounded-full`}
                style={
                  r.open
                    ? { backgroundColor: "#ff2e5c", color: "#fff" }
                    : { backgroundColor: "#222", color: "#888" }
                }
              >
                {r.open ? "Open" : "Closed"}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

const ApplySection = () => (
  <section className="py-[60px] lg:py-[120px]">
    <Container className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] lg:gap-[80px] items-start max-lg:px-[4%]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col"
      >
        <div className="flex items-center gap-[12px] mb-[24px]">
          <span className="block w-[24px] h-[1.5px] bg-[#ee2559] shrink-0" />
          <span
            className={`font-archivo text-[15px] font-semibold leading-[26.25px] tracking-[3.3px] uppercase text-[#5C6570]`}
          >
            Apply Now
          </span>
        </div>

        <h2
          className={`font-archivo text-[32px] lg:text-[42px] font-bold leading-[1.2] lg:leading-[43.68px] tracking-[-1px] lg:tracking-[-1.26px] text-[#101418] mb-[24px] lg:mb-[32px]`}
        >
          Send us your resume, we&apos;ll take it from there.
        </h2>

        <p
          className={`font-lora text-[15px] font-normal leading-[26.25px] tracking-normal text-[#5C6570] mb-[48px] lg:mb-[40px] max-w-[480px]`}
        >
          Whether or not a role is open today, we&apos;re always glad to hear from
          engineers who want to build something real.
        </p>

        <div className="mb-[24px] lg:mb-[48px]">
          <a
            href="mailto:contact@shreshthaconsultants.com"
            className="font-archivo text-[16px] font-bold leading-[25.6px] tracking-normal text-[#101418] border-b-[2px] border-[#ee2559] pb-[4px] hover:text-[#ee2559] transition-colors w-fit"
          >
            contact@shreshthaconsultants.com
          </a>
        </div>

        <div className="hidden lg:block rounded-[16px] overflow-hidden bg-[#e9e6dd] w-full h-[240px] relative">
          <motion.img
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src="/career/contact-img.png"
            alt="Contact image"
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="font-lora text-[16px] font-normal leading-[25.6px] tracking-normal text-[#101418] bg-white p-[48px] rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100"
      >
        <ResendForm formType="Career Application" className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[10px]">
            <label
              className={`font-archivo text-[11.5px] font-semibold leading-[11.5px] tracking-[1.15px] uppercase text-[#5C6570]`}
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className={`font-inter text-[14.5px] font-normal leading-[21.75px] tracking-normal text-black placeholder:text-[#999] w-full bg-[#F7F6F2] border border-transparent rounded-[8px] px-[20px] py-[16px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all`}
            />
          </div>

          <div className="flex flex-col gap-[10px]">
            <label
              className={`font-archivo text-[11.5px] font-semibold leading-[11.5px] tracking-[1.15px] uppercase text-[#5C6570]`}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@email.com"
              required
              className={`font-inter text-[14.5px] font-normal leading-[21.75px] tracking-normal text-black placeholder:text-[#999] w-full bg-[#F7F6F2] border border-transparent rounded-[8px] px-[20px] py-[16px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all`}
            />
          </div>

          <div className="flex flex-col gap-[10px]">
            <label
              className={`font-archivo text-[11.5px] font-semibold leading-[11.5px] tracking-[1.15px] uppercase text-[#5C6570]`}
            >
              Phone Number
            </label>
            <input
              type="number"
              name="phone"
              placeholder="+91 9876543210"
              required
              className={`font-inter text-[14.5px] font-normal leading-[21.75px] tracking-normal text-black placeholder:text-[#999] w-full bg-[#F7F6F2] border border-transparent rounded-[8px] px-[20px] py-[16px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all`}
            />
          </div>

          <div className="flex flex-col gap-[10px]">
            <label
              className={`font-archivo text-[11.5px] font-semibold leading-[11.5px] tracking-[1.15px] uppercase text-[#5C6570]`}
            >
              Role You&apos;re Applying For
            </label>
            <input
              type="text"
              name="role"
              required
              placeholder="e.g. HVAC Designer"
              className={`font-inter text-[14.5px] font-normal leading-[21.75px] tracking-normal text-black placeholder:text-[#999] w-full bg-[#F7F6F2] border border-transparent rounded-[8px] px-[20px] py-[16px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all`}
            />
          </div>

          <div className="flex flex-col gap-[10px]">
            <label
              className={`font-archivo text-[11.5px] font-semibold leading-[11.5px] tracking-[1.15px] uppercase text-[#5C6570]`}
            >
              Resume
            </label>
            <div
              className={`font-inter text-[14.5px] font-normal leading-[21.75px] tracking-normal text-black w-full bg-[#F7F6F2] border border-dashed border-gray-300 rounded-[8px] px-[20px] py-[14px]`}
            >
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                className="w-full text-[#5C6570] file:mr-[16px] file:py-[8px] file:px-[16px] file:rounded-[6px] file:border file:border-gray-200 file:text-[13px] file:font-semibold file:bg-white file:text-black hover:file:bg-gray-50 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <label
              className={`font-archivo text-[11.5px] font-semibold leading-[11.5px] tracking-[1.15px] uppercase text-[#5C6570]`}
            >
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="A few lines about you"
              className={`font-inter text-[14.5px] font-normal leading-[21.75px] tracking-normal text-black placeholder:text-[#999] w-full bg-[#F7F6F2] border border-transparent rounded-[8px] px-[20px] py-[16px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none`}
            />
          </div>

          <button
            type="submit"
            className="font-archivo mt-[16px] bg-[#111] text-white text-[14px] font-semibold leading-[21px] tracking-normal py-[20px] w-full rounded-full hover:bg-[#172554] transition-colors flex items-center justify-center gap-[8px]"
          >
            Submit Application
            <span>→</span>
          </button>
        </ResendForm>
      </motion.div>
    </Container>
  </section>
);

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-[#f7f6f2]">
      <HeroSection />
      <HeroBanner />
      <TilesSection />
      <RolesSection />
      <ApplySection />
    </div>
  );
}
