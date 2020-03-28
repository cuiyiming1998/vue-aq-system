import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const store = new Vuex.Store({
    // data
    state,
    // 计算属性
    getters,
    // methods
    mutations,
    // 异步方法
    actions,
    // 模块
    modules:{

    }
})

export default store;