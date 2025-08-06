import { createQuery } from '@tanstack/svelte-query';
import { categoryServices } from './services';

const getCategories = () => {
	return createQuery({
		queryFn: () => categoryServices.getCategories(),
		queryKey: ['categories']
	});
};

export const categoryQueries = {
    getCategories
};
