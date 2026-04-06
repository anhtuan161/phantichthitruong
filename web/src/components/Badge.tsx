interface BadgeProps {
  children: React.ReactNode;
  color?: "blue" | "green" | "yellow" | "red" | "purple" | "orange";
}

const colors = {
  blue: "bg-sky-500/15 text-sky-400 border-sky-500/30",
  green: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  yellow: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  red: "bg-red-500/15 text-red-400 border-red-500/30",
  purple: "bg-violet-500/15 text-violet-400 border-violet-500/30",
  orange: "bg-orange-500/15 text-orange-400 border-orange-500/30",
};

export default function Badge({ children, color = "blue" }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${colors[color]}`}
    >
      {children}
    </span>
  );
}
