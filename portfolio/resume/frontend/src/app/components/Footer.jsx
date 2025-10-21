import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="glass relative z-10 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-10 text-center">
        <SocialLinks />
        <p className="text-white/60 text-sm mt-6">
          © {new Date().getFullYear()} 
        </p>
      </div>
    </footer>
  );
}
