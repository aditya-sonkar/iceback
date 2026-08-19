"use client";
import React, { useRef } from "react";
import { Testimonial } from "@/types";

interface ExtendedTestimonial extends Testimonial {
  avatar: string;
}

export default function Testimonials() {
  const reviews: ExtendedTestimonial[] = [
    { 
      name: "Sarah M.", 
      location: "Zürich, Switzerland", 
      rating: 5, 
      text: '"I love how easy it is to earn cashback while shopping at my favorite stores. Even better, I get to donate some of it to causes I care about!"',
      avatar: "/sarah_m.jpg" 
    },
    { 
      name: "Sarah M.", 
      location: "Zürich, Switzerland", 
      rating: 5, 
      text: '"Wasn\'t expecting much, but I\'ve already earned over CHF 50 back this month. The Mastercard makes it even better with double cashback!"',
      avatar: "/sarah_image.jpg" 
    },
    { 
      name: "Sarah M.", 
      location: "Zürich, Switzerland", 
      rating: 5, 
      text: '"A wonderful concept. It feels good knowing my everyday shopping supports forest protection without costing me an extra cent."',
      avatar: "/sarah_m.jpg" 
    },
    { 
      name: "Sarah M.", 
      location: "Zürich, Switzerland", 
      rating: 5, 
      text: '"Smooth experience and instant payouts. Turning my routine online orders into climate impact is just brilliant."',
      avatar: "/sarah_m.jpg" 
    },
    { 
      name: "Sarah M.", 
      location: "Zürich, Switzerland", 
      rating: 5, 
      text: '"The cashback rates are great and the app is super slick. Highly recommend to anyone who wants to shop smarter!"',
      avatar: "/sarah_m.jpg" 
    }
  ];

  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("");
  };

  const renderAvatar = (r: ExtendedTestimonial) => {
    if (r.avatar) {
      return (
        <img 
          src={r.avatar} 
          alt={r.name} 
          className="w-full h-full object-cover" 
        />
      );
    }
    return (
      <span className="text-sm font-bold text-white uppercase select-none">
        {getInitials(r.name)}
      </span>
    );
  };

  // Horizontal scroll slider (mobile)
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX - (sliderRef.current?.offsetLeft ?? 0);
    scrollLeftRef.current = sliderRef.current?.scrollLeft ?? 0;
  };
  const handleMouseUp = () => { isDown.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    sliderRef.current.scrollLeft = scrollLeftRef.current - (x - startX.current) * 1.5;
  };

  return (
    <section id="testimonials" className="py-[30px] md:py-20 w-full bg-black md:bg-[#151515] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-[120px] max-w-[1440px]">
        
        {/* Mobile: Title */}
        <div className="md:hidden mb-8">
          <h2 className="text-[32px] sm:text-[48px] font-bold tracking-tight mb-4 leading-tight text-white">
            What Our Users Say
          </h2>
          <p className="text-[#9f9fa3] text-[16px] sm:text-[20px] font-normal leading-normal">
            Real voices. Real savings. Real impact.
          </p>
        </div>

        {/* Mobile: horizontal scroll slider */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="md:hidden flex gap-5 overflow-x-auto no-scrollbar pb-4 cursor-pointer select-none -mx-6 px-6"
        >
          {reviews.map((r, i) => (
            <div key={i} className="w-[300px] shrink-0 bg-[#1A1A1A] p-6 rounded-[16px] border border-white/5 shadow-lg flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-slate-700/80 flex items-center justify-center text-sm font-bold text-white border border-white/10 shrink-0">
                  {renderAvatar(r)}
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-white leading-tight">{r.name}</h4>
                  <p className="text-[11px] text-[#AEA4A4] leading-[18px] mt-0.5">{r.location}</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="w-5 h-5 flex items-center justify-center bg-[#00e676] rounded-[3px] text-white text-[15px] font-bold leading-none">★</span>
                ))}
              </div>
              <p className="text-[13px] text-[#a8a8a8] leading-relaxed font-light">{r.text}</p>
            </div>
          ))}
        </div>

        {/* Desktop: 2-Column Staggered Layout */}
        <div className="hidden md:grid grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Title Block + Card 1 + Card 2 */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start text-left pr-0 md:pr-4">
              <h2 className="text-[32px] sm:text-[48px] md:text-[70px] font-bold tracking-tight mb-6 md:mb-8 leading-tight sm:leading-[56px] md:leading-[84px] text-white max-w-[382px]">
                What Our Users Say
              </h2>
              <p className="text-[#9f9fa3] text-[16px] sm:text-[20px] md:text-[24px] font-normal leading-normal mb-8 max-w-[582px]">
                Real voices. Real savings. Real impact.
              </p>
              <a 
                href="#connect" 
                className="inline-flex items-center justify-center w-full max-w-[320px] md:max-w-[200px] py-3 rounded-full bg-gradient-to-r from-accentCyan to-accentBlue font-extrabold text-[18px] text-black hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                View all
              </a>
            </div>

            {/* Left Card 1 */}
            <div className="w-full bg-[#1A1A1A] p-8 rounded-[16px] border border-white/5 shadow-lg flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-700/80 flex items-center justify-center text-sm font-bold text-white border border-white/10 shrink-0">
                  {renderAvatar(reviews[0])}
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-white leading-tight">{reviews[0].name}</h4>
                  <p className="text-[12px] text-[#AEA4A4] leading-[20px] mt-0.5">{reviews[0].location}</p>
                </div>
              </div>
              
              {/* Star rating squares */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="w-5 h-5 flex items-center justify-center bg-[#00e676] rounded-[3px] text-white text-[15px] font-bold leading-none">
                    ★
                  </span>
                ))}
              </div>
              
              <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#a8a8a8] leading-relaxed font-light">{reviews[0].text}</p>
            </div>

            {/* Left Card 2 */}
            <div className="w-full bg-[#1A1A1A] p-8 rounded-[16px] border border-white/5 shadow-lg flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-700/80 flex items-center justify-center text-sm font-bold text-white border border-white/10 shrink-0">
                  {renderAvatar(reviews[1])}
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-white leading-tight">{reviews[1].name}</h4>
                  <p className="text-[12px] text-[#AEA4A4] leading-[20px] mt-0.5">{reviews[1].location}</p>
                </div>
              </div>
              
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="w-5 h-5 flex items-center justify-center bg-[#00e676] rounded-[3px] text-white text-[15px] font-bold leading-none">
                    ★
                  </span>
                ))}
              </div>
              
              <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#a8a8a8] leading-relaxed font-light">{reviews[1].text}</p>
            </div>
          </div>

          {/* Right Column: Card 3 + Card 4 + Card 5 */}
          <div className="flex flex-col gap-8">
            
            {/* Right Card 3 */}
            <div className="w-full bg-[#1A1A1A] p-8 rounded-[16px] border border-white/5 shadow-lg flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-700/80 flex items-center justify-center text-sm font-bold text-white border border-white/10 shrink-0">
                  {renderAvatar(reviews[2])}
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-white leading-tight">{reviews[2].name}</h4>
                  <p className="text-[12px] text-[#AEA4A4] leading-[20px] mt-0.5">{reviews[2].location}</p>
                </div>
              </div>
              
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="w-5 h-5 flex items-center justify-center bg-[#00e676] rounded-[3px] text-white text-[15px] font-bold leading-none">
                    ★
                  </span>
                ))}
              </div>
              
              <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#a8a8a8] leading-relaxed font-light">{reviews[2].text}</p>
            </div>

            {/* Right Card 4 */}
            <div className="w-full bg-[#1A1A1A] p-8 rounded-[16px] border border-white/5 shadow-lg flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-700/80 flex items-center justify-center text-sm font-bold text-white border border-white/10 shrink-0">
                  {renderAvatar(reviews[3])}
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-white leading-tight">{reviews[3].name}</h4>
                  <p className="text-[12px] text-[#AEA4A4] leading-[20px] mt-0.5">{reviews[3].location}</p>
                </div>
              </div>
              
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="w-5 h-5 flex items-center justify-center bg-[#00e676] rounded-[3px] text-white text-[15px] font-bold leading-none">
                    ★
                  </span>
                ))}
              </div>
              
              <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#a8a8a8] leading-relaxed font-light">{reviews[3].text}</p>
            </div>

            {/* Right Card 5 */}
            <div className="w-full bg-[#1A1A1A] p-8 rounded-[16px] border border-white/5 shadow-lg flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-700/80 flex items-center justify-center text-sm font-bold text-white border border-white/10 shrink-0">
                  {renderAvatar(reviews[4])}
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-white leading-tight">{reviews[4].name}</h4>
                  <p className="text-[12px] text-[#AEA4A4] leading-[20px] mt-0.5">{reviews[4].location}</p>
                </div>
              </div>
              
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="w-5 h-5 flex items-center justify-center bg-[#00e676] rounded-[3px] text-white text-[15px] font-bold leading-none">
                    ★
                  </span>
                ))}
              </div>
              
              <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#a8a8a8] leading-relaxed font-light">{reviews[4].text}</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
