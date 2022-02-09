// API 统一管理
import requests from "@/api/request";
// mock API
import mockReq from "@/api/mock";

// 三级联动接口
export const reqCategoryList = () => requests({
    url: '/product/getBaseCategoryList',
    method: 'GET'
});

// banner 轮播图
export const reqBannerList = () => mockReq({
    url: '/banner',
    method: 'GET'
});