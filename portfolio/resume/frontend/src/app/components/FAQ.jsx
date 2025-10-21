"use client";
import { useState } from "react";

function QA({ q, a, open, onToggle, idx }) {
  const panelId = `faq-panel-${idx}`;
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
        aria-expanded={open}
        aria-controls={panelId}
        dir="rtl"
      >
        {/* سوال (راست) */}
        <span className={`font-medium transition-colors ${open ? "text-yellow-300" : "text-white"}`}>
          {q}
        </span>

        {/* فلش (چپ) */}
        <span dir="ltr" className="pl-1">
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180 text-yellow-300" : "rotate-0 text-white/70"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      {/* جواب */}
      <div
        id={panelId}
        dir="rtl"
        className={`px-5 overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="pb-5 text-white/80 text-sm leading-7 text-right">
          {Array.isArray(a) ? (
            a.map((line, i) =>
              typeof line === "string" && line.trim().startsWith("خلاصه:") ? (
                <p
                  key={i}
                  className="mt-4 pt-3 border-t border-white/20 text-amber-300 font-semibold"
                >
                  {line}
                </p>
              ) : (
                <p key={i} className="mb-1">
                  {line}
                </p>
              )
            )
          ) : (
            <p className="mb-1">{a}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FAQ({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" dir="rtl" className="relative z-10 py-16 text-right">
      <div className="max-w-3xl mx-auto px-6">
        {/* تیتر وسط */}
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          سؤالات متداول
        </h2>

        {/* سوالات راست‌چین */}
        <div className="space-y-3">
          {items.map((it, i) => (
            <QA
              key={i}
              idx={i}
              q={it.q}
              a={it.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
