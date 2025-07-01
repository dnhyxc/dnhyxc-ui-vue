import { createApp } from 'vue';
import Icon from '@dnhyxc-ui/components/icon';
import App from './App.vue';

const app = createApp(App);
app.use(Icon);
app.mount('#app');
