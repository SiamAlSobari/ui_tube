import { api_client } from '../../common/helpers/api-client';
import type { Category } from './type';

class CategoryServices {
	public getCategories = (): Promise<Category[]> => {
		return api_client<Category[]>({
			method: 'GET',
			url: '/categories'
		});
	};
}

export const categoryServices = new CategoryServices();