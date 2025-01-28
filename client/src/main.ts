import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { options, Quasar } from '@/plugins/quasar';

import '@/assets/scss/main.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, options);

app.mount('#app');
