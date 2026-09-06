# 🌐 Benbot Landing Page (Static HTML Project)

Trang landing page tĩnh độc lập cho **Benbot Enterprise AI Platform**.

---

## 📁 Cấu Trúc Thư Mục

```
benbot-landing/
├── index.html       # Trang landing page chính (Semantic HTML5)
├── styles.css       # File CSS Dark Theme đồng bộ với User Dashboard
├── script.js        # Script sao chép email 1-click & thông báo toast
├── logo.svg         # Logo vector SVG sắc nét hiện đại
├── assets/          # Thư mục hình ảnh & logo
└── README.md        # Hướng dẫn sử dụng & deploy
```

---

## 🚀 Cách Chạy Thử (Local Preview)

Bạn có thể mở trực tiếp file `index.html` trên bất kỳ trình duyệt nào, hoặc dùng các lệnh web server đơn giản sau:

### Dùng Node.js / npx serve:
```bash
npx serve /Users/macmini/projects/benbot-landing
```

### Dùng Python:
```bash
cd /Users/macmini/projects/benbot-landing
python3 -m http.server 8080
```
Sau đó mở trình duyệt tại: `http://localhost:8080`

---

## ☁️ Hướng Dẫn Deploy Lên Cloud / Hosting

1. **Cloudflare Pages / Vercel / Netlify**:
   - Chọn thư mục `benbot-landing` làm root directory, hệ thống sẽ tự động deploy static HTML ngay lập tức với SSL miễn phí.
2. **Nginx / VPS**:
   - Copy toàn bộ nội dung thư mục `benbot-landing` vào `/var/www/html/` hoặc thư mục web của domain.
3. **Cloudflare Tunnel**:
   - Có thể trỏ domain chính (ví dụ `benbot.co` hoặc `www.benbot.co`) về thư mục này.
