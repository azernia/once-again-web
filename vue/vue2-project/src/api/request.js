// axios 二次封装
import axios from "axios";
// 引入进度条
import nprogress from 'nprogress';
import "nprogress/nprogress.css";

const requests = axios.create({
    baseURL: '/api',
    timeout: 5000
});
// 请求拦截器
requests.interceptors.request.use((config) => {
    // 进度条开始
    nprogress.start();
    // config 包含 headers
    return config;
});
// 响应拦截器
requests.interceptors.response.use(
    (resp) => {
        nprogress.done();
        return resp.data;
    },
    (error) => {
        // 终止 Promise 栈
        return Promise.reject(new Error(error.message));
    }
);

// 对外暴露
export default requests;