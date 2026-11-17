import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/common/container";
import { ResendForm } from "@/components/forms/resend-form";

export const metadata: Metadata = {
  title: "AI-Powered MEP Design Consultants | Shreshtha Consultants",
  description:
    "Shreshtha Consultants combines MEP engineering with in-house AI tools to enable faster design reviews, earlier clash detection, and clearer construction drawings.",
  alternates: { canonical: "https://www.shreshthaconsultants.com/ai-mep" },
};

const caseSteps = [
  {
    number: "01 / THE CHALLENGE",
    title: "Dense MEP coordination",
    description:
      "Healthcare projects bring HVAC, electrical, fire safety, and other services into the same limited spaces.",
  },
  {
    number: "02 / OUR PROCESS",
    title: "Model, detect, resolve",
    description:
      "Our engineers use coordinated models and in-house tools to review service routes and identify conflicts early.",
  },
  {
    number: "03 / THE GOAL",
    title: "Clearer construction drawings",
    description:
      "The aim is a more coordinated handover that helps site teams plan and install with confidence.",
  },
];

const faqs = [
  {
    question: "What does AI-powered MEP design mean?",
    answer:
      "It means our engineers use in-house AI tools alongside their expertise to review coordination issues earlier, test routing options, and produce clearer drawings. The engineering decisions and sign-off remain with our team.",
  },
  {
    question: "Does AI replace MEP engineers?",
    answer:
      "No. AI handles repetitive checking and option generation. Experienced engineers review every result, make the design decisions and take responsibility for the final drawings.",
  },
  {
    question: "How does this benefit my project?",
    answer:
      "Fewer on-site coordination issues, faster design reviews, more routing options, and clearer drawings for contractors.",
  },
  {
    question: "What types of projects is this suited to?",
    answer:
      "Any project, but it adds the most value on complex, dense buildings such as hospitals, high-rises, IT campuses and industrial facilities.",
  },
  {
    question: "Which cities do you serve?",
    answer:
      "Jaipur, Delhi NCR, Mumbai, Bangalore, Ahmedabad, Hyderabad, Chennai and projects across India.",
  },
  {
    question: "Is my project data safe?",
    answer:
      "Yes. We treat your project information as confidential. Drawings, models and project details are used only to deliver your project, and access is limited to the team working on it.",
  },
];

const teamMembers = [
  { name: "Rajesh Prajapat", role: "Sr. Design Engineer", image: "/About/team1.png" },
  { name: "Rohit Saini", role: "Design Engineer", image: "/About/team2.png" },
  { name: "Waseem Noor", role: "Sr. Design Engineer", image: "/About/team3.png" },
  { name: "Devendar Singh", role: "Design Engineer", image: "/About/team4.png" },
];

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-2.5 font-archivo text-xs font-semibold uppercase tracking-[0.2em] before:h-0.5 before:w-[26px] before:bg-[#ed2967] ${light ? "text-white/60" : "text-[#5c6570]"}`}>
      {children}
    </p>
  );
}

function ProposalButton({ children, href = "#proposal" }: { children: React.ReactNode; href?: string }) {
  return (
    <Link href={href} className="inline-flex items-center gap-3 rounded-full bg-[#101418] px-7 py-3.5 font-archivo text-sm font-semibold text-white transition-colors hover:bg-[#ed2967]">
      {children}<ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}

function CoordinationDiagram({ ai }: { ai: boolean }) {
  return (
    <svg viewBox="0 0 520 410" role="img" aria-label={ai ? "Illustration of coordinated service routes" : "Illustration of crossing service routes"} className="h-full w-full bg-[#fbfaf7]">
      <defs><pattern id={ai ? "grid-ai" : "grid-manual"} width="52" height="52" patternUnits="userSpaceOnUse"><path d="M 52 0 L 0 0 0 52" fill="none" stroke="#e3e0d8" strokeWidth="1" /></pattern></defs>
      <rect width="520" height="410" fill={`url(#${ai ? "grid-ai" : "grid-manual"})`} />
      {ai ? (
        <g fill="none" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M35 90 H360 V145 H485" stroke="#ed2967" />
          <path d="M35 235 H225 V325 H485" stroke="#142436" />
          <path d="M35 165 V295 H165" stroke="#ed2967" opacity=".65" />
        </g>
      ) : (
        <g fill="none" strokeWidth="5" strokeLinecap="round">
          <path d="M35 80 L485 325" stroke="#c9c5b8" />
          <path d="M35 320 L485 80" stroke="#a9a494" />
          <path d="M35 200 H485" stroke="#c9c5b8" />
          <path d="M285 30 V380" stroke="#a9a494" />
          {["285,200", "150,142", "385,270"].map((point) => {
            const [cx, cy] = point.split(",").map(Number);
            return <circle key={point} cx={cx} cy={cy} r="10" fill="#ed2967" stroke="#fff" strokeWidth="3" />;
          })}
        </g>
      )}
    </svg>
  );
}

const inputClass = "w-full rounded-[10px] border border-[#e3e0d8] bg-[#f7f6f2] px-4 py-3 text-sm text-[#101418] outline-none transition focus:border-[#ed2967] focus:ring-2 focus:ring-[#ed2967]/15";
const labelClass = "mb-2 block font-archivo text-[11px] font-semibold uppercase tracking-[0.1em] text-[#5c6570]";

export default function AIPage() {
  return (
    <div className="overflow-hidden bg-[#f7f6f2] text-[#101418]">
      <section className="px-0 py-20 text-center sm:py-24 lg:py-28">
        <Container className="flex flex-col items-center">
          <Kicker>Next-Gen MEP</Kicker>
          <h1 className="mt-5 max-w-[900px] font-archivo text-[clamp(36px,5.2vw,64px)] font-bold leading-[1.07] tracking-[-0.035em]">
            We’re Next-Generation AI-Powered MEP Consultants
          </h1>
          <p className="mt-6 max-w-[650px] text-base leading-[1.75] text-[#5c6570]">
            Our engineers combine MEP expertise with in-house AI tools to work faster, review coordination issues early, and deliver drawings contractors can build from with confidence.
          </p>
          <div className="mt-7"><ProposalButton>Request Proposal</ProposalButton></div>
        </Container>
      </section>

      <section className="bg-[#101418] py-8 text-white">
        <Container className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5 text-center">
          {[
            ["Faster", "Design reviews"],
            ["Earlier", "Clash identification"],
            ["Clearer", "Construction handover"],
          ].map(([value, label]) => (
            <div key={label}><strong className="block font-archivo text-[26px] text-[#ed2967]">{value}</strong><span className="text-xs uppercase tracking-[0.08em] text-white/60">{label}</span></div>
          ))}
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24" aria-label="AI design process video">
        <Container>
          <div className="mx-auto max-w-[900px] overflow-hidden rounded-[22px] bg-black shadow-[0_30px_70px_rgba(20,36,54,0.18)]">
            <video controls playsInline preload="metadata" className="aspect-video w-full object-contain" src="/Home/AI-Video.mp4">Your browser does not support video playback.</video>
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-2.5">
            {["In-House Tool", "Engineer-Reviewed"].map((tag) => <span key={tag} className="rounded-full border border-[#e3e0d8] bg-white px-5 py-2 font-archivo text-xs font-bold uppercase tracking-[0.08em]">{tag}</span>)}
          </div>
        </Container>
      </section>

      <section className="border-t border-[#e3e0d8] bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="mx-auto max-w-[760px] text-center">
            <span className="inline-block rounded-full border border-[#e3e0d8] bg-[#f7f6f2] px-4 py-1.5 font-archivo text-[11px] font-bold uppercase tracking-[0.1em]">Project Example</span>
            <h2 className="mt-4 font-archivo text-[clamp(30px,3.6vw,44px)] font-bold leading-[1.1] tracking-[-0.03em]">SUM Hospital — same layout, two processes.</h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-[#5c6570]">Healthcare MEP coordination is complex. This diagram illustrates how service routes can be reviewed and resolved with an AI-assisted workflow. It is a process illustration, not a project drawing.</p>
          </div>

          <div className="relative mx-auto mt-12 max-w-[1080px]">
            <div className="grid overflow-hidden rounded-t-[22px] border border-[#e3e0d8] md:grid-cols-2">
              {[false, true].map((ai) => <div key={String(ai)} className="relative aspect-[1.27] min-w-0 overflow-hidden border-b border-[#e3e0d8] last:border-b-0 md:border-b-0 md:first:border-r md:first:border-[#e3e0d8]">
                <span className={`absolute left-4 top-4 z-10 rounded-full px-4 py-2 font-archivo text-[11px] font-bold uppercase tracking-[0.08em] text-white ${ai ? "bg-[#ed2967]" : "bg-[#101418]/80"}`}>{ai ? "AI-Powered" : "Manual"}</span>
                <CoordinationDiagram ai={ai} />
              </div>)}
            </div>
            <span className="absolute left-1/2 top-[calc(50%-54px)] z-10 hidden size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#101418] font-archivo text-sm font-bold text-white shadow-xl md:flex">VS</span>
            <div className="grid overflow-hidden rounded-b-[22px] border-x border-b border-[#e3e0d8] md:grid-cols-2">
              <ul className="space-y-2 bg-[#f7f6f2] p-6 text-[13.5px] leading-6 md:border-r md:border-[#e3e0d8]">
                <li>− Cross-checked by hand, discipline by discipline</li><li>− Potential clashes reviewed through separate drawings</li><li>− More manual review cycles</li>
              </ul>
              <ul className="space-y-2 bg-[#f7f6f2] p-6 text-[13.5px] leading-6 marker:text-[#ed2967]">
                <li>✓ Coordinated review across disciplines</li><li>✓ Conflicts identified earlier in the design process</li><li>✓ Engineers assess and refine routing options</li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-[1080px] gap-px border border-[#e3e0d8] bg-[#e3e0d8] md:grid-cols-3">
            {caseSteps.map((step) => <div key={step.number} className="bg-[#f7f6f2] p-7 sm:p-8"><span className="font-archivo text-[11px] font-bold uppercase tracking-[0.1em] text-[#ed2967]">{step.number}</span><h3 className="mt-3 font-archivo text-[17px] font-bold">{step.title}</h3><p className="mt-2 text-[13.5px] leading-[1.7] text-[#5c6570]">{step.description}</p></div>)}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto mb-9 max-w-[620px] text-center"><div className="flex justify-center"><Kicker>Behind the Drawings</Kicker></div><h2 className="mt-4 font-archivo text-[clamp(26px,2.8vw,34px)] font-bold tracking-[-0.03em]">The engineers who use it every day.</h2></div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="group relative aspect-[1/1.05] overflow-hidden rounded-[14px] bg-[#e9e6dd]">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/30 to-transparent p-4 text-white opacity-100 transition-opacity duration-300 motion-reduce:transition-none sm:p-5 md:opacity-0 md:group-hover:opacity-100">
                  <h3 className="font-archivo text-base font-bold leading-tight sm:text-lg">{member.name}</h3>
                  <p className="mt-1 text-xs leading-snug text-white/85 sm:text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#101418] py-20 text-center text-white sm:py-24">
        <Container><blockquote className="mx-auto max-w-[760px] font-archivo text-[clamp(21px,2.6vw,29px)] font-semibold leading-[1.4]">“Shreshtha offers a unique AI-enabled consultancy for MEP. With AI, optimised MEP designs to save materials, clash-coordinated drawings &amp; multiple routing options are now possible.”</blockquote><p className="mt-6 text-sm text-white/60"><strong className="text-white">Harshad Patil</strong> — Strategy Head, Kolte Patil Developers</p></Container>
      </section>

      <section id="proposal" className="scroll-mt-20 py-20 sm:py-24 lg:py-28">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div><Kicker>Get Started</Kicker><h2 className="mt-5 max-w-[460px] font-archivo text-[clamp(28px,3.4vw,40px)] font-bold leading-[1.1] tracking-[-0.03em]">Elevate your next project with our AI-driven MEP expertise.</h2><p className="mt-5 max-w-[410px] text-sm leading-[1.75] text-[#5c6570]">Tell us about your project and our team will show you how our AI-assisted process can support its design and coordination.</p></div>
          <ResendForm formType="AI Proposal Request" className="rounded-[22px] border border-[#e3e0d8] bg-white p-6 sm:p-10">
            <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
              <div><label className={labelClass} htmlFor="ai-name">Name*</label><input className={inputClass} id="ai-name" name="name" type="text" placeholder="Your name" required /></div>
              <div><label className={labelClass} htmlFor="ai-email">Email*</label><input className={inputClass} id="ai-email" name="email" type="email" placeholder="you@email.com" required /></div>
              <div><label className={labelClass} htmlFor="ai-phone">Phone Number*</label><input className={inputClass} id="ai-phone" name="phone" type="tel" placeholder="+91" required /></div>
              <div><label className={labelClass} htmlFor="ai-size">Project Size (in sq. ft.)</label><input className={inputClass} id="ai-size" name="projectSize" type="text" placeholder="e.g. 20,000" /></div>
              <div><label className={labelClass} htmlFor="ai-location">Project Location</label><input className={inputClass} id="ai-location" name="projectLocation" type="text" placeholder="City, State" /></div>
              <div><label className={labelClass} htmlFor="ai-type">Type of Project</label><select className={inputClass} id="ai-type" name="projectType" defaultValue=""><option value="">Select project type</option>{["Commercial", "Healthcare", "Hospital", "Infrastructure/Industrial", "Institutional", "Landscape", "Residential"].map((type) => <option key={type} value={type}>{type}</option>)}</select></div>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#101418] px-7 py-3.5 font-archivo text-sm font-semibold text-white transition-colors hover:bg-[#ed2967]">Request a Proposal <ArrowRight size={17} aria-hidden="true" /></button>
          </ResendForm>
        </Container>
      </section>
      <section className="border-t border-[#e3e0d8] bg-[#f7f6f2] py-[70px] max-[760px]:py-[40px]">
        <Container className="max-w-[850px]">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-2.5 font-archivo text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] before:h-px before:w-[26px] before:bg-[#ed2967]">
              Got Questions?
            </div>
            <h2 className="font-archivo text-[30px] font-bold leading-[1.1] tracking-[-0.03em] text-[#101418] sm:text-[38px] md:text-[46px]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[20px] border border-[#e3e0d8] bg-white transition-all duration-300 open:shadow-[0_8px_30px_rgb(0_0_0_/_0.04)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-archivo text-[15px] font-bold text-[#101418] outline-none transition-colors hover:text-[#ed2967] focus-visible:ring-2 focus-visible:ring-[#ed2967] group-open:text-[#ed2967] sm:p-6 sm:text-[16px] [&::-webkit-details-marker]:hidden">
                  <span className="leading-snug">{faq.question}</span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#f7f6f2] text-[#101418] transition-all duration-300 group-open:rotate-180 group-open:bg-[#101418] group-open:text-white">
                    <ChevronDown className="size-4" aria-hidden="true" />
                  </span>
                </summary>
                <div className="px-5 pb-6 font-inter text-[14px] leading-[1.75] text-[#5c6570] sm:px-6 sm:text-[14.5px]">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

    </div>
  );
}
