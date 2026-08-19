"use client";
import React, { useRef } from "react";
import { Voucher } from "@/types";

export default function VoucherSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const prevX = useRef(0);
  const velocity = useRef(0);
  const momentumId = useRef<number>(0);

  const vouchers: Voucher[] = [
    { id: 1, brand: "Nike", discount: "25% OFF", desc: "Buy at for min. 40 EUR and enjoy a 10% discount on everything, with an exclusive code.", expiry: "Valid until 03 March 2022", flags: ["🇩🇪", "+", "🇨🇭", "🇬🇧", "🇩🇪", "🇪🇺", "🇩🇪"] },
    { id: 2, brand: "Nike", discount: "15% OFF", desc: "Get an extra 15% off outlet items. Excludes select limited items. Free shipping on orders.", expiry: "Valid until 15 June 2025", flags: ["🇩🇪", "+", "🇨🇭", "🇬🇧", "🇩🇪", "🇪🇺", "🇩🇪"] },
    { id: 3, brand: "Nike", discount: "20% OFF", desc: "Enjoy 20% off on all sportswear items. Code valid online for a limited time.", expiry: "Valid until 08 Dec 2025", flags: ["🇩🇪", "+", "🇨🇭", "🇬🇧", "🇩🇪", "🇪🇺", "🇩🇪"] },
  ];

  const getFlagUrl = (flag: string) => {
    switch (flag) {
      case "🇩🇪": return "https://flagcdn.com/de.svg";
      case "🇨🇭": return "https://flagcdn.com/ch.svg";
      case "🇬🇧": return "https://flagcdn.com/gb.svg";
      case "🇪🇺": return "https://flagcdn.com/eu.svg";
      default: return "";
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    if (!sliderRef.current) return;
    cancelAnimationFrame(momentumId.current);
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
    prevX.current = e.pageX;
    velocity.current = 0;
  };

  const handleMouseLeaveOrUp = () => {
    if (!isDown.current) return;
    isDown.current = false;
    
    if (Math.abs(velocity.current) > 0.5) {
      const runMomentum = () => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollLeft -= velocity.current;
        velocity.current *= 0.95; // Premium silky deceleration friction
        
        if (Math.abs(velocity.current) > 0.15) {
          momentumId.current = requestAnimationFrame(runMomentum);
        }
      };
      momentumId.current = requestAnimationFrame(runMomentum);
    }
  };

  const handleDrag = (e: React.MouseEvent) => {
    if (!isDown.current || !sliderRef.current) return;
    e.preventDefault();
    
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.8; // Controlled scroll multiplier
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
    
    const currentX = e.pageX;
    const instantV = (currentX - prevX.current) * 1.8; // Scale velocity to match drag speed
    velocity.current = velocity.current * 0.7 + instantV * 0.3;
    prevX.current = currentX;
  };

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: dir === "right" ? 420 : -420, behavior: "smooth" });
  };

  return (
    <section id="vouchers" className="py-[30px] md:py-20 w-full bg-black overflow-hidden">
      <div className="container mx-auto px-6 lg:px-[120px] max-w-[1440px] text-left mb-8 md:mb-12">
        <h2 className="text-[32px] sm:text-[48px] md:text-[70px] font-bold tracking-tight mb-4 md:mb-8 leading-tight md:leading-[48px] text-white">Save More with Vouchers</h2>
        <p className="text-[#9f9fa3] text-[16px] sm:text-[20px] md:text-[24px] font-normal leading-normal">Enjoy handpicked offers designed to help you shop smarter.</p>
      </div>
      <div className="relative">
      <div 
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleDrag}
        className="flex gap-6 overflow-x-auto pb-4 no-scrollbar mb-0 select-none cursor-grab lg:cursor-default w-full pl-6 sm:pl-12 lg:pl-[120px] 2xl:pl-[calc((100vw-1440px)/2+120px)] pr-6 sm:pr-12 lg:pr-[120px] 2xl:pr-[calc((100vw-1440px)/2+120px)]"
      >
        {vouchers.map((voucher, idx) => (
          <div key={idx} className="relative w-[300px] h-[135px] sm:w-[440px] sm:h-[160px] md:w-[576px] md:h-[208px] shrink-0 select-none">
            {/* Scalloped cutouts */}
            <span className="absolute left-[-12px] sm:left-[-16px] md:left-[-28px] top-1/2 -translate-y-1/2 w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-full bg-black border-r border-white/5 z-20"></span>
            <span className="absolute right-[-12px] sm:right-[-16px] md:right-[-28px] top-1/2 -translate-y-1/2 w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-full bg-black border-l border-[#1f8eff]/80 z-20"></span>

            {/* Card body — gradient border on sm+, plain on mobile */}
            <div
              className="w-full h-full flex rounded-[12px] sm:rounded-[15px] overflow-hidden"
              style={{
                border: "1.69px solid transparent",
                background: "linear-gradient(#0f0f0f, #0f0f0f) padding-box, linear-gradient(135deg, #1fedf8, #1f8eff) border-box",
                boxShadow: "0 3.83px 5.75px rgba(0,0,0,0.25)"
              }}
            >
              {/* Left: White logo section */}
              <div className="w-[105px] sm:w-[150px] md:w-[200px] bg-white flex items-center justify-center shrink-0 rounded-l-[10px] sm:rounded-l-[14px] overflow-hidden p-3">
                <img
                  src="/nike-logo.jpg"
                  alt="Nike"
                  className="max-h-[50px] sm:max-h-[65px] md:max-h-[85px] max-w-[85%] object-contain"
                />
              </div>

              {/* Dashed separator */}
              <div className="border-l border-dashed border-[#2d2e38] self-stretch z-10" />

              {/* Right: Info section */}
              <div className="flex-1 flex flex-col justify-center px-4 py-3 sm:p-5 min-w-0 rounded-r-[10px] sm:rounded-r-[14px] overflow-hidden">
                {/* Top: discount + brand */}
                <div>
                  {/* Mobile: separate lines | sm+: combined */}
                  <h4 className="text-[20px] sm:text-[24px] md:text-[33px] font-bold text-white leading-tight mb-1 sm:mb-2">
                    <span className="sm:hidden">{voucher.discount}</span>
                    <span className="hidden sm:inline">{voucher.discount} | {voucher.brand}</span>
                  </h4>
                  {/* Brand — mobile only */}
                  <p className="sm:hidden text-[15px] font-medium text-white leading-tight mb-3">{voucher.brand}</p>
                  {/* Description — hidden on mobile */}
                  <p className="hidden sm:block text-[10px] sm:text-[12px] md:text-[14px] text-[#a8a8a8] leading-snug font-light max-w-[299px] line-clamp-2">
                    {voucher.desc}
                  </p>
                  {/* Expiry */}
                  <p className="text-[11px] sm:text-[12px] md:text-[13px] text-zinc-400 font-normal leading-none">
                    {voucher.expiry}
                  </p>
                </div>
                {/* Flags — hidden on mobile */}
                <div className="hidden sm:flex justify-start items-center border-t border-white/5 pt-2 md:pt-2.5 mt-2">
                  <div className="flex gap-1.5 sm:gap-2 text-sm items-center">
                    {voucher.flags.map((f, i) => {
                      if (f === "+") {
                        return <span key={i} className="text-[#eb0f3b] font-extrabold text-[15px] sm:text-[20px] md:text-[26px] px-0.5 sm:px-1 select-none leading-none">+</span>;
                      }
                      const url = getFlagUrl(f);
                      if (url) {
                        return (
                          <img
                            key={i}
                            src={url}
                            alt={f}
                            className="h-[10px] sm:h-[13px] md:h-[16px] w-auto object-contain rounded-[2px] sm:rounded-[3px] md:rounded-[4px] border border-white/20 shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
                          />
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      {/* View All Button — exact Figma specs (Desktop: 362px x 58px, Mobile: 100% x 48px) */}
      <div className="container mx-auto px-6 lg:px-[120px] max-w-[1440px] flex justify-center lg:justify-start w-full mt-6 md:mt-8">
        <a 
          href="#vouchers" 
          className="inline-flex items-center justify-center w-full sm:w-[362px] h-[48px] sm:h-[58px] rounded-full bg-gradient-to-r from-[#1FEDF8] to-[#1F8EFF] border border-[#1FCBFA] font-bold text-black text-[16px] sm:text-[18px] hover:shadow-[0_10px_30px_rgba(0,242,254,0.3)] transition-all hover:scale-105 active:scale-95 duration-200"
        >
          View All
        </a>
      </div>
    </section>
  );
}
