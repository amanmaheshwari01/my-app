"use client";
import { useState, useRef, useId, useEffect, useCallback } from "react";

const Slide = ({ slide, index, current, handleSlideClick }) => {
  const slideRef = useRef(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      slideRef.current.style.setProperty("--x", `${xRef.current}px`);
      slideRef.current.style.setProperty("--y", `${yRef.current}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { src, title } = slide;
  const isActive = current === index;

  return (
    <div className="perspective-distant transform-3d">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center transition-all duration-300 ease-in-out w-[52vmin] h-[52vmin] mx-[3vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isActive
            ? "scale(1) rotateX(0deg)"
            : "scale(0.92) rotateX(10deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
          cursor: isActive ? "default" : "pointer",
        }}
      >
        {/* Card */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
          style={{
            transform: isActive
              ? "translate3d(calc(var(--x) / 25), calc(var(--y) / 25), 0)"
              : "none",
            transition: "box-shadow 0.3s ease",
            boxShadow: isActive
              ? "0 32px 64px rgba(0,0,0,0.4)"
              : "0 8px 24px rgba(0,0,0,0.2)",
          }}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: isActive ? 1 : 0.45,
              filter: isActive ? "none" : "grayscale(30%)",
              transition: "opacity 0.6s ease, filter 0.6s ease",
              transform: "scale(1.08)",
            }}
            alt={title}
            src={src}
            loading="eager"
            decoding="sync"
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: isActive
                ? "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)"
                : "rgba(0,0,0,0.15)",
              transition: "background 0.5s ease",
            }}
          />

          {/* Title */}
          <article
            className="absolute bottom-0 left-0 right-0 p-[3vmin]"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            <h2 className="text-base md:text-xl lg:text-2xl font-semibold text-white tracking-wide drop-shadow-lg">
              {title}
            </h2>
          </article>
        </div>
      </li>
    </div>
  );
};

const Arrow = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
    className="group w-10 h-10 flex items-center justify-center rounded-full border border-border bg-surface shadow-sm
      hover:bg-primary hover:border-primary hover:shadow-md
      active:scale-95
      disabled:opacity-30 disabled:cursor-not-allowed
      focus:outline-none focus:ring-2 focus:ring-primary
      transition-all duration-200"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary-strong group-hover:text-background transition-colors duration-200"
      style={{ transform: direction === "prev" ? "rotate(180deg)" : "none" }}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  </button>
);

export default function Carousel({ slides }) {
  const extendedSlides = [
    slides[slides.length - 1],
    ...slides, ...slides, ...slides, ...slides, ...slides,
    ...slides, ...slides, ...slides, ...slides, ...slides, ...slides,
    slides[0],
  ];

  const [current, setCurrent] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    if (!isTransitioning) {
      const id = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(id);
    }
  }, [isTransitioning]);

  const handleTransitionEnd = () => {
    isAnimatingRef.current = false;
    if (current === extendedSlides.length - 1) {
      setIsTransitioning(false);
      setCurrent(1);
    } else if (current === 0) {
      setIsTransitioning(false);
      setCurrent(slides.length);
    }
  };

  const navigate = useCallback((dir) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsTransitioning(true);
    setCurrent((prev) => prev + dir);
  }, []);

  const handleSlideClick = useCallback((index) => {
    if (current !== index && !isAnimatingRef.current) {
      isAnimatingRef.current = true;
      setIsTransitioning(true);
      setCurrent(index);
    }
  }, [current]);

  const id = useId();

  return (
    // FIX: flex column layout — slide on top, controls below, no overlap
    <div className="flex flex-col items-center gap-5 py-4 w-full">

      {/* Slide viewport */}
      <div
        className="relative w-[52vmin] h-[52vmin]"
        aria-labelledby={`carousel-heading-${id}`}
      >
        <ul
          className="absolute flex mx-[-3vmin]"
          style={{
            transform: `translateX(calc(${current} * -58vmin))`,
            transition: isTransitioning
              ? "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((slide, index) => (
            <Slide
              key={index}
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={handleSlideClick}
            />
          ))}
        </ul>
      </div>

      {/* Controls — always below the slide, never overlaps */}
      <div className="flex items-center justify-center gap-2 w-full">
        <Arrow direction="prev" onClick={() => navigate(-1)} />

        {/* Dot indicators */}
        <div className="flex items-center gap-1.5 mx-1">
          {slides.map((_, i) => {
            const activeDot =
              ((current - 1) % slides.length + slides.length) % slides.length;
            return (
              <button
                key={i}
                onClick={() =>
                  !isAnimatingRef.current && handleSlideClick(i + 1)
                }
                className="rounded-full transition-all duration-300 focus:outline-none"
                style={{
                  width: activeDot === i ? "20px" : "6px",
                  height: "6px",
                  background:
                    activeDot === i
                      ? "var(--color-primary, #6366f1)"
                      : "var(--color-border, #d1d5db)",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            );
          })}
        </div>

        <Arrow direction="next" onClick={() => navigate(1)} />
      </div>
    </div>
  );
}