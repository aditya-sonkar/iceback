import React from "react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative z-20 w-full bg-black py-[30px] lg:py-24">
      <div className="container mx-auto px-6 lg:px-[120px] max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-24 items-center">
          
          {/* Left Column: Headline & Sub-headline */}
          <div className="max-w-[420px] lg:max-w-[513px] text-left">
            <h2 className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[70px] font-bold tracking-tight mb-4 lg:mb-8 leading-tight lg:leading-[80px] text-white">
              How ICEBack <br className="hidden lg:block" /> Works
            </h2>
            <p className="text-[#9f9fa3] text-[16px] sm:text-[20px] md:text-[24px] leading-normal font-normal">
              Learn how ICEBack turns your spending into sustainable impact.
            </p>
          </div>

          {/* Right Column: Stacked Horizontal Cards */}
          <div className="flex flex-col gap-4 sm:gap-6">
            
            {/* Card 1 */}
            <div className="flex flex-row items-center gap-4 sm:gap-6 px-4 py-5 sm:py-9 sm:px-8 rounded-[12px] bg-[#1F1E1E] border border-white/5 transition-all duration-300 hover:border-zinc-700">
              {/* Number Box (Exact Figma specs: w-12 h-16 / sm:w-16 sm:h-24) */}
              <div className="flex-shrink-0 w-12 h-16 sm:w-16 sm:h-24 rounded-[10px] bg-[#2A2A2A] border border-white/10 flex items-center justify-center text-white font-bold text-xl sm:text-2xl">
                1
              </div>
              {/* Content Text */}
              <div className="flex-1">
                <h3 className="text-[16px] sm:text-[20px] md:text-[22px] font-bold text-white mb-1 sm:mb-2 tracking-tight">Choose a shop & order</h3>
                <p className="text-white/60 text-[13px] sm:text-[16px] leading-snug sm:leading-[26px] max-w-[380px] font-normal">Choose your favourite shop, order & benefit.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-row items-center gap-4 sm:gap-6 px-4 py-5 sm:py-9 sm:px-8 rounded-[12px] bg-[#1F1E1E] border border-white/5 transition-all duration-300 hover:border-zinc-700">
              {/* Number Box */}
              <div className="flex-shrink-0 w-12 h-16 sm:w-16 sm:h-24 rounded-[10px] bg-[#2A2A2A] border border-white/10 flex items-center justify-center text-white font-bold text-xl sm:text-2xl">
                2
              </div>
              {/* Content Text */}
              <div className="flex-1">
                <h3 className="text-[16px] sm:text-[20px] md:text-[22px] font-bold text-white mb-1 sm:mb-2 tracking-tight">Cashback</h3>
                <p className="text-white/60 text-[13px] sm:text-[16px] leading-snug sm:leading-[26px] max-w-[380px] font-normal">After the return deadline, the money will be credited to your account.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-row items-center gap-4 sm:gap-6 px-4 py-5 sm:py-9 sm:px-8 rounded-[12px] bg-[#1F1E1E] border border-white/5 transition-all duration-300 hover:border-zinc-700">
              {/* Number Box */}
              <div className="flex-shrink-0 w-12 h-16 sm:w-16 sm:h-24 rounded-[10px] bg-[#2A2A2A] border border-white/10 flex items-center justify-center text-white font-bold text-xl sm:text-2xl">
                3
              </div>
              {/* Content Text */}
              <div className="flex-1">
                <h3 className="text-[16px] sm:text-[20px] md:text-[22px] font-bold text-white mb-1 sm:mb-2 tracking-tight">Donate for environment</h3>
                <p className="text-white/60 text-[13px] sm:text-[16px] leading-snug sm:leading-[26px] max-w-[380px] font-normal">Make a difference and make our world a better place. You can donate your cashback to various projects.</p>
              </div>
            </div>

            {/* Mobile-only CTA button — Full width cyan gradient button */}
            <div className="flex justify-center mt-4 lg:hidden">
              <a
                href="#connect"
                className="inline-flex w-full justify-center text-center px-8 py-3.5 font-bold text-black rounded-full bg-gradient-to-r from-accentCyan to-accentBlue hover:shadow-[0_10px_30px_rgba(0,242,254,0.3)] transition-all text-[16px]"
              >
                Start Free
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
