import { testimonials } from "../lib/testimonials";
import { Quote } from "lucide-react"; // آیکون از lucide-react

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative z-10 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          نظرات کارفرماها
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              dir="rtl"
              className="
                glass p-6 flex flex-col justify-between
                transition hover:shadow-xl hover:-translate-y-1
              "
            >
              {/* آیکون نقل‌قول */}
              <div className="flex justify-end">
                <div className="glass w-10 h-10 flex items-center justify-center rounded-full mb-4">
                  <Quote size={18} className="text-white/70" />
                </div>
              </div>

              {/* متن بازخورد */}
              <p className="text-white/80 text-right mb-6 leading-7 break-words">
                {t.feedback}
              </p>

              {/* نام و نقش — همیشه پایین کارت */}
              <div className="text-sm text-white/60 text-right">
                <span className="font-semibold text-white">{t.name}</span>
                <br />
                {t.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
