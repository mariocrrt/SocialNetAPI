import { UserRoute } from "./user/user.route";
import { PostRoute } from "./post/post.route";

const express = require("express");
const mongoose = require("mongoose");
import * as dotenv from "dotenv";
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
dotenv.config();
const port = 8000;

const userRoute: UserRoute = new UserRoute();
const postRoute: PostRoute = new PostRoute();

app.use("/user", userRoute.routes());
app.use("/post", postRoute.routes());

app.use(
    cors({
        origin: "*",
    })
);

app.use("/", (req: any, res: any) => {
    res.format({
        "text/plain": function () {
            res.send("Server Status: Online 🟢");
        },
    });
});

app.listen(port, () => {
    console.log(`App listening on Port ${port}`);
});

mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
    () => {
        console.log("Connection to Database Successful!");
    }
);
