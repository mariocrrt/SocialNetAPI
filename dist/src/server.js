"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_route_1 = require("./user/user.route");
var express = require("express");
var mongoose = require("mongoose");
var dotenv = require("dotenv");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
var port = 3000;
dotenv.config();
var userRoute = new user_route_1.UserRoute();
app.use("/user", userRoute.routes());
app.use(cors({
    origin: "*",
}));
app.use(bodyParser.json());
app.use("/", function (req, res) {
    res.send("Server status: 2090 🟢");
});
app.listen(port, function () {
    console.log("App listening on Port " + port);
});
// mongoose.connect(
//     //CHANGE DB!!!
//     process.env.DB_CONNECT,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//     },
//     () => {
//         console.log("Connection to Database Successful!");
//     }
// );
