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
  return (
    <main className="min-h-dvh relative">
      {/* هدر شناور ریسپانسیو */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
          {/* لوگو / نام */}
          <div className="text-white font-bold text-lg leading-tight">
            MhmdNsr
            <div className="text-yellow-400 text-base">Full-Stack Wizardry 🧙</div>
          </div>

          {/* دسکتاپ منو */}
          <ul className="hidden md:flex gap-8 text-white font-medium">
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
                menu.classList.toggle("hidden");
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
          className="md:hidden hidden flex-col bg-black/80 backdrop-blur-md text-white text-lg px-5 py-4 space-y-3"
        >
          <li><a href="#services" className="block">Services</a></li>
          <li><a href="#skills" className="block">Skills</a></li>
          <li><a href="#timeline" className="block">Experience</a></li>
          <li><a href="#faq" className="block">FAQ</a></li>
          <li><a href="#sample" className="block">Portfolio</a></li>
          <li><a href="#socials" className="block">Socials</a></li>
        </ul>
      </nav>

      {/* Services */}
      <section id="services" className="pt-20">
        <Services items={services} />
      </section>

      {/* مهارت‌ها */}
      <section id="skills" className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-2xl font-bold text-white mb-6">مهارت‌ها</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.name} className="glass p-5">
                <SkillBar name={s.name} level={s.percent} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQ items={faqs} />
      </section>

      {/* Timeline */}
      <section id="timeline" className="relative z-10 py-16">
        <ExperienceTimeline />
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Portfolio Gallery */}
      <section id="sample" className="relative z-10 py-16">
        <PortfolioGallery />
      </section>

      {/* Socials */}
      <section id="socials" className="relative z-10 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-center text-2xl font-bold text-white mb-6">شبکه‌های اجتماعی</h2>
          <SocialLinks />
        </div>
      </section>

      <BackToTop />
    </main>
  );
}
