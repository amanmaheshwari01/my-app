"use client";

import { ClipboardList, FlaskConical, ScanSearch, HeartHandshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Initial Consultation",
    desc: "We start by listening — your symptoms, cycle history, lifestyle, and concerns. No rushing, no assumptions.",
    duration: "20–30 min",
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "Tests & Investigations",
    desc: "Depending on your case — blood work, hormone panels, ultrasound, or biopsy. Everything explained before it happens.",
    duration: "Same day or next visit",
  },
  {
    number: "03",
    icon: ScanSearch,
    title: "Diagnosis",
    desc: "Dr. Pratishtha reviews all findings with you in detail — what it means, why it happened, and what comes next.",
    duration: "Thorough, not rushed",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Your Treatment Plan",
    desc: "A personalised plan built around your body, your schedule, and your goals — medication, lifestyle, or surgery if needed.",
    duration: "Ongoing support",
  },
];

export default function DiagnosisProcess() {
  return (
    <section className="w-full bg-surface py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-14 px-8">

        {/* Heading */}
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-md uppercase tracking-widest text-primary font-semibold">No surprises, no anxiety</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-primary-strong leading-tight">How We Diagnose</h2>
          <div className="w-16 h-0.5 bg-primary rounded-full mt-1" />
          <p className="text-sm sm:text-base text-text-primary max-w-lg leading-relaxed mt-1 font-bold">
            Here is exactly what happens from the moment you walk in to the moment you leave with a plan.
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col">
          {steps.map(({ number, icon: Icon, title, desc, duration }, i) => (
            <div key={number} className="relative flex gap-6 sm:gap-10">

              {/* Left — icon + vertical line */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20 shrink-0 z-10">
                  <Icon size={20} className="text-primary" />
                </div>
                {i !== steps.length - 1 && (
                  <div className="w-px flex-1 bg-border my-1" />
                )}
              </div>

              {/* Right — content */}
              <div className={`flex flex-col gap-2 bg-background border border-border rounded-2xl px-6 py-6 w-full ${i !== steps.length - 1 ? "mb-4" : ""}`}>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Step {number}</span>
                <h3 className="text-base sm:text-lg font-semibold text-text-secondary">{title}</h3>
                <p className="text-sm text-text-primary leading-relaxed">{desc}</p>
                <span className="self-start mt-1 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {duration}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}