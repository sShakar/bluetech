import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import storageService from '@/services/storageService';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

// router.beforeEach(async (to, from, next) => {
// 	if (to.name !== 'sign-in' && !storageService.getToken()) {
// 		next({ name: 'sign-in' });
// 	} else if (to.name === 'sign-in' && storageService.getToken()) {
// 		next({ path: '/' });
// 	} else {
// 		next();
// 	}
// });

export default router;
