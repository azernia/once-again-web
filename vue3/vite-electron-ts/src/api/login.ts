import api from "../utils/requestUtil";


export const getCaptcha = () => api.get(`${import.meta.env.VITE_APP_PREFIX}/oauth2/admin/user/getCaptcha`);
