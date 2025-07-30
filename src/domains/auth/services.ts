import { api_client } from '../../common/helpers/api-client';
import type { login_payload, register_payload } from './types';

export const login_user = (payload: login_payload): Promise<void> => {
	return api_client<void>({
		method: 'POST',
		url: '/auth/login',
		data: payload
	});
};

export const register_user = (payload: register_payload): Promise<void> => {
	return api_client<void>({
		method: 'POST',
		url: '/auth/register',
		data: {
			name: payload.name,
			userName: payload.user_name,
			email: payload.email,
			password: payload.password
		}
	});
};
