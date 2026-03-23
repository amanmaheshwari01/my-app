import { Clock, InfinityIcon, Cloud, Leaf } from "lucide-react";

const services = [
  { icon: Clock, title: "Birth Control", desc: "Find the right contraceptive for you." },
  { icon: InfinityIcon, title: "Breast Health", desc: "Screen and care for your breasts." },
  { icon: Cloud, title: "Infectious Disease", desc: "Treat infections with confidential care." },
  { icon: Leaf, title: "Pap Smears", desc: "Routine checks for cervical health." },
];

export default function ServiceSection() {
  return (
    <div className="mt-12 px-8 max-w-7xl m-auto">

      {/* Heading */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-primary-strong">
          Services and Procedures
        </h1>
        <p className="text-lg lg:text-xl text-text-primary font-semibold max-w-2xl">
          Explore our range of specialized healthcare services designed for
          your comfort and well-being.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-7xl mx-auto">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-background hover:bg-surface transition-colors"
          >
            <Icon className="text-primary" size={52} />
            <p className="text-base md:text-lg font-medium text-center text-text-secondary">{title}</p>
            <p className="text-center text-text-primary text-base">{desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}