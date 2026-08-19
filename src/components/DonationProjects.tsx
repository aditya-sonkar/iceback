"use client";
import React, { useRef } from "react";
import { Project } from "@/types";

export default function DonationProjects() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const prevX = useRef(0);
  const velocity = useRef(0);
  const momentumId = useRef<number>(0);

  const projects: Project[] = [
    { 
      title: "Plastic-Free Alpine Rivers", 
      metrics: ["♻️ 3,200 kg plastic removed", "🌊 Cleaner lakes & rivers"], 
      image: (
        <img 
          src="/african_wild.png" 
          alt="Plastic-Free Alpine Rivers" 
          className="w-full h-full object-cover select-none" 
        />
      ) 
    },
    { 
      title: "Plastic-Free Alpine Rivers", 
      metrics: ["♻️ 3,200 kg plastic removed", "🌊 Cleaner lakes & rivers"], 
      image: (
        <img 
          src="/climate image.png" 
          alt="Plastic-Free Alpine Rivers" 
          className="w-full h-full object-cover select-none" 
        />
      ) 
    },
    { 
      title: "Plastic-Free Alpine Rivers", 
      metrics: ["♻️ 3,200 kg plastic removed", "🌊 Cleaner lakes & rivers"], 
      image: (
        <img 
          src="/whale_pic.jpg" 
          alt="Plastic-Free Alpine Rivers" 
          className="w-full h-full object-cover select-none" 
        />
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
    velocity.current = velocity.current * 0.7 + instantV * 0.3;
    prevX.current = currentX;
  };

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: dir === "right" ? 420 : -420, behavior: "smooth" });
  };

  return (
    <section id="climate-projects" className="py-[30px] md:py-12 lg:py-18 w-full bg-black overflow-hidden">
      <div className="container mx-auto px-6 lg:px-[120px] max-w-[1440px] text-left mb-12">
        <h2 className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[70px] font-bold tracking-tight mb-6 md:mb-8 leading-[1.05] text-white">Support Climate Projects</h2>
        <p className="text-[#9f9fa3] text-[16px] sm:text-[20px] md:text-[24px] font-normal leading-normal">Turn your cashback into real-world impact by donating to initiatives that protect the planet.</p>
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
        {projects.map((project, idx) => (
          <div key={idx} className="w-[320px] h-[160px] sm:w-[460px] sm:h-[200px] md:w-[580px] md:h-[240px] rounded-[20px] bg-[#1F1E1E] border border-white/5 grid grid-cols-[1.2fr_0.8fr] overflow-hidden shrink-0 shadow-lg select-none">
            <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-between items-start">
              <h3 className="text-[14px] sm:text-[18px] md:text-[22px] font-bold leading-normal text-white">{project.title}</h3>
              <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3 my-1.5 sm:my-2 md:my-3">
                {project.metrics.map((m, i) => (
                  <span 
                    key={i} 
                    className="text-[10px] sm:text-[13px] md:text-[15px] text-slate-300 font-normal flex items-center gap-1.5 sm:gap-2 md:gap-2.5"
                  >
                    {m}
                  </span>
                ))}
              </div>
              <a 
                href="#connect" 
                className="w-[130px] sm:w-[180px] md:w-[240px] py-1.5 sm:py-2.5 md:py-3 rounded-full border border-[#00f2fe] hover:bg-[#00f2fe]/10 text-[#00f2fe] font-bold text-[10px] sm:text-[13px] md:text-[15px] transition-all text-center flex items-center justify-center leading-none"
              >
                Donate
              </a>
            </div>
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              {project.image}
            </div>
          </div>
        ))}
      </div>
      </div>
      {/* View All Button — exact Figma specs (Desktop: 362px x 58px, Mobile: 100% x 48px) */}
      <div className="container mx-auto px-6 lg:px-[120px] max-w-[1440px] flex justify-center lg:justify-start w-full mt-6 md:mt-8">
        <a 
          href="#climate-projects" 
          className="inline-flex items-center justify-center w-full sm:w-[362px] h-[48px] sm:h-[58px] rounded-full bg-gradient-to-r from-[#1FEDF8] to-[#1F8EFF] border border-[#1FCBFA] font-bold text-black text-[16px] sm:text-[18px] hover:shadow-[0_10px_30px_rgba(0,242,254,0.3)] transition-all hover:scale-105 active:scale-95 duration-200"
        >
          View All
        </a>
      </div>
    </section>
  );
}
