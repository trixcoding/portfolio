"use client";

import { useEffect, useRef, useState } from "react";

// ✅ بدون وابستگی خارجی (SVG داخلی)
// ✅ کار با window یا کانتینر سفارشی (targetId)
// ✅ z-index بالا + انیمیشن (اختیاری)

export default function BackToTop({ targetId, threshold = 250 }) {
  const [show, setShow] = useState(false);
  const scrollElRef = useRef(null);

  useEffect(() => {
    // اگر کانتینر اسکرول‌دار داری id بده؛ وگرنه روی window گوش می‌کنیم
    const el = targetId ? document.getElementById(targetId) : window;
    scrollElRef.current = el;

    const getScrollTop = () => {
      if (el === window) {
        return (
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0
        );
      }
      return el?.scrollTop || 0;
    };

    const onScroll = () => setShow(getScrollTop() > threshold);

    (el === window ? window : el).addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // اگر از قبل پایین صفحه‌ایم
    return () => (el === window ? window : el).removeEventListener("scroll", onScroll);
  }, [targetId, threshold]);

  const scrollToTop = () => {
    const el = scrollElRef.current;
    if (!el) return;
    if (el === window) window.scrollTo({ top: 0, behavior: "smooth" });
    else el.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed left-6 bottom-20 sm:bottom-6
        glass w-11 h-11 rounded-full
        flex items-center justify-center
        text-white/90 hover:-translate-y-0.5 hover:shadow-xl
        transition animate-fade-in-scale
        z-[999]
      "
      aria-label="بازگشت به بالا"
      title="بازگشت به بالا"
    >
      {/* آیکون فلش بالا (SVG داخلی) */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19V5M12 5l-6 6M12 5l6 6"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}
