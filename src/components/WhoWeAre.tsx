"use client";
import React, { useRef } from "react";
import { BookOpen, ShoppingBag, Sparkles } from "lucide-react";

export default function WhoWeAre() {
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
    <section id="who-we-are" className="w-full bg-black lg:bg-[#151515] py-[30px] lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 lg:px-[120px]">
        {/* Left Aligned Heading & Sub-heading */}
        <div className="text-left mb-8 lg:mb-12">
          <h2 className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[70px] font-bold tracking-tight mb-4 lg:mb-8 leading-[1.05] text-white">
            Who We Are
          </h2>
          <p className="text-white text-[16px] sm:text-[20px] md:text-[24px] font-normal leading-normal lg:leading-[55px] max-w-[1198px]">
            Learn how ICEBack turns your spending into sustainable impact.
          </p>
        </div>

        {/* Mobile Layout (< lg): Top Full Width Tree Card + Horizontal Scroll 3 Text Cards */}
        <div className="lg:hidden flex flex-col gap-5">
          {/* Top: Full width Tree Illustration Banner Card */}
          <div className="relative rounded-[16px] overflow-hidden bg-[#294535] border border-white/5 h-[180px] sm:h-[220px] shadow-lg flex items-end justify-center">
            {/* Background Hill Arc: Lowered below clouds */}
            <div className="absolute bottom-[-280px] sm:bottom-[-330px] w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] rounded-full bg-[#365744] z-0 pointer-events-none left-1/2 -translate-x-1/2" />
            <img 
              src="/earth_tree.png" 
              alt="Earth and Trees Illustration" 
              className="absolute -bottom-[55px] sm:-bottom-[65px] left-1/2 -translate-x-1/2 w-auto max-h-[110%] object-contain object-bottom select-none pointer-events-none z-10"
            />
          </div>

          {/* Bottom: Horizontal Drag-Scroll Cards Slider (3 Text Cards) */}
          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-4 overflow-x-auto no-scrollbar pb-3 cursor-pointer select-none -mx-6 px-6"
          >
            {/* Card 1: Our Story */}
            <div className="w-[270px] shrink-0 p-6 rounded-[16px] bg-[#1F1E1E] border border-white/5 shadow-md flex flex-col justify-start">
              <h3 className="text-[20px] font-bold text-white mb-2">Our Story</h3>
              <p className="text-[#9f9fa3] text-[14px] leading-relaxed">
                We're a group of developers and dreamers building ICEBack — a platform where everyday shopping meets climate action.
              </p>
            </div>

            {/* Card 2: Shop & Earn */}
            <div className="w-[270px] shrink-0 p-6 rounded-[16px] bg-[#1F1E1E] border border-white/5 shadow-md flex flex-col justify-start">
              <h3 className="text-[20px] font-bold text-white mb-2">Shop & Earn</h3>
              <p className="text-[#9f9fa3] text-[14px] leading-relaxed">
                Buy from top brands and earn cashback on every order — no strings attached. Then you choose what happens next.
              </p>
            </div>

            {/* Card 3: Make an Impact */}
            <div className="w-[270px] shrink-0 p-6 rounded-[16px] bg-[#1F1E1E] border border-white/5 shadow-md flex flex-col justify-start">
              <h3 className="text-[20px] font-bold text-white mb-2">Make an Impact</h3>
              <p className="text-[#9f9fa3] text-[14px] leading-relaxed">
                Keep the money in your pocket or donate it to verified climate projects. Your Money. Your Impact.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout (lg+): Exact Figma Inspector Specs (Height: 316px, Radius: 12px, Padding: 30px top/bottom, 24px left/right, Gap: 24px) */}
        <div className="hidden lg:grid grid-cols-4 gap-[24px] items-stretch">
          {/* Tree Illustration Card (Figma Bg: #294535, Radius: 12px, Height: 316px) */}
          <div className="relative rounded-[12px] overflow-hidden bg-[#294535] border border-white/5 h-[316px] shadow-lg flex items-end justify-center">
            {/* Background Hill Arc */}
            <div className="absolute bottom-[-200px] w-[400px] h-[400px] rounded-full bg-[#365744] z-0 pointer-events-none left-1/2 -translate-x-1/2" />
            <img 
              src="/earth_tree.png" 
              alt="Earth and Trees Illustration" 
              className="absolute -bottom-[65px] left-1/2 -translate-x-1/2 w-[125%] max-w-none h-auto object-contain object-bottom select-none pointer-events-none z-10"
            />
          </div>

          {/* Column 2: Story Card */}
          <div className="h-[316px] px-[24px] py-[30px] rounded-[12px] bg-[#1F1E1E] border border-white/5 transition-all duration-300 hover:border-zinc-700 flex flex-col justify-start">
            <BookOpen className="w-7 h-7 text-[#00f2fe] mb-8" />
            <h3 className="text-[20px] font-bold text-white mb-3">Our Story</h3>
            <p className="text-[#9f9fa3] text-[14px] leading-[22px]">
              We're a group of developers and dreamers building ICEBack — a platform where everyday shopping meets climate action.
            </p>
          </div>

          {/* Column 3: Shop Card */}
          <div className="h-[316px] px-[24px] py-[30px] rounded-[12px] bg-[#1F1E1E] border border-white/5 transition-all duration-300 hover:border-zinc-700 flex flex-col justify-start">
            <ShoppingBag className="w-7 h-7 text-[#00f2fe] mb-8" />
            <h3 className="text-[20px] font-bold text-white mb-3">Shop & Earn</h3>
            <p className="text-[#9f9fa3] text-[14px] leading-[22px]">
              Buy from top brands and earn cashback on every order — no strings attached. Then you choose what happens next.
            </p>
          </div>

          {/* Column 4: Impact Card */}
          <div className="h-[316px] px-[24px] py-[30px] rounded-[12px] bg-[#1F1E1E] border border-white/5 transition-all duration-300 hover:border-zinc-700 flex flex-col justify-start">
            <Sparkles className="w-7 h-7 text-[#00f2fe] mb-8" />
            <h3 className="text-[20px] font-bold text-white mb-3">Make an Impact</h3>
            <p className="text-[#9f9fa3] text-[14px] leading-[22px]">
              Keep the money in your pocket or donate it to verified climate projects. Your Money. Your Impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
