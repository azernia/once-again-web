import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'

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