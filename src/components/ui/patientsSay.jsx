export default function Testimonial() {
  return (
    <div className="w-full py-14 px-4 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary-strong mb-10">
          What Our Patients Say
        </h2>
        <div className="flex flex-col sm:flex-row gap-6">
          {[
            { quote: "Dr. Zann made my entire pregnancy feel safe and stress free. I could not have asked for better care.", name: "Anita K." },
            { quote: "From my first visit to delivery, the team was incredible. So grateful for their support and expertise.", name: "Priya M." },
          ].map(({ quote, name }) => (
            <div key={name} className="bg-surface rounded-xl p-6 border border-border text-left flex-1 hover:shadow-sm transition-shadow">
              <p className="text-sm text-text-secondary leading-relaxed mb-4">"{quote}"</p>
              <p className="text-sm font-semibold text-primary-strong">— {name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}