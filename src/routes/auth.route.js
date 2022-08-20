const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/auth.middleware");
const {
  createUser,
  verifyEmail,
  resendVerificationMail,
  login,
  resetPassword,
  forgetPasswordLink,
  changePassword,
} = require("../controllers/auth.controller");

router.post(
  "/user",
 createUser
);
router.post("/verifyemail", verifyEmail);
router.post("/resendverificationmail", resendVerificationMail);
router.post("/login", login);
router.post("/forgetpasswordlink/", forgetPasswordLink);
router.patch("/changeassword/", changePassword);
router.patch("/resetpassword", authenticate, resetPassword);

module.exports = router