import router from '@/router';
import storageService from '@/services/storageService';

/**
 * @description Logout user and reset all stores
 */
export default function logoutUser() {
	storageService.clear();
	router.replace({ name: 'sign-in' });
}
