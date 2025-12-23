# GA Analytics Dashboard - Bun + Prisma + SQLite

## Tổng quan

Backend API cho Google Analytics 4 Dashboard sử dụng:
- **Bun.js** - JavaScript runtime nhanh hơn Node.js
- **Prisma** - ORM hiện đại cho database
- **SQLite** - Database file-based, không cần cài đặt server
- **Express** - Web framework
- **googleapis** - Google Analytics Data API

## Cài đặt

### 1. Cài đặt dependencies

```bash
bun install
```

### 2. Tạo database (nếu chưa có)

```bash
bun run db:migrate
```

### 3. Khởi chạy server

```bash
bun run start
```

Server sẽ chạy tại: http://localhost:3001

## Scripts có sẵn

```bash
# Chạy server với Bun (khuyến nghị)
bun run start

# Chạy server với Node.js (backup)
bun run start:node

# Chạy dev mode với auto-reload
bun run dev

# Prisma commands
bun run db:migrate    # Chạy migration
bun run db:generate   # Generate Prisma Client
bun run db:studio     # Mở Prisma Studio (GUI)
bun run db:push       # Push schema changes
bun run db:reset      # Reset database
```

## API Endpoints

### Health & Config
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/api/health` | Kiểm tra server + database |
| GET | `/api/properties` | Danh sách websites đã cấu hình |

### Google Analytics Data
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/api/analytics/all` | Dữ liệu tất cả websites |
| GET | `/api/analytics/:site/sources` | Traffic sources của 1 website |
| GET | `/api/analytics/:site/monthly` | Dữ liệu theo tháng |
| GET | `/api/analytics/:site/realtime` | Dữ liệu real-time |
| GET | `/api/analytics/:site/pages` | Top pages |
| GET | `/api/analytics/:site/devices` | Device breakdown |
| GET | `/api/analytics/summary` | Phân tích tổng hợp |

### Database Operations
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| POST | `/api/snapshot` | Lưu snapshot dữ liệu |
| GET | `/api/snapshots` | Lấy danh sách snapshots |
| GET | `/api/history/:siteKey` | Lịch sử 1 website |
| GET | `/api/trend/:siteKey` | Xu hướng theo ngày |
| DELETE | `/api/snapshot/:id` | Xóa 1 snapshot |
| DELETE | `/api/data/clear` | Xóa tất cả dữ liệu |
| GET | `/api/db/stats` | Thống kê database |

## Cấu trúc Database (Prisma Schema)

```prisma
// Snapshot lưu trữ dữ liệu tổng hợp
model Snapshot {
  id          String     @id @default(uuid())
  dateRange   String     // "1month", "3months", "1year", "custom"
  startDate   String
  endDate     String
  timestamp   DateTime   @default(now())
  description String?
  siteData    SiteData[]
}

// Dữ liệu chi tiết từng website
model SiteData {
  id           String   @id @default(uuid())
  siteKey      String   // "clinic", "timona", etc.
  siteName     String
  sessions     Int
  users        Int
  pageviews    Int
  conversions  Int
  bounceRate   Float
  avgDuration  Float
  error        String?
  snapshotId   String
  snapshot     Snapshot @relation(...)
}

// Dữ liệu theo dõi hàng ngày
model DailyMetric {
  id          String   @id @default(uuid())
  siteKey     String
  date        String   // YYYY-MM-DD
  sessions    Int
  users       Int
  pageviews   Int
  conversions Int
  bounceRate  Float
  avgDuration Float
  createdAt   DateTime @default(now())
}

// Traffic sources
model TrafficSource {
  id        String   @id @default(uuid())
  siteKey   String
  dateRange String
  source    String
  medium    String
  sessions  Int
  users     Int
  createdAt DateTime @default(now())
}
```

## Websites được cấu hình

| Key | Website | Property ID |
|-----|---------|-------------|
| clinic | TazaSkinClinic.com | 354761183 |
| timona | Timona.edu.vn | 354372781 |
| hderma | Hderma.vn | 501388109 |
| elasome | Elasome.com | 501465412 |
| group | TazaGroup.vn | 406087702 |

## File cấu trúc

```
kpiseo/
├── ga-backend-prisma.js   # Backend chính (Bun + Prisma)
├── ga-backend.js          # Backend backup (Node.js + JSON)
├── ga-test.html           # Dashboard UI
├── package.json           # Dependencies & scripts
├── prisma/
│   ├── schema.prisma      # Database schema
│   ├── migrations/        # Migration files
│   └── ga-analytics.db    # SQLite database file
└── README-prisma.md       # File này
```

## Sử dụng Dashboard

1. Chạy server: `bun run start`
2. Mở `ga-test.html` trong trình duyệt
3. Chọn khoảng thời gian (7 ngày, 1 tháng, 3 tháng, 1 năm hoặc tùy chỉnh)
4. Click "📥 Tải dữ liệu" để lấy dữ liệu từ GA4
5. Click "💾 Lưu Snapshot" để lưu vào database
6. Tab "📜 Lịch sử" để xem các snapshots đã lưu
7. Tab "📊 Phân tích" để so sánh tăng trưởng

## Xem dữ liệu trong Prisma Studio

```bash
bun run db:studio
```

Mở http://localhost:5555 để xem/edit dữ liệu trực quan.

## Troubleshooting

### Lỗi "Cannot find module @prisma/client"
```bash
bun run db:generate
```

### Lỗi database
```bash
bun run db:reset
```

### Lỗi GA4 permission
- Thêm Service Account email vào GA4 Property > Admin > Property Access Management
- Email: `ga-dashboard-service@silver-theme-482004-b0.iam.gserviceaccount.com`
- Role: Viewer

## License

MIT - TazaGroup
