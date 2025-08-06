import { api_client } from '../../common/helpers/api-client';
import type { createPost } from './type';

class PostService {
	public async createVideoPost(payload: createPost) {
		const formData = new FormData();
		formData.append('title', payload.title);
		formData.append('caption', payload.caption);
		formData.append('thumbnail', payload.thumbnail || '');
		formData.append('video', payload.video || '');
        payload.categorysId.forEach((id, _index)=>{
            formData.append('categorysId', id);
        })
		return api_client<any>({
			method: 'POST',
			url: '/posts/video',
			data: payload
		});
	}
}

export const post_services = new PostService();