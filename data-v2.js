// Dữ liệu SEO 2026 - Version 2 (Focus: Timona & TazaSkinClinic)
const GA_BASELINE_2025 = {
    clinic: { sessions: 28598, users: 22200, pageviews: 47656, conversions: 30, bounceRate: 51.6, avgDuration: 121 },
    timona: { sessions: 103364, users: 82164, pageviews: 136465, conversions: 30, bounceRate: 51.7, avgDuration: 134 }
};

const DATA_V2 = {
    timona: {
        name: "Timona Academy",
        desc: "Học viện thẩm mỹ quốc tế - Trọng tâm Tuyển sinh 2026",
        focus: "ITEC Quốc tế, 100% việc làm, Hướng nghiệp thẩm mỹ",
        target: { traffic: "155.000", leads: "3.660", growth: "+50%" },
        tasks: [
            { month: "T1-T3", seo: "Audit & Keyword Research", tech: "Setup Next.js Project Structure" },
            { month: "T4-T6", seo: "Content Tuyển sinh cao điểm", tech: "Chuyển đổi Frontend Timona sang Next.js" },
            { month: "T7-T9", seo: "Build Backlink Giáo dục/Báo chí", tech: "Migration dữ liệu & SEO Redirects" },
            { month: "T10-T12", seo: "Tối ưu hóa AI Overviews", tech: "Go-live & Maintenance" }
        ]
    },
    clinic: {
        name: "TazaSkinClinic",
        desc: "Viện thẩm mỹ & Điều trị da - Trọng tâm Dịch vụ Y khoa",
        focus: "Acnes Peel, Nâng cơ HIFU, Phục hồi PRP",
        target: { traffic: "45.000", leads: "675", growth: "+57%" },
        tasks: [
            { month: "T1-T3", seo: "Local SEO & Entity Mapping", tech: "Thiết kế System Architecture" },
            { month: "T4-T6", seo: "Case study Before/After", tech: "Phát triển Core Logic & Booking System" },
            { month: "T7-T9", seo: "Chiến dịch Laser & Trẻ hóa", tech: "Migration site Taza sang Next.js" },
            { month: "T10-T12", seo: "Campaign Tết & Lead Tracking", tech: "Tối ưu Performance (Core Web Vitals)" }
        ]
    }
};

const GANTT_V2_DATA = [
    ["Nhân sự", "Hạng mục công việc", "Bắt đầu", "Kết thúc", "Trạng thái"],
    ["SEO Manager", "Audit & Chiến lược 2 Brand", "2026-01-01", "2026-01-31", "Done"],
    ["Tech", "Thiết kế kiến trúc Next.js", "2026-01-01", "2026-02-28", "In Progress"],
    ["SEO Manager", "Keyword Map & Entity Building", "2026-02-01", "2026-03-31", "Planning"],
    ["Tech", "Chuyển đổi Timona sang Next.js", "2026-03-01", "2026-05-31", "Planning"],
    ["SEO Manager", "Content Tuyển sinh Timona 2026", "2026-03-01", "2026-07-31", "Planning"],
    ["Tech", "Migration dữ liệu & Redirect mapping", "2026-06-01", "2026-07-31", "Planning"],
    ["Tech", "Chuyển đổi TazaClinic sang Next.js", "2026-08-01", "2026-10-31", "Planning"],
    ["SEO Manager", "Content Dịch vụ & Local SEO Taza", "2026-07-01", "2026-10-31", "Planning"],
    ["Tech", "Go-live toàn hệ thống & Maintenance", "2026-11-01", "2026-12-31", "Planning"]
];
