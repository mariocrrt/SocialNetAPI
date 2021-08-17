"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRoute = void 0;
var express = __importStar(require("express"));
var post_controller_1 = require("./post.controller");
var PostRoute = /** @class */ (function () {
    function PostRoute() {
        var _this = this;
        this.controller = new post_controller_1.PostController();
        this._routes = express.Router();
        this.routes = function () {
            return _this._routes;
        };
        this._routes.post("/create", this.controller.create);
        this._routes.put("/like", this.controller.like);
        this._routes.delete("/delete", this.controller.delete);
    }
    return PostRoute;
}());
exports.PostRoute = PostRoute;
