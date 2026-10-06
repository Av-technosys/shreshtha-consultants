"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/common/container";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", marker: "▾", hasDropdown: true },
  { label: "Projects", href: "/projects" },
  { label: "BIM", href: "/bim" },
  { label: "Careers", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];

const serviceItems = [
  { label: "Electrical", href: "/services#electrical" },
  { label: "Plumbing", href: "/services#plumbing" },
  { label: "Fire Fighting", href: "/services#fire-fighting" },
  { label: "Safety and Security", href: "/services#safety-security" },
  { label: "HVAC", href: "/services#hvac" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-[#F7F7F3]/95 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-8 py-3 md:min-h-18">
        <Link
          href="/"
          aria-label="Heartbeat of Building"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <LogoMark />
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-500 sm:text-[11px]">
            Heartbeat of Building
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-neutral-950 xl:gap-9 lg:flex">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === "/services" && pathname.startsWith("/services"));

            if (item.hasDropdown) {
              return (
                <div key={item.href} className="group relative -my-6 py-6">
                  <Link
                    href={item.href}
                    className={[
                      "transition-colors hover:text-[#ff1f7a]",
                      isActive
                        ? "text-[#ff1f7a] underline underline-offset-8"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {item.label}
                    <span className="ml-1 text-neutral-950">{item.marker}</span>
                  </Link>

                  <div className="invisible absolute left-1/2 top-[calc(100%+0.75rem)] w-60 -translate-x-1/2 border border-neutral-200 bg-white p-2 opacity-0 shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {serviceItems.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-3 text-sm text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-950"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "transition-colors hover:text-[#ff1f7a]",
                  isActive ? "text-[#ff1f7a] underline underline-offset-8" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {item.label}
                {item.marker ? <span className="ml-1 text-neutral-950">{item.marker}</span> : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center lg:flex">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center gap-3 rounded-full bg-[#191d21] px-6 text-sm font-semibold text-white transition-colors hover:bg-neutral-900"
          >
            Get in Touch!!
            <ArrowRight size={15} strokeWidth={2} />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex size-11 items-center justify-center text-neutral-950 lg:hidden"
        >
          {isOpen ? <X size={30} strokeWidth={1.8} /> : <Menu size={31} strokeWidth={1.8} />}
        </button>
      </Container>

      {isOpen ? (
        <div className="fixed inset-x-0 top-16 min-h-[calc(100dvh-4rem)] border-t border-neutral-200 bg-[#F7F7F3] lg:hidden">
          <Container className="py-12 sm:py-14">
            <nav className="grid gap-6">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href === "/services" && pathname.startsWith("/services"));

              return (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={[
                      "inline-block text-2xl font-bold leading-none transition-colors",
                      isActive ? "text-[#ff1f7a]" : "text-[#1e2226]",
                      item.hasDropdown && isActive
                        ? "border-b-2 border-[#1e2226] pb-2"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {item.label}
                    {item.marker ? (
                      <span className="ml-1 text-neutral-950">{item.marker}</span>
                    ) : null}
                  </Link>

                  {item.hasDropdown ? (
                    <div className="mt-4 grid gap-4">
                      {serviceItems.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setIsOpen(false)}
                          className="text-base font-medium text-neutral-500 transition-colors hover:text-neutral-900"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

function LogoMark() {
  return (
    <Image
      src="/Common/logo.png"
      alt=""
      width={36}
      height={36}
      priority
      className="size-9 shrink-0"
    />
  );
}
