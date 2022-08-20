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

router.post(
  "/createRequisition",
  authenticate,
 
  
  createRequisition
);
router.get(
  "/fetchrequisition",
  authenticate,
 
  
  fetchRequisition
);
router.get(
  "/fetchAllRequisition",
  authenticate,
  fetchAllRequisition
);
router.patch(
  "/updateRequisition",
  authenticate,
  updateRequisition
);
router.delete(
  "/deleteRequisition",
  authenticate,
  deleteRequisition
);

module.exports = router;
