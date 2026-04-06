import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Card from "@/components/Card";
import StatCard from "@/components/StatCard";
import Badge from "@/components/Badge";
import ScoreBar from "@/components/ScoreBar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <header
        id="hero"
        className="relative pt-28 pb-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMC41IiBmaWxsPSIjMzM0MTU1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2cpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-40" />

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#1e293b] border border-[#334155]">
            <Badge color="green">PRE-LAUNCH</Badge>
            <span className="text-sm text-[#94a3b8]">
              Nghiên cứu khả thi 2024-2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#38bdf8] via-[#a78bfa] to-[#34d399] bg-clip-text text-transparent">
            Co-living & Co-working
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-[#e2e8f0] mb-2">
            Thị trường Đà Lạt, Việt Nam
          </p>
          <p className="text-[#94a3b8] max-w-2xl mx-auto mb-10 text-lg">
            Báo cáo nghiên cứu thị trường toàn diện cho nhà đầu tư cá nhân muốn
            mở không gian co-living kết hợp co-working tại Đà Lạt — với ngân sách
            200-500 triệu VND.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <StatCard label="Khách du lịch/năm" value="~8 triệu" icon="✈️" />
            <StatCard
              label="Tăng trưởng Workcation"
              value="+25%"
              sub="CAGR 3 năm tới"
              icon="📈"
              color="#34d399"
            />
            <StatCard
              label="Ngân sách"
              value="200-500tr"
              sub="VND"
              icon="💰"
              color="#fbbf24"
            />
            <StatCard
              label="Kết luận"
              value="GO"
              sub="Có điều kiện"
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
        title="Phần 1 — Tổng quan vĩ mô"
        subtitle="Macro Overview & xu hướng Digital Nomad tại Đà Lạt"
        accentColor="#38bdf8"
      >
        <Card title="Số liệu vĩ mô Đà Lạt (2024-2025)">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Chỉ số</th>
                  <th>Giá trị</th>
                  <th>Ghi chú</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dân số</td>
                  <td className="font-semibold text-[#38bdf8]">~250.560 người</td>
                  <td>Dân cư nội đô tập trung cao</td>
                </tr>
                <tr>
                  <td>Lượt khách du lịch/năm</td>
                  <td className="font-semibold text-[#38bdf8]">7,5 - 8 triệu</td>
                  <td>Tăng trưởng ~12-15% CAGR</td>
                </tr>
                <tr>
                  <td>Tỷ lệ Internet</td>
                  <td className="font-semibold text-[#38bdf8]">~85%</td>
                  <td>Phủ sóng 4G/5G tốt tại trung tâm</td>
                </tr>
                <tr>
                  <td>GDP per capita (Lâm Đồng)</td>
                  <td className="font-semibold text-[#38bdf8]">~82 triệu VND/năm</td>
                  <td>Mức tăng trưởng ổn định</td>
                </tr>
                <tr>
                  <td>Smartphone penetration</td>
                  <td className="font-semibold text-[#38bdf8]">&gt;90%</td>
                  <td>Gen Z & Millennials là đối tượng chính</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="Insight vĩ mô">
          <div className="space-y-3 text-[#94a3b8]">
            <p>
              <span className="text-[#38bdf8] font-semibold">Cao tốc Dầu Giây - Liên Khương:</span>{" "}
              Sắp hoàn thiện, rút ngắn thời gian di chuyển TP.HCM → Đà Lạt còn 3-4 tiếng.
              Thúc đẩy mạnh nhu cầu <span className="text-[#34d399]">Weekend Nomad</span>.
            </p>
            <p>
              <span className="text-[#38bdf8] font-semibold">Khí hậu độc nhất:</span>{" "}
              Đà Lạt là địa điểm duy nhất phía Nam có khí hậu ôn đới quanh năm (18-25°C),
              trở thành &ldquo;Top-of-mind&rdquo; cho xu hướng <span className="text-[#34d399]">Workcation</span> tại Việt Nam.
            </p>
            <p>
              <span className="text-[#38bdf8] font-semibold">Sân bay Liên Khương:</span>{" "}
              Bay thẳng từ Hà Nội, Đà Nẵng. Thuận lợi cho Digital Nomad từ các thành phố lớn.
            </p>
          </div>
        </Card>

        <div className="text-xs text-[#64748b] flex items-center gap-2">
          <Badge color="green">🟢 Độ tin cậy: Cao</Badge>
          <span>Nguồn: Cổng thông tin Tổng cục Du lịch Lâm Đồng, Google Search Trend</span>
        </div>
      </Section>

      {/* ===== PHẦN 2: MARKET SIZE ===== */}
      <Section
        id="market"
        icon="📈"
        title="Phần 2 — Quy mô thị trường không gian chia sẻ"
        subtitle="Market Size & tăng trưởng phân khúc Workcation"
        accentColor="#a78bfa"
      >
        <div className="grid md:grid-cols-3 gap-4">
          <StatCard
            label="Total Market (Lưu trú & Cafe)"
            value="~15.000 tỷ"
            sub="VND/năm"
            icon="🏨"
            color="#a78bfa"
          />
          <StatCard
            label="Workcation Segment"
            value="400-600K"
            sub="lượt Nomad/năm (~5-8% tổng khách)"
            icon="💻"
            color="#a78bfa"
          />
          <StatCard
            label="CAGR Co-living"
            value="+25%"
            sub="Dự báo 3 năm tới"
            icon="🚀"
            color="#34d399"
          />
        </div>

        <Card title="Đặc điểm người tiêu dùng">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-[#a78bfa] mb-2">Demographics</h4>
              <ul className="space-y-2 text-sm text-[#94a3b8]">
                <li>• <span className="text-[#e2e8f0]">Độ tuổi:</span> 18-35 (Gen Z chiếm 60%)</li>
                <li>• <span className="text-[#e2e8f0]">Thời gian lưu trú:</span> 3-7 ngày (workcation) hoặc 1-3 tháng (nomad)</li>
                <li>• <span className="text-[#e2e8f0]">Tiêu chuẩn Internet:</span> Đòi hỏi &gt;50Mbps (Zoom, upload dữ liệu)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#a78bfa] mb-2">Hành vi</h4>
              <ul className="space-y-2 text-sm text-[#94a3b8]">
                <li>• Ưu tiên không gian có <span className="text-[#34d399]">&ldquo;View&rdquo; đẹp</span> (đồi thông, thung lũng)</li>
                <li>• Lối sống <span className="text-[#34d399]">&ldquo;Slow living&rdquo;</span> — làm việc sáng, trekking/trải nghiệm chiều</li>
                <li>• Booking qua: Facebook Groups, Airbnb, Google Maps</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card title="Seasonality (Mùa vụ)">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Mùa</th>
                  <th>Thời gian</th>
                  <th>Occupancy dự kiến</th>
                  <th>Ghi chú</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Badge color="green">Cao điểm</Badge></td>
                  <td>Tháng 11 - Tháng 3</td>
                  <td className="font-semibold text-[#34d399]">80-95%</td>
                  <td>Tết, Giáng sinh, khí hậu mát nhất</td>
                </tr>
                <tr>
                  <td><Badge color="yellow">Trung bình</Badge></td>
                  <td>Tháng 4 - Tháng 6</td>
                  <td className="font-semibold text-[#fbbf24]">50-70%</td>
                  <td>Hè, khách tăng dần</td>
                </tr>
                <tr>
                  <td><Badge color="red">Thấp điểm</Badge></td>
                  <td>Tháng 7 - Tháng 10</td>
                  <td className="font-semibold text-[#f87171]">30-50%</td>
                  <td>Mùa mưa, lượng khách giảm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <div className="text-xs text-[#64748b] flex items-center gap-2">
          <Badge color="yellow">🟡 Độ tin cậy: Trung bình</Badge>
          <span>Ước tính từ dữ liệu lưu trú & xu hướng Digital Nomad</span>
        </div>
      </Section>

      {/* ===== PHẦN 3: PHÂN KHÚC ===== */}
      <Section
        id="segments"
        icon="🎯"
        title="Phần 3 — Phân khúc mô hình & Insight khách hàng"
        subtitle="3 mô hình chính, Customer Profile & Gap Analysis"
        accentColor="#34d399"
      >
        <Card title="3 mô hình cạnh tranh tại Đà Lạt">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Mô hình</th>
                  <th>Đặc điểm</th>
                  <th>Phân khúc giá</th>
                  <th>Phù hợp ngân sách 500tr</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">☕ Cafe-Coworking</td>
                  <td>Quán cafe có bàn dài, ổ cắm, WiFi mạnh</td>
                  <td>50k - 100k/buổi</td>
                  <td><Badge color="green">Cao</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">🏠 Hybrid Homestay</td>
                  <td>Homestay có góc làm việc chung</td>
                  <td>400k - 800k/đêm</td>
                  <td><Badge color="yellow">Trung bình</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">🏢 Dedicated Co-living</td>
                  <td>Buồng làm việc riêng, bếp chung, Zoom room</td>
                  <td>5tr - 9tr/tháng</td>
                  <td><Badge color="red">Cần đầu tư lớn</Badge></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-[#34d399]/10 border border-[#34d399]/30 rounded-lg">
            <p className="text-sm">
              <span className="text-[#34d399] font-semibold">💡 Cơ hội:</span>{" "}
              Phân khúc <strong>&ldquo;Work-focused Homestay&rdquo;</strong> — nơi khách lưu trú có
              không gian làm việc chuyên nghiệp (ghế công thái học, ánh sáng chuẩn) thay vì chỉ
              có bàn trang điểm kiểu cũ.
            </p>
          </div>
        </Card>

        <Card title="Chân dung khách hàng mục tiêu">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Nhóm</th>
                  <th>Đặc điểm hành vi</th>
                  <th>Nhu cầu cốt lõi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">🌍 Digital Nomad (Expat)</td>
                  <td>Ở dài hạn 1-3 tháng, làm cho công ty nước ngoài</td>
                  <td>Internet tốc độ cao, cộng đồng nói tiếng Anh</td>
                </tr>
                <tr>
                  <td className="font-semibold">💻 Freelancer Việt</td>
                  <td>Di chuyển giữa các thành phố lớn</td>
                  <td>Giá rẻ, gần trung tâm, không gian chill</td>
                </tr>
                <tr>
                  <td className="font-semibold">🏢 Remote Worker (Corporate)</td>
                  <td>Lên Đà Lạt &ldquo;đổi gió&rdquo; khi stress</td>
                  <td>Quiet space cho cuộc họp, tiện nghi cơ bản</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="Pain Points hiện tại">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#f87171]/10 border border-[#f87171]/30 rounded-lg">
              <p className="text-sm font-semibold text-[#f87171] mb-1">Pain #1</p>
              <p className="text-sm text-[#94a3b8]">
                Homestay đẹp nhưng WiFi thường xuyên chập chờn khi có đông khách
              </p>
            </div>
            <div className="p-4 bg-[#f87171]/10 border border-[#f87171]/30 rounded-lg">
              <p className="text-sm font-semibold text-[#f87171] mb-1">Pain #2</p>
              <p className="text-sm text-[#94a3b8]">
                Tiếng ồn từ khách du lịch thông thường làm gián đoạn công việc Nomad
              </p>
            </div>
            <div className="p-4 bg-[#f87171]/10 border border-[#f87171]/30 rounded-lg">
              <p className="text-sm font-semibold text-[#f87171] mb-1">Pain #3</p>
              <p className="text-sm text-[#94a3b8]">
                Thiếu không gian riêng cho các buổi họp trực tuyến (Private Zoom Room)
              </p>
            </div>
          </div>
        </Card>

        <Card title="Gap Analysis">
          <div className="p-4 bg-[#a78bfa]/10 border border-[#a78bfa]/30 rounded-lg">
            <p className="text-sm text-[#94a3b8]">
              Thị trường đang thiếu các không gian Co-living có giá{" "}
              <span className="text-[#a78bfa] font-semibold">&ldquo;Masstige&rdquo; (7-10 triệu/tháng)</span>{" "}
              trọn gói cả ở và làm việc, với thiết kế tối giản nhưng công năng làm việc cao.
              Đây chính là khoảng trống lớn nhất có thể khai thác.
            </p>
          </div>
        </Card>
      </Section>

      {/* ===== PHẦN 4: ĐỐI THỦ ===== */}
      <Section
        id="competitors"
        icon="⚔️"
        title="Phần 4 — Bản đồ đối thủ cạnh tranh"
        subtitle="Top 5 đối thủ & Positioning Map"
        accentColor="#fb923c"
      >
        <Card title="Top 5 đối thủ tiêu biểu tại Đà Lạt">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Thương hiệu</th>
                  <th>Mô hình</th>
                  <th>Giá tham chiếu</th>
                  <th>Điểm mạnh</th>
                  <th>Điểm yếu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">One More Coworking</td>
                  <td><Badge color="blue">Coworking</Badge></td>
                  <td>Miễn phí (mua nước)</td>
                  <td className="text-[#34d399]">Cộng đồng Nomad đời đầu</td>
                  <td className="text-[#f87171]">Không gian cũ, ít view</td>
                </tr>
                <tr>
                  <td className="font-semibold">La Việt Coffee</td>
                  <td><Badge color="orange">Cafe-Coworking</Badge></td>
                  <td>50k - 150k</td>
                  <td className="text-[#34d399]">Thương hiệu mạnh, rộng</td>
                  <td className="text-[#f87171]">Rất ồn vào cuối tuần</td>
                </tr>
                <tr>
                  <td className="font-semibold">Dalat Hub</td>
                  <td><Badge color="blue">Coworking & Events</Badge></td>
                  <td>150k/ngày</td>
                  <td className="text-[#34d399]">Chuyên nghiệp nhất</td>
                  <td className="text-[#f87171]">Xa trung tâm</td>
                </tr>
                <tr>
                  <td className="font-semibold">Trang Coworking</td>
                  <td><Badge color="orange">Hybrid Cafe</Badge></td>
                  <td>80k/buổi</td>
                  <td className="text-[#34d399]">Decor hiện đại, yên tĩnh</td>
                  <td className="text-[#f87171]">Diện tích nhỏ</td>
                </tr>
                <tr>
                  <td className="font-semibold">The Note Dalat</td>
                  <td><Badge color="purple">Co-living</Badge></td>
                  <td>300k - 600k/đêm</td>
                  <td className="text-[#34d399]">View cực đẹp</td>
                  <td className="text-[#f87171]">WiFi chưa ổn định</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="Positioning Map">
          <div className="relative bg-[#0f172a] rounded-lg p-8 border border-[#334155]">
            <div className="text-center text-xs text-[#94a3b8] mb-2">WORK FOCUS ↑</div>
            <div className="relative h-64 border-l-2 border-b-2 border-[#334155]">
              <div className="absolute -bottom-6 left-0 text-xs text-[#94a3b8]">BUDGET</div>
              <div className="absolute -bottom-6 right-0 text-xs text-[#94a3b8]">PREMIUM →</div>

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
                <span className="text-xs text-[#34d399] font-bold block mt-1">DỰ ÁN CỦA BẠN</span>
              </div>
            </div>
            <p className="text-xs text-[#94a3b8] mt-8 text-center">
              Vị trí đề xuất: <span className="text-[#34d399] font-semibold">Work Focus × Masstige Price</span> —
              &ldquo;Workspace tốt nhất trong phân khúc giá dưới 10tr/tháng&rdquo;
            </p>
          </div>
        </Card>

        <Card title="Chi phí đầu tư dự kiến (Mô hình Sub-lease)">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Hạng mục</th>
                  <th>Chi phí (VND)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cọc thuê nhà (6 tháng)</td>
                  <td className="font-semibold">120 - 150 triệu</td>
                </tr>
                <tr>
                  <td>Cải tạo workspace (bàn ghế, Internet, Solar)</td>
                  <td className="font-semibold">100 - 150 triệu</td>
                </tr>
                <tr>
                  <td>Decor phòng ở (3-5 phòng)</td>
                  <td className="font-semibold">100 triệu</td>
                </tr>
                <tr>
                  <td>Dự phòng vận hành (3 tháng)</td>
                  <td className="font-semibold">100 triệu</td>
                </tr>
                <tr className="bg-[#38bdf8]/5">
                  <td className="font-bold text-[#38bdf8]">TỔNG</td>
                  <td className="font-bold text-[#38bdf8]">~420 - 500 triệu</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <div className="text-xs text-[#64748b] flex items-center gap-2">
          <Badge color="green">🟢 Độ tin cậy: Cao</Badge>
          <span>Dữ liệu khảo sát thực tế & Reviews Google Maps/TripAdvisor 2024</span>
        </div>
      </Section>

      {/* ===== PHẦN 5: KÊNH ONLINE ===== */}
      <Section
        id="channels"
        icon="🌐"
        title="Phần 5 — Kênh Online & Marketing"
        subtitle="OTA, Social Media, Cộng đồng Digital Nomad"
        accentColor="#38bdf8"
      >
        <Card title="Kênh booking & tiếp cận khách hàng">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Kênh</th>
                  <th>Reach</th>
                  <th>Commission / Chi phí</th>
                  <th>Phù hợp</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">Airbnb</td>
                  <td>Toàn cầu, Expat mạnh</td>
                  <td>3% host + 14% guest</td>
                  <td><Badge color="green">Cao</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">Booking.com</td>
                  <td>Toàn cầu, đông khách châu Âu</td>
                  <td>15-20% commission</td>
                  <td><Badge color="green">Cao</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">Google Maps / GBP</td>
                  <td>Local SEO, khách tìm quanh khu vực</td>
                  <td>Miễn phí</td>
                  <td><Badge color="green">Rất cao</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">Facebook Groups</td>
                  <td>Digital Nomad VN, Expat groups</td>
                  <td>Miễn phí (organic) / 2-5tr/tháng (ads)</td>
                  <td><Badge color="green">Rất cao</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">Nomad List</td>
                  <td>Cộng đồng Nomad quốc tế</td>
                  <td>Miễn phí listing</td>
                  <td><Badge color="yellow">Trung bình</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">TikTok / Instagram</td>
                  <td>Gen Z, visual-driven</td>
                  <td>3-10tr/tháng (content + ads)</td>
                  <td><Badge color="yellow">Trung bình</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">Coworker.com</td>
                  <td>Cộng đồng coworking quốc tế</td>
                  <td>Miễn phí basic listing</td>
                  <td><Badge color="yellow">Trung bình</Badge></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="Chiến lược KOL / Influencer">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-[#38bdf8]/10 border border-[#38bdf8]/30 rounded-lg">
              <h4 className="text-sm font-semibold text-[#38bdf8] mb-2">Phase 1: Review miễn phí</h4>
              <p className="text-sm text-[#94a3b8]">
                Mời 5-10 Digital Nomad có ảnh hưởng đến ở trải nghiệm miễn phí.
                Đổi lại: review chân thực trên social media + Google Maps.
              </p>
            </div>
            <div className="p-4 bg-[#a78bfa]/10 border border-[#a78bfa]/30 rounded-lg">
              <h4 className="text-sm font-semibold text-[#a78bfa] mb-2">Phase 2: Paid collab</h4>
              <p className="text-sm text-[#94a3b8]">
                Collab với Travel Blogger / Lifestyle Creator. Chi phí: 2-10tr/bài tùy follower.
                Platform ưu tiên: TikTok, Instagram Reels, YouTube Shorts.
              </p>
            </div>
          </div>
        </Card>
      </Section>

      {/* ===== PHẦN 6: VẬN HÀNH ===== */}
      <Section
        id="operations"
        icon="🏗️"
        title="Phần 6 — Mô hình vận hành & Chi phí"
        subtitle="Sub-lease, hạ tầng, nhân sự, unit economics"
        accentColor="#a78bfa"
      >
        <Card title="Chiến lược GTM — Online-First & Community-Driven">
          <div className="space-y-6">
            <div className="relative pl-8 border-l-2 border-[#38bdf8]">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[#38bdf8] flex items-center justify-center text-xs font-bold text-[#0f172a]">1</div>
              <h4 className="text-sm font-semibold text-[#38bdf8] mb-1">Phase 1: Chuẩn bị & Build Social Proof (Tháng 1-2)</h4>
              <ul className="text-sm text-[#94a3b8] space-y-1">
                <li>• Cải tạo nhà, lắp đặt hạ tầng Internet (3 line: Viettel, VNPT, FPT)</li>
                <li>• Tạo profile Google Maps (SEO địa phương cực kỳ quan trọng)</li>
                <li>• Setup fanpage + Group cộng đồng riêng</li>
              </ul>
            </div>

            <div className="relative pl-8 border-l-2 border-[#a78bfa]">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[#a78bfa] flex items-center justify-center text-xs font-bold text-[#0f172a]">2</div>
              <h4 className="text-sm font-semibold text-[#a78bfa] mb-1">Phase 2: Soft Opening & KOL Review (Tháng 3-4)</h4>
              <ul className="text-sm text-[#94a3b8] space-y-1">
                <li>• Mời 5-10 Digital Nomad trải nghiệm miễn phí để lấy review</li>
                <li>• Chạy FB Ads target: Freelancer, Remote workers tại TP.HCM & Hà Nội</li>
              </ul>
            </div>

            <div className="relative pl-8 border-l-2 border-[#34d399]">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[#34d399] flex items-center justify-center text-xs font-bold text-[#0f172a]">3</div>
              <h4 className="text-sm font-semibold text-[#34d399] mb-1">Phase 3: Scale & Optimization (Tháng 5-6)</h4>
              <ul className="text-sm text-[#94a3b8] space-y-1">
                <li>• Tối ưu tỷ lệ lấp đầy qua Booking.com / Airbnb</li>
                <li>• Bắt đầu cung cấp dịch vụ add-on: Coffee, Tour buổi chiều cho Nomad</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card title="Unit Economics sơ bộ (Base Case)">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Hạng mục</th>
                  <th>Số liệu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tiền thuê nhà/tháng</td>
                  <td className="font-semibold">20 - 25 triệu</td>
                </tr>
                <tr>
                  <td>Internet + Điện nước</td>
                  <td className="font-semibold">5 - 8 triệu</td>
                </tr>
                <tr>
                  <td>Nhân sự (1-2 người)</td>
                  <td className="font-semibold">10 - 15 triệu</td>
                </tr>
                <tr>
                  <td>Marketing</td>
                  <td className="font-semibold">3 - 5 triệu</td>
                </tr>
                <tr className="bg-[#f87171]/5">
                  <td className="font-bold text-[#f87171]">Tổng chi phí/tháng</td>
                  <td className="font-bold text-[#f87171]">~40 - 53 triệu</td>
                </tr>
                <tr>
                  <td>Doanh thu kỳ vọng (occupancy 60%)</td>
                  <td className="font-semibold text-[#34d399]">~50 - 70 triệu</td>
                </tr>
                <tr className="bg-[#34d399]/5">
                  <td className="font-bold text-[#34d399]">Margin</td>
                  <td className="font-bold text-[#34d399]">~20-30%</td>
                </tr>
                <tr>
                  <td className="font-bold">Breakeven</td>
                  <td className="font-bold text-[#fbbf24]">18 - 24 tháng</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="Khu vực địa lý đề xuất">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#34d399]/10 border border-[#34d399]/30 rounded-lg text-center">
              <p className="text-sm font-semibold text-[#34d399] mb-1">🥇 Phường 3, Phường 4</p>
              <p className="text-xs text-[#94a3b8]">Địa hình đồi đẹp, vẫn gần phố. Giá thuê 18-25tr/tháng</p>
            </div>
            <div className="p-4 bg-[#38bdf8]/10 border border-[#38bdf8]/30 rounded-lg text-center">
              <p className="text-sm font-semibold text-[#38bdf8] mb-1">🥈 Khu Cam Ly</p>
              <p className="text-xs text-[#94a3b8]">View thung lũng, yên tĩnh. Giá thuê 15-20tr/tháng</p>
            </div>
            <div className="p-4 bg-[#a78bfa]/10 border border-[#a78bfa]/30 rounded-lg text-center">
              <p className="text-sm font-semibold text-[#a78bfa] mb-1">🥉 Khu Hồ Tuyền Lâm</p>
              <p className="text-xs text-[#94a3b8]">View hồ, premium. Giá thuê 25-35tr/tháng</p>
            </div>
          </div>
        </Card>
      </Section>

      {/* ===== PHẦN 7: PHÁP LÝ ===== */}
      <Section
        id="regulatory"
        icon="📋"
        title="Phần 7 — Pháp lý & Rào cản"
        subtitle="Giấy phép, PCCC, thuế, rủi ro"
        accentColor="#fb923c"
      >
        <Card title="Yêu cầu pháp lý">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Danh mục</th>
                  <th>Yêu cầu</th>
                  <th>Lưu ý</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">Giấy phép KD</td>
                  <td>Hộ kinh doanh cá thể</td>
                  <td>Phù hợp quy mô &lt;10 phòng. Thuế khoán đơn giản.</td>
                </tr>
                <tr>
                  <td className="font-semibold">PCCC</td>
                  <td>Giấy chứng nhận đủ điều kiện PCCC</td>
                  <td><span className="text-[#f87171]">Quan trọng hàng đầu</span> tại Đà Lạt (sau các vụ hỏa hoạn gần đây)</td>
                </tr>
                <tr>
                  <td className="font-semibold">An ninh trật tự</td>
                  <td>Khai báo tạm trú qua phần mềm</td>
                  <td>Bắt buộc đối với khách ở qua đêm</td>
                </tr>
                <tr>
                  <td className="font-semibold">Pháp nhân</td>
                  <td>Hợp đồng thuê nhà dài hạn</td>
                  <td>Cần công chứng và ghi rõ mục đích KD/cho thuê lại</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-3 bg-[#fb923c]/10 border border-[#fb923c]/30 rounded-lg">
            <p className="text-sm text-[#fb923c]">
              ⚠️ Đây là báo cáo nghiên cứu. Cần tư vấn pháp lý địa phương xác nhận trước khi triển khai.
            </p>
          </div>
        </Card>

        <Card title="Rào cản & Rủi ro">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-[#f87171]/10 border border-[#f87171]/30 rounded-lg">
              <h4 className="text-sm font-semibold text-[#f87171] mb-2">Rủi ro chính</h4>
              <ul className="text-sm text-[#94a3b8] space-y-1">
                <li>• Mùa thấp điểm (T7-T10): occupancy giảm còn 30-50%</li>
                <li>• Cạnh tranh homestay giá rẻ (200-300k/đêm)</li>
                <li>• Hạ tầng mạng ở khu vực xa trung tâm còn yếu</li>
                <li>• Quy định PCCC đang siết chặt</li>
              </ul>
            </div>
            <div className="p-4 bg-[#34d399]/10 border border-[#34d399]/30 rounded-lg">
              <h4 className="text-sm font-semibold text-[#34d399] mb-2">Giải pháp (Mitigation)</h4>
              <ul className="text-sm text-[#94a3b8] space-y-1">
                <li>• Giảm giá mùa thấp điểm, target long-stay nomad</li>
                <li>• Khác biệt hóa bằng workspace chuyên nghiệp</li>
                <li>• Kiểm tra hạ tầng trước khi ký hợp đồng thuê</li>
                <li>• Tư vấn PCCC ngay khi chọn nhà</li>
              </ul>
            </div>
          </div>
        </Card>
      </Section>

      {/* ===== SCORECARD ===== */}
      <Section
        id="scorecard"
        icon="✅"
        title="Scorecard — Đánh giá GO / NO-GO"
        subtitle="5 tiêu chí đánh giá khả thi đầu tư"
        accentColor="#34d399"
      >
        <Card>
          <ScoreBar
            label="Market Attractiveness"
            score={4}
            description="Nhu cầu lớn, xu hướng dịch chuyển bền vững. Digital Nomad & Workcation đang bùng nổ."
          />
          <ScoreBar
            label="Competitive Intensity"
            score={3}
            description="Nhiều đối thủ nhỏ lẻ nhưng thiếu tính chuyên nghiệp. Chưa có brand co-living nổi bật."
          />
          <ScoreBar
            label="Regulatory Ease"
            score={2}
            description="Quy định PCCC và quản lý lưu trú tại Đà Lạt đang siết chặt sau các vụ cháy."
          />
          <ScoreBar
            label="Budget Fit"
            score={4}
            description="500tr đủ để làm mô hình Boutique Co-living (5-7 phòng) với mô hình sub-lease."
          />
          <ScoreBar
            label="Profitability"
            score={3}
            description="ROI trung bình 18-24 tháng nếu vận hành tốt. Margin 20-30% ở occupancy 60%."
          />
        </Card>

        <div className="p-6 bg-gradient-to-r from-[#34d399]/20 to-[#38bdf8]/20 border border-[#34d399]/40 rounded-xl text-center">
          <div className="text-4xl mb-3">✅</div>
          <h3 className="text-2xl font-bold text-[#34d399] mb-2">CONDITIONAL GO</h3>
          <p className="text-[#94a3b8] max-w-lg mx-auto">
            <strong className="text-[#e2e8f0]">Điều kiện:</strong> Phải tìm được mặt bằng có vị trí đắc địa (view)
            với giá thuê &lt;25tr/tháng để đảm bảo điểm hòa vốn trong năm đầu tiên.
          </p>
        </div>

        <Card title="3 việc làm ngay (Actionable Next Steps)">
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#38bdf8]/20 flex items-center justify-center text-sm font-bold text-[#38bdf8]">1</div>
              <div>
                <p className="font-semibold text-[#e2e8f0]">Săn nhà</p>
                <p className="text-sm text-[#94a3b8]">
                  Tìm kiếm nhà nguyên căn khu vực Phường 3, Phường 4 — nơi có địa hình đồi đẹp nhưng vẫn gần phố.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#a78bfa]/20 flex items-center justify-center text-sm font-bold text-[#a78bfa]">2</div>
              <div>
                <p className="font-semibold text-[#e2e8f0]">Khảo sát nhà mạng</p>
                <p className="text-sm text-[#94a3b8]">
                  Kiểm tra hạ tầng cáp quang tại vị trí định thuê (tránh các khu hẻm sâu chưa có fiber).
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#34d399]/20 flex items-center justify-center text-sm font-bold text-[#34d399]">3</div>
              <div>
                <p className="font-semibold text-[#e2e8f0]">Tư vấn PCCC</p>
                <p className="text-sm text-[#94a3b8]">
                  Nhờ dịch vụ tư vấn sơ đồ PCCC ngay khi chọn được nhà để tránh sửa chữa tốn kém sau này.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-xs text-[#64748b] text-center mt-8 pb-8">
          <p>⚠️ Báo cáo này dựa trên dữ liệu thị trường công khai, không thay thế cho lời khuyên đầu tư tài chính chuyên sâu.</p>
          <p className="mt-2">Nguồn: Sở Du lịch Lâm Đồng, Google Trends, Facebook Groups Digital Nomad VN, Google Maps Reviews 2024</p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-[#334155] py-8 text-center text-sm text-[#64748b]">
        <p>Co-living & Co-working Market Research — Đà Lạt, Việt Nam</p>
        <p className="mt-1">Nghiên cứu khả thi 2024-2026</p>
      </footer>
    </>
  );
}
