// KPI SEO 2026 - Dữ liệu cập nhật từ Google Analytics (23/12/2025) - TIẾNG VIỆT
// Baseline 2025: Sessions/Users/Pageviews từ GA 365 ngày thực tế
const GA_BASELINE_2025 = {
  clinic: { sessions: 28598, users: 22200, pageviews: 47656, conversions: 30, bounceRate: 51.6, avgDuration: 121 },
  timona: { sessions: 103364, users: 82164, pageviews: 136465, conversions: 30, bounceRate: 51.7, avgDuration: 134 },
  hderma: { sessions: 3209, users: 1874, pageviews: 7411, conversions: 2, bounceRate: 43.5, avgDuration: 170 },
  elasome: { sessions: 925, users: 677, pageviews: 1627, conversions: 0, bounceRate: 52.3, avgDuration: 180 },
  group: { sessions: 5909, users: 4846, pageviews: 12076, conversions: 0, bounceRate: 50.8, avgDuration: 107 }
};

const DATA = {
  clinic: {
    name: "TazaSkinClinic.com",
    desc: "Hệ thống viện da liễu & thẩm mỹ (>500K khách, 10+ năm)",
    color: "#dc2626",
    focus: "Peel an toàn, Phục hồi sinh học, Trẻ hóa không xâm lấn",
    baseline2025: { sessions: 28598, users: 22200, avgMonth: 2383, conversions: 30 },
    target2026: { sessions: 45000, growth: "57%", conversionsTarget: 675 },
    headers: ["Tháng", "Lượt truy cập", "Đặt lịch", "Từ khóa Top 1-10", "Tổng quan", "Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
    rows: [
      ["T1", "3.200", 40, 35, "Kiểm tra & nền tảng", "Kiểm tra kỹ thuật di động", "Bài viết Acnes Peel", "Thiết lập AI tư vấn da", "Schema chi nhánh"],
      ["T2", "3.400", 45, 40, "Chuẩn bị mùa hè", "Nội dung peel không bong", "HIFU không xâm lấn", "Xây dựng entity chi nhánh", "Trích dẫn peel TPHCM"],
      ["T3", "3.600", 50, 45, "Chiến dịch mùa hè", "Ưu đãi HIFU 199K", "Video trước-sau", "Kiểm tra ngữ nghĩa", "Báo cáo Q1"],
      ["T4", "3.800", 55, 50, "Tăng trưởng", "Bài laser Whitening Plus", "Nội dung PRP", "Cá nhân hóa AI", "Câu hỏi thường gặp"],
      ["T5", "4.000", 60, 55, "Mùa cao điểm", "Chiến dịch triệt lông 499K", "Kiểm tra AI lead", "Liên kết ngược y khoa", "Kiểm tra chuyển đổi"],
      ["T6", "4.200", 65, 60, "Cao điểm", "Trị hôi nách Laser Nano", "Hợp tác đại học", "Kiểm tra trích xuất", "Điều chỉnh giữa năm"],
      ["T7", "4.000", 55, 65, "Duy trì", "Giảm béo HIFU Body", "Collagen nguyên bào", "Liên kết nội bộ", "Thị phần tiếng nói"],
      ["T8", "4.000", 55, 70, "Tăng mạnh", "Chiến dịch trẻ hóa Q3", "Video cảm nhận", "Điểm liên quan", "Đánh giá lead"],
      ["T9", "3.800", 50, 75, "Cao điểm Q3", "Ưu đãi cuối hè", "Hội thảo da liễu", "Điểm ngữ nghĩa", "Báo cáo Q3"],
      ["T10", "3.600", 50, 80, "Trước Tết", "Chiến dịch giảm béo Tết", "Mở rộng trích dẫn", "Thử nghiệm A/B form", "Báo cáo chuyển đổi"],
      ["T11", "3.800", 60, 85, "Tăng Tết", "Entity mạng xã hội", "Làm mới nội dung AIO", "Theo dõi lead", "Kiểm tra cuối năm"],
      ["T12", "4.200", 90, 90, "Tổng ~675 đặt lịch", "Chiến dịch Tết VIP", "Báo cáo chỉ số AI", "Sao lưu dữ liệu", "Kế hoạch 2027"]
    ]
  },
  timona: {
    name: "Timona.edu.vn",
    desc: "Học viện thẩm mỹ quốc tế (>10K học viên/năm, ITEC 45 nước)",
    color: "#1e40af",
    focus: "Tuyển sinh, 100% việc làm, Hợp tác 25 BV Hàn Quốc",
    baseline2025: { sessions: 103364, users: 82164, avgMonth: 8614, conversions: 30 },
    target2026: { sessions: 155000, growth: "50%", conversionsTarget: 775 },
    headers: ["Tháng", "Lượt truy cập", "Đăng ký", "Từ khóa Top 1-10", "Tổng quan", "Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
    rows: [
      ["T1", "10.500", 45, 300, "Mùa thấp điểm", "Kiểm tra từ khóa hướng nghiệp", "Video PBL thực hành", "Điểm nhúng", "Thử 50 truy vấn AI"],
      ["T2", "11.000", 50, 320, "Chuẩn bị tuyển sinh", "Làm mới '16 tuổi học nghề'", "Xây dựng entity ITEC", "PDF lộ trình tải về", "Tỷ lệ trích dẫn"],
      ["T3", "12.500", 60, 340, "Bắt đầu cao điểm", "So sánh nghề vs đại học", "A/B CTA đăng ký", "AI tư vấn khóa học", "Báo cáo hiển thị"],
      ["T4", "13.500", 75, 360, "Cao điểm tuyển sinh", "Câu chuyện học viên", "Tiếp thị người ảnh hưởng", "Schema khóa học", "Trích xuất nội dung"],
      ["T5", "14.500", 90, 380, "Đỉnh mùa", "Ưu đãi trả góp", "Kiểm tra AI lead", "Tối ưu di động AIO", "Phân tích cảm xúc AI"],
      ["T6", "15.000", 85, 400, "Duy trì cao", "Hội thảo hợp tác Hàn Quốc", "Nội dung tu nghiệp", "Tỷ lệ chuyển đổi", "Điều chỉnh giữa năm"],
      ["T7", "14.000", 70, 420, "Sau đỉnh", "Lộ trình combo chủ spa", "Liên kết ngược giáo dục", "Độ liên quan nhúng", "Hiện diện không click"],
      ["T8", "13.500", 60, 440, "Tăng cuối mùa", "Sự kiện tốt nghiệp", "Tối ưu FAQ AI", "Đánh giá học viên", "Thị phần tiếng nói"],
      ["T9", "13.000", 55, 460, "Đỉnh cuối", "Tổng kết Asia Beauty", "Infographic nghề hot", "Mật độ ngữ nghĩa", "Chuẩn bị Q4"],
      ["T10", "12.500", 50, 480, "Giảm nhẹ", "Chuẩn bị năm mới", "Từ khóa trích dẫn", "Kiểm tra liên kết nội bộ", "Báo cáo chuyển đổi"],
      ["T11", "12.000", 55, 500, "Mùa thấp", "Entity LinkedIn/Reddit", "Làm mới nội dung AIO", "Chuyển đổi ảnh hưởng", "Chuẩn bị báo cáo"],
      ["T12", "13.000", 80, 520, "Tổng ~775 đăng ký", "Chiến dịch Tết hướng nghiệp", "Báo cáo KPI AI", "Sao lưu & tài liệu", "Kế hoạch 2027"]
    ]
  },
  hderma: {
    name: "Hderma.vn",
    desc: "Dược mỹ phẩm chuẩn y khoa FDA (thảo dược tự nhiên)",
    color: "#059669",
    focus: "Sản phẩm FDA, Phục hồi cấp tế bào, Hợp tác BV Da Liễu",
    baseline2025: { sessions: 3209, users: 1874, avgMonth: 267, conversions: 2 },
    target2026: { sessions: 6400, growth: "100%", conversionsTarget: 160 },
    headers: ["Tháng", "Lượt truy cập", "Đơn hàng", "Từ khóa Top 1-10", "Tổng quan", "Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
    rows: [
      ["T1", "400", 8, 8, "Xây dựng nền tảng", "Schema sản phẩm", "Routine T.606 Shining", "Nhúng kem dưỡng", "Kiểm tra AIO"],
      ["T2", "450", 10, 12, "Tăng nhẹ tự nhiên", "Bundle D.701 Mask", "Đánh giá chuyên gia", "Tối ưu di động", "Trích dẫn Hderma serum"],
      ["T3", "480", 11, 16, "Mùa chăm da", "Infographic ốc sên", "Popup ưu đãi thành viên", "Người ảnh hưởng nhỏ", "Mật độ ngữ nghĩa"],
      ["T4", "520", 12, 22, "Ổn định tăng trưởng", "Chiến dịch routine sáng/tối", "Dữ liệu có cấu trúc", "AI tư vấn da", "FAQ không click"],
      ["T5", "560", 14, 28, "Mùa hè skincare", "Làm mới D.350 Snail", "Theo dõi giỏ hàng", "Tối ưu FAQ", "Kiểm tra chuyển đổi"],
      ["T6", "600", 15, 35, "Cao điểm skincare", "Bundle hè BHA D.504", "Mở rộng entity Hderma", "Kiểm tra trích xuất", "Điều chỉnh giữa năm"],
      ["T7", "620", 14, 42, "Duy trì đà", "Video cảm nhận người dùng", "Liên kết ngược diễn đàn", "Điểm liên quan", "Phân tích cảm xúc"],
      ["T8", "650", 15, 50, "Tăng trưởng ổn định", "Chiến dịch T.240 Acne", "Tối ưu liên kết nội bộ", "Thị phần tiếng nói", "Đánh giá lead"],
      ["T9", "680", 14, 58, "Cao điểm Q3", "Ưu đãi cuối quý", "Tổng kết hội thảo Exosome", "Điểm ngữ nghĩa", "Chuẩn bị Q4"],
      ["T10", "720", 15, 68, "Trước lễ", "Bundle quà Tết", "Mở rộng từ khóa trích dẫn", "Thử nghiệm A/B di động", "Báo cáo chuyển đổi"],
      ["T11", "760", 16, 78, "Tăng mạnh gần Tết", "Mở rộng entity xã hội", "Làm mới nội dung AIO", "Theo dõi lead ảnh hưởng", "Kiểm tra cuối năm"],
      ["T12", "800", 16, 90, "Tổng ~160 đơn/năm", "Banner chiến dịch Tết", "Báo cáo chỉ số AI", "Sao lưu dữ liệu", "Kế hoạch 2027"]
    ]
  },
  elasome: {
    name: "Elasome.com",
    desc: "Phân phối độc quyền Exosome Hàn Quốc (B2B)",
    color: "#7c3aed",
    focus: "M1-M5 Exosome, Kiểm định lâm sàng, Hỗ trợ Clinic/Spa",
    baseline2025: { sessions: 925, users: 677, avgMonth: 77, conversions: 0 },
    target2026: { sessions: 2400, growth: "160%", conversionsTarget: 36 },
    headers: ["Tháng", "Lượt truy cập", "Lead B2B", "Từ khóa Top 1-10", "Tổng quan", "Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
    rows: [
      ["T1", "150", 2, 5, "Nền tảng B2B ngách", "Nội dung M1 Glossy MTS", "PDF whitepaper lead", "Nhúng exosome", "Kiểm tra AIO"],
      ["T2", "170", 2, 8, "Tăng chậm ổn định", "Case M2 Reju Focus 20 tỷ", "Hợp tác hội thảo", "Nội dung lâm sàng dài", "Xây dựng entity Elasome"],
      ["T3", "190", 2, 12, "Tăng nhận diện", "Infographic M3 Melax 2-in-1", "Thiết lập FAQ không click", "Tiếp cận clinic", "Mật độ ngữ nghĩa"],
      ["T4", "210", 3, 18, "Kéo B2B", "Dữ liệu lâm sàng có cấu trúc", "Trích dẫn 'exosome VN'", "Tối ưu form lead", "Báo cáo giữa quý"],
      ["T5", "220", 3, 25, "Tăng lead chất lượng", "Nội dung M4 Exo Powder", "Kiểm tra lead ảnh hưởng", "Tần suất trích xuất", "Điều chỉnh chiến lược"],
      ["T6", "240", 3, 33, "Ổn định pipeline", "Tổng kết K.A.T 2025", "Liên kết ngược diễn đàn y", "Điểm liên quan", "Báo cáo Q2"],
      ["T7", "260", 3, 42, "Duy trì tăng trưởng", "Nội dung M5 Aqua Focus HA", "Kiểm tra cảm xúc AI", "Liên kết nội bộ", "Thị phần tiếng nói"],
      ["T8", "280", 3, 52, "Tăng hợp tác", "Đẩy mạnh hợp tác clinic", "Tối ưu FAQ B2B", "Video BS cảm nhận", "Đánh giá chất lượng lead"],
      ["T9", "300", 4, 65, "Cao điểm B2B Q3", "Chiến dịch cuối quý", "Cập nhật infographic M1-M5", "Điểm ngữ nghĩa", "Chuẩn bị Q3"],
      ["T10", "320", 4, 80, "Đỉnh mùa B2B", "Gói ưu đãi B2B", "Mở rộng kiểm tra trích dẫn", "A/B form lead", "Báo cáo chuyển đổi"],
      ["T11", "340", 4, 95, "Tăng cuối năm", "Xây dựng entity ngành", "Làm mới nội dung AIO", "Theo dõi tất cả lead B2B", "Kiểm tra cuối năm"],
      ["T12", "360", 5, 115, "Tổng ~36 lead B2B", "Banner khuyến mãi cuối năm", "Báo cáo chỉ số AI", "Sao lưu & tài liệu", "Kế hoạch 2027"]
    ]
  },
  group: {
    name: "TazaGroup.vn",
    desc: "Tập đoàn mẹ - Trưng bày & Tuyển dụng",
    color: "#64748b",
    focus: "Đồng bộ 4 nhánh, Hợp tác ĐH Y Dược Cần Thơ",
    baseline2025: { sessions: 5909, users: 4846, avgMonth: 492, conversions: 0 },
    target2026: { sessions: 9000, growth: "52%", conversionsTarget: 135 },
    headers: ["Tháng", "Lượt truy cập", "Lead TD/ĐT", "Từ khóa Top 1-10", "Tổng quan", "Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
    rows: [
      ["T1", "650", 8, 14, "Duy trì thương hiệu", "Kiểm tra entity tập đoàn", "Nội dung hệ sinh thái 4 nhánh", "Nhúng", "Hiển thị"],
      ["T2", "700", 9, 16, "Tăng nhẹ", "Nội dung hợp tác đại học", "Đánh giá môi trường", "Di động", "Trích dẫn"],
      ["T3", "750", 10, 18, "Ổn định", "Infographic hệ sinh thái", "Tuyển dụng sale spa", "Hợp tác", "Mật độ"],
      ["T4", "780", 11, 20, "Duy trì", "Chiến dịch tuyển dụng Q2", "Dữ liệu có cấu trúc Tổ chức", "Hỗ trợ chat", "Không click"],
      ["T5", "800", 12, 22, "Tăng", "Làm mới trang tuyển dụng", "Theo dõi lead ảnh hưởng", "FAQ tuyển dụng", "Chuyển đổi"],
      ["T6", "820", 12, 24, "Đỉnh tuyển dụng", "Sự kiện hợp tác ĐH Y Dược", "Mở rộng entity", "Trích xuất", "Điều chỉnh"],
      ["T7", "800", 11, 26, "Duy trì", "Cảm nhận nhân viên", "Liên kết ngược doanh nghiệp", "Liên quan", "Cảm xúc"],
      ["T8", "820", 11, 28, "Tăng", "Chiến dịch tuyển dụng Q3", "Liên kết nội bộ", "Thị phần tiếng nói", "Đánh giá"],
      ["T9", "850", 12, 30, "Cao điểm", "Ưu đãi tuyển dụng cuối năm", "Infographic thành tựu", "Ngữ nghĩa", "Chuẩn bị"],
      ["T10", "880", 12, 32, "Đỉnh", "Bundle quyền lợi đối tác", "Trích dẫn tập đoàn", "A/B", "Báo cáo"],
      ["T11", "920", 13, 34, "Tăng", "Mở rộng entity xã hội", "Làm mới nội dung", "Theo dõi", "Kiểm tra"],
      ["T12", "980", 14, 36, "Tổng ~135 lead", "Tổng kết khuyến mãi cuối năm", "Báo cáo tổng kết", "Sao lưu", "Kế hoạch 2027"]
    ]
  }
};

// Dữ liệu Gantt chi tiết
const GANTT_DATA = [
  ["Phần", "Công việc", "Bắt đầu", "Kết thúc", "Thời gian"],
  ["Kiểm tra & Nền tảng", "Kiểm tra kỹ thuật + Nghiên cứu từ khóa", "2026-01-01", "2026-02-28", "59 ngày"],
  ["Nội dung TazaSkinClinic", "Case study peel/phục hồi/trẻ hóa", "2026-03-01", "2026-12-31", "306 ngày"],
  ["Nội dung Timona", "Hướng nghiệp & khóa học (mùa tuyển sinh)", "2026-03-01", "2026-09-30", "214 ngày"],
  ["Nội dung Hderma", "Sản phẩm routine & cảm nhận", "2026-03-01", "2026-12-31", "306 ngày"],
  ["Nội dung Elasome", "Lâm sàng Exosome M1-M5 B2B", "2026-04-01", "2026-12-31", "275 ngày"],
  ["Chiến dịch TazaSkinClinic", "Peel & Trẻ hóa (HIFU 199K, triệt lông 499K)", "2026-03-01", "2026-12-31", "306 ngày"],
  ["Chiến dịch Timona", "Mùa tuyển sinh (ưu đãi trả góp)", "2026-03-01", "2026-09-30", "214 ngày"],
  ["Chiến dịch Hderma", "Bundle & Tết (bộ quà)", "2026-10-01", "2026-12-31", "92 ngày"],
  ["Chiến dịch Elasome", "Hợp tác clinic/spa B2B", "2026-07-01", "2026-12-31", "184 ngày"],
  ["Hiển thị AI", "Xây dựng entity & Theo dõi trích dẫn", "2026-01-01", "2026-12-31", "365 ngày"],
  ["Hiển thị AI", "Kiểm tra lead ảnh hưởng AI (Quan trọng)", "2026-05-01", "2026-12-31", "245 ngày"],
  ["Báo cáo", "Báo cáo Q1", "2026-03-31", "2026-03-31", "Mốc quan trọng"],
  ["Báo cáo", "Báo cáo Q2", "2026-06-30", "2026-06-30", "Mốc quan trọng"],
  ["Báo cáo", "Báo cáo Q3", "2026-09-30", "2026-09-30", "Mốc quan trọng"],
  ["Báo cáo", "Báo cáo năm & Kế hoạch 2027", "2026-12-31", "2026-12-31", "Mốc quan trọng"]
];

// Dữ liệu tổng kết - Cập nhật từ GA thực tế 2025 + Target 2026
const SUMMARY = {
  clinic: { 
    traffic2025: "28.598", traffic2026: "~45.000", growth: "+57%",
    leads2025: "30", leads2026: "~675", avgMonth: "~56", 
    focus: "Peel/Phục hồi/Trẻ hóa" 
  },
  timona: { 
    traffic2025: "103.364", traffic2026: "~155.000", growth: "+50%",
    leads2025: "30", leads2026: "~775", avgMonth: "~65", 
    focus: "Tuyển sinh ITEC" 
  },
  hderma: { 
    traffic2025: "3.209", traffic2026: "~6.400", growth: "+100%",
    leads2025: "2", leads2026: "~160", avgMonth: "~13", 
    focus: "Dược mỹ phẩm FDA" 
  },
  elasome: { 
    traffic2025: "925", traffic2026: "~2.400", growth: "+160%",
    leads2025: "0", leads2026: "~36", avgMonth: "~3", 
    focus: "Exosome B2B" 
  },
  group: { 
    traffic2025: "5.909", traffic2026: "~9.000", growth: "+52%",
    leads2025: "0", leads2026: "~135", avgMonth: "~11", 
    focus: "Tập đoàn/Tuyển dụng" 
  }
};

// KPI thời đại AI mới
const AI_KPIS = [
  { name: "Hiển thị AI/Thị phần tiếng nói", target: ">20% truy vấn ngành", tool: "Semrush" },
  { name: "Tỷ lệ trích dẫn", target: ">15% từ khóa dịch vụ", tool: "Theo dõi tùy chỉnh" },
  { name: "Điểm liên quan nhúng", target: ">0,7 nội dung chính", tool: "OpenAI API" },
  { name: "Hiện diện không click", target: ">30%", tool: "GSC + Semrush" },
  { name: "Chuyển đổi ảnh hưởng AI", target: "10-20% tổng lead", tool: "GA4 + CRM" }
];

// Xu hướng SEO 2026
const TRENDS_2026 = [
  "Công nghệ không xâm lấn (IDAX 2026)",
  "AI cá nhân hóa (Tatler Asia)",
  "Mỹ phẩm thiên nhiên >62 triệu USD",
  "Tìm kiếm ngữ nghĩa cho AIO",
  "Di động 75% lưu lượng VN",
  "E-E-A-T uy tín (hợp tác đại học/BV)"
];

// Phương án nhân sự SEO 2026
const NHAN_SU = {
  moHinh: "1 SEO Manager + CTV Linh Hoạt + AI Hỗ Trợ",
  manager: {
    viTri: "SEO Manager (Full-time)",
    yeuCau: ["3+ năm kinh nghiệm SEO", "Biết Technical SEO (Schema, tốc độ, mobile)", "Hiểu AI/AIO optimization", "Kỹ năng quản lý CTV", "Thành thạo AI tools (ChatGPT, Claude)"],
    congViec: [
      "Lập chiến lược SEO 5 website",
      "Technical SEO: Schema, tốc độ, mobile, AI chatbot",
      "Audit kỹ thuật hàng quý",
      "Quản lý & QC nội dung từ CTV",
      "Báo cáo KPI hàng tuần/tháng/quý",
      "Partnership & đối ngoại (ĐH, bệnh viện)",
      "Keyword research & content brief",
      "Viết content TazaGroup + hỗ trợ các site khác với AI"
    ]
  },
  ctv: [
    {
      viTri: "CTV Nội Dung Chính",
      loai: "CTV cố định (1 người đa năng)",
      output: "20-25 bài/tháng (Timona + Clinic)",
      gia: "120-180K/bài (AI draft + CTV edit/optimize)",
      chiPhi: { thap: 2400000, cao: 4500000, tb: 3500000 },
      noiDung: "Timona (hướng nghiệp), Clinic (dịch vụ) - AI draft 70%"
    },
    {
      viTri: "CTV Nội Dung Phụ",
      loai: "CTV part-time (theo nhu cầu)",
      output: "5-8 bài/tháng (Hderma + Elasome)",
      gia: "150-200K/bài",
      chiPhi: { thap: 750000, cao: 1600000, tb: 1000000 },
      noiDung: "Sản phẩm Hderma, B2B Elasome - Chỉ cần Q2-Q4"
    },
    {
      viTri: "CTV Link Building",
      loai: "Thuê theo quý (Q2, Q3)",
      output: "3-5 backlink chất lượng/tháng",
      gia: "300-500K/link",
      chiPhi: { thap: 0, cao: 2500000, tb: 1000000 },
      noiDung: "Chỉ thuê Q2-Q3, còn lại Manager tự outreach"
    }
  ],
  tools: [
    { name: "Google Search Console + Analytics", gia: 0, mucDich: "Tracking, audit cơ bản (FREE)" },
    { name: "Ubersuggest (Free tier)", gia: 0, mucDich: "Keyword research cơ bản (FREE)" },
    { name: "ChatGPT Plus", gia: 500000, mucDich: "Draft content, research, outline" },
    { name: "Screaming Frog (Free 500 URLs)", gia: 0, mucDich: "Technical audit (FREE)" },
    { name: "Canva Free", gia: 0, mucDich: "Design cơ bản (FREE)" },
    { name: "Ahrefs Webmaster (Free)", gia: 0, mucDich: "Backlink check (FREE)" }
  ],
  toolsPremium: [
    { name: "Semrush/Ahrefs (Chỉ khi cần)", gia: 2500000, mucDich: "Audit sâu - thuê 1-2 tháng/năm" }
  ],
  chiPhiTheoQuy: [
    { quy: "Q1", trongTam: "Audit + Nền tảng", ctvCan: "1 CTV chính", chiPhi: { thap: 2400000, cao: 4000000 }, ghiChu: "Manager làm nhiều, CTV hỗ trợ" },
    { quy: "Q2", trongTam: "Content + Campaign hè", ctvCan: "1 CTV chính + 1 phụ + Link", chiPhi: { thap: 5000000, cao: 8000000 }, ghiChu: "Cao điểm tuyển sinh" },
    { quy: "Q3", trongTam: "Partnership + Trẻ hóa", ctvCan: "1 CTV chính + Link building", chiPhi: { thap: 4000000, cao: 7000000 }, ghiChu: "Đẩy mạnh backlink" },
    { quy: "Q4", trongTam: "Campaign Tết + Báo cáo", ctvCan: "1 CTV chính + 1 phụ", chiPhi: { thap: 3500000, cao: 6000000 }, ghiChu: "Campaign Tết" }
  ],
  tongChiPhi: {
    ctvThang: { thap: 3150000, cao: 8600000, tb: 5500000 },
    toolsThang: 500000,
    toolsPremiumNam: 5000000,
    tongThang: { thap: 3650000, cao: 9100000, tb: 6000000 },
    tongNam: { thap: 43800000, cao: 109200000, tb: 72000000 }
  },
  phanBoWebsite: [
    { site: "TazaSkinClinic.com", output: "5-8 bài/tháng", ctv: "CTV Chính (AI draft)", chiPhi: 1200000, aiHoTro: "70%" },
    { site: "Timona.edu.vn", output: "12-15 bài/tháng", ctv: "CTV Chính (AI draft)", chiPhi: 2300000, aiHoTro: "60%" },
    { site: "Hderma.vn", output: "2-3 bài/tháng", ctv: "CTV Phụ hoặc Manager", chiPhi: 500000, aiHoTro: "80%" },
    { site: "Elasome.com", output: "1-2 bài/tháng", ctv: "CTV Phụ hoặc Manager", chiPhi: 300000, aiHoTro: "80%" },
    { site: "TazaGroup.vn", output: "1 bài/tháng", ctv: "SEO Manager + AI", chiPhi: 0, aiHoTro: "90%" }
  ],
  aiStrategy: {
    title: "Chiến lược AI-First Content",
    steps: [
      "SEO Manager tạo brief + keyword",
      "ChatGPT/Claude draft 70-80% nội dung",
      "CTV edit, thêm case thực tế, optimize",
      "Manager QC final + publish",
    ],
    benefits: [
      "Giảm 40-50% thời gian viết",
      "CTV tập trung vào chất lượng, không phải số lượng",
      "Chi phí/bài giảm từ 200-350K xuống 120-180K",
      "Output tăng 30% với cùng chi phí"
    ]
  },
  soSanh: {
    phuongAnCu: { ten: "Phương án cũ", chiPhiThang: 15000000, chiPhiNam: 180000000 },
    phuongAnMoi: { ten: "Phương án tối ưu AI", chiPhiThang: 6000000, chiPhiNam: 72000000 },
    tietKiem: { thang: 9000000, nam: 108000000, phanTram: 60 }
  }
};
