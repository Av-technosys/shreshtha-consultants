import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/common/container";
import { TimelineMarker } from "@/components/about/timeline-marker";
import { TimelineProgress } from "@/components/about/timeline-progress";


type Panel = {
  number: string;
  eyebrow: string;
  title: string;
  text: ReactNode;
  text2?: string;
};

type Person = [name: string, role: string, image: string];
type Milestone = [year: string, text: string, image: string];

const panels: Panel[] = [
  {
    number: "01",
    eyebrow: "What Drives Us",
    title: "Our Mission",
    text: "Revolutionize building design through AI-driven innovation and highly optimized engineering solutions. We aim to reduce costs, save time, and enhance project performance for every client.",
  },
  {
    number: "02",
    eyebrow: "Where We're Headed",
    title: "Our Vision",
    text: "Lead the industry in technology-enabled engineering consultancy with unmatched precision and efficiency. We aspire to set new standards in coordinated design for projects across India and beyond.",
  },
  {
    number: "03",
    eyebrow: "Our Name",
    title: "Shreshtha?",
    text: "Shreshtha represents itself as a heartbeat of a building, bringing life into structures. The dark hut shape represents a building, while the heartbeat lines represent the precision engineering that keeps it running.",
  },
  {
    number: "04",
    eyebrow: "How We Began",
    title: "Our Story",
    text: (
      <>
        Founded by <strong className="font-semibold text-inherit">Mr. Sudhir Mathur</strong> , Shreshtha Consultants was created to merge decades of engineering expertise with cutting-edge AI technology.
      </>
    ),
    text2: "Today, our 50+ member team delivers fast, detailed, and intelligent designs that empower clients to build smarter.",
  },
];

const milestones: Milestone[] = [
  ["1997", "A journey marked by innovation, impact, and over two decades of engineering excellence.", "/About/milestone1.png"],
  ["2000", "Designed and executed air conditioning systems for the iconic Rambagh Palace.", "/About/milestone2.png"],
  ["2006", "Delivered MEP design for World Trade Park, one of India's largest malls.", "/About/milestone3.png"],
  ["2007", "Led the renovation of Umaid Bhawan Palace, preserving heritage with modern systems.", "/About/milestone4.png"],
  ["2008", "A journey marked by innovation, impact, and over two decades of engineering excellence.", "/About/milestone5.png"],
  ["2013", "Expanded operations to metro cities across India.", "/About/milestone6.png"],
  ["2020", "Launched the first-ever AI tool for MEP design in India.", "/About/milestone7.png"],
  ["2021", "Set up full-fledged offices in Mumbai and Delhi.", "/About/milestone8.png"],
  ["2023", "Collaborated with Sanjay Puri Architects on the Narsi Villa project.", "/About/milestone9.png"],
  ["2025", "Achieved a major milestone: 50+ team members strong.", "/About/milestone10.png"],
];

const founders: Person[] = [
  ["Sudhir Mathur", "Founder", "/About/founder1.png"],
  ["Shreshtha Mathur", "Executive Director", "/About/founder2.png"],
  ["Rushil Mathur", "Co-Founder", "/About/founder3.png"],
  ["Dharmendra Sharma", "Director & Head of HVAC", "/About/founder4.png"],
];

const team: Person[] = [
  ["Rajesh Prajapat", "Sr. Design Engineer", "/About/team1.png"],
  ["Rohit Saini", "Design Engineer", "/About/team2.png"],
  ["Waseem Noor", "Sr. Design Engineer", "/About/team3.png"],
  ["Devendar Singh", "Design Engineer", "/About/team4.png"],
  ["Vishal Kumawat", "Design Engineer", "/About/team5.png"],
  ["Jitendar K. Sharma", "Design Engineer", "/About/team6.png"],
  ["Shivpal Singh", "Design Engineer", "/About/team7.png"],
  ["Rajesh Pawar", "Design Engineer", "/About/team8.png"],
];

const associations = [
  "/About/association1.png",
  "/About/association2.png",
  "/About/association3.png",
  "/About/association4.png",
];

export default function AboutPage() {
  return (
    <main className="font-inter overflow-hidden bg-[#f7f6f2] text-[#101418]">
      <section className="relative py-16 max-[900px]:py-12">
        <Container className="grid grid-cols-[1.05fr_0.95fr] items-center gap-[70px] px-10 max-[1180px]:gap-12 max-[900px]:grid-cols-1 max-[900px]:px-6 max-[520px]:px-[22px]">
          <div>
            <Kicker>Who We Are</Kicker>
            <h1 className="font-archivo mt-[22px] text-[clamp(38px,4.4vw,62px)] font-bold leading-[1.02] tracking-[-0.04em] max-[520px]:text-[38px]">
              About{" "}
              <em className="relative inline-block not-italic text-[#ed2967] after:absolute after:bottom-[3px] after:left-0 after:h-2 after:w-full after:bg-[#ed2967]/20 after:content-['']">
                Us
              </em>
            </h1>
            <p className="mb-3.5 mt-[22px] max-w-[520px] text-[17.5px] leading-[1.75] text-[#5c6570] max-[520px]:text-base">
              Shreshtha has completed over 1,050 projects worldwide, with our experienced team of mechanical, electrical, and plumbing experts delivering innovative solutions across diverse sectors.
            </p>
            <p className="max-w-[520px] text-[17.5px] leading-[1.75] text-[#5c6570] max-[520px]:text-base">
              With a global reach and local expertise, Shreshtha Consultants provide tailored, efficient MEP designs that optimize building performance and cost-effectiveness. Our two decades of industry experience and commitment to excellence make us a trusted partner in MEP engineering for projects of all scales.
            </p>
          </div>

          <div className="relative max-[900px]:max-w-[620px]">
            <div className="aspect-[4/4.2] overflow-hidden rounded-[18px] max-[900px]:aspect-[4/3.6] max-[520px]:aspect-[4/4.15]">
              <Image
                src="/About/hero.png"
                alt="Shreshtha Consultants About"
                width={860}
                height={904}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-[34px] left-[-30px] flex items-center gap-3 rounded-[14px] border border-[#e3e0d8] bg-white px-[22px] py-4 shadow-[0_22px_44px_rgb(16_20_24_/_0.10)] max-[900px]:left-3.5 max-[520px]:bottom-5 max-[520px]:px-4 max-[520px]:py-3">
              <span className="relative size-3 rounded-full bg-[#ed2967] before:absolute before:inset-0 before:rounded-full before:bg-[#ed2967] before:opacity-40 before:content-[''] before:animate-ping" />
              <span className="text-sm font-semibold text-[#101418]">Since 1997</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-[#e3e0d8]">
        <div className="grid grid-cols-2 max-[900px]:grid-cols-1">
          <PanelBlock panel={panels[0]} />
          <PanelBlock panel={panels[1]} dark />
        </div>
        <div className="grid grid-cols-2 max-[900px]:grid-cols-1">
          <PanelBlock panel={panels[2]} dark lastRow />
          <PanelBlock panel={panels[3]} lastRow />
        </div>
      </section>

      <MilestonesSection />

      <PeopleSection eyebrow="Leadership" title="Founders" text="Leadership shaped by experience. Innovation driven by purpose." people={founders} />
      <PeopleSection eyebrow="Our People" title="Our Team" text="A dedicated team turning expertise into dependable solutions." people={team} compact />

      <section className="pb-[110px] text-center">
        <Container className="px-10 max-[900px]:px-6 max-[520px]:px-[22px]">
          <div className="mx-auto flex w-fit flex-col items-center">
            <Kicker>Partnerships</Kicker>
            <h2 className="font-archivo mt-[18px] text-[clamp(28px,3vw,40px)] font-bold leading-[1.08] tracking-[-0.035em]">
              Our Associations
            </h2>
          </div>
          <div className="mt-9 flex flex-wrap justify-center gap-[18px]">
            {associations.map((image, index) => (
              <div
                key={image}
                className="flex h-[150px] w-[250px] max-w-full items-center justify-center overflow-hidden rounded-xl border border-[#e3e0d8] bg-white p-2 transition duration-300 hover:border-[#101418] max-[520px]:h-[128px] max-[520px]:w-full"
              >
                <Image
                  src={image}
                  alt={`Association ${index + 1}`}
                  width={656}
                  height={318}
                  className="max-h-full max-w-full object-contain opacity-75 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

function PanelBlock({ panel, dark = false, lastRow = false }: { panel: Panel; dark?: boolean; lastRow?: boolean }) {
  return (
    <article
      className={[
        "relative overflow-hidden px-[60px] py-[84px] max-[1180px]:px-10 max-[900px]:px-6 max-[900px]:py-14 max-[520px]:px-[22px]",
        lastRow ? "" : "border-b border-[#e3e0d8]",
        dark ? "border-l-[3px] border-l-[#ed2967] bg-[#111419] text-white max-[900px]:border-l-0 max-[900px]:border-t-[3px] max-[900px]:border-t-[#ed2967]" : "bg-[#f7f6f2]",
      ].join(" ")}
    >
      <span className={`font-archivo absolute right-[34px] top-[22px] text-[74px] font-extrabold leading-none tracking-[-0.03em] ${dark ? "text-white/[0.07]" : "text-[#101418]/[0.07]"}`}>
        {panel.number}
      </span>
      <Kicker dark={dark}>{panel.eyebrow}</Kicker>
      <h3 className="font-archivo my-4 text-[30px] font-bold leading-[1.1] tracking-[-0.03em] max-[520px]:text-[26px]">{panel.title}</h3>
      <p className={`mb-2.5 max-w-[440px] text-[15.5px] leading-[1.8] ${dark ? "text-white/65" : "text-[#5c6570]"}`}>{panel.text}</p>
      {panel.text2 ? <p className={`mb-2.5 max-w-[440px] text-[15.5px] leading-[1.8] ${dark ? "text-white/65" : "text-[#5c6570]"}`}>{panel.text2}</p> : null}
    </article>
  );
}

function MilestonesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f6f2] py-20 text-black max-[900px]:py-16">
      <Container className="px-10 max-[900px]:px-6 max-[520px]:px-[22px]">
        <div className="mx-auto text-center">
          <div className="mx-auto flex w-fit flex-col items-center">
            <Kicker>Our Journey</Kicker>
          </div>
          <h2 className="font-archivo mb-3 mt-[22px] text-[clamp(30px,3.2vw,46px)] font-semibold leading-[1.1] tracking-[-0.035em]">
            Milestones
          </h2>
          <p className="mx-auto mb-[50px] max-w-[520px] text-center text-base leading-[1.75] text-[#5c6570]">
            A journey marked by innovation, impact, and over two decades of engineering excellence.
          </p>
        </div>

        <TimelineProgress>
          {milestones.map(([year, text, image], index) => (
            <TimelineItem key={`${year}-${index}`} year={year} text={text} image={image} flip={index % 2 === 1} />
          ))}
        </TimelineProgress>
      </Container>
    </section>
  );
}

function TimelineItem({ year, text, image, flip }: { year: string; text: string; image: string; flip: boolean }) {
  return (
    <article className={`group relative mb-5 flex items-center justify-between max-[900px]:block max-[900px]:pl-[62px] ${flip ? "flex-row-reverse" : ""}`}>
      <TimelineMarker year={year} flip={flip}>
        <MilestoneIcon />
      </TimelineMarker>
      <div className="w-[calc(50%-38px)] rounded bg-transparent p-[15px] max-[900px]:w-full max-[520px]:pr-0">
        <div className="mb-2.5 aspect-[2560/1706] w-full overflow-hidden">
          <Image src={image} alt={`${year} milestone`} width={640} height={427} className="h-full w-full object-cover" />
        </div>
        <p className="text-sm leading-[23px] text-[#5c6570]">{text}</p>
      </div>
    </article>
  );
}

function PeopleSection({ eyebrow, title, text, people, compact = false }: { eyebrow: string; title: string; text: string; people: Person[]; compact?: boolean }) {
  return (
    <section className={`${compact ? "pb-[100px] pt-0 max-[900px]:pb-16" : "py-[100px] max-[900px]:py-16"}`}>
      <Container className="px-10 max-[900px]:px-6 max-[520px]:px-[22px]">
        <div className="mb-14 max-w-[720px] max-[520px]:mb-9">
          <Kicker>{eyebrow}</Kicker>
          <h2 className="font-archivo mb-3.5 mt-5 text-[clamp(30px,3.2vw,46px)] font-bold leading-[1.08] tracking-[-0.035em]">{title}</h2>
          <p className="text-base leading-[1.75] text-[#5c6570]">{text}</p>
        </div>
        <div className="grid grid-cols-4 gap-[18px] max-[1080px]:grid-cols-2 max-[520px]:grid-cols-1">
          {people.map(([name, role, image]) => (
            <article key={name} className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#101418]">
              <Image src={image} alt={name} fill className="object-cover opacity-90 transition duration-500 ease-out group-hover:scale-[1.06]" sizes="(max-width: 1080px) 50vw, 25vw" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgb(10_12_14_/_0.88)] to-transparent p-[18px] text-white">
                <b className="font-archivo block text-[15px] font-bold leading-snug">{name}</b>
                <span className="text-xs leading-snug text-white/70">{role}</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Kicker({ children, className = "", dark = false }: { children: ReactNode; className?: string; dark?: boolean }) {
  return (
    <div
      className={[
        `font-archivo flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em]`,
        dark ? "text-white/55" : "text-[#5c6570]",
        "before:h-0.5 before:w-[26px] before:bg-[#ed2967]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

function MilestoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <path d="M3 10h18" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
    </svg>
  );
}
