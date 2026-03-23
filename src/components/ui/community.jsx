import { Target, Eye } from "lucide-react";

export default function Community() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-14 lg:py-20">
      <div className="flex flex-col md:flex-row gap-6">

        {/* Mission */}
        <div className="flex flex-col flex-1 border border-border p-8 rounded-2xl gap-5 bg-background items-center text-center hover:shadow-md transition-shadow">
          <div className="bg-surface p-4 rounded-full border border-border">
            <Target size={36} className="text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-secondary">
            Our Mission
          </h2>
          <div className="w-10 h-0.5 bg-primary rounded-full" />
          <p className="text-sm sm:text-base text-text-primary leading-relaxed">
            To provide compassionate, confidential, and advanced women's
            healthcare that empowers every woman to take control of her
            reproductive and overall well-being, through personalized care,
            modern technology, and a patient-first approach.
          </p>
        </div>

        {/* Vision */}
        <div className="flex flex-col flex-1 border border-border p-8 rounded-2xl gap-5 bg-background items-center text-center hover:shadow-md transition-shadow">
          <div className="bg-surface p-4 rounded-full border border-border">
            <Eye size={36} className="text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-secondary">
            Our Vision
          </h2>
          <div className="w-10 h-0.5 bg-primary rounded-full" />
          <p className="text-sm sm:text-base text-text-primary leading-relaxed">
            To become a trusted leader in women's healthcare by setting the
            standard for excellence, innovation, and compassionate care,
            empowering healthier generations of women everywhere.
          </p>
        </div>

      </div>
    </div>
  );
}