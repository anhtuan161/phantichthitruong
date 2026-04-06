interface ScoreBarProps {
  label: string;
  score: number;
  max?: number;
  description: string;
}

export default function ScoreBar({
  label,
  score,
  max = 5,
  description,
}: ScoreBarProps) {
  const pct = (score / max) * 100;
  const color =
    score >= 4 ? "#34d399" : score >= 3 ? "#fbbf24" : "#f87171";

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-bold" style={{ color }}>
          {score}/{max}
        </span>
      </div>
      <div className="w-full bg-[#334155] rounded-full h-2.5 mb-1">
        <div
          className="h-2.5 rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      <p className="text-xs text-[#94a3b8]">{description}</p>
    </div>
  );
}
