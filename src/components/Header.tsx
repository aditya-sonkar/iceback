"use client";
import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#how-it-works", label: "Mastercard" },
    { href: "#stores", label: "Cashback shops" },
    { href: "#vouchers", label: "Special deals" },
    { href: "#climate-projects", label: "Donation projects" },
  ];

  return (
    <header className="fixed top-0 lg:top-8 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-4">
      <div className="flex flex-col w-full max-w-[984px]">
        {/* Nav bar: Transparent on mobile (< lg), floating pill on desktop (lg+) */}
        <div className="flex items-center justify-between h-[64px] lg:h-[88px] px-2 sm:px-4 lg:px-8 bg-transparent lg:bg-[#1E1E1E]/45 border-none lg:border lg:border-white/10 backdrop-blur-none lg:backdrop-blur-2xl shadow-none lg:shadow-lg rounded-none lg:rounded-full">
          {/* Logo */}
          <a href="#" className="text-[20px] sm:text-[24px] font-bold tracking-tight text-white hover:opacity-90 transition-opacity shrink-0">
            Money<span className="font-normal text-white">Back</span>
          </a>

          {/* Desktop Nav (Visible on lg 1024px+) */}
          <nav className="hidden lg:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-[16px] font-light text-white/70 leading-none tracking-normal hover:text-white transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side: CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a 
              href="#connect" 
              className="hidden lg:flex px-[24px] xl:px-[27px] py-[10px] xl:py-[12px] rounded-full bg-[#262626] border border-[#1fcbfa] text-[#1fcbfa] font-bold text-[14px] hover:bg-[#1fcbfa]/10 transition-all items-center justify-center leading-none shrink-0"
            >
              Start free
            </a>

            {/* Hamburger — visible on mobile & tablet (< lg) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-full border border-white/15 bg-black/40 backdrop-blur-md hover:border-white/40 transition-all"
              aria-label="Toggle menu"
            >
              <span className={`block w-4.5 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`block w-4.5 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-4.5 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown Menu */}
        <div className={`lg:hidden mt-2 overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[360px] opacity-100" : "max-h-0 opacity-0"}`}>
          <nav className="flex flex-col gap-1 px-4 py-4 rounded-2xl bg-[#191919]/95 border border-white/10 backdrop-blur-2xl shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-[15px] font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#connect" 
              onClick={() => setMenuOpen(false)}
              className="mt-2 w-full py-3 rounded-xl bg-[#262626] border border-[#1fcbfa] text-[#1fcbfa] font-bold text-[14px] text-center hover:bg-[#1fcbfa]/10 transition-all"
            >
              Start free
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
