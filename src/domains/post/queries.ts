import { createMutation } from "@tanstack/svelte-query";
import type { createPost } from "./type";
import { post_services } from "./services";

const createPostVideo = () => {
    return createMutation({
        mutationFn: (payload:createPost) => post_services.createVideoPost(payload),
        mutationKey: ['post', 'video']
    })
};

const createPostShort = () => {
    return createMutation({
        mutationFn: (payload:createPost) => post_services.createShortPost(payload),
        mutationKey: ['post', 'short']
    })
};

export const postQueries = {
    createPostVideo,
    createPostShort
};