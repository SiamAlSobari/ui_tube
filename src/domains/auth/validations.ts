import z from "zod";

export const login_validation = z.object({
    email: z.string().email("Email tidak valid"),
    password: z.string().min(6, "Password minimal 6 karakter"),
})


export const register_validation = login_validation.extend({
    name: z.string().min(3, "Nama minimal 3 karakter"),
    user_name : z.string().min(3, "Username minimal 3 karakter"),
    confirm_password: z.string().min(6, "Konfirmasi password minimal 6 karakter"),
}).refine((data) => data.password === data.confirm_password, {
    message: "Password dan konfirmasi password tidak cocok",
    path: ["confirm_password"]
})

export type login_validation_type = z.infer<typeof login_validation>;
export type register_validation_type = z.infer<typeof register_validation>;