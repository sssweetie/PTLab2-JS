const express = require("express");
const app = express();
const purchaseRouter = require("./routes/purchaseRouter.js");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", purchaseRouter)

app.use(function (req, res) {
    res.status(404).send("Not Found")
});

app.listen(3000, () => console.log("Сервер запущен и ожидает подключения..."));