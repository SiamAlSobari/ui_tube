import { createMutation, createQuery, useQueryClient } from '@tanstack/svelte-query';
import { profileServices } from './services';

const getProfile = () => {
	return createQuery({
		queryFn: () => profileServices.getProfile(),
		queryKey: ['profile']
	});
};

const updateAvatar = (onSuccess: () => void) => {
	const queryClient = useQueryClient();
	return createMutation({
		mutationFn: () => profileServices.updateAvatar(),
		mutationKey: ['profile', 'avatar'],
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['profile']
			});
			onSuccess();
		}
	});
};

export const profileQueries = {
	getProfile,
	updateAvatar
};
