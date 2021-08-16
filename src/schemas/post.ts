import * as mongoose from "mongoose";
import { Post } from "src/models/posts";

export const PostSchema = new mongoose.Schema<Post, mongoose.Model<Post>, Post>(
    {
        title: {
            type: String,
            required: true,
        },
        description: String,
        likes: {
            type: Number,
            default: 0,
        },
        comments: {
            type: Array,
            default: [],
        },
    }
);
