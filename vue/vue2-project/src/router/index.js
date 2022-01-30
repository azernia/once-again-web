import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'

// 保存原 push 方法
let originPush = VueRouter.prototype.push;
// 保存原 replace 方法
let originReplace = VueRouter.prototype.replace;
// 重写 push 方法
VueRouter.prototype.push = function(location, resolve, reject) {
    if(resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, ()=>{}, ()=>{});
    }
}
// 重写 replace 方法
VueRouter.prototype.replace = function(location, resolve, reject) {
    if(resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, ()=>{}, ()=>{});
    }
}

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {
                isShow: true
            }
        },
        {
            path: '/login',
            component: Login,
            meta: {
                isShow: false
            }
        },
        {
            name: 'search',
            path: '/search',
            component: Search,
            meta: {
                isShow: true
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                isShow: false
            }
        },
        // 重定向
        {
            path: '*',
            redirect: '/home'
        }
    ]
});