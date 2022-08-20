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

router.post("/addproduct", authenticate, addProduct);
router.get("/fetchAllproduct", authenticate, fetchAllProduct);
router.get("/fetchsingleproduct", authenticate, fetchSingleProduct);
router.get("/fetchProductByname", authenticate, fetchProductByname);
router.patch("/updateProduct", authenticate, updateProduct);
router.delete("/deleteProduct", authenticate, deleteProduct);

module.exports = router;
