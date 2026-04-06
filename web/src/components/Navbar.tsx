"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const getSections = (t: any) => [
  { id: "hero", label: t("nav-macro"), icon: "🏔️" },
  { id: "macro", label: t("nav-macro"), icon: "📊" },
  { id: "market", label: t("nav-market"), icon: "📈" },
  { id: "segments", label: t("nav-segments"), icon: "🎯" },
  { id: "competitors", label: t("nav-comp"), icon: "⚔️" },
  { id: "channels", label: t("nav-online"), icon: "🌐" },
  { id: "operations", label: t("nav-ops"), icon: "🏗️" },
  { id: "regulatory", label: t("nav-legal"), icon: "📋" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const sections = getSections(t);

  const toggleLanguage = () => {
    setLanguage(language === "vi" ? "en" : "vi");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-[#334155]">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-[#38bdf8]">🏔️</span>
          <span className="hidden sm:inline">
            Co-living Đà Lạt{" "}
            <span className="text-[#94a3b8] font-normal text-sm">
              | {t("feasibility-study")}
            </span>
          </span>
        </a>

        <div className="flex items-center gap-4">
          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-3 py-1.5 rounded-md text-sm text-[#94a3b8] hover:text-[#38bdf8] hover:bg-[#1e293b] transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#1e293b] border border-[#334155] text-xs font-bold text-[#e2e8f0] hover:border-[#38bdf8] transition-all cursor-pointer"
          >
            <span className={language === "vi" ? "text-[#38bdf8]" : "text-[#64748b]"}>VI</span>
            <span className="text-[#334155]">|</span>
            <span className={language === "en" ? "text-[#38bdf8]" : "text-[#64748b]"}>EN</span>
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-[#94a3b8]"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#1e293b] border-t border-[#334155] px-4 py-3">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-[#94a3b8] hover:text-[#38bdf8]"
            >
              {s.icon} {s.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
