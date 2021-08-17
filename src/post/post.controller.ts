import { PostService } from "./post.service";
import { Request, Response } from "express";
import { Post } from "src/models/posts";

export class PostController {
    private postService: PostService = new PostService();
    constructor() {}

    create = async (req: Request, res: Response) => {
        try {
            let createdPost = await this.postService.create(
                req.body,
                req.headers.authorization as string
            );
            return res.json(createdPost);
        } catch (err) {
            console.error(err);
        }
    };

    like = async (req: Request, res: Response) => {
        const postId = req.body._id;
        let action = "unlike";

        try {
            if (action === "like") {
                const likedPost = await this.postService.like(postId);

                return res.json(likedPost);
            } else if (action === "unlike") {
                const unlikedPost = await this.postService.unlike(postId);

                return res.json(unlikedPost);
            }
        } catch (err) {
            console.error(err);
        }
    };
}