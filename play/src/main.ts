import { createApp } from 'vue';
import { NIcon } from 'dnhyxc-ui';
import App from './App.vue';

const app = createApp(App);
app.use(NIcon);
app.mount('#app');
