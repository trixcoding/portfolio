"use client";

function IconPhp() {
  return (
    <svg className="w-7 h-7 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 7h6v10H4zM14 7h6v10h-6z" />
      <path d="M10 12h4" />
    </svg>
  );
}
function IconApi() {
  return (
    <svg className="w-7 h-7 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="5" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
      <path d="M7 12h10M12 7v10" />
    </svg>
  );
}
function IconPython() {
  return (
    <svg className="w-7 h-7 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 4h5a3 3 0 013 3v3H9a3 3 0 01-3-3V6a2 2 0 012-2z" />
      <circle cx="10.5" cy="6.5" r="0.6" />
      <path d="M16 20h-5a3 3 0 01-3-3v-3h7a3 3 0 013 3v1a2 2 0 01-2 2z" />
      <circle cx="13.5" cy="17.5" r="0.6" />
    </svg>
  );
}
function IconJs() {
  return (
    <svg className="w-7 h-7 text-yellow-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 8h5M8 12h8M8 16h6" />
    </svg>
  );
}
function IconDB() {
  return (
    <svg className="w-7 h-7 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  );
}
function IconRealtime() {
  return (
    <svg className="w-7 h-7 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M13 2L6 14h5l-1 8 7-12h-5l1-8z" />
    </svg>
  );
}

export default function Services({ items = [] }) {
  const icons = [IconPhp, IconApi, IconPython, IconJs, IconDB, IconRealtime];

  return (
    <section id="services" dir="rtl" className="mt-15 relative z-10 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">خدمات</h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {items.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={i}
                className="glass rounded-2xl p-5 hover:-translate-y-1 hover:shadow-xl transition"
              >
                {/* آیکون چپ / متن راست */}
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-white font-semibold flex-1 text-right">{s.title}</h3>
                  <Icon />
                </div>

                <p className="text-white/70 text-sm leading-6 text-right">{s.desc}</p>

                <ul className="mt-3 space-y-2 text-sm text-white/80 list-disc list-inside text-right">
                  {s.bullets?.map((b, j) => {
                    const isSummary = typeof b === "string" && b.trim().startsWith("خلاصه:");
                    return isSummary ? (
                      <li
                        key={j}
                        className="list-none mt-3 pt-3 border-t border-white/20 text-amber-300 font-medium"
                      >
                        {b}
                      </li>
                    ) : (
                      <li key={j}>{b}</li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
