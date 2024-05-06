const express = require("express");
const router = express.Router();
const orderController = require("../controller/adminOrderController.js");
const authenticate = require("../middleware/authenticate.js");
router.get("/", authenticate, orderController.getAllOrders);
router.put("/:orderId/confirmed", authenticate, orderController.confirmOrders);
router.put("/:orderId/ship", authenticate, orderController.shipOrders);
router.put("/:orderId/deliver", authenticate, orderController.deliveryOrders);
router.put("/:orderId/cancel", authenticate, orderController.cancelOrder);
router.delete("/:orderId/delete", authenticate, orderController.deleteOrder);
module.exports= router;