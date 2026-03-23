"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8 py-10 lg:py-16">

        {/* Left: Hero Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/hero-gynec.webp"
            alt="Hero"
            width={600}
            height={500}
            className="rounded-xl shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* Right: Text + Button */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6 text-center lg:text-left items-center lg:items-start">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary ">
            Dedicated to Women's Health
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-playfair text-text-primary font-semibold">
            Providing an Excellent Experience
          </h2>
          <p className="sm:text-lg text-text-primary leading-relaxed max-w-lg">
            Sunshine State Women's Care is committed to providing the highest
            quality care to all our patients. Our friendly, compassionate staff
            ensures comfort and quality care at every visit.
          </p>
          
            <a href="#services"
            className="inline-flex items-center gap-2  hover:bg-secondary/20 px-6 py-3 rounded-lg border-2 border-saddle-brown font-playfair font-semibold hover:text-terracotta-accent hover:border-terracotta-accent hover:-translate-y-0.5 hover:shadow-md hover:gap-4 transition-all duration-200 text-sm sm:text-base"
          >
            Explore our services
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}