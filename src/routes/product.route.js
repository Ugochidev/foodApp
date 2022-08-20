const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/auth.middleware");
const {
  addProduct,
  fetchAllProduct,
  fetchSingleProduct,
  fetchProductByname,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

router.post("/product", authenticate, addProduct);
router.get("/product", authenticate, fetchAllProduct);
router.get("/singleproduct", authenticate, fetchSingleProduct);
router.get("/ProductByname", authenticate, fetchProductByname);
router.patch("/Product", authenticate, updateProduct);
router.delete("/Product", authenticate, deleteProduct);

module.exports = router;
