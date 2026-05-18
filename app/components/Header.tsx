"use client";

import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "About Me", href: "#about" },
  { label: "Portfolio", href: "#work" },
  { label: "Service", href: "#services" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-[#12141D]/80 backdrop-blur-md">
      <nav className="container-main flex items-center justify-between py-5 sm:py-6">
        <a
          href="#"
          className="heading-display text-xl sm:text-2xl text-[#F8FAFC]"
        >
          Faraaz<span className="text-[#4A90E2]">.</span>
        </a>

        <div className="hidden items-center gap-8 lg:gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[11px] font-semibold uppercase tracking-[0.2em] transition ${
                link.active
                  ? "border-b border-[#4A90E2] pb-1 text-[#F8FAFC]"
                  : "text-[#94A3B8] hover:text-[#F8FAFC]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <button className="hidden sm:flex items-center gap-2 rounded-sm bg-[#4A90E2] px-5 py-2.5 text-sm font-semibold text-[#F8FAFC] transition-all hover:bg-[#00D4FF] group">
            Contact Now{" "}
            <span className="transition-transform group-hover:translate-x-0.5">
              ↗
            </span>
          </button>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 text-[#F8FAFC] md:hidden"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/5 bg-[#12141D] px-5 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-sm px-3 py-3 text-sm font-medium uppercase tracking-wider transition ${
                  link.active
                    ? "bg-[#1E212B] text-[#4A90E2]"
                    : "text-[#94A3B8] hover:bg-[#1E212B] hover:text-[#F8FAFC]"
                }`}
              >
                {link.label}
              </a>
            ))}
            <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-sm bg-[#4A90E2] px-5 py-3 text-sm font-semibold text-[#F8FAFC]">
              Contact Now ↗
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
