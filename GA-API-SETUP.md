# 📊 Hướng Dẫn Cấu Hình Google Analytics API

## Tổng Quan

Dashboard KPI SEO 2026 hỗ trợ lấy dữ liệu thực từ Google Analytics 4 (GA4) cho 5 website:

1. **TazaSkinClinic.com** - Viện da liễu & thẩm mỹ
2. **Timona.edu.vn** - Học viện thẩm mỹ quốc tế
3. **Hderma.vn** - Dược mỹ phẩm chuẩn y khoa
4. **Elasome.com** - Phân phối Exosome B2B
5. **TazaGroup.vn** - Tập đoàn mẹ

---

## Phương Án 1: Client-side (OAuth 2.0) - Đơn giản

### Bước 1: Tạo Google Cloud Project

1. Truy cập [Google Cloud Console](https://console.cloud.google.com)
2. Nhấn **Select a project** → **New Project**
3. Đặt tên project: `TazaGroup-GA-Dashboard`
4. Nhấn **Create**

### Bước 2: Bật Google Analytics Data API

1. Vào **APIs & Services** → **Library**
2. Tìm kiếm: `Google Analytics Data API`
3. Nhấn **Enable**

### Bước 3: Tạo OAuth 2.0 Credentials

1. Vào **APIs & Services** → **Credentials**
2. Nhấn **Create Credentials** → **OAuth client ID**
3. Nếu chưa có Consent Screen, tạo trước:
   - User Type: **External** (hoặc Internal nếu dùng Google Workspace)
   - App name: `TazaGroup Dashboard`
   - Support email: email của bạn
   - Authorized domains: domain của bạn
4. Quay lại tạo OAuth client ID:
   - Application type: **Web application**
   - Name: `KPI Dashboard`
   - Authorized JavaScript origins: 
     - `http://localhost:3000`
     - `https://yourdomain.com`
   - Authorized redirect URIs: (để trống nếu dùng popup)
5. Copy **Client ID** (dạng: `xxxx.apps.googleusercontent.com`)

### Bước 4: Lấy GA4 Property ID

1. Truy cập [Google Analytics](https://analytics.google.com)
2. Chọn property cần lấy ID
3. Vào **Admin** (góc dưới trái)
4. Trong cột **Property**, chọn **Property Settings**
5. Copy **Property ID** (dạng số: `123456789`)

**Lặp lại cho cả 5 website!**

### Bước 5: Cấu hình Dashboard

1. Mở file `ga-config.html` trong browser
2. Điền OAuth Client ID
3. Điền Property ID cho từng website
4. Nhấn **Lưu Cấu Hình**

---

## Phương Án 2: Server-side (Service Account) - Bảo mật hơn

### Bước 1-2: Giống Phương Án 1

### Bước 3: Tạo Service Account

1. Vào **APIs & Services** → **Credentials**
2. Nhấn **Create Credentials** → **Service account**
3. Đặt tên: `ga-dashboard-service`
4. Nhấn **Create and Continue**
5. Role: **Viewer** (hoặc không cần role)
6. Nhấn **Done**
7. Nhấn vào service account vừa tạo
8. Tab **Keys** → **Add Key** → **Create new key**
9. Chọn **JSON** → **Create**
10. File JSON sẽ tự động tải về - **Giữ bí mật file này!**

### Bước 4: Thêm Service Account vào GA4

1. Mở file JSON, copy email (dạng: `xxx@project.iam.gserviceaccount.com`)
2. Vào [Google Analytics](https://analytics.google.com) cho mỗi property
3. **Admin** → **Property Access Management**
4. Nhấn **+** → **Add users**
5. Dán email service account
6. Role: **Viewer**
7. Nhấn **Add**

**Lặp lại cho cả 5 property!**

### Bước 5: Cấu hình Backend

1. Cài đặt Node.js dependencies:
```bash
npm install express cors googleapis
```

2. Mở file `ga-backend.js`
3. Thay thế CONFIG với thông tin từ file JSON:
```javascript
const CONFIG = {
  credentials: {
    type: 'service_account',
    project_id: 'your-project-id',
    private_key_id: 'xxx',
    private_key: '-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n',
    client_email: 'ga-dashboard@your-project.iam.gserviceaccount.com',
    client_id: 'xxx',
  },
  properties: {
    clinic: '123456789',
    timona: '234567890',
    hderma: '345678901',
    elasome: '456789012',
    group: '567890123'
  }
};
```

4. Chạy backend:
```bash
node ga-backend.js
```

---

## Cấu Trúc File

```
kpiseo/
├── index.html              # Dashboard chính
├── data-vi.js              # Dữ liệu tĩnh (fallback)
├── google-analytics-api.js # Client-side GA API
├── data-service.js         # Service quản lý dữ liệu
├── ga-config.html          # Trang cấu hình
├── ga-backend.js           # Backend Node.js (optional)
└── GA-API-SETUP.md         # File này
```

---

## API Endpoints (Backend)

Nếu dùng backend, các endpoint sau khả dụng:

| Endpoint | Mô tả |
|----------|-------|
| `GET /api/health` | Kiểm tra trạng thái server |
| `GET /api/properties` | Danh sách properties đã cấu hình |
| `GET /api/analytics/:site/monthly` | Dữ liệu theo tháng |
| `GET /api/analytics/:site/realtime` | Dữ liệu real-time |
| `GET /api/analytics/:site/sources` | Nguồn traffic |
| `GET /api/analytics/:site/pages` | Top pages |
| `GET /api/analytics/:site/devices` | Phân loại thiết bị |
| `GET /api/analytics/all` | Tổng quan tất cả sites |

---

## Metrics GA4 Quan Trọng

| Metric | Mô tả | Ý nghĩa KPI |
|--------|-------|-------------|
| `sessions` | Số phiên truy cập | Lượt truy cập website |
| `totalUsers` | Số người dùng unique | Reach thực tế |
| `screenPageViews` | Số trang được xem | Engagement |
| `conversions` | Số chuyển đổi | Lead/Đặt lịch/Đăng ký |
| `bounceRate` | Tỷ lệ thoát | Chất lượng traffic |
| `averageSessionDuration` | Thời gian trung bình | Engagement depth |
| `activeUsers` (realtime) | Người đang online | Hoạt động tức thời |

---

## Mapping KPI với GA4

| Website | Conversion Event | Mô tả |
|---------|-----------------|-------|
| TazaSkinClinic | `form_submit`, `appointment_booked` | Đặt lịch khám |
| Timona | `form_submit`, `course_registration` | Đăng ký khóa học |
| Hderma | `purchase`, `add_to_cart` | Đặt hàng sản phẩm |
| Elasome | `form_submit`, `lead_generated` | Lead B2B |
| TazaGroup | `form_submit`, `job_application` | Tuyển dụng/Đối tác |

---

## Troubleshooting

### Lỗi: "Access Denied"
- Kiểm tra Service Account đã được thêm vào GA4 property chưa
- Kiểm tra đúng Property ID

### Lỗi: "API not enabled"
- Vào Cloud Console → APIs & Services → Enable Google Analytics Data API

### Lỗi: "Invalid credentials"
- Kiểm tra OAuth Client ID đúng chưa
- Kiểm tra file JSON service account

### Dữ liệu trả về 0
- Kiểm tra date range có hợp lệ không
- GA4 có dữ liệu cho khoảng thời gian đó không

---

## Liên Hệ Hỗ Trợ

Nếu cần hỗ trợ thêm, liên hệ:
- Email: dev@tazagroup.vn
- Documentation: [GA4 API Docs](https://developers.google.com/analytics/devguides/reporting/data/v1)
