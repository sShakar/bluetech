import { defineStore } from 'pinia';
import $api from '@/services/apiService';
import storageService from '@/services/storageService';
import type { IAuth, IUser } from '@/types/authTypes';

interface IAuthState {
	user: IUser;
	isChangePassword: boolean;
}

/**
 * sidebar store module
 * */
export const useAuthStore = defineStore('AuthStore', {
	state: (): IAuthState => ({
		user: {} as IUser,
		isChangePassword: false
	}),
	actions: {
		hasPermission(keywords: Array<string>): boolean {
			// return keywords.includes(String(this.user.role));
			return keywords.includes('all');
		},
		toggleChangePassword() {
			this.isChangePassword = !this.isChangePassword;
		},
		async fetchUser(credentials: { username: string; password: string }): Promise<void> {
			try {
				const data = await $api.post<typeof credentials, IAuth>('login', credentials);
				storageService.saveToken(data.token);
				this.user = data.user;
			} catch (error) {
				throw new Error(error.message);
			}
		},
		async fetchMe(): Promise<void> {
			try {
				this.user = await $api.get<{ user: IUser }>(`users/me`).then(res => res.user);
			} catch (error) {
				throw new Error(error.message);
			}
		}
	}
});
