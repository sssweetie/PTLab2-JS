
const Product = require("../models/product.js")
const getTotalPrice = require("../utils/getTotalPrice.js")

exports.getProducts = async function (req, res) {
    try {
        const products = await Product.find({});
        res.status(200).render("index.hbs", {
            products
        });
    } catch (error) {
        res.sendStatus(500);
    }
}

exports.sellProducts = async function (req, res) {
    const products = req.body
    const prices = []
    for (let product in products) {
        const totalPrice = await getTotalPrice(product, products[product], Product)
        prices.push({ name: product, count: products[product], totalPrice })
    }
    res.render("products.hbs", {
        products: prices,
    })
}