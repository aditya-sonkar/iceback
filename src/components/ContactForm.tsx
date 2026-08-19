"use client";
import React from "react";

export default function ContactForm() {
  return (
    <>
    {/* Invite Friends Card — mobile only, above Let's Connect */}
    <div className="md:hidden w-full px-6 pt-8 pb-0">
      <div
        className="relative rounded-[20px] p-6 bg-[#1A2A33] border border-green-500/10 flex flex-row items-center min-h-[220px] shadow-2xl"
        style={{ fontFamily: "var(--font-outfit), sans-serif" }}
      >
        {/* Background circle — smaller proportion */}
        <div className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none z-0">
          <div className="absolute right-[-20px] bottom-[-30px] w-[180px] h-[180px] rounded-full bg-[#3A5665]" />
        </div>
        {/* Left: Text */}
        <div className="relative z-10 flex flex-col items-start w-[55%]">
          <h3 className="text-[20px] font-bold text-white leading-tight mb-2">
            Invite Friends, Get Rewarded
          </h3>
          <p className="text-slate-300 text-xs mb-5 leading-relaxed">
            Share your link and earn CHF 5 or double it for a cause 🌱
          </p>
          <a
            href="#connect"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-accentCyan to-accentBlue font-bold text-black text-[13px] whitespace-nowrap hover:opacity-90 transition-all"
          >
            Refer Now
          </a>
        </div>
        {/* Gift Box — exact Figma specs: 170px x 170px */}
        <img
          src="/gift_box.png"
          alt="Gift Box"
          className="absolute -right-2 -bottom-4 w-[170px] h-[170px] object-contain z-10 pointer-events-none"
        />
      </div>
    </div>

    <section id="connect" className="py-[30px] md:py-20 w-full bg-black overflow-hidden">
      <div className="container mx-auto px-6 lg:px-[120px] max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-24 items-center justify-between">
          <div className="text-left mx-auto lg:mx-0 w-full">
            <h2 className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[70px] font-bold tracking-tight mb-3 md:mb-8 leading-[1.05] text-white text-left">
              Let's Connect
            </h2>
            <p className="text-[#9f9fa3] text-[16px] sm:text-[20px] md:text-[24px] font-normal leading-relaxed lg:leading-[55px] text-left">
              Need assistance? We'd love to hear from you.
            </p>
          </div>
          <div className="p-8 sm:p-10 md:p-12 rounded-[16px] bg-[#1A1A1A] border border-white/5 shadow-lg">
            <form onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#9f9fa3] mb-2">Name</label>
                <input type="text" placeholder="Enter Name" required className="w-full bg-[#262626] border border-white/5 rounded-[8px] p-4 text-sm text-white focus:outline-none focus:border-accentCyan transition-all" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#9f9fa3] mb-2">Email</label>
                <input type="email" placeholder="Enter Email" required className="w-full bg-[#262626] border border-white/5 rounded-[8px] p-4 text-sm text-white focus:outline-none focus:border-accentCyan transition-all" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#9f9fa3] mb-2">Message</label>
                <textarea rows={4} placeholder="Enter Message" required className="w-full bg-[#262626] border border-white/5 rounded-[8px] p-4 text-sm text-white focus:outline-none focus:border-accentCyan resize-none transition-all" />
              </div>
              <button type="submit" className="w-full py-3.5 rounded-full bg-gradient-to-r from-accentCyan to-accentBlue font-extrabold text-[18px] text-black hover:shadow-lg transition-all transform hover:-translate-y-0.5">Connect</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    {/* Mobile View Capital AG Footer Card */}
    <footer className="md:hidden w-full bg-black pt-4 pb-6 px-6">
      <div className="w-full p-8 rounded-[16px] bg-[#1A1A1A] border border-white/5 shadow-lg flex flex-col items-center gap-5">
        {/* Company info */}
        <div className="text-center">
          <p className="text-white font-bold text-[20px]">View Capital AG</p>
          <p className="text-[#9f9fa3] text-[14px] mt-1">Bahnhofweg 1 , 6405 Immensee , Switzerland</p>
        </div>

        {/* Social icons — exact Figma styling */}
        <div className="flex items-center gap-3.5 sm:gap-4 mt-2">
          {/* Facebook */}
          <a 
            href="#" 
            aria-label="Facebook" 
            className="w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-[16px] bg-[#292929] border border-white/5 flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#1877F2"/>
              <path d="M21.5 16h-3.2v10.5h-4.3V16h-2.1v-3.8h2.1v-2.2c0-2.2 1.3-3.5 3.3-3.5 1 0 2 .1 2 .1v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4v2h2.9l-.4 3.8z" fill="white"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a 
            href="#" 
            aria-label="LinkedIn" 
            className="w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-[16px] bg-[#292929] border border-white/5 flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="6" fill="#0A66C2"/>
              <path d="M8 12h3.6v12H8V12zm1.8-5.8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm6.7 5.8h3.4v1.7h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5V24h-3.6v-6.6c0-1.6 0-3.6-2.2-3.6-2.2 0-2.5 1.7-2.5 3.5V24h-3.6V12z" fill="white"/>
            </svg>
          </a>

          {/* Instagram */}
          <a 
            href="#" 
            aria-label="Instagram" 
            className="w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-[16px] bg-[#292929] border border-white/5 flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
              <radialGradient id="ig-grad-real" cx="0.2" cy="1" r="1.3">
                <stop offset="0%" stopColor="#FFDD55"/>
                <stop offset="30%" stopColor="#FF543E"/>
                <stop offset="60%" stopColor="#C837AB"/>
                <stop offset="100%" stopColor="#3771C8"/>
              </radialGradient>
              <rect x="3" y="3" width="30" height="30" rx="9" fill="none" stroke="url(#ig-grad-real)" strokeWidth="3"/>
              <circle cx="18" cy="18" r="6.5" fill="none" stroke="url(#ig-grad-real)" strokeWidth="3"/>
              <circle cx="25.5" cy="10.5" r="1.8" fill="url(#ig-grad-real)"/>
            </svg>
          </a>

          {/* TikTok — exact Figma black badge with logo note + text */}
          <a 
            href="#" 
            aria-label="TikTok" 
            className="w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-[16px] bg-[#292929] border border-white/5 flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            <div className="w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] rounded-[7px] bg-black flex flex-col items-center justify-center pt-1 pb-0.5">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.89a8.2 8.2 0 0 0 4.78 1.52V7a4.85 4.85 0 0 1-1.01-.31z" fill="#25F4EE" transform="translate(-0.8, -0.8)"/>
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.89a8.2 8.2 0 0 0 4.78 1.52V7a4.85 4.85 0 0 1-1.01-.31z" fill="#FE2C55" transform="translate(0.8, 0.8)"/>
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.89a8.2 8.2 0 0 0 4.78 1.52V7a4.85 4.85 0 0 1-1.01-.31z" fill="white"/>
              </svg>
              <span className="text-[6.5px] font-bold text-white tracking-tight leading-none mt-0.5">TikTok</span>
            </div>
          </a>
        </div>
      </div>
    </footer>
    </>
  );
}
