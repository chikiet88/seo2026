#!/bin/bash

# Script auto push code lên GitHub cho dự án SEO 2026
# Sử dụng: ./autopush.sh "Nội dung commit"

# Lấy tin nhắn commit từ đối số, mặc định là "update kpi"
COMMIT_MSG=${1:-"update kpi dashboard"}

echo "🚀 Bắt đầu quá trình cập nhật..."

# 1. Thêm tất cả thay đổi
echo "📂 Đang stage các file thay đổi..."
git add .

# 2. Commit
echo "📝 Đang commit với nội dung: '$COMMIT_MSG'..."
git commit -m "$COMMIT_MSG"

# 3. Push lên GitHub
echo "📤 Đang push lên GitHub..."
git push origin main

# Kiểm tra trạng thái
if [ $? -eq 0 ]; then
    echo "✅ Hoàn tất! Dữ liệu đã được cập nhật thành công."
else
    echo "❌ Có lỗi xảy ra trong quá trình push. Vui lòng kiểm tra lại!"
fi
