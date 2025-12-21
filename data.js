// KPI SEO 2026 - Data từ phantichmoinhat.md (22/12/2025)
const DATA = {
  clinic: {
    name: "TazaSkinClinic.com",
    desc: "Hệ thống viện da liễu & thẩm mỹ (>500K khách, 10+ năm)",
    color: "#dc2626",
    focus: "Peel an toàn, Phục hồi sinh học, Trẻ hóa không xâm lấn",
    headers: ["Tháng", "Traffic", "Lead (đặt lịch)", "Top KW 1-10", "Overview", "Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
    rows: [
      ["T1", "1,200", 25, 30, "Audit & foundation", "Audit kỹ thuật mobile", "Case study Acnes Peel", "Chat AI tư vấn da", "Schema LocalBusiness"],
      ["T2", "1,300", 30, 35, "Prep mùa hè", "Content peel không bong tróc", "HIFU không xâm lấn", "Entity chi nhánh", "Citation peel TPHCM"],
      ["T3", "1,400", 35, 40, "Campaign mùa hè", "Ưu đãi HIFU 199K", "Video before-after", "Semantic density", "Báo cáo Q1"],
      ["T4", "1,500", 40, 45, "Tăng trưởng", "Case laser Whitening Plus", "Phục hồi PRP content", "AI personalization", "Zero-click FAQ"],
      ["T5", "1,600", 45, 50, "Peak season", "Campaign triệt lông 499K", "Test AI-influenced", "Backlink y khoa", "Attribution check"],
      ["T6", "1,700", 50, 55, "Cao điểm", "Trị hôi nách Laser Nano", "Partnership đại học", "Chunk retrieval", "Mid-year adjust"],
      ["T7", "1,800", 55, 60, "Duy trì", "Giảm béo HIFU Body", "Collagen nguyên bào", "Internal links", "Share of voice"],
      ["T8", "1,900", 60, 65, "Tăng mạnh", "Campaign trẻ hóa Q3", "Testimonials video", "Relevance score", "Lead review"],
      ["T9", "2,000", 65, 70, "Peak Q3", "Ưu đãi cuối hè", "Hội thảo da liễu", "Semantic score", "Báo cáo Q3"],
      ["T10", "2,100", 70, 75, "Pre-Tết", "Campaign giảm béo Tết", "Citation expand", "A/B test form", "Conversions report"],
      ["T11", "2,200", 75, 80, "Tăng Tết", "Entity social media", "Refresh AIO content", "Track leads", "Year-end audit"],
      ["T12", "2,300", 80, 85, "Tổng ~630 lead", "Campaign Tết VIP", "Báo cáo AI metrics", "Backup data", "Plan 2027"]
    ]
  },
  timona: {
    name: "Timona.edu.vn",
    desc: "Học viện thẩm mỹ quốc tế (>10K học viên/năm, ITEC 45 nước)",
    color: "#1e40af",
    focus: "Tuyển sinh, 100% việc làm, Hợp tác 25 BV Hàn Quốc",
    headers: ["Tháng", "Traffic", "Lead (đăng ký)", "Top KW 1-10", "Overview", "Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
    rows: [
      ["T1", "10,000", 100, 280, "Baseline mùa thấp", "Audit keyword hướng nghiệp", "Video PBL thực hành", "Embedding score", "Test 50 query AI"],
      ["T2", "10,500", 120, 300, "Prep tuyển sinh", "Refresh '16 tuổi học nghề'", "Build entity ITEC", "PDF lộ trình tải", "Citation rate"],
      ["T3", "12,000", 180, 327, "Bắt đầu cao điểm", "So sánh nghề vs đại học", "A/B CTA đăng ký", "AI chat tư vấn khóa", "Báo cáo visibility"],
      ["T4", "14,000", 250, 340, "Cao điểm tuyển sinh", "Case học viên tốt nghiệp", "Influencer marketing", "Schema Course", "Chunk retrieval"],
      ["T5", "16,000", 320, 355, "Peak mùa", "Ưu đãi trả góp", "Test AI-influenced leads", "Mobile AIO optimize", "Sentiment AI"],
      ["T6", "18,000", 360, 370, "Duy trì cao", "Webinar hợp tác Hàn Quốc", "Tu nghiệp content", "Attribution rate", "Mid-year adjust"],
      ["T7", "20,000", 380, 385, "Sau peak", "Lộ trình dài hạn combo spa", "Backlink education", "Embedding relevance", "Zero-click presence"],
      ["T8", "22,000", 400, 400, "Tăng cuối mùa", "Sự kiện tốt nghiệp", "FAQ AI optimization", "Reviews học viên", "Share of voice"],
      ["T9", "23,000", 420, 415, "Peak cuối", "Asia Beauty Awards recap", "Infographic nghề hot", "Semantic density", "Prep Q4"],
      ["T10", "24,000", 400, 430, "Giảm nhẹ", "Chuẩn bị năm mới", "Citation keyword", "Internal links audit", "Conversions report"],
      ["T11", "24,500", 380, 445, "Mùa thấp", "Entity LinkedIn/Reddit", "Refresh AIO content", "Influenced conversions", "Prep báo cáo"],
      ["T12", "25,000", 350, 460, "Tổng ~3,660 lead", "Campaign Tết hướng nghiệp", "Báo cáo AI KPIs", "Backup & document", "Plan 2027"]
    ]
  },
  hderma: {
    name: "Hderma.vn",
    desc: "Dược mỹ phẩm chuẩn y khoa FDA (thảo dược tự nhiên)",
    color: "#059669",
    focus: "Sản phẩm FDA, Phục hồi cấp tế bào, Hợp tác BV Da Liễu",
    headers: ["Tháng", "Traffic", "Đơn hàng", "Top KW 1-10", "Overview", "Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
    rows: [
      ["T1", 200, 4, 5, "Baseline - build foundation", "Schema Product markup", "Routine T.606 Shining", "Embedding kem dưỡng", "Visibility AIO check"],
      ["T2", 220, 5, 7, "Tăng nhẹ organic", "Bundle cart D.701 Mask", "Reviews từ chuyên gia", "Mobile optimization", "Citation 'Hderma serum'"],
      ["T3", 250, 6, 10, "Mùa chăm da", "Infographic thành phần ốc sên", "Popup ưu đãi member", "Influencer micro", "Semantic density"],
      ["T4", 280, 7, 13, "Ổn định tăng trưởng", "Campaign routine sáng/tối", "Structured data Product", "AI chat tư vấn da", "Zero-click FAQ"],
      ["T5", 310, 8, 17, "Mùa hè skincare", "Refresh D.350 Snail Repair", "Influenced cart tracking", "FAQ optimization", "Attribution check"],
      ["T6", 340, 9, 22, "Peak skincare", "Bundle combo hè BHA D.504", "Entity Hderma expand", "Chunk retrieval test", "Mid-year adjust"],
      ["T7", 370, 10, 28, "Duy trì momentum", "User testimonials video", "Backlink beauty forums", "Relevance score", "Sentiment analysis"],
      ["T8", 400, 11, 35, "Tăng trưởng ổn định", "Campaign T.240 Acne Spot", "Internal links optimize", "Share of voice", "Lead review"],
      ["T9", 430, 12, 43, "Cao điểm Q3", "Ưu đãi cuối quý", "Hội thảo Exosome recap", "Semantic score", "Q4 preparation"],
      ["T10", 460, 13, 53, "Peak pre-holiday", "Bundle gift sets Tết", "Citation keyword expand", "Mobile A/B test", "Conversions report"],
      ["T11", 480, 14, 65, "Tăng mạnh gần Tết", "Entity social expand", "Refresh AIO content", "Influenced leads track", "Year-end audit"],
      ["T12", 500, 15, 80, "Tổng ~114 đơn/năm", "Banner Tết campaign", "Báo cáo AI metrics", "Backup data", "Plan 2027"]
    ]
  },
  elasome: {
    name: "Elasome.com",
    desc: "Phân phối độc quyền Exosome Hàn Quốc (B2B)",
    color: "#7c3aed",
    focus: "M1-M5 Exosome, Kiểm định lâm sàng, Hỗ trợ Clinic/Spa",
    headers: ["Tháng", "Traffic", "Lead B2B", "Top KW 1-10", "Overview", "Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
    rows: [
      ["T1", 10, 0.1, 3, "Baseline niche B2B", "Content M1 Glossy MTS", "PDF whitepaper lead", "Embedding exosome", "Visibility AIO check"],
      ["T2", 12, 0.2, 5, "Tăng chậm ổn định", "Case M2 Reju Focus 20 tỷ exo", "Partnership hội thảo", "Long-form clinical", "Entity Elasome build"],
      ["T3", 15, 0.3, 7, "Tăng awareness", "Infographic M3 Melax 2-in-1", "Zero-click FAQ setup", "Campaign clinic outreach", "Semantic density"],
      ["T4", 20, 0.5, 10, "B2B traction", "Structured ClinicalStudy data", "Citation 'exosome VN'", "Lead form optimize", "Mid-Q report"],
      ["T5", 25, 0.8, 14, "Tăng qualified leads", "Content M4 Exo Powder", "Test influenced leads", "Chunk frequency", "Adjust strategy"],
      ["T6", 30, 1, 19, "Ổn định pipeline", "Webinar K.A.T 2025 recap", "Backlink medical forums", "Relevance score", "Q2 report"],
      ["T7", 35, 1.2, 25, "Duy trì growth", "Content M5 Aqua Focus HA", "Sentiment check AI", "Internal links", "Share of voice"],
      ["T8", 40, 1.5, 33, "Tăng partnership", "Partnership push clinic", "FAQ B2B optimize", "Testimonials BS video", "Lead quality review"],
      ["T9", 45, 1.8, 43, "Cao điểm B2B Q3", "Campaign cuối quý", "Infographic update M1-M5", "Semantic score", "Q3 prep"],
      ["T10", 50, 2, 56, "Peak B2B season", "Ưu đãi B2B package", "Citation test expand", "A/B lead form", "Conversions report"],
      ["T11", 55, 2.2, 73, "Tăng cuối năm", "Entity industry build", "Refresh AIO content", "Track all B2B leads", "Year-end audit"],
      ["T12", 60, 2.5, 95, "Tổng ~14 lead B2B", "Banner promo year-end", "AI metrics report", "Backup & docs", "Plan 2027"]
    ]
  },
  group: {
    name: "TazaGroup.vn",
    desc: "Tập đoàn mẹ - Showcase & Tuyển dụng",
    color: "#64748b",
    focus: "Đồng bộ 4 nhánh, Hợp tác ĐH Y Dược Cần Thơ",
    headers: ["Tháng", "Traffic", "Lead TD/ĐT", "Top KW 1-10", "Overview", "Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
    rows: [
      ["T1", 500, 5, 10, "Duy trì brand", "Audit entity corporate", "Content hệ sinh thái 4 nhánh", "Embedding", "Visibility"],
      ["T2", 510, 5.5, 11, "Tăng nhẹ", "Partnership đại học content", "Reviews môi trường", "Mobile", "Citation"],
      ["T3", 520, 6, 12, "Ổn định", "Infographic ecosystem", "Tuyển dụng sale spa", "Partnership", "Density"],
      ["T4", 530, 6.5, 13, "Duy trì", "Campaign tuyển dụng Q2", "Structured data Org", "Chat support", "Zero-click"],
      ["T5", 540, 7, 14, "Tăng", "Refresh careers page", "Influenced leads track", "FAQ careers", "Attribution"],
      ["T6", 550, 7.5, 15, "Peak hiring", "Sự kiện hợp tác ĐH Y Dược", "Entity expand", "Retrieval", "Adjust"],
      ["T7", 560, 8, 16, "Duy trì", "Testimonials nhân viên", "Backlink business", "Relevance", "Sentiment"],
      ["T8", 570, 8.5, 17, "Tăng", "Campaign Q3 tuyển dụng", "Internal links", "Share voice", "Review"],
      ["T9", 580, 9, 18, "Cao điểm", "Ưu đãi recruit cuối năm", "Infographic thành tựu", "Semantic", "Prep"],
      ["T10", 590, 9.5, 19, "Peak", "Bundle partner benefits", "Citation corporate", "A/B", "Report"],
      ["T11", 600, 10, 20, "Tăng", "Entity social expand", "Refresh content", "Track", "Audit"],
      ["T12", 610, 10.5, 21, "Tổng ~94 lead", "Promo year-end recap", "Report tổng kết", "Backup", "Plan 2027"]
    ]
  }
};

// Gantt data chi tiết từ phantichmoinhat.md
const GANTT_DATA = [
  ["Section", "Task", "Start", "End", "Duration"],
  ["Audit & Foundation", "Audit kỹ thuật + Keyword research", "2026-01-01", "2026-02-28", "59 ngày"],
  ["Nội Dung TazaSkinClinic", "Case study peel/phục hồi/trẻ hóa", "2026-03-01", "2026-12-31", "306 ngày"],
  ["Nội Dung Timona", "Hướng nghiệp & khóa học (mùa tuyển sinh)", "2026-03-01", "2026-09-30", "214 ngày"],
  ["Nội Dung Hderma", "Sản phẩm routine & testimonials", "2026-03-01", "2026-12-31", "306 ngày"],
  ["Nội Dung Elasome", "Clinical Exosome M1-M5 B2B", "2026-04-01", "2026-12-31", "275 ngày"],
  ["Campaign TazaSkinClinic", "Peel & Trẻ hóa (HIFU 199K, triệt lông 499K)", "2026-03-01", "2026-12-31", "306 ngày"],
  ["Campaign Timona", "Mùa tuyển sinh (ưu đãi trả góp)", "2026-03-01", "2026-09-30", "214 ngày"],
  ["Campaign Hderma", "Bundle & Tết (gift sets)", "2026-10-01", "2026-12-31", "92 ngày"],
  ["Campaign Elasome", "Partnership clinic/spa B2B", "2026-07-01", "2026-12-31", "184 ngày"],
  ["AI Visibility", "Build entity & Citation tracking", "2026-01-01", "2026-12-31", "365 ngày"],
  ["AI Visibility", "Test AI-influenced leads (Critical)", "2026-05-01", "2026-12-31", "245 ngày"],
  ["Báo Cáo", "Q1 Report", "2026-03-31", "2026-03-31", "Milestone"],
  ["Báo Cáo", "Q2 Report", "2026-06-30", "2026-06-30", "Milestone"],
  ["Báo Cáo", "Q3 Report", "2026-09-30", "2026-09-30", "Milestone"],
  ["Báo Cáo", "Year Report & Plan 2027", "2026-12-31", "2026-12-31", "Milestone"]
];

// Summary data
const SUMMARY = {
  clinic: { traffic: "~20,000", leads: "~630", avgMonth: "~53", focus: "Peel/Phục hồi/Trẻ hóa" },
  timona: { traffic: "~204,000", leads: "~3,660", avgMonth: "~305", focus: "Tuyển sinh ITEC" },
  hderma: { traffic: "~4,220", leads: "~114", avgMonth: "~10", focus: "Dược mỹ phẩm FDA" },
  elasome: { traffic: "~397", leads: "~14", avgMonth: "~1.2", focus: "Exosome B2B" },
  group: { traffic: "~6,800", leads: "~94", avgMonth: "~8", focus: "Corporate/Tuyển dụng" }
};

// AI-Era KPIs mới
const AI_KPIS = [
  { name: "AI Visibility/Share of Voice", target: ">20% query ngành", tool: "Semrush" },
  { name: "Citation Rate", target: ">15% keyword dịch vụ", tool: "Custom tracking" },
  { name: "Embedding Relevance Score", target: ">0.7 content chính", tool: "OpenAI API" },
  { name: "Zero-Click Surface Presence", target: ">30%", tool: "GSC + Semrush" },
  { name: "AI-Influenced Conversions", target: "10-20% tổng lead", tool: "GA4 + CRM" }
];

// Xu hướng SEO 2026
const TRENDS_2026 = [
  "Công nghệ không xâm lấn (IDAX 2026)",
  "AI cá nhân hóa (Tatler Asia)",
  "Mỹ phẩm thiên nhiên >62 triệu USD",
  "Semantic search cho AIO",
  "Mobile 75% traffic VN",
  "E-E-A-T trust (hợp tác đại học/BV)"
];
