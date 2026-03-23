import { UserRound, Stethoscope, Heart, Shield } from "lucide-react";

export default function WhyChooseUs({ data }) {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-primary-strong mb-4">
            Why Choose Our Clinic
          </h2>
          <p className="text-text-primary text-lg font-semibold max-w-2xl mx-auto">
            Dedicated to providing compassionate, expert, and modern
            gynecological care for women's health and well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data?.map((item, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl border border-border p-8 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-4 flex justify-center text-primary">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-text-secondary mb-3">
                {item.title}
              </h3>

              <p className="text-text-primary text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}