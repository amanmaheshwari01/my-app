export default function Philosophy({ index, data }) {
  const isOdd = index % 2 !== 0;

  const textContent = (
    <div className="flex flex-col justify-center gap-4 sm:gap-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl break-words text-primary-strong leading-snug">
        {data?.title || "Our Philosophy"}
      </h1>
      <p className="text-base sm:text-lg leading-relaxed text-text-secondary">
        {data?.description || `We believe that every stage of a woman's life deserves specialized,
        attentive care—from adolescence to motherhood and beyond. Our philosophy
        is rooted in listening first, understanding deeply, and treating each patient
        as an individual, not just a condition.
        We are committed to combining clinical excellence with genuine compassion,
        ensuring that every woman feels safe, heard, and supported in her healthcare
        journey. By promoting education, early detection, and preventive practices,
        we aim to empower women to make confident, informed decisions about their bodies
        and their future.`}
      </p>
    </div>
  );

  const imageContent = (
    <div className="w-full h-full">
      <img
        className="w-full h-full object-cover rounded-3xl"
        src={data?.image || `/gynec.jpg`}
        alt={data?.title || "Our Philosophy"}
      />
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mx-auto py-10 lg:py-20 max-w-7xl px-4">
      {isOdd ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </div>
  );
}