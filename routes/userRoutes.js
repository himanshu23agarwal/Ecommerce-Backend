const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const {
    registerUser,
    loginUser,
    getUserProfile,
} = require("../controllers/userController");

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/profile", protect, getUserProfile);

module.exports = router;