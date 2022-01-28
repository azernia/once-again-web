import Vue from "vue";
import VueRouter from "vue-router";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Message from "@/pages/Message";
import News from "@/pages/News";
import Detail from "@/pages/Detail";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'detail',
                            path: 'detail',
                            // path: 'detail/:id/:title',
                            component: Detail,
                            // props: {
                            //     a: 1,
                            //     b: 2
                            // }
                            props: true
                        }
                    ]
                }
            ]
        },
    ]
});