import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhoWeAre from "@/components/WhoWeAre";
import GlobalImpact from "@/components/GlobalImpact";
import BrandSlider from "@/components/BrandSlider";
import PromoBanners from "@/components/PromoBanners";
import VoucherSlider from "@/components/VoucherSlider";
import DonationProjects from "@/components/DonationProjects";
import BlogsSlider from "@/components/BlogsSlider";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhoWeAre />
        <GlobalImpact />
        <BrandSlider />
        <PromoBanners />
        <VoucherSlider />
        <DonationProjects />
        <BlogsSlider />
        <Testimonials />
        <ContactForm />
        <FaqAccordion />
      </main>
      <Footer />
    </>
  );
}
