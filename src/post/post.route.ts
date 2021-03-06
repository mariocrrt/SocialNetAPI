import * as express from "express";
import { PostController } from "./post.controller";

export class PostRoute {
    private controller: PostController = new PostController();
    private _routes: express.Router = express.Router();

    constructor() {
        this._routes.post("/create", this.controller.create);
        this._routes.post("/comment", this.controller.comment);
        this._routes.delete("/comment/delete", this.controller.deletecomment);
        this._routes.put("/like", this.controller.like);
        this._routes.put("/", this.controller.update);
        this._routes.delete("/delete", this.controller.delete);
    }

    routes = () => {
        return this._routes;
    };
}
