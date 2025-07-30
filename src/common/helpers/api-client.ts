import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

const axios_instance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	withCredentials: true
});

export const api_client = async <T>(config: AxiosRequestConfig): Promise<T> => {
	const respone = await axios_instance.request<T>(config);
	return respone.data;
};
