import { createQuery } from "@tanstack/svelte-query";
import { profile_services } from "./services";

const get_profile = () => {
    return createQuery({
        queryFn: () => profile_services.get_profile(),
        queryKey: ['profile']
    })
};

export const profile_queries = {
    get_profile
};