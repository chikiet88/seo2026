// GANTT TASKS CHI TIẾT - Theo tuần/ngày cho từng website
const GANTT_TASKS = {
  // Q1 2026 - FOUNDATION
  q1: {
    name: "Q1/2026 - Foundation & Audit",
    weeks: [
      // Tháng 1
      { week: "W1", start: "2026-01-01", end: "2026-01-07", tasks: [
        { site: "ALL", task: "Kickoff meeting & KPI review", type: "meeting", priority: "high" },
        { site: "Clinic", task: "Audit kỹ thuật mobile (74/99)", type: "audit", priority: "high" },
        { site: "Timona", task: "Audit keyword hướng nghiệp", type: "audit", priority: "high" },
        { site: "Hderma", task: "Schema Product markup", type: "technical", priority: "medium" }
      ]},
      { week: "W2", start: "2026-01-08", end: "2026-01-14", tasks: [
        { site: "Clinic", task: "Case study Acnes Peel", type: "content", priority: "high" },
        { site: "Timona", task: "Video PBL thực hành", type: "content", priority: "high" },
        { site: "Hderma", task: "Routine T.606 Shining Cream", type: "content", priority: "medium" },
        { site: "Elasome", task: "Content M1 Glossy MTS", type: "content", priority: "medium" }
      ]},
      { week: "W3", start: "2026-01-15", end: "2026-01-21", tasks: [
        { site: "Clinic", task: "Chat AI tư vấn da setup", type: "technical", priority: "high" },
        { site: "Timona", task: "Embedding score test", type: "ai", priority: "medium" },
        { site: "Hderma", task: "Embedding kem dưỡng", type: "ai", priority: "medium" },
        { site: "Elasome", task: "PDF whitepaper B2B", type: "content", priority: "high" }
      ]},
      { week: "W4", start: "2026-01-22", end: "2026-01-31", tasks: [
        { site: "Clinic", task: "Schema LocalBusiness chi nhánh", type: "technical", priority: "medium" },
        { site: "Timona", task: "Test 50 query AI", type: "ai", priority: "high" },
        { site: "Hderma", task: "Visibility AIO check", type: "ai", priority: "medium" },
        { site: "Group", task: "Audit entity corporate", type: "audit", priority: "low" }
      ]},
      // Tháng 2
      { week: "W5", start: "2026-02-01", end: "2026-02-07", tasks: [
        { site: "Clinic", task: "Content peel không bong tróc", type: "content", priority: "high" },
        { site: "Timona", task: "Refresh '16 tuổi học nghề gì'", type: "content", priority: "high" },
        { site: "Hderma", task: "Bundle cart D.701 Mask", type: "campaign", priority: "medium" },
        { site: "Elasome", task: "Case M2 Reju Focus", type: "content", priority: "medium" }
      ]},
      { week: "W6", start: "2026-02-08", end: "2026-02-14", tasks: [
        { site: "Clinic", task: "HIFU không xâm lấn content", type: "content", priority: "high" },
        { site: "Timona", task: "Build entity ITEC quốc tế", type: "ai", priority: "high" },
        { site: "Hderma", task: "Reviews từ chuyên gia da", type: "content", priority: "medium" },
        { site: "Elasome", task: "Partnership hội thảo setup", type: "partnership", priority: "medium" }
      ]},
      { week: "W7", start: "2026-02-15", end: "2026-02-21", tasks: [
        { site: "Clinic", task: "Entity chi nhánh TPHCM", type: "ai", priority: "medium" },
        { site: "Timona", task: "PDF lộ trình tải về", type: "content", priority: "medium" },
        { site: "Hderma", task: "Mobile optimization", type: "technical", priority: "high" },
        { site: "Elasome", task: "Long-form clinical content", type: "content", priority: "high" }
      ]},
      { week: "W8", start: "2026-02-22", end: "2026-02-28", tasks: [
        { site: "Clinic", task: "Citation 'peel da TPHCM'", type: "ai", priority: "high" },
        { site: "Timona", task: "Citation rate tracking", type: "ai", priority: "medium" },
        { site: "Hderma", task: "Citation 'Hderma serum'", type: "ai", priority: "medium" },
        { site: "ALL", task: "Foundation review meeting", type: "meeting", priority: "high" }
      ]},
      // Tháng 3
      { week: "W9", start: "2026-03-01", end: "2026-03-07", tasks: [
        { site: "Clinic", task: "Ưu đãi HIFU 199K launch", type: "campaign", priority: "high" },
        { site: "Timona", task: "So sánh nghề vs đại học", type: "content", priority: "high" },
        { site: "Hderma", task: "Infographic thành phần ốc sên", type: "content", priority: "medium" },
        { site: "Elasome", task: "Infographic M3 Melax 2-in-1", type: "content", priority: "medium" }
      ]},
      { week: "W10", start: "2026-03-08", end: "2026-03-14", tasks: [
        { site: "Clinic", task: "Video before-after peel", type: "content", priority: "high" },
        { site: "Timona", task: "A/B CTA đăng ký khóa", type: "optimization", priority: "high" },
        { site: "Hderma", task: "Popup ưu đãi member", type: "campaign", priority: "medium" },
        { site: "Elasome", task: "Zero-click FAQ setup", type: "ai", priority: "medium" }
      ]},
      { week: "W11", start: "2026-03-15", end: "2026-03-21", tasks: [
        { site: "Clinic", task: "Semantic density check", type: "ai", priority: "medium" },
        { site: "Timona", task: "AI chat tư vấn khóa học", type: "technical", priority: "high" },
        { site: "Hderma", task: "Influencer micro collab", type: "campaign", priority: "medium" },
        { site: "Elasome", task: "Campaign clinic outreach", type: "campaign", priority: "high" }
      ]},
      { week: "W12", start: "2026-03-22", end: "2026-03-31", tasks: [
        { site: "ALL", task: "🏁 BÁO CÁO Q1", type: "report", priority: "critical" },
        { site: "Clinic", task: "Báo cáo Q1 + KPI review", type: "report", priority: "high" },
        { site: "Timona", task: "Báo cáo visibility Q1", type: "report", priority: "high" },
        { site: "Hderma", task: "Semantic density report", type: "report", priority: "medium" }
      ]}
    ]
  },
  
  // Q2 2026 - PEAK SEASON
  q2: {
    name: "Q2/2026 - Peak Season & Growth",
    weeks: [
      // Tháng 4
      { week: "W13", start: "2026-04-01", end: "2026-04-07", tasks: [
        { site: "Clinic", task: "Case laser Whitening Plus", type: "content", priority: "high" },
        { site: "Timona", task: "Case học viên tốt nghiệp", type: "content", priority: "high" },
        { site: "Hderma", task: "Campaign routine sáng/tối", type: "campaign", priority: "medium" },
        { site: "Elasome", task: "Structured ClinicalStudy data", type: "technical", priority: "high" }
      ]},
      { week: "W14", start: "2026-04-08", end: "2026-04-14", tasks: [
        { site: "Clinic", task: "Phục hồi PRP content", type: "content", priority: "high" },
        { site: "Timona", task: "Influencer marketing push", type: "campaign", priority: "high" },
        { site: "Hderma", task: "Structured data Product", type: "technical", priority: "medium" },
        { site: "Elasome", task: "Citation 'exosome VN'", type: "ai", priority: "high" }
      ]},
      { week: "W15", start: "2026-04-15", end: "2026-04-21", tasks: [
        { site: "Clinic", task: "AI personalization test", type: "ai", priority: "high" },
        { site: "Timona", task: "Schema Course markup", type: "technical", priority: "medium" },
        { site: "Hderma", task: "AI chat tư vấn da", type: "technical", priority: "medium" },
        { site: "Elasome", task: "Lead form optimize", type: "optimization", priority: "high" }
      ]},
      { week: "W16", start: "2026-04-22", end: "2026-04-30", tasks: [
        { site: "Clinic", task: "Zero-click FAQ setup", type: "ai", priority: "medium" },
        { site: "Timona", task: "Chunk retrieval test", type: "ai", priority: "medium" },
        { site: "Hderma", task: "Zero-click FAQ", type: "ai", priority: "medium" },
        { site: "Elasome", task: "Mid-Q report", type: "report", priority: "medium" }
      ]},
      // Tháng 5
      { week: "W17", start: "2026-05-01", end: "2026-05-07", tasks: [
        { site: "ALL", task: "🤖 AI-INFLUENCED LEADS START", type: "ai", priority: "critical" },
        { site: "Clinic", task: "Campaign triệt lông 499K", type: "campaign", priority: "high" },
        { site: "Timona", task: "Ưu đãi trả góp launch", type: "campaign", priority: "high" },
        { site: "Hderma", task: "Refresh D.350 Snail Repair", type: "content", priority: "medium" }
      ]},
      { week: "W18", start: "2026-05-08", end: "2026-05-14", tasks: [
        { site: "Clinic", task: "Test AI-influenced leads", type: "ai", priority: "high" },
        { site: "Timona", task: "Test AI-influenced leads", type: "ai", priority: "high" },
        { site: "Hderma", task: "Influenced cart tracking", type: "ai", priority: "medium" },
        { site: "Elasome", task: "Content M4 Exo Powder", type: "content", priority: "medium" }
      ]},
      { week: "W19", start: "2026-05-15", end: "2026-05-21", tasks: [
        { site: "Clinic", task: "Backlink y khoa build", type: "seo", priority: "high" },
        { site: "Timona", task: "Mobile AIO optimize", type: "optimization", priority: "medium" },
        { site: "Hderma", task: "FAQ optimization", type: "optimization", priority: "medium" },
        { site: "Elasome", task: "Test influenced B2B leads", type: "ai", priority: "high" }
      ]},
      { week: "W20", start: "2026-05-22", end: "2026-05-31", tasks: [
        { site: "Clinic", task: "Attribution check", type: "analytics", priority: "medium" },
        { site: "Timona", task: "Sentiment AI analysis", type: "ai", priority: "medium" },
        { site: "Hderma", task: "Attribution check", type: "analytics", priority: "medium" },
        { site: "Elasome", task: "Chunk frequency test", type: "ai", priority: "medium" }
      ]},
      // Tháng 6
      { week: "W21", start: "2026-06-01", end: "2026-06-07", tasks: [
        { site: "Clinic", task: "Trị hôi nách Laser Nano", type: "content", priority: "high" },
        { site: "Timona", task: "Webinar hợp tác Hàn Quốc", type: "partnership", priority: "high" },
        { site: "Hderma", task: "Bundle combo hè BHA D.504", type: "campaign", priority: "high" },
        { site: "Elasome", task: "Webinar K.A.T 2025 recap", type: "content", priority: "medium" }
      ]},
      { week: "W22", start: "2026-06-08", end: "2026-06-14", tasks: [
        { site: "Clinic", task: "Partnership ĐH Y Dược", type: "partnership", priority: "high" },
        { site: "Timona", task: "Tu nghiệp Hàn Quốc content", type: "content", priority: "medium" },
        { site: "Hderma", task: "Entity Hderma expand", type: "ai", priority: "medium" },
        { site: "Elasome", task: "Backlink medical forums", type: "seo", priority: "medium" }
      ]},
      { week: "W23", start: "2026-06-15", end: "2026-06-21", tasks: [
        { site: "Clinic", task: "Chunk retrieval test", type: "ai", priority: "medium" },
        { site: "Timona", task: "Attribution rate check", type: "analytics", priority: "medium" },
        { site: "Hderma", task: "Chunk retrieval test", type: "ai", priority: "medium" },
        { site: "Elasome", task: "Relevance score check", type: "ai", priority: "medium" }
      ]},
      { week: "W24", start: "2026-06-22", end: "2026-06-30", tasks: [
        { site: "ALL", task: "🏁 BÁO CÁO Q2", type: "report", priority: "critical" },
        { site: "Clinic", task: "Mid-year adjust strategy", type: "planning", priority: "high" },
        { site: "Timona", task: "Mid-year adjust", type: "planning", priority: "high" },
        { site: "Hderma", task: "Mid-year adjust", type: "planning", priority: "medium" }
      ]}
    ]
  },

  // Q3 2026 - MAINTAIN & GROW
  q3: {
    name: "Q3/2026 - Maintain & Grow",
    weeks: [
      // Tháng 7
      { week: "W25", start: "2026-07-01", end: "2026-07-07", tasks: [
        { site: "Clinic", task: "Giảm béo HIFU Body", type: "content", priority: "high" },
        { site: "Timona", task: "Lộ trình combo chủ spa", type: "content", priority: "high" },
        { site: "Hderma", task: "User testimonials video", type: "content", priority: "medium" },
        { site: "Elasome", task: "🤝 PARTNERSHIP CLINIC START", type: "partnership", priority: "critical" }
      ]},
      { week: "W26", start: "2026-07-08", end: "2026-07-14", tasks: [
        { site: "Clinic", task: "Collagen nguyên bào PRP", type: "content", priority: "high" },
        { site: "Timona", task: "Backlink education sites", type: "seo", priority: "medium" },
        { site: "Hderma", task: "Backlink beauty forums", type: "seo", priority: "medium" },
        { site: "Elasome", task: "Content M5 Aqua Focus HA", type: "content", priority: "high" }
      ]},
      { week: "W27", start: "2026-07-15", end: "2026-07-21", tasks: [
        { site: "Clinic", task: "Internal links audit", type: "seo", priority: "medium" },
        { site: "Timona", task: "Embedding relevance", type: "ai", priority: "medium" },
        { site: "Hderma", task: "Relevance score", type: "ai", priority: "medium" },
        { site: "Elasome", task: "Sentiment check AI", type: "ai", priority: "medium" }
      ]},
      { week: "W28", start: "2026-07-22", end: "2026-07-31", tasks: [
        { site: "Clinic", task: "Share of voice report", type: "analytics", priority: "medium" },
        { site: "Timona", task: "Zero-click presence", type: "ai", priority: "medium" },
        { site: "Hderma", task: "Sentiment analysis", type: "ai", priority: "medium" },
        { site: "Elasome", task: "Internal links optimize", type: "seo", priority: "medium" }
      ]},
      // Tháng 8
      { week: "W29", start: "2026-08-01", end: "2026-08-07", tasks: [
        { site: "Clinic", task: "Campaign trẻ hóa Q3", type: "campaign", priority: "high" },
        { site: "Timona", task: "Sự kiện tốt nghiệp 2026", type: "event", priority: "high" },
        { site: "Hderma", task: "Campaign T.240 Acne Spot", type: "campaign", priority: "medium" },
        { site: "Elasome", task: "Partnership push clinic", type: "partnership", priority: "high" }
      ]},
      { week: "W30", start: "2026-08-08", end: "2026-08-14", tasks: [
        { site: "Clinic", task: "Testimonials video clients", type: "content", priority: "high" },
        { site: "Timona", task: "FAQ AI optimization", type: "ai", priority: "medium" },
        { site: "Hderma", task: "Internal links optimize", type: "seo", priority: "medium" },
        { site: "Elasome", task: "FAQ B2B optimize", type: "optimization", priority: "medium" }
      ]},
      { week: "W31", start: "2026-08-15", end: "2026-08-21", tasks: [
        { site: "Clinic", task: "Relevance score check", type: "ai", priority: "medium" },
        { site: "Timona", task: "Reviews học viên video", type: "content", priority: "medium" },
        { site: "Hderma", task: "Share of voice", type: "analytics", priority: "medium" },
        { site: "Elasome", task: "Testimonials BS video", type: "content", priority: "high" }
      ]},
      { week: "W32", start: "2026-08-22", end: "2026-08-31", tasks: [
        { site: "Clinic", task: "Lead review & quality", type: "analytics", priority: "high" },
        { site: "Timona", task: "Share of voice", type: "analytics", priority: "medium" },
        { site: "Hderma", task: "Lead review", type: "analytics", priority: "medium" },
        { site: "Elasome", task: "Lead quality review B2B", type: "analytics", priority: "high" }
      ]},
      // Tháng 9
      { week: "W33", start: "2026-09-01", end: "2026-09-07", tasks: [
        { site: "Clinic", task: "Ưu đãi cuối hè", type: "campaign", priority: "high" },
        { site: "Timona", task: "Asia Beauty Awards recap", type: "content", priority: "high" },
        { site: "Hderma", task: "Ưu đãi cuối quý", type: "campaign", priority: "medium" },
        { site: "Elasome", task: "Campaign cuối quý B2B", type: "campaign", priority: "high" }
      ]},
      { week: "W34", start: "2026-09-08", end: "2026-09-14", tasks: [
        { site: "Clinic", task: "Hội thảo da liễu tham gia", type: "event", priority: "high" },
        { site: "Timona", task: "Infographic nghề hot 2027", type: "content", priority: "medium" },
        { site: "Hderma", task: "Hội thảo Exosome recap", type: "content", priority: "medium" },
        { site: "Elasome", task: "Infographic M1-M5 update", type: "content", priority: "medium" }
      ]},
      { week: "W35", start: "2026-09-15", end: "2026-09-21", tasks: [
        { site: "Clinic", task: "Semantic score final", type: "ai", priority: "medium" },
        { site: "Timona", task: "Semantic density check", type: "ai", priority: "medium" },
        { site: "Hderma", task: "Semantic score", type: "ai", priority: "medium" },
        { site: "Elasome", task: "Semantic score B2B", type: "ai", priority: "medium" }
      ]},
      { week: "W36", start: "2026-09-22", end: "2026-09-30", tasks: [
        { site: "ALL", task: "🏁 BÁO CÁO Q3", type: "report", priority: "critical" },
        { site: "Clinic", task: "Báo cáo Q3 + prep Q4", type: "report", priority: "high" },
        { site: "Timona", task: "⏸️ MÙA TUYỂN SINH KẾT THÚC", type: "milestone", priority: "high" },
        { site: "Elasome", task: "Q3 prep report", type: "report", priority: "medium" }
      ]}
    ]
  },

  // Q4 2026 - TẾT & YEAR-END
  q4: {
    name: "Q4/2026 - Tết Campaign & Year-End",
    weeks: [
      // Tháng 10
      { week: "W37", start: "2026-10-01", end: "2026-10-07", tasks: [
        { site: "Clinic", task: "Campaign giảm béo Tết", type: "campaign", priority: "high" },
        { site: "Timona", task: "Chuẩn bị năm mới content", type: "content", priority: "medium" },
        { site: "Hderma", task: "🎁 BUNDLE TẾT START", type: "campaign", priority: "critical" },
        { site: "Elasome", task: "Ưu đãi B2B package Tết", type: "campaign", priority: "high" }
      ]},
      { week: "W38", start: "2026-10-08", end: "2026-10-14", tasks: [
        { site: "Clinic", task: "Citation expand y khoa", type: "ai", priority: "medium" },
        { site: "Timona", task: "Citation keyword expand", type: "ai", priority: "medium" },
        { site: "Hderma", task: "Bundle gift sets design", type: "campaign", priority: "high" },
        { site: "Elasome", task: "Citation test expand", type: "ai", priority: "medium" }
      ]},
      { week: "W39", start: "2026-10-15", end: "2026-10-21", tasks: [
        { site: "Clinic", task: "A/B test form đặt lịch", type: "optimization", priority: "medium" },
        { site: "Timona", task: "Internal links audit", type: "seo", priority: "medium" },
        { site: "Hderma", task: "Citation keyword expand", type: "ai", priority: "medium" },
        { site: "Elasome", task: "A/B lead form B2B", type: "optimization", priority: "medium" }
      ]},
      { week: "W40", start: "2026-10-22", end: "2026-10-31", tasks: [
        { site: "Clinic", task: "Conversions report", type: "report", priority: "high" },
        { site: "Timona", task: "Conversions report", type: "report", priority: "medium" },
        { site: "Hderma", task: "Mobile A/B test", type: "optimization", priority: "medium" },
        { site: "Elasome", task: "Conversions report B2B", type: "report", priority: "high" }
      ]},
      // Tháng 11
      { week: "W41", start: "2026-11-01", end: "2026-11-07", tasks: [
        { site: "Clinic", task: "Entity social media", type: "ai", priority: "medium" },
        { site: "Timona", task: "Entity LinkedIn/Reddit", type: "ai", priority: "medium" },
        { site: "Hderma", task: "Conversions report", type: "report", priority: "medium" },
        { site: "Elasome", task: "Entity industry build", type: "ai", priority: "medium" }
      ]},
      { week: "W42", start: "2026-11-08", end: "2026-11-14", tasks: [
        { site: "Clinic", task: "Refresh AIO content", type: "content", priority: "medium" },
        { site: "Timona", task: "Refresh AIO content", type: "content", priority: "medium" },
        { site: "Hderma", task: "Entity social expand", type: "ai", priority: "medium" },
        { site: "Elasome", task: "Refresh AIO B2B", type: "content", priority: "medium" }
      ]},
      { week: "W43", start: "2026-11-15", end: "2026-11-21", tasks: [
        { site: "Clinic", task: "Track all leads", type: "analytics", priority: "high" },
        { site: "Timona", task: "Influenced conversions", type: "ai", priority: "medium" },
        { site: "Hderma", task: "Refresh AIO content", type: "content", priority: "medium" },
        { site: "Elasome", task: "Track all B2B leads", type: "analytics", priority: "high" }
      ]},
      { week: "W44", start: "2026-11-22", end: "2026-11-30", tasks: [
        { site: "Clinic", task: "Year-end audit", type: "audit", priority: "high" },
        { site: "Timona", task: "Prep báo cáo năm", type: "report", priority: "medium" },
        { site: "Hderma", task: "Influenced leads track", type: "ai", priority: "medium" },
        { site: "Elasome", task: "Year-end audit B2B", type: "audit", priority: "high" }
      ]},
      // Tháng 12
      { week: "W45", start: "2026-12-01", end: "2026-12-07", tasks: [
        { site: "Clinic", task: "Campaign Tết VIP", type: "campaign", priority: "high" },
        { site: "Timona", task: "Campaign Tết hướng nghiệp", type: "campaign", priority: "medium" },
        { site: "Hderma", task: "Year-end audit", type: "audit", priority: "medium" },
        { site: "Elasome", task: "Banner promo year-end", type: "campaign", priority: "medium" }
      ]},
      { week: "W46", start: "2026-12-08", end: "2026-12-14", tasks: [
        { site: "Clinic", task: "Báo cáo AI metrics", type: "report", priority: "high" },
        { site: "Timona", task: "Báo cáo AI KPIs", type: "report", priority: "high" },
        { site: "Hderma", task: "Banner Tết campaign", type: "campaign", priority: "high" },
        { site: "Elasome", task: "AI metrics report", type: "report", priority: "high" }
      ]},
      { week: "W47", start: "2026-12-15", end: "2026-12-21", tasks: [
        { site: "Clinic", task: "Backup data & docs", type: "maintenance", priority: "high" },
        { site: "Timona", task: "Backup & document", type: "maintenance", priority: "medium" },
        { site: "Hderma", task: "Báo cáo AI metrics", type: "report", priority: "medium" },
        { site: "Elasome", task: "Backup & docs", type: "maintenance", priority: "medium" }
      ]},
      { week: "W48", start: "2026-12-22", end: "2026-12-31", tasks: [
        { site: "ALL", task: "🏁 BÁO CÁO NĂM & PLAN 2027", type: "report", priority: "critical" },
        { site: "Clinic", task: "Plan 2027 clinic", type: "planning", priority: "high" },
        { site: "Timona", task: "Plan 2027 timona", type: "planning", priority: "high" },
        { site: "Hderma", task: "Backup + Plan 2027", type: "planning", priority: "medium" },
        { site: "Elasome", task: "Plan 2027 B2B", type: "planning", priority: "medium" }
      ]}
    ]
  }
};

// Task types với màu sắc
const TASK_TYPES = {
  audit: { color: "#ef4444", label: "Audit" },
  content: { color: "#3b82f6", label: "Content" },
  technical: { color: "#8b5cf6", label: "Technical" },
  campaign: { color: "#10b981", label: "Campaign" },
  ai: { color: "#f59e0b", label: "AI/SEO" },
  seo: { color: "#06b6d4", label: "SEO" },
  partnership: { color: "#ec4899", label: "Partnership" },
  optimization: { color: "#84cc16", label: "Optimize" },
  analytics: { color: "#6366f1", label: "Analytics" },
  report: { color: "#14b8a6", label: "Report" },
  meeting: { color: "#64748b", label: "Meeting" },
  event: { color: "#f97316", label: "Event" },
  planning: { color: "#a855f7", label: "Planning" },
  maintenance: { color: "#78716c", label: "Maintenance" },
  milestone: { color: "#dc2626", label: "Milestone" }
};

// Priority levels
const PRIORITIES = {
  critical: { color: "#dc2626", label: "🔴 Critical" },
  high: { color: "#f59e0b", label: "🟠 High" },
  medium: { color: "#3b82f6", label: "🔵 Medium" },
  low: { color: "#10b981", label: "🟢 Low" }
};
