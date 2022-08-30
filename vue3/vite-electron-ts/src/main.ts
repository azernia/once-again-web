// import './samples/node-api'
import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";

import './assets/scss/main.scss'

const app = createApp(App);
app.use(router);
app.mount('#app').$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
});
