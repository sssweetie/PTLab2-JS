
const Product = require("../models/product.js")

const getTotalPrice = async (name, count) => {
    const product = await Product.findOne({ name })
    const productCount = product.count
    await Product.updateOne({ name }, { count: productCount - count })

    return count * product.price
}

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
        const totalPrice = await getTotalPrice(product, products[product])
        prices.push(totalPrice)
    }
    res.send(prices);
}