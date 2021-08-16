import { UserService } from "./user.service";
import { Request, Response } from "express";
import { User } from "src/models/user";

export class UserController {
    private userService: UserService = new UserService();
    constructor() {}

    //  GET ALL USERS
    get = async (req: Request, res: Response) => {
        const users = await this.userService.get();

        return res.json(users);
    };

    //  REGISTER
    create = async (req: Request, res: Response) => {
        try {
            let checkUser = await this.userService.checkRegistration(req.body);

            if (checkUser === 1) {
                return res.json("Username already registered.");
            }

            let user = await this.userService.create(req.body);

            res.json(user);
        } catch (err) {
            console.error(err);
        }
    };

    //  LOGIN
    login = async (req: Request, res: Response) => {
        try {
            console.log(req.body);
            let user: User = await this.userService.login(req.body);
            console.log(user);

            if (user) {
                return res.json("login!");
            } else {
                return res.json("wrong email or password");
            }
        } catch (err) {
            console.error(err);
        }
    };

    //  UPDATE USER INFO
    update = async (req: Request, res: Response) => {
        try {
            const updatedUserInfo = await this.userService.update(
                req.body,
                req.headers.authorization as string
            );

            return res.json(updatedUserInfo);
        } catch (err) {
            console.error(err);
        }
    };

    //  DELETE USER
    delete = async (req: Request, res: Response) => {
        const deletedUser = await this.userService.delete(
            req.headers.authorization as string
        );
        return deletedUser;
    };

    //  FOLLOW/UNFOLLOW
    follow = async (req: Request, res: Response) => {
        const { follower, following } = req.body;
        let action = "unfollow";

        try {
            if (action === "follow") {
                const { followingInfo, followerInfo } =
                    await this.userService.follow(follower, following);
            } else if (action === "unfollow") {
                const { unfollowingInfo, unfollowerInfo } =
                    await this.userService.unfollow(follower, following);
            }
        } catch (err) {
            console.error(err);
        }
    };
}
