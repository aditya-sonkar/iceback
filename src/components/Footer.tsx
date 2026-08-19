import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#191919] border-t border-white/5 pt-[30px] pb-12 lg:pt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 container mx-auto px-6 lg:px-[120px] max-w-[1440px] mb-6 lg:mb-28 items-stretch">
        {/* Column 1: Logo */}
        <div className="sm:col-span-2 lg:col-span-6 text-left">
          <a href="#" className="text-[36px] font-bold tracking-tight text-white hover:opacity-90 transition-opacity">
            Money<span className="font-normal text-white">Back</span>
          </a>
        </div>

        {/* Column 2: Services & IceBack */}
        <div className="sm:col-span-1 lg:col-span-3 flex flex-col gap-[46px] text-left">
          <div>
            <h4 className="text-[15px] font-semibold mb-5 text-white">Services</h4>
            <ul className="flex flex-col gap-[16px] text-[14px] text-zinc-400">
              <li><a href="#stores" className="hover:text-white transition-colors">Shops with cashback</a></li>
              <li><a href="#vouchers" className="hover:text-white transition-colors">Special Deals & Vouchers</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How it works</a></li>
              <li><a href="#connect" className="hover:text-white transition-colors">Bring friends to Iceback</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[15px] font-semibold mb-5 text-white">IceBack</h4>
            <ul className="flex flex-col gap-[16px] text-[14px] text-zinc-400">
              <li><a href="#climate-projects" className="hover:text-white transition-colors">Donation projects</a></li>
              <li><a href="#connect" className="hover:text-white transition-colors">Become a partner</a></li>
            </ul>
          </div>
        </div>

        {/* Column 3: About us & Socials */}
        <div className="sm:col-span-1 lg:col-span-3 flex flex-col justify-between h-full text-left">
          <div>
            <h4 className="text-[15px] font-semibold mb-5 text-white">About us</h4>
            <ul className="flex flex-col gap-[16px] text-[14px] text-zinc-400 mb-8">
              <li><a href="#who-we-are" className="hover:text-white transition-colors">Who we are</a></li>
              <li><a href="#blogs" className="hover:text-white transition-colors">Polar bears deserve to have enough ice!</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#connect" className="hover:text-white transition-colors">Bring friends to Iceback</a></li>
            </ul>
          </div>

          {/* Social Icons Row */}
          <div className="flex gap-4 text-zinc-400 mt-auto pt-4 pb-6">
            <a href="#" className="w-9 h-9 rounded-full border border-[#2d2e38] flex items-center justify-center hover:text-white hover:border-zinc-500 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-[#2d2e38] flex items-center justify-center hover:text-white hover:border-zinc-500 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-[#2d2e38] flex items-center justify-center hover:text-white hover:border-zinc-500 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-[#2d2e38] flex items-center justify-center hover:text-white hover:border-zinc-500 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 pt-4 lg:pt-7 container mx-auto px-6 lg:px-[120px] max-w-[1440px] text-[10px] text-[#B2B2B8] leading-relaxed text-left">
        <p>&copy; 2025 ICEBack. All content, images, graphics, logos, designs, and text on this website are the property of ICEBack and are protected by copyright laws. Unauthorized use, reproduction, or distribution of any content on this site is strictly prohibited. All rights reserved.</p>
      </div>
    </footer>
  );
}
