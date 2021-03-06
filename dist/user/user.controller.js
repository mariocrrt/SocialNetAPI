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
exports.UserController = void 0;
var user_service_1 = require("./user.service");
var UserController = /** @class */ (function () {
    function UserController() {
        var _this = this;
        this.userService = new user_service_1.UserService();
        //  GET ALL USERS
        this.get = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.get()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, res.json(users)];
                }
            });
        }); };
        //  REGISTER
        this.create = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var checkUser, user, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.userService.checkRegistration(req.body)];
                    case 1:
                        checkUser = _a.sent();
                        if (checkUser === 1) {
                            return [2 /*return*/, res.json("Username already registered.")];
                        }
                        return [4 /*yield*/, this.userService.create(req.body)];
                    case 2:
                        user = _a.sent();
                        res.json(user);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        //  LOGIN
        this.login = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var user, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userService.login(req.body)];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            return [2 /*return*/, res.json("login!")];
                        }
                        else {
                            return [2 /*return*/, res.json("wrong email or password")];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.error(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        //  UPDATE USER INFO
        this.update = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var updatedUserInfo, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userService.update(req.body, req.headers.authorization)];
                    case 1:
                        updatedUserInfo = _a.sent();
                        return [2 /*return*/, res.json(updatedUserInfo)];
                    case 2:
                        err_3 = _a.sent();
                        console.error(err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        //  DELETE USER
        this.delete = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var deletedUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.delete(req.headers.authorization)];
                    case 1:
                        deletedUser = _a.sent();
                        return [2 /*return*/, deletedUser];
                }
            });
        }); };
        //  FOLLOW/UNFOLLOW
        this.follow = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, follower, following, action, _b, followingInfo, followerInfo, _c, unfollowingInfo, unfollowerInfo, err_4;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = req.body, follower = _a.follower, following = _a.following;
                        action = "unfollow";
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, , 7]);
                        if (!(action === "follow")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.userService.follow(follower, following)];
                    case 2:
                        _b = _d.sent(), followingInfo = _b.followingInfo, followerInfo = _b.followerInfo;
                        return [3 /*break*/, 5];
                    case 3:
                        if (!(action === "unfollow")) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.userService.unfollow(follower, following)];
                    case 4:
                        _c = _d.sent(), unfollowingInfo = _c.unfollowingInfo, unfollowerInfo = _c.unfollowerInfo;
                        _d.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        err_4 = _d.sent();
                        console.error(err_4);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
    }
    return UserController;
}());
exports.UserController = UserController;
