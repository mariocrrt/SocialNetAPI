import * as mongoose from "mongoose";
import { User } from "../models/user";
import { Role } from "../models/role";
import { PostSchema } from "./post";

const UserSchema = new mongoose.Schema<User, mongoose.Model<User>, User>({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: Role,
        default: Role.User,
    },
    followers: {
        type: [],
        default: [],
    },
    following: {
        type: [],
        default: [],
    },
    posts: {
        type: [PostSchema],
        default: [],
    },
});

export let UserModel = mongoose.model("User", UserSchema);
