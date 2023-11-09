const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const productScheme = new Schema({
    name: String,
    count: Number,
    price: Number,
});

module.exports = mongoose.model("Product", productScheme);
