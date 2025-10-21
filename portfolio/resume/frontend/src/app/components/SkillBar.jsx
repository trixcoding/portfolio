import SkillIcon from "./SkillIcon";

export default function SkillBar({ name, level }) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
          <SkillIcon name={name} />
          <span className="font-medium text-white/90">{name}</span>
        </div>
        <span className="text-sm text-white/60">{level}%</span>
      </div>
      <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${level}%`,
            background:
              "linear-gradient(90deg, rgba(59,130,246,.9), rgba(236,72,153,.9))",
          }}
        />
      </div>
    </div>
  );
}
