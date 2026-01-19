// Dữ liệu SEO & Tech 2026 - Version 2.1 (Tập trung Jan-Feb 2026)
const GA_BASELINE_2025 = {
    clinic: { sessions: 28598, users: 22200, pageviews: 47656, conversions: 30, bounceRate: 51.6, avgDuration: 121 },
    timona: { sessions: 103364, users: 82164, pageviews: 136465, conversions: 30, bounceRate: 51.7, avgDuration: 134 }
};

const DATA_V2 = {
    timona: {
        name: "Timona Academy",
        desc: "Trọng tâm: Tuyển sinh ITEC & Đào tạo chuyên sâu",
        focus: "ITEC Quốc tế, 100% việc làm, Hướng nghiệp thẩm mỹ",
        target: { traffic: "155.000", leads: "3.660", growth: "+50%" },
        tasks: [
            { week: "Tuần 3 T1 (19-25)", seo: "Audit Technical & Content Gap", tech: "Setup Next.js Boilerplate + Shadcn UI" },
            { week: "Tuần 4 T1 (26-31)", seo: "Chốt Keyword Map Tuyển sinh Q2", tech: "Database Schema & API Design" },
            { week: "Tuần 1 T2 (01-07)", seo: "Build Entity & JSON-LD Course", tech: "Build UI Components (Header/Nav)" },
            { week: "Tuần 2 T2 (08-14)", seo: "Setup AI Workflow Content", tech: "Dynamic Routing & SSG Setup" },
            { week: "Tuần 3 T2 (15-21)", seo: "Internal Link Matrix", tech: "GSC API Integration" },
            { week: "Tuần 4 T2 (22-28)", seo: "Indexing Check & Prep Migration", tech: "Staging Deploy & Performance Audit" }
        ]
    },
    clinic: {
        name: "TazaSkinClinic",
        desc: "Trọng tâm: Dịch vụ Peel & Phục hồi y khoa",
        focus: "Acnes Peel, Nâng cơ HIFU, Phục hồi PRP",
        target: { traffic: "45.000", leads: "675", growth: "+57%" },
        tasks: [
            { week: "Tuần 3 T1 (19-25)", seo: "Local SEO Audit & GMB Setup", tech: "System Architecture Design" },
            { week: "Tuần 4 T1 (26-31)", seo: "Case study content cluster", tech: "Booking System Logic Design" },
            { week: "Tuần 1 T2 (01-07)", seo: "Schema Local Business mapping", tech: "Landing Page Builder Core" },
            { week: "Tuần 2 T2 (08-14)", seo: "Nội dung y khoa (Expert Quote)", tech: "Integration Form Lead -> CRM" },
            { week: "Tuần 3 T2 (15-21)", seo: "Backlink Outreach Clinic", tech: "Tối ưu hóa hình ảnh (WebP/Avif)" },
            { week: "Tuần 4 T2 (22-28)", seo: "Review Conversion Rate", tech: "UAT & Security Testing" }
        ]
    }
};

const GANTT_V2_DATA = [
    ["Nhân sự", "Hạng mục công việc", "Bắt đầu", "Kết thúc", "Trạng thái"],
    ["SEO Manager", "Audit Technical (Jan W3)", "2026-01-19", "2026-01-25", "In Progress"],
    ["Tech", "Setup Next.js Repo (Jan W3)", "2026-01-19", "2026-01-25", "In Progress"],
    ["SEO Manager", "Keyword Map Q2 (Jan W4)", "2026-01-26", "2026-01-31", "Planning"],
    ["Tech", "Database & API Design (Jan W4)", "2026-01-26", "2026-01-31", "Planning"],
    ["SEO Manager", "Build Entity Schema (Feb W1)", "2026-02-01", "2026-02-07", "Planning"],
    ["Tech", "UI Core Components (Feb W1)", "2026-02-01", "2026-02-07", "Planning"],
    ["SEO Manager", "AI Content Workflow (Feb W2)", "2026-02-08", "2026-02-14", "Planning"],
    ["Tech", "Routing & SSG Setup (Feb W2)", "2026-02-08", "2026-02-14", "Planning"],
    ["SEO Manager", "Internal Link Deploy (Feb W3)", "2026-02-15", "2026-02-21", "Planning"],
    ["Tech", "GSC Integration (Feb W3)", "2026-02-15", "2026-02-21", "Planning"],
    ["SEO Manager", "Indexing Review (Feb W4)", "2026-02-22", "2026-02-28", "Planning"],
    ["Tech", "Staging & Perf Audit (Feb W4)", "2026-02-22", "2026-02-28", "Planning"]
];
