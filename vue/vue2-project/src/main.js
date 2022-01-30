import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from "@/router";
// 引入 Vuex
import store from "@/store";

import TypeNav from "@/components/TypeNav";

Vue.config.productionTip = false

// 注册全局组件
Vue.component(TypeNav.name, TypeNav);

new Vue({
  render: h => h(App),
  router: router,
  store
}).$mount('#app')
