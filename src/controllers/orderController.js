const { Order, Product } = require("../models");

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [{ model: Product, as: "product" }],
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error: error.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const {
      productId,
      quantity,
      customerName,
      customerPhone,
      customerAddress,
      note,
    } = req.body;
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }
    const totalAmount = product.price * quantity;
    const newOrder = await Order.create({
      productId,
      quantity,
      totalAmount,
      customerName,
      customerPhone,
      customerAddress,
      note,
    });

    res.status(201).json(newOrder);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Lỗi khi tạo đơn hàng", error: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ message: "Không tìm thấy đơn hàng" });
    }
    await order.update(req.body);
    res.json(order);
  } catch (error) {
    res.status(400).json({ message: "Lỗi khi cập nhật", error: error.message });
  }
};

module.exports = {
  getAllOrders,
  createOrder,
  updateOrder,
};
