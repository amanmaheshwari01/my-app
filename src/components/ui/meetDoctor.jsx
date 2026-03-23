export default function MeetDoctor() {
  return (
    <section className="w-full bg-surface py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-16">

        {/* Image */}
        <div className="w-full md:w-2/5 lg:w-1/2 flex-shrink-0">
          <img
            src="/Dr.Pratishtha.jpg"
            alt="Dr. Zann"
            className="w-full h-[420px] md:h-[520px] object-cover object-top rounded-2xl shadow-md"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-3/5 lg:w-1/2 flex flex-col gap-5 text-left">

          <h1 className="text-3xl sm:text-4xl font-bold text-primary-strong leading-tight">
            Meet Dr. Zann
          </h1>

          <h2 className="text-lg sm:text-xl font-semibold text-text-primary leading-snug">
            Board-Certified OB/GYN with Over 20 Years of Experience
          </h2>

          <div className="w-12 h-0.5 bg-primary rounded-full" />

          <p className="text-sm sm:text-base text-text-primary leading-relaxed">
            Dr. Zann has been serving women in the Boca Raton community for over
            two decades. She completed her residency at a top-ranked program and
            is board-certified in Obstetrics and Gynecology. Her approach combines
            the latest medical advancements with a warm, patient-first philosophy —
            ensuring every woman who walks through our doors feels heard, respected,
            and cared for. Whether you are visiting for a routine check-up or
            seeking specialized treatment, Dr. Zann and her team are here for you
            every step of the way.
          </p>

          <a
            href="/about"
            className="self-start mt-2 inline-block bg-primary text-background px-7 py-2.5 rounded-full border border-border text-sm sm:text-base hover:bg-primary-strong transition-colors"
          >
            Learn More About Dr. Zann
          </a>

        </div>
      </div>
    </section>
  );
}