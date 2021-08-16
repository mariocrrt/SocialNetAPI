"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_route_1 = require("./user/user.route");
var post_route_1 = require("./post/post.route");
var express = require("express");
var mongoose = require("mongoose");
var dotenv = __importStar(require("dotenv"));
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
dotenv.config();
var port = 8000;
var userRoute = new user_route_1.UserRoute();
var postRoute = new post_route_1.PostRoute();
app.use("/user", userRoute.routes());
app.use("/post", postRoute.routes());
app.use(cors({
    origin: "*",
}));
app.use("/", function (req, res) {
    res.format({
        "text/plain": function () {
            res.send("Server Status: Online 🟢");
        },
    });
});
app.listen(port, function () {
    console.log("App listening on Port " + port);
});
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}, function () {
    console.log("Connection to Database Successful!");
});
