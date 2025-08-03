import { api_client } from '../../common/helpers/api-client';
import type { User } from '../user/type';
import type { loginPayload, registerPayload } from './types';

class AuthServices {
	public loginUser = (payload: loginPayload): Promise<void> => {
		return api_client<void>({
			method: 'POST',
			url: '/auth/login',
			data: payload
		});
	};

	public registerUser = (payload: registerPayload): Promise<void> => {
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

	public logout_user = (): Promise<void> => {
		return api_client<void>({
			method: 'DELETE',
			url: '/auth/logout'
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
