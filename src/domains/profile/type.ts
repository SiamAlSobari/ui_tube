import type { User } from "../user/type";

export type Profile = {
    id: string;
    name: string;
    user_name: string;
    email: string;
    created_at: string;
    updated_at: string;
    user:User
};