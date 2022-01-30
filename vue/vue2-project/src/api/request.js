// axios 二次封装
import axios from "axios";

const requests = axios.create({
    baseURL: '/api',
    timeout: 5000
});
// 请求拦截器
requests.interceptors.request.use((config) => {
    // config 包含 headers
    return config;
});
// 响应拦截器
requests.interceptors.response.use(
    (resp) => {
        return resp.data;
    },
    (error) => {
        // 终止 Promise 栈
        return Promise.reject(new Error(error.message));
    }
);

// 对外暴露
export default axios;