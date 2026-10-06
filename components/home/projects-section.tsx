import Image from "next/image";
import Link from "next/link";
import { Maximize2 } from "lucide-react";
import { Archivo } from "next/font/google";
import { Container } from "@/components/common/container";

const displayFont = Archivo({ subsets: ["latin"] });

const projects = [
  {
    title: "Hotel Rambagh Palace",
    meta: "Jaipur · 100 Rooms · Taj Group",
    src: "/Projects/rambagh.png",
    href: "/projects",
  },
  {
    title: "ITC Jawai",
    meta: "Jaipur · 125,000 sq.ft",
    src: "/Projects/ITC jawai.png",
    href: "/projects",
  },
  {
    title: "Nokha Library",
    meta: "Rajasthan · 25,000 sq.ft",
    src: "/Projects/Nokha.png",
    href: "/projects",
  },
  {
    title: "Goyal Residence",
    meta: "Jaipur · 20,000 sq.ft",
    src: "/Projects/GoyalResidence.png",
    href: "/projects",
  },
  {
    title: "Savio Factory",
    meta: "Jaipur · 30,000 sq.ft",
    src: "/Projects/SavioFactory.png",
    href: "/projects",
  },
  {
    title: "World Trade Park",
    meta: "Jaipur",
    src: "/Projects/WorldTradePark.png",
    href: "/projects",
  },
];

export function ProjectsSection() {
  return (
    <section className="pb-[120px] max-[760px]:pb-20">
      <Container>
        <div className="mb-14 flex items-end justify-between gap-10 max-[760px]:block">
          <div>
            <Kicker>Portfolio</Kicker>
            <h2 className={`${displayFont.className} mt-[22px] text-[clamp(32px,3.4vw,50px)] font-bold leading-[1.04] tracking-[-0.03em]`}>
              Some of our projects
            </h2>
          </div>
          <p className="max-w-[420px] text-base leading-7 text-[#5c6570] max-[760px]:mt-[18px]">
            We have successfully delivered prestigious projects that showcase
            our versatile engineering and design expertise.
          </p>
        </div>

        <div className="mb-[22px] grid grid-cols-2 gap-[22px] max-[1080px]:grid-cols-2 max-[760px]:grid-cols-1">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-[22px] max-[1080px]:grid-cols-2 max-[760px]:grid-cols-1">
          {projects.slice(2).map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({
  title,
  meta,
  src,
  href,
}: {
  title: string;
  meta: string;
  src: string;
  href: string;
}) {
  return (
    <Link href={href} className="group relative block overflow-hidden rounded-[18px] bg-[#101418]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover opacity-[0.96] transition duration-1000 ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 760px) 100vw, 50vw"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(10_12_14_/_0.82),rgb(10_12_14_/_0.06)_55%)]" />
      <div className="absolute inset-x-[26px] bottom-[22px] flex items-end justify-between gap-3.5 text-white">
        <div>
          <h3 className={`${displayFont.className} mb-1 text-[22px] font-bold leading-[1.08] tracking-[-0.03em]`}>
            {title}
          </h3>
          <span className="text-[12.5px] uppercase tracking-[0.06em] text-white/70">
            {meta}
          </span>
        </div>
        <span className="grid size-11 flex-none place-items-center rounded-full bg-white/15 backdrop-blur-md transition group-hover:bg-[#ed2967]">
          <Maximize2 className="size-[17px] stroke-2" />
        </span>
      </div>
    </Link>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${displayFont.className} flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-[#5c6570] before:h-0.5 before:w-[26px] before:bg-[#ed2967]`}>
      {children}
    </div>
  );
}
