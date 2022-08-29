import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VUE_APP_BASE_URL,
    timeout: 3000
});

// request 拦截器
api.interceptors.request.use(config => {
    return config;
}, error => Promise.reject(error));

// request 拦截器
api.interceptors.response.use(resp => {
    return Promise.resolve(resp.data);
}, error => Promise.reject(error));

export default api;
