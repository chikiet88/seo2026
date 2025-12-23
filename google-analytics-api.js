// Google Analytics API - Lấy dữ liệu thực từ 5 website
// Sử dụng Google Analytics Data API (GA4)

// Cấu hình Property ID cho 5 website
const GA_CONFIG = {
  clinic: {
    propertyId: 'GA4_PROPERTY_ID_CLINIC', // Thay bằng Property ID thực của TazaSkinClinic.com
    name: 'TazaSkinClinic.com',
    color: '#dc2626'
  },
  timona: {
    propertyId: 'GA4_PROPERTY_ID_TIMONA', // Thay bằng Property ID thực của Timona.edu.vn
    name: 'Timona.edu.vn',
    color: '#1e40af'
  },
  hderma: {
    propertyId: 'GA4_PROPERTY_ID_HDERMA', // Thay bằng Property ID thực của Hderma.vn
    name: 'Hderma.vn',
    color: '#059669'
  },
  elasome: {
    propertyId: 'GA4_PROPERTY_ID_ELASOME', // Thay bằng Property ID thực của Elasome.com
    name: 'Elasome.com',
    color: '#7c3aed'
  },
  group: {
    propertyId: 'GA4_PROPERTY_ID_GROUP', // Thay bằng Property ID thực của TazaGroup.vn
    name: 'TazaGroup.vn',
    color: '#64748b'
  }
};

// API Endpoint (sử dụng proxy server hoặc Google Cloud Functions)
const API_BASE_URL = 'YOUR_API_ENDPOINT'; // Ví dụ: 'https://your-domain.com/api/analytics'

// Class xử lý Google Analytics API
class GoogleAnalyticsAPI {
  constructor(config) {
    this.config = config;
    this.accessToken = null;
    this.tokenExpiry = null;
  }

  // Khởi tạo với API Key hoặc OAuth Token
  async initialize(credentials) {
    // Nếu sử dụng API Key từ backend
    if (credentials.apiKey) {
      this.apiKey = credentials.apiKey;
      return true;
    }
    
    // Nếu sử dụng OAuth 2.0
    if (credentials.clientId) {
      return await this.initializeOAuth(credentials);
    }
    
    return false;
  }

  // OAuth 2.0 initialization
  async initializeOAuth(credentials) {
    return new Promise((resolve, reject) => {
      // Load Google Identity Services
      if (typeof google !== 'undefined' && google.accounts) {
        const tokenClient = google.accounts.oauth2.initTokenClient({
          client_id: credentials.clientId,
          scope: 'https://www.googleapis.com/auth/analytics.readonly',
          callback: (response) => {
            if (response.error) {
              reject(response.error);
              return;
            }
            this.accessToken = response.access_token;
            this.tokenExpiry = Date.now() + (response.expires_in * 1000);
            resolve(true);
          }
        });
        tokenClient.requestAccessToken();
      } else {
        reject('Google Identity Services not loaded');
      }
    });
  }

  // Lấy dữ liệu từ GA4 Data API
  async fetchAnalyticsData(propertyId, startDate, endDate, metrics, dimensions = []) {
    const url = `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`;
    
    const requestBody = {
      dateRanges: [{ startDate, endDate }],
      metrics: metrics.map(m => ({ name: m })),
      dimensions: dimensions.map(d => ({ name: d }))
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error(`GA API Error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching analytics data:', error);
      throw error;
    }
  }

  // Lấy tổng lượt truy cập theo tháng
  async getMonthlyTraffic(siteKey, year = 2026) {
    const config = this.config[siteKey];
    if (!config) throw new Error(`Site ${siteKey} not found`);

    const results = [];
    
    for (let month = 1; month <= 12; month++) {
      const startDate = `${year}-${String(month).padStart(2, '0')}-01`;
      const lastDay = new Date(year, month, 0).getDate();
      const endDate = `${year}-${String(month).padStart(2, '0')}-${lastDay}`;

      try {
        const data = await this.fetchAnalyticsData(
          config.propertyId,
          startDate,
          endDate,
          ['sessions', 'totalUsers', 'screenPageViews', 'conversions']
        );

        results.push({
          month: `T${month}`,
          sessions: this.extractMetricValue(data, 'sessions'),
          users: this.extractMetricValue(data, 'totalUsers'),
          pageviews: this.extractMetricValue(data, 'screenPageViews'),
          conversions: this.extractMetricValue(data, 'conversions')
        });
      } catch (error) {
        console.error(`Error fetching data for ${siteKey} month ${month}:`, error);
        results.push({
          month: `T${month}`,
          sessions: 0,
          users: 0,
          pageviews: 0,
          conversions: 0
        });
      }
    }

    return results;
  }

  // Lấy dữ liệu real-time
  async getRealTimeData(siteKey) {
    const config = this.config[siteKey];
    if (!config) throw new Error(`Site ${siteKey} not found`);

    const url = `https://analyticsdata.googleapis.com/v1beta/properties/${config.propertyId}:runRealtimeReport`;

    const requestBody = {
      metrics: [
        { name: 'activeUsers' }
      ],
      dimensions: [
        { name: 'country' }
      ]
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      return await response.json();
    } catch (error) {
      console.error('Error fetching realtime data:', error);
      throw error;
    }
  }

  // Lấy conversion/goals
  async getConversions(siteKey, startDate, endDate) {
    const config = this.config[siteKey];
    if (!config) throw new Error(`Site ${siteKey} not found`);

    return await this.fetchAnalyticsData(
      config.propertyId,
      startDate,
      endDate,
      ['conversions', 'sessionConversionRate'],
      ['sessionDefaultChannelGroup']
    );
  }

  // Lấy top pages
  async getTopPages(siteKey, startDate, endDate, limit = 10) {
    const config = this.config[siteKey];
    if (!config) throw new Error(`Site ${siteKey} not found`);

    const data = await this.fetchAnalyticsData(
      config.propertyId,
      startDate,
      endDate,
      ['screenPageViews', 'averageSessionDuration'],
      ['pagePath']
    );

    // Sort và limit
    if (data.rows) {
      return data.rows
        .sort((a, b) => parseInt(b.metricValues[0].value) - parseInt(a.metricValues[0].value))
        .slice(0, limit);
    }

    return [];
  }

  // Lấy traffic sources
  async getTrafficSources(siteKey, startDate, endDate) {
    const config = this.config[siteKey];
    if (!config) throw new Error(`Site ${siteKey} not found`);

    return await this.fetchAnalyticsData(
      config.propertyId,
      startDate,
      endDate,
      ['sessions', 'totalUsers', 'bounceRate'],
      ['sessionDefaultChannelGroup']
    );
  }

  // Lấy device breakdown
  async getDeviceBreakdown(siteKey, startDate, endDate) {
    const config = this.config[siteKey];
    if (!config) throw new Error(`Site ${siteKey} not found`);

    return await this.fetchAnalyticsData(
      config.propertyId,
      startDate,
      endDate,
      ['sessions', 'totalUsers'],
      ['deviceCategory']
    );
  }

  // Helper: Trích xuất giá trị metric
  extractMetricValue(data, metricName) {
    if (!data.rows || data.rows.length === 0) return 0;
    
    const metricIndex = data.metricHeaders.findIndex(h => h.name === metricName);
    if (metricIndex === -1) return 0;

    return parseInt(data.rows[0].metricValues[metricIndex].value) || 0;
  }

  // Lấy tất cả dữ liệu cho dashboard
  async getAllSitesData(startDate, endDate) {
    const results = {};

    for (const siteKey of Object.keys(this.config)) {
      try {
        const [traffic, conversions, sources, devices] = await Promise.all([
          this.fetchAnalyticsData(
            this.config[siteKey].propertyId,
            startDate,
            endDate,
            ['sessions', 'totalUsers', 'screenPageViews', 'bounceRate', 'averageSessionDuration']
          ),
          this.getConversions(siteKey, startDate, endDate),
          this.getTrafficSources(siteKey, startDate, endDate),
          this.getDeviceBreakdown(siteKey, startDate, endDate)
        ]);

        results[siteKey] = {
          name: this.config[siteKey].name,
          color: this.config[siteKey].color,
          traffic,
          conversions,
          sources,
          devices
        };
      } catch (error) {
        console.error(`Error fetching data for ${siteKey}:`, error);
        results[siteKey] = {
          name: this.config[siteKey].name,
          color: this.config[siteKey].color,
          error: error.message
        };
      }
    }

    return results;
  }
}

// Instance để sử dụng
const gaAPI = new GoogleAnalyticsAPI(GA_CONFIG);

// Export cho sử dụng trong các file khác
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GoogleAnalyticsAPI, GA_CONFIG, gaAPI };
}
