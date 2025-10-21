'use client';

import BackToTop from "./components/BackToTop";
import ExperienceTimeline from "./components/ExperienceTimeline";
import FAQ from "./components/FAQ";
import PortfolioGallery from "./components/PortfolioGallery";
import Services from "./components/Services";
import SkillBar from "./components/SkillBar";
import SocialLinks from "./components/SocialLinks";
import Testimonials from "./components/Testimonials";
import { skills } from "./lib/data";
import { faqs } from "./lib/faq";
import { services } from "./lib/services";

export default function Home() {
  // تابع برای بستن منوی موبایل هنگام کلیک روی لینک
  const closeMobileMenu = () => {
    const menu = document.getElementById("mobile-menu");
    if (menu && !menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
    }
  };

  return (
    <main className="min-h-dvh relative bg-gradient-to-b from-slate-900 via-gray-900 to-slate-800 text-white overflow-x-hidden">
      {/* هدر شناور ریسپانسیو */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/60 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
          {/* لوگو / نام */}
          <div className="text-white font-bold text-lg leading-tight">
            MhmdNsr
            <div className="text-yellow-400 text-base">Full-Stack Wizardry 🧙</div>
          </div>

          {/* دسکتاپ منو */}
          <ul className="hidden md:flex gap-8 text-white/90 font-medium">
            <li><a href="#services" className="hover:text-yellow-400 transition-colors">Services</a></li>
            <li><a href="#skills" className="hover:text-yellow-400 transition-colors">Skills</a></li>
            <li><a href="#timeline" className="hover:text-yellow-400 transition-colors">Experience</a></li>
            <li><a href="#faq" className="hover:text-yellow-400 transition-colors">FAQ</a></li>
            <li><a href="#sample" className="hover:text-yellow-400 transition-colors">Portfolio</a></li>
            <li><a href="#socials" className="hover:text-yellow-400 transition-colors">Socials</a></li>
          </ul>

          {/* موبایل همبرگر */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="text-white focus:outline-none"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                if (menu) menu.classList.toggle("hidden");
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* موبایل منو */}
        <ul
          id="mobile-menu"
          className="md:hidden hidden flex-col bg-slate-900/90 backdrop-blur-xl text-white text-lg px-5 py-4 space-y-3 border-t border-white/10"
        >
          <li><a href="#services" onClick={closeMobileMenu} className="block hover:text-yellow-400">Services</a></li>
          <li><a href="#skills" onClick={closeMobileMenu} className="block hover:text-yellow-400">Skills</a></li>
          <li><a href="#timeline" onClick={closeMobileMenu} className="block hover:text-yellow-400">Experience</a></li>
          <li><a href="#faq" onClick={closeMobileMenu} className="block hover:text-yellow-400">FAQ</a></li>
          <li><a href="#sample" onClick={closeMobileMenu} className="block hover:text-yellow-400">Portfolio</a></li>
          <li><a href="#socials" onClick={closeMobileMenu} className="block hover:text-yellow-400">Socials</a></li>
        </ul>
      </nav>

      {/* Services */}
      <section id="services" className="pt-24">
        <Services items={services} />
      </section>

      {/* مهارت‌ها */}
      <section id="skills" className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-yellow-400 mb-10">مهارت‌ها</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.name} className="glass p-5 rounded-2xl">
                <SkillBar name={s.name} level={s.percent} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 py-16">
        <FAQ items={faqs} />
      </section>

      {/* Timeline */}
      <section id="timeline" className="relative z-10 py-20">
        <ExperienceTimeline />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 py-16">
        <Testimonials />
      </section>

      {/* Portfolio Gallery */}
      <section id="sample" className="relative z-10 py-20">
        <PortfolioGallery />
      </section>

      {/* Socials */}
      <section id="socials" className="relative z-10 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-yellow-400 mb-8">شبکه‌های اجتماعی</h2>
          <SocialLinks />
        </div>
      </section>

      <BackToTop />
    </main>
  );
}
