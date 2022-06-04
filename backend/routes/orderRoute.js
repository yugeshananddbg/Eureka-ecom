const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrder,
  getAllOrders,
  updateOrder,
  deletOrder,
} = require("../controller/orderController");
const { isAuthenticateUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/order/new").post(isAuthenticateUser, newOrder);
router.route("/order/:id").get(isAuthenticateUser, getSingleOrder);
router.route("/orders/me").get(isAuthenticateUser, myOrder);
router
  .route("/admin/orders")
  .get(isAuthenticateUser, authorizeRoles("admin"), getAllOrders);
router
  .route("/admin/order/:id")
  .put(isAuthenticateUser, authorizeRoles("admin"), updateOrder)
  .delete(isAuthenticateUser, authorizeRoles("admin"), deletOrder);
module.exports = router;
