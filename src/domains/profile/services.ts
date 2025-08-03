import { api_client } from '../../common/helpers/api-client';
import type { Profile } from './type';

class ProfileService {
	avatar: File | null = null;

	public getProfile = (): Promise<{ data: Profile }> => {
		return api_client<{ data: Profile }>({
			method: 'GET',
			url: '/profile'
		});
	};

	public updateAvatar = (): Promise<void> => {
		const formData = new FormData();
		if (this.avatar) {
			formData.append('avatar', this.avatar);
		}
		return api_client<void>({
			method: 'PATCH',
			url: '/profile',
			data: formData
		});
	};
}

export const profileServices = new ProfileService();
