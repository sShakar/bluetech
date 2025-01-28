import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig(() => ({
	plugins: [
		vue({
			template: { transformAssetUrls }
		}),
		vueDevTools(),
		vueJsx(),
		quasar({})
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	server: {
		host: '0.0.0.0',
		port: 8080
	}
}));
