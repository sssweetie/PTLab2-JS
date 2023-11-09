
const Product = require("../models/product.js")
const getTotalPrice = require("../utils/getTotalPrice.js")

exports.getProducts = async function (req, res) {
    const products = await Product.find({})
    res.render("index.hbs", {
        products
    })
}

exports.sellProducts = async function (req, res) {
    const products = req.body
    const prices = []
    for (let product in products) {
        const totalPrice = await getTotalPrice(product, products[product], Product)
        if (totalPrice === 0) {
            break;
        }
        prices.push(totalPrice)
    }
    res.send(prices);
}