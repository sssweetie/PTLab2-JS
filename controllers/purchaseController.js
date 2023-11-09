
const data = require("../models/product.js")

exports.getProducts = function (req, res) {
    res.render("index.hbs", {
        products: data.products.getAllProducts()
    })
}

exports.sellProducts = function (req, res) {
    const products = req.body
    const prices = []
    for (let product in products) {
        const totalPrice = data.getTotalPrice(product, products[product])
        prices.push(totalPrice)
    }
    res.send(prices);
}

// const User = require("../models/user.js");

// exports.addUser = function (request, response) {
//     response.render("create.hbs");
// };
// exports.getUsers = function (request, response) {
//     response.render("users.hbs", {
//         users: User.getAll()
//     });
// };
// exports.postUser = function (request, response) {
//     const username = request.body.name;
//     const userage = request.body.age;
//     const user = new User(username, userage);
//     user.save();
//     response.redirect("/users");
// };