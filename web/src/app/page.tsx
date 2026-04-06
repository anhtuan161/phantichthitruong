"use client";

import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Card from "@/components/Card";
import StatCard from "@/components/StatCard";
import Badge from "@/components/Badge";
import ScoreBar from "@/components/ScoreBar";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <header id="hero" className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMC41IiBmaWxsPSIjMzM0MTU1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2cpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-40" />

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#1e293b] border border-[#334155]">
            <Badge color="green">{t("pre-launch")}</Badge>
            <span className="text-sm text-[#94a3b8]">{t("feasibility-study")}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#38bdf8] via-[#a78bfa] to-[#34d399] bg-clip-text text-transparent">
            {t("hero-title")}
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-[#e2e8f0] mb-2">
            {t("hero-subtitle")}
          </p>
          <p className="text-[#94a3b8] max-w-2xl mx-auto mb-10 text-lg">
            {t("hero-description")}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <StatCard label={t("stat-tourists")} value="~8 triệu" icon="✈️" />
            <StatCard
              label={t("stat-growth")}
              value="+25%"
              sub={t("stat-cagr")}
              icon="📈"
              color="#34d399"
            />
            <StatCard
              label={t("budget")}
              value="200-500tr"
              sub="VND"
              icon="💰"
              color="#fbbf24"
            />
            <StatCard
              label={t("conclusion")}
              value="GO"
              sub={t("go-conditional")}
              icon="✅"
              color="#34d399"
            />
          </div>
        </div>
      </header>

      {/* ===== PHẦN 1: MACRO ===== */}
      <Section
        id="macro"
        icon="📊"
        title={t("sec1-title")}
        subtitle={t("sec1-subtitle")}
        accentColor="#38bdf8"
      >
        <Card title={t("macro-table-title")}>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>{t("col-indicator")}</th>
                  <th>{t("col-value")}</th>
                  <th>{t("col-note")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t("row-pop")}</td>
                  <td className="font-semibold text-[#38bdf8]">{t("row-pop-val")}</td>
                  <td>{t("row-pop-note")}</td>
                </tr>
                <tr>
                  <td>{t("row-tour")}</td>
                  <td className="font-semibold text-[#38bdf8]">{t("row-tour-val")}</td>
                  <td>{t("row-tour-note")}</td>
                </tr>
                <tr>
                  <td>{t("row-internet")}</td>
                  <td className="font-semibold text-[#38bdf8]">{t("row-internet-val")}</td>
                  <td>{t("row-internet-note")}</td>
                </tr>
                <tr>
                  <td>{t("row-gdp")}</td>
                  <td className="font-semibold text-[#38bdf8]">{t("row-gdp-val")}</td>
                  <td>{t("row-gdp-note")}</td>
                </tr>
                <tr>
                  <td>{t("row-smart")}</td>
                  <td className="font-semibold text-[#38bdf8]">{t("row-smart-val")}</td>
                  <td>{t("row-smart-note")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card title={t("macro-insight-title")}>
          <div className="space-y-3 text-[#94a3b8]">
            <p>
              <span className="text-[#38bdf8] font-semibold">{t("insight-highway")}</span>{" "}
              {t("insight-highway-desc")}
            </p>
            <p>
              <span className="text-[#38bdf8] font-semibold">{t("insight-climate")}</span>{" "}
              {t("insight-climate-desc")}
            </p>
            <p>
              <span className="text-[#38bdf8] font-semibold">{t("insight-airport")}</span>{" "}
              {t("insight-airport-desc")}
            </p>
          </div>
        </Card>

        <div className="text-xs text-[#64748b] flex items-center gap-2">
          <Badge color="green">{t("reliability-high")}</Badge>
          <span>{t("source")}: Cổng thông tin Tổng cục Du lịch Lâm Đồng, Google Search Trend</span>
        </div>
      </Section>

      {/* ===== PHẦN 2: MARKET SIZE ===== */}
      <Section
        id="market"
        icon="📈"
        title={t("sec2-title")}
        subtitle={t("sec2-subtitle")}
        accentColor="#a78bfa"
      >
        <div className="grid md:grid-cols-3 gap-4">
          <StatCard
            label={t("stat-total-market")}
            value="~15.000 tỷ"
            sub="VND/năm"
            icon="🏨"
            color="#a78bfa"
          />
          <StatCard
            label={t("stat-workcation-seg")}
            value="400-600K"
            sub={t("stat-nomads-year")}
            icon="💻"
            color="#a78bfa"
          />
          <StatCard
            label={t("stat-cagr-coliving")}
            value="+25%"
            sub={t("stat-cagr")}
            icon="🚀"
            color="#34d399"
          />
        </div>

        <Card title={t("consumer-traits")}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-[#a78bfa] mb-2">{t("demographics")}</h4>
              <ul className="space-y-2 text-sm text-[#94a3b8]">
                <li>• <span className="text-[#e2e8f0]">{t("age")}</span> {t("age-val")}</li>
                <li>• <span className="text-[#e2e8f0]">{t("stay-duration")}</span> {t("stay-duration-val")}</li>
                <li>• <span className="text-[#e2e8f0]">{t("internet-std")}</span> {t("internet-std-val")}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#a78bfa] mb-2">{t("behavior")}</h4>
              <ul className="space-y-2 text-sm text-[#94a3b8]">
                <li>• {t("pref-view")}</li>
                <li>• {t("slow-living")}</li>
                <li>• {t("booking-thru")}</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card title={t("seasonality")}>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>{t("season")}</th>
                  <th>{t("time")}</th>
                  <th>{t("occ-expected")}</th>
                  <th>{t("col-note")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Badge color="green">{t("peak")}</Badge></td>
                  <td>{t("peak-time")}</td>
                  <td className="font-semibold text-[#34d399]">80-95%</td>
                  <td>{t("peak-note")}</td>
                </tr>
                <tr>
                  <td><Badge color="yellow">{t("mid")}</Badge></td>
                  <td>{t("mid-time")}</td>
                  <td className="font-semibold text-[#fbbf24]">50-70%</td>
                  <td>{t("mid-note")}</td>
                </tr>
                <tr>
                  <td><Badge color="red">{t("low")}</Badge></td>
                  <td>{t("low-time")}</td>
                  <td className="font-semibold text-[#f87171]">30-50%</td>
                  <td>{t("low-note")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <div className="text-xs text-[#64748b] flex items-center gap-2">
          <Badge color="yellow">{t("reliability-med")}</Badge>
          <span>{t("source")}: Ước tính từ dữ liệu lưu trú & xu hướng Digital Nomad</span>
        </div>
      </Section>

      {/* ===== PHẦN 3: PHÂN KHÚC ===== */}
      <Section
        id="segments"
        icon="🎯"
        title={t("sec3-title")}
        subtitle={t("sec3-subtitle")}
        accentColor="#34d399"
      >
        <Card title={t("models-title")}>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>{t("model")}</th>
                  <th>{t("features")}</th>
                  <th>{t("price-seg")}</th>
                  <th>{t("budget-fit")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">{t("model-cafe")}</td>
                  <td>{t("model-cafe-desc")}</td>
                  <td>50k - 100k/buổi</td>
                  <td><Badge color="green">{t("reliability-high").split(":")[1]?.trim() || "Cao"}</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">{t("model-hybrid")}</td>
                  <td>{t("model-hybrid-desc")}</td>
                  <td>400k - 800k/đêm</td>
                  <td><Badge color="yellow">{t("reliability-med").split(":")[1]?.trim() || "Trung bình"}</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">{t("model-dedicated")}</td>
                  <td>{t("model-dedicated-desc")}</td>
                  <td>5tr - 9tr/tháng</td>
                  <td><Badge color="red">Cần đầu tư lớn</Badge></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-[#34d399]/10 border border-[#34d399]/30 rounded-lg">
            <p className="text-sm">
              <span className="text-[#34d399] font-semibold">{t("opportunity")}</span>{" "}
              {t("opp-desc")}
            </p>
          </div>
        </Card>

        <Card title={t("customer-profile")}>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>{t("customer-group")}</th>
                  <th>{t("customer-behavior")}</th>
                  <th>{t("core-needs")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">{t("seg-nomad")}</td>
                  <td>{t("seg-nomad-desc")}</td>
                  <td>{t("seg-nomad-needs")}</td>
                </tr>
                <tr>
                  <td className="font-semibold">{t("seg-freelancer")}</td>
                  <td>{t("seg-freelancer-desc")}</td>
                  <td>{t("seg-freelancer-needs")}</td>
                </tr>
                <tr>
                  <td className="font-semibold">{t("seg-remote")}</td>
                  <td>{t("seg-remote-desc")}</td>
                  <td>{t("seg-remote-needs")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card title={t("pain-points")}>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#f87171]/10 border border-[#f87171]/30 rounded-lg">
              <p className="text-sm font-semibold text-[#f87171] mb-1">Pain #1</p>
              <p className="text-sm text-[#94a3b8]">{t("pain1")}</p>
            </div>
            <div className="p-4 bg-[#f87171]/10 border border-[#f87171]/30 rounded-lg">
              <p className="text-sm font-semibold text-[#f87171] mb-1">Pain #2</p>
              <p className="text-sm text-[#94a3b8]">{t("pain2")}</p>
            </div>
            <div className="p-4 bg-[#f87171]/10 border border-[#f87171]/30 rounded-lg">
              <p className="text-sm font-semibold text-[#f87171] mb-1">Pain #3</p>
              <p className="text-sm text-[#94a3b8]">{t("pain3")}</p>
            </div>
          </div>
        </Card>

        <Card title={t("gap-analysis")}>
          <div className="p-4 bg-[#a78bfa]/10 border border-[#a78bfa]/30 rounded-lg">
            <p className="text-sm text-[#94a3b8]">{t("gap-desc")}</p>
          </div>
        </Card>
      </Section>

      {/* ===== PHẦN 4: ĐỐI THỦ ===== */}
      <Section
        id="competitors"
        icon="⚔️"
        title={t("sec4-title")}
        subtitle={t("sec4-subtitle")}
        accentColor="#fb923c"
      >
        <Card title={t("comp-title")}>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>{t("brand")}</th>
                  <th>{t("model")}</th>
                  <th>{t("price-seg")}</th>
                  <th>{t("strengths")}</th>
                  <th>{t("weaknesses")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">{t("comp1-name")}</td>
                  <td><Badge color="blue">Coworking</Badge></td>
                  <td>Miễn phí (mua nước)</td>
                  <td className="text-[#34d399]">{t("comp1-strength")}</td>
                  <td className="text-[#f87171]">{t("comp1-weak")}</td>
                </tr>
                <tr>
                  <td className="font-semibold">{t("comp2-name")}</td>
                  <td><Badge color="orange">Cafe-Coworking</Badge></td>
                  <td>50k - 150k</td>
                  <td className="text-[#34d399]">{t("comp2-strength")}</td>
                  <td className="text-[#f87171]">{t("comp2-weak")}</td>
                </tr>
                <tr>
                  <td className="font-semibold">{t("comp3-name")}</td>
                  <td><Badge color="blue">Coworking & Events</Badge></td>
                  <td>150k/ngày</td>
                  <td className="text-[#34d399]">{t("comp3-strength")}</td>
                  <td className="text-[#f87171]">{t("comp3-weak")}</td>
                </tr>
                <tr>
                  <td className="font-semibold">{t("comp4-name")}</td>
                  <td><Badge color="orange">Hybrid Cafe</Badge></td>
                  <td>80k/buổi</td>
                  <td className="text-[#34d399]">{t("comp4-strength")}</td>
                  <td className="text-[#f87171]">{t("comp4-weak")}</td>
                </tr>
                <tr>
                  <td className="font-semibold">{t("comp5-name")}</td>
                  <td><Badge color="purple">Co-living</Badge></td>
                  <td>300k - 600k/đêm</td>
                  <td className="text-[#34d399]">{t("comp5-strength")}</td>
                  <td className="text-[#f87171]">{t("comp5-weak")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card title={t("pos-map")}>
          <div className="relative bg-[#0f172a] rounded-lg p-8 border border-[#334155]">
            <div className="text-center text-xs text-[#94a3b8] mb-2">{t("pos-work-focus")}</div>
            <div className="relative h-64 border-l-2 border-b-2 border-[#334155]">
              <div className="absolute -bottom-6 left-0 text-xs text-[#94a3b8]">{t("pos-budget")}</div>
              <div className="absolute -bottom-6 right-0 text-xs text-[#94a3b8]">{t("pos-premium")}</div>

              <div className="absolute left-[10%] top-[60%] text-center">
                <div className="w-3 h-3 rounded-full bg-[#fb923c] mx-auto" />
                <span className="text-xs text-[#94a3b8] block mt-1">La Việt</span>
              </div>
              <div className="absolute left-[20%] top-[30%] text-center">
                <div className="w-3 h-3 rounded-full bg-[#38bdf8] mx-auto" />
                <span className="text-xs text-[#94a3b8] block mt-1">One More</span>
              </div>
              <div className="absolute left-[45%] top-[20%] text-center">
                <div className="w-3 h-3 rounded-full bg-[#38bdf8] mx-auto" />
                <span className="text-xs text-[#94a3b8] block mt-1">Dalat Hub</span>
              </div>
              <div className="absolute left-[30%] top-[45%] text-center">
                <div className="w-3 h-3 rounded-full bg-[#fb923c] mx-auto" />
                <span className="text-xs text-[#94a3b8] block mt-1">Trang CW</span>
              </div>
              <div className="absolute left-[55%] top-[40%] text-center">
                <div className="w-3 h-3 rounded-full bg-[#a78bfa] mx-auto" />
                <span className="text-xs text-[#94a3b8] block mt-1">The Note</span>
              </div>

              <div className="absolute left-[60%] top-[15%] text-center">
                <div className="w-5 h-5 rounded-full bg-[#34d399] mx-auto ring-2 ring-[#34d399]/50 animate-pulse" />
                <span className="text-xs text-[#34d399] font-bold block mt-1">{t("your-project")}</span>
              </div>
            </div>
            <div className="mt-8 text-center bg-[#34d399]/10 p-3 rounded-lg border border-[#34d399]/20">
              <p className="text-xs text-[#e2e8f0]">
                {t("pos-desc")}
              </p>
            </div>
          </div>
        </Card>

        <Card title={t("investment-cost")}>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>{t("item")}</th>
                  <th>{t("cost")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t("invest-rent")}</td>
                  <td className="font-semibold">120 - 150 triệu</td>
                </tr>
                <tr>
                  <td>{t("invest-reno")}</td>
                  <td className="font-semibold">100 - 150 triệu</td>
                </tr>
                <tr>
                  <td>{t("invest-decor")}</td>
                  <td className="font-semibold">100 triệu</td>
                </tr>
                <tr>
                  <td>{t("invest-reserve")}</td>
                  <td className="font-semibold">100 triệu</td>
                </tr>
                <tr className="bg-[#38bdf8]/5">
                  <td className="font-bold text-[#38bdf8]">{t("total")}</td>
                  <td className="font-bold text-[#38bdf8]">~420 - 500 triệu</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <div className="text-xs text-[#64748b] flex items-center gap-2">
          <Badge color="green">{t("reliability-high")}</Badge>
          <span>{t("source")}: Dữ liệu khảo sát thực tế & Reviews Google Maps/TripAdvisor 2024</span>
        </div>
      </Section>

      {/* ===== PHẦN 5: KÊNH ONLINE ===== */}
      <Section
        id="channels"
        icon="🌐"
        title={t("sec5-title")}
        subtitle={t("sec5-subtitle")}
        accentColor="#38bdf8"
      >
        <Card title={t("channels-title")}>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>{t("channel")}</th>
                  <th>{t("reach")}</th>
                  <th>{t("commission")}</th>
                  <th>{t("suitability")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">Airbnb</td>
                  <td>{t("chan-airbnb")}</td>
                  <td>3% host + 14% guest</td>
                  <td><Badge color="green">{t("reliability-high").split(":")[1]?.trim() || "Cao"}</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">Booking.com</td>
                  <td>{t("chan-booking")}</td>
                  <td>15-20% commission</td>
                  <td><Badge color="green">{t("reliability-high").split(":")[1]?.trim() || "Cao"}</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">Google Maps / GBP</td>
                  <td>{t("chan-google")}</td>
                  <td>Miễn phí</td>
                  <td><Badge color="green">{t("reliability-high").split(":")[1]?.trim() || "Cao"}</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">Facebook Groups</td>
                  <td>{t("chan-facebook")}</td>
                  <td>Miễn phí (organic) / 2-5tr/tháng (ads)</td>
                  <td><Badge color="green">{t("reliability-high").split(":")[1]?.trim() || "Cao"}</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">Nomad List</td>
                  <td>{t("chan-nomadlist")}</td>
                  <td>Miễn phí listing</td>
                  <td><Badge color="yellow">{t("reliability-med").split(":")[1]?.trim() || "Trung bình"}</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">TikTok / Instagram</td>
                  <td>{t("chan-tiktok")}</td>
                  <td>3-10tr/tháng (content + ads)</td>
                  <td><Badge color="yellow">{t("reliability-med").split(":")[1]?.trim() || "Trung bình"}</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">Coworker.com</td>
                  <td>{t("chan-coworker")}</td>
                  <td>Miễn phí basic listing</td>
                  <td><Badge color="yellow">{t("reliability-med").split(":")[1]?.trim() || "Trung bình"}</Badge></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card title={t("kol-strategy")}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-[#38bdf8]/10 border border-[#38bdf8]/30 rounded-lg">
              <h4 className="text-sm font-semibold text-[#38bdf8] mb-2">{t("phase1-title")}</h4>
              <p className="text-sm text-[#94a3b8]">{t("phase1-desc")}</p>
            </div>
            <div className="p-4 bg-[#a78bfa]/10 border border-[#a78bfa]/30 rounded-lg">
              <h4 className="text-sm font-semibold text-[#a78bfa] mb-2">{t("phase2-title")}</h4>
              <p className="text-sm text-[#94a3b8]">{t("phase2-desc")}</p>
            </div>
          </div>
        </Card>
      </Section>

      {/* ===== PHẦN 6: VẬN HÀNH ===== */}
      <Section
        id="operations"
        icon="🏗️"
        title={t("sec6-title")}
        subtitle={t("sec6-subtitle")}
        accentColor="#a78bfa"
      >
        <Card title={t("gtm-title")}>
          <div className="space-y-6">
            <div className="relative pl-8 border-l-2 border-[#38bdf8]">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[#38bdf8] flex items-center justify-center text-xs font-bold text-[#0f172a]">1</div>
              <h4 className="text-sm font-semibold text-[#38bdf8] mb-1">{t("gtm-p1-title")}</h4>
              <ul className="text-sm text-[#94a3b8] space-y-1">
                <li>{t("gtm-p1-item1")}</li>
                <li>{t("gtm-p1-item2")}</li>
                <li>{t("gtm-p1-item3")}</li>
              </ul>
            </div>

            <div className="relative pl-8 border-l-2 border-[#a78bfa]">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[#a78bfa] flex items-center justify-center text-xs font-bold text-[#0f172a]">2</div>
              <h4 className="text-sm font-semibold text-[#a78bfa] mb-1">{t("gtm-p2-title")}</h4>
              <ul className="text-sm text-[#94a3b8] space-y-1">
                <li>{t("gtm-p2-item1")}</li>
                <li>{t("gtm-p2-item2")}</li>
              </ul>
            </div>

            <div className="relative pl-8 border-l-2 border-[#34d399]">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[#34d399] flex items-center justify-center text-xs font-bold text-[#0f172a]">3</div>
              <h4 className="text-sm font-semibold text-[#34d399] mb-1">{t("gtm-p3-title")}</h4>
              <ul className="text-sm text-[#94a3b8] space-y-1">
                <li>{t("gtm-p3-item1")}</li>
                <li>{t("gtm-p3-item2")}</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card title={t("unit-econ-title")}>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>{t("item")}</th>
                  <th>{t("col-value")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t("unit-rent")}</td>
                  <td className="font-semibold">20 - 25 triệu</td>
                </tr>
                <tr>
                  <td>{t("unit-utility")}</td>
                  <td className="font-semibold">5 - 8 triệu</td>
                </tr>
                <tr>
                  <td>{t("unit-staff")}</td>
                  <td className="font-semibold">10 - 15 triệu</td>
                </tr>
                <tr>
                  <td>{t("unit-marketing")}</td>
                  <td className="font-semibold">3 - 5 triệu</td>
                </tr>
                <tr className="bg-[#f87171]/5">
                  <td className="font-bold text-[#f87171]">{t("unit-total")}</td>
                  <td className="font-bold text-[#f87171]">~40 - 53 triệu</td>
                </tr>
                <tr>
                  <td>{t("unit-revenue")}</td>
                  <td className="font-semibold text-[#34d399]">~50 - 70 triệu</td>
                </tr>
                <tr className="bg-[#34d399]/5">
                  <td className="font-bold text-[#34d399]">{t("unit-margin")}</td>
                  <td className="font-bold text-[#34d399]">~20-30%</td>
                </tr>
                <tr>
                  <td className="font-bold">{t("unit-breakeven")}</td>
                  <td className="font-bold text-[#fbbf24]">18 - 24 {t("unit-months")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card title={t("geo-proposals")}>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#34d399]/10 border border-[#34d399]/30 rounded-lg text-center">
              <p className="text-sm font-semibold text-[#34d399] mb-1">{t("geo1")}</p>
              <p className="text-xs text-[#94a3b8]">{t("geo1-desc")}</p>
            </div>
            <div className="p-4 bg-[#38bdf8]/10 border border-[#38bdf8]/30 rounded-lg text-center">
              <p className="text-sm font-semibold text-[#38bdf8] mb-1">{t("geo2")}</p>
              <p className="text-xs text-[#94a3b8]">{t("geo2-desc")}</p>
            </div>
            <div className="p-4 bg-[#a78bfa]/10 border border-[#a78bfa]/30 rounded-lg text-center">
              <p className="text-sm font-semibold text-[#a78bfa] mb-1">{t("geo3")}</p>
              <p className="text-xs text-[#94a3b8]">{t("geo3-desc")}</p>
            </div>
          </div>
        </Card>
      </Section>

      {/* ===== PHẦN 7: PHÁP LÝ ===== */}
      <Section
        id="regulatory"
        icon="📋"
        title={t("sec7-title")}
        subtitle={t("sec7-subtitle")}
        accentColor="#fb923c"
      >
        <Card title={t("legal-title")}>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>{t("category")}</th>
                  <th>{t("requirement")}</th>
                  <th>{t("col-note")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">{t("legal-license")}</td>
                  <td>{t("legal-license-req")}</td>
                  <td>{t("legal-license-note")}</td>
                </tr>
                <tr>
                  <td className="font-semibold">{t("legal-pccc")}</td>
                  <td>{t("legal-pccc-req")}</td>
                  <td><span className="text-[#f87171] font-bold">{t("legal-pccc-note").substring(0, 20)}</span> {t("legal-pccc-note").substring(20)}</td>
                </tr>
                <tr>
                  <td className="font-semibold">{t("legal-security")}</td>
                  <td>{t("legal-security-req")}</td>
                  <td>{t("legal-security-note")}</td>
                </tr>
                <tr>
                  <td className="font-semibold">{t("legal-entity")}</td>
                  <td>{t("legal-entity-req")}</td>
                  <td>{t("legal-entity-note")}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-3 bg-[#fb923c]/10 border border-[#fb923c]/30 rounded-lg">
            <p className="text-sm text-[#fb923c]">
              {t("legal-warning")}
            </p>
          </div>
        </Card>

        <Card title={t("risks-barriers")}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-[#f87171]/10 border border-[#f87171]/30 rounded-lg">
              <h4 className="text-sm font-semibold text-[#f87171] mb-2">{t("main-risks")}</h4>
              <ul className="text-sm text-[#94a3b8] space-y-1">
                <li>{t("risk1")}</li>
                <li>{t("risk2")}</li>
                <li>{t("risk3")}</li>
                <li>{t("risk4")}</li>
              </ul>
            </div>
            <div className="p-4 bg-[#34d399]/10 border border-[#34d399]/30 rounded-lg">
              <h4 className="text-sm font-semibold text-[#34d399] mb-2">{t("mitigations")}</h4>
              <ul className="text-sm text-[#94a3b8] space-y-1">
                <li>{t("miti1")}</li>
                <li>{t("miti2")}</li>
                <li>{t("miti3")}</li>
                <li>{t("miti4")}</li>
              </ul>
            </div>
          </div>
        </Card>
      </Section>

      {/* ===== SCORECARD ===== */}
      <Section
        id="scorecard"
        icon="✅"
        title={t("scorecard-title")}
        subtitle={t("scorecard-subtitle")}
        accentColor="#34d399"
      >
        <Card>
          <ScoreBar
            label={t("market-attr")}
            score={4}
            description={t("market-attr-desc")}
          />
          <ScoreBar
            label={t("comp-intensity")}
            score={3}
            description={t("comp-intensity-desc")}
          />
          <ScoreBar
            label={t("reg-ease")}
            score={2}
            description={t("reg-ease-desc")}
          />
          <ScoreBar
            label={t("budget")}
            score={4}
            description={t("feasibility-study")}
          />
          <ScoreBar
            label={t("profitability")}
            score={3}
            description={t("profitability-desc")}
          />
        </Card>

        <div className="p-6 bg-gradient-to-r from-[#34d399]/20 to-[#38bdf8]/20 border border-[#34d399]/40 rounded-xl text-center">
          <div className="text-4xl mb-3">✅</div>
          <h3 className="text-2xl font-bold text-[#34d399] mb-2">{t("score-go")}</h3>
          <p className="text-[#94a3b8] max-w-lg mx-auto">
            <strong className="text-[#e2e8f0]">{t("score-cond")}</strong> {t("score-cond-desc")}
          </p>
        </div>

        <div className="mt-8">
          <Card title={t("actionable-title")}>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#38bdf8]/20 flex items-center justify-center text-sm font-bold text-[#38bdf8]">1</div>
                <div>
                  <p className="font-semibold text-[#e2e8f0]">{t("action1-title")}</p>
                  <p className="text-sm text-[#94a3b8]">{t("action1-desc")}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#a78bfa]/20 flex items-center justify-center text-sm font-bold text-[#a78bfa]">2</div>
                <div>
                  <p className="font-semibold text-[#e2e8f0]">{t("action2-title")}</p>
                  <p className="text-sm text-[#94a3b8]">{t("action2-desc")}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#34d399]/20 flex items-center justify-center text-sm font-bold text-[#34d399]">3</div>
                <div>
                  <p className="font-semibold text-[#e2e8f0]">{t("action3-title")}</p>
                  <p className="text-sm text-[#94a3b8]">{t("action3-desc")}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-xs text-[#64748b] text-center mt-8 pb-8">
          <p>{t("footer-disclaimer")}</p>
          <p className="mt-2">{t("footer-source")}</p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-[#334155] py-8 text-center text-sm text-[#64748b]">
        <p>{t("footer-market-research")}</p>
        <p className="mt-1">{t("footer-feasibility")}</p>
      </footer>
    </>
  );
}
