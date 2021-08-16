import * as express from "express";
import { PostController } from "./post.controller";

export class PostRoute {
    private controller: PostController = new PostController();
    private _routes: express.Router = express.Router();

    constructor() {
        this._routes.post("/create", this.controller.create);
        this._routes.put("/like", this.controller.like);
        // this._routes.put("/unlike", this.controller.unlike);
    }

    routes = () => {
        return this._routes;
    };
}
