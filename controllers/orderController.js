const Order = require("../models/orderModel");

// CREATE ORDER
const createOrder = async (req, res) => {
    const { orderItems, shippingAddress, paymentMethod, totalPrice } = req.body;

    if (!orderItems || orderItems.length === 0) {
        res.status(400);
        throw new Error("No items in order");
    }

    const order = new Order({
        user: req.user._id,
        orderItems,
        shippingAddress,
        paymentMethod,
        totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
};

// GET MY ORDERS
const getMyOrders = async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
};

// ADMIN: GET ALL ORDERS
const getOrders = async (req, res) => {
    const orders = await Order.find({}).populate("user", "name email");
    res.json(orders);
};

// ✅ GET ORDER BY ID (NEW)
const getOrderById = async (req, res) => {
    const order = await Order.findById(req.params.id).populate("user", "name email");

    if (order) {
        res.json(order);
    } else {
        res.status(404);
        throw new Error("Order not found");
    }
};

module.exports = {
    createOrder,
    getMyOrders,
    getOrders,
    getOrderById, // ✅ added
};