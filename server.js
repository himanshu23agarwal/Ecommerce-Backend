const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();

// connect DB
connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(cors());
// routes
const productRoutes = require("./routes/productRoutes"); // ✅ FIXED
const userRoutes = require("./routes/userRoutes");       // ✅ FIXED
const orderRoutes = require("./routes/orderRoutes");

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

// test route
app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});