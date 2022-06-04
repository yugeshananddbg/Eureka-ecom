const express = require("express");
const {
  processPayment,
  sendStripeApiKey,
} = require("../controller/paymentController");
const router = express.Router();
const { isAuthenticateUser, authorizeRoles } = require("../middleware/auth");
router.route("/payment/process").post(isAuthenticateUser, processPayment);
router.route("/stripeapikey").get(isAuthenticateUser, sendStripeApiKey);

module.exports = router;
