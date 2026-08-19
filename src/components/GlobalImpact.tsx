import React from "react";

export default function GlobalImpact() {
  return (
    <section id="global-impact" className="relative bg-black w-full py-[30px] lg:py-24 text-white overflow-hidden border-b border-white/5">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 lg:px-[120px]">
        {/* Left Aligned Heading & Sub-heading */}
        <div className="text-left mb-8 lg:mb-12">
          <h2 className="text-[32px] sm:text-[48px] md:text-[68px] font-bold tracking-tight mb-3 sm:mb-4 text-white leading-tight">
            ICEBack’s Global Impact
          </h2>
          <p className="text-[#9f9fa3] text-[15px] sm:text-[18px] md:text-[20px] leading-relaxed font-normal">
            Learn how ICEBack turns your spending into sustainable impact.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-6 items-center lg:items-start justify-between">
          {/* Left Column: Stats Grid + Button */}
          <div className="flex flex-col justify-between gap-5 sm:gap-6 w-full lg:w-[46%] xl:w-[523px]">
            {/* 2x2 Grid of Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
              {/* Stat 1 */}
              <div className="p-4 sm:p-6 rounded-[16px] bg-[#1F1E1E] border border-white/5 flex flex-col items-center justify-center text-center w-full h-[120px] sm:h-[135px] md:h-[153px] gap-2 shrink-0">
                <span className="text-[13px] sm:text-[14px] text-[#9f9fa3] font-normal leading-none">Trees planted</span>
                <span className="text-[24px] sm:text-[30px] md:text-[36px] font-bold text-white leading-none">85K+</span>
              </div>

              {/* Stat 2 */}
              <div className="p-4 sm:p-6 rounded-[16px] bg-[#1F1E1E] border border-white/5 flex flex-col items-center justify-center text-center w-full h-[120px] sm:h-[135px] md:h-[153px] gap-2 shrink-0">
                <span className="text-[13px] sm:text-[14px] text-[#9f9fa3] font-normal leading-none">CO₂ offset</span>
                <span className="text-[24px] sm:text-[30px] md:text-[36px] font-bold text-white leading-none">1.1M kg</span>
              </div>

              {/* Stat 3 */}
              <div className="p-4 sm:p-6 rounded-[16px] bg-[#1F1E1E] border border-white/5 flex flex-col items-center justify-center text-center w-full h-[120px] sm:h-[135px] md:h-[153px] gap-2 shrink-0">
                <span className="text-[13px] sm:text-[14px] text-[#9f9fa3] font-normal leading-none">Plastic removed</span>
                <span className="text-[24px] sm:text-[30px] md:text-[36px] font-bold text-white leading-none">460 tons</span>
              </div>

              {/* Stat 4 */}
              <div className="p-4 sm:p-6 rounded-[16px] bg-[#1F1E1E] border border-white/5 flex flex-col items-center justify-center text-center w-full h-[120px] sm:h-[135px] md:h-[153px] gap-2 shrink-0">
                <span className="text-[13px] sm:text-[14px] text-[#9f9fa3] font-normal leading-none">Homes powered</span>
                <span className="text-[24px] sm:text-[30px] md:text-[36px] font-bold text-white leading-none">7.8 K</span>
              </div>
            </div>

            {/* Button nested inside left column — Full Width on mobile to match 2x2 grid */}
            <div className="w-full">
              <a
                href="#connect"
                className="inline-flex items-center justify-center w-full lg:w-auto lg:px-12 py-3.5 sm:py-4 font-bold text-[#07090e] text-[15px] sm:text-[16px] rounded-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] hover:shadow-[0_10px_30px_rgba(0,242,254,0.3)] transition-all hover:scale-[1.02] active:scale-95 duration-200"
              >
                Request Charity
              </a>
            </div>
          </div>

          {/* Right Column: Whale Photo Container (Desktop only) */}
          <div className="hidden lg:block relative rounded-[16px] overflow-hidden border border-white/5 lg:w-[50%] lg:h-[326px] xl:w-[651px] xl:h-[326px] shrink-0 shadow-2xl">
            <img
              src="/whale_pic.jpg"
              alt="Whale Tail in Ocean"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
