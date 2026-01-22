// Dữ liệu SEO & Tech 2026 - Phiên bản 3.0 (Cập nhật theo Kế hoạch Mới nhất)
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
            { week: "Tháng 1: Audit & Re-branding", seo: "Sửa Title/Meta: 'Quốc tế' -> 'Chuẩn Y khoa'. Cập nhật Profile Bác sĩ (E-E-A-T).", tech: "Cải thiện tốc độ tải trang (LCP < 1.2s). Schema FAQ Y khoa." },
            { week: "Tháng 2: Đổi nghề / Phục hồi", seo: "Viết bài Pillar: So sánh Thợ Spa vs KTV Y khoa. SEO từ khóa 'Học nghề có bằng cấp 2'.", tech: "Tích hợp Form chuyển đổi thông minh theo tệp khách hàng." },
            { week: "Tháng 3: Tin cậy & AI Search", seo: "Phủ bộ FAQ cho AI Search (AEO). Liên kết thực thể (Entity) với ĐH Y Dược.", tech: "Tối ưu hóa UI/UX Mobile cho trang khóa học đinh." },
            { week: "Quý 2: Bứt phá Tuyển sinh", seo: "Đánh mạnh bộ từ khóa Bằng ITEC quốc tế. SEO Video trải nghiệm học viên thực tế.", tech: "Xây dựng AI Chatbot hỗ trợ tư vấn lộ trình học nghề." }
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
            { week: "Tháng 1: Định vị Peel An toàn", seo: "Xây dựng Pillar: 'Peel sinh học Pacman'. Schema thuật ngữ chuyên môn.", tech: "Tối ưu hóa Core Web Vitals. Thiết kế trang đích dịch vụ Peel." },
            { week: "Tháng 2: Phục hồi Sinh học", seo: "Chuỗi bài giáo dục 4 trụ cột phục hồi. SEO từ khóa 'Cai nghiện da Corticoid'.", tech: "Phát triển công cụ 'Chẩn đoán da online' cơ bản." },
            { week: "Tháng 3: Mixology & Chuyên gia", seo: "Giải mã 6 nhóm Booster tinh chất. SEO bài viết phác đồ bác sĩ cá nhân hóa.", tech: "Tích hợp hệ thống đặt lịch khám bác sĩ trực tuyến." },
            { week: "Quý 2: Trị liệu Cao cấp", seo: "SEO bộ từ khóa bệnh lý sắc tố (Nám Hori, Nám chân sâu). Video Case Study Nám.", tech: "Tối ưu hóa chuyển đổi (CRO) trên toàn bộ phễu nội dung." }
        ]
    }
};

const GANTT_V3_DATA = [
    ["Hạng mục", "Nội dung", "Giai đoạn", "Bắt đầu", "Kết thúc"],
    ["Branding", "Định vị Chuẩn Y Khoa Timona", "Q1", "2026-01-01", "2026-03-31"],
    ["AEO", "Thống trị AI Search FAQ", "Q1", "2026-02-15", "2026-03-31"],
    ["Trust", "E-E-A-T & Bác sĩ tham vấn", "Q1", "2026-01-15", "2026-02-28"],
    ["Tech", "Chuyển đổi Next.js v14", "Q1", "2026-01-01", "2026-02-15"],
    ["Peel", "Chiến dịch Bio Recovery Peel", "Q1", "2026-01-01", "2026-01-31"],
    ["Rehab", "Cai nghiện Corticoid (Taza)", "Q1", "2026-02-01", "2026-02-28"]
];
