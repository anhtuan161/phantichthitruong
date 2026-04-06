"use client";

import { useState } from "react";

const sections = [
  { id: "hero", label: "Tổng quan", icon: "🏔️" },
  { id: "macro", label: "Vĩ mô", icon: "📊" },
  { id: "market", label: "Quy mô TT", icon: "📈" },
  { id: "segments", label: "Phân khúc", icon: "🎯" },
  { id: "competitors", label: "Đối thủ", icon: "⚔️" },
  { id: "channels", label: "Kênh Online", icon: "🌐" },
  { id: "operations", label: "Vận hành", icon: "🏗️" },
  { id: "regulatory", label: "Pháp lý", icon: "📋" },
  { id: "scorecard", label: "Scorecard", icon: "✅" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-[#334155]">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-[#38bdf8]">🏔️</span>
          <span>
            Co-living Đà Lạt{" "}
            <span className="text-[#94a3b8] font-normal text-sm">
              | Nghiên cứu thị trường
            </span>
          </span>
        </a>

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

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-[#94a3b8]"
        >
          {open ? "✕" : "☰"}
        </button>
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
