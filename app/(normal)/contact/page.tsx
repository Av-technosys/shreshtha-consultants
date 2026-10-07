"use client";
import React, { useState } from 'react';
import { IconMapPin, IconPhone, IconMail } from '@tabler/icons-react';

const HeroSection = () => (
  <section className="flex flex-col items-center text-center px-[4%] pt-[60px] md:pt-[140px] pb-[80px]">
    <div className="flex flex-col items-center max-w-[900px] w-full mx-auto">
      <div className="flex items-center gap-[12px] mb-[24px] md:mb-[16px]">
        <span className="block w-[28px] h-[1.5px] bg-[#ee2559] shrink-0" />
        <span className="font-archivo text-[12px] font-semibold leading-[19.2px] tracking-[2.64px] uppercase text-[#5C6570]">
          Contact Us
        </span>
      </div>
      <h1 className="font-archivo w-full text-[42px] md:text-[48px] lg:text-[74px] font-bold leading-[1.1] lg:leading-[76.96px] tracking-[-1.2px] lg:tracking-[-2.22px] text-[#101418] mb-[16px] md:mb-[24px]">
        Be part of an <br className="block md:hidden" />
        innovative<br className="hidden md:block" /> journey.
      </h1>
      <p className="font-lora text-[16px] md:text-[17px] font-normal leading-[25.6px] md:leading-[27.2px] tracking-normal text-[#5C6570] m-0 max-w-[520px] px-[16px] md:px-0">
        Connect with us to collaborate, share ideas, or start a<br className="hidden md:block" /> conversation.
      </p>
    </div>
  </section>
);

const CardsSection = () => (
  <section className="px-[4%] pb-[100px]">
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
      
      {/* Visit Us */}
      <div className="bg-white rounded-[12px] p-[24px] flex items-start gap-[20px] border border-[#eee] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="w-[48px] h-[48px] rounded-[12px] bg-[#101418] flex items-center justify-center shrink-0">
          <IconMapPin size={20} stroke={2.5} color="#ED2967" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-archivo text-[14.5px] font-bold leading-[23.2px] text-[#101418] mb-[4px]">Visit Us</h3>
          <p className="font-lora text-[13px] font-normal leading-[20.8px] text-[#5C6570] m-0 pr-[8px]">
            D - 27, Near Pillar No. 107, New Sanganer Rd., Shyam Nagar, Jaipur
          </p>
        </div>
      </div>

      {/* Call Us */}
      <div className="bg-white rounded-[12px] p-[24px] flex items-start gap-[20px] border border-[#eee] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="w-[48px] h-[48px] rounded-[12px] bg-[#101418] flex items-center justify-center shrink-0">
          <IconPhone size={20} stroke={2.5} color="#ED2967" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-archivo text-[14.5px] font-bold leading-[23.2px] text-[#101418] mb-[4px]">Call Us</h3>
          <p className="font-lora text-[13px] font-normal leading-[20.8px] text-[#5C6570] m-0">
            +91-9799858301
          </p>
        </div>
      </div>

      {/* Email Us */}
      <div className="bg-white rounded-[12px] p-[24px] flex items-start gap-[20px] border border-[#eee] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="w-[48px] h-[48px] rounded-[12px] bg-[#101418] flex items-center justify-center shrink-0">
          <IconMail size={20} stroke={2.5} color="#ED2967" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <h3 className="font-archivo text-[14.5px] font-bold leading-[23.2px] text-[#101418] mb-[4px]">Email Us</h3>
          <p className="font-lora text-[13px] font-normal leading-[20.8px] text-[#5C6570] m-0 truncate w-full">
            contact@shreshthaconsultants.com
          </p>
        </div>
      </div>

    </div>
  </section>
);

const ConnectSection = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'partner'>('general');

  return (
    <section className="px-[4%] pb-[120px] flex flex-col items-center">
      
      {/* Toggle Box */}
      <div className="font-lora text-[16px] font-normal leading-[25.6px] text-[#101418] bg-white p-[8px] rounded-[16px] md:rounded-full border border-[#eee] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex items-center mb-[48px] w-full max-w-[500px] mx-auto">
        <button 
          onClick={() => setActiveTab('general')}
          className={`font-archivo text-[13.5px] font-semibold leading-[21.6px] flex-1 py-[16px] rounded-[12px] md:rounded-full transition-colors ${activeTab === 'general' ? 'text-white bg-[#ED2967]' : 'text-[#5C6570] bg-transparent hover:bg-gray-50'}`}
        >
          General Inquiry
        </button>
        <button 
          onClick={() => setActiveTab('partner')}
          className={`font-archivo text-[13.5px] font-semibold leading-[21.6px] flex-1 py-[16px] rounded-[12px] md:rounded-full transition-colors ${activeTab === 'partner' ? 'text-white bg-[#ED2967]' : 'text-[#5C6570] bg-transparent hover:bg-gray-50'}`}
        >
          Partner With Us
        </button>
      </div>

      {activeTab === 'general' ? (
        <>
          {/* Title & Para */}
          <div className="text-center mb-[64px]">
      <h2 className="font-archivo text-[32px] font-bold leading-[33.28px] tracking-[-0.96px] text-[#101418] mb-[16px]">
        Let's Connect
      </h2>
      <p className="font-lora text-[14.5px] font-normal leading-[23.2px] text-[#5C6570] max-w-[420px] mx-auto m-0">
        We'd love to hear from you. Tell us about your project and the Shreshtha team will get in touch.
      </p>
    </div>

    {/* Form Container */}
    <div className="w-full max-w-[800px] bg-white rounded-[24px] p-[40px] md:p-[48px] lg:p-[56px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-[#eee]">
      <form className="flex flex-col gap-[32px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {/* Name */}
          <div className="flex flex-col gap-[12px]">
            <label className="font-archivo text-[11px] font-semibold leading-[11px] tracking-[1.1px] uppercase text-[#5C6570]">Name</label>
            <input
              type="text" placeholder="Your name" required
              className="font-inter text-[14.5px] font-normal leading-[21.75px] text-[#101418] placeholder:text-[#999] w-full bg-[#F7F6F2] border border-transparent rounded-[8px] px-[20px] py-[16px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-[12px]">
            <label className="font-archivo text-[11px] font-semibold leading-[11px] tracking-[1.1px] uppercase text-[#5C6570]">Email</label>
            <input
              type="email" placeholder="you@email.com" required
              className="font-inter text-[14.5px] font-normal leading-[21.75px] text-[#101418] placeholder:text-[#999] w-full bg-[#F7F6F2] border border-transparent rounded-[8px] px-[20px] py-[16px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-[12px]">
          <label className="font-archivo text-[11px] font-semibold leading-[11px] tracking-[1.1px] uppercase text-[#5C6570]">Message</label>
          <textarea
            rows={4} placeholder="Tell us about your project" required
            className="font-inter text-[14.5px] font-normal leading-[21.75px] text-[#101418] placeholder:text-[#999] w-full bg-[#F7F6F2] border border-transparent rounded-[8px] px-[20px] py-[16px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {/* Project Size */}
          <div className="flex flex-col gap-[12px]">
            <label className="font-archivo text-[11px] font-semibold leading-[11px] tracking-[1.1px] uppercase text-[#5C6570]">Project Size (In Sq. Ft.)</label>
            <input
              type="text" placeholder="e.g. 20,000"
              className="font-inter text-[14.5px] font-normal leading-[21.75px] text-[#101418] placeholder:text-[#999] w-full bg-[#F7F6F2] border border-transparent rounded-[8px] px-[20px] py-[16px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
            />
          </div>

          {/* Project Location */}
          <div className="flex flex-col gap-[12px]">
            <label className="font-archivo text-[11px] font-semibold leading-[11px] tracking-[1.1px] uppercase text-[#5C6570]">Project Location</label>
            <input
              type="text" placeholder="City, State"
              className="font-inter text-[14.5px] font-normal leading-[21.75px] text-[#101418] placeholder:text-[#999] w-full bg-[#F7F6F2] border border-transparent rounded-[8px] px-[20px] py-[16px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
            />
          </div>
        </div>

        {/* Type of Project */}
        <div className="flex flex-col gap-[12px]">
          <label className="font-archivo text-[11px] font-semibold leading-[11px] tracking-[1.1px] uppercase text-[#5C6570]">Type of Project</label>
          <div className="relative">
            <select
              className="font-inter text-[14.5px] font-normal leading-[21.75px] text-[#101418] w-full bg-[#F7F6F2] border border-transparent rounded-[8px] px-[20px] py-[16px] appearance-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all cursor-pointer"
              defaultValue=""
            >
              <option value="">Select project type</option>
              <option value="hospital">Hospital</option>
              <option value="residential">Residential</option>
              <option value="industrial">Industrial</option>
              <option value="hotel">Hotel</option>
              <option value="restaurant">Restaurant</option>
              <option value="office">Office</option>
              <option value="institutional">Institutional</option>
              <option value="infrastructure">Infrastructure</option>
            </select>
            <div className="absolute inset-y-0 right-[20px] flex items-center pointer-events-none">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="#101418" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 1.5L6 6.5L11 1.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="font-archivo mt-[8px] bg-[#111] text-white text-[14px] font-semibold leading-[21px] tracking-normal py-[20px] rounded-full hover:bg-[#172554] transition-colors flex items-center justify-center gap-[8px] w-full"
        >
          Send Message
          <span>→</span>
        </button>

      </form>
      </div>
      </>
      ) : (
      <>
        <div className="text-center mb-[64px]">
          <h2 className="font-archivo text-[32px] font-bold leading-[33.28px] tracking-[-0.96px] text-[#101418] mb-[16px]">
            Interested in Partnering?
          </h2>
          <p className="font-lora text-[14.5px] font-normal leading-[23.2px] text-[#5C6570] max-w-[540px] mx-auto m-0">
            Share your details and tell us about your products or services. Our team will get in touch if there's a suitable opportunity.
          </p>
        </div>

        <div className="w-full max-w-[800px] bg-white rounded-[24px] p-[40px] md:p-[48px] lg:p-[56px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-[#eee]">
          <form className="flex flex-col gap-[32px]">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              <div className="flex flex-col gap-[12px]">
                <label className="font-archivo text-[11px] font-semibold leading-[11px] tracking-[1.1px] uppercase text-[#5C6570]">Company Name</label>
                <input
                  type="text" placeholder="Company name" required
                  className="font-inter text-[14.5px] font-normal leading-[21.75px] text-[#101418] placeholder:text-[#999] w-full bg-[#F7F6F2] border border-transparent rounded-[8px] px-[20px] py-[16px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                />
              </div>
              <div className="flex flex-col gap-[12px]">
                <label className="font-archivo text-[11px] font-semibold leading-[11px] tracking-[1.1px] uppercase text-[#5C6570]">Contact Person Name</label>
                <input
                  type="text" placeholder="Your name" required
                  className="font-inter text-[14.5px] font-normal leading-[21.75px] text-[#101418] placeholder:text-[#999] w-full bg-[#F7F6F2] border border-transparent rounded-[8px] px-[20px] py-[16px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              <div className="flex flex-col gap-[12px]">
                <label className="font-archivo text-[11px] font-semibold leading-[11px] tracking-[1.1px] uppercase text-[#5C6570]">Phone Number</label>
                <input
                  type="tel" placeholder="+91" required
                  className="font-inter text-[14.5px] font-normal leading-[21.75px] text-[#101418] placeholder:text-[#999] w-full bg-[#F7F6F2] border border-transparent rounded-[8px] px-[20px] py-[16px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                />
              </div>
              <div className="flex flex-col gap-[12px]">
                <label className="font-archivo text-[11px] font-semibold leading-[11px] tracking-[1.1px] uppercase text-[#5C6570]">Product / Service</label>
                <input
                  type="text" placeholder="What do you offer?" required
                  className="font-inter text-[14.5px] font-normal leading-[21.75px] text-[#101418] placeholder:text-[#999] w-full bg-[#F7F6F2] border border-transparent rounded-[8px] px-[20px] py-[16px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[12px]">
              <label className="font-archivo text-[11px] font-semibold leading-[11px] tracking-[1.1px] uppercase text-[#5C6570]">Description</label>
              <textarea
                rows={4} placeholder="Tell us more" required
                className="font-inter text-[14.5px] font-normal leading-[21.75px] text-[#101418] placeholder:text-[#999] w-full bg-[#F7F6F2] border border-transparent rounded-[8px] px-[20px] py-[16px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none"
              />
            </div>

            <div className="flex flex-col gap-[12px]">
              <label className="font-archivo text-[11px] font-semibold leading-[11px] tracking-[1.1px] uppercase text-[#5C6570]">Upload Company Profile / Brochure</label>
              <div className="font-inter text-[14.5px] font-normal leading-[21.75px] tracking-normal text-black w-full">
                <input
                  type="file" accept=".pdf,.doc,.docx"
                  className="w-full text-[#5C6570] file:mr-[16px] file:py-[8px] file:px-[16px] file:rounded-[6px] file:border file:border-gray-200 file:text-[13px] file:font-semibold file:bg-white file:text-black hover:file:bg-gray-50 cursor-pointer"
                />
              </div>
            </div>

            <button
              type="submit"
              className="font-archivo mt-[8px] bg-[#111] text-white text-[14px] font-semibold leading-[21px] tracking-normal py-[20px] rounded-full hover:bg-[#172554] transition-colors flex items-center justify-center gap-[8px] w-full"
            >
              Submit
              <span>→</span>
            </button>
          </form>
        </div>
      </>
      )}
    </section>
  );
};

const MeetUsSection = () => (
  <section className="font-lora w-full grid grid-cols-1 md:grid-cols-2 text-[16px] font-normal leading-[25.6px] text-white">
    
    {/* Left Side - Content */}
    <div className="bg-[#101418] flex flex-col justify-center px-[8%] py-[80px] md:py-[120px]">
      
      <div className="flex items-center gap-[12px] mb-[16px]">
        <span className="block w-[28px] h-[1.5px] bg-[#ED2967] shrink-0" />
        <span className="font-archivo text-[14.5px] font-semibold leading-[25.375px] tracking-[3.19px] uppercase text-white">
          Meet Us
        </span>
      </div>

      <h2 className="font-archivo text-[40px] font-bold leading-[41.6px] tracking-[-1.2px] text-white mb-[24px]">
        Visit us in Jaipur.
      </h2>

      <p className="font-lora text-[14.5px] font-normal leading-[25.375px] text-white mb-[40px] max-w-[420px]">
        Visit Shreshtha Consultancy to experience smart, AI-driven engineering solutions firsthand.
      </p>

      <button className="font-archivo bg-[#ED2967] text-white text-[14px] font-semibold leading-[22.4px] px-[40px] py-[16px] rounded-full hover:bg-[#172554] transition-colors w-fit flex items-center justify-center gap-[8px]">
        Get Directions
        <span>→</span>
      </button>

    </div>

    {/* Right Side - Map */}
    <div className="w-full h-[400px] md:h-auto min-h-[400px] md:min-h-[500px] relative">
      <div className="absolute top-[10px] left-[10px] z-10 bg-white rounded-[2px] shadow-[0_1px_4px_rgba(0,0,0,0.3)] px-[12px] py-[8px]">
        <a href="https://maps.google.com/?q=D-27,+Near+Pillar+No.+107,+New+Sanganer+Road,+Shyam+Nagar,+Jaipur" target="_blank" rel="noreferrer" className="text-[#1a73e8] text-[13px] font-medium font-inter flex items-center gap-[6px] hover:underline">
          Open in Maps
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
      <iframe
        src="https://maps.google.com/maps?q=D-27,+Near+Pillar+No.+107,+New+Sanganer+Road,+Shyam+Nagar,+Jaipur&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
);

export default function ContactPage() {
  return (
    <div className="font-lora min-h-screen bg-[#F7F6F2] text-[16px] font-normal leading-[25.6px] tracking-normal text-[#101418]">
      <HeroSection />
      <CardsSection />
      <ConnectSection />
      <MeetUsSection />
    </div>
  );
}
