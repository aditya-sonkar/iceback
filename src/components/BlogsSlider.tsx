"use client";
import React, { useRef } from "react";
import { Blog } from "@/types";

export default function BlogsSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const prevX = useRef(0);
  const velocity = useRef(0);
  const momentumId = useRef<number>(0);

  // Data without emojis
  const blogs = [
    { 
      title: "THREE reasons why iceback is worth it!", 
      desc: "Explore how your everyday shopping habits can fund planet-positive projects.", 
      readTime: "3 min read", 
      date: "24 April", 
      tag: "Sustainability", 
      image: "/polar.png"
    },
    { 
      title: "THREE reasons why iceback is worth it!", 
      desc: "Explore how your everyday shopping habits can fund planet-positive projects.", 
      readTime: "3 min read", 
      date: "24 April", 
      tag: "Sustainability", 
      image: "/polar_bear1.png"
    },
    { 
      title: "THREE reasons why iceback is worth it!", 
      desc: "Explore how your everyday shopping habits can fund planet-positive projects.", 
      readTime: "3 min read", 
      date: "24 April", 
      tag: "Sustainability", 
      image: "/polar.png"
    }
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
    <section id="blogs" className="py-[30px] md:pt-28 md:pb-20 w-full bg-black overflow-hidden">
      <div className="container mx-auto px-6 lg:px-[120px] max-w-[1440px] text-left mb-12">
        <h2 className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[70px] font-bold tracking-tight mb-6 md:mb-8 leading-[1.05] text-white">Latest Blogs</h2>
        <p className="text-[#9f9fa3] text-[16px] sm:text-[20px] md:text-[24px] font-normal leading-normal">Discover smarter ways to save and give back.</p>
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
        {blogs.map((blog, idx) => (
          <div 
            key={idx} 
            className="w-[320px] h-[180px] sm:w-[460px] sm:h-[235px] md:w-[590px] md:h-[297px] rounded-[12px] bg-[#1A1A1A] border border-[#2d2e38] py-4 px-5 sm:py-5 sm:px-6 md:py-6 md:px-[28px] overflow-hidden shrink-0 shadow-lg hover:border-zinc-700 transition-all flex flex-col justify-between"
          >
            {/* Top Row: Text and Landscape Image side-by-side */}
            <div className="flex items-center justify-between gap-4 w-full flex-1 min-h-0 pb-2 sm:pb-3">
              {/* Left: Text Content */}
              <div className="flex-1 flex flex-col justify-center min-w-0">
                <h3 className="text-[15px] sm:text-[18px] md:text-[22px] font-medium leading-snug sm:leading-[32px] md:leading-[41px] text-white max-w-[180px] sm:max-w-[220px] md:max-w-[269px] line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-[11px] sm:text-[13px] md:text-[16px] text-slate-400 mt-1 sm:mt-2 line-clamp-2 leading-relaxed">
                  {blog.desc}
                </p>
              </div>

              {/* Right: Landscape Image Thumbnail */}
              <div className="w-[100px] h-[92px] sm:w-[140px] sm:h-[128px] md:w-[180px] md:h-[165px] rounded-[8px] sm:rounded-[10px] md:rounded-[12px] overflow-hidden shrink-0 shadow-inner">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            {/* Full-width Divider Line */}
            <div className="border-t border-[#2d2e38] w-full" />

            {/* Bottom Row: Metadata & Tag Pill */}
            <div className="flex items-center justify-between text-[11px] sm:text-[13.5px] md:text-[16px] text-slate-400 w-full pt-2 sm:pt-3">
              <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3">
                {/* Clock SVG Icon */}
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-[18px] md:h-[18px] text-[#9f9fa3]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="font-bold text-white leading-none md:leading-[20px]">{blog.readTime}</span>
                <span className="text-[#9f9fa3]">•</span>
                {/* Calendar SVG Icon */}
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-[18px] md:h-[18px] text-[#9f9fa3]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="font-bold text-white leading-none md:leading-[20px]">{blog.date}</span>
              </div>
              <span className="w-[110px] h-[34px] sm:w-[130px] sm:h-[40px] md:w-[155px] md:h-[48px] inline-flex items-center justify-center rounded-full bg-[rgba(82,82,82,0.5)] border border-[rgba(40,31,31,0.21)] text-white font-medium text-[11px] sm:text-[12px] md:text-[14px] whitespace-nowrap">
                {blog.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
      </div>
      {/* View All Button — exact Figma specs (Desktop: 362px x 58px, Mobile: 100% x 48px) */}
      <div className="container mx-auto px-6 lg:px-[120px] max-w-[1440px] flex justify-center lg:justify-start w-full mt-6 md:mt-8">
        <a 
          href="#blogs" 
          className="inline-flex items-center justify-center w-full sm:w-[362px] h-[48px] sm:h-[58px] rounded-full bg-gradient-to-r from-[#1FEDF8] to-[#1F8EFF] border border-[#1FCBFA] font-bold text-black text-[16px] sm:text-[18px] hover:shadow-[0_10px_30px_rgba(0,242,254,0.3)] transition-all hover:scale-105 active:scale-95 duration-200"
        >
          View All
        </a>
      </div>
    </section>
  );
}
