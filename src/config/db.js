const { Sequelize } = require("sequelize");
require("dotenv").config();

// Khởi tạo đối tượng sequelize để kết nối tới MySQL
const sequelize = new Sequelize(
  process.env.DB_NAME, // Tên database
  process.env.DB_USER, // Username
  process.env.DB_PASSWORD, // Password
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false, // Tắt console.log các câu SQL mặc định cho đỡ rối
  },
);

// Tạo hàm kiểm tra kết nối
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("🔗 Kết nối MySQL thành công qua Sequelize!");
  } catch (error) {
    console.error("❌ Lỗi kết nối MySQL:", error.message);
  }
};

// Export ra để file khác có thể gọi
module.exports = { sequelize, connectDB };
