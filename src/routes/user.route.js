//  require dependencies
const express = require("express");
const roles = require("../roles");
const router = express.Router();
const authenticate = require("../middleware/auth.middleware");
const {
  getAllUsers,
  countUsers,
  getSingleUser,
} = require("../controllers/user.controller");
//  creating a route

router.get("/users", authenticate, getAllUsers);
router.get("/countusers", authenticate, countUsers);
router.get("/singleuser", authenticate, getSingleUser);

//    exporting modules
module.exports = router;
