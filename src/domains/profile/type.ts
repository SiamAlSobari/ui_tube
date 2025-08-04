import type { User } from "../user/type";

export type Profile = {
    id: string;
    name: string;
    avatarUrl: string;
    bio: string;
    userName: string;
    created_at: string;
    updated_at: string;
    user:User
};