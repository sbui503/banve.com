# banve.com

> Nền tảng đặt vé máy bay, khách sạn & vé tham quan trực tuyến (Song ngữ: Tiếng Việt / English).

## Tính năng chính (Features)

- **Đặt vé máy bay (Flights)**: Tìm kiếm chuyến bay khứ hồi hoặc một chiều giữa các thành phố lớn (Hà Nội, TP.HCM, Đà Nẵng, Phú Quốc, v.v.), lọc theo hãng bay và mức giá.
- **Đặt phòng khách sạn (Hotels)**: Tìm kiếm khách sạn theo điểm đến, hạng sao, giá phòng và tiện ích.
- **Vé tham quan & vui chơi (Attractions & Tickets)**: Đặt vé công viên chủ đề, tour và vé tham quan.
- **Ưu đãi & Khuyến mãi (Deals & Vouchers)**: Quản lý mã giảm giá, áp dụng trực tiếp khi thanh toán.
- **Bảng điều khiển quản trị (Admin Dashboard)**:
  - Xem tổng quan đơn hàng & doanh thu
  - Quản lý chuyến bay, phòng khách sạn, vé vui chơi
  - Bật / tắt các chương trình khuyến mãi
- **Hỗ trợ song ngữ (Dual Language)**: Chuyển đổi mượt mà giữa Tiếng Việt và English.
- **Giao diện hiện đại (Modern UI)**: Tương thích hoàn toàn trên Desktop, Tablet và Mobile, hỗ trợ Dark Mode tự động.

## Khởi chạy cục bộ (Local Development)

### Cách 1: Chạy trực tiếp (Không cần cài đặt)
Mở trực tiếp file `index.html` trong trình duyệt:
```bash
open index.html
```

### Cách 2: Sử dụng Vite Dev Server
```bash
npm install
npm run dev
```

Sau đó truy cập `http://localhost:5173`.

## Triển khai (Deployment)

Dự án là Single-Page App tĩnh (SPA) hoàn chỉnh, có thể triển khai tức thì lên **GitHub Pages**, **Vercel**, **Cloudflare Pages** hoặc bất kỳ web server nào.
