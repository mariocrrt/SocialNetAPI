import * as express from "express";
import { UserController } from "./user.controller";

export class UserRoute {
    private controller: UserController = new UserController();
    private _routes: express.Router = express.Router();

    constructor() {
        this._routes.get("/", this.controller.get);
        this._routes.post("/register", this.controller.create);
        this._routes.post("/login", this.controller.login);
        this._routes.post("/follow", this.controller.follow);
        this._routes.put("/update", this.controller.update);
        this._routes.delete("/delete", this.controller.delete);
    }

    routes = () => {
        return this._routes;
    };
}
