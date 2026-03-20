const steps = [
  { step: "01", title: "First Trimester", desc: "Confirmation of pregnancy, first ultrasound, blood work and prenatal vitamins guidance." },
  { step: "02", title: "Second Trimester", desc: "Anatomy scan, glucose screening, monitoring baby's growth and movement." },
  { step: "03", title: "Third Trimester", desc: "Weekly visits, birth planning, monitoring for any complications before delivery." },
];

export default function WhatToExpect() {
  return (
    <div className="w-full py-14 px-4 bg-warm-cream">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-saddle-brown text-center mb-10">
          What to Expect
        </h2>
        <div className="flex flex-col gap-6">
          {steps.map(({ step, title, desc }) => (
            <div key={step} className="flex items-start gap-6 bg-white rounded-xl p-6 border border-gray-200">
              <span className="text-3xl font-bold text-pink-300 shrink-0">{step}</span>
              <div>
                <h3 className="font-semibold text-saddle-brown text-lg mb-1">{title}</h3>
                <p className="text-sm text-modern-earthy leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}