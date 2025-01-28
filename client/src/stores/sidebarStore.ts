import { defineStore } from 'pinia';
import type { ISidebar } from '@/types/sidebarTypes';

interface ISidebarState {
	sidebar: boolean;
	sidebarItems: Array<ISidebar>;
}

/**
 * sidebar store module
 * */
export const useSidebarStore = defineStore('SidebarStore', {
	state: (): ISidebarState => ({
		sidebar: true,
		sidebarItems: [
			{
				id: generateUUID(),
				title: 'Home',
				icon: 'mdi-view-dashboard-variant-outline',
				activeIcon: 'mdi-view-dashboard-variant',
				permission: ['all'],
				to: '/dashboard'
			},
			{
				id: generateUUID(),
				title: 'About',
				icon: 'mdi-account-group-outline',
				activeIcon: 'mdi-account-group',
				permission: ['all'],
				to: '/about'
			}
		]
	}),
	actions: {
		toggleSidebar(): void {
			this.sidebar = !this.sidebar;
		}
	}
});

function generateUUID(): string {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
		const r = (Math.random() * 16) | 0;
		const v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}
