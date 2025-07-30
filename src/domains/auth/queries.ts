import { createMutation, Mutation } from '@tanstack/svelte-query';
import type { login_payload, register_payload } from './types';
import { login_user, register_user } from './services';

export const use_login = () => {
	return createMutation({
		mutationFn: (payload: login_payload) => login_user(payload),
		mutationKey: ['auth', 'login']
	});
};

export const use_register = () => {
	return createMutation({
		mutationFn: (payload: register_payload) => register_user(payload)
	});
};
