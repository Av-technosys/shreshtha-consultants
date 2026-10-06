import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/container";

const services = [
  { label: "Electrical", href: "/services/electrical" },
  { label: "Plumbing", href: "/services/plumbing" },
  { label: "Fire Fighting", href: "/services/fire-fighting" },
  { label: "Safety & Security", href: "/services/safety-and-security" },
  { label: "HVAC", href: "/services/hvac" },
];

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Career", href: "/career" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
  { label: "BIM", href: "/bim" },
];

const socialLinks = [
  { label: "Facebook", href: "#", glyph: "f" },
  { label: "Instagram", href: "#", glyph: "◎" },
  { label: "LinkedIn", href: "#", glyph: "in" },
];

export function Footer() {
  return (
    <footer className="bg-[#111419] py-20 text-neutral-300 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-11 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-16">
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
                  className="transition-colors hover:text-white"
                  href="mailto:contact@shreshthconsultants.com"
                >
                  contact@shreshthconsultants.com
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

          <FooterGroup title="Company">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link className="transition-colors hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterGroup>

          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
              Follow Us
            </h2>
            <div className="mt-7 flex gap-3">
              {socialLinks.map(({ label, href, glyph }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-neutral-700 text-white transition-colors hover:border-white"
                >
                  <span className="text-sm font-semibold leading-none">{glyph}</span>
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
        alt=""
        width={34}
        height={34}
        className="size-[34px] shrink-0"
      />
    </span>
  );
}
