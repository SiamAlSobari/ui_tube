import { api_client } from '../../common/helpers/api-client';
import type { login_payload } from './type';

export const login_user = (payload: login_payload): Promise<void> => {
	return api_client<void>({
		method: 'POST',
		url: '/auth/login',
		data: payload
	});
};