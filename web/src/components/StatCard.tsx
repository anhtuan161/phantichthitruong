interface StatCardProps {
  label: string;
  value: string;
  sub?: string;
  icon?: string;
  color?: string;
}

export default function StatCard({
  label,
  value,
  sub,
  icon,
  color = "#38bdf8",
}: StatCardProps) {
  return (
    <div className="bg-[#1e293b] border border-[#334155] rounded-xl p-5 flex flex-col">
      <div className="flex items-center gap-2 mb-2">
        {icon && <span className="text-xl">{icon}</span>}
        <span className="text-sm text-[#94a3b8]">{label}</span>
      </div>
      <span className="text-2xl font-bold" style={{ color }}>
        {value}
      </span>
      {sub && <span className="text-xs text-[#94a3b8] mt-1">{sub}</span>}
    </div>
  );
}
