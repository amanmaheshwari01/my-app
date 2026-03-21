import { Baby, Heart, Stethoscope, Clock, ShieldCheck } from "lucide-react";

const services = [
  { icon: Baby, title: "Prenatal Visits", desc: "Regular check-ups to monitor your baby's growth and your health throughout pregnancy." },
  { icon: Heart, title: "High Risk Pregnancy", desc: "Specialized care and close monitoring for pregnancies that need extra attention." },
  { icon: Stethoscope, title: "Ultrasounds", desc: "In-office ultrasounds to track your baby's development at every stage." },
  { icon: Clock, title: "Same Day Appointments", desc: "We understand urgency — same day visits available for pregnancy concerns." },
  { icon: ShieldCheck, title: "Postpartum Care", desc: "Support and follow-up care for mothers after delivery to ensure full recovery." },
];

export default function WhatWeOffer() {
  return (
    <div className="w-full py-14 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary-strong text-center mb-10">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-surface rounded-xl p-6 flex flex-col gap-3 border border-border hover:shadow-sm transition-shadow">
              <Icon size={32} className="text-primary" />
              <h3 className="font-semibold text-text-primary text-lg">{title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}