const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Định nghĩa đường dẫn GET /api/products
router.get("/", productController.getAllProducts);
// Định nghĩa đường dẫn POST /api/products
router.post("/", productController.createProduct);
// Định nghĩa đường dẫn PUT /api/products/:id
router.put("/:id", productController.updateProduct);
// Định nghĩa đường dẫn DELETE /api/products/:id
router.delete("/:id", productController.deleteProduct);
module.exports = router;
    