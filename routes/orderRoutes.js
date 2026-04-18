const express = require("express");
const router = express.Router();

const {
    createOrder,
    getMyOrders,
    getOrders,
    getOrderById,
} = require("../controllers/orderController");

const protect = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

// USER
router.post("/", protect, createOrder);
router.get("/myorders", protect, getMyOrders);

// ✅ GET ORDER BY ID
router.get("/:id", protect, getOrderById);

// ADMIN
router.get("/", protect, admin, getOrders);

module.exports = router;