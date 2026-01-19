// Dữ liệu SEO & Tech 2026 - Phiên bản 2.1 (Tập trung Tháng 1-2/2026)
const GA_BASELINE_2025 = {
    clinic: { sessions: 28598, users: 22200, pageviews: 47656, conversions: 30, bounceRate: 51.6, avgDuration: 121 },
    timona: { sessions: 103364, users: 82164, pageviews: 136465, conversions: 30, bounceRate: 51.7, avgDuration: 134 }
};

const TEAM = {
    seo: "Phương Linh",
    tech: "Chí Kiệt"
};

const DATA_V2 = {
    timona: {
        name: "Học viện Timona",
        desc: "Trọng tâm: Tuyển sinh ITEC & Đào tạo chuyên sâu",
        focus: "Chứng chỉ ITEC Quốc tế, Cam kết 100% việc làm, Hướng nghiệp thẩm mỹ",
        target: { traffic: "155.000", leads: "3.660", growth: "+50%" },
        tasks: [
            { week: "Tuần 3 T1 (19-25)", seo: "Kiểm tra kỹ thuật & Lỗ hổng nội dung", tech: "Thiết lập cấu trúc Next.js + Shadcn UI" },
            { week: "Tuần 4 T1 (26-31)", seo: "Chốt sơ đồ từ khóa Tuyển sinh Q2", tech: "Thiết lập Database & Thiết kế API" },
            { week: "Tuần 1 T2 (01-07)", seo: "Xây dựng Thực thể & JSON-LD Khóa học", tech: "Xây dựng thành phần UI (Header/Nav)" },
            { week: "Tuần 2 T2 (08-14)", seo: "Thiết lập quy trình nội dung AI", tech: "Cấu trúc Routing & SSG" },
            { week: "Tuần 3 T2 (15-21)", seo: "Ma trận liên kết nội bộ", tech: "Tích hợp API Google Search Console" },
            { week: "Tuần 4 T2 (22-28)", seo: "Kiểm tra Index & Chuẩn bị chuyển đổi", tech: "Triển khai Staging & Kiểm tra hiệu năng" }
        ]
    },
    clinic: {
        name: "Taza Skin Clinic",
        desc: "Trọng tâm: Dịch vụ Peel & Phục hồi y khoa",
        focus: "Acnes Peel, Nâng cơ HIFU, Phục hồi PRP",
        target: { traffic: "45.000", leads: "675", growth: "+57%" },
        tasks: [
            { week: "Tuần 3 T1 (19-25)", seo: "Kiểm tra Local SEO & GMB", tech: "Thiết kế kiến trúc hệ thống" },
            { week: "Tuần 4 T1 (26-31)", seo: "Xây dựng cụm nội dung Case Study", tech: "Thiết kế logic hệ thống đặt lịch" },
            { week: "Tuần 1 T2 (01-07)", seo: "Lập bản đồ Schema Local Business", tech: "Xây dựng lõi Landing Page Builder" },
            { week: "Tuần 2 T2 (08-14)", seo: "Nội dung y khoa (Trích dẫn chuyên gia)", tech: "Tích hợp Form Lead vào CRM" },
            { week: "Tuần 3 T2 (15-21)", seo: "Chiến dịch Outreach Backlink", tech: "Tối ưu hình ảnh (WebP/Avif)" },
            { week: "Tuần 4 T2 (22-28)", seo: "Đánh giá tỷ lệ chuyển đổi", tech: "Kiểm tra UAT & Bảo mật" }
        ]
    }
};

const GANTT_V2_DATA = [
    ["Nhân sự", "Công việc", "Bắt đầu", "Kết thúc", "Trạng thái"],
    [TEAM.seo, "Kiểm tra kỹ thuật (T3 T1)", "2026-01-19", "2026-01-25", "Đang thực hiện"],
    [TEAM.tech, "Thiết lập Next.js (T3 T1)", "2026-01-19", "2026-01-25", "Đang thực hiện"],
    [TEAM.seo, "Sơ đồ từ khóa Q2 (T4 T1)", "2026-01-26", "2026-01-31", "Kế hoạch"],
    [TEAM.tech, "Thiết kế DB & API (T4 T1)", "2026-01-26", "2026-01-31", "Kế hoạch"],
    [TEAM.seo, "Xây dựng Schema Entity (T1 T2)", "2026-02-01", "2026-02-07", "Kế hoạch"],
    [TEAM.tech, "Thành phần UI Core (T1 T2)", "2026-02-01", "2026-02-07", "Kế hoạch"],
    [TEAM.seo, "Quy trình Nội dung AI (T2 T2)", "2026-02-08", "2026-02-14", "Kế hoạch"],
    [TEAM.tech, "Thiết lập Routing & SSG (T2 T2)", "2026-02-08", "2026-02-14", "Kế hoạch"],
    [TEAM.seo, "Ma trận Link nội bộ (T3 T2)", "2026-02-15", "2026-02-21", "Kế hoạch"],
    [TEAM.tech, "Tích hợp GSC (T3 T2)", "2026-02-15", "2026-02-21", "Kế hoạch"],
    [TEAM.seo, "Đánh giá Indexing (T4 T2)", "2026-02-22", "2026-02-28", "Kế hoạch"],
    [TEAM.tech, "Staging & Kiểm tra hiệu năng (T4 T2)", "2026-02-22", "2026-02-28", "Kế hoạch"]
];
