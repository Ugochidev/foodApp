const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/auth.middleware");
const {
  createRequisition,
  fetchRequisition,
  fetchAllRequisition,
  updateRequisition,
  deleteRequisition,
} = require("../controllers/requisition.controller");

router.post("/requisition", authenticate, createRequisition);
router.get("/requisition", authenticate, fetchRequisition);
router.get("/requisitions", authenticate, fetchAllRequisition);
router.patch("/requisition", authenticate, updateRequisition);
router.delete("/requisition", authenticate, deleteRequisition);

module.exports = router;
