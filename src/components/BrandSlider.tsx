"use client";
import React, { useRef } from "react";
import { Brand } from "@/types";

export default function BrandSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const prevX = useRef(0);
  const velocity = useRef(0);
  const momentumId = useRef<number>(0);

  const brands: Brand[] = [
    { 
      name: "New Balance", 
      cashback: "8%", 
      cardCashback: "16%", 
      logo: <img src="/new_balance.png" alt="New Balance" className="max-h-[36px] lg:max-h-[80px] max-w-full object-contain" /> 
    },
    { 
      name: "Nike", 
      cashback: "8%", 
      cardCashback: "16%", 
      logo: <img src="/nike-logo.jpg" alt="Nike" className="max-h-[36px] lg:max-h-[80px] max-w-full object-contain" /> 
    },
    { 
      name: "C&A", 
      cashback: "8%", 
      cardCashback: "16%", 
      logo: <img src="/C&A_logo.png" alt="C&A" className="max-h-[36px] lg:max-h-[80px] max-w-full object-contain" /> 
    },
    { 
      name: "Converse", 
      cashback: "8%", 
      cardCashback: "16%", 
      logo: <img src="/converse_logo.png" alt="Converse" className="max-h-[36px] lg:max-h-[80px] max-w-full object-contain" /> 
    },
    { 
      name: "JBL", 
      cashback: "8%", 
      cardCashback: "16%", 
      logo: <img src="/JBL-logo.png" alt="JBL" className="max-h-[36px] lg:max-h-[80px] max-w-full object-contain" /> 
    },
    { 
      name: "SeedKitty", 
      cashback: "8%", 
      cardCashback: "16%", 
      logo: (
        <div className="flex flex-col items-center justify-center select-none">
          <img src="/SeedKitty.webp" alt="SeedKitty Logo" className="w-8 h-8 lg:h-[56px] lg:w-auto object-contain lg:mb-1" />
          <img src="/SeedKitty-Logo.PNG" alt="SeedKitty" className="hidden lg:block h-[20px] object-contain" />
        </div>
      )
    },
    { 
      name: "Just Eat", 
      cashback: "8%", 
      cardCashback: "16%", 
      logo: (
        <div className="w-[42px] h-[34px] lg:w-[80px] lg:h-[64px] bg-[#f35c00] flex flex-col items-center justify-center p-1 rounded-[6px] lg:rounded-[12px] select-none shadow-sm">
          <svg viewBox="0 0 100 80" className="w-[20px] h-[15px] lg:w-[48px] lg:h-[36px] fill-white">
            <path d="M50 5 L90 40 L80 40 L80 75 L20 75 L20 40 L10 40 Z" />
            <path d="M40 45 L40 55 M37 45 L37 50 M43 45 L43 50" stroke="#f35c00" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M40 53 L40 68" stroke="#f35c00" strokeWidth="3" strokeLinecap="round" />
            <path d="M60 45 L60 68" stroke="#f35c00" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
          <span className="text-white font-extrabold italic text-[7px] lg:text-[10px] tracking-tight whitespace-nowrap">JUST EAT</span>
        </div>
      )
    },
  ];

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
    // Exponential Moving Average to eliminate drag jitter
    velocity.current = velocity.current * 0.7 + instantV * 0.3;
    prevX.current = currentX;
  };

  return (
    <section id="stores" className="py-[30px] md:py-24 w-full bg-black overflow-hidden">
      {/* Left Aligned Heading Wrapper */}
      <div className="container mx-auto px-6 lg:px-[120px] max-w-[1440px] text-left mb-8 md:mb-12">
        <h2 className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[70px] font-bold tracking-tight mb-4 md:mb-8 leading-[1.05] text-white">
          Shop from +860 Stores
        </h2>
        <p className="text-[#9f9fa3] text-[16px] sm:text-[20px] md:text-[24px] font-normal leading-normal">
          Discover top brands and earn cashback on every purchase.
        </p>
      </div>

      {/* Full-width scrollable cards wrapper */}
      <div className="relative w-full mb-0">
        <div 
          ref={sliderRef} 
          onMouseDown={handleMouseDown} 
          onMouseLeave={handleMouseLeaveOrUp} 
          onMouseUp={handleMouseLeaveOrUp} 
          onMouseMove={handleDrag}
          className="flex gap-4 overflow-x-auto pb-4 select-none no-scrollbar w-full items-start cursor-grab lg:cursor-default pl-6 sm:pl-12 lg:pl-[120px] 2xl:pl-[calc((100vw-1440px)/2+120px)] pr-6 sm:pr-12 lg:pr-[120px] 2xl:pr-[calc((100vw-1440px)/2+120px)]"
        >
          {brands.map((brand, i) => (
            <React.Fragment key={i}>
              {/* Mobile card — exact Figma specs matching screenshot */}
              <div className="lg:hidden w-[224px] h-[168px] shrink-0 p-4 rounded-[20px] overflow-hidden bg-white flex flex-col justify-between shadow-md scroll-item">
                {/* Top: Brand name + OFF + Logo */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[15px] font-medium text-slate-900 leading-tight">{brand.name}</p>
                    <p className="text-[22px] font-bold text-black leading-tight mt-0.5">{brand.cashback} OFF</p>
                  </div>
                  <div className="w-[65px] h-[45px] flex items-center justify-center shrink-0">
                    {brand.logo}
                  </div>
                </div>
                {/* Middle: Available in with border */}
                <div>
                  <span className="inline-block w-full bg-[#F2F2F2] text-[#0F0F0F] text-[12px] font-normal px-3.5 py-1.5 rounded-[10px] text-left">
                    Available in
                  </span>
                </div>
                {/* Bottom: Mastercard cashback */}
                <div className="pt-0.5">
                  <p className="text-[11px] text-slate-700 leading-snug">
                    Get <span className="text-[#00b3ff] font-bold">{brand.cardCashback}</span> Cashback with the Mastercard
                  </p>
                </div>
              </div>

              {/* Desktop card — original style */}
              <div className="hidden lg:flex w-[220px] h-[300px] p-6 rounded-[24px] overflow-hidden bg-white flex-col justify-between shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 scroll-item">
                <div className="flex-1 flex items-center justify-center">
                  {brand.logo}
                </div>
                <div className="flex flex-col gap-3 mt-4 border-t border-slate-100 pt-5">
                  <div className="flex justify-between items-center">
                    <div className="text-[10px] font-bold text-slate-400 tracking-wider">ICEBACK</div>
                    <div className="text-xl font-bold text-slate-500">{brand.cashback}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-[10px] font-bold text-black tracking-wider leading-tight max-w-[120px] text-left">
                      ICEBACK +<br />MASTERCARD
                    </div>
                    <div className="text-xl font-bold text-black">{brand.cardCashback}</div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
          
          {/* View all stores Card (Desktop only) */}
          <a href="#stores" className="hidden lg:flex w-[220px] h-[300px] p-6 rounded-[24px] overflow-hidden bg-[#1e1e20] border border-white/5 flex-col justify-center items-center shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:border-[#00f2fe]/20">
            <span className="text-[20px] font-bold tracking-tight text-white text-center group-hover:text-[#00f2fe] transition-colors leading-snug">
              View all stores
            </span>
            <svg className="w-5 h-5 text-slate-500 group-hover:text-[#00f2fe] transition-colors mt-3 transform group-hover:translate-x-1 duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
      {/* View All Button — exact Figma specs (Desktop: 362px x 58px, Mobile: 100% x 48px) */}
      <div className="container mx-auto px-6 lg:px-[120px] max-w-[1440px] flex justify-center lg:justify-start w-full mt-6 md:mt-8">
        <a 
          href="#stores" 
          className="inline-flex items-center justify-center w-full sm:w-[362px] h-[48px] sm:h-[58px] rounded-full bg-gradient-to-r from-[#1FEDF8] to-[#1F8EFF] border border-[#1FCBFA] font-bold text-black text-[16px] sm:text-[18px] hover:shadow-[0_10px_30px_rgba(0,242,254,0.3)] transition-all hover:scale-105 active:scale-95 duration-200"
        >
          View All
        </a>
      </div>
    </section>
  );
}
