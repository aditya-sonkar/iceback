import React from "react";

export default function PromoBanners() {
  return (
    <section id="promos" className="w-full bg-black py-[30px] md:py-10">
      <div className="container mx-auto px-6 lg:px-[120px] max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Promo 1: New Balance */}
          <div
            className="relative overflow-hidden rounded-[20px] p-6 sm:p-8 md:p-10 bg-[#1E2954] border border-cyan-500/10 flex flex-row items-center min-h-[240px] sm:min-h-[280px] md:min-h-[300px] shadow-2xl"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            {/* Background circle */}
            <div className="absolute right-[-40px] bottom-[-70px] w-[240px] h-[240px] rounded-full bg-[#3B4E8C] z-0 pointer-events-none" />

            {/* Logo — center-right above the model (original Figma position) */}
            <div className="absolute right-[20%] sm:right-[22%] top-[10%] sm:top-[12%] z-20 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center w-[72px] h-[48px] sm:w-[100px] sm:h-[64px] lg:w-[120px] lg:h-[74px] px-2 py-1">
              <img
                src="/new_balance.png"
                alt="New Balance Logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Left: Text — locked to 42% so logo has space in the center-right */}
            <div className="relative z-10 flex flex-col items-start w-[42%] sm:w-[44%] lg:w-[48%]">
              <h3 className="text-[20px] sm:text-[22px] md:text-[26px] font-bold text-white leading-tight mb-2 md:mb-3">
                Get 2.5% Cashback
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-[15px] mb-5 sm:mb-6 md:mb-8 leading-relaxed">
                on New Balance Clothing and Footwear Range
              </p>
              <a
                href="#connect"
                className="inline-flex items-center justify-center px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] font-bold text-black hover:shadow-[0_10px_30px_rgba(0,242,254,0.3)] transition-all hover:scale-105 active:scale-95 duration-200 text-[13px] sm:text-[14px] whitespace-nowrap"
              >
                Activate Offer
              </a>
            </div>

            {/* Model */}
            <img
              src="/NB_Model.png"
              alt="New Balance Model"
              className="absolute right-[-10px] sm:right-[-20px] lg:right-[-50px] bottom-[-10px] sm:bottom-[-15px] lg:bottom-[-20px] h-[78%] sm:h-[88%] lg:h-[95%] w-auto object-contain z-10 pointer-events-none"
            />
          </div>

          {/* Promo 2: Referral */}
          <div
            className="md:flex relative overflow-hidden rounded-[20px] p-6 sm:p-8 md:p-10 bg-[#1A2A33] border border-green-500/10 flex-row items-center min-h-[240px] sm:min-h-[280px] md:min-h-[300px] shadow-2xl hidden"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            {/* Background circle clipped inside card */}
            <div className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none z-0">
              <div className="absolute right-[-30px] bottom-[-60px] w-[270px] h-[270px] rounded-full bg-[#3A5665]" />
            </div>

            {/* Left: Text — locked to 55% */}
            <div className="relative z-10 flex flex-col items-start w-[55%] lg:w-[60%]">
              <h3 className="text-[20px] sm:text-[22px] md:text-[26px] font-bold text-white leading-tight mb-2 md:mb-3">
                Invite Friends, Get Rewarded
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-[15px] mb-5 sm:mb-6 md:mb-8 leading-relaxed">
                Share your link and earn CHF 5 or double it for a cause 🌱
              </p>
              <a
                href="#connect"
                className="inline-flex items-center justify-center px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-accentCyan to-accentBlue font-bold text-black hover:opacity-95 transition-all text-[13px] sm:text-[14px] whitespace-nowrap"
              >
                Refer Now
              </a>
            </div>

            {/* Gift Box */}
            <img
              src="/gift_box.png"
              alt="Gift Box"
              className="absolute right-[-8px] sm:right-[-12px] lg:right-[-15px] bottom-[-10px] sm:bottom-[-20px] lg:bottom-[-28px] h-[74%] sm:h-[82%] lg:h-[88%] w-auto object-contain z-10 pointer-events-none"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
