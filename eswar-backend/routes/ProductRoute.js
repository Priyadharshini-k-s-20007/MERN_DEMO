const express = require("express");
const { getProduct, addProduct, deleteProduct } = require("../controller/productController");
const router = express.Router();

// Get all products
router.get("/sleepingproduct", getProduct);

// Add product
router.post("/addProduct", addProduct);

// Delete product
router.delete("/deleteProduct/:id", deleteProduct);

module.exports = router;
