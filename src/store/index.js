import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const store = new Vuex.Store({
    // data
    state:{
        userInfo: window.localStorage.getItem('userInfo')
    },
    // 计算属性
    getters:{

    },
    // methods
    mutations:{
        // 获取用户的登录信息
        setUserInfo: (state,value)=>{
            state.userInfo = value;
            window.localStorage.setItem('userInfo',value);
        },
        // 登出清除登录状态
        logout:(state)=>{
            state.userInfo = null;
            window.localStorage.removeItem('userInfo');
        }
    },
    // 异步方法
    actions:{

    },
    // 模块
    modules:{

    }
})

export default store;