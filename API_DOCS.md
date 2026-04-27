# Tài liệu hướng dẫn kết nối API cho Frontend

Base URL: `http://localhost:2602`

## 1. Sản phẩm (Products)

### Lấy danh sách sản phẩm
- **Method:** `GET`
- **Endpoint:** `/api/products`
- **Tìm kiếm:** `/api/products?search=ten_gau`

### Thêm sản phẩm mới
- **Method:** `POST`
- **Endpoint:** `/api/products`
- **Body (JSON):**
```json
{
  "name": "Tên thú bông",
  "price": 200000,
  "stock": 10,
  "imageUrl": "/ten-anh.webp"
}
```

### Cập nhật sản phẩm
- **Method:** `PUT`
- **Endpoint:** `/api/products/:id`
- **Body (JSON):** (Gửi các trường cần sửa)
```json
{
  "price": 250000,
  "stock": 5
}
```

### Xóa sản phẩm
- **Method:** `DELETE`
- **Endpoint:** `/api/products/:id`

---

## 2. Đơn hàng (Orders)

### Đặt hàng (Dành cho User)
- **Method:** `POST`
- **Endpoint:** `/api/orders`
- **Body (JSON):**
```json
{
  "productId": 1,
  "quantity": 2,
  "customerName": "Nguyễn Văn A",
  "customerPhone": "0123456789",
  "customerAddress": "Số 1, đường ABC",
  "note": "Ghi chú nếu có"
}
```

### Lấy danh sách đơn hàng (Dành cho Admin)
- **Method:** `GET`
- **Endpoint:** `/api/orders`
- **Response:** Trả về danh sách đơn hàng kèm thông tin sản phẩm bên trong trường `product`.

### Cập nhật trạng thái đơn hàng
- **Method:** `PUT`
- **Endpoint:** `/api/orders/:id`
- **Body (JSON):**
```json
{
  "status": "shipped"
}
```
*(Các trạng thái: pending, processing, shipped, delivered, cancelled)*
