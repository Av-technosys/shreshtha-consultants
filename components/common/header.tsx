"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "@/components/common/container";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "#", marker: "▾", hasDropdown: true },
  { label: "Projects", href: "/projects" },
  { label: "BIM", href: "/bim" },
  { label: "Careers", href: "/career" },
  { label: "Blogs", href: "/blog" },
];

const serviceItems = [
  { label: "Electrical", href: "/services/electrical" },
  { label: "Plumbing", href: "/services/plumbing" },
  { label: "Fire Fighting", href: "/services/fire-fighting" },
  { label: "Safety and Security", href: "/services/safety-and-security" },
  { label: "HVAC", href: "/services/hvac" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    function updateHash() {
      setActiveHash(window.location.hash);
    }

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);

  useEffect(() => {
    if (isOpen && pathname.startsWith("/services")) {
      setIsServicesOpen(true);
    }
  }, [isOpen, pathname]);

  function closeMenu() {
    setIsOpen(false);
    setIsServicesOpen(false);
  }

  function isServiceActive(href: string) {
    return pathname === href;
  }


  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-[#FCFCFC]/95 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-8 py-3 md:min-h-18">
        <Link
          href="/"
          aria-label="Heartbeat of Building"
          className="flex shrink-0 items-center gap-3"
          onClick={closeMenu}
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
              (item.hasDropdown && pathname.startsWith("/services"));

            if (item.hasDropdown) {
              return (
                <div key={item.href} className="group relative -my-6 py-6">
                  <Link
                    href={item.href}
                    className={[
                      "transition-colors hover:text-[#ff1f7a]",
                      isActive ? "text-[#ff1f7a] underline decoration-neutral-950 decoration-2 underline-offset-[10px]" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <span>{item.label}</span>
                    {item.marker && <span className="ml-1 inline-block">{item.marker}</span>}
                  </Link>

                  <div className="invisible absolute left-1/2 top-[calc(100%+0.75rem)] w-60 -translate-x-1/2 border border-neutral-200 bg-white p-2 opacity-0 shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {serviceItems.map((service) => {
                      const serviceActive = isServiceActive(service.href);

                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => {
                            if (document.activeElement instanceof HTMLElement) {
                              document.activeElement.blur();
                            }
                          }}
                          className={[
                            "block px-4 py-3 text-sm transition-colors",
                            serviceActive
                              ? "text-[#ff1f7a]"
                              : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                        >
                          {service.label}
                        </Link>
                      );
                    })}
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
                  isActive ? "text-[#ff1f7a] underline decoration-neutral-950 decoration-2 underline-offset-[10px]" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span>{item.label}</span>
                {item.marker && <span className="ml-1 inline-block">{item.marker}</span>}
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
          onClick={() => {
            setIsOpen((current) => !current);
            setIsServicesOpen(pathname.startsWith("/services"));
          }}
          className="inline-flex size-11 items-center justify-center text-neutral-950 lg:hidden"
        >
          {isOpen ? <X size={30} strokeWidth={1.8} /> : <Menu size={31} strokeWidth={1.8} />}
        </button>
      </Container>

      {isOpen ? (
        <div className="fixed inset-x-0 top-16 max-h-[calc(100dvh-4rem)] min-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-neutral-200 bg-[#FCFCFC] lg:hidden">
          <Container className="py-12 sm:py-14">
            <nav className="grid gap-6">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.hasDropdown && pathname.startsWith("/services"));

              return (
                <div key={item.href}>
                  {item.hasDropdown ? (
                    <button
                      type="button"
                      aria-expanded={isServicesOpen}
                      onClick={() => setIsServicesOpen((current) => !current)}
                      className={[
                        "inline-flex w-fit items-center text-left text-2xl font-bold leading-none text-[#1e2226] transition-colors",
                        isActive ? "border-b-2 border-[#1e2226] pb-2 text-[#ff1f7a]" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {item.label}
                      {item.marker && <span className="ml-1 inline-block">{item.marker}</span>}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={[
                        "inline-flex w-fit text-2xl font-bold leading-none text-[#1e2226] transition-colors",
                        isActive ? "border-b-2 border-[#1e2226] pb-2 text-[#ff1f7a]" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {item.label}
                    </Link>
                  )}

                  {item.hasDropdown && isServicesOpen ? (
                    <div className="mt-4 grid gap-4">
                      {serviceItems.map((service) => {
                        const serviceActive = isServiceActive(service.href);

                        return (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={closeMenu}
                            className={[
                              "w-fit text-base font-semibold transition-colors",
                              serviceActive
                                ? "text-[#ff1f7a]"
                                : "text-neutral-500 hover:text-neutral-900",
                            ]
                              .filter(Boolean)
                              .join(" ")}
                          >
                            {service.label}
                          </Link>
                        );
                      })}
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
