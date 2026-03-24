"use client";
 
export function Achievements({ items }) {
  return (
    <section className="w-full bg-surface py-14 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 px-8">
 
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold text-center">Over two decades of recognition</p>
          <h3 className="text-3xl sm:text-5xl font-bold text-primary-strong text-center">Achievements</h3>
        </div>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map(({ year, heading, body }) => (
            <div key={year} className="flex flex-col gap-2 border border-border rounded-2xl p-5 bg-background">
              <p className="text-xs font-bold text-primary uppercase tracking-widest">{year}</p>
              <h4 className="text-sm sm:text-base font-semibold text-text-secondary leading-snug">{heading}</h4>
              <p className="text-sm text-text-primary leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
}