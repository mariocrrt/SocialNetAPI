import { Post } from "./posts";
import { Role } from "./role";

export interface User {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    role?: Role;
    followers?: Array<User>;
    following?: Array<User>;
    posts?: Array<Post>;
}
