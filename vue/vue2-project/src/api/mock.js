// axios 二次封装
import axios from "axios";
// 引入进度条
import nprogress from 'nprogress';
import "nprogress/nprogress.css";

const mockReq = axios.create({
    baseURL: '/mock',
    timeout: 5000
});
// 请求拦截器
mockReq.interceptors.request.use((config) => {
    // 进度条开始
    nprogress.start();
    // config 包含 headers
    return config;
});
// 响应拦截器
mockReq.interceptors.response.use(
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
export default mockReq;