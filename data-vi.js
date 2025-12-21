// KPI SEO 2026 - Dữ liệu từ phantichmoinhat.md (22/12/2025) - TIẾNG VIỆT
const DATA = {
  clinic: {
    name: "TazaSkinClinic.com",
    desc: "Hệ thống viện da liễu & thẩm mỹ (>500K khách, 10+ năm)",
    color: "#dc2626",
    focus: "Peel an toàn, Phục hồi sinh học, Trẻ hóa không xâm lấn",
    headers: ["Tháng", "Lượt truy cập", "Đặt lịch", "Từ khóa Top 1-10", "Tổng quan", "Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
    rows: [
      ["T1", "1.200", 25, 30, "Kiểm tra & nền tảng", "Kiểm tra kỹ thuật di động", "Bài viết Acnes Peel", "Thiết lập AI tư vấn da", "Schema chi nhánh"],
      ["T2", "1.300", 30, 35, "Chuẩn bị mùa hè", "Nội dung peel không bong", "HIFU không xâm lấn", "Xây dựng entity chi nhánh", "Trích dẫn peel TPHCM"],
      ["T3", "1.400", 35, 40, "Chiến dịch mùa hè", "Ưu đãi HIFU 199K", "Video trước-sau", "Kiểm tra ngữ nghĩa", "Báo cáo Q1"],
      ["T4", "1.500", 40, 45, "Tăng trưởng", "Bài laser Whitening Plus", "Nội dung PRP", "Cá nhân hóa AI", "Câu hỏi thường gặp"],
      ["T5", "1.600", 45, 50, "Mùa cao điểm", "Chiến dịch triệt lông 499K", "Kiểm tra AI lead", "Liên kết ngược y khoa", "Kiểm tra chuyển đổi"],
      ["T6", "1.700", 50, 55, "Cao điểm", "Trị hôi nách Laser Nano", "Hợp tác đại học", "Kiểm tra trích xuất", "Điều chỉnh giữa năm"],
      ["T7", "1.800", 55, 60, "Duy trì", "Giảm béo HIFU Body", "Collagen nguyên bào", "Liên kết nội bộ", "Thị phần tiếng nói"],
      ["T8", "1.900", 60, 65, "Tăng mạnh", "Chiến dịch trẻ hóa Q3", "Video cảm nhận", "Điểm liên quan", "Đánh giá lead"],
      ["T9", "2.000", 65, 70, "Cao điểm Q3", "Ưu đãi cuối hè", "Hội thảo da liễu", "Điểm ngữ nghĩa", "Báo cáo Q3"],
      ["T10", "2.100", 70, 75, "Trước Tết", "Chiến dịch giảm béo Tết", "Mở rộng trích dẫn", "Thử nghiệm A/B form", "Báo cáo chuyển đổi"],
      ["T11", "2.200", 75, 80, "Tăng Tết", "Entity mạng xã hội", "Làm mới nội dung AIO", "Theo dõi lead", "Kiểm tra cuối năm"],
      ["T12", "2.300", 80, 85, "Tổng ~630 đặt lịch", "Chiến dịch Tết VIP", "Báo cáo chỉ số AI", "Sao lưu dữ liệu", "Kế hoạch 2027"]
    ]
  },
  timona: {
    name: "Timona.edu.vn",
    desc: "Học viện thẩm mỹ quốc tế (>10K học viên/năm, ITEC 45 nước)",
    color: "#1e40af",
    focus: "Tuyển sinh, 100% việc làm, Hợp tác 25 BV Hàn Quốc",
    headers: ["Tháng", "Lượt truy cập", "Đăng ký", "Từ khóa Top 1-10", "Tổng quan", "Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
    rows: [
      ["T1", "10.000", 100, 280, "Mùa thấp điểm", "Kiểm tra từ khóa hướng nghiệp", "Video PBL thực hành", "Điểm nhúng", "Thử 50 truy vấn AI"],
      ["T2", "10.500", 120, 300, "Chuẩn bị tuyển sinh", "Làm mới '16 tuổi học nghề'", "Xây dựng entity ITEC", "PDF lộ trình tải về", "Tỷ lệ trích dẫn"],
      ["T3", "12.000", 180, 327, "Bắt đầu cao điểm", "So sánh nghề vs đại học", "A/B CTA đăng ký", "AI tư vấn khóa học", "Báo cáo hiển thị"],
      ["T4", "14.000", 250, 340, "Cao điểm tuyển sinh", "Câu chuyện học viên", "Tiếp thị người ảnh hưởng", "Schema khóa học", "Trích xuất nội dung"],
      ["T5", "16.000", 320, 355, "Đỉnh mùa", "Ưu đãi trả góp", "Kiểm tra AI lead", "Tối ưu di động AIO", "Phân tích cảm xúc AI"],
      ["T6", "18.000", 360, 370, "Duy trì cao", "Hội thảo hợp tác Hàn Quốc", "Nội dung tu nghiệp", "Tỷ lệ chuyển đổi", "Điều chỉnh giữa năm"],
      ["T7", "20.000", 380, 385, "Sau đỉnh", "Lộ trình combo chủ spa", "Liên kết ngược giáo dục", "Độ liên quan nhúng", "Hiện diện không click"],
      ["T8", "22.000", 400, 400, "Tăng cuối mùa", "Sự kiện tốt nghiệp", "Tối ưu FAQ AI", "Đánh giá học viên", "Thị phần tiếng nói"],
      ["T9", "23.000", 420, 415, "Đỉnh cuối", "Tổng kết Asia Beauty", "Infographic nghề hot", "Mật độ ngữ nghĩa", "Chuẩn bị Q4"],
      ["T10", "24.000", 400, 430, "Giảm nhẹ", "Chuẩn bị năm mới", "Từ khóa trích dẫn", "Kiểm tra liên kết nội bộ", "Báo cáo chuyển đổi"],
      ["T11", "24.500", 380, 445, "Mùa thấp", "Entity LinkedIn/Reddit", "Làm mới nội dung AIO", "Chuyển đổi ảnh hưởng", "Chuẩn bị báo cáo"],
      ["T12", "25.000", 350, 460, "Tổng ~3.660 đăng ký", "Chiến dịch Tết hướng nghiệp", "Báo cáo KPI AI", "Sao lưu & tài liệu", "Kế hoạch 2027"]
    ]
  },
  hderma: {
    name: "Hderma.vn",
    desc: "Dược mỹ phẩm chuẩn y khoa FDA (thảo dược tự nhiên)",
    color: "#059669",
    focus: "Sản phẩm FDA, Phục hồi cấp tế bào, Hợp tác BV Da Liễu",
    headers: ["Tháng", "Lượt truy cập", "Đơn hàng", "Từ khóa Top 1-10", "Tổng quan", "Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
    rows: [
      ["T1", "200", 4, 5, "Xây dựng nền tảng", "Schema sản phẩm", "Routine T.606 Shining", "Nhúng kem dưỡng", "Kiểm tra AIO"],
      ["T2", "220", 5, 7, "Tăng nhẹ tự nhiên", "Bundle D.701 Mask", "Đánh giá chuyên gia", "Tối ưu di động", "Trích dẫn Hderma serum"],
      ["T3", "250", 6, 10, "Mùa chăm da", "Infographic ốc sên", "Popup ưu đãi thành viên", "Người ảnh hưởng nhỏ", "Mật độ ngữ nghĩa"],
      ["T4", "280", 7, 13, "Ổn định tăng trưởng", "Chiến dịch routine sáng/tối", "Dữ liệu có cấu trúc", "AI tư vấn da", "FAQ không click"],
      ["T5", "310", 8, 17, "Mùa hè skincare", "Làm mới D.350 Snail", "Theo dõi giỏ hàng", "Tối ưu FAQ", "Kiểm tra chuyển đổi"],
      ["T6", "340", 9, 22, "Cao điểm skincare", "Bundle hè BHA D.504", "Mở rộng entity Hderma", "Kiểm tra trích xuất", "Điều chỉnh giữa năm"],
      ["T7", "370", 10, 28, "Duy trì đà", "Video cảm nhận người dùng", "Liên kết ngược diễn đàn", "Điểm liên quan", "Phân tích cảm xúc"],
      ["T8", "400", 11, 35, "Tăng trưởng ổn định", "Chiến dịch T.240 Acne", "Tối ưu liên kết nội bộ", "Thị phần tiếng nói", "Đánh giá lead"],
      ["T9", "430", 12, 43, "Cao điểm Q3", "Ưu đãi cuối quý", "Tổng kết hội thảo Exosome", "Điểm ngữ nghĩa", "Chuẩn bị Q4"],
      ["T10", "460", 13, 53, "Trước lễ", "Bundle quà Tết", "Mở rộng từ khóa trích dẫn", "Thử nghiệm A/B di động", "Báo cáo chuyển đổi"],
      ["T11", "480", 14, 65, "Tăng mạnh gần Tết", "Mở rộng entity xã hội", "Làm mới nội dung AIO", "Theo dõi lead ảnh hưởng", "Kiểm tra cuối năm"],
      ["T12", "500", 15, 80, "Tổng ~114 đơn/năm", "Banner chiến dịch Tết", "Báo cáo chỉ số AI", "Sao lưu dữ liệu", "Kế hoạch 2027"]
    ]
  },
  elasome: {
    name: "Elasome.com",
    desc: "Phân phối độc quyền Exosome Hàn Quốc (B2B)",
    color: "#7c3aed",
    focus: "M1-M5 Exosome, Kiểm định lâm sàng, Hỗ trợ Clinic/Spa",
    headers: ["Tháng", "Lượt truy cập", "Lead B2B", "Từ khóa Top 1-10", "Tổng quan", "Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
    rows: [
      ["T1", "10", "0,1", 3, "Nền tảng B2B ngách", "Nội dung M1 Glossy MTS", "PDF whitepaper lead", "Nhúng exosome", "Kiểm tra AIO"],
      ["T2", "12", "0,2", 5, "Tăng chậm ổn định", "Case M2 Reju Focus 20 tỷ", "Hợp tác hội thảo", "Nội dung lâm sàng dài", "Xây dựng entity Elasome"],
      ["T3", "15", "0,3", 7, "Tăng nhận diện", "Infographic M3 Melax 2-in-1", "Thiết lập FAQ không click", "Tiếp cận clinic", "Mật độ ngữ nghĩa"],
      ["T4", "20", "0,5", 10, "Kéo B2B", "Dữ liệu lâm sàng có cấu trúc", "Trích dẫn 'exosome VN'", "Tối ưu form lead", "Báo cáo giữa quý"],
      ["T5", "25", "0,8", 14, "Tăng lead chất lượng", "Nội dung M4 Exo Powder", "Kiểm tra lead ảnh hưởng", "Tần suất trích xuất", "Điều chỉnh chiến lược"],
      ["T6", "30", "1", 19, "Ổn định pipeline", "Tổng kết K.A.T 2025", "Liên kết ngược diễn đàn y", "Điểm liên quan", "Báo cáo Q2"],
      ["T7", "35", "1,2", 25, "Duy trì tăng trưởng", "Nội dung M5 Aqua Focus HA", "Kiểm tra cảm xúc AI", "Liên kết nội bộ", "Thị phần tiếng nói"],
      ["T8", "40", "1,5", 33, "Tăng hợp tác", "Đẩy mạnh hợp tác clinic", "Tối ưu FAQ B2B", "Video BS cảm nhận", "Đánh giá chất lượng lead"],
      ["T9", "45", "1,8", 43, "Cao điểm B2B Q3", "Chiến dịch cuối quý", "Cập nhật infographic M1-M5", "Điểm ngữ nghĩa", "Chuẩn bị Q3"],
      ["T10", "50", "2", 56, "Đỉnh mùa B2B", "Gói ưu đãi B2B", "Mở rộng kiểm tra trích dẫn", "A/B form lead", "Báo cáo chuyển đổi"],
      ["T11", "55", "2,2", 73, "Tăng cuối năm", "Xây dựng entity ngành", "Làm mới nội dung AIO", "Theo dõi tất cả lead B2B", "Kiểm tra cuối năm"],
      ["T12", "60", "2,5", 95, "Tổng ~14 lead B2B", "Banner khuyến mãi cuối năm", "Báo cáo chỉ số AI", "Sao lưu & tài liệu", "Kế hoạch 2027"]
    ]
  },
  group: {
    name: "TazaGroup.vn",
    desc: "Tập đoàn mẹ - Trưng bày & Tuyển dụng",
    color: "#64748b",
    focus: "Đồng bộ 4 nhánh, Hợp tác ĐH Y Dược Cần Thơ",
    headers: ["Tháng", "Lượt truy cập", "Lead TD/ĐT", "Từ khóa Top 1-10", "Tổng quan", "Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
    rows: [
      ["T1", "500", 5, 10, "Duy trì thương hiệu", "Kiểm tra entity tập đoàn", "Nội dung hệ sinh thái 4 nhánh", "Nhúng", "Hiển thị"],
      ["T2", "510", "5,5", 11, "Tăng nhẹ", "Nội dung hợp tác đại học", "Đánh giá môi trường", "Di động", "Trích dẫn"],
      ["T3", "520", 6, 12, "Ổn định", "Infographic hệ sinh thái", "Tuyển dụng sale spa", "Hợp tác", "Mật độ"],
      ["T4", "530", "6,5", 13, "Duy trì", "Chiến dịch tuyển dụng Q2", "Dữ liệu có cấu trúc Tổ chức", "Hỗ trợ chat", "Không click"],
      ["T5", "540", 7, 14, "Tăng", "Làm mới trang tuyển dụng", "Theo dõi lead ảnh hưởng", "FAQ tuyển dụng", "Chuyển đổi"],
      ["T6", "550", "7,5", 15, "Đỉnh tuyển dụng", "Sự kiện hợp tác ĐH Y Dược", "Mở rộng entity", "Trích xuất", "Điều chỉnh"],
      ["T7", "560", 8, 16, "Duy trì", "Cảm nhận nhân viên", "Liên kết ngược doanh nghiệp", "Liên quan", "Cảm xúc"],
      ["T8", "570", "8,5", 17, "Tăng", "Chiến dịch tuyển dụng Q3", "Liên kết nội bộ", "Thị phần tiếng nói", "Đánh giá"],
      ["T9", "580", 9, 18, "Cao điểm", "Ưu đãi tuyển dụng cuối năm", "Infographic thành tựu", "Ngữ nghĩa", "Chuẩn bị"],
      ["T10", "590", "9,5", 19, "Đỉnh", "Bundle quyền lợi đối tác", "Trích dẫn tập đoàn", "A/B", "Báo cáo"],
      ["T11", "600", 10, 20, "Tăng", "Mở rộng entity xã hội", "Làm mới nội dung", "Theo dõi", "Kiểm tra"],
      ["T12", "610", "10,5", 21, "Tổng ~94 lead", "Tổng kết khuyến mãi cuối năm", "Báo cáo tổng kết", "Sao lưu", "Kế hoạch 2027"]
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

// Dữ liệu tổng kết
const SUMMARY = {
  clinic: { traffic: "~20.000", leads: "~630", avgMonth: "~53", focus: "Peel/Phục hồi/Trẻ hóa" },
  timona: { traffic: "~204.000", leads: "~3.660", avgMonth: "~305", focus: "Tuyển sinh ITEC" },
  hderma: { traffic: "~4.220", leads: "~114", avgMonth: "~10", focus: "Dược mỹ phẩm FDA" },
  elasome: { traffic: "~397", leads: "~14", avgMonth: "~1,2", focus: "Exosome B2B" },
  group: { traffic: "~6.800", leads: "~94", avgMonth: "~8", focus: "Tập đoàn/Tuyển dụng" }
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
