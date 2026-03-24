export function Certificates({ items }) {
  return (
    <section className="w-full bg-background py-14 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 px-8">
 
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold text-center">Qualifications & credentials</p>
          <h3 className="text-3xl sm:text-5xl font-bold text-primary-strong text-center">Certificates</h3>
        </div>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map(({ title, issuer, year, note }) => (
            <div key={title} className="flex flex-col gap-2 border border-border rounded-2xl p-5 bg-surface">
              <h4 className="text-sm sm:text-base font-semibold text-text-secondary leading-snug">{title}</h4>
              <p className="text-sm text-text-primary leading-relaxed">{note}</p>
              <div className="flex items-center justify-between mt-1">
                <p className="text-xs sm:text-sm text-primary-strong font-medium">{issuer}</p>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">{year}</span>
              </div>
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
}