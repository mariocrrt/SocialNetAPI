"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
var post_service_1 = require("./post.service");
var PostController = /** @class */ (function () {
    function PostController() {
        var _this = this;
        this.postService = new post_service_1.PostService();
        //  CREATE POST
        this.create = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var createdPost, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.postService.create(req.body, req.headers.authorization)];
                    case 1:
                        createdPost = _a.sent();
                        return [2 /*return*/, res.json(createdPost)];
                    case 2:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        //  COMMENT POST
        this.comment = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var comment, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.postService.comment(req.body)];
                    case 1:
                        comment = _a.sent();
                        return [2 /*return*/, res.json(comment)];
                    case 2:
                        err_2 = _a.sent();
                        console.error(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        //  DELETE COMMENT
        this.deletecomment = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var deletedComment, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.postService.deletecomment(req.body, req.headers.authorization)];
                    case 1:
                        deletedComment = _a.sent();
                        res.json(deletedComment);
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        console.error(err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        //  LIKE/UNLIKE POST
        this.like = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var postId, action, likedPost, unlikedPost, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postId = req.body._id;
                        action = "like";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (!(action === "like")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.postService.like(postId)];
                    case 2:
                        likedPost = _a.sent();
                        return [2 /*return*/, res.json(likedPost)];
                    case 3:
                        if (!(action === "unlike")) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.postService.unlike(postId)];
                    case 4:
                        unlikedPost = _a.sent();
                        return [2 /*return*/, res.json(unlikedPost)];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        err_4 = _a.sent();
                        console.error(err_4);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        //  UPDATE POST
        this.update = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var updatedPost, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.postService.update(req.body, req.headers.authorization)];
                    case 1:
                        updatedPost = _a.sent();
                        res.json(updatedPost);
                        return [3 /*break*/, 3];
                    case 2:
                        err_5 = _a.sent();
                        console.error(err_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        //  DELETE POST
        this.delete = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var deletedPost, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.postService.delete(req.body, req.headers.authorization)];
                    case 1:
                        deletedPost = _a.sent();
                        res.json(deletedPost);
                        return [3 /*break*/, 3];
                    case 2:
                        err_6 = _a.sent();
                        console.error(err_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    }
    return PostController;
}());
exports.PostController = PostController;
