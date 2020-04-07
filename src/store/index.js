import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const store = new Vuex.Store({
    // data
    state:{
        userInfo: JSON.parse(window.localStorage.getItem('userInfo')),
        projects: JSON.parse(window.localStorage.getItem('projects'))
    },
    // 计算属性
    getters:{

    },
    // methods
    mutations:{
        // 获取用户的登录信息
        setUserInfo: (state,value)=>{
            state.userInfo = value;
            window.localStorage.setItem('userInfo',JSON.stringify(value));
        },
        // 登出清除登录状态
        logout:(state)=>{
            state.userInfo = null;
            window.localStorage.removeItem('userInfo');
        },
        updateProjects:(state,value)=>{
            state.projects.push(value);
            window.localStorage.setItem('projects',JSON.stringify(state.projects));
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