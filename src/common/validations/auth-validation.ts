import z from "zod";

export const loginValidation = z.object({
    email: z.string().email("Email tidak valid"),
    password: z.string().min(6, "Password minimal 6 karakter"),
})


export const registerValidation = loginValidation.extend({
    name: z.string().min(3, "Nama minimal 3 karakter"),
    userName : z.string().min(3, "Username minimal 3 karakter"),
    confirmPassword: z.string().min(6, "Konfirmasi password minimal 6 karakter"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password dan konfirmasi password tidak cocok",
})

export type loginValidationType = z.infer<typeof loginValidation>;
export type registerValidationType = z.infer<typeof registerValidation>;