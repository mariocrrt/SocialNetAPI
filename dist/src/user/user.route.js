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
exports.UserRoute = void 0;
var express = __importStar(require("express"));
var user_controller_1 = require("./user.controller");
var UserRoute = /** @class */ (function () {
    function UserRoute() {
        var _this = this;
        this.controller = new user_controller_1.UserController();
        this._routes = express.Router();
        this.routes = function () {
            return _this._routes;
        };
        this._routes.get("/", this.controller.get);
        this._routes.post("/", this.controller.create);
        this._routes.put("/:id", this.controller.update);
        this._routes.delete("/:id", this.controller.delete);
    }
    return UserRoute;
}());
exports.UserRoute = UserRoute;
