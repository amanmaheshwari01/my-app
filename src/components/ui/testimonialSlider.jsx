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
  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  return (
    <section className="w-full py-14 md:py-20 bg-white mt-10">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10 md:mb-12 px-4">
        Testimonials
      </h2>

      {/* Buttons + Slider row */}
      <div className="flex items-center justify-center gap-3 px-4">

        {/* Prev button — outside slider */}
        <button
          onClick={prev}
          className="shrink-0 bg-white border rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Slider — overflow hidden here, fixed width */}
        <div className="overflow-hidden w-full max-w-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-full w-full text-center px-2"
              >
                <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                  "{t.text}"
                </p>
                <p className="font-semibold text-sm md:text-base">{t.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Next button — outside slider */}
        <button
          onClick={next}
          className="shrink-0 bg-white border rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow"
        >
          <ChevronRight size={18} />
        </button>

      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-200 ${
              i === current ? "w-3 h-3 bg-black" : "w-2 h-2 bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-8 px-4">
        <button className="px-5 py-2 text-sm md:text-base border rounded-md hover:bg-black hover:text-white transition">
          Read More Patient Stories
        </button>
      </div>
    </section>
  );
}