// home 仓库
import {reqCategoryList, reqBannerList} from "@/api";

// Vuex 存储的数据
const state = {
    // 分类
    categoryList: [],
    // 轮播图
    bannerList: []
}

// 修改 state 的唯一手段
const mutations = {
    CATEGORY_LIST(store, categoryList) {
        state.categoryList = categoryList;
    },
    BANNER_LIST(store, bannerList) {
        state.bannerList = bannerList;
    }
}

// 处理 action 可以写业务逻辑和异步
const actions = {
    async categoryList({commit}) {
        let resp = await reqCategoryList();
        if(resp.code === 200) {
            commit('CATEGORY_LIST', resp.data);
        }
    },
    async bannerList({commit}) {
        let resp = await reqBannerList();
        if(resp.code === 200) {
            commit('BANNER_LIST', resp.data);
        }
    }
}

// 让组件获取仓库的数据更加方便
const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}