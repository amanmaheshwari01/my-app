export default function Philosophy({ index, data }) {
  const isOdd = index % 2 !== 0;

  const textContent = (
    <div
      className={`flex flex-col justify-center gap-4 sm:gap-6 order-1 ${
        isOdd ? "lg:order-2" : "lg:order-1"
      }`}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl wrap-break-word text-primary-strong leading-snug">
        {data?.title || "Our Philosophy"}
      </h1>
      <p className="text-base sm:text-[16px] leading-relaxed text-text-secondary">
        {data?.description || `We believe that every stage of a woman's life deserves specialized...`}
      </p>
    </div>
  );

  const imageContent = (
    <div
      className={`w-full h-full order-2 ${
        isOdd ? "lg:order-1" : "lg:order-2"
      }`}
    >
      <img
        className="w-full h-full object-cover rounded-3xl"
        src={data?.image || `/gynec.jpg`}
        alt={data?.title || "Our Philosophy"}
      />
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mx-auto py-10 lg:py-20 max-w-7xl px-8">
      {textContent}
      {imageContent}
    </div>
  );
}