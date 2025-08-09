import { createMutation, createQueries, createQuery, Mutation } from '@tanstack/svelte-query';
import { auth_services } from './services';
import type { loginPayload, registerPayload } from './types';
import { goto } from '$app/navigation';
import { toast } from 'svelte-sonner';

const login = () => {
	return createMutation({
		mutationFn: (payload: loginPayload) => auth_services.loginUser(payload),
		mutationKey: ['auth', 'login'],
		onSuccess: () => {
			toast.success('Login Berhasil');
			goto('/beranda');
		},
		onError: () => {
			toast.error('Login Gagal');
		}
	});
};

const register = () => {
	return createMutation({
		mutationFn: (payload: registerPayload) => auth_services.registerUser(payload),
		mutationKey: ['auth', 'register'],
		onSuccess: () => {
			toast.success('Register Berhasil');
			goto('/auth/login');
		},
		onError: () => {
			toast.error('Register Gagal');
		}
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
