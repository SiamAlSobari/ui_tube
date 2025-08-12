import { createMutation, createQuery, useQueryClient } from '@tanstack/svelte-query';
import type { createPost } from './type';
import { post_services } from './services';
import { toast } from 'svelte-sonner';

const createPostVideo = () => {
	const queryClient = useQueryClient();
	return createMutation({
		mutationFn: (payload: createPost) => post_services.createVideoPost(payload),
		mutationKey: ['post', 'video'],
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['post', 'video'] });
			toast.success('Video uploaded successfully');
		}
	});
};

const createPostShort = () => {
	const queryClient = useQueryClient();
	return createMutation({
		mutationFn: (payload: createPost) => post_services.createShortPost(payload),
		mutationKey: ['post', 'short'],
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['post', 'short'] });
			toast.success('Video uploaded successfully');
		}
	});
};

const getPostVideoByUser = () => {
	return createQuery({
		queryFn: () => post_services.getPostsVideoByUser(),
		queryKey: ['post', 'video']
	});
};

const getPostShortByUser = () => {
	return createQuery({
		queryFn: () => post_services.getPostsShortByUser(),
		queryKey: ['post', 'short']
	});
};

const getPostVideoDetail = (postId: string) => {
	return createQuery({
		queryFn: () => post_services.getPostVideoDetail(postId),
		queryKey: ['post', 'video', postId]
	});
};

export const postQueries = {
	createPostVideo,
	createPostShort,
	getPostVideoByUser,
	getPostShortByUser
};
