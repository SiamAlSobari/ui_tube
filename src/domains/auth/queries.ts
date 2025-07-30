import { createMutation, Mutation } from "@tanstack/svelte-query"
import type { login_payload } from "./type"
import { login_user } from "./services"

export const login_mutation = () => {
    return createMutation({
        mutationFn: (payload: login_payload) => login_user(payload),
        mutationKey: ['auth', 'login']
    })
}