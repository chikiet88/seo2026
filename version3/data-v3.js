// Dữ liệu SEO & Tech 2026 - Phiên bản 3.0 (Cập nhật Toàn diện 12 Tháng)
const GA_BASELINE_2025 = {
    clinic: { sessions: 28598, users: 22200, pageviews: 47656, conversions: 30, bounceRate: 51.6, avgDuration: 121 },
    timona: { sessions: 103364, users: 82164, pageviews: 136465, conversions: 30, bounceRate: 51.7, avgDuration: 134 }
};

const TEAM = {
    seo: "Phương Linh",
    tech: "Chí Kiệt"
};

const DATA_V3 = {
    timona: {
        name: "Học viện Timona",
        desc: "Trọng tâm: Đào tạo Thẩm mỹ Chuẩn Y Khoa & Chứng chỉ Quốc tế ITEC",
        focus: "Bằng chính quy Sở GD&ĐT, ITEC quốc tế, Đối tác ĐH Y Dược, Cam kết 100% việc làm",
        target: { traffic: "166.300", leads: "832", growth: "+60.8%", aiVis: "25%", aiLead: "65" },
        kpis: {
            traffic: [10500, 11000, 11500, 12000, 12700, 13400, 14000, 14700, 15500, 16000, 17000, 18000],
            leads: [53, 55, 58, 60, 64, 67, 70, 74, 76, 80, 85, 90],
            aiVis: [8, 10, 12, 14, 16, 18, 19, 20, 21, 22, 23, 25],
            aiLead: [4, 4, 5, 4, 5, 5, 6, 5, 6, 6, 7, 8]
        },
        tasks: [
            { month: 1, title: "Tháng 1: Audit & Re-branding", seo: "Sửa Title/Meta: 'Quốc tế' -> 'Chuẩn Y khoa'. Cập nhật Profile Bác sĩ (E-E-A-T).", tech: "Cải thiện tốc độ tải trang (LCP < 1.0s). Schema FAQ Y khoa." },
            { month: 2, title: "Tháng 2: Tuyển sinh 15-22t", seo: "Content hướng nghiệp: '16 tuổi học nghề gì'. SEO từ khóa 'Học nghề có bằng cấp 2'.", tech: "Tích hợp Form chuyển đổi thông minh theo tệp khách hàng." },
            { month: 3, title: "Tháng 3: Thống trị AI Search", seo: "Phủ bộ FAQ cho AI Search (AEO). Liên kết thực thể (Entity) với ĐH Y Dược Cần Thơ.", tech: "Tối ưu hóa UI/UX Mobile cho trang khóa học đinh." },
            { month: 4, title: "Tháng 4: Mùa hè Nghề nghiệp", seo: "Đánh mạnh bộ từ khóa 'Học spa lương khởi điểm 10tr'. SEO Video thực tế lớp học.", tech: "Xây dựng hệ thống Tracking Lead chi tiết theo nguồn AI." },
            { month: 5, title: "Tháng 5: Hợp tác Quốc tế", seo: "Webinar hợp tác Hàn Quốc. SEO từ khóa 'Tu nghiệp Hàn Quốc', 'Bằng ITEC quốc tế'.", tech: "Tích hợp AI Chatbot hỗ trợ tư vấn lộ trình học nghề cá nhân hóa." },
            { month: 6, title: "Tháng 6: Kỹ thuật viên Y khoa", seo: "Video PBL (Project Based Learning). Bài viết chuyên sâu: 'Thợ Spa vs KTV Y khoa'.", tech: "Đạt điểm Core Web Vitals tối đa (LCP < 0.8s, CLS = 0)." },
            { month: 7, title: "Tháng 7: Partnership Event", seo: "Recap sự kiện ký kết các ĐH Y lớn. Phủ bài viết 'Bằng y dược trong ngành Spa'.", tech: "Hoàn thiện hệ thống quản lý học viên tích hợp Dashboard SEO." },
            { month: 8, title: "Tháng 8: Setup Spa chuyên nghiệp", seo: "SEO 'Cẩm nang mở Spa đúng luật'. Hướng dẫn vận hành Spa cho người mới bắt đầu.", tech: "Tối ưu hóa phễu chuyển đổi (CRO) dựa trên dữ liệu 6 tháng đầu năm." },
            { month: 9, title: "Tháng 9: Marketing 360", seo: "SEO bộ từ khóa 'Kinh doanh thẩm mỹ', 'Marketing Spa'. Khóa học chốt sale 360.", tech: "Nâng cấp bảo mật hệ thống & Tăng tốc độ truy cập đa vùng." },
            { month: 10, title: "Tháng 10: Asia Beauty Awards", seo: "Nội dung vinh danh học viên & giảng viên. SEO 'Học viện thẩm mỹ uy tín nhất 2026'.", tech: "Tích hợp Social Proof (Real-time feedback) trên trang khóa học." },
            { month: 11, title: "Tháng 11: Nghề dịch vụ Hot", seo: "Đẩy mạnh khóa Phun xăm & Gội đầu dưỡng sinh. SEO 'Nghề tay trái hái ra tiền'.", tech: "Xây dựng hệ thống landing page tự động cho các chiến dịch mini." },
            { month: 12, title: "Tháng 12: Recap & Plan 2027", seo: "Tổng kết 10.000 học viên. Video tốt nghiệp quy mô lớn. Lập kế hoạch SEO 2027.", tech: "Audit toàn diện hệ thống. Backup & Chuyển đổi công nghệ mới (nếu có)." }
        ]
    },
    clinic: {
        name: "Taza Skin Clinic",
        desc: "Trọng tâm: Peel sinh học Pacman & Phục hồi 4 Trụ cột",
        focus: "Cơ chế Pacman (Không acid), Phục hồi 4 trụ cột, Mixology cá nhân hóa, Trị nám phân tầng",
        target: { traffic: "45.000", leads: "359", growth: "+57.4%", aiVis: "22%", aiLead: "36" },
        kpis: {
            traffic: [2800, 3000, 3200, 3400, 3600, 3800, 3900, 4000, 4100, 4200, 4400, 4600],
            leads: [22, 24, 26, 27, 28, 30, 31, 32, 33, 34, 35, 37],
            aiVis: [5, 7, 9, 11, 13, 15, 17, 18, 19, 20, 21, 22],
            aiLead: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4]
        },
        tasks: [
            { month: 1, title: "Tháng 1: Định vị Peel Pacman", seo: "Xây dựng Pillar: 'Peel sinh học Pacman'. Schema thuật ngữ y khoa chuyên môn.", tech: "Tối ưu hóa Core Web Vitals. Thiết kế trang đích dịch vụ Peel." },
            { month: 2, title: "Tháng 2: Cai nghiện Corticoid", seo: "Chuỗi bài giáo dục '4 trụ cột phục hồi'. SEO từ khóa 'Cai nghiện da Corticoid'.", tech: "Phát triển công cụ 'Chẩn đoán da online' tích hợp AI nhận diện." },
            { month: 3, title: "Tháng 3: Cá nhân hóa Mixology", seo: "Giải mã 6 nhóm Booster tinh chất. SEO bài viết phác đồ bác sĩ cá nhân hóa.", tech: "Tích hợp hệ thống đặt lịch khám bác sĩ trực tuyến real-time." },
            { month: 4, title: "Tháng 4: Trị nám phân tầng", seo: "SEO bộ từ khóa bệnh lý sắc tố (Nám Hori, Nám chân sâu). Video Case Study Nám.", tech: "Tối ưu hóa chuyển đổi (CRO) trên các trang đích điều trị nám." },
            { month: 5, title: "Tháng 5: Hội thảo Exosome", seo: "Phối hợp với Elasome: SEO 'Phục hồi cấp tế bào'. Bài viết khoa học về Exosome.", tech: "Xây dựng phân hệ FAQ AI dựa trên các báo cáo lâm sàng." },
            { month: 6, title: "Tháng 6: Trẻ hóa HIFU/Ultherapy", seo: "Campaign 'Nâng cơ không xâm lấn'. SEO từ khóa 'Trẻ hóa FDA', 'HIFU 199k'.", tech: "Tối ưu hóa tốc độ tải video case study trước/sau điều trị." },
            { month: 7, title: "Tháng 7: Triệt lông & Hôi nách", seo: "SEO địa phương mạnh cho chi nhánh. Targeted Keywords: 'Triệt lông TPHCM'.", tech: "Cải thiện bản đồ (Google Map API) hiển thị chi nhánh gần nhất." },
            { month: 8, title: "Tháng 8: Mỹ phẩm & Peel", seo: "Partner Hderma: SEO 'Mỹ phẩm thiên nhiên sau treatment'. Routine phục hồi da.", tech: "Tích hợp cổng thanh toán online cho các gói dịch vụ trả trước." },
            { month: 9, title: "Tháng 9: Laser Whitening Plus", seo: "SEO 'Xóa thâm nám mix công nghệ'. Campaign hướng tới đối tượng trung niên.", tech: "Cài đặt hệ thống Tracking hành trình khách hàng đa kênh." },
            { month: 10, title: "Tháng 10: Campaign 20/10", seo: "Nội dung 'Trao quyền phái đẹp'. Video trải nghiệm khách hàng VIP.", tech: "Flash Sale Landing Page với bộ lọc dịch vụ theo nhu cầu." },
            { month: 11, title: "Tháng 11: Phác đồ Chuyên sâu", seo: "Series: 'Gặp gỡ chuyên gia 20 năm'. SEO từ khóa trust cao về điều trị da liễu.", tech: "Nâng cấp hệ thống bảo mật & quản lý dữ liệu bệnh nhân (EHR)." },
            { month: 12, title: "Tháng 12: Tết rạng rỡ", seo: "Campaign 'Đẹp rạng ngời đón Tết'. Bài viết tổng kết khách hàng hài lòng.", tech: "Chuẩn bị hạ tầng cho đợt cao điểm khuyến mãi cuối năm." }
        ]
    }
};

const GANTT_V3_DATA = [
    ["Hạng mục", "Nội dung", "Giai đoạn", "Bắt đầu", "Kết thúc"],
    ["Audit", "Audit tổng thể & Entity", "Q1", "2026-01-01", "2026-01-31"],
    ["Branding", "Định vị Chuẩn Y Khoa Timona", "Q1", "2026-01-01", "2026-03-31"],
    ["Tech", "Chuyển đổi Next.js v14", "Q1", "2026-01-01", "2026-02-15"],
    ["AEO", "Thống trị AI Search FAQ", "Q1", "2026-02-15", "2026-03-31"],
    ["Trust", "E-E-A-T & Bác sĩ tham vấn", "Q1", "2026-01-15", "2026-02-28"],
    ["Peel", "Chiến dịch Bio Recovery Peel", "Q1", "2026-01-01", "2026-01-31"],
    ["Rehab", "Cai nghiện Corticoid (Taza)", "Q1", "2026-02-01", "2026-02-28"],
    ["Tuyển sinh", "Mùa hè nghề nghiệp (Timona)", "Q2", "2026-04-01", "2026-06-30"],
    ["Hội thảo", "Exosome Clinical Event", "Q2", "2026-05-01", "2026-05-31"],
    ["Trẻ hóa", "HIFU High Performance", "Q2", "2026-06-01", "2026-06-30"],
    ["Event", "ĐH Y Dược Partnership", "Q3", "2026-07-01", "2026-08-31"],
    ["Mùa tập trung", "Triệt lông & Hôi nách", "Q3", "2026-07-01", "2026-09-30"],
    ["Hderma", "Product Routine Sync", "Q3", "2026-08-01", "2026-10-31"],
    ["Awards", "Asia Beauty Awards", "Q4", "2026-10-01", "2026-10-31"],
    ["Peak", "Campaign Tết (Full site)", "Q4", "2026-11-01", "2026-12-31"]
];
