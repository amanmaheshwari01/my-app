"use client";

export default function MeetDoctor({ name, title, description, imageSrc, imageAlt, buttonLabel, buttonHref }) {
  return (
    <section className="w-full bg-surface py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-16 px-8">

        <div className="w-full md:w-2/5 lg:w-1/2 flex-shrink-0">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-[420px] md:h-[520px] object-cover object-top rounded-2xl shadow-md"
          />
        </div>

        <div className="w-full md:w-3/5 lg:w-1/2 flex flex-col gap-5 text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-strong leading-tight">{name}</h1>
          <h2 className="text-lg sm:text-xl font-semibold text-text-primary leading-snug">{title}</h2>
          <div className="w-12 h-0.5 bg-primary rounded-full" />
          <p className="text-sm sm:text-base text-text-primary leading-relaxed">{description}</p>
          {buttonLabel && buttonHref && (
            <a
              href={buttonHref}
              className="self-start mt-2 inline-block bg-primary text-background px-7 py-2.5 rounded-full border border-border text-sm sm:text-base hover:bg-primary-strong transition-colors"
            >
              {buttonLabel}
            </a>
          )}
        </div>

      </div>
    </section>
  );
}