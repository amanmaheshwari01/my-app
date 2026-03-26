import Link from "next/link";

const workingHours = [
  { day: "Monday",    morning: "9:00 AM - 2:00 PM", evening: "5:00 PM - 8:00 PM" },
  { day: "Tuesday",   morning: "9:00 AM - 2:00 PM", evening: "5:00 PM - 8:00 PM" },
  { day: "Wednesday", morning: "9:00 AM - 2:00 PM", evening: "5:00 PM - 8:00 PM" },
  { day: "Thursday",  morning: "9:00 AM - 2:00 PM", evening: "5:00 PM - 8:00 PM" },
  { day: "Friday",    morning: "9:00 AM - 2:00 PM", evening: "5:00 PM - 8:00 PM" },
  { day: "Saturday",  morning: "9:00 AM - 1:00 PM", evening: "Closed"            },
  { day: "Sunday",    morning: "Closed",             evening: "Closed"            },
];

export default function WorkingHours() {
  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-primary-strong mb-4">
            Clinic Working Hours
          </h2>
          <p className="text-text-primary text-lg font-semibold max-w-2xl mx-auto">
            Visit us during clinic hours or book an appointment in advance for
            a seamless experience.
          </p>
        </div>

        {/* Hours Table */}
        <div className="max-w-7xl mx-auto bg-background rounded-2xl border border-border overflow-hidden shadow-sm">
          {workingHours.map((item, index) => (
            <div
              key={index}
              className={`flex justify-between items-center px-8 py-4 border-b border-border last:border-none transition-all duration-200
                ${item.day === "Sunday" ? "text-red-400" : "text-text-primary"}
                ${index % 2 === 0 ? "bg-background" : "bg-surface"}
              `}
            >
              <span className="font-semibold text-text-secondary w-1/3 text-left text-sm md:text-base">
                {item.day}
              </span>
              <span className="w-1/3 text-center text-sm md:text-base">{item.morning}</span>
              <span className="w-1/3 text-right text-sm md:text-base">{item.evening}</span>
            </div>
          ))}
        </div>

        {/* Emergency Note */}
        <Link href = "/contactUs">
            <div className="max-w-2xl mx-auto mt-6 rounded-2xl p-6 text-text-primary text-sm text-center md:text-lg">
              <strong className="text-primary">Emergency?</strong>{" "}
              Call us anytime — we're always here for urgent concerns.
            </div>
        </Link>

      </div>
    </section>
  );
}