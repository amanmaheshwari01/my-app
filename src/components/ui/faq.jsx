"use client";
import { useState } from "react";

export default function FAQ({ data }) {
  const [open, setOpen] = useState(null);

  return (
    <section className="w-full flex flex-col items-center justify-center py-14">

      {/* Heading */}
      <div className="w-full max-w-7xl mx-auto px-4 text-center mb-10">
        <p className="text-xs tracking-[0.25em] uppercase font-semibold text-primary mb-2">
          Frequently Asked Questions
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-primary-strong leading-tight">
          FAQs
        </h2>
        {/* Decorative rule */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-border block" />
          <span className="w-2 h-2 rounded-full bg-primary block" />
          <span className="h-px w-16 bg-border block" />
        </div>
      </div>

      {/* Two-column body */}
      <div className="w-full max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* Left — Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center shrink-0">
          <div className="relative w-64 h-64 md:w-full md:h-auto rounded-3xl overflow-hidden shadow-md">
            <img
              src="/questionMark.webp"
              alt="FAQ illustration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
          </div>
        </div>

        {/* Right — Accordion */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-col gap-3">
            {data?.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-primary bg-background shadow-sm"
                      : "border-border bg-background hover:border-primary hover:bg-surface"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-sm font-semibold transition-colors ${
                        isOpen ? "text-text-primary" : "text-text-primary"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-base font-bold transition-all duration-300 pb-1 ${
                        isOpen
                          ? "bg-primary text-background rotate-45"
                          : "bg-surface text-primary group-hover:bg-primary group-hover:text-background"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-5 pb-5 text-sm text-text-primary leading-relaxed border-t border-border pt-3">
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