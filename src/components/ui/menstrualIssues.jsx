"use client";

import { Calendar, Droplet, Activity, Clock, HeartPulse, AlertCircle, Brain, Thermometer, Moon, Wind, Zap, Scale } from "lucide-react";

const iconMap = { Calendar, Droplet, Activity, Clock, HeartPulse, AlertCircle, Brain, Thermometer, Moon, Wind, Zap, Scale };

export default function IssuesSection({ eyebrow, heading, subtext, issues }) {
  return (
    <section className="w-full bg-background py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 px-8">

        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-md uppercase tracking-widest text-primary font-semibold">{eyebrow}</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-primary-strong leading-tight">{heading}</h2>
          <div className="w-16 h-0.5 bg-primary rounded-full mt-1" />
          <p className="text-sm sm:text-lg text-text-primary font-bold max-w-xl leading-relaxed mt-1">{subtext}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {issues?.map((issue, index) => {
  const { title, desc, icon } = issue;
  const Icon = iconMap?.[icon];

  return (
    <div
      key={index}
      className="group relative flex flex-col gap-4 bg-surface border border-border rounded-2xl px-6 py-7 overflow-hidden transition-shadow hover:shadow-md"
    >
      <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-primary/30 rounded-full group-hover:bg-primary transition-colors duration-300" />

      {Icon && <Icon size={28} className="text-primary" />}

      <div className="flex flex-col gap-2">
        <h3 className="text-base sm:text-lg font-semibold text-text-secondary">
          {title}
        </h3>
        <p className="text-sm text-text-primary leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
})}
        </div>

      </div>
    </section>
  );
}