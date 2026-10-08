"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/common/container";

const projects = [
  {
    id: "one8-commune",
    category: "HOSPITALITY",
    title: "One8 Commune",
    details: "Jaipur · 13,000 sq.ft",
    image: "/projects/one8 Commune/one8 Commune.png",
    link: "/projects/one8-commune",
  },
  {
    id: "gt-central",
    category: "COMMERCIAL",
    title: "GT Central",
    details: "Jaipur",
    image: "/projects/gt Central/gt Central.png",
    link: "/projects/gt-central",
  },
  {
    id: "dot-square",
    category: "COMMERCIAL",
    title: "Dot Square",
    details: "Jaipur",
    image: "/projects/dot square/dot square.png",
    link: "/projects/dot-square",
  },
  {
    id: "urban-square",
    category: "COMMERCIAL",
    title: "Urban Square Mall",
    details: "Jaipur",
    image: "/projects/urban square/urban square.png",
    link: "/projects/urban-square",
  },
  {
    id: "gt-landmark",
    category: "COMMERCIAL",
    title: "GT Landmark",
    details: "Jaipur",
    image: "/projects/gt Landmark/gt Landmark.png",
    link: "/projects/gt-landmark",
  },
  {
    id: "rajasthan-hospital",
    category: "HEALTHCARE",
    title: "Rajasthan Hospital",
    details: "Jaipur",
    image: "/projects/rajasthan hospital/rajasthan hospital.png",
    link: "/projects/rajasthan-hospital",
  },
  {
    id: "sum-hospital",
    category: "HEALTHCARE",
    title: "SUM Hospital",
    details: "Bhubaneswar",
    image: "/projects/sum hospital/sum hospital.png",
    link: "/projects/sum-hospital",
  },
  {
    id: "jims",
    category: "HEALTHCARE",
    title: "JIMS",
    details: "Greater Noida",
    image: "/projects/jims/jims.png",
    link: "/projects/jims",
  },
  {
    id: "bst",
    category: "HEALTHCARE",
    title: "BST",
    details: "Jaipur",
    image: "/projects/bst/bst.png",
    link: "/projects/bst",
  },
  {
    id: "suryagarh",
    category: "HOSPITALITY",
    title: "Hotel Suryagarh Palace",
    details: "Jaisalmer",
    image: "/projects/hotel suryagarh palace/suryagarh.png",
    link: "/projects/suryagarh",
  },
  {
    id: "rambagh",
    category: "HOSPITALITY",
    title: "Hotel Rambagh Palace",
    details: "Jaipur",
    image: "/projects/hotel rambagh palace/rambagh.png",
    link: "/projects/rambagh",
  },
  {
    id: "umaid-bhawan",
    category: "HOSPITALITY",
    title: "Umaid Bhawan Palace",
    details: "Jodhpur",
    image: "/projects/umaid bhawan palace/umaid bhawan.png",
    link: "/projects/umaid-bhawan",
  },
  {
    id: "anantara",
    category: "HOSPITALITY",
    title: "Anantara Jewel Bagh",
    details: "Jaipur",
    image: "/projects/anantara jewel bagh/anantara jewels.png",
    link: "/projects/anantara",
  },
  {
    id: "savio",
    category: "INDUSTRIAL",
    title: "Savio Factory",
    details: "Jaipur · 30,000 sq.ft",
    image: "/projects/savio factory/Savio factory.png",
    link: "/projects/savio",
  },
  {
    id: "gurukripa",
    category: "INDUSTRIAL",
    title: "Gurukripa Factory",
    details: "Jaipur",
    image: "/projects/gurukripa factory/gurukripa.png",
    link: "/projects/gurukripa",
  },
  {
    id: "salasar",
    category: "INDUSTRIAL",
    title: "Salasar Balaji Creation",
    details: "Jaipur",
    image: "/Projects/salasar balaji creation/salasar balaji creation.png",
    link: "/projects/salasar",
  },
  {
    id: "jaswant",
    category: "INSTITUTIONAL",
    title: "Jaswant Gargh School",
    details: "Rajasthan",
    image: "/Projects/jaswant gargh school/jaswant gargh school.png",
    link: "/projects/jaswant",
  },
  {
    id: "gsis",
    category: "INSTITUTIONAL",
    title: "GSIS School",
    details: "Jaipur",
    image: "/Projects/gsis school/gsis school.png",
    link: "/projects/gsis",
  },
  {
    id: "dwps",
    category: "INSTITUTIONAL",
    title: "DWPS",
    details: "Delhi",
    image: "/Projects/dwps/dwps.png",
    link: "/projects/dwps",
  },
  {
    id: "nokha",
    category: "INSTITUTIONAL",
    title: "Nokha Library",
    details: "Jaipur · 25,000 sq.ft",
    image: "/Projects/nokha library/nokha library.png",
    link: "/projects/nokha",
  },
  {
    id: "narsi-villa",
    category: "RESIDENTIAL",
    title: "Narsi Villa",
    details: "Jaipur",
    image: "/Projects/narsi villa/narsi villa.png",
    link: "/projects/narsi-villa",
  },
  {
    id: "kgk-amulya",
    category: "RESIDENTIAL",
    title: "KGK Amulya",
    details: "Jaipur",
    image: "/Projects/kgk amulya/kgk amulya.png",
    link: "/projects/kgk-amulya",
  },
  {
    id: "acl-green",
    category: "RESIDENTIAL",
    title: "ACL Green",
    details: "Jaipur",
    image: "/Projects/ACL green/ACL green.png",
    link: "/projects/acl-green",
  },
  {
    id: "goyal-house",
    category: "RESIDENTIAL",
    title: "Goyal House",
    details: "Jaipur · 20,000 sq.ft",
    image: "/Projects/goyal house/goyal house.png",
    link: "/projects/goyal-house",
  },
];

let cachedVisibleCount = 9;

function ProjectsGridContent() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "All Projects";

  const [visibleCount, setVisibleCount] = useState(cachedVisibleCount);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const prevCategoryRef = React.useRef(activeCategory);

  useEffect(() => {
    if (isMounted && prevCategoryRef.current !== activeCategory) {
      setVisibleCount(9);
      cachedVisibleCount = 9;
      prevCategoryRef.current = activeCategory;
    }
  }, [activeCategory, isMounted]);

  useEffect(() => {
    if (isMounted) {
      cachedVisibleCount = visibleCount;
    }
  }, [visibleCount, isMounted]);

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((p) => {
          if (activeCategory === "Industrial / Infrastructure") {
            return p.category === "INDUSTRIAL";
          }
          return p.category.toUpperCase() === activeCategory.toUpperCase();
        });

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section className="w-full bg-[#F7F6F2] pb-[80px] lg:pb-[120px] pt-[48px] lg:pt-[80px] font-lora text-[16px] font-normal leading-[25.6px] text-[#101418]">
      <Container className="max-lg:px-[4%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px]">
          {visibleProjects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              className="group block relative w-full aspect-[1.3] md:aspect-[1.2] lg:h-[320px] lg:aspect-auto rounded-[16px] overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#101418]/90 via-[#101418]/20 to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-[24px] flex flex-col items-start z-10">
                <span className="mb-[4px] uppercase font-archivo text-[11px] md:text-[12px] font-semibold leading-[1.6] tracking-[1.92px] text-[#ED2967]">
                  {project.category}
                </span>
                <h3 className="mb-[4px] font-archivo text-[20px] md:text-[23px] font-bold leading-[1.15] tracking-[-0.69px] text-[#FFFFFF]">
                  {project.title}
                </h3>
                <p className="font-lora text-[12px] md:text-[13.5px] font-normal leading-[1.6] text-white/65">
                  {project.details}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {visibleCount < filteredProjects.length && (
          <div className="mt-[48px] md:mt-[64px] flex justify-center w-full">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="border border-[#101418] rounded-full px-[24px] md:px-[32px] py-[10px] md:py-[12px] transition-colors duration-300 hover:bg-[#101418] hover:text-[#FFFFFF] text-[#101418] flex items-center justify-center gap-2 font-archivo text-[13px] md:text-[14px] font-semibold leading-[1.5]"
            >
              Show More Projects &rarr;
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}

export function ProjectsGrid() {
  return (
    <Suspense fallback={null}>
      <ProjectsGridContent />
    </Suspense>
  );
}
