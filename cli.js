#!/usr/bin/env bun
// CLI Menu cho GA Analytics Dashboard
// Sử dụng: bun run dev

import { spawn } from 'child_process';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const MENU = `
╔══════════════════════════════════════════════════════════════╗
║       🚀 GA Analytics Dashboard - TazaGroup                  ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  [1] 🟢 Start Server          - Khởi chạy backend server     ║
║  [2] 🔄 Restart Server        - Kill port + Start lại       ║
║  [3] 🛑 Kill Port 3001        - Dừng server đang chạy       ║
║  [4] 🔍 Check Health          - Kiểm tra trạng thái server  ║
║                                                              ║
║  [5] 📊 Prisma Studio         - Mở GUI quản lý database     ║
║  [6] 🗄️  DB Migrate           - Chạy database migration     ║
║  [7] 🔄 DB Generate           - Generate Prisma Client      ║
║  [8] 🗑️  DB Reset             - Reset database (XÓA DATA!)  ║
║                                                              ║
║  [9] 📈 Fetch All Data        - Lấy dữ liệu từ GA4          ║
║  [10] 💾 Save Snapshot        - Lưu snapshot (1 năm=12 tháng)║
║  [11] 📜 View Snapshots       - Xem danh sách snapshots     ║
║  [12] 📅 View Monthly Data    - Xem dữ liệu theo tháng      ║
║  [13] 📉 DB Stats             - Thống kê database           ║
║                                                              ║
║  [14] 📤 Git Push             - Commit và push code         ║
║  [15] 📋 Git Status           - Xem trạng thái git          ║
║                                                              ║
║  [0] ❌ Exit                  - Thoát chương trình          ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
`;

const API_BASE = 'http://localhost:3001';

function clearScreen() {
  console.clear();
}

function showMenu() {
  console.log(MENU);
}

function runCommand(command, args = [], options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { 
      stdio: 'inherit',
      shell: true,
      ...options 
    });
    
    child.on('close', (code) => {
      resolve(code);
    });
    
    child.on('error', (err) => {
      reject(err);
    });
  });
}

async function fetchAPI(endpoint) {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`);
    const data = await response.json();
    console.log('\n📦 Kết quả:');
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.log('\n❌ Lỗi:', error.message);
    console.log('💡 Hãy chắc chắn server đang chạy (Option 1)');
  }
}

async function postAPI(endpoint, body = {}) {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    console.log('\n📦 Kết quả:');
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.log('\n❌ Lỗi:', error.message);
    console.log('💡 Hãy chắc chắn server đang chạy (Option 1)');
  }
}

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function handleChoice(choice) {
  console.log('');
  
  switch (choice) {
    case '1':
      console.log('🟢 Đang khởi chạy server...');
      console.log('💡 Nhấn Ctrl+C để dừng server\n');
      await runCommand('bun', ['run', 'ga-backend-prisma.js']);
      break;
      
    case '2':
      console.log('🔄 Đang restart server...');
      await runCommand('lsof -ti:3001 | xargs kill -9 2>/dev/null || true');
      console.log('✅ Đã kill port 3001');
      console.log('🟢 Đang khởi chạy server...\n');
      await runCommand('bun', ['run', 'ga-backend-prisma.js']);
      break;
      
    case '3':
      console.log('🛑 Đang kill port 3001...');
      await runCommand('lsof -ti:3001 | xargs kill -9 2>/dev/null || echo "Port 3001 đã free"');
      console.log('✅ Done!');
      break;
      
    case '4':
      console.log('🔍 Đang kiểm tra health...');
      await fetchAPI('/api/health');
      break;
      
    case '5':
      console.log('📊 Đang mở Prisma Studio...');
      console.log('💡 Mở http://localhost:5555 trong trình duyệt\n');
      await runCommand('bunx', ['prisma', 'studio']);
      break;
      
    case '6':
      console.log('🗄️ Đang chạy migration...\n');
      await runCommand('bunx', ['prisma', 'migrate', 'dev']);
      break;
      
    case '7':
      console.log('🔄 Đang generate Prisma Client...\n');
      await runCommand('bunx', ['prisma', 'generate']);
      break;
      
    case '8':
      const confirm = await question('⚠️ Bạn có chắc muốn RESET database? Tất cả data sẽ bị xóa! (y/N): ');
      if (confirm.toLowerCase() === 'y') {
        console.log('🗑️ Đang reset database...\n');
        await runCommand('bunx', ['prisma', 'migrate', 'reset', '--force']);
      } else {
        console.log('❌ Đã hủy.');
      }
      break;
      
    case '9':
      const dateRange = await question('📅 Chọn khoảng thời gian (7daysAgo/30daysAgo/90daysAgo/365daysAgo) [30daysAgo]: ');
      const startDate = dateRange || '30daysAgo';
      console.log(`📈 Đang lấy dữ liệu ${startDate} đến today...`);
      await fetchAPI(`/api/analytics/all?startDate=${startDate}&endDate=today`);
      break;
      
    case '10':
      console.log('\n📅 Chọn khoảng thời gian:');
      console.log('   1. 7 ngày gần nhất (7daysAgo)');
      console.log('   2. 30 ngày gần nhất (30daysAgo)');
      console.log('   3. 90 ngày gần nhất (90daysAgo)');
      console.log('   4. 1 năm gần nhất (365daysAgo) ⭐ Lưu theo từng tháng');
      const rangeChoice = await question('\n👉 Chọn (1-4) [2]: ');
      
      let start;
      switch(rangeChoice) {
        case '1': start = '7daysAgo'; break;
        case '3': start = '90daysAgo'; break;
        case '4': start = '365daysAgo'; break;
        default: start = '30daysAgo';
      }
      
      if (start === '365daysAgo') {
        console.log('\n⭐ Chế độ 1 năm: Sẽ lưu dữ liệu tổng hợp VÀ chi tiết theo từng tháng');
      }
      
      const desc = await question('📝 Mô tả snapshot (Enter để bỏ qua): ');
      console.log(`\n💾 Đang lưu snapshot (${start})...`);
      if (start === '365daysAgo') {
        console.log('⏳ Đang lấy dữ liệu 12 tháng, vui lòng đợi...');
      }
      await postAPI('/api/snapshot', {
        startDate: start,
        endDate: 'today',
        description: desc || `Snapshot ${new Date().toLocaleDateString('vi-VN')}`
      });
      break;
      
    case '11':
      console.log('📜 Đang lấy danh sách snapshots...');
      await fetchAPI('/api/snapshots');
      break;
      
    case '12':
      // View Monthly Data - Xem dữ liệu theo tháng của snapshot
      console.log('📅 Xem dữ liệu theo tháng\n');
      try {
        const snapshotsResp = await fetch(`${API_BASE}/api/snapshots`);
        const snapshots = await snapshotsResp.json();
        
        if (!snapshots.length) {
          console.log('❌ Chưa có snapshot nào. Hãy tạo snapshot 1 năm trước!');
          break;
        }
        
        console.log('📜 Danh sách snapshots có dữ liệu monthly:\n');
        const yearSnapshots = snapshots.filter(s => 
          s.hasMonthlyData || 
          s.dateRange?.startDate === '365daysAgo' ||
          s.dateRange === '1year' || 
          s.dateRange === '1 năm'
        );
        
        if (!yearSnapshots.length) {
          console.log('❌ Chưa có snapshot 1 năm nào. Dữ liệu monthly chỉ được lưu khi chọn khoảng thời gian 1 năm.');
          break;
        }
        
        yearSnapshots.forEach((s, i) => {
          const date = new Date(s.createdAt).toLocaleString('vi-VN');
          const range = typeof s.dateRange === 'object' ? `${s.dateRange.startDate} → ${s.dateRange.endDate}` : s.dateRange;
          console.log(`  [${i + 1}] ID: ${s.id} | ${range} | ${date}`);
        });
        
        const snapshotChoice = await question('\n👉 Chọn snapshot (số thứ tự): ');
        const idx = parseInt(snapshotChoice) - 1;
        
        if (idx < 0 || idx >= yearSnapshots.length) {
          console.log('❌ Lựa chọn không hợp lệ!');
          break;
        }
        
        const selectedId = yearSnapshots[idx].id;
        console.log(`\n📊 Đang lấy dữ liệu monthly cho snapshot ${selectedId}...`);
        
        const monthlyResp = await fetch(`${API_BASE}/api/snapshot/${selectedId}/monthly`);
        const monthlyData = await monthlyResp.json();
        
        if (monthlyData.error || !monthlyData.bySite) {
          console.log('❌ Snapshot này chưa có dữ liệu monthly!');
          if (monthlyData.message) console.log(`   ${monthlyData.message}`);
          break;
        }
        
        // Hiển thị dữ liệu theo từng site
        console.log(`\n📊 Tổng số records: ${monthlyData.totalRecords}\n`);
        
        for (const [siteKey, siteData] of Object.entries(monthlyData.bySite)) {
          console.log(`\n🌐 ${siteData.siteName || siteKey}`);
          console.log('┌─────────────┬─────────────┬─────────────┬─────────────┬─────────────┐');
          console.log('│ Tháng       │ Sessions    │ Users       │ Page Views  │ Conversions │');
          console.log('├─────────────┼─────────────┼─────────────┼─────────────┼─────────────┤');
          
          siteData.months.forEach(m => {
            console.log(`│ ${m.monthLabel.padEnd(11)} │ ${String(m.sessions || 0).padStart(11)} │ ${String(m.users || 0).padStart(11)} │ ${String(m.pageviews || 0).padStart(11)} │ ${String(m.conversions || 0).padStart(11)} │`);
          });
          
          console.log('└─────────────┴─────────────┴─────────────┴─────────────┴─────────────┘');
        }
      } catch (err) {
        console.error('❌ Lỗi:', err.message);
      }
      break;
      
    case '13':
      console.log('📉 Đang lấy thống kê database...');
      await fetchAPI('/api/db/stats');
      break;
      
    case '14':
      console.log('📤 Git Push\n');
      await runCommand('git', ['status', '--short']);
      const commitMsg = await question('\n📝 Nhập commit message [update]: ');
      const message = commitMsg.trim() || 'update';
      console.log('\n🔄 Đang commit và push...');
      await runCommand('git', ['add', '.']);
      await runCommand('git', ['commit', '-m', `"${message}"`]);
      await runCommand('git', ['push']);
      console.log('\n✅ Done!');
      break;
      
    case '15':
      console.log('📋 Git Status\n');
      await runCommand('git', ['status']);
      break;
      
    case '0':
      console.log('👋 Tạm biệt!');
      rl.close();
      process.exit(0);
      
    default:
      console.log('❌ Lựa chọn không hợp lệ!');
  }
}

async function main() {
  clearScreen();
  console.log('\n🎉 Chào mừng đến với GA Analytics Dashboard CLI!\n');
  
  while (true) {
    showMenu();
    const choice = await question('\n👉 Nhập lựa chọn của bạn: ');
    await handleChoice(choice.trim());
    
    if (choice !== '0' && choice !== '1' && choice !== '2' && choice !== '5') {
      await question('\n⏎ Nhấn Enter để tiếp tục...');
      clearScreen();
    }
  }
}

main().catch(console.error);
