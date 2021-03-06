import { Post } from "src/models/posts";
import { User } from "src/models/user";
import { UserModel } from "../schemas/user";

export class UserService {
    constructor() {}

    get = async () => {
        const users = await UserModel.find();

        return users;
    };

    checkRegistration = async (user: User) => {
        const usernameExists = await UserModel.countDocuments({
            username: user.username,
        });

        return usernameExists;
    };

    create = async (user: User) => {
        // REMOVE CODE BETWEEN COMMENTS
        // REDUNDANT - ALREADY CHECKING FOR USER ON CHECKREGISTRATION ABOVE
        const usernameExists = await UserModel.countDocuments({
            username: user.username,
        });
        if (usernameExists === 1) {
            console.log("invalid username");
        }
        // REMOVE PROBABLY
        const newUser = new UserModel(user);
        const savedUser: User = await newUser.save();
        return savedUser;
    };

    login = async (user: User) => {
        const userInfo = await UserModel.findOne({
            email: user.email,
            password: user.password,
        });
        return userInfo;
    };

    follow = async (follower: any, following: any) => {
        const followingInfo = await UserModel.findByIdAndUpdate(follower, {
            $push: { following: following },
        });
        const followerInfo = await UserModel.findByIdAndUpdate(following, {
            $push: { followers: follower },
        });

        return { followingInfo, followerInfo };
    };

    unfollow = async (follower: any, following: any) => {
        const unfollowingInfo = await UserModel.findByIdAndUpdate(follower, {
            $pull: { following: following },
        });
        const unfollowerInfo = await UserModel.findByIdAndUpdate(following, {
            $pull: { followers: follower },
        });

        return { unfollowingInfo, unfollowerInfo };
    };

    update = async (user: User, token: string) => {
        const { username, email, password } = user;
        const data = {
            username,
            email,
            password,
        };

        await UserModel.findOneAndUpdate({ _id: token }, { $set: data });
    };

    delete = async (token: any) => {
        const deletedUser = await UserModel.findOneAndDelete(token);
        return deletedUser;
    };
}
