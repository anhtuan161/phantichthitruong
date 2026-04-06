interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Card({ title, children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-[#1e293b] border border-[#334155] rounded-xl p-6 ${className}`}
    >
      {title && (
        <h3 className="text-lg font-semibold mb-4 text-[#e2e8f0]">{title}</h3>
      )}
      {children}
    </div>
  );
}
