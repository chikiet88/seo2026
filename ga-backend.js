// Backend API Proxy cho Google Analytics
// Chạy với Node.js để xử lý OAuth và lấy dữ liệu GA4 an toàn
// 
// Cài đặt: npm install express cors googleapis dotenv
// Chạy: node ga-backend.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// ===============================================
// DATABASE FILE (JSON-based storage)
// ===============================================
const DB_FILE = path.join(__dirname, 'ga-data.json');

function loadDatabase() {
  try {
    if (fs.existsSync(DB_FILE)) {
      return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    }
  } catch (error) {
    console.error('Error loading database:', error);
  }
  return { snapshots: [], history: {} };
}

function saveDatabase(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error saving database:', error);
    return false;
  }
}

let database = loadDatabase();

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
// API ENDPOINTS
// ===============================================

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    initialized: !!analyticsDataClient,
    timestamp: new Date().toISOString()
  });
});

// Lấy danh sách properties
app.get('/api/properties', (req, res) => {
  res.json({
    properties: Object.entries(CONFIG.properties).map(([key, id]) => ({
      key,
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
// START SERVER
// ===============================================
async function startServer() {
  await initializeGA();
  
  app.listen(CONFIG.port, () => {
    console.log(`
🚀 GA Backend Server started!
   
📊 API Endpoints:
   GET /api/health                    - Health check
   GET /api/properties                - List configured properties
   GET /api/analytics/:site/monthly   - Monthly data
   GET /api/analytics/:site/realtime  - Real-time data
   GET /api/analytics/:site/sources   - Traffic sources
   GET /api/analytics/:site/pages     - Top pages
   GET /api/analytics/:site/devices   - Device breakdown
   GET /api/analytics/all             - All sites overview
   
📦 Database Endpoints:
   POST /api/snapshot                 - Save current data snapshot
   GET /api/snapshots                 - Get all snapshots
   GET /api/history/:siteKey          - Get site history
   DELETE /api/snapshot/:id           - Delete a snapshot

🔗 Server running at http://localhost:${CONFIG.port}

⚠️  Remember to:
   1. Replace YOUR_* values in CONFIG
   2. Add Service Account email to GA4 properties
   3. Enable Analytics Data API in Cloud Console
    `);
  });
}

// ===============================================
// DATABASE ENDPOINTS
// ===============================================

// Lưu snapshot dữ liệu hiện tại
app.post('/api/snapshot', async (req, res) => {
  try {
    const { startDate, endDate, label } = req.body;
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

    const snapshot = {
      id: Date.now().toString(),
      label: label || `Snapshot ${new Date().toLocaleDateString('vi-VN')}`,
      dateRange: { startDate, endDate },
      data: results,
      createdAt: new Date().toISOString()
    };

    database.snapshots.push(snapshot);
    
    // Update history for each site
    for (const [siteKey, data] of Object.entries(results)) {
      if (!data.error) {
        if (!database.history[siteKey]) {
          database.history[siteKey] = [];
        }
        database.history[siteKey].push({
          date: snapshot.createdAt,
          dateRange: { startDate, endDate },
          ...data
        });
      }
    }

    saveDatabase(database);

    res.json({ 
      success: true, 
      snapshot,
      message: 'Đã lưu snapshot thành công!'
    });
  } catch (error) {
    console.error('Error saving snapshot:', error);
    res.status(500).json({ error: error.message });
  }
});

// Lấy tất cả snapshots
app.get('/api/snapshots', (req, res) => {
  res.json({
    total: database.snapshots.length,
    snapshots: database.snapshots.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  });
});

// Lấy lịch sử của một site
app.get('/api/history/:siteKey', (req, res) => {
  const { siteKey } = req.params;
  const history = database.history[siteKey] || [];
  
  res.json({
    siteKey,
    total: history.length,
    history: history.sort((a, b) => new Date(b.date) - new Date(a.date))
  });
});

// Lấy tổng hợp phân tích
app.get('/api/analytics/summary', (req, res) => {
  const summary = {};
  
  for (const [siteKey, history] of Object.entries(database.history)) {
    if (history.length > 0) {
      const latest = history[history.length - 1];
      const previous = history.length > 1 ? history[history.length - 2] : null;
      
      summary[siteKey] = {
        current: latest,
        previous: previous,
        totalSnapshots: history.length,
        growth: previous ? {
          sessions: ((latest.sessions - previous.sessions) / previous.sessions * 100).toFixed(2),
          users: ((latest.users - previous.users) / previous.users * 100).toFixed(2),
          pageviews: ((latest.pageviews - previous.pageviews) / previous.pageviews * 100).toFixed(2)
        } : null
      };
    }
  }
  
  res.json({
    totalSites: Object.keys(summary).length,
    summary,
    lastUpdate: database.snapshots.length > 0 
      ? database.snapshots[database.snapshots.length - 1].createdAt 
      : null
  });
});

// Xóa snapshot
app.delete('/api/snapshot/:id', (req, res) => {
  const { id } = req.params;
  const index = database.snapshots.findIndex(s => s.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Snapshot not found' });
  }
  
  database.snapshots.splice(index, 1);
  saveDatabase(database);
  
  res.json({ success: true, message: 'Đã xóa snapshot!' });
});

// Xóa tất cả dữ liệu
app.delete('/api/data/clear', (req, res) => {
  database = { snapshots: [], history: {} };
  saveDatabase(database);
  res.json({ success: true, message: 'Đã xóa tất cả dữ liệu!' });
});

startServer();
