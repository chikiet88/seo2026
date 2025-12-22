#!/bin/bash

# Script deploy website lên GitHub Pages
# Sử dụng: ./deploy.sh "mô tả thay đổi"

# Màu sắc cho output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Lấy message từ tham số hoặc dùng mặc định
MESSAGE=${1:-"Cập nhật website $(date '+%d/%m/%Y %H:%M')"}

echo -e "${YELLOW}🚀 Bắt đầu deploy...${NC}"

# Thêm tất cả file đã thay đổi
git add .

# Commit với message
git commit -m "$MESSAGE"

# Lấy branch hiện tại
CURRENT_BRANCH=$(git branch --show-current)

if [ "$CURRENT_BRANCH" != "main" ]; then
    echo -e "${YELLOW}📦 Đang ở branch $CURRENT_BRANCH, chuyển sang main và merge...${NC}"
    git checkout main
    git merge "$CURRENT_BRANCH"
fi

# Push lên GitHub
git push origin main

# Quay lại branch ban đầu nếu cần
if [ "$CURRENT_BRANCH" != "main" ]; then
    git checkout "$CURRENT_BRANCH"
fi

echo -e "${GREEN}✅ Deploy thành công!${NC}"
echo -e "${GREEN}🌐 Website: https://chikiet88.github.io/seo2026/${NC}"
echo -e "${YELLOW}⏳ Đợi 1-2 phút để GitHub Pages cập nhật...${NC}"
