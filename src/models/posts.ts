export interface Post {
    title: string;
    description: string;
    likes?: number;
    comments?: Array<string>;
}
