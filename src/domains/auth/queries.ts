import { createMutation, createQueries, createQuery, Mutation } from '@tanstack/svelte-query';
import { auth_services } from './services';
import type { loginPayload, registerPayload } from './types';

const login = () => {
	return createMutation({
		mutationFn: (payload: loginPayload) => auth_services.loginUser(payload),
		mutationKey: ['auth', 'login']
	});
};

const register = () => {
	return createMutation({
		mutationFn: (payload: registerPayload) => auth_services.registerUser(payload)
	});
};

export const logout = () => {
	return createMutation({
		mutationFn: () => auth_services.logout_user(),
		mutationKey: ['auth', 'logout']
	});
};

const session = () => {
	return createQuery({
		queryFn: () => auth_services.session_user(),
		queryKey: ['auth', 'session']
	});
};

export const authQueries = {
	login,
	register,
	logout,
	session
};
