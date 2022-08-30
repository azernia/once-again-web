import axios from "axios";
import {ElMessage} from "element-plus";

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
    if (resp.status === 200 && resp.data.code === 200) {
        ElMessage({
            message: resp.data.msg,
            type: 'success'
        });
    }
    return Promise.resolve(resp.data);
}, error => {
    ElMessage.error(error.message);
    return Promise.reject(error);
});

export default api;
