"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="bg-warm-cream shadow-md">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        
        {/* Logo */}
        <h1 className="text-5xl font-bold text-classy-red/80"
        >
           <Link href="/" className="hover:text-classy-red/80 text-xl">
            Clinic
          </Link>
          </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-classy-red/80 text-xl">
            Home
          </Link>
          <Link href="/about" className="hover:text-classy-red/80 text-xl">
            About Page
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-classy-red/80 text-xl">
              Services
              <ChevronDown size={18} className="transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-white shadow-lg rounded-lg border border-classy-red/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="flex flex-col p-2 gap-1">
                <Link href="/services/pregnancy-care" className="hover:text-classy-red/80 text-lg px-3 py-2 rounded-md hover:bg-classy-red/10">
                  Pregnancy Care
                </Link>
                <Link href="/services/fertility" className="hover:text-classy-red/80 text-lg px-3 py-2 rounded-md hover:bg-classy-red/10">
                  Fertility
                </Link>
                <Link href="/services/parentalCare" className="hover:text-classy-red/80 text-lg px-3 py-2 rounded-md hover:bg-classy-red/10">
                  Parental Care
                </Link>
              </div>
            </div>
          </div>

          <Link href="/contactUs" className="hover:text-classy-red/80 text-xl">
            Contact Us
          </Link>
        </nav>

        {/* Desktop Book button */}
        <button className="hidden md:block bg-classy-red/80 text-simple-white px-4 py-2 rounded-lg hover:bg-classy-red transition cursor-pointer">
          Book Appointment
        </button>

        {/* Mobile hamburger */}
        <button className="md:hidden text-classy-red/80" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col px-6 pb-6 gap-4 border-t border-classy-red/20">
          <Link href="/" className="hover:text-classy-red/80 pt-4">
            Home
          </Link>
          <Link href="/about" className="hover:text-classy-red/80">
            About Page
          </Link>

          {/* Services accordion */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 hover:text-classy-red/80 w-full text-left"
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div className="flex flex-col gap-2 mt-2 pl-4 border-l border-classy-red/20">
                <Link href="/services/pregnancy-care" className="hover:text-classy-red/80 text-sm">
                  Pregnancy Care
                </Link>
                <Link href="/services/fertility" className="hover:text-classy-red/80 text-sm">
                  Fertility
                </Link>
                <Link href="/services/parentalCare" className="hover:text-classy-red/80 text-sm">
                  Parental Care
                </Link>
              </div>
            )}
          </div>

          <Link href="/contactUs" className="hover:text-classy-red/80">
            Contact Us
          </Link>

          <button className="bg-classy-red/80 text-simple-white px-4 py-2 rounded-lg hover:bg-classy-red transition w-full mt-2">
            Book Appointment
          </button>
        </div>
      )}
    </div>
  );
}