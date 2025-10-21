import { socials } from "../lib/socials";
export default function SocialLinks() {
  return (
    <div className="glass p-6 flex flex-wrap justify-center gap-6">
      {socials.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white/80 hover:text-white hover:bg-white/20 transition transform hover:-translate-y-1"
        >
          <Icon size={22} />
          <span>{name}</span>
        </a>
      ))}
    </div>
  );
}
