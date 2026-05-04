const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// GET    /api/orders      → Lấy tất cả đơn hàng
router.get("/", orderController.getAllOrders);

// POST   /api/orders      → Tạo đơn hàng mới
router.post("/", orderController.createOrder);

// PUT    /api/orders/:id  → Cập nhật trạng thái đơn hàng
router.put("/:id", orderController.updateOrder);

router.get("/:id",orderController.getOrderById);
module.exports = router;
