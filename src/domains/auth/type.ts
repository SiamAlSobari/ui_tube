export interface login_payload {
    email: string;
    password: string;
}

export interface register_payload {
    name: string;
    user_name: string;
    email: string;
    password: string;
    confirm_password: string;
}