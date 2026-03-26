"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    year: 2024,
    text: "Dr. Zann made me feel completely at ease from the very first visit. I had been putting off my annual check-up for years out of anxiety, but her calm and caring approach changed everything. She took the time to answer every question I had without making me feel rushed. I left feeling informed, respected, and genuinely cared for. I will never go anywhere else.",
  },
  {
    name: "Priya K.",
    year: 2023,
    text: "I came to Dr. Zann during my first pregnancy, completely overwhelmed and unsure of what to expect. She and her team walked me through every step with patience and warmth. Every appointment felt reassuring rather than clinical. Thanks to her guidance, I had a smooth and healthy delivery. I recommend her to every woman I know who is expecting.",
  },
  {
    name: "Maria L.",
    year: 2024,
    text: "After years of dealing with painful periods and being dismissed by other doctors, Dr. Zann finally listened. She ran the right tests, gave me a clear diagnosis, and put together a treatment plan that actually worked. Within a few months my quality of life improved dramatically. It means the world to finally have a doctor who takes your concerns seriously.",
  },
  {
    name: "Jennifer R.",
    year: 2022,
    text: "The entire experience at this clinic is just different. From the front desk to the exam room, everything feels warm and professional. Dr. Zann is incredibly knowledgeable but never talks over your head. She explains everything clearly and makes sure you leave with no lingering doubts. Finding a doctor you truly trust is rare, and I am so grateful I found her.",
  },
  {
    name: "Angela T.",
    year: 2023,
    text: "I was nervous about discussing some personal symptoms, but Dr. Zann has a way of making every conversation feel completely normal and safe. She never makes you feel judged or rushed. Her staff is equally wonderful — always friendly and efficient. This clinic has truly set the bar for what women's healthcare should feel like.",
  },
];

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("right");
  const autoRef = useRef(null);
  const total = testimonials.length;

  const goTo = (index, dir) => {
  if (animating) return;
  setDirection(dir);
  setCurrent(index);    
  setAnimating(true); 
  setTimeout(() => {
    setAnimating(false);
  }, 350);
};

  const prev = () => goTo((current - 1 + total) % total, "left");
  const next = () => goTo((current + 1) % total, "right");

  const resetTimer = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => next(), 5000);
  };

  useEffect(() => {
    autoRef.current = setInterval(() => {
      goTo((prev) => (prev + 1) % total, "right");
    }, 5000);
    return () => clearInterval(autoRef.current);
  }, [current]);

  const handlePrev = () => { prev(); resetTimer(); };
  const handleNext = () => { next(); resetTimer(); };

  const t = testimonials[current];

  return (
    <>
      <style>{`
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .slide-right { animation: fadeInRight 0.35s ease forwards; }
        .slide-left  { animation: fadeInLeft  0.35s ease forwards; }
      `}</style>

      <section className="w-full py-20 bg-surface" id = "testimonials">
        <div className="max-w-7xl mx-auto px-8">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-strong mb-2">
              What Our Patients Say
            </h2>
            <p className="text-text-primary text-base">
              Real experiences from women who have trusted us with their care.
            </p>
          </div>

          {/* Slider row — arrow | card | arrow */}
          <div className="flex items-center gap-4">

            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="shrink-0 w-11 h-11 rounded-full border border-border bg-background flex items-center justify-center text-text-primary hover:bg-primary hover:text-background hover:border-primary transition-all duration-200"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Card */}
            <div className="flex-1 overflow-hidden">
              <div
                key={current}
                className={`bg-background border border-border rounded-2xl p-10 sm:p-12 sm:text-center
                  ${animating ? (direction === "right" ? "slide-right" : "slide-left") : ""}`}
              >
                <span className="text-5xl leading-none text-primary font-serif select-none block mb-4">
                  "
                </span>

                <p className="text-xs sm:text-base text-text-primary leading-relaxed mb-8 max-w-3xl mx-auto">
                  {t.text}
                </p>

                <div className="flex flex-col items-center gap-1 pt-6 border-t border-border">
                  <span className="text-sm font-semibold text-primary-strong">
                    {t.name}
                  </span>
                  <span className="text-xs text-text-primary">
                    {t.year}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="shrink-0 w-11 h-11 rounded-full border border-border bg-background flex items-center justify-center text-text-primary hover:bg-primary hover:text-background hover:border-primary transition-all duration-200"
            >
              <ChevronRight size={20} />
            </button>

          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? "right" : "left")}
                className={`rounded-full transition-all duration-300
                  ${i === current ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-border hover:bg-primary"}`}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}