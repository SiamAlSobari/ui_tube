import { api_client } from '../../common/helpers/api-client';
import type { User } from '../user/type';
import type { login_payload, register_payload } from './types';

class AuthServices {
	public login_user = (payload: login_payload): Promise<void> => {
		return api_client<void>({
			method: 'POST',
			url: '/auth/login',
			data: payload
		});
	};

	public register_user = (payload: register_payload): Promise<void> => {
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

	public session_user = (): Promise<User> => {
		return api_client<User>({
			method: 'GET',
			url: '/auth/session'
		});
	};
}

export const auth_services = new AuthServices();
