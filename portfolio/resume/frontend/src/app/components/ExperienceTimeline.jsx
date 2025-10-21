"use client";

import { useEffect, useRef } from "react";
import { experience } from "../lib/experience";

// آیکون‌ها از lucide-react
import { Brain, Database, Server, BarChart3, Atom, Code, Check } from "lucide-react";

// تابع آیکون شیشه‌ای بالای کارت
function GlassIcon({ type }) {
  const base =
    "flex items-center justify-center w-10 h-10 rounded-xl glass shadow-md text-white";
  switch (type) {
    case "Python":
      return <div className={base}><Code size={18} className="text-yellow-300" /></div>;
    case "PHP":
      return <div className={base}><Server size={18} className="text-indigo-300" /></div>;
    case "React":
      return <div className={base}><Atom size={18} className="text-cyan-300" /></div>;
    case "Node":
      return <div className={base}><Database size={18} className="text-green-300" /></div>;
    case "Data":
      return <div className={base}><BarChart3 size={18} className="text-pink-300" /></div>;
    case "AI":
      return <div className={base}><Brain size={18} className="text-purple-300" /></div>;
    default:
      return <div className={base}><Code size={18} className="text-white/80" /></div>;
  }
}

// ترتیب آیکون‌ها با تجربه‌ها
const iconMap = ["Python", "PHP", "React", "Node", "Data", "AI"];

export default function ExperienceTimeline() {
  const ref = useRef(null);

  useEffect(() => {
    const wrap = ref.current;
    if (!wrap) return;

    const items = wrap.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.2 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const items = experience.slice(0, 6);

  return (
    <section id="experience" className="relative z-10 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-10 text-center">تجربه کاری</h2>

        {/* خط تایم‌لاین */}
        <div ref={ref} className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/15 sm:left-1/2 sm:-translate-x-1/2 pointer-events-none" />

          <ol className="space-y-10">
            {items.map((exp, i) => {
              const isRight = i < 3;
              const iconType = iconMap[i] || "Default";

              return (
                <li
                  key={i}
                  data-reveal
                  className="group relative sm:grid sm:grid-cols-2 sm:gap-8"
                >
                  {/* نقطه روی خط */}
                  <span
                    className="
                      absolute left-4 sm:left-1/2 sm:-translate-x-1/2
                      mt-2 h-3 w-3 rounded-full bg-white shadow
                      ring-2 ring-white/30
                    "
                  />

                  {/* کارت محتوا */}
                  <div
                    className={`glass p-5 rounded-2xl ${isRight ? "sm:col-start-2" : "sm:col-start-1"}`}
                    style={{ backdropFilter: "blur(16px)" }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <GlassIcon type={iconType} />
                        <h3 className="text-white font-semibold">{exp.title}</h3>
                      </div>
                      <span className="text-xs text-white/60">{exp.period}</span>
                    </div>

                    <div className="text-white/70 text-sm mt-1">{exp.company}</div>

                    {/* ✅ لیست با تیک شیشه‌ای سمت راست */}
                    <ul dir="rtl" className="mt-4 space-y-3 text-white/80 text-sm text-right">
                      {(exp.bullets ?? []).map((b, j) => (
                        <li key={j} className="flex items-start gap-3">
                          {/* بولت شیشه‌ای */}
                          <span className="glass w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={14} className="text-emerald-300" />
                          </span>

                          {/* متن بولت */}
                          <p className="leading-7 break-words flex-1">{b}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ستون خالی برای تعادل */}
                  <div className="hidden sm:block" />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
