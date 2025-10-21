import Image from "next/image";
import { projects } from "../lib/projects";
import { ExternalLink, Atom, Server, Database, Code, Boxes } from "lucide-react"; 

// مپ آیکون‌ها بر اساس نام تگ
function TechIcon({ tag }) {
  const base = "w-4 h-4";
  switch (tag.toLowerCase()) {
    case "react":
    case "react.js":
      return <Atom className={`${base} text-cyan-400`} />;
    case "next.js":
      return <Code className={`${base} text-white`} />;
    case "node.js":
      return <Database className={`${base} text-green-400`} />;
    case "php":
      return <Server className={`${base} text-indigo-400`} />;
    case "python":
      return <Code className={`${base} text-yellow-300`} />;
    case "tailwind":
      return <Boxes className={`${base} text-sky-400`} />;
    case "sql":
    case "mysql":
    case "postgres":
      return <Database className={`${base} text-orange-300`} />;
    case "vercel":
      return <Code className={`${base} text-gray-200`} />;
    default:
      return <Code className={`${base} text-white/70`} />;
  }
}

export default function PortfolioGallery() {
  return (
    <section id="portfolio" className="relative z-10 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          نمونه کارها
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={i}
              className="glass rounded-xl overflow-hidden transition hover:shadow-xl hover:-translate-y-1 flex flex-col"
            >
              {/* تصویر پروژه */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* توضیحات پروژه */}
              <div className="p-4 flex flex-col flex-grow">
                {/* 🔹 عنوان پروژه (چپ‌چین) */}
                <h3 className="text-white font-semibold text-left">{p.title}</h3>

                {/* 🔹 توضیحات (راست‌چین) */}
                <p className="text-white/70 text-sm mt-2 flex-grow text-right">
                  {p.description}
                </p>

                {/* 🔹 تگ‌ها (چپ‌چین با آیکون) */}
                <div className="mt-3 flex flex-wrap gap-2 justify-start">
                  {p.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1 px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/70"
                    >
                      <TechIcon tag={tag} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 🔹 لینک پروژه (دکمه شیشه‌ای با آیکون) */}
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-4 inline-flex items-center gap-2
                      px-3 py-2 rounded-lg glass text-sm
                      text-white hover:bg-white/20 transition
                      justify-center
                    "
                  >
                    <span>مشاهده پروژه</span>
                    <ExternalLink size={16} className="text-cyan-300" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
