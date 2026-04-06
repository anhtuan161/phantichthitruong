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
              Nghien cuu kha thi 2024-2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#38bdf8] via-[#a78bfa] to-[#34d399] bg-clip-text text-transparent">
            Co-living & Co-working
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-[#e2e8f0] mb-2">
            Thi truong Da Lat, Viet Nam
          </p>
          <p className="text-[#94a3b8] max-w-2xl mx-auto mb-10 text-lg">
            Bao cao nghien cuu thi truong toan dien cho nha dau tu ca nhan muon
            mo khong gian co-living ket hop co-working tai Da Lat — voi ngan sach
            200-500 trieu VND.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <StatCard label="Khach du lich/nam" value="~8 trieu" icon="✈️" />
            <StatCard
              label="Tang truong Workcation"
              value="+25%"
              sub="CAGR 3 nam toi"
              icon="📈"
              color="#34d399"
            />
            <StatCard
              label="Ngan sach"
              value="200-500tr"
              sub="VND"
              icon="💰"
              color="#fbbf24"
            />
            <StatCard
              label="Ket luan"
              value="GO"
              sub="Co dieu kien"
              icon="✅"
              color="#34d399"
            />
          </div>
        </div>
      </header>

      {/* ===== PHAN 1: MACRO ===== */}
      <Section
        id="macro"
        icon="📊"
        title="Phan 1 — Tong quan vi mo"
        subtitle="Macro Overview & xu huong Digital Nomad tai Da Lat"
        accentColor="#38bdf8"
      >
        <Card title="So lieu vi mo Da Lat (2024-2025)">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Chi so</th>
                  <th>Gia tri</th>
                  <th>Ghi chu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dan so</td>
                  <td className="font-semibold text-[#38bdf8]">~250,560 nguoi</td>
                  <td>Dan cu noi do tap trung cao</td>
                </tr>
                <tr>
                  <td>Luot khach du lich/nam</td>
                  <td className="font-semibold text-[#38bdf8]">7.5 - 8 trieu</td>
                  <td>Tang truong ~12-15% CAGR</td>
                </tr>
                <tr>
                  <td>Ty le Internet</td>
                  <td className="font-semibold text-[#38bdf8]">~85%</td>
                  <td>Phu song 4G/5G tot tai trung tam</td>
                </tr>
                <tr>
                  <td>GDP per capita (Lam Dong)</td>
                  <td className="font-semibold text-[#38bdf8]">~82 trieu VND/nam</td>
                  <td>Muc tang truong on dinh</td>
                </tr>
                <tr>
                  <td>Smartphone penetration</td>
                  <td className="font-semibold text-[#38bdf8]">&gt;90%</td>
                  <td>Gen Z & Millennials la doi tuong chinh</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="Insight vi mo">
          <div className="space-y-3 text-[#94a3b8]">
            <p>
              <span className="text-[#38bdf8] font-semibold">Cao toc Dau Giay - Lien Khuong:</span>{" "}
              Sap hoan thien, rut ngan thoi gian di chuyen TP.HCM → Da Lat con 3-4 tieng.
              Thuc day manh nhu cau <span className="text-[#34d399]">Weekend Nomad</span>.
            </p>
            <p>
              <span className="text-[#38bdf8] font-semibold">Khi hau doc nhat:</span>{" "}
              Da Lat la dia diem duy nhat phia Nam co khi hau on doi quanh nam (18-25°C),
              tro thanh &ldquo;Top-of-mind&rdquo; cho xu huong <span className="text-[#34d399]">Workcation</span> tai Viet Nam.
            </p>
            <p>
              <span className="text-[#38bdf8] font-semibold">San bay Lien Khuong:</span>{" "}
              Bay thang tu Ha Noi, Da Nang. Thuan loi cho Digital Nomad tu cac thanh pho lon.
            </p>
          </div>
        </Card>

        <div className="text-xs text-[#64748b] flex items-center gap-2">
          <Badge color="green">🟢 Do tin cay: Cao</Badge>
          <span>Nguon: Cong thong tin Tong cuc Du lich Lam Dong, Google Search Trend</span>
        </div>
      </Section>

      {/* ===== PHAN 2: MARKET SIZE ===== */}
      <Section
        id="market"
        icon="📈"
        title="Phan 2 — Quy mo thi truong khong gian chia se"
        subtitle="Market Size & tang truong phan khuc Workcation"
        accentColor="#a78bfa"
      >
        <div className="grid md:grid-cols-3 gap-4">
          <StatCard
            label="Total Market (Luu tru & Cafe)"
            value="~15,000 ty"
            sub="VND/nam"
            icon="🏨"
            color="#a78bfa"
          />
          <StatCard
            label="Workcation Segment"
            value="400-600K"
            sub="luot Nomad/nam (~5-8% tong khach)"
            icon="💻"
            color="#a78bfa"
          />
          <StatCard
            label="CAGR Co-living"
            value="+25%"
            sub="Du bao 3 nam toi"
            icon="🚀"
            color="#34d399"
          />
        </div>

        <Card title="Dac diem nguoi tieu dung">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-[#a78bfa] mb-2">Demographics</h4>
              <ul className="space-y-2 text-sm text-[#94a3b8]">
                <li>• <span className="text-[#e2e8f0]">Do tuoi:</span> 18-35 (Gen Z chiem 60%)</li>
                <li>• <span className="text-[#e2e8f0]">Thoi gian luu tru:</span> 3-7 ngay (workcation) hoac 1-3 thang (nomad)</li>
                <li>• <span className="text-[#e2e8f0]">Tieu chuan Internet:</span> Doi hoi &gt;50Mbps (Zoom, upload du lieu)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#a78bfa] mb-2">Hanh vi</h4>
              <ul className="space-y-2 text-sm text-[#94a3b8]">
                <li>• Uu tien khong gian co <span className="text-[#34d399]">&ldquo;View&rdquo; dep</span> (doi thong, thung lung)</li>
                <li>• Loi song <span className="text-[#34d399]">&ldquo;Slow living&rdquo;</span> — lam viec sang, trekking/trai nghiem chieu</li>
                <li>• Booking qua: Facebook Groups, Airbnb, Google Maps</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card title="Seasonality (Mua vu)">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Mua</th>
                  <th>Thoi gian</th>
                  <th>Occupancy du kien</th>
                  <th>Ghi chu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Badge color="green">Cao diem</Badge></td>
                  <td>Thang 11 - Thang 3</td>
                  <td className="font-semibold text-[#34d399]">80-95%</td>
                  <td>Tet, Giang sinh, khi hau mat nhat</td>
                </tr>
                <tr>
                  <td><Badge color="yellow">Trung binh</Badge></td>
                  <td>Thang 4 - Thang 6</td>
                  <td className="font-semibold text-[#fbbf24]">50-70%</td>
                  <td>He, khach tang dan</td>
                </tr>
                <tr>
                  <td><Badge color="red">Thap diem</Badge></td>
                  <td>Thang 7 - Thang 10</td>
                  <td className="font-semibold text-[#f87171]">30-50%</td>
                  <td>Mua mua, luong khach giam</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <div className="text-xs text-[#64748b] flex items-center gap-2">
          <Badge color="yellow">🟡 Do tin cay: Trung binh</Badge>
          <span>Uoc tinh tu du lieu luu tru & xu huong Digital Nomad</span>
        </div>
      </Section>

      {/* ===== PHAN 3: PHAN KHUC ===== */}
      <Section
        id="segments"
        icon="🎯"
        title="Phan 3 — Phan khuc mo hinh & Insight khach hang"
        subtitle="3 mo hinh chinh, Customer Profile & Gap Analysis"
        accentColor="#34d399"
      >
        <Card title="3 mo hinh canh tranh tai Da Lat">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Mo hinh</th>
                  <th>Dac diem</th>
                  <th>Phan khuc gia</th>
                  <th>Phu hop ngan sach 500tr</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">☕ Cafe-Coworking</td>
                  <td>Quan cafe co ban dai, o cam, WiFi manh</td>
                  <td>50k - 100k/buoi</td>
                  <td><Badge color="green">Cao</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">🏠 Hybrid Homestay</td>
                  <td>Homestay co goc lam viec chung</td>
                  <td>400k - 800k/dem</td>
                  <td><Badge color="yellow">Trung binh</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">🏢 Dedicated Co-living</td>
                  <td>Buong lam viec rieng, bep chung, Zoom room</td>
                  <td>5tr - 9tr/thang</td>
                  <td><Badge color="red">Can dau tu lon</Badge></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-[#34d399]/10 border border-[#34d399]/30 rounded-lg">
            <p className="text-sm">
              <span className="text-[#34d399] font-semibold">💡 Co hoi:</span>{" "}
              Phan khuc <strong>&ldquo;Work-focused Homestay&rdquo;</strong> — noi khach luu tru co
              khong gian lam viec chuyen nghiep (ghe cong thai hoc, anh sang chuan) thay vi chi
              co ban trang diem kieu cu.
            </p>
          </div>
        </Card>

        <Card title="Chan dung khach hang muc tieu">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Nhom</th>
                  <th>Dac diem hanh vi</th>
                  <th>Nhu cau cot loi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">🌍 Digital Nomad (Expat)</td>
                  <td>O dai han 1-3 thang, lam cho cty nuoc ngoai</td>
                  <td>Internet toc do cao, cong dong noi tieng Anh</td>
                </tr>
                <tr>
                  <td className="font-semibold">💻 Freelancer Viet</td>
                  <td>Di chuyen giua cac thanh pho lon</td>
                  <td>Gia re, gan trung tam, khong gian chill</td>
                </tr>
                <tr>
                  <td className="font-semibold">🏢 Remote Worker (Corporate)</td>
                  <td>Len Da Lat &ldquo;doi gio&rdquo; khi stress</td>
                  <td>Quiet space cho cuoc hop, tien nghi co ban</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="Pain Points hien tai">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#f87171]/10 border border-[#f87171]/30 rounded-lg">
              <p className="text-sm font-semibold text-[#f87171] mb-1">Pain #1</p>
              <p className="text-sm text-[#94a3b8]">
                Homestay dep nhung WiFi thuong xuyen chap chon khi co dong khach
              </p>
            </div>
            <div className="p-4 bg-[#f87171]/10 border border-[#f87171]/30 rounded-lg">
              <p className="text-sm font-semibold text-[#f87171] mb-1">Pain #2</p>
              <p className="text-sm text-[#94a3b8]">
                Tieng on tu khach du lich thong thuong lam gian doan cong viec Nomad
              </p>
            </div>
            <div className="p-4 bg-[#f87171]/10 border border-[#f87171]/30 rounded-lg">
              <p className="text-sm font-semibold text-[#f87171] mb-1">Pain #3</p>
              <p className="text-sm text-[#94a3b8]">
                Thieu khong gian rieng cho cac buoi hop truc tuyen (Private Zoom Room)
              </p>
            </div>
          </div>
        </Card>

        <Card title="Gap Analysis">
          <div className="p-4 bg-[#a78bfa]/10 border border-[#a78bfa]/30 rounded-lg">
            <p className="text-sm text-[#94a3b8]">
              Thi truong dang thieu cac khong gian Co-living co gia{" "}
              <span className="text-[#a78bfa] font-semibold">&ldquo;Masstige&rdquo; (7-10 trieu/thang)</span>{" "}
              tron goi ca o va lam viec, voi thiet ke toi gian nhung cong nang lam viec cao.
              Day chinh la khoang trong lon nhat co the khai thac.
            </p>
          </div>
        </Card>
      </Section>

      {/* ===== PHAN 4: DOI THU ===== */}
      <Section
        id="competitors"
        icon="⚔️"
        title="Phan 4 — Ban do doi thu canh tranh"
        subtitle="Top 5 doi thu & Positioning Map"
        accentColor="#fb923c"
      >
        <Card title="Top 5 doi thu tieu bieu tai Da Lat">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Thuong hieu</th>
                  <th>Mo hinh</th>
                  <th>Gia tham chieu</th>
                  <th>Diem manh</th>
                  <th>Diem yeu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">One More Coworking</td>
                  <td><Badge color="blue">Coworking</Badge></td>
                  <td>Mien phi (mua nuoc)</td>
                  <td className="text-[#34d399]">Cong dong Nomad doi dau</td>
                  <td className="text-[#f87171]">Khong gian cu, it view</td>
                </tr>
                <tr>
                  <td className="font-semibold">La Viet Coffee</td>
                  <td><Badge color="orange">Cafe-Coworking</Badge></td>
                  <td>50k - 150k</td>
                  <td className="text-[#34d399]">Thuong hieu manh, rong</td>
                  <td className="text-[#f87171]">Rat on vao cuoi tuan</td>
                </tr>
                <tr>
                  <td className="font-semibold">Dalat Hub</td>
                  <td><Badge color="blue">Coworking & Events</Badge></td>
                  <td>150k/ngay</td>
                  <td className="text-[#34d399]">Chuyen nghiep nhat</td>
                  <td className="text-[#f87171]">Xa trung tam</td>
                </tr>
                <tr>
                  <td className="font-semibold">Trang Coworking</td>
                  <td><Badge color="orange">Hybrid Cafe</Badge></td>
                  <td>80k/buoi</td>
                  <td className="text-[#34d399]">Decor hien dai, yen tinh</td>
                  <td className="text-[#f87171]">Dien tich nho</td>
                </tr>
                <tr>
                  <td className="font-semibold">The Note Dalat</td>
                  <td><Badge color="purple">Co-living</Badge></td>
                  <td>300k - 600k/dem</td>
                  <td className="text-[#34d399]">View cuc dep</td>
                  <td className="text-[#f87171]">WiFi chua on dinh</td>
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
                <span className="text-xs text-[#94a3b8] block mt-1">La Viet</span>
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
                <span className="text-xs text-[#34d399] font-bold block mt-1">DU AN CUA BAN</span>
              </div>
            </div>
            <p className="text-xs text-[#94a3b8] mt-8 text-center">
              Vi tri de xuat: <span className="text-[#34d399] font-semibold">Work Focus × Masstige Price</span> —
              &ldquo;Workspace tot nhat trong phan khuc gia duoi 10tr/thang&rdquo;
            </p>
          </div>
        </Card>

        <Card title="Chi phi dau tu du kien (Mo hinh Sub-lease)">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Hang muc</th>
                  <th>Chi phi (VND)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Coc thue nha (6 thang)</td>
                  <td className="font-semibold">120 - 150 trieu</td>
                </tr>
                <tr>
                  <td>Cai tao workspace (ban ghe, Internet, Solar)</td>
                  <td className="font-semibold">100 - 150 trieu</td>
                </tr>
                <tr>
                  <td>Decor phong o (3-5 phong)</td>
                  <td className="font-semibold">100 trieu</td>
                </tr>
                <tr>
                  <td>Du phong van hanh (3 thang)</td>
                  <td className="font-semibold">100 trieu</td>
                </tr>
                <tr className="bg-[#38bdf8]/5">
                  <td className="font-bold text-[#38bdf8]">TONG</td>
                  <td className="font-bold text-[#38bdf8]">~420 - 500 trieu</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <div className="text-xs text-[#64748b] flex items-center gap-2">
          <Badge color="green">🟢 Do tin cay: Cao</Badge>
          <span>Du lieu khao sat thuc te & Reviews Google Maps/TripAdvisor 2024</span>
        </div>
      </Section>

      {/* ===== PHAN 5: KENH ONLINE ===== */}
      <Section
        id="channels"
        icon="🌐"
        title="Phan 5 — Kenh Online & Marketing"
        subtitle="OTA, Social Media, Cong dong Digital Nomad"
        accentColor="#38bdf8"
      >
        <Card title="Kenh booking & tiep can khach hang">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Kenh</th>
                  <th>Reach</th>
                  <th>Commission / Chi phi</th>
                  <th>Phu hop</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">Airbnb</td>
                  <td>Toan cau, Expat manh</td>
                  <td>3% host + 14% guest</td>
                  <td><Badge color="green">Cao</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">Booking.com</td>
                  <td>Toan cau, dong khach chau Au</td>
                  <td>15-20% commission</td>
                  <td><Badge color="green">Cao</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">Google Maps / GBP</td>
                  <td>Local SEO, khach tim quanh khu vuc</td>
                  <td>Mien phi</td>
                  <td><Badge color="green">Rat cao</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">Facebook Groups</td>
                  <td>Digital Nomad VN, Expat groups</td>
                  <td>Mien phi (organic) / 2-5tr/thang (ads)</td>
                  <td><Badge color="green">Rat cao</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">Nomad List</td>
                  <td>Cong dong Nomad quoc te</td>
                  <td>Mien phi listing</td>
                  <td><Badge color="yellow">Trung binh</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">TikTok / Instagram</td>
                  <td>Gen Z, visual-driven</td>
                  <td>3-10tr/thang (content + ads)</td>
                  <td><Badge color="yellow">Trung binh</Badge></td>
                </tr>
                <tr>
                  <td className="font-semibold">Coworker.com</td>
                  <td>Cong dong coworking quoc te</td>
                  <td>Mien phi basic listing</td>
                  <td><Badge color="yellow">Trung binh</Badge></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="Chien luoc KOL / Influencer">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-[#38bdf8]/10 border border-[#38bdf8]/30 rounded-lg">
              <h4 className="text-sm font-semibold text-[#38bdf8] mb-2">Phase 1: Review mien phi</h4>
              <p className="text-sm text-[#94a3b8]">
                Moi 5-10 Digital Nomad co anh huong den o trai nghiem mien phi.
                Doi lai: review chan thuc tren social media + Google Maps.
              </p>
            </div>
            <div className="p-4 bg-[#a78bfa]/10 border border-[#a78bfa]/30 rounded-lg">
              <h4 className="text-sm font-semibold text-[#a78bfa] mb-2">Phase 2: Paid collab</h4>
              <p className="text-sm text-[#94a3b8]">
                Collab voi Travel Blogger / Lifestyle Creator. Chi phi: 2-10tr/bai tuy follower.
                Platform uu tien: TikTok, Instagram Reels, YouTube Shorts.
              </p>
            </div>
          </div>
        </Card>
      </Section>

      {/* ===== PHAN 6: VAN HANH ===== */}
      <Section
        id="operations"
        icon="🏗️"
        title="Phan 6 — Mo hinh van hanh & Chi phi"
        subtitle="Sub-lease, ha tang, nhan su, unit economics"
        accentColor="#a78bfa"
      >
        <Card title="Chien luoc GTM — Online-First & Community-Driven">
          <div className="space-y-6">
            <div className="relative pl-8 border-l-2 border-[#38bdf8]">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[#38bdf8] flex items-center justify-center text-xs font-bold text-[#0f172a]">1</div>
              <h4 className="text-sm font-semibold text-[#38bdf8] mb-1">Phase 1: Chuan bi & Build Social Proof (Thang 1-2)</h4>
              <ul className="text-sm text-[#94a3b8] space-y-1">
                <li>• Cai tao nha, lap dat ha tang Internet (3 line: Viettel, VNPT, FPT)</li>
                <li>• Tao profile Google Maps (SEO dia phuong cuc ky quan trong)</li>
                <li>• Setup fanpage + Group cong dong rieng</li>
              </ul>
            </div>

            <div className="relative pl-8 border-l-2 border-[#a78bfa]">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[#a78bfa] flex items-center justify-center text-xs font-bold text-[#0f172a]">2</div>
              <h4 className="text-sm font-semibold text-[#a78bfa] mb-1">Phase 2: Soft Opening & KOL Review (Thang 3-4)</h4>
              <ul className="text-sm text-[#94a3b8] space-y-1">
                <li>• Moi 5-10 Digital Nomad trai nghiem mien phi de lay review</li>
                <li>• Chay FB Ads target: Freelancer, Remote workers tai TP.HCM & Ha Noi</li>
              </ul>
            </div>

            <div className="relative pl-8 border-l-2 border-[#34d399]">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[#34d399] flex items-center justify-center text-xs font-bold text-[#0f172a]">3</div>
              <h4 className="text-sm font-semibold text-[#34d399] mb-1">Phase 3: Scale & Optimization (Thang 5-6)</h4>
              <ul className="text-sm text-[#94a3b8] space-y-1">
                <li>• Toi uu ty le lap day qua Booking.com / Airbnb</li>
                <li>• Bat dau cung cap dich vu add-on: Coffee, Tour buoi chieu cho Nomad</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card title="Unit Economics so bo (Base Case)">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Hang muc</th>
                  <th>So lieu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tien thue nha/thang</td>
                  <td className="font-semibold">20 - 25 trieu</td>
                </tr>
                <tr>
                  <td>Internet + Dien nuoc</td>
                  <td className="font-semibold">5 - 8 trieu</td>
                </tr>
                <tr>
                  <td>Nhan su (1-2 nguoi)</td>
                  <td className="font-semibold">10 - 15 trieu</td>
                </tr>
                <tr>
                  <td>Marketing</td>
                  <td className="font-semibold">3 - 5 trieu</td>
                </tr>
                <tr className="bg-[#f87171]/5">
                  <td className="font-bold text-[#f87171]">Tong chi phi/thang</td>
                  <td className="font-bold text-[#f87171]">~40 - 53 trieu</td>
                </tr>
                <tr>
                  <td>Doanh thu ky vong (occupancy 60%)</td>
                  <td className="font-semibold text-[#34d399]">~50 - 70 trieu</td>
                </tr>
                <tr className="bg-[#34d399]/5">
                  <td className="font-bold text-[#34d399]">Margin</td>
                  <td className="font-bold text-[#34d399]">~20-30%</td>
                </tr>
                <tr>
                  <td className="font-bold">Breakeven</td>
                  <td className="font-bold text-[#fbbf24]">18 - 24 thang</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="Khu vuc dia ly de xuat">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#34d399]/10 border border-[#34d399]/30 rounded-lg text-center">
              <p className="text-sm font-semibold text-[#34d399] mb-1">🥇 Phuong 3, Phuong 4</p>
              <p className="text-xs text-[#94a3b8]">Dia hinh doi dep, van gan pho. Gia thue 18-25tr/thang</p>
            </div>
            <div className="p-4 bg-[#38bdf8]/10 border border-[#38bdf8]/30 rounded-lg text-center">
              <p className="text-sm font-semibold text-[#38bdf8] mb-1">🥈 Khu Cam Ly</p>
              <p className="text-xs text-[#94a3b8]">View thung lung, yen tinh. Gia thue 15-20tr/thang</p>
            </div>
            <div className="p-4 bg-[#a78bfa]/10 border border-[#a78bfa]/30 rounded-lg text-center">
              <p className="text-sm font-semibold text-[#a78bfa] mb-1">🥉 Khu Ho Tuyen Lam</p>
              <p className="text-xs text-[#94a3b8]">View ho, premium. Gia thue 25-35tr/thang</p>
            </div>
          </div>
        </Card>
      </Section>

      {/* ===== PHAN 7: PHAP LY ===== */}
      <Section
        id="regulatory"
        icon="📋"
        title="Phan 7 — Phap ly & Rao can"
        subtitle="Giay phep, PCCC, thue, rui ro"
        accentColor="#fb923c"
      >
        <Card title="Yeu cau phap ly">
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Danh muc</th>
                  <th>Yeu cau</th>
                  <th>Luu y</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">Giay phep KD</td>
                  <td>Ho kinh doanh ca the</td>
                  <td>Phu hop quy mo &lt;10 phong. Thue khoan don gian.</td>
                </tr>
                <tr>
                  <td className="font-semibold">PCCC</td>
                  <td>Giay chung nhan du dieu kien PCCC</td>
                  <td><span className="text-[#f87171]">Quan trong hang dau</span> tai Da Lat (sau cac vu hoa hoan gan day)</td>
                </tr>
                <tr>
                  <td className="font-semibold">An ninh trat tu</td>
                  <td>Khai bao tam tru qua phan mem</td>
                  <td>Bat buoc doi voi khach o qua dem</td>
                </tr>
                <tr>
                  <td className="font-semibold">Phap nhan</td>
                  <td>Hop dong thue nha dai han</td>
                  <td>Can cong chung va ghi ro muc dich KD/cho thue lai</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-3 bg-[#fb923c]/10 border border-[#fb923c]/30 rounded-lg">
            <p className="text-sm text-[#fb923c]">
              ⚠️ Day la bao cao nghien cuu. Can tu van phap ly dia phuong xac nhan truoc khi trien khai.
            </p>
          </div>
        </Card>

        <Card title="Rao can & Rui ro">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-[#f87171]/10 border border-[#f87171]/30 rounded-lg">
              <h4 className="text-sm font-semibold text-[#f87171] mb-2">Rui ro chinh</h4>
              <ul className="text-sm text-[#94a3b8] space-y-1">
                <li>• Mua thap diem (T7-T10): occupancy giam con 30-50%</li>
                <li>• Canh tranh homestay gia re (200-300k/dem)</li>
                <li>• Ha tang mang o khu vuc xa trung tam con yeu</li>
                <li>• Quy dinh PCCC dang siet chat</li>
              </ul>
            </div>
            <div className="p-4 bg-[#34d399]/10 border border-[#34d399]/30 rounded-lg">
              <h4 className="text-sm font-semibold text-[#34d399] mb-2">Giai phap (Mitigation)</h4>
              <ul className="text-sm text-[#94a3b8] space-y-1">
                <li>• Giam gia mua thap diem, target long-stay nomad</li>
                <li>• Khac biet hoa bang workspace chuyen nghiep</li>
                <li>• Kiem tra ha tang truoc khi ky hop dong thue</li>
                <li>• Tu van PCCC ngay khi chon nha</li>
              </ul>
            </div>
          </div>
        </Card>
      </Section>

      {/* ===== SCORECARD ===== */}
      <Section
        id="scorecard"
        icon="✅"
        title="Scorecard — Danh gia GO / NO-GO"
        subtitle="5 tieu chi danh gia kha thi dau tu"
        accentColor="#34d399"
      >
        <Card>
          <ScoreBar
            label="Market Attractiveness"
            score={4}
            description="Nhu cau lon, xu huong dich chuyen ben vung. Digital Nomad & Workcation dang bung no."
          />
          <ScoreBar
            label="Competitive Intensity"
            score={3}
            description="Nhieu doi thu nho le nhung thieu tinh chuyen nghiep. Chua co brand co-living noi bat."
          />
          <ScoreBar
            label="Regulatory Ease"
            score={2}
            description="Quy dinh PCCC va quan ly luu tru tai Da Lat dang siet chat sau cac vu chay."
          />
          <ScoreBar
            label="Budget Fit"
            score={4}
            description="500tr du de lam mo hinh Boutique Co-living (5-7 phong) voi mo hinh sub-lease."
          />
          <ScoreBar
            label="Profitability"
            score={3}
            description="ROI trung binh 18-24 thang neu van hanh tot. Margin 20-30% o occupancy 60%."
          />
        </Card>

        <div className="p-6 bg-gradient-to-r from-[#34d399]/20 to-[#38bdf8]/20 border border-[#34d399]/40 rounded-xl text-center">
          <div className="text-4xl mb-3">✅</div>
          <h3 className="text-2xl font-bold text-[#34d399] mb-2">CONDITIONAL GO</h3>
          <p className="text-[#94a3b8] max-w-lg mx-auto">
            <strong className="text-[#e2e8f0]">Dieu kien:</strong> Phai tim duoc mat bang co vi tri dac dia (view)
            voi gia thue &lt;25tr/thang de dam bao diem hoa von trong nam dau tien.
          </p>
        </div>

        <Card title="3 viec lam ngay (Actionable Next Steps)">
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#38bdf8]/20 flex items-center justify-center text-sm font-bold text-[#38bdf8]">1</div>
              <div>
                <p className="font-semibold text-[#e2e8f0]">San nha</p>
                <p className="text-sm text-[#94a3b8]">
                  Tim kiem nha nguyen can khu vuc Phuong 3, Phuong 4 — noi co dia hinh doi dep nhung van gan pho.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#a78bfa]/20 flex items-center justify-center text-sm font-bold text-[#a78bfa]">2</div>
              <div>
                <p className="font-semibold text-[#e2e8f0]">Khao sat nha mang</p>
                <p className="text-sm text-[#94a3b8]">
                  Kiem tra ha tang cap quang tai vi tri dinh thue (tranh cac khu hem sau chua co fiber).
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#34d399]/20 flex items-center justify-center text-sm font-bold text-[#34d399]">3</div>
              <div>
                <p className="font-semibold text-[#e2e8f0]">Tu van PCCC</p>
                <p className="text-sm text-[#94a3b8]">
                  Nho dich vu tu van so do PCCC ngay khi chon duoc nha de tranh sua chua ton kem sau nay.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-xs text-[#64748b] text-center mt-8 pb-8">
          <p>⚠️ Bao cao nay dua tren du lieu thi truong cong khai, khong thay the cho loi khuyen dau tu tai chinh chuyen sau.</p>
          <p className="mt-2">Nguon: So Du lich Lam Dong, Google Trends, Facebook Groups Digital Nomad VN, Google Maps Reviews 2024</p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-[#334155] py-8 text-center text-sm text-[#64748b]">
        <p>Co-living & Co-working Market Research — Da Lat, Viet Nam</p>
        <p className="mt-1">Nghien cuu kha thi 2024-2026</p>
      </footer>
    </>
  );
}
