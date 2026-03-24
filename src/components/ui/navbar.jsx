"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const router = useRouter();

  return (
    /* OUTER WRAPPER: Spans 100% of the screen */
    <header className="w-full bg-background shadow-sm sticky top-0 z-50 border-b border-border">
      
      {/* INNER CONTAINER: Perfectly centered with max-w-7xl */}
      <div className="flex items-center justify-between px-3 sm:px-5 md:px-8 lg:px-10 py-3 max-w-7xl mx-auto w-full gap-4">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary leading-none shrink-0">
          <Link href="/" className="transition-colors hover:text-primary-strong">
            Clinic
          </Link>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden min-[540px]:flex items-center gap-4 sm:gap-5 md:gap-7 lg:gap-9 flex-1 justify-center">
          <Link
            href="/"
            className="text-text-secondary hover:text-text-primary text-xs sm:text-sm md:text-base whitespace-nowrap transition-colors font-medium"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-text-secondary hover:text-text-primary text-xs sm:text-sm md:text-base whitespace-nowrap transition-colors font-medium"
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-text-secondary hover:text-text-primary text-xs sm:text-sm md:text-base whitespace-nowrap transition-colors font-medium">
              Services
              <ChevronDown
                size={13}
                className="transition-transform duration-200 group-hover:rotate-180 in"
              />
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-44 bg-background shadow-md rounded-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="flex flex-col p-2 gap-1">
                <Link
                  href="/services/pregnancyCare"
                  className="px-3 py-2 rounded-md text-text-secondary hover:bg-secondary/10 hover:text-text-primary text-xs sm:text-sm transition-colors"
                >
                  Pregnancy Care
                </Link>
                <Link
                  href="/services/fertility"
                  className="px-3 py-2 rounded-md text-text-secondary hover:bg-secondary/10 hover:text-text-primary text-xs sm:text-sm transition-colors"
                >
                  Fertility
                </Link>
                <Link
                  href="/services/prenatalCare"
                  className="px-3 py-2 rounded-md text-text-secondary hover:bg-secondary/10 hover:text-text-primary text-xs sm:text-sm transition-colors"
                >
                  Prenatal Care
                </Link>
                <Link
                  href="/services/menstrual-hormonal-issues"
                  className="px-3 py-2 rounded-md text-text-secondary hover:bg-secondary/10 hover:text-text-primary text-xs sm:text-sm transition-colors"
                >
                  Menstrual and Hormonal Issues
                </Link>
                
              </div>
            </div>
          </div>

          <Link
            href="/contactUs"
            className="text-text-secondary hover:text-text-primary text-xs sm:text-sm md:text-base whitespace-nowrap transition-colors font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <a href = "/#get">
        <button 
          className="hidden min-[540px]:block shrink-0 bg-primary hover:bg-primary-strong text-background px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap font-medium cursor-pointer"
        >
          Book Appointment
        </button>
        </a>

        {/* Hamburger */}
        <button 
          className="min-[540px]:hidden text-primary-strong p-1 shrink-0"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`min-[540px]:hidden overflow-hidden transition-all duration-300 ease-in-out w-full ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Added max-w-7xl mx-auto w-full here to align mobile links with the logo padding */}
        <div className="flex flex-col px-4 pb-5 gap-1 border-t border-border bg-surface max-w-7xl mx-auto w-full">
          <Link
            href="/"
            className="pt-4 pb-2 text-base text-text-primary hover:text-primary transition-colors border-b border-border font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/about"
            className="py-2 text-base text-text-primary hover:text-primary transition-colors border-b border-border font-medium"
            onClick={() => setMobileOpen(false)}
          >
            About Page
          </Link>

          {/* Services Accordion */}
          <div className="border-b border-border">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full py-2 text-base text-text-primary hover:text-primary transition-colors font-medium"
            >
              Services
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 text-primary ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                servicesOpen ? "max-h-40 mb-2" : "max-h-0"
              }`}
            >
              <div className="flex flex-col gap-1 pl-4 border-l-2 border-primary ml-1">
                <Link
                  href="/services/pregnancyCare"
                  className="py-1.5 text-sm text-text-secondary hover:text-primary-strong transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Pregnancy Care
                </Link>
                <Link
                  href="/services/fertility"
                  className="py-1.5 text-sm text-text-secondary hover:text-primary-strong transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Fertility
                </Link>
                <Link
                  href="/services/prenatalCare"
                  className="py-1.5 text-sm text-text-secondary hover:text-primary-strong transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Prenatal Care
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/contactUs"
            className="py-2 text-base text-text-primary hover:text-primary transition-colors border-b border-border font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>

          <button className="bg-primary text-background px-4 py-2.5 rounded-full w-full mt-3 hover:bg-primary-strong transition-colors text-sm font-medium">
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
}