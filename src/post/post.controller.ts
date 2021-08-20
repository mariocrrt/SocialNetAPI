import { PostService } from "./post.service";
import { Request, Response } from "express";
import { Post } from "src/models/posts";

export class PostController {
    private postService: PostService = new PostService();
    constructor() {}

    //  CREATE POST
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

    //  COMMENT POST
    comment = async (req: Request, res: Response) => {
        try {
            const comment = await this.postService.comment(req.body);

            return res.json(comment);
        } catch (err) {
            console.error(err);
        }
    };

    //  DELETE COMMENT
    deletecomment = async (req: Request, res: Response) => {
        try {
            const deletedComment = await this.postService.deletecomment(
                req.body,
                req.headers.authorization as string
            );

            res.json(deletedComment);
        } catch (err) {
            console.error(err);
        }
    };

    //  LIKE/UNLIKE POST
    like = async (req: Request, res: Response) => {
        const postId = req.body._id;
        let action = "like";

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

    //  UPDATE POST
    update = async (req: Request, res: Response) => {
        try {
            const updatedPost = await this.postService.update(
                req.body,
                req.headers.authorization as string
            );

            res.json(updatedPost);
        } catch (err) {
            console.error(err);
        }
    };

    //  DELETE POST
    delete = async (req: Request, res: Response) => {
        try {
            const deletedPost = await this.postService.delete(
                req.body,
                req.headers.authorization as string
            );

            res.json(deletedPost);
        } catch (err) {
            console.error(err);
        }
    };
}
