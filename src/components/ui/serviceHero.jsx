export default function ServiceHero({ title, subtitle, imageSrc }) {
  return (
    <div className="w-full relative m-auto">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-120 object-cover"
      />
      <div className="absolute inset-0 bg-primary-strong/30 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-background mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-background/90 max-w-2xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
}