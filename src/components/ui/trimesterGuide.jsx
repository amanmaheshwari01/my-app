export default function TrimesterGuide() {
  const trimesters = [
    {
      number: "01",
      title: "First Trimester",
      weeks: "Weeks 1 - 12",
      points: [
        "Confirm your pregnancy with a blood test",
        "First prenatal visit and ultrasound",
        "Start prenatal vitamins with folic acid",
        "Common symptoms: nausea, fatigue, breast tenderness",
        "Avoid alcohol, smoking and certain foods",
      ],
    },
    {
      number: "02",
      title: "Second Trimester",
      weeks: "Weeks 13 - 26",
      points: [
        "Anatomy scan to check baby's development",
        "Glucose screening test",
        "You may start feeling baby movements",
        "Energy levels usually improve",
        "Begin thinking about birth plan",
      ],
    },
    {
      number: "03",
      title: "Third Trimester",
      weeks: "Weeks 27 - 40",
      points: [
        "Weekly check-ups as due date approaches",
        "Monitor baby's position and movement",
        "Group B strep test",
        "Discuss labor and delivery options",
        "Pack your hospital bag and finalize birth plan",
      ],
    },
  ];

  return (
    <section className="w-full bg-surface py-14 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-strong mb-3">
            Trimester Guide
          </h2>
          <p className="text-md sm:text-xl text-text-primary font-semibold">
            A simple breakdown of what to expect at each stage of your pregnancy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
          {trimesters.map((t) => (
            <div key={t.number} className="bg-background rounded-2xl border border-border p-6 flex flex-col gap-4 hover:shadow-sm transition-shadow">

              <span className="text-5xl font-bold text-primary opacity-50">{t.number}</span>

              <div>
                <h3 className="text-xl font-bold text-text-secondary">
                  {t.title}
                </h3>
                <p className="text-base text-text-primary font-medium mt-0.5">{t.weeks}</p>
              </div>

              <ul className="flex flex-col gap-2">
                {t.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-primary">
                    <span className="mt-0.5 shrink-0">✓</span>
                    {point}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}