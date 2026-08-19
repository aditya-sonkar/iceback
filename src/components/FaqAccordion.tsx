"use client";
import React, { useState } from "react";
import { FaqItem } from "@/types";

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    { 
      question: "Do i have to pay something for the iceback shop?", 
      answer: "No, the iceback cashback platform is 100% free of charge for users. We get paid commissions by our partner brands for directing traffic to their stores." 
    },
    { 
      question: "What should i know about cashback", 
      answer: "As soon as you made your purchase, we will wait until the return period has expired and then the shop will credit the money to your account. With one click on your amount you can donate your cashback or pay it out directly." 
    },
    { 
      question: "How should i order a prepaid iceback Mastercard", 
      answer: "You can request your prepaid iceback Mastercard directly inside your user portal after logging in. There are no annual fees and it offers double cashback benefits." 
    },
    { 
      question: "How do i order on iceback from my favourite shop?", 
      answer: "Simply search for your favorite store on our platform, click on the shop link to activate cashback, and shop normally. We will track and credit your cashback automatically." 
    }
  ];

  return (
    <section id="faq" className="py-[30px] md:py-20 w-full bg-black overflow-hidden">
      <div className="container mx-auto px-6 lg:px-[120px] max-w-[1440px]">
        {/* Header */}
        <div className="text-left mb-8 lg:mb-12">
          <h2 className="text-[32px] sm:text-[48px] md:text-[70px] font-bold tracking-tight mb-3 md:mb-6 leading-tight text-white">
            FAQS
          </h2>
          <p className="text-[#9f9fa3] text-[16px] sm:text-[20px] md:text-[24px] font-normal leading-normal">
            Everything you need to know, all in one place.
          </p>
        </div>
        
        {/* Accordion Container: Cards on Mobile (< md), Original Lines on Desktop (md+) */}
        <div className="w-full flex flex-col gap-3.5 md:gap-0 md:border-t md:border-[#2d2e38]">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="w-full rounded-[16px] md:rounded-none bg-[#1C1C1C] md:bg-transparent border border-white/5 md:border-0 md:border-b md:border-[#2d2e38] px-6 md:px-0 py-4.5 md:py-8 shadow-sm md:shadow-none transition-all duration-200 hover:bg-[#222222] md:hover:bg-transparent"
            >
              <div 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)} 
                className="flex justify-between items-center cursor-pointer gap-4 hover:text-accentCyan transition-colors"
              >
                <h3 className="text-[15px] md:text-[22px] font-normal md:font-bold text-white leading-snug">
                  {faq.question}
                </h3>
                <svg 
                  className={`w-5 h-5 md:w-6 md:h-6 text-white/80 md:text-[#9f9fa3] transform transition-transform duration-300 shrink-0 ${activeIndex === i ? "rotate-180 text-accentCyan" : ""}`} 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              
              <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${activeIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="text-[#9f9fa3] text-[14px] md:text-[18px] leading-relaxed max-w-[1100px] pt-3 md:pt-5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
