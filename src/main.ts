import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router/indes'

import '@/assets/styles/index.scss';
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(Vant);
app.mount('#app')
