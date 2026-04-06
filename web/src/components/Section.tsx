interface SectionProps {
  id: string;
  icon: string;
  title: string;
  subtitle?: string;
  accentColor?: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  icon,
  title,
  subtitle,
  accentColor = "#38bdf8",
  children,
}: SectionProps) {
  return (
    <section id={id} className="py-16 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{icon}</span>
            <h2 className="text-2xl font-bold" style={{ color: accentColor }}>
              {title}
            </h2>
          </div>
          {subtitle && <p className="text-[#94a3b8] ml-10">{subtitle}</p>}
          <div
            className="h-0.5 mt-3 w-20 rounded"
            style={{ background: accentColor }}
          />
        </div>
        <div className="space-y-6">{children}</div>
      </div>
    </section>
  );
}
