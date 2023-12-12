import { createApp } from 'vue';
import ToastPlugin from 'vue-toast-notification';
import App from './App.vue';
import router from './router';

createApp(App).use(router).use(ToastPlugin).mount('#app');