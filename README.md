# Cuddly Store - Backend API

Backend cho dự án Website Bán Thú Bông Online, xây dựng bằng **Express.js** + **Sequelize** + **SQL Server**.

## Yêu cầu hệ thống

- [Node.js](https://nodejs.org/) phiên bản 18 trở lên
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) (bản Express hoặc Developer)
- [SQL Server Management Studio (SSMS)](https://learn.microsoft.com/en-us/sql/ssms/) để quản lý database

## Cài đặt và chạy dự án

### Bước 1: Clone dự án

```bash
git clone <link-repo>
cd project_tttn_be
```

### Bước 2: Cài đặt thư viện

```bash
npm install
```

### Bước 3: Tạo Database trong SQL Server

Mở SSMS, đăng nhập vào SQL Server và chạy lệnh sau:

```sql
CREATE DATABASE cuddly_store;
```

Sau đó import dữ liệu mẫu:

```sql
USE cuddly_store;

INSERT INTO products (name, price, stock, imageUrl) VALUES
(N'Gấu Bông Teddy Brown Khổng Lồ', 450000, 20, '/gau-brown.webp'),
(N'Thỏ Bông Pinky Tai Dài', 280000, 15, '/tho-bunny-tai-dai.webp'),
(N'Khủng Long Nhồi Bông Xanh', 320000, 18, '/gau-bongkhung-long-xanh-la.webp'),
(N'Cánh Cụt Bông Dễ Thương', 190000, 25, '/canh-cut.webp'),
(N'Heo Bông Siêu Mềm', 250000, 12, '/heo-bong-sieu-mem.webp');
```

> **Lưu ý:** Bảng `products` và `orders` sẽ được Sequelize tự động tạo khi chạy server lần đầu. Bạn chỉ cần chạy lệnh INSERT sau khi server đã khởi động thành công.

### Bước 4: Tạo file `.env`

Tạo file `.env` tại thư mục gốc của dự án với nội dung sau:

```env
DB_NAME=cuddly_store
DB_USER=sa
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=1433
```

> Thay `your_password` bằng mật khẩu tài khoản `sa` trên máy của bạn.

### Bước 5: Cấu hình SQL Server cho kết nối TCP/IP

1. Mở **SQL Server Configuration Manager**
2. Vào **SQL Server Network Configuration** → **Protocols for MSSQLSERVER**
3. Bật **TCP/IP** (Enable)
4. Click đúp TCP/IP → Tab **IP Addresses** → Mục **IPAll**:
   - TCP Dynamic Ports: để trống
   - TCP Port: `1433`
5. Vào **SQL Server Services** → Restart lại **SQL Server**

### Bước 6: Chạy server

```bash
node index.js
```

Nếu thấy thông báo sau là thành công:

```
Kết nối SQL server thành công
Các bảng đã được đồng bộ
Server đang chạy tại http://localhost:2602
```

## Danh sách API

### Sản phẩm (Products)

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/api/products` | Lấy tất cả sản phẩm |
| GET | `/api/products?search=tên` | Tìm kiếm sản phẩm theo tên |
| POST | `/api/products` | Thêm sản phẩm mới |
| PUT | `/api/products/:id` | Cập nhật sản phẩm |
| DELETE | `/api/products/:id` | Xóa sản phẩm |

### Đơn hàng (Orders)

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/api/orders` | Lấy tất cả đơn hàng |
| POST | `/api/orders` | Tạo đơn hàng mới |
| PUT | `/api/orders/:id` | Cập nhật trạng thái đơn hàng |

## Cấu trúc thư mục

```
project_tttn_be/
├── index.js                  # Server chính
├── .env                      # Biến môi trường (không push lên git)
├── package.json
└── src/
    ├── config/
    │   └── db.js             # Cấu hình kết nối SQL Server
    ├── models/
    │   ├── index.js          # Quản lý quan hệ giữa các bảng
    │   ├── product.js        # Model sản phẩm
    │   └── order.js          # Model đơn hàng
    ├── controllers/
    │   ├── productController.js  # Xử lý logic sản phẩm
    │   └── orderController.js    # Xử lý logic đơn hàng
    └── routes/
        ├── productRoutes.js      # Định tuyến API sản phẩm
        └── orderRoutes.js        # Định tuyến API đơn hàng
```
