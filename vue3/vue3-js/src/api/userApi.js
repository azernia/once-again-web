import api from '@/utils/requestUtil';

const prefix = 'zone/admin/user';

export const getUserList = () => api.get(`${prefix}/list`);
