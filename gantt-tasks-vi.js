// Dữ liệu chi tiết công việc theo tuần/ngày - TIẾNG VIỆT
// KPI SEO 2026 TazaGroup

const GANTT_TASKS = {
  q1: {
    name: "Quý 1 (Tháng 1-3) - Audit & Xây Nền Tảng",
    weeks: [
      // Tháng 1 - Audit kỹ thuật & Keyword research
      { week: 1, start: "01/01", end: "05/01", tasks: [
        { site: "all", task: "Audit kỹ thuật toàn bộ 5 website (tốc độ, mobile, lỗi)", type: "kiemtra", priority: "cao" },
        { site: "clinic", task: "Kiểm tra mobile TazaSkinClinic (74/99 → target 90+)", type: "kyThuat", priority: "cao" },
        { site: "timona", task: "Research từ khóa hướng nghiệp 2026", type: "tuKhoa", priority: "cao" },
        { site: "hderma", task: "Audit 95 bài cũ cần refresh", type: "kiemtra", priority: "trungBinh" }
      ]},
      { week: 2, start: "06/01", end: "12/01", tasks: [
        { site: "clinic", task: "Viết bài Acnes Peel - trị mụn không bong tróc", type: "noiDung", priority: "cao" },
        { site: "hderma", task: "Schema Product cho sản phẩm FDA", type: "kyThuat", priority: "cao" },
        { site: "elasome", task: "Nội dung M1 Glossy MTS Serum - 80mg HA", type: "noiDung", priority: "trungBinh" },
        { site: "timona", task: "Cập nhật trang khóa học chăm sóc da", type: "noiDung", priority: "trungBinh" }
      ]},
      { week: 3, start: "13/01", end: "19/01", tasks: [
        { site: "clinic", task: "Thiết lập AI chatbot tư vấn da cá nhân hóa", type: "ai", priority: "cao" },
        { site: "timona", task: "Video PBL thực hành - dự án tốt nghiệp", type: "noiDung", priority: "cao" },
        { site: "group", task: "Xây dựng entity TazaGroup liên kết 4 nhánh", type: "entity", priority: "trungBinh" },
        { site: "elasome", task: "Cập nhật M1-M5 product page", type: "kyThuat", priority: "trungBinh" }
      ]},
      { week: 4, start: "20/01", end: "26/01", tasks: [
        { site: "clinic", task: "Schema LocalBusiness 7 chi nhánh (TPHCM, Nha Trang, Đà Nẵng)", type: "kyThuat", priority: "cao" },
        { site: "timona", task: "Embedding relevance score cho content", type: "ai", priority: "cao" },
        { site: "elasome", task: "PDF whitepaper Exosome capture email B2B", type: "noiDung", priority: "trungBinh" },
        { site: "hderma", task: "Tối ưu ảnh sản phẩm (83 thiếu ALT)", type: "kyThuat", priority: "trungBinh" }
      ]},
      // Tháng 2 - Content Focus
      { week: 5, start: "27/01", end: "02/02", tasks: [
        { site: "clinic", task: "Long-form: Peel da an toàn không bong tróc cho da Việt", type: "noiDung", priority: "cao" },
        { site: "timona", task: "Refresh bài '16 tuổi học nghề gì' (top traffic)", type: "noiDung", priority: "cao" },
        { site: "hderma", task: "Campaign Tết: Bundle D.701 Melting Mask", type: "chienDich", priority: "cao" },
        { site: "group", task: "Cập nhật thành tựu hợp tác ĐH Y Dược Cần Thơ", type: "noiDung", priority: "trungBinh" }
      ]},
      { week: 6, start: "03/02", end: "09/02", tasks: [
        { site: "clinic", task: "Bài HIFU Ultra Young - trẻ hóa không xâm lấn FDA", type: "noiDung", priority: "cao" },
        { site: "timona", task: "Entity building: Chứng chỉ ITEC 45 quốc gia", type: "entity", priority: "cao" },
        { site: "elasome", task: "Case study M2 Reju Focus - 20 tỷ exosome + DNA cá hồi", type: "noiDung", priority: "trungBinh" },
        { site: "hderma", task: "Testimonial: Hiệu quả sau 2 tuần dùng T.606", type: "noiDung", priority: "trungBinh" }
      ]},
      { week: 7, start: "10/02", end: "16/02", tasks: [
        { site: "clinic", task: "Entity chi nhánh TPHCM (Q10, Gò Vấp, Thủ Đức, Bình Tân, Tân Phú)", type: "entity", priority: "cao" },
        { site: "hderma", task: "Đánh giá chuyên gia da liễu cho sản phẩm", type: "noiDung", priority: "cao" },
        { site: "group", task: "Nội dung ký kết Khoa Y - ĐH Y Dược (08/09/2025)", type: "noiDung", priority: "trungBinh" },
        { site: "timona", task: "Video giảng viên: GV. Tú Loan - 8 năm kinh nghiệm", type: "noiDung", priority: "trungBinh" }
      ]},
      { week: 8, start: "17/02", end: "23/02", tasks: [
        { site: "clinic", task: "Tối ưu citation 'peel da an toàn TPHCM' cho AIO", type: "trichDan", priority: "cao" },
        { site: "timona", task: "PDF lộ trình nghề nghiệp tải về (lead magnet)", type: "noiDung", priority: "cao" },
        { site: "elasome", task: "Hợp tác hội thảo K.A.T 2025 recap", type: "hopTac", priority: "trungBinh" },
        { site: "hderma", task: "Schema FAQ cho câu hỏi sản phẩm", type: "kyThuat", priority: "trungBinh" }
      ]},
      // Tháng 3 - Campaign & Báo cáo Q1
      { week: 9, start: "24/02", end: "02/03", tasks: [
        { site: "clinic", task: "Campaign: HIFU 199K - Hot deal mùa xuân", type: "chienDich", priority: "cao" },
        { site: "timona", task: "Bài so sánh: Học nghề vs Đại học 2026", type: "noiDung", priority: "cao" },
        { site: "hderma", task: "Infographic: Lợi ích ốc sên trong dược mỹ phẩm", type: "noiDung", priority: "trungBinh" },
        { site: "elasome", task: "Nội dung M3 Melax 2-in-1 giảm sắc tố", type: "noiDung", priority: "trungBinh" }
      ]},
      { week: 10, start: "03/03", end: "09/03", tasks: [
        { site: "clinic", task: "Video before-after: Peel mụn, HIFU, Laser nám", type: "noiDung", priority: "cao" },
        { site: "timona", task: "A/B test CTA đăng ký khóa học (sáng/chiều/tối)", type: "chuyenDoi", priority: "cao" },
        { site: "elasome", task: "Infographic cơ chế 2-in-1 cho clinic", type: "noiDung", priority: "trungBinh" },
        { site: "hderma", task: "Routine trị nám kết hợp T.606 + BHA D.504", type: "noiDung", priority: "trungBinh" }
      ]},
      { week: 11, start: "10/03", end: "16/03", tasks: [
        { site: "clinic", task: "Kiểm tra semantic density cho AIO visibility", type: "ai", priority: "cao" },
        { site: "timona", task: "AI chatbot tư vấn khóa theo độ tuổi/kỹ năng", type: "ai", priority: "cao" },
        { site: "hderma", task: "Popup ưu đãi thành viên + giao hàng toàn quốc", type: "chienDich", priority: "trungBinh" },
        { site: "group", task: "Cập nhật tin tức sự kiện 20/10/2024", type: "noiDung", priority: "thap" }
      ]},
      { week: 12, start: "17/03", end: "23/03", tasks: [
        { site: "all", task: "Chuẩn bị dữ liệu báo cáo Q1", type: "baoCao", priority: "cao" },
        { site: "clinic", task: "Tổng kết Q1: Traffic 1.2K→1.4K, Lead 25→35", type: "baoCao", priority: "cao" },
        { site: "timona", task: "Báo cáo Q1: Traffic 10K→12K, Lead 100→180", type: "baoCao", priority: "cao" },
        { site: "hderma", task: "Báo cáo Q1: Traffic 200→250, Đơn 4→6", type: "baoCao", priority: "trungBinh" }
      ]},
      { week: 13, start: "24/03", end: "31/03", tasks: [
        { site: "all", task: "🎯 BÁO CÁO Q1 - Milestone quan trọng", type: "baoCao", priority: "cao" },
        { site: "all", task: "Điều chỉnh chiến lược Q2 theo KPI thực tế", type: "keHoach", priority: "cao" },
        { site: "all", task: "Review từ khóa top 30→40 (target)", type: "tuKhoa", priority: "trungBinh" }
      ]}
    ]
  },
  q2: {
    name: "Quý 2 (Tháng 4-6) - Đẩy Mạnh Content & Campaign Hè",
    weeks: [
      // Tháng 4 - Content dịch vụ chính
      { week: 14, start: "01/04", end: "06/04", tasks: [
        { site: "clinic", task: "Long-form: Laser Whitening Plus xóa mờ nám hỗn hợp", type: "noiDung", priority: "cao" },
        { site: "timona", task: "Câu chuyện học viên tốt nghiệp - YouTube @timonaacademy", type: "noiDung", priority: "cao" },
        { site: "hderma", task: "Campaign routine sáng/tối với Snail Repair D.350", type: "chienDich", priority: "cao" },
        { site: "elasome", task: "Testimonial BS Diệp Thị Châu Thi về Elasome", type: "noiDung", priority: "trungBinh" }
      ]},
      { week: 15, start: "07/04", end: "13/04", tasks: [
        { site: "clinic", task: "Bài PRP phục hồi sinh học - cấy collagen nguyên bào", type: "noiDung", priority: "cao" },
        { site: "timona", task: "Influencer marketing: GV có >500 đánh giá", type: "hopTac", priority: "cao" },
        { site: "elasome", task: "Schema ClinicalStudy cho kiểm định Hàn Quốc", type: "kyThuat", priority: "cao" },
        { site: "hderma", task: "Góc chia sẻ hội thảo Exosome 26/04/2025", type: "noiDung", priority: "trungBinh" }
      ]},
      { week: 16, start: "14/04", end: "20/04", tasks: [
        { site: "clinic", task: "AI cá nhân hóa: Tư vấn da qua ảnh upload", type: "ai", priority: "cao" },
        { site: "timona", task: "Schema Course cho 9 khóa học", type: "kyThuat", priority: "cao" },
        { site: "hderma", task: "Structured data Product rating", type: "kyThuat", priority: "trungBinh" },
        { site: "group", task: "Cập nhật tuyển dụng: Sale online spa", type: "noiDung", priority: "thap" }
      ]},
      { week: 17, start: "21/04", end: "27/04", tasks: [
        { site: "clinic", task: "FAQ schema: Câu hỏi peel/HIFU/triệt lông", type: "noiDung", priority: "trungBinh" },
        { site: "timona", task: "Tối ưu content extraction cho AIO", type: "ai", priority: "cao" },
        { site: "elasome", task: "Citation tracking 'công nghệ exosome Việt Nam'", type: "trichDan", priority: "cao" },
        { site: "hderma", task: "Bài giải mã Elasome trong dược mỹ phẩm", type: "noiDung", priority: "trungBinh" }
      ]},
      // Tháng 5 - Campaign mùa hè & AI Test
      { week: 18, start: "28/04", end: "04/05", tasks: [
        { site: "clinic", task: "🔥 Campaign hè: Triệt lông 499K/10 buổi", type: "chienDich", priority: "cao" },
        { site: "timona", task: "Ưu đãi trả góp khóa Combo chủ spa", type: "chienDich", priority: "cao" },
        { site: "hderma", task: "Refresh D.350 Snail Repair - cấp ẩm phục hồi", type: "noiDung", priority: "trungBinh" },
        { site: "elasome", task: "Form đăng ký demo B2B cho clinic", type: "chuyenDoi", priority: "trungBinh" }
      ]},
      { week: 19, start: "05/05", end: "11/05", tasks: [
        { site: "all", task: "🚀 BẮT ĐẦU TEST AI-INFLUENCED LEAD - Breakthrough!", type: "ai", priority: "cao" },
        { site: "clinic", task: "Test AI lead: Query 'peel da an toàn'", type: "ai", priority: "cao" },
        { site: "timona", task: "Test AI lead: Query 'học nghề thẩm mỹ'", type: "ai", priority: "cao" },
        { site: "hderma", task: "Test AI lead: Query 'dược mỹ phẩm FDA'", type: "ai", priority: "trungBinh" }
      ]},
      { week: 20, start: "12/05", end: "18/05", tasks: [
        { site: "clinic", task: "Backlink y khoa từ hợp tác ĐH Y Dược", type: "lienKetNgoai", priority: "cao" },
        { site: "timona", task: "Tối ưu mobile cho AIO (75% traffic VN)", type: "kyThuat", priority: "cao" },
        { site: "elasome", task: "Nội dung M4 Exo Powder - chống oxy hóa", type: "noiDung", priority: "trungBinh" },
        { site: "hderma", task: "Liên kết nội bộ sản phẩm → routine", type: "kyThuat", priority: "trungBinh" }
      ]},
      { week: 21, start: "19/05", end: "25/05", tasks: [
        { site: "clinic", task: "Conversion tracking: Form đặt lịch chi nhánh", type: "chuyenDoi", priority: "cao" },
        { site: "timona", task: "AI sentiment analysis cho reviews học viên", type: "ai", priority: "trungBinh" },
        { site: "hderma", task: "Theo dõi abandoned cart recovery", type: "chuyenDoi", priority: "cao" },
        { site: "elasome", task: "Email nurturing B2B sequence", type: "chuyenDoi", priority: "trungBinh" }
      ]},
      // Tháng 6 - Partnership & Báo cáo Q2
      { week: 22, start: "26/05", end: "01/06", tasks: [
        { site: "clinic", task: "Bài Laser Nano trị hôi nách hiệu quả lâu dài", type: "noiDung", priority: "trungBinh" },
        { site: "timona", task: "Webinar hợp tác 25 bệnh viện Hàn Quốc", type: "hopTac", priority: "cao" },
        { site: "elasome", task: "Test AI-influenced lead cho B2B", type: "ai", priority: "cao" },
        { site: "group", task: "Cập nhật giá trị cốt lõi TazaGroup", type: "noiDung", priority: "thap" }
      ]},
      { week: 23, start: "02/06", end: "08/06", tasks: [
        { site: "clinic", task: "Hợp tác Bệnh viện Da Liễu TPHCM", type: "hopTac", priority: "cao" },
        { site: "timona", task: "Nội dung tu nghiệp Hàn Quốc - KBIT", type: "noiDung", priority: "cao" },
        { site: "hderma", task: "🌞 Bundle hè: BHA D.504 + T.240 Acne Spot", type: "chienDich", priority: "cao" },
        { site: "elasome", task: "Case study clinic đối tác sử dụng M1-M5", type: "noiDung", priority: "trungBinh" }
      ]},
      { week: 24, start: "09/06", end: "15/06", tasks: [
        { site: "clinic", task: "Kiểm tra content extraction rate >15%", type: "ai", priority: "cao" },
        { site: "timona", task: "Tỷ lệ chuyển đổi form đăng ký (target 3%)", type: "chuyenDoi", priority: "cao" },
        { site: "elasome", task: "Tổng kết sự kiện K.A.T 2025 (13/11/2025)", type: "noiDung", priority: "trungBinh" },
        { site: "hderma", task: "Review sản phẩm từ chuyên gia", type: "noiDung", priority: "trungBinh" }
      ]},
      { week: 25, start: "16/06", end: "22/06", tasks: [
        { site: "all", task: "Chuẩn bị dữ liệu báo cáo Q2", type: "baoCao", priority: "cao" },
        { site: "hderma", task: "Entity building: Hderma FDA certified", type: "entity", priority: "trungBinh" },
        { site: "clinic", task: "Review KPI: Traffic 1.5K→1.7K, Lead 40→50", type: "baoCao", priority: "cao" },
        { site: "timona", task: "Review KPI: Traffic 14K→18K, Lead 250→360", type: "baoCao", priority: "cao" }
      ]},
      { week: 26, start: "23/06", end: "30/06", tasks: [
        { site: "all", task: "🎯 BÁO CÁO Q2 - Milestone quan trọng", type: "baoCao", priority: "cao" },
        { site: "all", task: "Điều chỉnh giữa năm: AI metrics + traditional SEO", type: "keHoach", priority: "cao" },
        { site: "all", task: "Review target từ khóa top 45→55", type: "tuKhoa", priority: "trungBinh" }
      ]}
    ]
  },
  q3: {
    name: "Quý 3 (Tháng 7-9) - Partnership & Trẻ Hóa Campaign",
    weeks: [
      // Tháng 7 - Content trẻ hóa không xâm lấn
      { week: 27, start: "01/07", end: "06/07", tasks: [
        { site: "clinic", task: "Long-form: HIFU Ultra Young Body giảm béo không dao kéo", type: "noiDung", priority: "cao" },
        { site: "timona", task: "Lộ trình Combo chủ spa: Setup máy móc/nhân sự/tài chính", type: "noiDung", priority: "cao" },
        { site: "elasome", task: "Nội dung M5 Aqua Focus - HA đa phân tử", type: "noiDung", priority: "trungBinh" },
        { site: "hderma", task: "Bài phân loại sản phẩm theo tình trạng da", type: "noiDung", priority: "trungBinh" }
      ]},
      { week: 28, start: "07/07", end: "13/07", tasks: [
        { site: "clinic", task: "Bài cấy collagen nguyên bào phục hồi da mỏng yếu", type: "noiDung", priority: "cao" },
        { site: "timona", task: "Backlink giáo dục từ Khoa Y - ĐH Y Dược", type: "lienKetNgoai", priority: "cao" },
        { site: "hderma", task: "Video testimonial: An toàn, hiệu quả sau 2 tuần", type: "noiDung", priority: "cao" },
        { site: "elasome", task: "Testimonial Erika Nguyễn: Đón đầu xu hướng", type: "noiDung", priority: "trungBinh" }
      ]},
      { week: 29, start: "14/07", end: "20/07", tasks: [
        { site: "clinic", task: "Internal linking: Dịch vụ → Blog → Chi nhánh", type: "kyThuat", priority: "cao" },
        { site: "timona", task: "Embedding relevance score target >0.7", type: "ai", priority: "cao" },
        { site: "elasome", task: "AI sentiment test cho reviews B2B", type: "ai", priority: "trungBinh" },
        { site: "hderma", task: "Tối ưu trang category sản phẩm", type: "kyThuat", priority: "trungBinh" }
      ]},
      { week: 30, start: "21/07", end: "27/07", tasks: [
        { site: "clinic", task: "AI Share of Voice >20% query ngành thẩm mỹ", type: "ai", priority: "cao" },
        { site: "timona", task: "Zero-Click Surface Presence >30%", type: "ai", priority: "cao" },
        { site: "hderma", task: "Backlink từ forum skincare/beauty", type: "lienKetNgoai", priority: "trungBinh" },
        { site: "group", task: "Cập nhật lịch sử phát triển 10 năm", type: "noiDung", priority: "thap" }
      ]},
      // Tháng 8 - Campaign trẻ hóa & Sự kiện
      { week: 31, start: "28/07", end: "03/08", tasks: [
        { site: "clinic", task: "🔥 Campaign Q3: Trẻ hóa New Ultherapy không phẫu thuật", type: "chienDich", priority: "cao" },
        { site: "timona", task: "Sự kiện tốt nghiệp 2026 - Recap YouTube", type: "hopTac", priority: "cao" },
        { site: "elasome", task: "Đẩy mạnh partnership với clinic đối tác", type: "hopTac", priority: "cao" },
        { site: "hderma", task: "Review mid-year: Traffic 370→400", type: "baoCao", priority: "trungBinh" }
      ]},
      { week: 32, start: "04/08", end: "10/08", tasks: [
        { site: "clinic", task: "Video cảm nhận khách hàng before-after thực tế", type: "noiDung", priority: "cao" },
        { site: "timona", task: "Tối ưu FAQ cho AI extraction", type: "ai", priority: "trungBinh" },
        { site: "hderma", task: "Campaign: T.240 Purifying Acne Spot 300K", type: "chienDich", priority: "cao" },
        { site: "elasome", task: "Nội dung ứng dụng Meso, tái tạo da", type: "noiDung", priority: "trungBinh" }
      ]},
      { week: 33, start: "11/08", end: "17/08", tasks: [
        { site: "clinic", task: "Embedding relevance score cho content peel/phục hồi", type: "ai", priority: "cao" },
        { site: "timona", task: "Đánh giá học viên video format", type: "noiDung", priority: "trungBinh" },
        { site: "elasome", task: "FAQ B2B: Liệu trình, giá, đào tạo", type: "noiDung", priority: "trungBinh" },
        { site: "hderma", task: "Routine trị mụn với Gel T.240", type: "noiDung", priority: "trungBinh" }
      ]},
      { week: 34, start: "18/08", end: "24/08", tasks: [
        { site: "clinic", task: "Lead scoring: Phân loại lead theo chi nhánh", type: "chuyenDoi", priority: "cao" },
        { site: "timona", task: "Share of Voice tracking cho query đào tạo", type: "ai", priority: "cao" },
        { site: "hderma", task: "Internal linking optimization", type: "kyThuat", priority: "trungBinh" },
        { site: "elasome", task: "Testimonial BS Vương Khang: An toàn chất lượng", type: "noiDung", priority: "trungBinh" }
      ]},
      // Tháng 9 - Hội thảo & Báo cáo Q3
      { week: 35, start: "25/08", end: "31/08", tasks: [
        { site: "clinic", task: "Ưu đãi cuối hè: Combo peel + phục hồi", type: "chienDich", priority: "cao" },
        { site: "timona", task: "Recap Asia Beauty Awards 2024", type: "hopTac", priority: "trungBinh" },
        { site: "elasome", task: "Video BS review Elasome M1-M5", type: "noiDung", priority: "trungBinh" },
        { site: "hderma", task: "Bundle phục hồi: D.350 + D.701", type: "chienDich", priority: "trungBinh" }
      ]},
      { week: 36, start: "01/09", end: "07/09", tasks: [
        { site: "clinic", task: "Hội thảo da liễu - Hợp tác bệnh viện", type: "hopTac", priority: "cao" },
        { site: "timona", task: "Infographic: Top nghề hot 2026-2027", type: "noiDung", priority: "cao" },
        { site: "hderma", task: "Ưu đãi cuối quý: Freeship toàn quốc", type: "chienDich", priority: "trungBinh" },
        { site: "elasome", task: "Update tin tức M5/M4 (04/11/2025)", type: "noiDung", priority: "trungBinh" }
      ]},
      { week: 37, start: "08/09", end: "14/09", tasks: [
        { site: "clinic", task: "Semantic score optimization cho AIO", type: "ai", priority: "cao" },
        { site: "timona", task: "Semantic density cao cho content hướng nghiệp", type: "ai", priority: "cao" },
        { site: "elasome", task: "Campaign cuối quý: Ưu đãi đối tác B2B", type: "chienDich", priority: "trungBinh" },
        { site: "hderma", task: "Review KPI Q3: Đơn hàng 10→12", type: "baoCao", priority: "trungBinh" }
      ]},
      { week: 38, start: "15/09", end: "21/09", tasks: [
        { site: "all", task: "Chuẩn bị dữ liệu báo cáo Q3", type: "baoCao", priority: "cao" },
        { site: "hderma", task: "Tổng kết hội thảo Exosome với Elasome", type: "hopTac", priority: "trungBinh" },
        { site: "clinic", task: "Review KPI: Traffic 1.8K→2K, Lead 55→65", type: "baoCao", priority: "cao" },
        { site: "timona", task: "Review KPI: Traffic 20K→23K, Lead 380→420", type: "baoCao", priority: "cao" }
      ]},
      { week: 39, start: "22/09", end: "30/09", tasks: [
        { site: "all", task: "🎯 BÁO CÁO Q3 - Milestone quan trọng", type: "baoCao", priority: "cao" },
        { site: "all", task: "Chuẩn bị chiến lược Q4 - Campaign Tết", type: "keHoach", priority: "cao" },
        { site: "all", task: "Review target từ khóa top 60→70", type: "tuKhoa", priority: "trungBinh" }
      ]}
    ]
  },
  q4: {
    name: "Quý 4 (Tháng 10-12) - Campaign Tết & Tổng Kết Năm",
    weeks: [
      // Tháng 10 - Chuẩn bị Campaign Tết
      { week: 40, start: "01/10", end: "05/10", tasks: [
        { site: "clinic", task: "🎊 Campaign Tết: Giảm béo HIFU Body đón Tết", type: "chienDich", priority: "cao" },
        { site: "timona", task: "Kế hoạch tuyển sinh năm mới 2027", type: "keHoach", priority: "cao" },
        { site: "hderma", task: "🎁 Bundle quà Tết: T.606 + D.701 + D.350", type: "chienDich", priority: "cao" },
        { site: "elasome", task: "Gói ưu đãi B2B cuối năm", type: "chienDich", priority: "cao" }
      ]},
      { week: 41, start: "06/10", end: "12/10", tasks: [
        { site: "clinic", task: "Mở rộng citation cho query 'trẻ hóa TPHCM'", type: "trichDan", priority: "cao" },
        { site: "timona", task: "Citation keywords 'đào tạo thẩm mỹ Hàn Quốc'", type: "trichDan", priority: "cao" },
        { site: "elasome", task: "Gói partnership B2B year-end", type: "chienDich", priority: "cao" },
        { site: "hderma", task: "Citation 'dược mỹ phẩm FDA Việt Nam'", type: "trichDan", priority: "trungBinh" }
      ]},
      { week: 42, start: "13/10", end: "19/10", tasks: [
        { site: "clinic", task: "A/B test form đặt lịch Tết (tối ưu conversion)", type: "chuyenDoi", priority: "cao" },
        { site: "timona", task: "Kiểm tra internal linking toàn site", type: "kyThuat", priority: "trungBinh" },
        { site: "hderma", task: "Mở rộng citation 'kem dưỡng sáng Hderma'", type: "trichDan", priority: "trungBinh" },
        { site: "group", task: "Cập nhật vị trí tuyển dụng cuối năm", type: "noiDung", priority: "thap" }
      ]},
      { week: 43, start: "20/10", end: "26/10", tasks: [
        { site: "clinic", task: "Báo cáo conversion: Lead đặt lịch chi nhánh", type: "baoCao", priority: "cao" },
        { site: "timona", task: "Báo cáo conversion: Đăng ký khóa học", type: "baoCao", priority: "cao" },
        { site: "elasome", task: "Mở rộng citation test cho B2B queries", type: "trichDan", priority: "trungBinh" },
        { site: "hderma", task: "Review hiệu quả campaign Q4", type: "baoCao", priority: "trungBinh" }
      ]},
      // Tháng 11 - Entity Building & AI Optimization
      { week: 44, start: "27/10", end: "02/11", tasks: [
        { site: "clinic", task: "Entity mở rộng: Fanpage, YouTube, Google Business", type: "entity", priority: "cao" },
        { site: "timona", task: "Entity LinkedIn/Reddit cho đào tạo quốc tế", type: "entity", priority: "cao" },
        { site: "hderma", task: "Entity mạng xã hội: Review platforms", type: "entity", priority: "trungBinh" },
        { site: "elasome", task: "Entity building ngành thẩm mỹ nội khoa", type: "entity", priority: "trungBinh" }
      ]},
      { week: 45, start: "03/11", end: "09/11", tasks: [
        { site: "clinic", task: "Refresh content AIO: Peel, HIFU, Laser", type: "ai", priority: "cao" },
        { site: "timona", task: "Refresh content AIO: Khóa học, hướng nghiệp", type: "ai", priority: "cao" },
        { site: "elasome", task: "Entity building: Exosome technology leader VN", type: "entity", priority: "trungBinh" },
        { site: "hderma", task: "Schema Review aggregate", type: "kyThuat", priority: "trungBinh" }
      ]},
      { week: 46, start: "10/11", end: "16/11", tasks: [
        { site: "clinic", task: "Lead tracking: Nguồn AI vs Organic vs Paid", type: "chuyenDoi", priority: "cao" },
        { site: "timona", task: "AI-influenced conversion tracking", type: "chuyenDoi", priority: "cao" },
        { site: "hderma", task: "Refresh content AIO cho sản phẩm", type: "ai", priority: "cao" },
        { site: "elasome", task: "Review partnership performance", type: "baoCao", priority: "trungBinh" }
      ]},
      { week: 47, start: "17/11", end: "23/11", tasks: [
        { site: "clinic", task: "Audit cuối năm: Kỹ thuật + Content + AI", type: "kiemtra", priority: "cao" },
        { site: "timona", task: "Chuẩn bị báo cáo năm: Data consolidation", type: "baoCao", priority: "cao" },
        { site: "elasome", task: "Refresh content AIO: Exosome benefits", type: "ai", priority: "cao" },
        { site: "hderma", task: "Audit cuối năm: Product pages", type: "kiemtra", priority: "trungBinh" }
      ]},
      // Tháng 12 - Campaign Tết & Báo cáo năm
      { week: 48, start: "24/11", end: "30/11", tasks: [
        { site: "clinic", task: "🎊 Campaign Tết VIP: Combo trẻ hóa toàn diện", type: "chienDich", priority: "cao" },
        { site: "timona", task: "Campaign Tết: Ưu đãi đăng ký sớm 2027", type: "chienDich", priority: "cao" },
        { site: "hderma", task: "Banner campaign Tết: Gift set premium", type: "chienDich", priority: "cao" },
        { site: "elasome", task: "Year-end B2B appreciation campaign", type: "chienDich", priority: "trungBinh" }
      ]},
      { week: 49, start: "01/12", end: "07/12", tasks: [
        { site: "all", task: "📊 Báo cáo AI metrics: Citation rate, SOV, Embedding", type: "baoCao", priority: "cao" },
        { site: "elasome", task: "Banner khuyến mãi cuối năm B2B", type: "chienDich", priority: "trungBinh" },
        { site: "clinic", task: "Review AI-influenced leads: Target 10-20%", type: "ai", priority: "cao" },
        { site: "timona", task: "Review AI-influenced enrollments", type: "ai", priority: "cao" }
      ]},
      { week: 50, start: "08/12", end: "14/12", tasks: [
        { site: "all", task: "💾 Sao lưu dữ liệu toàn bộ website", type: "kyThuat", priority: "cao" },
        { site: "all", task: "📋 Tài liệu quy trình SEO 2026", type: "keHoach", priority: "cao" },
        { site: "all", task: "Checklist bàn giao & knowledge transfer", type: "keHoach", priority: "trungBinh" }
      ]},
      { week: 51, start: "15/12", end: "21/12", tasks: [
        { site: "all", task: "🔍 Audit cuối năm toàn bộ 5 website", type: "kiemtra", priority: "cao" },
        { site: "all", task: "Đánh giá hiệu suất team SEO 2026", type: "baoCao", priority: "cao" },
        { site: "all", task: "Review KPI tổng: Traffic ~235K, Lead ~5K+", type: "baoCao", priority: "cao" }
      ]},
      { week: 52, start: "22/12", end: "31/12", tasks: [
        { site: "all", task: "🏆 BÁO CÁO NĂM 2026 - Milestone quan trọng", type: "baoCao", priority: "cao" },
        { site: "all", task: "📈 Kế hoạch SEO 2027: AI-first strategy", type: "keHoach", priority: "cao" },
        { site: "all", task: "Target 2027: Traffic +30%, Lead +40%, AI SOV >25%", type: "keHoach", priority: "cao" }
      ]}
    ]
  }
};

// Phân loại công việc
const TASK_TYPES = {
  noiDung: { name: "Nội dung", color: "#3b82f6", icon: "📝" },
  kyThuat: { name: "Kỹ thuật", color: "#f59e0b", icon: "⚙️" },
  chienDich: { name: "Chiến dịch", color: "#ef4444", icon: "🎯" },
  ai: { name: "AI/AIO", color: "#8b5cf6", icon: "🤖" },
  entity: { name: "Entity", color: "#06b6d4", icon: "🏢" },
  trichDan: { name: "Trích dẫn", color: "#10b981", icon: "📌" },
  lienKetNgoai: { name: "Liên kết ngoài", color: "#ec4899", icon: "🔗" },
  hopTac: { name: "Hợp tác", color: "#f97316", icon: "🤝" },
  chuyenDoi: { name: "Chuyển đổi", color: "#14b8a6", icon: "💰" },
  baoCao: { name: "Báo cáo", color: "#6366f1", icon: "📊" },
  kiemtra: { name: "Kiểm tra", color: "#84cc16", icon: "🔍" },
  keHoach: { name: "Kế hoạch", color: "#64748b", icon: "📋" },
  tuKhoa: { name: "Từ khóa", color: "#0ea5e9", icon: "🔑" }
};

// Mức độ ưu tiên
const PRIORITIES = {
  cao: { name: "Cao", color: "#dc2626", icon: "🔴" },
  trungBinh: { name: "Trung bình", color: "#f59e0b", icon: "🟡" },
  thap: { name: "Thấp", color: "#22c55e", icon: "🟢" }
};
