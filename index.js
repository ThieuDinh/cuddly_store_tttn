const express = require("express");
const cors = require("cors");
const productRoutes = require("./src/routes/productRoutes");
const orderRoutes = require("./src/routes/orderRoutes");

require("dotenv").config();

const { sequelize } = require("./src/models/index");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Kết nối SQL server thành công");
    await sequelize.sync();
    console.log("Các bảng đã được đồng bộ");

    const PORT = process.env.PORT || 2602;
    app.listen(PORT, () => {
      console.log(`Server đang chạy tại http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Không thể kết nối database hoặc chạy server:", error);
  }
};

startServer();
