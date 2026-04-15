"use client";

import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Leadership", href: "#leadership" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = headerRef.current?.offsetHeight ?? 80;
      const offset = headerHeight + 80;
      const scrollPosition = window.scrollY + offset;

      let current = "#home";

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          current = link.href;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToSection = (href) => {
    const section = document.querySelector(href);
    if (!section) return;

    const headerHeight = headerRef.current?.offsetHeight ?? 80;
    const extraGap = 96;

    const targetY =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight -
      extraGap;

    window.scrollTo({
      top: Math.max(targetY, 0),
      behavior: "smooth",
    });

    window.history.replaceState({}, "", href);
    setActive(href);
    setOpen(false);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-3 group"
        >
          <img
            src="/logo.svg"
            alt="YR Logo"
            className="h-9 w-9 transition-all duration-200 group-hover:scale-110"
          />

          <span className="hidden whitespace-nowrap text-lg font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-indigo-400 sm:block">
            Yasesvi Reddy
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-sm transition-all duration-200 ${
                  isActive
                    ? "text-indigo-400"
                    : "text-zinc-300 hover:-translate-y-[1px] hover:text-indigo-400"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-400 transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="text-white transition hover:text-indigo-400 lg:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-zinc-950 lg:hidden">
          <div className="flex flex-col space-y-4 px-4 py-4">
            {navLinks.map((link) => {
              const isActive = active === link.href;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm transition-all duration-200 ${
                    isActive
                      ? "text-indigo-400"
                      : "text-zinc-300 hover:translate-x-1 hover:text-indigo-400"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
