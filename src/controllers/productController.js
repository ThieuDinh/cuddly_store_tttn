const { Product } = require("../models");
const { Op } = require("sequelize");

const getAllProducts = async (req, res) => {
  try {
    const { search } = req.query;
    const whereCondition = search ? { name: { [Op.like]: `%${search}%` } } : {};
    const products = await Product.findAll({ where: whereCondition });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error: error.message });
  }
};
const createProduct = async (req, res) => {
  try {
    const { name, price, stock, imageUrl } = req.body;
    const newProduct = await Product.create({ name, price, stock, imageUrl });
    res.status(201).json(newProduct);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Lỗi khi tạo sản phẩm", error: error.message });
  }
};
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }
    await product.update(req.body);
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: "Lỗi khi cập nhật", error: error.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }
    await product.destroy();
    res.json({ message: "Đã xóa sản phẩm" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa", error: error.message });
  }
};
module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
