
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
      {/* هدر شناور آینده‌نگر */}
      <nav className="fixed top-6 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="glass flex items-center justify-between px-5 py-3">
            <span className="font-bold tracking-tight text-white text-m">MhmdNsr<br/>Full-Stack Wizardry 🧙</span>
            // <div className="flex gap-3 text-sm">
            //   <a href="#skills" className="text-white/80 hover:text-white">مهارت‌ها</a>
            //   <a href="#faq" className="text-white/80 hover:text-white">پرسش | پاسخ</a>
            //       <a href="#sample" className="text-white/80 hover:text-white">نمونه کار</a>
            // </div>
          </div>
        </div>
      </nav>

    <section id = "services">
<Services items={services}/>
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

    





<section id = "faq">
<FAQ items={faqs}/>
</section>



<section id="timeline" className="relative z-10 py-16">
   <ExperienceTimeline />
   </section>
   <section id = "testimonials">

    <Testimonials />
   
   </section>
    

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
