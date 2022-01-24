//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
// 全局引入
// 可以引用多个 以 , 分割
// 如果本地有则以本地的为主
// 生命周期中的不以任何的为主
import {hunhe,hunhe2} from './mixin'
//关闭Vue的生产提示
Vue.config.productionTip = false

Vue.mixin(hunhe)
Vue.mixin(hunhe2)


//创建vm
new Vue({
	el:'#app',
	render: h => h(App)
})