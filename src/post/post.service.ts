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

    comment = async (body: any) => {
        const newComment = await UserModel.findOneAndUpdate(
            { "posts._id": body._id },
            {
                $push: {
                    "posts.$.comments": body.comment,
                },
            }
        );

        return newComment;
    };

    deletecomment = async (post: any, token: string) => {
        const deletedComment = await UserModel.updateOne(
            { "posts._id": post._id },
            {
                $pull: {
                    posts: {
                        title: post.title,
                        description: post.description,
                    },
                },
            }
        );

        return deletedComment;
    };

    update = async (post: any, token: string) => {
        const updatedPost = await UserModel.updateOne(
            {
                $and: [{ _id: token }, { "posts._id": post._id }],
            },
            {
                $set: {
                    "posts.$.title": post.title,
                    "posts.$.description": post.description,
                },
            }
        );

        return updatedPost;
    };

    delete = async (post: any, token: string) => {
        const deletedPost = await UserModel.updateOne(
            {
                $and: [{ _id: token }, { "posts._id": post._id }],
            },
            {
                $pull: {
                    posts: {
                        _id: post._id,
                    },
                },
            }
        );

        return deletedPost;
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
