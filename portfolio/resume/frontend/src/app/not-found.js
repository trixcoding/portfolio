import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-dvh flex items-center justify-center px-6">
      <div className="glass p-10 text-center">
        <h1 className="text-5xl font-bold text-white">404</h1>
        <p className="text-white/70 mt-4">صفحه‌ای که دنبالشی پیدا نشد 😢</p>
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 rounded-xl bg-white text-black hover:opacity-90 transition"
        >
          بازگشت به خانه
        </Link>
      </div>
    </div>
  );
}
