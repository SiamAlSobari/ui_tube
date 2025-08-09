import { api_client } from '../../common/helpers/api-client';
import type { createPost, Post } from './type';

class PostService {
	public async createVideoPost(payload: createPost) {
		const formData = new FormData();
		formData.append('title', payload.title);
		formData.append('caption', payload.caption);
		formData.append('thumbnail', payload.thumbnail!);
		formData.append('video', payload.video!);
        payload.categoryIds.forEach((id, _index)=>{
            formData.append('categoryIds[]', id);
        })
		return api_client<any>({
			method: 'POST',
			url: '/posts/video',
			data: formData
		});
	}


	public async createShortPost(payload: createPost) {
		const formData = new FormData();
		formData.append('title', payload.title);
		formData.append('caption', payload.caption);
		formData.append('thumbnail', payload.thumbnail!);
		formData.append('video', payload.video!);
        payload.categoryIds.forEach((id, _index)=>{
            formData.append('categoryIds[]', id);
        })
		return api_client<any>({
			method: 'POST',
			url: '/posts/video',
			data: formData
		});
	}

	public async getPostsVideoByUser():Promise<{data:Post[]}>{
		return api_client<{data:Post[]}>({
			method: 'GET',
			url: `/posts/user/video`
		})
	}
	public async getPostsShortByUser():Promise<{data:Post[]}>{
		return api_client<{data:Post[]}>({
			method: 'GET',
			url: `/posts/user/short`
		})
	}
}

export const post_services = new PostService();