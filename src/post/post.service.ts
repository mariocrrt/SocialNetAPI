import { Post } from "src/models/posts";
import { PostSchema } from "src/schemas/post";
import { UserModel } from "../schemas/user";

export class PostService {
    constructor() {}

    create = async (post: Post, token: string) => {
        const newPost = await UserModel.findOneAndUpdate(
            { _id: token },
            {
                $push: {
                    posts: post,
                },
            }
        );
        return newPost;
    };

    delete = async (id: any) => {
        console.log(id);
    };

    like = async (id: any) => {
        const likedPosts = await UserModel.findOneAndUpdate(
            { "posts._id": id },
            {
                $inc: {
                    "posts.$.likes": 1,
                },
            }
        );

        return likedPosts;
    };

    unlike = async (id: any) => {
        const unlikedPosts = await UserModel.findOneAndUpdate(
            { "posts._id": id },
            {
                $inc: {
                    "posts.$.likes": -1,
                },
            }
        );

        return unlikedPosts;
    };
}
