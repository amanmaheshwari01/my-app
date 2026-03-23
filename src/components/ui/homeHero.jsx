"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  { image: "/homeHeroImage1.jpg" },
  { image: "/homeHeroImage2.jpg" },
  { image: "/homeHeroImage3.jpg" },
  { image: "/homeHeroImage4.jpg" }
];

const INTERVAL = 3500;
const TRANSITION = 300;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const isTransitioning = useRef(false);
  const timerRef = useRef(null);

  const goTo = useCallback((getNext) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setCurrent((prev) => (typeof getNext === "function" ? getNext(prev) : getNext));
    setTimeout(() => {
      isTransitioning.current = false;
    }, TRANSITION);
  }, []);

  // Start / restart the auto-advance timer
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      goTo((prev) => (prev + 1) % slides.length);
    }, INTERVAL);
  }, [goTo]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const prev = () => {
    goTo((prev) => (prev - 1 + slides.length) % slides.length);
    startTimer(); // reset timer on manual click
  };

  const next = () => {
    goTo((prev) => (prev + 1) % slides.length);
    startTimer(); // reset timer on manual click
  };

  const handleDot = (index) => {
    goTo(index);
    startTimer(); // reset timer on manual click
  };

  return (
    <section className="relative w-full h-145 overflow-hidden">

      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{ transition: `opacity ${TRANSITION}ms cubic-bezier(0.4, 0, 0.2, 1)` }}
          className={`absolute inset-0 ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={slide.image}
            alt="Sunshine State Women's Care"
            className="w-full h-full object-cover"
            style={{
              transition: `transform ${INTERVAL}ms cubic-bezier(0.4, 0, 0.2, 1)`,
              transform: index === current ? "scale(1)" : "scale(1.05)",
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Title */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <h1
          className="text-white text-4xl sm:text-5xl lg:text-6xl font-playfair font-semibold tracking-wide text-center px-4"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
        >
          Dedicated to Women's Health & Wellness
        </h1>
      </div>

      {/* Prev / Next Buttons */}
      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-white/15 backdrop-blur-md border border-white/25 p-3 rounded-full hover:bg-white hover:text-primary transition-all duration-300 text-white"
      >
        <ArrowLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-white/15 backdrop-blur-md border border-white/25 p-3 rounded-full hover:bg-white hover:text-primary transition-all duration-300 text-white"
      >
        <ArrowRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDot(index)}
            style={{ transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)" }}
            className={`h-[3px] rounded-full ${
              index === current ? "bg-white w-8" : "bg-white/40 w-4"
            }`}
          />
        ))}
      </div>

    </section>
  );
}