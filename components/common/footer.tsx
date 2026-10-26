"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import { Container } from "@/components/common/container";

const services = [
  { label: "Electrical", href: "/electrical" },
  { label: "Plumbing", href: "/plumbing" },
  { label: "Fire Fighting", href: "/fire-fighting" },
  { label: "Safety & Security", href: "/safety-and-security" },
  { label: "HVAC", href: "/hvac" },
];

const locations = [
  { label: "Bangalore", href: "/location/bangalore" },
  { label: "Chennai", href: "/location/chennai" },
  { label: "Delhi", href: "/location/delhi" },
  { label: "Hyderabad", href: "/location/hyderabad" },
  { label: "Mumbai", href: "/location/mumbai" },
];

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "BIM", href: "/bim" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/shreshthaconsultants", icon: IconBrandFacebook },
  { label: "Instagram", href: "https://www.instagram.com/shreshtha_consultants/", icon: IconBrandInstagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/shreshtha-consultants/", icon: IconBrandLinkedin },
];

export function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-[#111419] py-20 text-neutral-300 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-11 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_0.9fr] lg:gap-10 xl:gap-14">
          <div>
            <LogoMark />

            <address className="mt-7 max-w-80 space-y-3 text-sm leading-7 text-neutral-400 not-italic">
              <p>D - 27, Near Pillar No. 107, New Sanganer Rd., Shyam Nagar, Jaipur</p>
              <p>
                <a className="transition-colors hover:text-white" href="tel:+919799858301">
                  +91-9799858301
                </a>
              </p>
              <p>
                <a
                  className="break-words transition-colors hover:text-white"
                  href="mailto:contact@shreshthaconsultants.com"
                >
                  contact@shreshthaconsultants.com
                </a>
              </p>
            </address>
          </div>

          <FooterGroup title="Services">
            {services.map((service) => (
              <li key={service.label}>
                <Link className="transition-colors hover:text-white" href={service.href}>
                  {service.label}
                </Link>
              </li>
            ))}
          </FooterGroup>

          <FooterGroup title="Locations">
            {locations.map((location) => (
              <li key={location.label}>
                <Link className="transition-colors hover:text-white" href={location.href}>
                  {location.label}
                </Link>
              </li>
            ))}
          </FooterGroup>

          <FooterGroup title="Company">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link className="transition-colors hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterGroup>

          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
              Follow Us
            </h2>
            <div className="mt-7 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-10 place-items-center rounded-full border border-neutral-700 text-white transition-colors hover:border-white hover:text-white"
                >
                  <Icon size={18} stroke={1.75} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 sm:mt-20">
          <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.16em] text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
            <p>©2026 Shreshtha · Copyright all rights reserved</p>
            <p className="normal-case tracking-normal">Heartbeat of Building</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
        {title}
      </h2>
      <ul className="mt-7 space-y-4 text-sm text-neutral-300 sm:space-y-5">{children}</ul>
    </div>
  );
}

function LogoMark() {
  return (
    <span className="grid size-12 place-items-center rounded-lg bg-white">
      <Image
        src="/Common/logo.png"
        alt="Shreshtha Consultants Logo"
        width={34}
        height={34}
        className="size-[34px] shrink-0"
      />
    </span>
  );
}
