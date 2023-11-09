const express = require("express");
const purchaseController = require("../controllers/purchaseController.js");
const purchaseRouter = express.Router();

purchaseRouter.use("/purchase", purchaseController.sellProducts);
purchaseRouter.use("/", purchaseController.getProducts);

module.exports = purchaseRouter;