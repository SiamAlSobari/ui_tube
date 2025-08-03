export interface loginPayload {
    email: string;
    password: string;
}

export interface registerPayload {
    name: string;
    user_name: string;
    email: string;
    password: string;
    confirm_password: string;
}