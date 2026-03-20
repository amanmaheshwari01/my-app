export default function MeetDoctor() {
  return (
    <div className="w-full px-4 py-10 bg-warm-cream">
      <div className="max-w-3xl mx-auto flex flex-col gap-4 text-center">

        <h1 className="text-2xl sm:text-3xl font-bold text-purple-700 leading-snug">
          Meet Dr. Zann
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold leading-snug text-gray-800">
          Board-Certified OB/GYN with Over 20 Years of Experience
        </h2>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-2">
          Dr. Zann has been serving women in the Boca Raton community for over
          two decades. She completed her residency at a top-ranked program and
          is board-certified in Obstetrics and Gynecology. Her approach combines
          the latest medical advancements with a warm, patient-first philosophy —
          ensuring every woman who walks through our doors feels heard, respected,
          and cared for. Whether you are visiting for a routine check-up or
          seeking specialized treatment, Dr. Zann and her team are here for you
          every step of the way.
        </p>

        <div className="mt-6">
          
            <a href="/meet-the-doctor"
            className="inline-block bg-purple-700 text-white px-6 py-2 rounded-lg border-2 border-black text-sm sm:text-base hover:bg-purple-900 transition"
          >
            Learn More About Dr. Zann
          </a>
        </div>

      </div>
    </div>
  );
}