"use client";
import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="relative z-10 w-full bg-black lg:bg-[#151515] overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 lg:px-[120px] pt-[150px] sm:pt-[150px] lg:pt-[180px] pb-4 sm:pb-6 lg:pb-8 min-h-[90vh] flex items-center max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center w-full">
        {/* Left Column: Brand Pitch */}
        <div className="text-left flex flex-col gap-6 lg:gap-[45px] items-start max-w-[867px] lg:-translate-y-16">
          <h1 className="text-[52px] sm:text-[64px] lg:text-[72px] xl:text-[85px] font-bold tracking-tight leading-[1.1] text-white lg:max-w-[772px]">
            Shop. Save. Support the Planet
          </h1>
          <p className="w-full text-left text-[16px] sm:text-[20px] md:text-[24px] text-[#AEA4A4] font-normal leading-relaxed">
            Get cashback on your purchases &amp; turn it into climate impact.
          </p>
          <a
            href="#connect"
            className="flex w-full sm:w-auto justify-center text-center px-8 sm:px-10 py-3.5 sm:py-4 font-bold text-[#07090e] rounded-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] hover:shadow-[0_10px_30px_rgba(0,242,254,0.3)] transition-all hover:scale-105 active:scale-95 duration-200"
          >
            Start Free
          </a>
        </div>

        {/* Right Column: Cascading Vertical Cards Stack & Floating Glassmorphic Pills */}
        {/* Right Column: Cascading Vertical Cards Stack & Floating Glassmorphic Pills */}
        <div
          className="relative h-[420px] sm:h-[480px] lg:h-[640px] flex items-center justify-center cursor-pointer select-none lg:pr-16"
        >
          {/* Ambient glow backdrop behind the credit card stack (Figma Specs: Cyan-to-Blue, 702px x 428px, 220px Blur) */}
          <div className="absolute w-[280px] h-[180px] sm:w-[500px] sm:h-[300px] lg:w-[702px] lg:h-[428px] rounded-full bg-gradient-to-r from-[#1fedf8] to-[#1f8eff] opacity-20 blur-[80px] sm:blur-[160px] lg:blur-[220px] lg:rotate-[90.25deg] z-0 pointer-events-none" />

          {/* Vertical Cards Stack Wrapper with responsive translate coordinates */}
          <div
            className="relative w-[150px] h-[290px] sm:w-[212px] sm:h-[410px] lg:w-[284px] lg:h-[549px] transition-transform duration-300 ease-out [--card-translate-x:-45px] sm:[--card-translate-x:-70px] lg:[--card-translate-x:-95px] [--card-translate-y:-10px] sm:[--card-translate-y:-18px] lg:[--card-translate-y:-24px]"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            {/* Card 1: Back-most Card (Left - Blue Card / 18.png) */}
            <div
              style={{
                transform: "translate3d(var(--card-translate-x), var(--card-translate-y), -30px) rotate(-13deg)",
                transformStyle: "preserve-3d",
                backgroundImage: "url('/18.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
              className="absolute inset-0 rounded-[20px] sm:rounded-[24px] border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-transform duration-200 ease-out z-10 overflow-hidden"
            >
              {/* Noise texture overlay for premium textured finish */}
              <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none z-0 bg-repeat" style={{ backgroundImage: "url('/image.png')" }} />
            </div>

            {/* Card 2: Back Card (Center - Black Card / image.png) */}
            <div
              style={{
                transform: "translate3d(var(--card-translate-x), var(--card-translate-y), -30px) rotate(-13deg)",
                transformStyle: "preserve-3d",
              }}
              className="absolute inset-0 rounded-[20px] sm:rounded-[24px] border border-white/5 shadow-[0_25px_45px_rgba(0,0,0,0.7)] transition-transform duration-200 ease-out z-20 overflow-hidden p-5 sm:p-8 lg:p-9"
            >
              {/* Dark card background image with opacity so blue card behind shines through */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-[0.68] pointer-events-none z-0" 
                style={{ backgroundImage: "url('/image.png')" }} 
              />

              {/* Noise texture overlay for premium textured finish */}
              <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none z-0 bg-repeat" style={{ backgroundImage: "url('/image.png')" }} />

              <div className="h-full flex flex-col justify-between relative z-10">
                {/* Vertical waves icon positioned on the left edge to stick out */}
                <div className="absolute top-[35%] left-4 sm:left-8">
                  <svg className="text-white -rotate-90 transform w-6 h-6 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <path d="M4 9a3 3 0 0 1 0 6M8 7a6 6 0 0 1 0 10M12 5a9 9 0 0 1 0 14M16 3a12 12 0 0 1 0 18" />
                  </svg>
                </div>
                <div />
                <div className="w-8 h-6 sm:w-10 sm:h-7.5 bg-white/5 rounded mx-auto mt-auto"></div>
              </div>
            </div>

            {/* Card 3: Front Card (Right - Colourful Fluffy Dream) */}
            <div
              style={{
                transform: "translate3d(0px, 0px, 0px) rotate(1deg)",
                transformStyle: "preserve-3d",
                backgroundImage: "url('/fluffy dream.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
              className="absolute inset-0 rounded-[20px] sm:rounded-[24px] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-transform duration-200 ease-out z-30 overflow-hidden p-4 sm:p-8 lg:p-9"
            >
              {/* Noise texture overlay for premium textured finish */}
              <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none z-0 bg-repeat" style={{ backgroundImage: "url('/image.png')" }} />

              <div className="h-full flex flex-col justify-between relative z-10">
                {/* Top: Mastercard circles (top-right) & Contactless wave (upper-left) */}
                <div className="flex justify-between items-start w-full">
                  {/* Contactless wave absolute positioned lower down the left side, rotated vertically */}
                  <div className="absolute top-[20%] left-[-2px]">
                    <svg className="text-white/80 -rotate-90 transform w-6 h-6 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <path d="M4 9a3 3 0 0 1 0 6M8 7a6 6 0 0 1 0 10M12 5a9 9 0 0 1 0 14M16 3a12 12 0 0 1 0 18" />
                    </svg>
                  </div>
                  <div />
                  {/* Translucent Mastercard logo circles */}
                  <div className="flex -space-x-2 sm:-space-x-3 opacity-60">
                    <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/40" />
                    <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 mix-blend-screen" />
                  </div>
                </div>

                {/* Center-Right: Full Vertical Card Numbers (Embossed Credit Card Font) */}
                <div 
                  className="absolute right-[-48px] sm:right-[-52px] top-[140px] sm:top-[225px] origin-center text-white/95 font-mono font-extrabold text-[12px] sm:text-[18px] lg:text-[20px] tracking-[0.25em] sm:tracking-[0.28em] select-none whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                  style={{ transform: "rotate(90deg)" }}
                >
                  2320 3000 0000 1234
                </div>

                {/* Bottom Row: Smart Chip on Left + Vertical Joy Laroy on Right */}
                <div className="flex items-center justify-between w-full pb-0.5">
                  {/* SVG Smart Chip (Bottom Left) */}
                  <div className="w-[30px] h-[40px] sm:w-[42px] sm:h-[56px] rounded-[7px] sm:rounded-[10px] border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-7 sm:w-8 sm:h-11 text-white/60" viewBox="0 0 34 44" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="2" width="30" height="40" rx="6" />
                      <path d="M2 14h30M2 30h30M17 2v40" />
                      <circle cx="17" cy="22" r="5" fill="none" />
                    </svg>
                  </div>

                  {/* Vertical Cardholder Name: Joy Laroy (Bottom Right) */}
                  <span 
                    className="text-white/95 font-sans text-[10px] sm:text-[14px] font-semibold tracking-wider select-none inline-block origin-center drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                    style={{ writingMode: "vertical-lr" }}
                  >
                    Joy Laroy
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Glassmorphic Pills — 3 Pills stacked vertically in staggered layout as in Figma */}

            {/* Pill 1 (Top-Left): Ryan Earned */}
            <div
              className="absolute top-[-10px] left-[-25px] sm:left-[-70px] lg:left-[-90px] z-40 flex items-center gap-[6px] sm:gap-[8px] lg:gap-[12px] h-[34px] sm:h-[42px] lg:h-[58.5px] px-[9px] sm:px-[12px] py-[3px] lg:px-[21px] lg:py-[9px] rounded-full bg-[#F9F4FF]/[0.38] border-[0.6px] lg:border-[0.88px] border-white/[0.39] backdrop-blur-[22.85px] shadow-[0_12px_32px_rgba(0,0,0,0.5)] whitespace-nowrap animate-float"
              style={{ animationDuration: "5s" }}
            >
              <div className="w-4.5 h-4.5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full overflow-hidden border border-white/20 shrink-0">
                <img
                  src="/ryan.jpg"
                  alt="Ryan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white text-[8.5px] sm:text-[11px] lg:text-[13px] font-medium tracking-wide">
                Ryan earned <span className="text-[#00f2fe] font-bold">₹1000</span> in cashback today
              </div>
            </div>

            {/* Pill 2 (Middle-Right): Spending helps plant trees */}
            <div
              className="absolute top-[35%] left-[20px] sm:left-[50px] lg:left-[20px] xl:left-[70px] z-40 flex items-center gap-[6px] sm:gap-[8px] lg:gap-[12px] h-[34px] sm:h-[42px] lg:h-[58.5px] px-[9px] sm:px-[12px] py-[3px] lg:px-[21px] lg:py-[9px] rounded-full bg-[#F9F4FF]/[0.38] border-[0.6px] lg:border-[0.88px] border-white/[0.39] backdrop-blur-[22.85px] shadow-[0_12px_32px_rgba(0,0,0,0.5)] whitespace-nowrap animate-float"
              style={{ animationDuration: "6s", animationDelay: "1.5s" }}
            >
              <div className="w-4.5 h-4.5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center shrink-0">
                <img 
                  src="/plant.png" 
                  alt="Plant" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="text-white text-[8.5px] sm:text-[11px] lg:text-[13px] font-medium tracking-wide">
                Your spending helps plant trees &amp; offset carbon
              </div>
            </div>

            {/* Pill 3 (Bottom-Left): Join 500,000+ members */}
            <div
              className="absolute bottom-[68px] sm:bottom-[95px] lg:bottom-[95px] left-[-25px] sm:left-[-70px] lg:left-[-110px] z-40 flex items-center gap-[6px] sm:gap-[8px] lg:gap-[12px] h-[34px] sm:h-[42px] lg:h-[58.5px] px-[9px] sm:px-[12px] py-[3px] lg:px-[21px] lg:py-[9px] rounded-full bg-[#F9F4FF]/[0.38] border-[0.6px] lg:border-[0.88px] border-white/[0.39] backdrop-blur-[22.85px] shadow-[0_12px_32px_rgba(0,0,0,0.5)] whitespace-nowrap animate-float"
              style={{ animationDuration: "7s", animationDelay: "3s" }}
            >
              <div className="w-4.5 h-4.5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center shrink-0">
                <img 
                  src="/globe.png" 
                  alt="Globe" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="text-white text-[8.5px] sm:text-[11px] lg:text-[13px] font-medium tracking-wide">
                Join 500,000+ members making every purchase count
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
