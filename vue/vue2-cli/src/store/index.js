import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

const actions = {
    add(context,value) {
        context.commit('ADD', value);
    },
    decrease(context, value) {
        context.commit('DECREASE', value);
    },
    addOdd(context, value) {
        if(context.state.sum % 2 !== 0) {
            context.commit('ADDODD', value);
        }
    }
}

const mutations = {
    ADD(state, value) {
        state.sum += value;
    },
    DECREASE(state, value) {
        state.sum -= value;
    },
    ADDODD(state, value) {
        state.sum += value;
    },
    ADD_PERSON(state, value) {
        state.persons.push(value);
    }
}

const state = {
    sum: 0,
    persons: [
        {id: '001', name: '123'}
    ]
}

export default new Vuex.Store({
    actions,
    mutations,
    state
});