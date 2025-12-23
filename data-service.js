// Data Service - Kết hợp dữ liệu tĩnh và dữ liệu từ Google Analytics API
// File này quản lý việc lấy và cache dữ liệu từ GA4

// Import GA API (nếu chạy trong browser, file google-analytics-api.js phải load trước)
// const { gaAPI, GA_CONFIG } = require('./google-analytics-api');

// Cache configuration
const CACHE_DURATION = 5 * 60 * 1000; // 5 phút
const dataCache = new Map();

// Data Service Class
class DataService {
  constructor() {
    this.useRealData = false; // Toggle để chuyển đổi giữa dữ liệu tĩnh và API
    this.isInitialized = false;
    this.lastError = null;
  }

  // Khởi tạo kết nối GA
  async initialize(credentials) {
    try {
      if (typeof gaAPI !== 'undefined') {
        await gaAPI.initialize(credentials);
        this.useRealData = true;
        this.isInitialized = true;
        console.log('✅ Google Analytics API đã kết nối thành công');
        return true;
      }
      return false;
    } catch (error) {
      console.error('❌ Lỗi kết nối Google Analytics:', error);
      this.lastError = error;
      this.useRealData = false;
      return false;
    }
  }

  // Lấy dữ liệu với cache
  async getCachedData(key, fetchFunction, forceRefresh = false) {
    const cached = dataCache.get(key);
    const now = Date.now();

    if (!forceRefresh && cached && (now - cached.timestamp < CACHE_DURATION)) {
      console.log(`📦 Sử dụng cache cho: ${key}`);
      return cached.data;
    }

    try {
      console.log(`🔄 Đang tải dữ liệu: ${key}`);
      const data = await fetchFunction();
      dataCache.set(key, { data, timestamp: now });
      return data;
    } catch (error) {
      console.error(`❌ Lỗi tải dữ liệu ${key}:`, error);
      // Trả về cache cũ nếu có lỗi
      if (cached) {
        console.log(`⚠️ Sử dụng cache cũ do lỗi: ${key}`);
        return cached.data;
      }
      throw error;
    }
  }

  // Lấy dữ liệu tổng quan cho 1 website
  async getSiteOverview(siteKey) {
    if (!this.useRealData || typeof gaAPI === 'undefined') {
      return this.getStaticSiteData(siteKey);
    }

    return this.getCachedData(`overview_${siteKey}`, async () => {
      const today = new Date();
      const startOfYear = `${today.getFullYear()}-01-01`;
      const endDate = today.toISOString().split('T')[0];

      const [monthlyData, trafficSources, topPages] = await Promise.all([
        gaAPI.getMonthlyTraffic(siteKey, today.getFullYear()),
        gaAPI.getTrafficSources(siteKey, startOfYear, endDate),
        gaAPI.getTopPages(siteKey, startOfYear, endDate, 10)
      ]);

      return {
        monthly: monthlyData,
        sources: trafficSources,
        topPages,
        lastUpdated: new Date().toISOString()
      };
    });
  }

  // Lấy dữ liệu real-time
  async getRealTimeData(siteKey) {
    if (!this.useRealData || typeof gaAPI === 'undefined') {
      return { activeUsers: Math.floor(Math.random() * 50) + 1 };
    }

    try {
      return await gaAPI.getRealTimeData(siteKey);
    } catch (error) {
      console.error('Error fetching realtime data:', error);
      return { activeUsers: 0, error: error.message };
    }
  }

  // Lấy dữ liệu tất cả các site
  async getAllSitesData() {
    if (!this.useRealData || typeof gaAPI === 'undefined') {
      return this.getAllStaticData();
    }

    return this.getCachedData('all_sites', async () => {
      const today = new Date();
      const startOfYear = `${today.getFullYear()}-01-01`;
      const endDate = today.toISOString().split('T')[0];

      return await gaAPI.getAllSitesData(startOfYear, endDate);
    });
  }

  // Lấy dữ liệu so sánh theo khoảng thời gian
  async getComparisonData(siteKey, period1Start, period1End, period2Start, period2End) {
    if (!this.useRealData || typeof gaAPI === 'undefined') {
      return this.getStaticComparisonData(siteKey);
    }

    return this.getCachedData(`comparison_${siteKey}_${period1Start}_${period2Start}`, async () => {
      const [period1Data, period2Data] = await Promise.all([
        gaAPI.fetchAnalyticsData(
          GA_CONFIG[siteKey].propertyId,
          period1Start,
          period1End,
          ['sessions', 'totalUsers', 'conversions']
        ),
        gaAPI.fetchAnalyticsData(
          GA_CONFIG[siteKey].propertyId,
          period2Start,
          period2End,
          ['sessions', 'totalUsers', 'conversions']
        )
      ]);

      return {
        period1: period1Data,
        period2: period2Data,
        comparison: this.calculateComparison(period1Data, period2Data)
      };
    });
  }

  // Tính toán so sánh % thay đổi
  calculateComparison(current, previous) {
    const getMetric = (data, name) => {
      if (!data.rows || data.rows.length === 0) return 0;
      const idx = data.metricHeaders?.findIndex(h => h.name === name) ?? 0;
      return parseInt(data.rows[0].metricValues[idx]?.value) || 0;
    };

    const metrics = ['sessions', 'totalUsers', 'conversions'];
    const result = {};

    metrics.forEach(metric => {
      const curr = getMetric(current, metric);
      const prev = getMetric(previous, metric);
      result[metric] = {
        current: curr,
        previous: prev,
        change: prev > 0 ? ((curr - prev) / prev * 100).toFixed(1) : 0,
        direction: curr >= prev ? 'up' : 'down'
      };
    });

    return result;
  }

  // === STATIC DATA FALLBACK ===
  
  // Trả về dữ liệu tĩnh từ DATA object
  getStaticSiteData(siteKey) {
    if (typeof DATA !== 'undefined' && DATA[siteKey]) {
      return {
        ...DATA[siteKey],
        isStatic: true,
        lastUpdated: 'Dữ liệu tĩnh - 22/12/2025'
      };
    }
    return null;
  }

  getAllStaticData() {
    if (typeof DATA !== 'undefined') {
      return {
        clinic: this.getStaticSiteData('clinic'),
        timona: this.getStaticSiteData('timona'),
        hderma: this.getStaticSiteData('hderma'),
        elasome: this.getStaticSiteData('elasome'),
        group: this.getStaticSiteData('group'),
        isStatic: true
      };
    }
    return {};
  }

  getStaticComparisonData(siteKey) {
    return {
      period1: {},
      period2: {},
      comparison: {
        sessions: { current: 0, previous: 0, change: 0, direction: 'up' },
        totalUsers: { current: 0, previous: 0, change: 0, direction: 'up' },
        conversions: { current: 0, previous: 0, change: 0, direction: 'up' }
      },
      isStatic: true
    };
  }

  // Xóa cache
  clearCache(key = null) {
    if (key) {
      dataCache.delete(key);
    } else {
      dataCache.clear();
    }
    console.log(key ? `🗑️ Đã xóa cache: ${key}` : '🗑️ Đã xóa toàn bộ cache');
  }

  // Lấy trạng thái
  getStatus() {
    return {
      initialized: this.isInitialized,
      useRealData: this.useRealData,
      cacheSize: dataCache.size,
      lastError: this.lastError
    };
  }
}

// Singleton instance
const dataService = new DataService();

// Utility functions cho việc format dữ liệu
const DataUtils = {
  // Format số có dấu phẩy
  formatNumber: (num) => {
    return new Intl.NumberFormat('vi-VN').format(num);
  },

  // Format phần trăm
  formatPercent: (num, decimals = 1) => {
    return `${parseFloat(num).toFixed(decimals)}%`;
  },

  // Format thời gian (giây -> mm:ss)
  formatDuration: (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  },

  // Format ngày tháng
  formatDate: (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('vi-VN');
  },

  // Tính % thay đổi
  calcPercentChange: (current, previous) => {
    if (previous === 0) return current > 0 ? 100 : 0;
    return ((current - previous) / previous * 100).toFixed(1);
  },

  // Lấy màu dựa trên giá trị thay đổi
  getChangeColor: (change) => {
    const num = parseFloat(change);
    if (num > 0) return 'text-green-600';
    if (num < 0) return 'text-red-600';
    return 'text-gray-500';
  },

  // Lấy icon dựa trên giá trị thay đổi
  getChangeIcon: (change) => {
    const num = parseFloat(change);
    if (num > 0) return '↑';
    if (num < 0) return '↓';
    return '→';
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DataService, dataService, DataUtils };
}
