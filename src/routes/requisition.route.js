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
router.get("/fetchAllRequisition", authenticate, fetchAllRequisition);
router.patch("/updateRequisition", authenticate, updateRequisition);
router.delete("/deleteRequisition", authenticate, deleteRequisition);

module.exports = router;
