"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "The staff here is incredibly caring and professional. I felt comfortable and supported throughout my visit.",
    name: "Priya Mehra",
  },
  {
    text: "Amazing experience. The doctor explained everything clearly and made me feel relaxed.",
    name: "Anita Kulkarni",
  },
  {
    text: "Highly recommend this clinic. The attention to detail is exceptional.",
    name: "Roshni Verma",
  },
  {
    text: "Very welcoming environment and friendly staff.",
    name: "Sunita Joshi",
  },
  {
    text: "Professional and compassionate care every time.",
    name: "Meera Nair",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="w-full py-14 md:py-20 bg-surface">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-primary-strong mb-10 md:mb-12 px-4">
        Testimonials
      </h2>

      {/* Buttons + Slider row */}
      <div className="flex items-center justify-center gap-3 px-4">

        {/* Prev button */}
        <button
          onClick={prev}
          className="shrink-0 bg-background border border-border rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-surface transition-colors"
        >
          <ChevronLeft size={18} className="text-primary-strong" />
        </button>

        {/* Slider */}
        <div className="overflow-hidden w-full max-w-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-full w-full text-center px-2">
                <p className="text-base md:text-lg text-text-secondary mb-6 leading-relaxed">
                  "{t.text}"
                </p>
                <p className="font-semibold text-sm md:text-base text-text-primary">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={next}
          className="shrink-0 bg-background border border-border rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-surface transition-colors"
        >
          <ChevronRight size={18} className="text-primary-strong" />
        </button>

      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-200 ${
              i === current
                ? "w-3 h-3 bg-primary"
                : "w-2 h-2 bg-border"
            }`}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-8 px-4">
        <button className="px-5 py-2 text-sm md:text-base border border-border text-text-primary rounded-full hover:bg-primary hover:text-background hover:border-primary transition-colors">
          Read More Patient Stories
        </button>
      </div>
    </section>
  );
}