const { sequelize } = require("../config/db");
const Product = require("./product");
const Order = require("./order");


Product.hasMany(Order, { foreignKey: "productId", as: "orders" });
Order.belongsTo(Product, { foreignKey: "productId", as: "product" });

module.exports = {
  sequelize,
  Product,
  Order,
};
