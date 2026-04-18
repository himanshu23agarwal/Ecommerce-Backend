const Product = require("../models/productModel");

// GET all products
const getProducts = async (req, res) => {
    const products = await Product.find({});
    res.json(products);
};

// CREATE product
const createProduct = async (req, res) => {
    const { name, price, description, countInStock } = req.body;

    const product = new Product({
        name,
        price,
        description,
        countInStock,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
};

// GET product by ID
const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
};

// UPDATE product
const updateProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        product.name = req.body.name || product.name;
        product.price = req.body.price || product.price;
        product.description = req.body.description || product.description;
        product.countInStock =
            req.body.countInStock || product.countInStock;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
};
// DELETE product
const deleteProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        await product.deleteOne();
        res.json({ message: "Product removed" });
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
};

module.exports = {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
};