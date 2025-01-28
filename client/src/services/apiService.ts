import type { AxiosRequestConfig } from 'axios';
import { axiosInstance } from '@/plugins/axios';

class APIService {
	get<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
		return axiosInstance.get(path, config);
	}

	post<T, P = null>(path: string, data?: T, config?: AxiosRequestConfig): Promise<P> {
		return axiosInstance.post(path, data, config);
	}

	patch<T, P = null>(path: string, data: T, config?: AxiosRequestConfig): Promise<P> {
		return axiosInstance.patch(path, data, config);
	}

	delete<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
		return axiosInstance.delete(path, config);
	}
}

const $api = new APIService();

export default $api;
