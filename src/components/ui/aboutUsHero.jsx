export default function AboutUsHero() {
  return (
    <div className="w-full relative">

      <img
        src="/hero-gynec.webp"
        alt="Clinic"
        className="w-full h-[500px] object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
        <div className="max-w-2xl text-center flex flex-col gap-4">

          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-simple-white">
            About Sunshine State Women's Care
          </h2>

          <p className="text-sm sm:text-base text-simple-white/80 leading-relaxed">
            Located in the heart of Boca Raton, Florida, Sunshine State Women's
            Care has been providing exceptional gynecological care to women for
            over 20 years. Our clinic is built on a foundation of compassion,
            trust, and the latest in women's health technology.
          </p>

          <p className="text-sm sm:text-base text-simple-white/80 leading-relaxed">
            Whether you are coming in for a routine visit or seeking specialized
            care, our team is here to make you feel comfortable, heard, and
            well cared for every single time.
          </p>

        </div>
      </div>

    </div>
  );
}