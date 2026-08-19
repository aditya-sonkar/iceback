import React from "react";

export interface Brand {
  name: string;
  cashback: string;
  cardCashback: string;
  logo: React.ReactNode;
}

export interface Voucher {
  id: number;
  brand: string;
  discount: string;
  desc: string;
  expiry: string;
  flags: string[];
}

export interface Project {
  title: string;
  metrics: string[];
  image: React.ReactNode;
}

export interface Blog {
  title: string;
  desc: string;
  readTime: string;
  date: string;
  tag: string;
  image: React.ReactNode;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
