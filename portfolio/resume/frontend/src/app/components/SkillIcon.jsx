// components/SkillIcon.jsx
import {
  Code,
  Server,
  Database,
  Braces,
  Boxes,
  Terminal,
  Cpu,
  Globe,
  Shield,
  GitBranch,
  Layers,
} from "lucide-react";

export default function SkillIcon({ name }) {
  const base =
    "flex items-center justify-center w-8 h-8 rounded-lg glass shadow-md";

  switch (name.toLowerCase()) {
    // 🌐 فرانت‌اند
    case "html":
      return (
        <div className={base}>
          <Globe size={16} className="text-orange-400" />
        </div>
      );
    case "css":
      return (
        <div className={base}>
          <Globe size={16} className="text-blue-400" />
        </div>
      );
    case "scss":
      return (
        <div className={base}>
          <Globe size={16} className="text-pink-400" />
        </div>
      );
    case "tailwind":
      return (
        <div className={base}>
          <Globe size={16} className="text-cyan-400" />
        </div>
      );

    // ⚡ جاوااسکریپت
    case "javascript":
      return (
        <div className={base}>
          <Braces size={16} className="text-yellow-400" />
        </div>
      );
    case "jquery":
      return (
        <div className={base}>
          <Braces size={16} className="text-blue-300" />
        </div>
      );

    // ⚛️ ری‌اکت و نکست
    case "react.js":
    case "react-native":
      return (
        <div className={base}>
          <Cpu size={16} className="text-cyan-300" />
        </div>
      );
    case "next.js":
      return (
        <div className={base}>
          <Cpu size={16} className="text-gray-200" />
        </div>
      );

    // 🌱 بک‌اند
    case "node.js":
    case "express.js":
      return (
        <div className={base}>
          <Server size={16} className="text-green-400" />
        </div>
      );

    // 🛢 دیتابیس‌ها
    case "mongodb":
      return (
        <div className={base}>
          <Database size={16} className="text-green-500" />
        </div>
      );
    case "sqlite":
      return (
        <div className={base}>
          <Database size={16} className="text-gray-400" />
        </div>
      );
    case "mysql":
      return (
        <div className={base}>
          <Database size={16} className="text-blue-500" />
        </div>
      );
    case "sql":
    case "postgresql":
      return (
        <div className={base}>
          <Database size={16} className="text-indigo-400" />
        </div>
      );
    case "redis":
      return (
        <div className={base}>
          <Database size={16} className="text-red-400" />
        </div>
      );

    // 🐘 زبان‌ها و فریم‌ورک‌ها
    case "php":
      return (
        <div className={base}>
          <Code size={16} className="text-indigo-300" />
        </div>
      );
    case "python":
      return (
        <div className={base}>
          <Code size={16} className="text-yellow-300" />
        </div>
      );
    case "django":
      return (
        <div className={base}>
          <Code size={16} className="text-green-300" />
        </div>
      );

    // 🤖 دیتا و هوش مصنوعی
    case "ai":
    case "data science":
    case "machine learning":
      return (
        <div className={base}>
          <Cpu size={16} className="text-purple-400" />
        </div>
      );

    // ⚙️ ابزارها
    case "git":
      return (
        <div className={base}>
          <GitBranch size={16} className="text-orange-400" />
        </div>
      );
    case "linux / bash":
      return (
        <div className={base}>
          <Terminal size={16} className="text-gray-300" />
        </div>
      );
    case "docker":
      return (
        <div className={base}>
          <Boxes size={16} className="text-blue-400" />
        </div>
      );
    case "api / endpoints":
    case "json":
    case "xml":
      return (
        <div className={base}>
          <Boxes size={16} className="text-teal-300" />
        </div>
      );

    // 🔒 امنیت
    case "cyber security":
      return (
        <div className={base}>
          <Shield size={16} className="text-red-500" />
        </div>
      );

    // پیش‌فرض
    default:
      return (
        <div className={base}>
          <Layers size={16} className="text-white/70" />
        </div>
      );
  }
}
