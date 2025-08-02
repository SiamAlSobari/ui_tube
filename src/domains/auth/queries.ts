import { createMutation, createQueries, createQuery, Mutation } from '@tanstack/svelte-query';
import type { login_payload, register_payload } from './types';
import { auth_services } from './services';

const login = () => {
	return createMutation({
		mutationFn: (payload: login_payload) => auth_services.login_user(payload),
		mutationKey: ['auth', 'login']
	});
};

const register = () => {
	return createMutation({
		mutationFn: (payload: register_payload) => auth_services.register_user(payload)
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

export const auth_queries = {
	login,
	register,
	logout,
	session
};
