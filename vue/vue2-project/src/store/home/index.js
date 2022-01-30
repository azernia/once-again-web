// home 仓库
import {reqCategoryList} from "@/api";

// Vuex 存储的数据
const state = {
    categoryList: []
}

// 修改 state 的唯一手段
const mutations = {
    CATEGORYLIST(store, categoryList) {
        state.categoryList = categoryList;
    }
}

// 处理 action 可以写业务逻辑和异步
const actions = {
    async categoryList({commit}) {
        let resp = await reqCategoryList();
        if(resp.code === 200) {
            commit('CATEGORYLIST', resp.data);
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