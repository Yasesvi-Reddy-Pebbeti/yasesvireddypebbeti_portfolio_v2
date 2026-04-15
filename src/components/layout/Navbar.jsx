"use client";

import { useState, useEffect } from "react";

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const section = document.querySelector(href);
    if (!section) return;

    const navbarOffset = 100;
    const sectionTop =
      section.getBoundingClientRect().top + window.pageYOffset - navbarOffset;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });

    window.history.replaceState({}, "", href);
    setActive(href);
    setOpen(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    scrollToSection("#home");
  };

  const handleSectionClick = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={handleHomeClick}
          className="flex items-center gap-3 group"
        >
          <img
            src="/logo.svg"
            alt="YR Logo"
            className="h-9 w-9 transition-all duration-200 group-hover:scale-110"
          />

          <span className="hidden text-lg font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-indigo-400 sm:block">
            Yasesvi Reddy
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSectionClick(e, link.href)}
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
          className="text-white transition hover:text-indigo-400 md:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-zinc-950 md:hidden">
          <div className="flex flex-col space-y-4 px-4 py-4">
            {navLinks.map((link) => {
              const isActive = active === link.href;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleSectionClick(e, link.href)}
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
