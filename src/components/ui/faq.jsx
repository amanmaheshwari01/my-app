"use client";
import { useState } from "react";

export default function FAQ({ data }) {
  const [open, setOpen] = useState(null);

  return (
    <section className="w-full flex flex-col items-center justify-center bg-[#fdf8f3] py-22">

      {/* ── CENTRAL HEADING ── */}
      <div className="w-full max-w-7xl mx-auto px-4 text-center mb-10">
        <p className="text-xs tracking-[0.25em] uppercase font-semibold text-[#c8522a] mb-2">
          Frequently Asked Questions
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold text-[#7b3a10] leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          FAQs
        </h2>
        {/* decorative rule */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-[#c8522a]/30 block" />
          <span className="w-2 h-2 rounded-full bg-[#c8522a]/60 block" />
          <span className="h-px w-16 bg-[#c8522a]/30 block" />
        </div>
      </div>

      {/* ── TWO-COLUMN BODY ── */}
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* LEFT — Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center flex-shrink-0">
          <div className="relative w-64 h-64 md:w-full md:h-auto rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/questionMark.webp"
              alt="FAQ illustration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#c8522a]/10 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* RIGHT — Accordion */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-col gap-3">
            {data?.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#c8522a] bg-white shadow-md"
                      : "border-[#e8d9cb] bg-white/70 hover:border-[#c8522a]/50 hover:bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-sm font-semibold transition-colors ${
                        isOpen ? "text-[#c8522a]" : "text-[#5a3010]"
                      }`}
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-base font-bold transition-all duration-300 ${
                        isOpen
                          ? "bg-[#c8522a] text-white rotate-45"
                          : "bg-[#f0e5da] text-[#c8522a] group-hover:bg-[#c8522a]/20"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <p className="px-5 pb-5 text-sm text-[#7a5540] leading-relaxed border-t border-[#f0e5da] pt-3">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}