const express = require("express");
const mongoose = require("mongoose");
const app = express();
const purchaseRouter = require("./routes/purchaseRouter.js");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", purchaseRouter)

app.use(function (req, res) {
    res.status(404).send("Not Found")
});

async function main() {

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Products");
        app.listen(3000);
        console.log("Сервер ожидает подключения...");
    }
    catch (err) {
        return console.log(err);
    }
}
main();


process.on("SIGINT", async () => {

    await mongoose.disconnect();
    console.log("Приложение завершило работу");
    process.exit();
});