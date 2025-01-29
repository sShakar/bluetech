import axios from 'axios';
import type { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import storageService from '@/services/storageService';
import logoutUser from '@/helpers/logoutUser';

/**
 *  @description Initialize axios instance with default configuration
 */
export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BASE_API
});

axiosInstance.interceptors.request.use(requestCallback, errorCallback);
axiosInstance.interceptors.response.use(responseCallback, errorCallback);
axiosInstance.defaults.timeout = 15000; // 15 seconds  1000 * seconds

function requestCallback(config: InternalAxiosRequestConfig) {
	if (config.headers && storageService.getToken())
		config.headers['Authorization'] = `Bearer ${storageService.getToken()}`;
	return config;
}
async function responseCallback(response: AxiosResponse) {
	return response.data;
}
function errorCallback(error: AxiosError) {
	if (error.response?.status === 401) logoutUser();
	return Promise.reject(error.response?.data);
}
