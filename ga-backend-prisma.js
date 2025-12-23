// Backend API Proxy cho Google Analytics với Prisma SQLite
// Chạy với Bun: bun run ga-backend-prisma.js
// 
// Cài đặt: bun add express cors googleapis @prisma/client
// Khởi tạo DB: bunx prisma migrate dev

import express from 'express';
import cors from 'cors';
import { google } from 'googleapis';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// ===============================================
// CẤU HÌNH - Đọc từ environment variables
// ===============================================
const CONFIG = {
  // Service Account credentials từ .env
  credentials: {
    type: 'service_account',
    project_id: process.env.GA_PROJECT_ID,
    private_key_id: process.env.GA_PRIVATE_KEY_ID,
    private_key: process.env.GA_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.GA_CLIENT_EMAIL,
    client_id: process.env.GA_CLIENT_ID,
  },
  
  // GA4 Property IDs cho 5 website
  properties: {
    clinic: process.env.GA_PROPERTY_CLINIC || '354761183',
    timona: process.env.GA_PROPERTY_TIMONA || '354372781',
    hderma: process.env.GA_PROPERTY_HDERMA || '501388109',
    elasome: process.env.GA_PROPERTY_ELASOME || '501465412',
    group: process.env.GA_PROPERTY_GROUP || '406087702'
  },
  
  // Site names
  siteNames: {
    clinic: 'TazaSkinClinic.com',
    timona: 'Timona.edu.vn',
    hderma: 'Hderma.vn',
    elasome: 'Elasome.com',
    group: 'TazaGroup.vn'
  },
  
  port: parseInt(process.env.PORT) || 3001
};

// ===============================================
// AUTHENTICATION
// ===============================================
let analyticsDataClient;

async function initializeGA() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: CONFIG.credentials,
      scopes: ['https://www.googleapis.com/auth/analytics.readonly']
    });

    analyticsDataClient = google.analyticsdata({
      version: 'v1beta',
      auth: auth
    });

    console.log('✅ Google Analytics API initialized successfully');
    return true;
  } catch (error) {
    console.error('❌ Failed to initialize GA API:', error);
    return false;
  }
}

// ===============================================
// HELPER FUNCTIONS
// ===============================================

// Tính date range label
function getDateRangeLabel(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  
  if (diffDays <= 7) return '7days';
  if (diffDays <= 31) return '1month';
  if (diffDays <= 93) return '3months';
  if (diffDays <= 366) return '1year';
  return 'custom';
}

// Kiểm tra xem có phải 1 năm không
function isYearRange(startDate, endDate) {
  // Kiểm tra 365daysAgo hoặc khoảng cách > 300 ngày
  if (startDate === '365daysAgo' || startDate === '364daysAgo') return true;
  
  const start = new Date(startDate);
  const end = new Date(endDate);
  if (isNaN(start.getTime()) || isNaN(end.getTime())) return false;
  
  const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  return diffDays > 300;
}

// Tạo danh sách các tháng trong khoảng thời gian
function getMonthsInRange(startDate, endDate) {
  const months = [];
  const today = new Date();
  
  let start;
  if (startDate === '365daysAgo' || startDate === '364daysAgo') {
    start = new Date();
    start.setDate(start.getDate() - 365);
  } else {
    start = new Date(startDate);
  }
  
  let end;
  if (endDate === 'today') {
    end = today;
  } else {
    end = new Date(endDate);
  }
  
  // Lặp qua từng tháng
  const current = new Date(start.getFullYear(), start.getMonth(), 1);
  
  while (current <= end) {
    const year = current.getFullYear();
    const month = current.getMonth() + 1; // 1-12
    const lastDay = new Date(year, month, 0).getDate();
    
    // Tính ngày bắt đầu và kết thúc của tháng
    const monthStart = new Date(year, month - 1, 1);
    const monthEnd = new Date(year, month - 1, lastDay);
    
    // Điều chỉnh cho tháng đầu và cuối
    const actualStart = monthStart < start ? start : monthStart;
    const actualEnd = monthEnd > end ? end : monthEnd;
    
    months.push({
      year,
      month,
      monthLabel: `T${month}/${year}`,
      startDate: actualStart.toISOString().split('T')[0],
      endDate: actualEnd.toISOString().split('T')[0]
    });
    
    // Sang tháng tiếp theo
    current.setMonth(current.getMonth() + 1);
  }
  
  return months;
}

// Format date cho GA API
function formatDate(dateStr) {
  if (dateStr.includes('daysAgo') || dateStr === 'today' || dateStr === 'yesterday') {
    return dateStr;
  }
  return dateStr;
}

// ===============================================
// API ENDPOINTS
// ===============================================

// Health check
app.get('/api/health', async (req, res) => {
  try {
    // Test database connection
    await prisma.$queryRaw`SELECT 1`;
    
    res.json({ 
      status: 'ok', 
      initialized: !!analyticsDataClient,
      database: 'connected',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.json({ 
      status: 'partial', 
      initialized: !!analyticsDataClient,
      database: 'error',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Lấy danh sách properties
app.get('/api/properties', (req, res) => {
  res.json({
    properties: Object.entries(CONFIG.properties).map(([key, id]) => ({
      key,
      name: CONFIG.siteNames[key],
      propertyId: id,
      configured: !!id && id !== 'YOUR_' + key.toUpperCase() + '_PROPERTY_ID'
    }))
  });
});

// Lấy dữ liệu tổng quan theo tháng
app.get('/api/analytics/:siteKey/monthly', async (req, res) => {
  try {
    const { siteKey } = req.params;
    const { year = 2026 } = req.query;
    
    const propertyId = CONFIG.properties[siteKey];
    if (!propertyId) {
      return res.status(400).json({ error: `Site ${siteKey} not found` });
    }

    const results = [];
    
    for (let month = 1; month <= 12; month++) {
      const startDate = `${year}-${String(month).padStart(2, '0')}-01`;
      const lastDay = new Date(year, month, 0).getDate();
      const endDate = `${year}-${String(month).padStart(2, '0')}-${lastDay}`;

      const response = await analyticsDataClient.properties.runReport({
        property: `properties/${propertyId}`,
        requestBody: {
          dateRanges: [{ startDate, endDate }],
          metrics: [
            { name: 'sessions' },
            { name: 'totalUsers' },
            { name: 'screenPageViews' },
            { name: 'conversions' }
          ]
        }
      });

      const row = response.data.rows?.[0];
      results.push({
        month: `T${month}`,
        sessions: parseInt(row?.metricValues?.[0]?.value) || 0,
        users: parseInt(row?.metricValues?.[1]?.value) || 0,
        pageviews: parseInt(row?.metricValues?.[2]?.value) || 0,
        conversions: parseInt(row?.metricValues?.[3]?.value) || 0
      });
    }

    res.json({ siteKey, year, data: results });
  } catch (error) {
    console.error('Error fetching monthly data:', error);
    res.status(500).json({ error: error.message });
  }
});

// Lấy dữ liệu real-time
app.get('/api/analytics/:siteKey/realtime', async (req, res) => {
  try {
    const { siteKey } = req.params;
    const propertyId = CONFIG.properties[siteKey];
    
    if (!propertyId) {
      return res.status(400).json({ error: `Site ${siteKey} not found` });
    }

    const response = await analyticsDataClient.properties.runRealtimeReport({
      property: `properties/${propertyId}`,
      requestBody: {
        metrics: [{ name: 'activeUsers' }],
        dimensions: [{ name: 'country' }]
      }
    });

    const totalActiveUsers = response.data.rows?.reduce((sum, row) => {
      return sum + parseInt(row.metricValues[0].value);
    }, 0) || 0;

    res.json({
      siteKey,
      activeUsers: totalActiveUsers,
      byCountry: response.data.rows?.map(row => ({
        country: row.dimensionValues[0].value,
        activeUsers: parseInt(row.metricValues[0].value)
      })) || []
    });
  } catch (error) {
    console.error('Error fetching realtime data:', error);
    res.status(500).json({ error: error.message });
  }
});

// Lấy traffic sources
app.get('/api/analytics/:siteKey/sources', async (req, res) => {
  try {
    const { siteKey } = req.params;
    const { startDate = '30daysAgo', endDate = 'today' } = req.query;
    const propertyId = CONFIG.properties[siteKey];
    
    if (!propertyId) {
      return res.status(400).json({ error: `Site ${siteKey} not found` });
    }

    const response = await analyticsDataClient.properties.runReport({
      property: `properties/${propertyId}`,
      requestBody: {
        dateRanges: [{ startDate, endDate }],
        metrics: [
          { name: 'sessions' },
          { name: 'totalUsers' },
          { name: 'bounceRate' }
        ],
        dimensions: [{ name: 'sessionDefaultChannelGroup' }]
      }
    });

    res.json({
      siteKey,
      dateRange: { startDate, endDate },
      sources: response.data.rows?.map(row => ({
        channel: row.dimensionValues[0].value,
        sessions: parseInt(row.metricValues[0].value),
        users: parseInt(row.metricValues[1].value),
        bounceRate: parseFloat(row.metricValues[2].value)
      })) || []
    });
  } catch (error) {
    console.error('Error fetching sources:', error);
    res.status(500).json({ error: error.message });
  }
});

// Lấy top pages
app.get('/api/analytics/:siteKey/pages', async (req, res) => {
  try {
    const { siteKey } = req.params;
    const { startDate = '30daysAgo', endDate = 'today', limit = 10 } = req.query;
    const propertyId = CONFIG.properties[siteKey];
    
    if (!propertyId) {
      return res.status(400).json({ error: `Site ${siteKey} not found` });
    }

    const response = await analyticsDataClient.properties.runReport({
      property: `properties/${propertyId}`,
      requestBody: {
        dateRanges: [{ startDate, endDate }],
        metrics: [
          { name: 'screenPageViews' },
          { name: 'averageSessionDuration' }
        ],
        dimensions: [{ name: 'pagePath' }],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
        limit: parseInt(limit)
      }
    });

    res.json({
      siteKey,
      dateRange: { startDate, endDate },
      pages: response.data.rows?.map(row => ({
        path: row.dimensionValues[0].value,
        pageviews: parseInt(row.metricValues[0].value),
        avgDuration: parseFloat(row.metricValues[1].value)
      })) || []
    });
  } catch (error) {
    console.error('Error fetching pages:', error);
    res.status(500).json({ error: error.message });
  }
});

// Lấy device breakdown
app.get('/api/analytics/:siteKey/devices', async (req, res) => {
  try {
    const { siteKey } = req.params;
    const { startDate = '30daysAgo', endDate = 'today' } = req.query;
    const propertyId = CONFIG.properties[siteKey];
    
    if (!propertyId) {
      return res.status(400).json({ error: `Site ${siteKey} not found` });
    }

    const response = await analyticsDataClient.properties.runReport({
      property: `properties/${propertyId}`,
      requestBody: {
        dateRanges: [{ startDate, endDate }],
        metrics: [
          { name: 'sessions' },
          { name: 'totalUsers' }
        ],
        dimensions: [{ name: 'deviceCategory' }]
      }
    });

    res.json({
      siteKey,
      dateRange: { startDate, endDate },
      devices: response.data.rows?.map(row => ({
        device: row.dimensionValues[0].value,
        sessions: parseInt(row.metricValues[0].value),
        users: parseInt(row.metricValues[1].value)
      })) || []
    });
  } catch (error) {
    console.error('Error fetching devices:', error);
    res.status(500).json({ error: error.message });
  }
});

// Lấy tất cả dữ liệu cho dashboard
app.get('/api/analytics/all', async (req, res) => {
  try {
    const { startDate = '30daysAgo', endDate = 'today' } = req.query;
    const results = {};

    for (const [siteKey, propertyId] of Object.entries(CONFIG.properties)) {
      if (!propertyId || propertyId.includes('YOUR_')) {
        results[siteKey] = { error: 'Not configured' };
        continue;
      }

      try {
        const response = await analyticsDataClient.properties.runReport({
          property: `properties/${propertyId}`,
          requestBody: {
            dateRanges: [{ startDate, endDate }],
            metrics: [
              { name: 'sessions' },
              { name: 'totalUsers' },
              { name: 'screenPageViews' },
              { name: 'conversions' },
              { name: 'bounceRate' },
              { name: 'averageSessionDuration' }
            ]
          }
        });

        const row = response.data.rows?.[0];
        results[siteKey] = {
          sessions: parseInt(row?.metricValues?.[0]?.value) || 0,
          users: parseInt(row?.metricValues?.[1]?.value) || 0,
          pageviews: parseInt(row?.metricValues?.[2]?.value) || 0,
          conversions: parseInt(row?.metricValues?.[3]?.value) || 0,
          bounceRate: parseFloat(row?.metricValues?.[4]?.value) || 0,
          avgDuration: parseFloat(row?.metricValues?.[5]?.value) || 0
        };
      } catch (error) {
        results[siteKey] = { error: error.message };
      }
    }

    res.json({
      dateRange: { startDate, endDate },
      data: results,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching all data:', error);
    res.status(500).json({ error: error.message });
  }
});

// ===============================================
// DATABASE ENDPOINTS (PRISMA)
// ===============================================

// Lưu snapshot dữ liệu hiện tại
app.post('/api/snapshot', async (req, res) => {
  try {
    const { startDate, endDate, description } = req.body;
    const dateRange = getDateRangeLabel(startDate, endDate);
    const isYear = isYearRange(startDate, endDate);
    
    console.log(`📸 Saving snapshot: ${startDate} - ${endDate}, isYear: ${isYear}`);
    
    // Lấy dữ liệu tổng hợp từ GA4
    const siteDataArray = [];
    
    for (const [siteKey, propertyId] of Object.entries(CONFIG.properties)) {
      const siteInfo = {
        siteKey,
        siteName: CONFIG.siteNames[siteKey],
        sessions: 0,
        users: 0,
        pageviews: 0,
        conversions: 0,
        bounceRate: 0,
        avgDuration: 0,
        error: null
      };

      if (!propertyId || propertyId.includes('YOUR_')) {
        siteInfo.error = 'Not configured';
        siteDataArray.push(siteInfo);
        continue;
      }

      try {
        const response = await analyticsDataClient.properties.runReport({
          property: `properties/${propertyId}`,
          requestBody: {
            dateRanges: [{ startDate, endDate }],
            metrics: [
              { name: 'sessions' },
              { name: 'totalUsers' },
              { name: 'screenPageViews' },
              { name: 'conversions' },
              { name: 'bounceRate' },
              { name: 'averageSessionDuration' }
            ]
          }
        });

        const row = response.data.rows?.[0];
        siteInfo.sessions = parseInt(row?.metricValues?.[0]?.value) || 0;
        siteInfo.users = parseInt(row?.metricValues?.[1]?.value) || 0;
        siteInfo.pageviews = parseInt(row?.metricValues?.[2]?.value) || 0;
        siteInfo.conversions = parseInt(row?.metricValues?.[3]?.value) || 0;
        siteInfo.bounceRate = parseFloat(row?.metricValues?.[4]?.value) || 0;
        siteInfo.avgDuration = parseFloat(row?.metricValues?.[5]?.value) || 0;
      } catch (error) {
        siteInfo.error = error.message;
      }
      
      siteDataArray.push(siteInfo);
    }

    // Tạo snapshot trong database
    const snapshot = await prisma.snapshot.create({
      data: {
        dateRange,
        startDate,
        endDate,
        description: description || `Snapshot ${new Date().toLocaleDateString('vi-VN')}`,
        siteData: {
          create: siteDataArray
        }
      },
      include: {
        siteData: true
      }
    });

    // Nếu là 1 năm, lấy và lưu dữ liệu theo từng tháng
    let monthlyData = [];
    if (isYear) {
      console.log('📅 Fetching monthly breakdown for 1 year...');
      const months = getMonthsInRange(startDate, endDate);
      console.log(`📆 Found ${months.length} months to process`);
      
      for (const monthInfo of months) {
        console.log(`   Processing ${monthInfo.monthLabel}...`);
        
        for (const [siteKey, propertyId] of Object.entries(CONFIG.properties)) {
          if (!propertyId || propertyId.includes('YOUR_')) continue;
          
          const monthlyMetric = {
            siteKey,
            siteName: CONFIG.siteNames[siteKey],
            year: monthInfo.year,
            month: monthInfo.month,
            monthLabel: monthInfo.monthLabel,
            sessions: 0,
            users: 0,
            pageviews: 0,
            conversions: 0,
            bounceRate: 0,
            avgDuration: 0,
            error: null,
            snapshotId: snapshot.id
          };

          try {
            const response = await analyticsDataClient.properties.runReport({
              property: `properties/${propertyId}`,
              requestBody: {
                dateRanges: [{ 
                  startDate: monthInfo.startDate, 
                  endDate: monthInfo.endDate 
                }],
                metrics: [
                  { name: 'sessions' },
                  { name: 'totalUsers' },
                  { name: 'screenPageViews' },
                  { name: 'conversions' },
                  { name: 'bounceRate' },
                  { name: 'averageSessionDuration' }
                ]
              }
            });

            const row = response.data.rows?.[0];
            monthlyMetric.sessions = parseInt(row?.metricValues?.[0]?.value) || 0;
            monthlyMetric.users = parseInt(row?.metricValues?.[1]?.value) || 0;
            monthlyMetric.pageviews = parseInt(row?.metricValues?.[2]?.value) || 0;
            monthlyMetric.conversions = parseInt(row?.metricValues?.[3]?.value) || 0;
            monthlyMetric.bounceRate = parseFloat(row?.metricValues?.[4]?.value) || 0;
            monthlyMetric.avgDuration = parseFloat(row?.metricValues?.[5]?.value) || 0;
          } catch (error) {
            monthlyMetric.error = error.message;
          }
          
          // Lưu vào database
          await prisma.monthlyMetric.create({
            data: monthlyMetric
          });
          
          monthlyData.push(monthlyMetric);
        }
      }
      console.log(`✅ Saved ${monthlyData.length} monthly metrics`);
    }

    // Lưu daily metrics cho phân tích trend
    for (const site of siteDataArray) {
      if (!site.error) {
        await prisma.dailyMetric.upsert({
          where: {
            siteKey_date: {
              siteKey: site.siteKey,
              date: new Date().toISOString().split('T')[0]
            }
          },
          update: {
            sessions: site.sessions,
            users: site.users,
            pageviews: site.pageviews,
            conversions: site.conversions,
            bounceRate: site.bounceRate,
            avgDuration: site.avgDuration
          },
          create: {
            siteKey: site.siteKey,
            date: new Date().toISOString().split('T')[0],
            sessions: site.sessions,
            users: site.users,
            pageviews: site.pageviews,
            conversions: site.conversions,
            bounceRate: site.bounceRate,
            avgDuration: site.avgDuration
          }
        });
      }
    }

    // Format response
    const responseData = {
      success: true, 
      snapshot: {
        id: snapshot.id,
        dateRange: snapshot.dateRange,
        startDate: snapshot.startDate,
        endDate: snapshot.endDate,
        description: snapshot.description,
        createdAt: snapshot.timestamp,
        data: snapshot.siteData.reduce((acc, site) => {
          acc[site.siteKey] = site.error ? { error: site.error } : {
            sessions: site.sessions,
            users: site.users,
            pageviews: site.pageviews,
            conversions: site.conversions,
            bounceRate: site.bounceRate,
            avgDuration: site.avgDuration
          };
          return acc;
        }, {})
      },
      message: isYear 
        ? `Đã lưu snapshot 1 năm với ${monthlyData.length} chỉ số theo tháng!`
        : 'Đã lưu snapshot thành công vào SQLite!'
    };

    // Thêm monthly data nếu có
    if (isYear && monthlyData.length > 0) {
      responseData.monthlyBreakdown = {};
      for (const m of monthlyData) {
        if (!responseData.monthlyBreakdown[m.siteKey]) {
          responseData.monthlyBreakdown[m.siteKey] = [];
        }
        responseData.monthlyBreakdown[m.siteKey].push({
          month: m.monthLabel,
          sessions: m.sessions,
          users: m.users,
          pageviews: m.pageviews,
          conversions: m.conversions
        });
      }
    }

    res.json(responseData);
  } catch (error) {
    console.error('Error saving snapshot:', error);
    res.status(500).json({ error: error.message });
  }
});

// Lấy tất cả snapshots
app.get('/api/snapshots', async (req, res) => {
  try {
    const snapshots = await prisma.snapshot.findMany({
      include: {
        siteData: true,
        monthlyMetrics: true
      },
      orderBy: {
        timestamp: 'desc'
      }
    });

    const formattedSnapshots = snapshots.map(snap => {
      const result = {
        id: snap.id,
        label: snap.description,
        dateRange: { startDate: snap.startDate, endDate: snap.endDate },
        hasMonthlyData: snap.monthlyMetrics.length > 0,
        data: snap.siteData.reduce((acc, site) => {
          acc[site.siteKey] = site.error ? { error: site.error } : {
            sessions: site.sessions,
            users: site.users,
            pageviews: site.pageviews,
            conversions: site.conversions,
            bounceRate: site.bounceRate,
            avgDuration: site.avgDuration
          };
          return acc;
        }, {}),
        createdAt: snap.timestamp.toISOString()
      };
      
      return result;
    });

    res.json({
      total: snapshots.length,
      snapshots: formattedSnapshots
    });
  } catch (error) {
    console.error('Error fetching snapshots:', error);
    res.status(500).json({ error: error.message });
  }
});

// Lấy monthly metrics của một snapshot
app.get('/api/snapshot/:id/monthly', async (req, res) => {
  try {
    const { id } = req.params;
    
    const monthlyMetrics = await prisma.monthlyMetric.findMany({
      where: { snapshotId: id },
      orderBy: [
        { year: 'asc' },
        { month: 'asc' },
        { siteKey: 'asc' }
      ]
    });

    if (monthlyMetrics.length === 0) {
      return res.status(404).json({ 
        error: 'No monthly data found for this snapshot',
        message: 'Snapshot này không có dữ liệu theo tháng. Chỉ snapshot 1 năm mới có.'
      });
    }

    // Group by site
    const bySite = {};
    const byMonth = {};
    
    for (const m of monthlyMetrics) {
      // By site
      if (!bySite[m.siteKey]) {
        bySite[m.siteKey] = {
          siteName: m.siteName,
          months: []
        };
      }
      bySite[m.siteKey].months.push({
        year: m.year,
        month: m.month,
        monthLabel: m.monthLabel,
        sessions: m.sessions,
        users: m.users,
        pageviews: m.pageviews,
        conversions: m.conversions,
        bounceRate: m.bounceRate,
        avgDuration: m.avgDuration
      });
      
      // By month
      if (!byMonth[m.monthLabel]) {
        byMonth[m.monthLabel] = {};
      }
      byMonth[m.monthLabel][m.siteKey] = {
        sessions: m.sessions,
        users: m.users,
        pageviews: m.pageviews,
        conversions: m.conversions
      };
    }

    res.json({
      snapshotId: id,
      totalRecords: monthlyMetrics.length,
      bySite,
      byMonth
    });
  } catch (error) {
    console.error('Error fetching monthly metrics:', error);
    res.status(500).json({ error: error.message });
  }
});

// Lấy lịch sử của một site
app.get('/api/history/:siteKey', async (req, res) => {
  try {
    const { siteKey } = req.params;
    
    const history = await prisma.siteData.findMany({
      where: { siteKey },
      include: {
        snapshot: true
      },
      orderBy: {
        snapshot: {
          timestamp: 'desc'
        }
      }
    });

    const formattedHistory = history.map(item => ({
      date: item.snapshot.timestamp.toISOString(),
      dateRange: {
        startDate: item.snapshot.startDate,
        endDate: item.snapshot.endDate
      },
      sessions: item.sessions,
      users: item.users,
      pageviews: item.pageviews,
      conversions: item.conversions,
      bounceRate: item.bounceRate,
      avgDuration: item.avgDuration,
      error: item.error
    }));

    res.json({
      siteKey,
      siteName: CONFIG.siteNames[siteKey],
      total: history.length,
      history: formattedHistory
    });
  } catch (error) {
    console.error('Error fetching history:', error);
    res.status(500).json({ error: error.message });
  }
});

// Lấy daily metrics trend
app.get('/api/trend/:siteKey', async (req, res) => {
  try {
    const { siteKey } = req.params;
    const { days = 30 } = req.query;
    
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - parseInt(days));
    
    const metrics = await prisma.dailyMetric.findMany({
      where: {
        siteKey,
        createdAt: {
          gte: startDate
        }
      },
      orderBy: {
        date: 'asc'
      }
    });

    res.json({
      siteKey,
      siteName: CONFIG.siteNames[siteKey],
      days: parseInt(days),
      total: metrics.length,
      trend: metrics.map(m => ({
        date: m.date,
        sessions: m.sessions,
        users: m.users,
        pageviews: m.pageviews,
        conversions: m.conversions,
        bounceRate: m.bounceRate,
        avgDuration: m.avgDuration
      }))
    });
  } catch (error) {
    console.error('Error fetching trend:', error);
    res.status(500).json({ error: error.message });
  }
});

// Lấy tổng hợp phân tích
app.get('/api/analytics/summary', async (req, res) => {
  try {
    const summary = {};
    
    for (const siteKey of Object.keys(CONFIG.properties)) {
      const history = await prisma.siteData.findMany({
        where: { 
          siteKey,
          error: null
        },
        include: {
          snapshot: true
        },
        orderBy: {
          snapshot: {
            timestamp: 'desc'
          }
        },
        take: 2
      });

      if (history.length > 0) {
        const latest = history[0];
        const previous = history.length > 1 ? history[1] : null;
        
        const totalSnapshots = await prisma.siteData.count({
          where: { siteKey }
        });

        summary[siteKey] = {
          current: {
            sessions: latest.sessions,
            users: latest.users,
            pageviews: latest.pageviews,
            conversions: latest.conversions,
            bounceRate: latest.bounceRate,
            avgDuration: latest.avgDuration,
            date: latest.snapshot.timestamp.toISOString()
          },
          previous: previous ? {
            sessions: previous.sessions,
            users: previous.users,
            pageviews: previous.pageviews,
            conversions: previous.conversions,
            bounceRate: previous.bounceRate,
            avgDuration: previous.avgDuration,
            date: previous.snapshot.timestamp.toISOString()
          } : null,
          totalSnapshots,
          growth: previous ? {
            sessions: previous.sessions > 0 
              ? ((latest.sessions - previous.sessions) / previous.sessions * 100).toFixed(2) 
              : '0',
            users: previous.users > 0 
              ? ((latest.users - previous.users) / previous.users * 100).toFixed(2) 
              : '0',
            pageviews: previous.pageviews > 0 
              ? ((latest.pageviews - previous.pageviews) / previous.pageviews * 100).toFixed(2) 
              : '0'
          } : null
        };
      }
    }

    const lastSnapshot = await prisma.snapshot.findFirst({
      orderBy: {
        timestamp: 'desc'
      }
    });

    res.json({
      totalSites: Object.keys(summary).length,
      summary,
      lastUpdate: lastSnapshot?.timestamp.toISOString() || null
    });
  } catch (error) {
    console.error('Error fetching summary:', error);
    res.status(500).json({ error: error.message });
  }
});

// Xóa snapshot
app.delete('/api/snapshot/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    await prisma.snapshot.delete({
      where: { id }
    });
    
    res.json({ success: true, message: 'Đã xóa snapshot!' });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Snapshot not found' });
    }
    console.error('Error deleting snapshot:', error);
    res.status(500).json({ error: error.message });
  }
});

// Xóa tất cả dữ liệu
app.delete('/api/data/clear', async (req, res) => {
  try {
    await prisma.trafficSource.deleteMany();
    await prisma.dailyMetric.deleteMany();
    await prisma.siteData.deleteMany();
    await prisma.snapshot.deleteMany();
    
    res.json({ success: true, message: 'Đã xóa tất cả dữ liệu!' });
  } catch (error) {
    console.error('Error clearing data:', error);
    res.status(500).json({ error: error.message });
  }
});

// Database statistics
app.get('/api/db/stats', async (req, res) => {
  try {
    const [snapshots, siteData, dailyMetrics, trafficSources] = await Promise.all([
      prisma.snapshot.count(),
      prisma.siteData.count(),
      prisma.dailyMetric.count(),
      prisma.trafficSource.count()
    ]);

    const oldestSnapshot = await prisma.snapshot.findFirst({
      orderBy: { timestamp: 'asc' }
    });
    
    const newestSnapshot = await prisma.snapshot.findFirst({
      orderBy: { timestamp: 'desc' }
    });

    res.json({
      counts: {
        snapshots,
        siteData,
        dailyMetrics,
        trafficSources
      },
      dateRange: {
        oldest: oldestSnapshot?.timestamp.toISOString() || null,
        newest: newestSnapshot?.timestamp.toISOString() || null
      }
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: error.message });
  }
});

// ===============================================
// START SERVER
// ===============================================
async function startServer() {
  try {
    // Test database connection
    await prisma.$connect();
    console.log('✅ Database connected successfully (SQLite + Prisma)');
    
    // Initialize GA
    await initializeGA();
    
    app.listen(CONFIG.port, () => {
      console.log(`
🚀 GA Backend Server started with Bun + Prisma + SQLite!
   
📊 API Endpoints:
   GET /api/health                    - Health check
   GET /api/properties                - List configured properties
   GET /api/analytics/:site/monthly   - Monthly data
   GET /api/analytics/:site/realtime  - Real-time data
   GET /api/analytics/:site/sources   - Traffic sources
   GET /api/analytics/:site/pages     - Top pages
   GET /api/analytics/:site/devices   - Device breakdown
   GET /api/analytics/all             - All sites overview
   GET /api/analytics/summary         - Analysis summary
   
📦 Database Endpoints (Prisma + SQLite):
   POST /api/snapshot                 - Save current data snapshot
   GET /api/snapshots                 - Get all snapshots
   GET /api/history/:siteKey          - Get site history
   GET /api/trend/:siteKey            - Get daily trend
   DELETE /api/snapshot/:id           - Delete a snapshot
   DELETE /api/data/clear             - Clear all data
   GET /api/db/stats                  - Database statistics

🔗 Server running at http://localhost:${CONFIG.port}
      `);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

// Graceful shutdown
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});

startServer();
