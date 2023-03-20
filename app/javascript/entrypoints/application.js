import { createApp } from 'vue';
import App from '@/src/components/App.vue';
import '@/src/assets/scss/style.scss';
import * as bootstrap from 'bootstrap';

createApp(App).use(bootstrap).mount('#app');
