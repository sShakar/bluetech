import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'home',
		redirect: '/dashboard',
		component: () => import('@/layouts/MainLayout.vue'),
		children: [
			{
				name: 'dashboard',
				path: 'dashboard',
				component: () => import('@/views/DashboardView.vue')
			},
			{
				name: 'about',
				path: 'about',
				component: () => import('@/views/AboutView.vue')
			}
		]
	},
	{
		path: '/',
		component: () => import('@/layouts/AuthLayout.vue'),
		children: [
			{
				name: 'sign-in',
				path: 'sign-in',
				component: () => import('@/views/LoginPage.vue')
			}
		]
	},
	{
		name: 'not-found',
		path: '/:catchAll(.*)*',
		component: () => import('@/views/ErrorNotFound.vue')
	}
];

export default routes;
